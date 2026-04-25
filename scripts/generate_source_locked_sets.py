#!/usr/bin/env python3
"""Generate source-locked AP practice sets from CrackAP + AP Central assets."""

from __future__ import annotations

import html
import json
import re
import subprocess
from collections import defaultdict
from pathlib import Path
from typing import Iterable
from urllib.parse import urlparse


ROOT = Path("/Users/kevinmacbookpro/Documents/ap-exam-practice")
OUTPUT_JS = ROOT / "ap_custom_sets.js"
ASSET_ROOT = ROOT / "assets" / "source-lock"
OFFICIAL_ROOT = ASSET_ROOT / "official"

CRACKAP_BASE = "https://www.crackap.com"


SUBJECTS = [
    {
        "key": "chem",
        "title": "AP Chemistry",
        "icon": "⚗",
        "toneClass": "chem",
        "cardToneClass": "chem-num",
        "countLabel": "3 source-locked practice sets",
    },
    {
        "key": "stats",
        "title": "AP Statistics",
        "icon": "📈",
        "toneClass": "stats",
        "cardToneClass": "stats-num",
        "countLabel": "3 source-locked practice sets",
    },
    {
        "key": "ush",
        "title": "AP United States History",
        "icon": "🇺🇸",
        "toneClass": "ush",
        "cardToneClass": "ush-num",
        "countLabel": "3 source-locked practice sets",
    },
]


FRQ_DOWNLOADS = {
    "chem": {
        2025: {
            "frq": "https://apcentral.collegeboard.org/media/pdf/ap25-frq-chemistry.pdf",
            "sg": "https://apcentral.collegeboard.org/media/pdf/ap25-sg-chemistry.pdf",
        },
        2024: {
            "frq": "https://apcentral.collegeboard.org/media/pdf/ap24-frq-chemistry.pdf",
            "sg": "https://apcentral.collegeboard.org/media/pdf/ap24-sg-chemistry.pdf",
        },
        2023: {
            "frq": "https://apcentral.collegeboard.org/media/pdf/ap23-frq-chemistry.pdf",
            "sg": "https://apcentral.collegeboard.org/media/pdf/ap23-sg-chemistry.pdf",
        },
    },
    "stats": {
        2025: {
            "frq": "https://apcentral.collegeboard.org/media/pdf/ap25-frq-statistics.pdf",
            "sg": "https://apcentral.collegeboard.org/media/pdf/ap25-sg-statistics.pdf",
        },
        2024: {
            "frq": "https://apcentral.collegeboard.org/media/pdf/ap24-frq-statistics.pdf",
            "sg": "https://apcentral.collegeboard.org/media/pdf/ap24-sg-statistics.pdf",
        },
        2023: {
            "frq": "https://apcentral.collegeboard.org/media/pdf/ap23-frq-statistics.pdf",
            "sg": "https://apcentral.collegeboard.org/media/pdf/ap23-sg-statistics.pdf",
        },
    },
    "ush": {
        2025: {
            "frq": "https://apcentral.collegeboard.org/media/pdf/ap25-frq-us-history-set-1.pdf",
            "sg": "https://apcentral.collegeboard.org/media/pdf/ap25-sg-us-history-set-1.pdf",
        },
        2024: {
            "frq": "https://apcentral.collegeboard.org/media/pdf/ap24-frq-us-history-set-1.pdf",
            "sg": "https://apcentral.collegeboard.org/media/pdf/ap24-sg-us-history-set-1.pdf",
        },
        2023: {
            "frq": "https://apcentral.collegeboard.org/media/pdf/ap23-frq-us-history-set-1.pdf",
            "sg": "https://apcentral.collegeboard.org/media/pdf/ap23-sg-us-history-set-1.pdf",
        },
    },
}


CHEM_TESTS = list(range(33, 47))
STATS_TESTS = list(range(41, 67))
USH_TESTS = list(range(33, 41))


def curl_text(url: str) -> str:
    result = subprocess.run(
        ["curl", "-Lks", url],
        check=True,
        capture_output=True,
        text=True,
    )
    return result.stdout


def curl_file(url: str, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists() and path.stat().st_size > 0:
        return
    subprocess.run(["curl", "-Lks", "-o", str(path), url], check=True)


def subject_path(subject_key: str) -> str:
    return {
        "chem": "chemistry",
        "stats": "statistics",
        "ush": "us-history",
    }[subject_key]


def fix_relative_sources(fragment: str) -> str:
    fragment = re.sub(
        r'src="(/[^"]+)"',
        lambda match: f'src="{CRACKAP_BASE}{match.group(1)}"',
        fragment,
    )
    fragment = re.sub(
        r'href="(/[^"]+)"',
        lambda match: f'href="{CRACKAP_BASE}{match.group(1)}"',
        fragment,
    )
    return fragment


def strip_tags(value: str) -> str:
    value = re.sub(r"<[^>]+>", " ", value)
    return " ".join(html.unescape(value).split())


def localize_images(fragment: str, subject_key: str) -> str:
    def replace(match: re.Match[str]) -> str:
        url = match.group(1)
        parsed = urlparse(url)
        local_path = ASSET_ROOT / subject_key / parsed.path.lstrip("/")
        curl_file(url, local_path)
        rel_path = local_path.relative_to(ROOT).as_posix()
        return f'src="{rel_path}"'

    return re.sub(r'src="(https://img\.crackap\.com/[^"]+)"', replace, fragment)


def parse_choice(div_html: str) -> tuple[int, str]:
    name_match = re.search(r'name="(\d+)"', div_html)
    if not name_match:
        raise ValueError(f"Missing question id in choice block: {div_html[:120]}")
    question_id = int(name_match.group(1))
    label_match = re.search(
        r'value="([A-E])">(.*?)</label>',
        div_html,
        flags=re.S,
    )
    if not label_match:
        raise ValueError(f"Missing choice label in choice block: {div_html[:120]}")
    choice_html = label_match.group(2)
    choice_html = re.sub(r"^[A-E]\.\s*", "", choice_html).strip()
    return question_id, fix_relative_sources(choice_html)


def parse_test_page(subject_key: str, test_number: int) -> dict:
    url = f"{CRACKAP_BASE}/ap/{subject_path(subject_key)}/test{test_number}.html"
    page = curl_text(url)
    form_match = re.search(r"<form name=\"TEST\".*?</form>", page, flags=re.S)
    if not form_match:
        raise ValueError(f"Could not find test form in {url}")
    body = form_match.group(0)
    body = re.sub(r"<script.*?</script>", "", body, flags=re.S)
    body = re.sub(r"<ins.*?</ins>", "", body, flags=re.S)
    title_match = re.search(r'name="title" value="([^"]+)"', body)
    title = html.unescape(title_match.group(1)) if title_match else f"Test {test_number}"

    token_pattern = re.compile(
        r"<pre>.*?</pre>|<p><b>\d+\.</b>.*?</p>|<div class=\"radio\">.*?</div>|<p.*?>.*?</p>",
        flags=re.S,
    )
    stimulus = ""
    questions: list[dict] = []
    current: dict | None = None

    for raw_token in token_pattern.findall(body):
        token = fix_relative_sources(raw_token.strip())
        if token.startswith("<pre>"):
            stimulus = token
            continue
        if token.startswith('<p><b>') and re.search(r"<p><b>\d+\.</b>", token):
            if current:
                questions.append(current)
            number_match = re.search(r"<p><b>(\d+)\.</b>\s*", token)
            number = int(number_match.group(1)) if number_match else len(questions) + 1
            lead = re.sub(r"^<p><b>\d+\.</b>\s*", "<p>", token)
            current = {
                "subjectKey": subject_key,
                "testNumber": test_number,
                "testTitle": title,
                "testUrl": url,
                "number": number,
                "stimulus": stimulus,
                "parts": [lead],
                "choices": [],
                "questionId": None,
            }
            continue
        if token.startswith('<div class="radio">'):
            if not current:
                continue
            question_id, choice_html = parse_choice(token)
            if current["questionId"] is None:
                current["questionId"] = question_id
            current["choices"].append(choice_html)
            continue
        if current and not current["choices"]:
            current["parts"].append(token)

    if current:
        questions.append(current)

    for question in questions:
        question_html = "".join(question["parts"]).strip()
        if question["stimulus"]:
            question_html = f'<div class="stimulus">{question["stimulus"]}</div>{question_html}'
        question_html = localize_images(question_html, subject_key)
        question["q"] = question_html
        question["hasImage"] = "src=" in question_html
        question["plain"] = strip_tags(question_html)
        question["choiceCount"] = len(question["choices"])
        del question["parts"]
        del question["stimulus"]

    return {
        "subjectKey": subject_key,
        "testNumber": test_number,
        "title": title,
        "questions": questions,
    }


def parse_answer_page(subject_key: str, question_id: int) -> tuple[int, str]:
    url = f"{CRACKAP_BASE}/ap/{subject_path(subject_key)}/question-{question_id}-answer-and-explanation.html"
    page = curl_text(url)
    answer_match = re.search(r"<p><strong>Correct Answer:</strong>\s*([A-E])</p>", page)
    if not answer_match:
        raise ValueError(f"Could not find correct answer for {url}")
    answer_letter = answer_match.group(1)
    explanation_match = re.search(
        r"<p><strong>Explanation:</strong></p>(.*?)</div>",
        page,
        flags=re.S,
    )
    explanation_html = explanation_match.group(1) if explanation_match else ""
    explanation_html = re.sub(r"<script.*?</script>", "", explanation_html, flags=re.S)
    paragraphs = re.findall(r"<p.*?>.*?</p>", explanation_html, flags=re.S)
    explanation = " ".join(strip_tags(paragraph) for paragraph in paragraphs).strip()
    return ord(answer_letter) - ord("A"), explanation


def build_frq_html(subject_key: str, year: int, label: str, note: str) -> tuple[str, str, str]:
    files = FRQ_DOWNLOADS[subject_key][year]
    frq_name = Path(urlparse(files["frq"]).path).name
    sg_name = Path(urlparse(files["sg"]).path).name
    frq_path = OFFICIAL_ROOT / subject_key / frq_name
    sg_path = OFFICIAL_ROOT / subject_key / sg_name
    curl_file(files["frq"], frq_path)
    curl_file(files["sg"], sg_path)
    rel_frq = frq_path.relative_to(ROOT).as_posix()
    rel_sg = sg_path.relative_to(ROOT).as_posix()
    text = (
        f'<strong>Official {year} source packet.</strong>'
        f'<p><em>Open the mirrored College Board prompt packet and answer the specific task below. '
        f'The original prompt stays in its original PDF instead of being retyped.</em></p>'
        f'<p><strong>Task:</strong> {html.escape(label)}<br>{html.escape(note)}</p>'
        f'<p><strong>Prompt PDF:</strong> <a href="{rel_frq}" target="_blank" rel="noreferrer">{frq_name}</a></p>'
        f'<p><strong>Scoring Guidelines:</strong> <a href="{rel_sg}" target="_blank" rel="noreferrer">{sg_name}</a></p>'
    )
    source = (
        f'Original College Board PDFs mirrored locally: '
        f'<a href="{rel_frq}" target="_blank" rel="noreferrer">{frq_name}</a> and '
        f'<a href="{rel_sg}" target="_blank" rel="noreferrer">{sg_name}</a>.'
    )
    return text, source, rel_sg


def chem_frqs(year: int) -> list[dict]:
    frq_1_text, frq_1_source, _ = build_frq_html(
        "chem",
        year,
        f"Question 1 (202{year % 10})",
        "Use the official prompt packet for Question 1. Work the chemistry from setup through justification before scoring yourself.",
    )
    frq_2_text, frq_2_source, _ = build_frq_html(
        "chem",
        year,
        f"Question 4 (202{year % 10})",
        "Use the official prompt packet for Question 4. Treat it as a second, medium-length free response and self-score with the checklist.",
    )
    rubric = [
        {"part": "(1)", "desc": "Identifies the governing chemistry principle or relationship needed to start the problem.", "pts": 1},
        {"part": "(2)", "desc": "Uses the prompt data, figure, or table correctly rather than relying on a memorized shortcut.", "pts": 1},
        {"part": "(3)", "desc": "Shows a valid setup with equations, particle reasoning, or stoichiometric relationships.", "pts": 1},
        {"part": "(4)", "desc": "Carries the calculation or causal reasoning through to a defensible conclusion.", "pts": 1},
        {"part": "(5)", "desc": "Justifies the result clearly with units, chemistry vocabulary, and no major conceptual contradiction.", "pts": 1},
    ]
    return [
        {
            "title": f"Official {year} FRQ 1",
            "text": frq_1_text,
            "maxPoints": 5,
            "rubric": rubric,
            "sampleAnswer": "Check the scoring-guidelines PDF after self-scoring and compare your work against the official point-by-point expectations for the chosen question.",
            "scoringNotes": "A strong chemistry response explicitly ties every claim to particle-level reasoning, data from the prompt, or a shown calculation.",
            "source": frq_1_source,
        },
        {
            "title": f"Official {year} FRQ 4",
            "text": frq_2_text,
            "maxPoints": 5,
            "rubric": rubric,
            "sampleAnswer": "After drafting, compare your structure with the official scoring guidelines and revise missing justification before assigning your final checklist score.",
            "scoringNotes": "Do not give yourself the point unless the reasoning and the conclusion both appear in the written response.",
            "source": frq_2_source,
        },
    ]


def stats_frqs(year: int) -> list[dict]:
    frq_1_text, frq_1_source, _ = build_frq_html(
        "stats",
        year,
        f"Question 1 ({year})",
        "Answer official Question 1 from the local FRQ packet. Use the checklist to verify setup, calculations, and interpretation in context.",
    )
    frq_6_text, frq_6_source, _ = build_frq_html(
        "stats",
        year,
        f"Question 6 Investigative Task ({year})",
        "Answer the investigative task from the local FRQ packet. Build the response in stages and then self-score line by line.",
    )
    rubric = [
        {"part": "(1)", "desc": "Names the correct statistical parameter, procedure, or model for the task.", "pts": 1},
        {"part": "(2)", "desc": "Checks and uses the relevant conditions or study design correctly.", "pts": 1},
        {"part": "(3)", "desc": "Shows the needed calculation, graph reading, or probability/statistic setup accurately.", "pts": 1},
        {"part": "(4)", "desc": "Interprets the result in the context of the problem instead of giving only raw numbers.", "pts": 1},
        {"part": "(5)", "desc": "States the inference or conclusion with appropriate statistical language and no major overclaim.", "pts": 1},
    ]
    return [
        {
            "title": f"Official {year} FRQ 1",
            "text": frq_1_text,
            "maxPoints": 5,
            "rubric": rubric,
            "sampleAnswer": "Use the official scoring guidelines to compare whether you named the right procedure, checked conditions, and interpreted the result in context.",
            "scoringNotes": "Stats responses lose points most often when the arithmetic is fine but the conclusion is not tied back to the context.",
            "source": frq_1_source,
        },
        {
            "title": f"Official {year} FRQ 6",
            "text": frq_6_text,
            "maxPoints": 5,
            "rubric": rubric,
            "sampleAnswer": "For the investigative task, compare your structure against the official rubric before reading the full sample responses.",
            "scoringNotes": "Treat each checklist line independently. Missing conditions or context language should cost the point even if the numeric work is correct.",
            "source": frq_6_source,
        },
    ]


def ush_frqs(year: int) -> list[dict]:
    saq_text, saq_source, _ = build_frq_html(
        "ush",
        year,
        f"SAQ 1 Set 1 ({year})",
        "Answer SAQ 1 from the official set 1 packet and then grade each checklist item separately.",
    )
    dbq_text, dbq_source, _ = build_frq_html(
        "ush",
        year,
        f"DBQ Set 1 ({year})",
        "Complete the DBQ from the official set 1 packet. Use the condensed rubric to self-check before reading any official commentary.",
    )
    leq_text, leq_source, _ = build_frq_html(
        "ush",
        year,
        f"LEQ 2 Set 1 ({year})",
        "Write LEQ 2 from the official set 1 packet using the checklist rubric below.",
    )
    return [
        {
            "title": f"Official {year} SAQ 1",
            "text": saq_text,
            "maxPoints": 5,
            "rubric": [
                {"part": "(1)", "desc": "Directly answers the task with a historically defensible claim.", "pts": 1},
                {"part": "(2)", "desc": "Uses accurate evidence from the prompt or historical knowledge.", "pts": 1},
                {"part": "(3)", "desc": "Explains the evidence rather than only naming it.", "pts": 1},
                {"part": "(4)", "desc": "Responds to every part of the SAQ prompt.", "pts": 1},
                {"part": "(5)", "desc": "Uses specific period language and avoids major factual errors.", "pts": 1},
            ],
            "sampleAnswer": "Before reading official commentary, verify that each mini-response actually explains why the evidence matters.",
            "scoringNotes": "SAQs reward precision. Short answers that only list facts without explanation should not earn the explanation point.",
            "source": saq_source,
        },
        {
            "title": f"Official {year} DBQ",
            "text": dbq_text,
            "maxPoints": 5,
            "rubric": [
                {"part": "(1)", "desc": "Presents a defensible thesis that answers the prompt.", "pts": 1},
                {"part": "(2)", "desc": "Provides meaningful contextualization.", "pts": 1},
                {"part": "(3)", "desc": "Uses the documents as evidence for the argument.", "pts": 1},
                {"part": "(4)", "desc": "Brings in outside historical evidence beyond the provided documents.", "pts": 1},
                {"part": "(5)", "desc": "Explains sourcing, complexity, or nuance rather than summarizing documents mechanically.", "pts": 1},
            ],
            "sampleAnswer": "After drafting, compare your thesis, document use, and outside evidence against the scoring-guidelines PDF before assigning a score.",
            "scoringNotes": "A DBQ can sound polished and still lose points if the documents are only summarized instead of used to advance the argument.",
            "source": dbq_source,
        },
        {
            "title": f"Official {year} LEQ 2",
            "text": leq_text,
            "maxPoints": 5,
            "rubric": [
                {"part": "(1)", "desc": "States a defensible thesis and line of reasoning.", "pts": 1},
                {"part": "(2)", "desc": "Provides broader historical context for the claim.", "pts": 1},
                {"part": "(3)", "desc": "Uses specific historical evidence relevant to the prompt.", "pts": 1},
                {"part": "(4)", "desc": "Explains how the evidence supports the argument, not just where it happened.", "pts": 1},
                {"part": "(5)", "desc": "Shows nuance, qualification, or complexity in the final argument.", "pts": 1},
            ],
            "sampleAnswer": "Read the official scoring guidelines after self-scoring and compare whether your evidence is both specific and actually tied to your thesis.",
            "scoringNotes": "The easiest point to over-award is the reasoning point. Evidence must be connected to the line of argument to count.",
            "source": leq_source,
        },
    ]


def chem_category(question: dict) -> str:
    text = strip_tags(question["q"]).lower()
    patterns = [
        ("unit8_apps", [r"cell", r"electro", r"reduction potential", r"galvanic", r"delta g", r"Δg", r"e°", r"electrolysis"]),
        ("unit7_acid_base", [r"\bph\b", r"\bpka\b", r"\bpkb\b", r"\bka\b", r"\bkb\b", r"acid", r"base", r"buffer", r"titrat"]),
        ("unit6_equilibrium", [r"equilibrium", r"\bk[cp]\b", r"reaction quotient", r"\bq\b", r"le ch", r"product-favored"]),
        ("unit5_thermo", [r"enthalpy", r"entropy", r"calor", r"spontaneous", r"heat", r"endother", r"exother"]),
        ("unit4_kinetics", [r"rate", r"mechanism", r"activation energy", r"catalyst", r"slow step"]),
        ("unit3_reactions", [r"stoichi", r"mole", r"precip", r"balanced equation", r"limiting", r"yield"]),
        ("unit2_bonding_imf", [r"bond", r"lewis", r"vsepr", r"geometry", r"polar", r"dipole", r"intermolecular", r"hybrid", r"resonance"]),
        ("unit1_atomic_structure", [r"electron configuration", r"ionization", r"atomic radius", r"periodic", r"coulomb", r"orbital"]),
        ("unit2_bonding_imf", [r"gas", r"boiling point", r"solution", r"solubility", r"molecule"]),
    ]
    for label, regexes in patterns:
        if any(re.search(regex, text) for regex in regexes):
            return label
    return "unit3_reactions"


def score_sort_key(question: dict) -> tuple[int, int, int]:
    return (1 if question["hasImage"] else 0, question["testNumber"], question["number"])


def enrich_answers(selected: Iterable[dict]) -> None:
    for question in selected:
        answer_index, explanation = parse_answer_page(question["subjectKey"], question["questionId"])
        question["answer"] = answer_index
        question["explanation"] = explanation
        question["source"] = (
            f'CrackAP source: <a href="{question["testUrl"]}" target="_blank" rel="noreferrer">'
            f'{html.escape(question["testTitle"])}</a> · Question ID {question["questionId"]}.'
        )


def build_chem_sets(bank: list[dict]) -> list[dict]:
    by_unit: dict[str, list[dict]] = defaultdict(list)
    for question in bank:
        by_unit[chem_category(question)].append(question)
    for questions in by_unit.values():
        questions.sort(key=score_sort_key, reverse=True)

    unit_order = [
        "unit1_atomic_structure",
        "unit2_bonding_imf",
        "unit3_reactions",
        "unit4_kinetics",
        "unit5_thermo",
        "unit6_equilibrium",
        "unit7_acid_base",
        "unit8_apps",
        "unit2_bonding_imf",
    ]
    used: set[int] = set()
    sets: list[dict] = []

    for set_number, year in enumerate([2025, 2024, 2023], start=1):
        selected: list[dict] = []
        local_counts: dict[str, int] = defaultdict(int)
        for unit in unit_order:
            pool = [question for question in by_unit[unit] if question["questionId"] not in used]
            if not pool:
                continue
            pick = pool[0]
            used.add(pick["questionId"])
            local_counts[unit] += 1
            selected.append(pick)
        remaining = [
            question
            for question in sorted(bank, key=score_sort_key, reverse=True)
            if question["questionId"] not in used
        ]
        while len(selected) < 18 and remaining:
            pick = remaining.pop(0)
            used.add(pick["questionId"])
            selected.append(pick)
        enrich_answers(selected)
        sets.append(
            {
                "id": f"chem_set{set_number}",
                "subjectKey": "chem",
                "examName": "AP Chemistry",
                "title": f"Set {set_number}",
                "cardLabel": str(set_number),
                "badge": "SOURCE LOCK",
                "description": "18 CrackAP MCQ with mirrored figures + 2 official FRQ packets.",
                "mcTime": 32,
                "frqTime": 45,
                "liveFeedback": True,
                "liveRubric": True,
                "scoreProfile": {
                    "mcWeight": 60,
                    "frqTotal": 10,
                    "frqWeight": 40,
                    "compositeMax": 100,
                    "thresholds": {5: 82, 4: 68, 3: 54, 2: 40},
                    "mcLabel": "60.00",
                    "frqLabel": "40.00",
                },
                "mc": selected,
                "frq": chem_frqs(year),
            }
        )
    return sets


def stats_unit_for_test(test_number: int) -> str:
    if test_number in {41, 42, 43, 44}:
        return "unit1"
    if test_number in {45, 46, 47}:
        return "unit2"
    if test_number in {48, 49, 50, 51}:
        return "unit3"
    if test_number in {52, 53, 54, 55, 56, 57, 58}:
        return "unit4"
    if test_number in {59, 60}:
        return "unit5"
    return "unit6"


def build_stats_sets(bank: list[dict]) -> list[dict]:
    by_unit: dict[str, list[dict]] = defaultdict(list)
    for question in bank:
        by_unit[stats_unit_for_test(question["testNumber"])].append(question)
    for questions in by_unit.values():
        questions.sort(key=score_sort_key, reverse=True)
    used: set[int] = set()
    sets: list[dict] = []
    for set_number, year in enumerate([2025, 2024, 2023], start=1):
        selected: list[dict] = []
        for unit in ["unit1", "unit2", "unit3", "unit4", "unit5", "unit6"]:
            unit_picks = [
                question
                for question in by_unit[unit]
                if question["questionId"] not in used
            ][:3]
            for pick in unit_picks:
                used.add(pick["questionId"])
                selected.append(pick)
        enrich_answers(selected)
        sets.append(
            {
                "id": f"stats_set{set_number}",
                "subjectKey": "stats",
                "examName": "AP Statistics",
                "title": f"Set {set_number}",
                "cardLabel": str(set_number),
                "badge": "SOURCE LOCK",
                "description": "18 CrackAP MCQ balanced across units + 2 official FRQ packets.",
                "mcTime": 32,
                "frqTime": 45,
                "liveFeedback": True,
                "liveRubric": True,
                "scoreProfile": {
                    "mcWeight": 60,
                    "frqTotal": 10,
                    "frqWeight": 40,
                    "compositeMax": 100,
                    "thresholds": {5: 82, 4: 68, 3: 54, 2: 40},
                    "mcLabel": "60.00",
                    "frqLabel": "40.00",
                },
                "mc": selected,
                "frq": stats_frqs(year),
            }
        )
    return sets


def build_ush_sets(bank_by_test: dict[int, list[dict]]) -> list[dict]:
    offsets = {1: 1, 2: 4, 3: 7}
    sets: list[dict] = []
    for set_number, year in enumerate([2025, 2024, 2023], start=1):
        selected: list[dict] = []
        start = offsets[set_number]
        for test_number in USH_TESTS:
            questions = bank_by_test[test_number]
            slice_questions = questions[start : start + 3]
            if len(slice_questions) < 3:
                slice_questions = questions[-3:]
            selected.extend(slice_questions)
        enrich_answers(selected)
        sets.append(
            {
                "id": f"ush_set{set_number}",
                "subjectKey": "ush",
                "examName": "AP United States History",
                "title": f"Set {set_number}",
                "cardLabel": str(set_number),
                "badge": "SOURCE LOCK",
                "description": "24 CrackAP MCQ balanced across periods + SAQ, DBQ, and LEQ.",
                "mcTime": 40,
                "frqTime": 70,
                "liveFeedback": True,
                "liveRubric": True,
                "scoreProfile": {
                    "mcWeight": 55,
                    "frqTotal": 15,
                    "frqWeight": 45,
                    "compositeMax": 100,
                    "thresholds": {5: 82, 4: 68, 3: 54, 2: 40},
                    "mcLabel": "55.00",
                    "frqLabel": "45.00",
                },
                "mc": selected,
                "frq": ush_frqs(year),
            }
        )
    return sets


def serialize_js(value: object) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2).replace("</script>", "<\\/script>")


def generate() -> None:
    ASSET_ROOT.mkdir(parents=True, exist_ok=True)

    chem_bank: list[dict] = []
    for test_number in CHEM_TESTS:
        chem_bank.extend(parse_test_page("chem", test_number)["questions"])

    stats_bank: list[dict] = []
    for test_number in STATS_TESTS:
        stats_bank.extend(parse_test_page("stats", test_number)["questions"])

    ush_bank_by_test: dict[int, list[dict]] = {}
    for test_number in USH_TESTS:
        ush_bank_by_test[test_number] = parse_test_page("ush", test_number)["questions"]

    generated_sets = []
    generated_sets.extend(build_chem_sets(chem_bank))
    generated_sets.extend(build_stats_sets(stats_bank))
    generated_sets.extend(build_ush_sets(ush_bank_by_test))

    js = (
        "(function buildCustomAPSets(root) {\n"
        f"  const AP_CUSTOM_SUBJECTS = {serialize_js(SUBJECTS)};\n\n"
        f"  const AP_CUSTOM_DYNAMIC_SETS = {serialize_js(generated_sets)};\n\n"
        "  root.AP_CUSTOM_SUBJECTS = AP_CUSTOM_SUBJECTS;\n"
        "  root.AP_CUSTOM_DYNAMIC_SETS = AP_CUSTOM_DYNAMIC_SETS;\n"
        "})(typeof window !== 'undefined' ? window : globalThis);\n"
    )
    OUTPUT_JS.write_text(js, encoding="utf-8")


if __name__ == "__main__":
    generate()
