(function buildCustomAPSets(root) {
  const AP_CUSTOM_SUBJECTS = [
  {
    "key": "chem",
    "title": "AP Chemistry",
    "icon": "⚗",
    "toneClass": "chem",
    "cardToneClass": "chem-num",
    "countLabel": "3 source-locked practice sets"
  },
  {
    "key": "stats",
    "title": "AP Statistics",
    "icon": "📈",
    "toneClass": "stats",
    "cardToneClass": "stats-num",
    "countLabel": "3 source-locked practice sets"
  },
  {
    "key": "ush",
    "title": "AP United States History",
    "icon": "🇺🇸",
    "toneClass": "ush",
    "cardToneClass": "ush-num",
    "countLabel": "3 source-locked practice sets"
  }
];

  const AP_CUSTOM_DYNAMIC_SETS = [
  {
    "id": "chem_set1",
    "subjectKey": "chem",
    "examName": "AP Chemistry",
    "title": "Set 1",
    "cardLabel": "1",
    "badge": "SOURCE LOCK",
    "description": "18 CrackAP MCQ with mirrored figures + 2 official FRQ packets.",
    "mcTime": 32,
    "frqTime": 45,
    "liveFeedback": true,
    "liveRubric": true,
    "scoreProfile": {
      "mcWeight": 60,
      "frqTotal": 10,
      "frqWeight": 40,
      "compositeMax": 100,
      "thresholds": {
        "5": 82,
        "4": 68,
        "3": 54,
        "2": 40
      },
      "mcLabel": "60.00",
      "frqLabel": "40.00"
    },
    "mc": [
      {
        "subjectKey": "chem",
        "testNumber": 41,
        "testTitle": "AP Chemistry Practice Test 41",
        "testUrl": "https://www.crackap.com/ap/chemistry/test41.html",
        "number": 12,
        "choices": [
          "Sr, Ca, Ba",
          "Se, Tc, Ba",
          "Mn, Fe, Ni",
          "Cl, Br, I"
        ],
        "questionId": 495,
        "q": "<p>In which of the following groups are the species listed correctly in order of increasing ionization energy?</p>",
        "hasImage": false,
        "plain": "In which of the following groups are the species listed correctly in order of increasing ionization energy?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -Increasing ionization energy applies to an element higher in a column on the periodic table, or in a position further to the left in a period on the periodic table. Note, this type of explanation is unacceptable on the Free Response portion of the AP Exam, where your explanation would require information on radii and effective nuclear charges.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test41.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 41</a> · Question ID 495."
      },
      {
        "subjectKey": "chem",
        "testNumber": 45,
        "testTitle": "AP Chemistry Practice Test 45",
        "testUrl": "https://www.crackap.com/ap/chemistry/test45.html",
        "number": 2,
        "choices": [
          "C<sub>3</sub>H<sub>9</sub>N",
          "CH<sub>3</sub>F",
          "C<sub>2</sub>H<sub>6</sub>O",
          "C<sub>4</sub>H<sub>11</sub>N"
        ],
        "questionId": 534,
        "q": "<p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00545.jpg\" /></p><p>Which of the compounds in the above diagram is capable of participating in hydrogen bonding?</p>",
        "hasImage": true,
        "plain": "Which of the compounds in the above diagram is capable of participating in hydrogen bonding?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -Hydrogen bonding is possible when hydrogen is attached to N, O, and F. D is the only compound in the diagram where this is true. The simple presence of hydrogen and N, O, or F is insufficient.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test45.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 45</a> · Question ID 534."
      },
      {
        "subjectKey": "chem",
        "testNumber": 46,
        "testTitle": "AP Chemistry Practice Test 46",
        "testUrl": "https://www.crackap.com/ap/chemistry/test46.html",
        "number": 11,
        "choices": [
          "-1144 kJ",
          "-572 kJ",
          "+960 kJ",
          "+1144 kJ"
        ],
        "questionId": 555,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 10-11</b> refer to the following information.</p><p><strong>Use the following information in the following thermochemical equations to answer questions.</strong></p><p class=\"imagep\"><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00559.jpg\" /></p></pre></div><p>What is the energy change when 72.0 g of water vapor decomposes to the elements at constant pressure? The molar mass of H<sub>2</sub>O is 18.0 g mol<sup>-1</sup>.</p>",
        "hasImage": true,
        "plain": "Questions 10-11 refer to the following information. Use the following information in the following thermochemical equations to answer questions. What is the energy change when 72.0 g of water vapor decomposes to the elements at constant pressure? The molar mass of H 2 O is 18.0 g mol -1 .",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -The decomposition of water vapor is the reverse of the last reaction shown; therefore, the enthalpy change is positive instead of negative. The amount of water decomposing is 4.00 mole, which is double the amount of water in the reaction. Double the water will require double the energy.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test46.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 46</a> · Question ID 555."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 4,
        "choices": [
          "Ar",
          "He",
          "Ne",
          "Impossible to determine"
        ],
        "questionId": 523,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 4-6</b> refer to the following information.</p><p><strong>Use the information on the containers in the following diagram to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00540.jpg\" /></p><p>Approximate molar masses:</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00541.jpg\" /></p></pre></div><p>If a sample of Kr effuses at a rate of 35 mL per second at 298 K, which of the gases below will effuse at approximately double the rate under the same conditions?</p>",
        "hasImage": true,
        "plain": "Questions 4-6 refer to the following information. Use the information on the containers in the following diagram to answer questions. Approximate molar masses: If a sample of Kr effuses at a rate of 35 mL per second at 298 K, which of the gases below will effuse at approximately double the rate under the same conditions?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -Use Graham's law; a molecule with one-fourth the molar mass will diffuse at double the rate. Neon is the nearest to one-fourth the molar mass of krypton.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 523."
      },
      {
        "subjectKey": "chem",
        "testNumber": 35,
        "testTitle": "AP Chemistry Practice Test 35",
        "testUrl": "https://www.crackap.com/ap/chemistry/test35.html",
        "number": 6,
        "choices": [
          "The reaction is favorable and is driven by the enthalpy change since the entropy decreases in this process.",
          "The reaction is unfavorable since the entropy change is a large negative value.",
          "The reaction is favorable and is driven by both enthalpy and entropy changes.",
          "The reaction is unfavorable because of the enthalpy and entropy changes."
        ],
        "questionId": 416,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p><span class=\"bold\">Questions</span> refer to the following formation equation for the reaction synthesizing RbBr(<span class=\"italic\">s</span>). This reaction can be separated into a series of steps.</p><p><img alt=\"Image\" src=\"assets/source-lock/chem/ap/chemistry/br7/P0635-01.jpg\" /></p></pre></div><p>Noting that this reaction goes to completion, producing MgO from the elements, and using the overall chemical equation to estimate the entropy change for this process, which of the following statements is correct?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. Questions refer to the following formation equation for the reaction synthesizing RbBr( s ). This reaction can be separated into a series of steps. Noting that this reaction goes to completion, producing MgO from the elements, and using the overall chemical equation to estimate the entropy change for this process, which of the following statements is correct?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "(A) We expect the oxygen going from the gas phase to be a decrease in entropy or at the very least a small entropy effect. Therefore, this reaction is totally driven by the heat energy.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 35</a> · Question ID 416."
      },
      {
        "subjectKey": "chem",
        "testNumber": 46,
        "testTitle": "AP Chemistry Practice Test 46",
        "testUrl": "https://www.crackap.com/ap/chemistry/test46.html",
        "number": 6,
        "choices": [
          "The forward rate is faster than the reverse rate.",
          "The forward and reverse rates are the same.",
          "The reverse rate is faster than the forward rate.",
          "There is insufficient information to determine the relative rates."
        ],
        "questionId": 550,
        "q": "<p>2 SO<sub>2</sub>(g) + O<sub>2</sub>(g) <img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00456.jpg\" /> 2 SO<sub>3</sub>(g)</p><p>The reaction above is allowed to continue until equilibrium is established. After equilibrium is established a catalyst is added to the system. How does the rate of the forward reaction compare to the rate of the reverse reaction after the addition of the catalyst?</p>",
        "hasImage": true,
        "plain": "2 SO 2 (g) + O 2 (g) 2 SO 3 (g) The reaction above is allowed to continue until equilibrium is established. After equilibrium is established a catalyst is added to the system. How does the rate of the forward reaction compare to the rate of the reverse reaction after the addition of the catalyst?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "B -The catalyst will increase the rate of both the forward and reverse reactions. The rates will still remain the same as the presence of a catalyst does not alter the position of the equilibrium, just the time necessary to reach equilibrium.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test46.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 46</a> · Question ID 550."
      },
      {
        "subjectKey": "chem",
        "testNumber": 45,
        "testTitle": "AP Chemistry Practice Test 45",
        "testUrl": "https://www.crackap.com/ap/chemistry/test45.html",
        "number": 12,
        "choices": [
          "8.00",
          "64.0",
          "4.00",
          "32.0"
        ],
        "questionId": 544,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-7</b> refer to the following information.</p><p><strong>Use the following information on the bases in the following diagram to answer questions.</strong></p><p>A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00546.jpg\" /></p></pre></div><p>The above equilibrium was established in a 1.00 L container at a certain temperature. Once the system came to equilibrium, it was found that the following amounts of materials were present in the container:</p><p class=\"center\">(NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> = 8.00 moles, NH<sub>3</sub> = 4.00 moles, CO<sub>2</sub> = 2.00 moles, and H<sub>2</sub>O = 2.00 moles.</p><p>Determine the value of <em>K</em><sub>c</sub> at this temperature.</p>",
        "hasImage": true,
        "plain": "Questions 6-7 refer to the following information. Use the following information on the bases in the following diagram to answer questions. A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii. The above equilibrium was established in a 1.00 L container at a certain temperature. Once the system came to equilibrium, it was found that the following amounts of materials were present in the container: (NH 4 ) 2 CO 3 = 8.00 moles, NH 3 = 4.00 moles, CO 2 = 2.00 moles, and H 2 O = 2.00 moles. Determine the value of K c at this temperature.",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -The carbon is a solid and the water is a liquid; therefore, neither of these will be in the calculation. Since the volume of the container is 1.00 L, the molarities of the other two substances are 4.00 M NH 3 and 2.00 M CO 2 . K c = [NH 3 ] 2 [CO 2 ] = (4.00) 2 (2.00) = 32.0",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test45.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 45</a> · Question ID 544."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 2,
        "choices": [
          "-4.6 &#215; 10<sup>4</sup> J mol<sup>-1</sup>",
          "-9.3 &#215; 10<sup>4</sup> J mol<sup>-1</sup>",
          "+9.3 &#215; 10<sup>4</sup> J mol<sup>-1</sup>",
          "+4.6 &#215; 10<sup>4</sup> J mol<sup>-1</sup>"
        ],
        "questionId": 509,
        "q": "<p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00529.jpg\" /></p><p>Given the above standard reduction potentials, estimate the approximate value of the &Delta;<em>G</em>&#176; for the following reaction:</p><p class=\"center\">Zn + Co<sup>2+</sup> → Zn<sup>2+</sup> + Co</p>",
        "hasImage": true,
        "plain": "Given the above standard reduction potentials, estimate the approximate value of the Δ G ° for the following reaction: Zn + Co 2+ → Zn 2+ + Co",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "B -The relationship is: Δ G = - nFE ° (given on the exam) The number of electrons transferred = 2 = n F = 96,500 coulombs mol -1 and volt = 1 joule coulomb -1 (both given on the exam), these two relationships lead to F = 96,500 J V -1 mol -1 . E ° = (0.76 - 0.28) V = 0.48 V Entering this information in the equation gives Δ G = -(2)(96,500 J V -1 mol -1 )(0.48 V) ≈ -(2)(100,000)(0.50) ≈ -100,000 J mol -1 (actual value = -9.26 × 10 4 J mol -1 )",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 509."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 6,
        "choices": [
          "He",
          "Ne",
          "Ar",
          "Kr"
        ],
        "questionId": 525,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 4-6</b> refer to the following information.</p><p><strong>Use the information on the containers in the following diagram to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00540.jpg\" /></p><p>Approximate molar masses:</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00541.jpg\" /></p></pre></div><p>Which of the gases will show the greatest deviation from ideal behavior?</p>",
        "hasImage": true,
        "plain": "Questions 4-6 refer to the following information. Use the information on the containers in the following diagram to answer questions. Approximate molar masses: Which of the gases will show the greatest deviation from ideal behavior?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -Heavier nonpolar species exhibit greater London dispersion forces, and stronger attractive forces lead to greater deviation from ideal behavior under a given set of conditions.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 525."
      },
      {
        "subjectKey": "chem",
        "testNumber": 46,
        "testTitle": "AP Chemistry Practice Test 46",
        "testUrl": "https://www.crackap.com/ap/chemistry/test46.html",
        "number": 10,
        "choices": [
          "+1280 kJ",
          "-1280 kJ",
          "+1100 kJ",
          "-1100 kJ"
        ],
        "questionId": 554,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 10-11</b> refer to the following information.</p><p><strong>Use the following information in the following thermochemical equations to answer questions.</strong></p><p class=\"imagep\"><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00559.jpg\" /></p></pre></div><p>Determine &Delta;<em>H</em> for the combustion of ethanol, C<sub>2</sub>H<sub>5</sub>OH, if H<sub>2</sub>O(g) formed in the above reaction instead of H<sub>2</sub>O(l).</p>",
        "hasImage": true,
        "plain": "Questions 10-11 refer to the following information. Use the following information in the following thermochemical equations to answer questions. Determine Δ H for the combustion of ethanol, C 2 H 5 OH, if H 2 O(g) formed in the above reaction instead of H 2 O(l).",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -Using Hess's law:  It is possible to simplify the problem by determining the heat of vaporization of water (H 2 O(l) → H 2 O(g)), which is 90 kJ.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test46.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 46</a> · Question ID 554."
      },
      {
        "subjectKey": "chem",
        "testNumber": 46,
        "testTitle": "AP Chemistry Practice Test 46",
        "testUrl": "https://www.crackap.com/ap/chemistry/test46.html",
        "number": 5,
        "choices": [
          "Dichlorodifluoromethane",
          "Dibromodichloromethane",
          "Dibromodifluoromethane",
          "Tetrafluoromethane"
        ],
        "questionId": 549,
        "q": "<p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00557.jpg\" /></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00558.jpg\" /></p><p>The diagram above shows the structure of molecules of CCl<sub>4</sub> and CBr<sub>4</sub> and the above table gives the boiling points and molar masses of the compounds. Which of the compounds is nonpolar?</p>",
        "hasImage": true,
        "plain": "The diagram above shows the structure of molecules of CCl 4 and CBr 4 and the above table gives the boiling points and molar masses of the compounds. Which of the compounds is nonpolar?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -Tetrafluoromethane is the only nonpolar molecule in the diagram. All the other compounds are polar.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test46.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 46</a> · Question ID 549."
      },
      {
        "subjectKey": "chem",
        "testNumber": 45,
        "testTitle": "AP Chemistry Practice Test 45",
        "testUrl": "https://www.crackap.com/ap/chemistry/test45.html",
        "number": 11,
        "choices": [
          "N<sub>2</sub>H<sub>2</sub>",
          "N<sub>3</sub>H<sub>3</sub>",
          "N<sub>4</sub>H<sub>4</sub>",
          "They are all the same."
        ],
        "questionId": 543,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-7</b> refer to the following information.</p><p><strong>Use the following information on the bases in the following diagram to answer questions.</strong></p><p>A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00546.jpg\" /></p></pre></div><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00548.jpg\" /></p><p>Ammonia is the best-known nitrogen-hydrogen compound; however, there are a number of other nitrogen-hydrogen compounds, three of which are in the above diagram. Which of these has the longest average N-N bond length?</p>",
        "hasImage": true,
        "plain": "Questions 6-7 refer to the following information. Use the following information on the bases in the following diagram to answer questions. A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii. Ammonia is the best-known nitrogen-hydrogen compound; however, there are a number of other nitrogen-hydrogen compounds, three of which are in the above diagram. Which of these has the longest average N-N bond length?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -The higher the average number of bonds between the nitrogen atoms, the shorter the bond is. For diazene there are two bonds, for triazene the average is 1.5 bonds, and for tetrazene the average is 1.33 bonds. The length of the average bond length increases in the order 2 < 1.5 < 1.33.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test45.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 45</a> · Question ID 543."
      },
      {
        "subjectKey": "chem",
        "testNumber": 45,
        "testTitle": "AP Chemistry Practice Test 45",
        "testUrl": "https://www.crackap.com/ap/chemistry/test45.html",
        "number": 10,
        "choices": [
          "1 &#215; 10<sup>-10</sup> <em>M</em>",
          "1 &#215; 10<sup>-9</sup> <em>M</em>",
          "1 &#215; 10<sup>-3</sup> <em>M</em>",
          "1 &#215; 10<sup>-5</sup> <em>M</em>"
        ],
        "questionId": 542,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-7</b> refer to the following information.</p><p><strong>Use the following information on the bases in the following diagram to answer questions.</strong></p><p>A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00546.jpg\" /></p></pre></div><p>Determine the H<sup>+</sup>(aq) concentration in 1.0 <em>M</em> phenol, C<sub>6</sub>H<sub>5</sub>OH, solution. (The <em>K</em><sub>a</sub> for phenol is 1 &#215; 10<sup>-10</sup>.)</p>",
        "hasImage": true,
        "plain": "Questions 6-7 refer to the following information. Use the following information on the bases in the following diagram to answer questions. A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii. Determine the H + (aq) concentration in 1.0 M phenol, C 6 H 5 OH, solution. (The K a for phenol is 1 × 10 -10 .)",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -Since phenol has a K a values given, it is a weak acid, as such the equilibrium expression is: C 6 H 5 OH(aq) H + (aq) + C 6 H 5 O - (aq) Use the K a expression:  This leads to: [H + ] = (1.0 × 1 × 10 -10 ) 1/2 = (1 × 10 -10 ) 1/2 = 1 × 10 -5 M",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test45.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 45</a> · Question ID 542."
      },
      {
        "subjectKey": "chem",
        "testNumber": 45,
        "testTitle": "AP Chemistry Practice Test 45",
        "testUrl": "https://www.crackap.com/ap/chemistry/test45.html",
        "number": 9,
        "choices": [
          "All the molecules are nonpolar and, for such molecules, intermolecular forces increase with increasing molar mass.",
          "All the molecules are polar and, for such molecules, intermolecular forces increase with increasing molar mass.",
          "The molecules with the lower melting points are nonpolar and the molecules with the higher molar masses are polar.",
          "The sequence is a coincidence since all the molecules have the same intermolecular forces."
        ],
        "questionId": 541,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-7</b> refer to the following information.</p><p><strong>Use the following information on the bases in the following diagram to answer questions.</strong></p><p>A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00546.jpg\" /></p></pre></div><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00547.jpg\" /></p><p>According to the data in the table above, which of the following best explains the trend in increasing melting points?</p>",
        "hasImage": true,
        "plain": "Questions 6-7 refer to the following information. Use the following information on the bases in the following diagram to answer questions. A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii. According to the data in the table above, which of the following best explains the trend in increasing melting points?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -The substance with the highest melting point has the strongest intermolecular forces. All four molecules are nonpolar; therefore, the intermolecular forces are London dispersion forces. In general, London dispersion forces, for molecules with similar structures, London dispersion forces increase with increasing molar mass.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test45.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 45</a> · Question ID 541."
      },
      {
        "subjectKey": "chem",
        "testNumber": 45,
        "testTitle": "AP Chemistry Practice Test 45",
        "testUrl": "https://www.crackap.com/ap/chemistry/test45.html",
        "number": 8,
        "choices": [
          "0.100 mol",
          "0.0100 mol",
          "0.0200 mol",
          "0.0150 mol"
        ],
        "questionId": 540,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-7</b> refer to the following information.</p><p><strong>Use the following information on the bases in the following diagram to answer questions.</strong></p><p>A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00546.jpg\" /></p></pre></div><p>Joseph Priestly discovered oxygen gas by the decomposition of solid mercury(II) oxide, HgO, to oxygen gas, O<sub>2</sub>, and liquid mercury metal, Hg. How many moles of oxygen gas will form when 4.32 g of solid mercury(II) oxide decomposes? The formula mass of mercury(II) oxide is 216 g mol<sup>-1</sup>.</p>",
        "hasImage": true,
        "plain": "Questions 6-7 refer to the following information. Use the following information on the bases in the following diagram to answer questions. A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii. Joseph Priestly discovered oxygen gas by the decomposition of solid mercury(II) oxide, HgO, to oxygen gas, O 2 , and liquid mercury metal, Hg. How many moles of oxygen gas will form when 4.32 g of solid mercury(II) oxide decomposes? The formula mass of mercury(II) oxide is 216 g mol -1 .",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "B -The balanced chemical equation is: 2 HgO(s) → 2 Hg(l) + O 2 (g) The calculation is:",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test45.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 45</a> · Question ID 540."
      },
      {
        "subjectKey": "chem",
        "testNumber": 45,
        "testTitle": "AP Chemistry Practice Test 45",
        "testUrl": "https://www.crackap.com/ap/chemistry/test45.html",
        "number": 7,
        "choices": [
          "Larger ions have higher lattice energies, which leads to lower melting points.",
          "Smaller ions have lower lattice energies, which leads to higher melting points.",
          "Larger ions have lower lattice energies, which leads to lower melting points.",
          "Smaller ions have a greater affinity for oxygen, which leads to a higher melting point."
        ],
        "questionId": 539,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-7</b> refer to the following information.</p><p><strong>Use the following information on the bases in the following diagram to answer questions.</strong></p><p>A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00546.jpg\" /></p></pre></div><p>Why do the melting points of the alkaline metal oxides decrease in the order CaO &gt; SrO &gt; BaO?</p>",
        "hasImage": true,
        "plain": "Questions 6-7 refer to the following information. Use the following information on the bases in the following diagram to answer questions. A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii. Why do the melting points of the alkaline metal oxides decrease in the order CaO > SrO > BaO?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -The melting points of ionic compounds increase with increasing lattice energy. Lattice energy increases with increasing ionic charge and with decreasing sum of ionic radii. The oxide ion radius is a constant, while the metal radii decrease in the order Ba 2+ > Sr 2+ > Ca 2+ . The decrease in metal radii is due to the smaller ions having fewer electron shells.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test45.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 45</a> · Question ID 539."
      },
      {
        "subjectKey": "chem",
        "testNumber": 45,
        "testTitle": "AP Chemistry Practice Test 45",
        "testUrl": "https://www.crackap.com/ap/chemistry/test45.html",
        "number": 6,
        "choices": [
          "Smaller ions have lower lattice energy.",
          "Smaller ionic charges lead to higher lattice energy.",
          "Larger ions have higher lattice energy.",
          "Higher ionic charges lead to higher lattice energy."
        ],
        "questionId": 538,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-7</b> refer to the following information.</p><p><strong>Use the following information on the bases in the following diagram to answer questions.</strong></p><p>A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00546.jpg\" /></p></pre></div><p>Why are the melting points of the alkaline earth oxides (CaO, SrO, and BaO) so much higher than those of the other two compounds in the table?</p>",
        "hasImage": true,
        "plain": "Questions 6-7 refer to the following information. Use the following information on the bases in the following diagram to answer questions. A large number of compounds adopt the sodium chloride structure. The following table contains some examples of the compounds in this group with their respective melting points and the sum of the cation-anion radii. Why are the melting points of the alkaline earth oxides (CaO, SrO, and BaO) so much higher than those of the other two compounds in the table?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -The melting points of ionic compounds increase with increasing lattice energy. Lattice energy increases with increasing ionic charge and with decreasing sum of ionic radii. It is apparent from comparing NaF to CaO that charge is more important than small changes in radii. The charges are Na + , Ca 2+ , Sr 2+ , Ba 2+ , F - , Cl - , and O 2- .",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test45.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 45</a> · Question ID 538."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 13,
        "choices": [
          "The -OH is capable of donating a hydrogen ion, which will lower the pH.",
          "The presence of carbon makes the bases less stable.",
          "The presence of the very electronegative oxygen inhibits the nitrogen atom from donating its electron pair.",
          "There is insufficient information to explain this observation."
        ],
        "questionId": 532,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 11-13</b> refer to the following information.</p><p><strong>Use the following information on the bases in the following diagram to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00543.jpg\" /></p><p>Ammonia is only present as a reference. Questions only refer to the other three bases.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00544.jpg\" /></p></pre></div><p>Which of the following explains why the pH of a hydroxylamine solution is lower than any of the other solutions?</p>",
        "hasImage": true,
        "plain": "Questions 11-13 refer to the following information. Use the following information on the bases in the following diagram to answer questions. Ammonia is only present as a reference. Questions only refer to the other three bases. Which of the following explains why the pH of a hydroxylamine solution is lower than any of the other solutions?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -These are all bases because the nitrogen atom is capable of reacting with a hydrogen ion by donating its lone pair to the hydrogen ion. The oxygen atom pulls electron density away from the nitrogen atom causing the nitrogen atom to attract the lone pair more strongly making it less able to donate the pair to a hydrogen ion.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 532."
      }
    ],
    "frq": [
      {
        "title": "Official 2025 FRQ 1",
        "text": "<strong>Official 2025 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 1 (2025)<br>Use the official prompt packet for Question 1. Work the chemistry from setup through justification before scoring yourself.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/chem/ap25-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-chemistry.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/chem/ap25-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-chemistry.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Identifies the governing chemistry principle or relationship needed to start the problem.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Uses the prompt data, figure, or table correctly rather than relying on a memorized shortcut.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows a valid setup with equations, particle reasoning, or stoichiometric relationships.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Carries the calculation or causal reasoning through to a defensible conclusion.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Justifies the result clearly with units, chemistry vocabulary, and no major conceptual contradiction.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Check the scoring-guidelines PDF after self-scoring and compare your work against the official point-by-point expectations for the chosen question.",
        "scoringNotes": "A strong chemistry response explicitly ties every claim to particle-level reasoning, data from the prompt, or a shown calculation.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/chem/ap25-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-chemistry.pdf</a> and <a href=\"assets/source-lock/official/chem/ap25-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-chemistry.pdf</a>."
      },
      {
        "title": "Official 2025 FRQ 4",
        "text": "<strong>Official 2025 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 4 (2025)<br>Use the official prompt packet for Question 4. Treat it as a second, medium-length free response and self-score with the checklist.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/chem/ap25-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-chemistry.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/chem/ap25-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-chemistry.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Identifies the governing chemistry principle or relationship needed to start the problem.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Uses the prompt data, figure, or table correctly rather than relying on a memorized shortcut.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows a valid setup with equations, particle reasoning, or stoichiometric relationships.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Carries the calculation or causal reasoning through to a defensible conclusion.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Justifies the result clearly with units, chemistry vocabulary, and no major conceptual contradiction.",
            "pts": 1
          }
        ],
        "sampleAnswer": "After drafting, compare your structure with the official scoring guidelines and revise missing justification before assigning your final checklist score.",
        "scoringNotes": "Do not give yourself the point unless the reasoning and the conclusion both appear in the written response.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/chem/ap25-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-chemistry.pdf</a> and <a href=\"assets/source-lock/official/chem/ap25-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-chemistry.pdf</a>."
      }
    ]
  },
  {
    "id": "chem_set2",
    "subjectKey": "chem",
    "examName": "AP Chemistry",
    "title": "Set 2",
    "cardLabel": "2",
    "badge": "SOURCE LOCK",
    "description": "18 CrackAP MCQ with mirrored figures + 2 official FRQ packets.",
    "mcTime": 32,
    "frqTime": 45,
    "liveFeedback": true,
    "liveRubric": true,
    "scoreProfile": {
      "mcWeight": 60,
      "frqTotal": 10,
      "frqWeight": 40,
      "compositeMax": 100,
      "thresholds": {
        "5": 82,
        "4": 68,
        "3": 54,
        "2": 40
      },
      "mcLabel": "60.00",
      "frqLabel": "40.00"
    },
    "mc": [
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 5,
        "choices": [
          "Average kinetic energy of the atoms",
          "Average speed of the atoms",
          "Density of the gas in the container",
          "All properties are the same for gases behaving ideally"
        ],
        "questionId": 524,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 4-6</b> refer to the following information.</p><p><strong>Use the information on the containers in the following diagram to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00540.jpg\" /></p><p>Approximate molar masses:</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00541.jpg\" /></p></pre></div><p>Assuming all four gases are behaving ideally, which of the following is the same for all the gas samples?</p>",
        "hasImage": true,
        "plain": "Questions 4-6 refer to the following information. Use the information on the containers in the following diagram to answer questions. Approximate molar masses: Assuming all four gases are behaving ideally, which of the following is the same for all the gas samples?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -This is a consequence of kinetic molecular theory. The average kinetic energy depends only on the absolute temperature.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 524."
      },
      {
        "subjectKey": "chem",
        "testNumber": 42,
        "testTitle": "AP Chemistry Practice Test 42",
        "testUrl": "https://www.crackap.com/ap/chemistry/test42.html",
        "number": 1,
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "questionId": 496,
        "q": "<p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00525.jpg\" /></p><p>Which of the labeled arrows in the diagram above represents the strongest intermolecular force?</p>",
        "hasImage": true,
        "plain": "Which of the labeled arrows in the diagram above represents the strongest intermolecular force?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "B -This is a dipole-dipole force, which is stronger than a dipole-induced dipole (A and C) or a London dispersion force (D).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test42.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 42</a> · Question ID 496."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 3,
        "choices": [
          "Rate = <em>k</em>[N<sub>2</sub>O<sub>5</sub>]<sup>2</sup>",
          "<em>k</em> = [N<sub>2</sub>O<sub>5</sub>]",
          "Rate = <em>k</em>[N<sub>2</sub>O<sub>5</sub>]",
          "<img src=\"http://img.crackap.com/ap/chemistry/a5/Image00539.jpg\" />"
        ],
        "questionId": 522,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 1-3</b> refer to the following information.</p><p><strong>Use the information on the following proposed mechanism to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00534.jpg\" /></p></pre></div><p>What is the rate law for the reaction?</p>",
        "hasImage": true,
        "plain": "Questions 1-3 refer to the following information. Use the information on the following proposed mechanism to answer questions. What is the rate law for the reaction?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -The rate law always considers the slowest step in a mechanism. There is one molecule of N 2 O 5 as the reactant in the slow step; therefore, the rate law will only use the concentration of this reactant raised to a power equal to the number of molecules in the slow step.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 522."
      },
      {
        "subjectKey": "chem",
        "testNumber": 35,
        "testTitle": "AP Chemistry Practice Test 35",
        "testUrl": "https://www.crackap.com/ap/chemistry/test35.html",
        "number": 5,
        "choices": [
          "Δ<span class=\"italic\">H</span>°(1) and Δ<span class=\"italic\">H</span>°(2) only",
          "Δ<span class=\"italic\">H</span>°(1), Δ<span class=\"italic\">H</span>°(2), and Δ<span class=\"italic\">H</span>°(3) only",
          "Δ<span class=\"italic\">H</span>°(3) only",
          "Δ<span class=\"italic\">H</span>°(3) and Δ<span class=\"italic\">H</span>°(4) only"
        ],
        "questionId": 415,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p><span class=\"bold\">Questions</span> refer to the following formation equation for the reaction synthesizing RbBr(<span class=\"italic\">s</span>). This reaction can be separated into a series of steps.</p><p><img alt=\"Image\" src=\"assets/source-lock/chem/ap/chemistry/br7/P0635-01.jpg\" /></p></pre></div><p>Which of the steps in the table above are endothermic?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. Questions refer to the following formation equation for the reaction synthesizing RbBr( s ). This reaction can be separated into a series of steps. Which of the steps in the table above are endothermic?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "(B) Any steps that break bonds or intermolecular attractions will be endothermic.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 35</a> · Question ID 415."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 10,
        "choices": [
          "It will be zero because it is the limiting reagent",
          "It will remain the same",
          "It will be increase",
          "It is impossible to determine"
        ],
        "questionId": 529,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 7-10</b> refer to the following information.</p><p><strong>Use the information on the containers in the following diagram to answer questions concerning the following equilibrium.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00542.jpg\" /></p></pre></div><p>If the moles of HCl in container B are equal to five times the O<sub>2</sub> present, what can be said about the moles of O<sub>2</sub> present at equilibrium?</p>",
        "hasImage": true,
        "plain": "Questions 7-10 refer to the following information. Use the information on the containers in the following diagram to answer questions concerning the following equilibrium. If the moles of HCl in container B are equal to five times the O 2 present, what can be said about the moles of O 2 present at equilibrium?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -To determine the amount, it would be necessary to know the value of the equilibrium constant. A cannot be correct because it is not possible for the amount of any of the materials to be zero at equilibrium. B and C cannot be correct because at least some of the O 2 would be converted to Cl 2 and H 2 O leading to a decrease in the amount.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 529."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 12,
        "choices": [
          "A hydrogen ion attaches to the lone pair on the nitrogen atom.",
          "The hydroxide ion reacts with the hydrogen ion to form water.",
          "The hydrogen ion forms a hydrogen bond to the base.",
          "The hydrogen ion combines with a hydrogen atom from the base to form H<sub>2</sub> gas."
        ],
        "questionId": 531,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 11-13</b> refer to the following information.</p><p><strong>Use the following information on the bases in the following diagram to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00543.jpg\" /></p><p>Ammonia is only present as a reference. Questions only refer to the other three bases.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00544.jpg\" /></p></pre></div><p>All the bases in the diagram behave as Br&#248;nsted-Lowry bases in the same way; in each case, they accept a hydrogen ion to the same atom. How is this acceptance of a hydrogen ion accomplished?</p>",
        "hasImage": true,
        "plain": "Questions 11-13 refer to the following information. Use the following information on the bases in the following diagram to answer questions. Ammonia is only present as a reference. Questions only refer to the other three bases. All the bases in the diagram behave as Brønsted-Lowry bases in the same way; in each case, they accept a hydrogen ion to the same atom. How is this acceptance of a hydrogen ion accomplished?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -As in ammonia, all these compounds behave as Brønsted-Lowry bases by accepting a hydrogen ion. The reaction involves the hydrogen ion attaching to the lone pair on the nitrogen atoms.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 531."
      },
      {
        "subjectKey": "chem",
        "testNumber": 40,
        "testTitle": "AP Chemistry Practice Test 40",
        "testUrl": "https://www.crackap.com/ap/chemistry/test40.html",
        "number": 12,
        "choices": [
          "Hydrocarbon compounds are relatively unstable in general.",
          "Compounds that have identical atoms bonded to each other are relatively unstable.",
          "The bonds do not match the angles.",
          "There is no resonance to stabilize the compound."
        ],
        "questionId": 483,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 1-2</b> refer to the following information.</p><p><strong>Use the information on the acids in the following diagram to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00459.jpg\" /></p></pre></div><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00462.jpg\" /></p><p>Cyclopropane, pictured above, is a relatively unstable compound. As seen in the diagram, the carbon atoms form the corners of an equilateral triangle and each carbon atom has two hydrogen atoms attached to complete an octet of electrons around the carbon atoms. Based upon this structure, why is cyclopropane a relatively unstable compound?</p>",
        "hasImage": true,
        "plain": "Questions 1-2 refer to the following information. Use the information on the acids in the following diagram to answer questions. Cyclopropane, pictured above, is a relatively unstable compound. As seen in the diagram, the carbon atoms form the corners of an equilateral triangle and each carbon atom has two hydrogen atoms attached to complete an octet of electrons around the carbon atoms. Based upon this structure, why is cyclopropane a relatively unstable compound?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -A carbon atom with four single bonds should be tetrahedral. Tetrahedral atoms have an ideal bond angle of 109.5°. However, the carbon atoms in cyclopropane are at the corners of an equilateral triangle, where the ideal angle is 60°. The discrepancy between the two ideal bond angles leads to the relative instability of cyclopropane.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 40</a> · Question ID 483."
      },
      {
        "subjectKey": "chem",
        "testNumber": 41,
        "testTitle": "AP Chemistry Practice Test 41",
        "testUrl": "https://www.crackap.com/ap/chemistry/test41.html",
        "number": 10,
        "choices": [
          "Larger molecules get tangled and cannot escape each other.",
          "It has weaker hydrogen bonds.",
          "It is the lightest of the three.",
          "It is a more symmetrical molecule."
        ],
        "questionId": 493,
        "q": "<p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00490.jpg\" /></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00491.jpg\" /></p><p>Which of the following best explains why the boiling point of 2-propanol is lower than the other two compounds in the diagram and table above?</p>",
        "hasImage": true,
        "plain": "Which of the following best explains why the boiling point of 2-propanol is lower than the other two compounds in the diagram and table above?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -All three compounds are capable of hydrogen bonding; therefore, this cannot be the cause of difference. In general, all other things being equal, it takes less energy to move a lighter molecule from the liquid state to the gaseous state.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test41.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 41</a> · Question ID 493."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 11,
        "choices": [
          "Hydroxylamine",
          "Methylamine",
          "Dimethylamine",
          "The concentrations of all the bases were the same; therefore, the pH at the equivalence point will be the same."
        ],
        "questionId": 530,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 11-13</b> refer to the following information.</p><p><strong>Use the following information on the bases in the following diagram to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00543.jpg\" /></p><p>Ammonia is only present as a reference. Questions only refer to the other three bases.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00544.jpg\" /></p></pre></div><p>Solutions of methylamine, dimethylamine, and hydroxylamine are titrated. The base concentrations were 0.1000 <em>M</em>, and 0.1000 <em>M</em> hydrochloric acid, HCl, was used for the titrations. Which of the three bases will yield the highest pH at the equivalence point?</p>",
        "hasImage": true,
        "plain": "Questions 11-13 refer to the following information. Use the following information on the bases in the following diagram to answer questions. Ammonia is only present as a reference. Questions only refer to the other three bases. Solutions of methylamine, dimethylamine, and hydroxylamine are titrated. The base concentrations were 0.1000 M , and 0.1000 M hydrochloric acid, HCl, was used for the titrations. Which of the three bases will yield the highest pH at the equivalence point?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "B -The pH of a 1.0 M methylamine solution is the highest; therefore, it is the strongest of the bases. For this reason, the pH at the equivalence point of the methylamine titration will be the highest.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 530."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 9,
        "choices": [
          "&gt; 2.0 atm",
          "= 2.0 atm",
          "&lt; 2.0 atm",
          "Impossible to determine"
        ],
        "questionId": 528,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 7-10</b> refer to the following information.</p><p><strong>Use the information on the containers in the following diagram to answer questions concerning the following equilibrium.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00542.jpg\" /></p></pre></div><p>If the initial partial pressure of Cl<sub>2</sub> in container A is 1.0 atm and the initial partial pressure of H<sub>2</sub>O is also 1.0 atm, what will be the pressure at equilibrium?</p>",
        "hasImage": true,
        "plain": "Questions 7-10 refer to the following information. Use the information on the containers in the following diagram to answer questions concerning the following equilibrium. If the initial partial pressure of Cl 2 in container A is 1.0 atm and the initial partial pressure of H 2 O is also 1.0 atm, what will be the pressure at equilibrium?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -The ICE table for this equilibrium is:  From the equilibrium line on the table, the equilibrium pressure should be: (1.0 - 2 x ) + (1.0 - 2 x ) + (+4 x ) + (+ x ) = 2.0 + x Therefore, the equilibrium pressure will be greater than 2.0 atm by an amount equal to x .",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 528."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 8,
        "choices": [
          "A because producing products from reactants is faster than the reverse.",
          "B because producing reactants from products is faster than the reverse.",
          "C because there are both reactants and products already in the container.",
          "It is impossible to determine which will reach equilibrium first."
        ],
        "questionId": 527,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 7-10</b> refer to the following information.</p><p><strong>Use the information on the containers in the following diagram to answer questions concerning the following equilibrium.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00542.jpg\" /></p></pre></div><p>Containers A, B, and C are not at equilibrium. If each container begins with equal amounts of the indicated substances present at the same temperature, which of the three will reach equilibrium first?</p>",
        "hasImage": true,
        "plain": "Questions 7-10 refer to the following information. Use the information on the containers in the following diagram to answer questions concerning the following equilibrium. Containers A, B, and C are not at equilibrium. If each container begins with equal amounts of the indicated substances present at the same temperature, which of the three will reach equilibrium first?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -The amount of time necessary is a kinetics problem. There is not kinetic data presented to make the determination possible.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 527."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 7,
        "choices": [
          "Increasing the volume of the container",
          "Decreasing the volume of the container",
          "Lowering the temperature of the container",
          "Adding 1 mole of He(g) to the container"
        ],
        "questionId": 526,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 7-10</b> refer to the following information.</p><p><strong>Use the information on the containers in the following diagram to answer questions concerning the following equilibrium.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00542.jpg\" /></p></pre></div><p>An equilibrium mixture (container D) is at 75&#176;C. Which of the following changes may increase the amount of the HCl in the container?</p>",
        "hasImage": true,
        "plain": "Questions 7-10 refer to the following information. Use the information on the containers in the following diagram to answer questions concerning the following equilibrium. An equilibrium mixture (container D) is at 75°C. Which of the following changes may increase the amount of the HCl in the container?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -An increase in volume will cause an equilibrium to shift toward the side with more gas. There are four gas molecules on the left side and five gas molecules on the right side; therefore, an increase in volume will result in a shift to the right, which increases the amount of HCl (and O 2 ). B will have the opposite effect. Cooling an endothermic equilibrium will cause a shift to the left, which will decrease the amount of HCl. D will yield no change because helium is not part of the equilibrium.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 526."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 2,
        "choices": [
          "<img src=\"http://img.crackap.com/ap/chemistry/a5/Image00535.jpg\" />",
          "<img src=\"http://img.crackap.com/ap/chemistry/a5/Image00536.jpg\" />",
          "<img src=\"http://img.crackap.com/ap/chemistry/a5/Image00537.jpg\" />",
          "<img src=\"http://img.crackap.com/ap/chemistry/a5/Image00538.jpg\" />"
        ],
        "questionId": 521,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 1-3</b> refer to the following information.</p><p><strong>Use the information on the following proposed mechanism to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00534.jpg\" /></p></pre></div><p>Choose the energy profile that best describes this mechanism.</p>",
        "hasImage": true,
        "plain": "Questions 1-3 refer to the following information. Use the information on the following proposed mechanism to answer questions. Choose the energy profile that best describes this mechanism.",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -The first step in the mechanism is the slow (rate-determining) step. It is the slowest because it has the highest activation energy. For the first step to be the slow step, the first peak must be the highest.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 521."
      },
      {
        "subjectKey": "chem",
        "testNumber": 44,
        "testTitle": "AP Chemistry Practice Test 44",
        "testUrl": "https://www.crackap.com/ap/chemistry/test44.html",
        "number": 1,
        "choices": [
          "N<sub>2</sub>O<sub>4</sub>(g) + O<sub>2</sub>(g)",
          "2 NO<sub>2</sub>(g) + O<sub>2</sub>(g)",
          "N<sub>2</sub>O<sub>4</sub>(g) + NO<sub>2</sub>(g) + O<sub>2</sub>(g)",
          "4 NO<sub>2</sub>(g) + O<sub>2</sub>(g)"
        ],
        "questionId": 520,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 1-3</b> refer to the following information.</p><p><strong>Use the information on the following proposed mechanism to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00534.jpg\" /></p></pre></div><p>The above represents a proposed mechanism for the gaseous dinitrogen pentoxide, N<sub>2</sub>O<sub>5</sub>. What are the overall products of the reaction?</p>",
        "hasImage": true,
        "plain": "Questions 1-3 refer to the following information. Use the information on the following proposed mechanism to answer questions. The above represents a proposed mechanism for the gaseous dinitrogen pentoxide, N 2 O 5 . What are the overall products of the reaction?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -Add the equations together and cancel any species that appear on both sides (intermediates).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 44</a> · Question ID 520."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 12,
        "choices": [
          "The higher boiling isomer is more polar than the other isomer.",
          "The higher boiling isomer is better able to form hydrogen bonds than the other isomer.",
          "The higher boiling isomer has a greater molar mass.",
          "The higher boiling isomer has greater London dispersion forces than the other isomer."
        ],
        "questionId": 519,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p>pH versus volume of titrant added</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00530.jpg\" /></p><p>The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>, with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO<sub>3</sub><sup>-</sup> and H<sub>2</sub>CO<sub>3</sub>, respectively. G and H correspond to the quantity of acid required to reach the endpoints.</p></pre></div><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00533.jpg\" /></p><p>Two compounds with the formula C<sub>2</sub>H<sub>2</sub>Cl<sub>2</sub> appear in the above diagram. These two compounds are isomers. The molecules are planar and have the approximate structures shown in the diagram. The boiling point of trans-1, 2-dichloroethene is 47.5&#176;C and the boiling point of cis-1,2-dichloroethene is 60.3&#176;C. Which of the following best explains why cis-1,2-dichloroethene has a higher boiling point than its isomer, trans-1, 2-dichloroethene?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. pH versus volume of titrant added The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na 2 CO 3 , with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO 3 - and H 2 CO 3 , respectively. G and H correspond to the quantity of acid required to reach the endpoints. Two compounds with the formula C 2 H 2 Cl 2 appear in the above diagram. These two compounds are isomers. The molecules are planar and have the approximate structures shown in the diagram. The boiling point of trans-1, 2-dichloroethene is 47.5°C and the boiling point of cis-1,2-dichloroethene is 60.3°C. Which of the following best explains why cis-1,2-dichloroethene has a higher boiling point than its isomer, trans-1, 2-dichloroethene?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -The higher boiling isomer is more polar than the other isomer because the two very electronegative chlorine atoms are on one side, which leads to their polar bonds working together. When the chlorine atoms are on opposite sides, their polar bonds work against each other.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 519."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 11,
        "choices": [
          "The molecular mass of acetyl chloride is higher than that of acetic acid making it harder for the acetyl chloride to form dimers.",
          "It is easier to form a covalent bond between acetic acid molecules than between acetyl chloride molecules.",
          "Acetic acid can form strong hydrogen bonds but acetyl chloride can only form weaker dipole-dipole attractions.",
          "Acetic acid is an acidic compound but acetyl chloride is a neutral compound."
        ],
        "questionId": 518,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p>pH versus volume of titrant added</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00530.jpg\" /></p><p>The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>, with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO<sub>3</sub><sup>-</sup> and H<sub>2</sub>CO<sub>3</sub>, respectively. G and H correspond to the quantity of acid required to reach the endpoints.</p></pre></div><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00532.jpg\" /></p><p>A dimer consists of two closely associated molecules. In the gas phase, acetic acid tends to form dimers as illustrated on the left in the above diagram. Acetyl chloride, on the right in the above diagram, is not very efficient in forming dimers. Why is acetic acid better able to form dimers than acetyl chloride?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. pH versus volume of titrant added The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na 2 CO 3 , with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO 3 - and H 2 CO 3 , respectively. G and H correspond to the quantity of acid required to reach the endpoints. A dimer consists of two closely associated molecules. In the gas phase, acetic acid tends to form dimers as illustrated on the left in the above diagram. Acetyl chloride, on the right in the above diagram, is not very efficient in forming dimers. Why is acetic acid better able to form dimers than acetyl chloride?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -The two molecules are hydrogen bonded together. Hydrogen bonding is a relatively strong intermolecular force. Acetyl chloride cannot exhibit anything stronger than dipole-dipole forces, which are, in general, weaker than hydrogen bonds.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 518."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 10,
        "choices": [
          "Ionic bonds",
          "Hybrid orbitals",
          "Resonance structures",
          "Hydrogen bonding"
        ],
        "questionId": 517,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p>pH versus volume of titrant added</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00530.jpg\" /></p><p>The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>, with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO<sub>3</sub><sup>-</sup> and H<sub>2</sub>CO<sub>3</sub>, respectively. G and H correspond to the quantity of acid required to reach the endpoints.</p></pre></div><p>What is the reason that the lightest member of Group 15 does not follow the trend of the other members, which show that the boiling point decreases with decreasing atomic mass of the Group 15 element?</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00531.jpg\" /></p><p>The graph shows the variation of boiling point with Group number for the hydrogen compounds of the four lightest members of Group 15 on the periodic table (NH<sub>3</sub>, PH<sub>3</sub>, AsH<sub>3</sub> and SbH<sub>3</sub>).</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. pH versus volume of titrant added The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na 2 CO 3 , with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO 3 - and H 2 CO 3 , respectively. G and H correspond to the quantity of acid required to reach the endpoints. What is the reason that the lightest member of Group 15 does not follow the trend of the other members, which show that the boiling point decreases with decreasing atomic mass of the Group 15 element? The graph shows the variation of boiling point with Group number for the hydrogen compounds of the four lightest members of Group 15 on the periodic table (NH 3 , PH 3 , AsH 3 and SbH 3 ).",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -Hydrogen bonding may occur when hydrogen is attached directly to N, O, or F.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 517."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 9,
        "choices": [
          "This is a spontaneous process because it is exothermic.",
          "This is a spontaneous process because of an entropy increase.",
          "This is a spontaneous process because of an entropy decrease.",
          "This is a spontaneous process because it is exothermic."
        ],
        "questionId": 516,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p>pH versus volume of titrant added</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00530.jpg\" /></p><p>The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>, with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO<sub>3</sub><sup>-</sup> and H<sub>2</sub>CO<sub>3</sub>, respectively. G and H correspond to the quantity of acid required to reach the endpoints.</p></pre></div><p>When potassium perchlorate, KClO<sub>4</sub>, dissolves in water, the temperature of the resultant solution is lower than the initial temperature of the components. Which of the following conclusions may be related to this?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. pH versus volume of titrant added The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na 2 CO 3 , with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO 3 - and H 2 CO 3 , respectively. G and H correspond to the quantity of acid required to reach the endpoints. When potassium perchlorate, KClO 4 , dissolves in water, the temperature of the resultant solution is lower than the initial temperature of the components. Which of the following conclusions may be related to this?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "B -The decrease in temperature indicates that the system absorbed heat, meaning that this is an endothermic process. For an endothermic process to be spontaneous, the entropy must increase.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 516."
      }
    ],
    "frq": [
      {
        "title": "Official 2024 FRQ 1",
        "text": "<strong>Official 2024 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 1 (2024)<br>Use the official prompt packet for Question 1. Work the chemistry from setup through justification before scoring yourself.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/chem/ap24-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-chemistry.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/chem/ap24-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-chemistry.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Identifies the governing chemistry principle or relationship needed to start the problem.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Uses the prompt data, figure, or table correctly rather than relying on a memorized shortcut.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows a valid setup with equations, particle reasoning, or stoichiometric relationships.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Carries the calculation or causal reasoning through to a defensible conclusion.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Justifies the result clearly with units, chemistry vocabulary, and no major conceptual contradiction.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Check the scoring-guidelines PDF after self-scoring and compare your work against the official point-by-point expectations for the chosen question.",
        "scoringNotes": "A strong chemistry response explicitly ties every claim to particle-level reasoning, data from the prompt, or a shown calculation.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/chem/ap24-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-chemistry.pdf</a> and <a href=\"assets/source-lock/official/chem/ap24-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-chemistry.pdf</a>."
      },
      {
        "title": "Official 2024 FRQ 4",
        "text": "<strong>Official 2024 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 4 (2024)<br>Use the official prompt packet for Question 4. Treat it as a second, medium-length free response and self-score with the checklist.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/chem/ap24-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-chemistry.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/chem/ap24-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-chemistry.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Identifies the governing chemistry principle or relationship needed to start the problem.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Uses the prompt data, figure, or table correctly rather than relying on a memorized shortcut.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows a valid setup with equations, particle reasoning, or stoichiometric relationships.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Carries the calculation or causal reasoning through to a defensible conclusion.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Justifies the result clearly with units, chemistry vocabulary, and no major conceptual contradiction.",
            "pts": 1
          }
        ],
        "sampleAnswer": "After drafting, compare your structure with the official scoring guidelines and revise missing justification before assigning your final checklist score.",
        "scoringNotes": "Do not give yourself the point unless the reasoning and the conclusion both appear in the written response.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/chem/ap24-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-chemistry.pdf</a> and <a href=\"assets/source-lock/official/chem/ap24-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-chemistry.pdf</a>."
      }
    ]
  },
  {
    "id": "chem_set3",
    "subjectKey": "chem",
    "examName": "AP Chemistry",
    "title": "Set 3",
    "cardLabel": "3",
    "badge": "SOURCE LOCK",
    "description": "18 CrackAP MCQ with mirrored figures + 2 official FRQ packets.",
    "mcTime": 32,
    "frqTime": 45,
    "liveFeedback": true,
    "liveRubric": true,
    "scoreProfile": {
      "mcWeight": 60,
      "frqTotal": 10,
      "frqWeight": 40,
      "compositeMax": 100,
      "thresholds": {
        "5": 82,
        "4": 68,
        "3": 54,
        "2": 40
      },
      "mcLabel": "60.00",
      "frqLabel": "40.00"
    },
    "mc": [
      {
        "subjectKey": "chem",
        "testNumber": 39,
        "testTitle": "AP Chemistry Practice Test 39",
        "testUrl": "https://www.crackap.com/ap/chemistry/test39.html",
        "number": 2,
        "choices": [
          "He",
          "CH<sub>4</sub>",
          "O<sub>2</sub>",
          "SO<sub>2</sub>"
        ],
        "questionId": 459,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 1-3</b> refer to the following information.</p><p><strong>Use the information on the containers in the following diagram to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00455.jpg\" /></p><p>Approximate molar masses:</p><p class=\"center\">He = 4 g mol<sup>-1</sup>, CH<sub>4</sub> = 16 g mol<sup>-1</sup>,<br/>O<sub>2</sub> = 32 g mol<sup>-1</sup>, SO<sub>2</sub> = 64 g mol<sup>-1</sup></p></pre></div><p>Which of the four gases will probably show the least deviation from ideal behavior?</p>",
        "hasImage": true,
        "plain": "Questions 1-3 refer to the following information. Use the information on the containers in the following diagram to answer questions. Approximate molar masses: He = 4 g mol -1 , CH 4 = 16 g mol -1 , O 2 = 32 g mol -1 , SO 2 = 64 g mol -1 Which of the four gases will probably show the least deviation from ideal behavior?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -The smaller the molecule and the less polar (more nonpolar) the gas is, the smaller the deviation from ideal gas behavior.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test39.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 39</a> · Question ID 459."
      },
      {
        "subjectKey": "chem",
        "testNumber": 41,
        "testTitle": "AP Chemistry Practice Test 41",
        "testUrl": "https://www.crackap.com/ap/chemistry/test41.html",
        "number": 6,
        "choices": [
          "The molar mass of CS<sub>2</sub> is greater.",
          "COS has weaker covalent bonds than CS<sub>2</sub>.",
          "Only CS<sub>2</sub> can form intermolecular dipole-dipole forces.",
          "COS has stronger intermolecular forces because it is polar and CS<sub>2</sub> is not."
        ],
        "questionId": 489,
        "q": "<p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00482.jpg\" /></p><p>The diagram above shows the structure of molecules of CS<sub>2</sub> and COS. The boiling point of COS is 223 K, and the boiling point of CS<sub>2</sub> is 319 K. Which of the following is the best explanation of why the boiling point of CS<sub>2</sub> is higher?</p>",
        "hasImage": true,
        "plain": "The diagram above shows the structure of molecules of CS 2 and COS. The boiling point of COS is 223 K, and the boiling point of CS 2 is 319 K. Which of the following is the best explanation of why the boiling point of CS 2 is higher?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -Stronger intermolecular forces lead to higher boiling points. Even though COS has dipole-dipole forces, which are usually stronger than the London dispersion forces present in CS 2 , the greater molar mass of CS 2 leads to a London dispersion force contribution that is sufficient to compensate for the general trend of dipole-dipole forces being stronger than London dispersion forces. This is why comparisons should only be made between molecules of similar molecular masses.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test41.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 41</a> · Question ID 489."
      },
      {
        "subjectKey": "chem",
        "testNumber": 42,
        "testTitle": "AP Chemistry Practice Test 42",
        "testUrl": "https://www.crackap.com/ap/chemistry/test42.html",
        "number": 12,
        "choices": [
          "Rate = <em>k</em>[CN<sub>2</sub>H<sub>4</sub>O]",
          "Rate = <em>k</em>[CN<sub>2</sub>H<sub>4</sub>O]<sup>2</sup>[H<sup>+</sup>]<sup>2</sup>",
          "Rate = <em>k</em>[H<sup>+</sup>]",
          "Rate = <em>k</em>[CN<sub>2</sub>H<sub>4</sub>O]<sup>2</sup>[H<sup>+</sup>]"
        ],
        "questionId": 507,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-10</b> refer to the following information.</p><p>Many metal salts crystallize from solution in the form of a hydrate. If the formula of the anhydrous salt is A<sub>a</sub>X<sub>x</sub>, then the generic formula of the hydrated form would be A<sub>a</sub>X<sub>x</sub>&bull;xH<sub>2</sub>O. A student conducts an experiment to determine the formula of a metal oxide by collecting the following data:</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00526.jpg\" /></p><p>The hydrated salt is finely powdered to ensure complete water loss to produce the anhydrous salt.</p></pre></div><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00527.jpg\" /></p><p>The table above gives the initial concentrations and rate for three experiments involving the decomposition of urea, CN<sub>2</sub>H<sub>4</sub>O. The reaction is H<sup>+</sup>(aq) + 2 H<sub>2</sub>O(l) + CN<sub>2</sub>H<sub>4</sub>O(aq) → 2 NH<sub>4</sub><sup>+</sup>(aq) + HCO<sub>3</sub><sup>-</sup>(aq). What is the rate law for this reaction?</p>",
        "hasImage": true,
        "plain": "Questions 6-10 refer to the following information. Many metal salts crystallize from solution in the form of a hydrate. If the formula of the anhydrous salt is A a X x , then the generic formula of the hydrated form would be A a X x •xH 2 O. A student conducts an experiment to determine the formula of a metal oxide by collecting the following data: The hydrated salt is finely powdered to ensure complete water loss to produce the anhydrous salt. The table above gives the initial concentrations and rate for three experiments involving the decomposition of urea, CN 2 H 4 O. The reaction is H + (aq) + 2 H 2 O(l) + CN 2 H 4 O(aq) → 2 NH 4 + (aq) + HCO 3 - (aq). What is the rate law for this reaction?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -Comparing experiments 1 and 3 shows that changing the hydrogen ion concentration has no effect upon the rate; therefore the reaction is zero order in hydrogen ion. Comparing experiments 2 and 3 shows that doubling the urea concentration doubles the rate; therefore, the reaction is first order with respect to urea.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test42.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 42</a> · Question ID 507."
      },
      {
        "subjectKey": "chem",
        "testNumber": 35,
        "testTitle": "AP Chemistry Practice Test 35",
        "testUrl": "https://www.crackap.com/ap/chemistry/test35.html",
        "number": 4,
        "choices": [
          "601 kJ of heat is released.",
          "601 kJ of heat is absorbed.",
          "1202 kJ of heat is released.",
          "1202 kJ of heat is absorbed."
        ],
        "questionId": 414,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p><span class=\"bold\">Questions</span> refer to the following formation equation for the reaction synthesizing RbBr(<span class=\"italic\">s</span>). This reaction can be separated into a series of steps.</p><p><img alt=\"Image\" src=\"assets/source-lock/chem/ap/chemistry/br7/P0635-01.jpg\" /></p></pre></div><p>When 1.00 mol of O<sub>2</sub>(<span class=\"italic\">g</span>) is formed from MgO(<span class=\"italic\">s</span>) in the reaction above, how much heat is released or absorbed?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. Questions refer to the following formation equation for the reaction synthesizing RbBr( s ). This reaction can be separated into a series of steps. When 1.00 mol of O 2 ( g ) is formed from MgO( s ) in the reaction above, how much heat is released or absorbed?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "(D) One mole of O 2 is twice what the equation will yield (notice ½ O 2 ). So we have to double the heat energy. In addition, making O 2 has the reaction going in the reverse direction. So heat must be added (or absorbed from the surroundings) for the reaction to occur.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 35</a> · Question ID 414."
      },
      {
        "subjectKey": "chem",
        "testNumber": 41,
        "testTitle": "AP Chemistry Practice Test 41",
        "testUrl": "https://www.crackap.com/ap/chemistry/test41.html",
        "number": 7,
        "choices": [
          "<img src=\"http://img.crackap.com/ap/chemistry/a5/Image00484.jpg\" />",
          "<img src=\"http://img.crackap.com/ap/chemistry/a5/Image00485.jpg\" />",
          "<img src=\"http://img.crackap.com/ap/chemistry/a5/Image00486.jpg\" />",
          "<img src=\"http://img.crackap.com/ap/chemistry/a5/Image00487.jpg\" />"
        ],
        "questionId": 490,
        "q": "<p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00483.jpg\" /></p><p>The above equilibrium is established in a closed system with a movable piston. After establishing equilibrium, the piston is rapidly moved up (pressure change). Which of the following graphs best illustrates the rate of the reverse reaction as the system returns to equilibrium?</p>",
        "hasImage": true,
        "plain": "The above equilibrium is established in a closed system with a movable piston. After establishing equilibrium, the piston is rapidly moved up (pressure change). Which of the following graphs best illustrates the rate of the reverse reaction as the system returns to equilibrium?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "B -At equilibrium the reverse reaction is going at a steady rate (equal to that of the forward reaction and not equal to 0). A sudden decrease in pressure will cause the rate of the reverse reaction to increase to generate more gas to increase the pressure. It will eventually slow and become constant again.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test41.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 41</a> · Question ID 490."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 8,
        "choices": [
          "The densities increase in the order helium &lt; nitrogen &lt; carbon dioxide.",
          "The number of molecules in all the containers is the same.",
          "The pressure in all three containers is the same.",
          "The average speed of all the molecules is the same."
        ],
        "questionId": 515,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p>pH versus volume of titrant added</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00530.jpg\" /></p><p>The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>, with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO<sub>3</sub><sup>-</sup> and H<sub>2</sub>CO<sub>3</sub>, respectively. G and H correspond to the quantity of acid required to reach the endpoints.</p></pre></div><p>Three steel containers hold gas samples. The containers are all the same size and at the same temperature. One container has 4.0 g of helium, another has 28.0 g of nitrogen, and the third has 44.0 g of carbon dioxide. Pick the FALSE statement from the following list:</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. pH versus volume of titrant added The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na 2 CO 3 , with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO 3 - and H 2 CO 3 , respectively. G and H correspond to the quantity of acid required to reach the endpoints. Three steel containers hold gas samples. The containers are all the same size and at the same temperature. One container has 4.0 g of helium, another has 28.0 g of nitrogen, and the third has 44.0 g of carbon dioxide. Pick the FALSE statement from the following list:",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -The average kinetic energy, not the average speed, is the same if the temperatures are the same. Each container has one mole of gas, which means that at the same volume and temperature they will have the same pressure. The greater the molar mass, divided by a constant volume, the greater the density. One mole of gas will have Avogadro's number of molecules.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 515."
      },
      {
        "subjectKey": "chem",
        "testNumber": 40,
        "testTitle": "AP Chemistry Practice Test 40",
        "testUrl": "https://www.crackap.com/ap/chemistry/test40.html",
        "number": 6,
        "choices": [
          "The 1s peak has the lowest energy.",
          "The 2s peak has the lowest energy.",
          "The 2p peak has the lowest energy.",
          "The 1p peak has the lowest energy."
        ],
        "questionId": 477,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 1-2</b> refer to the following information.</p><p><strong>Use the information on the acids in the following diagram to answer questions.</strong></p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00459.jpg\" /></p></pre></div><p>The photoelectron spectrum of carbon has three equally sized peaks. What peak is at the lowest energy?</p>",
        "hasImage": true,
        "plain": "Questions 1-2 refer to the following information. Use the information on the acids in the following diagram to answer questions. The photoelectron spectrum of carbon has three equally sized peaks. What peak is at the lowest energy?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -The electron configuration of carbon in 1s 2 2s 2 sp 2 . The removal of the last electron (2p) requires the least amount of energy.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 40</a> · Question ID 477."
      },
      {
        "subjectKey": "chem",
        "testNumber": 37,
        "testTitle": "AP Chemistry Practice Test 37",
        "testUrl": "https://www.crackap.com/ap/chemistry/test37.html",
        "number": 8,
        "choices": [
          "No, because some of the sulfur dioxide gas would dissolve in the acid.",
          "No, because sulfur dioxide reacts with acids to produce solid sulfur.",
          "No, because sulfur dioxide is only a gas at very high temperatures.",
          "Yes, this apparatus could be used."
        ],
        "questionId": 442,
        "q": "<p>Would it be possible to use this experimental setup to study a reaction that produced gaseous sulfur dioxide, SO<sub>2</sub>? If not, why?</p>",
        "hasImage": false,
        "plain": "Would it be possible to use this experimental setup to study a reaction that produced gaseous sulfur dioxide, SO 2 ? If not, why?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -Sulfur dioxide gas is soluble in water and, while less soluble in dilute acid, some would still dissolve to give a smaller volume.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test37.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 37</a> · Question ID 442."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 7,
        "choices": [
          "At point G",
          "Halfway between the start and point G",
          "At point H",
          "Halfway between points G and H"
        ],
        "questionId": 514,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p>pH versus volume of titrant added</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00530.jpg\" /></p><p>The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>, with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO<sub>3</sub><sup>-</sup> and H<sub>2</sub>CO<sub>3</sub>, respectively. G and H correspond to the quantity of acid required to reach the endpoints.</p></pre></div><p>At what point on the graph for the titration of pure sodium carbonate is the pH = p<em>K</em><sub>a2</sub> for carbonic acid?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. pH versus volume of titrant added The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na 2 CO 3 , with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO 3 - and H 2 CO 3 , respectively. G and H correspond to the quantity of acid required to reach the endpoints. At what point on the graph for the titration of pure sodium carbonate is the pH = p K a2 for carbonic acid?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "D -The pH will equal the p K a2 when the concentration of HCO 3 - equals the concentration of H 2 CO 3 . This occurs when one-half of the HCO 3 - has been converted to H 2 CO 3 .",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 514."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 6,
        "choices": [
          "Na<sub>2</sub>CO<sub>3</sub> and HCl",
          "Na<sup>+</sup>, Cl<sup>-</sup>, and H<sub>2</sub>CO<sub>3</sub>",
          "HCO<sub>3</sub><sup>-</sup> and H<sup>+</sup>",
          "Na<sup>+</sup>, Cl<sup>-</sup>, H<sup>+</sup>, and CO<sub>3</sub><sup>2-</sup>"
        ],
        "questionId": 513,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p>pH versus volume of titrant added</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00530.jpg\" /></p><p>The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>, with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO<sub>3</sub><sup>-</sup> and H<sub>2</sub>CO<sub>3</sub>, respectively. G and H correspond to the quantity of acid required to reach the endpoints.</p></pre></div><p>In addition to water, what are the predominant species in solution at F?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. pH versus volume of titrant added The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na 2 CO 3 , with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO 3 - and H 2 CO 3 , respectively. G and H correspond to the quantity of acid required to reach the endpoints. In addition to water, what are the predominant species in solution at F?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "B -At G the CO 3 2- is now HCO 3 - , so no CO 3 2- remains. The Na + did not react, so it is still present as ions. The Cl - is from the HCl and remains as separate ions in solution. After G, the H + from the acid begins to convert HCO 3 - to form H 2 CO 3 , which is complete at point F leaving no HCO 3 - in the solution. Other than water, all species are strong electrolytes and exist as ions in solution. The H 2 CO 3 will be decomposing to H 2 O and CO 2 (g).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 513."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 5,
        "choices": [
          "The presence of an acid contaminant would require less acid to reach H from G than to reach G from 0.",
          "The presence of a base contaminant would require less acid to reach G from 0 than to reach F from G.",
          "The presence of a base contaminant would require more acid to reach G from 0 than to reach F from G.",
          "It is impossible to determine."
        ],
        "questionId": 512,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p>pH versus volume of titrant added</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00530.jpg\" /></p><p>The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>, with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO<sub>3</sub><sup>-</sup> and H<sub>2</sub>CO<sub>3</sub>, respectively. G and H correspond to the quantity of acid required to reach the endpoints.</p></pre></div><p>How could a student determine if there was a strong acid or a strong base contaminant in the original sample?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. pH versus volume of titrant added The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na 2 CO 3 , with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO 3 - and H 2 CO 3 , respectively. G and H correspond to the quantity of acid required to reach the endpoints. How could a student determine if there was a strong acid or a strong base contaminant in the original sample?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -It would be necessary to titrate the strong base and the CO 3 2- to reach G. However, it is only necessary to titrate the HCO 3 - to reach H, which means less acid is necessary.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 512."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 4,
        "choices": [
          "It takes more to get from G to H.",
          "It takes more to reach point G.",
          "They are the same.",
          "It is impossible to determine."
        ],
        "questionId": 511,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p>pH versus volume of titrant added</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00530.jpg\" /></p><p>The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>, with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO<sub>3</sub><sup>-</sup> and H<sub>2</sub>CO<sub>3</sub>, respectively. G and H correspond to the quantity of acid required to reach the endpoints.</p></pre></div><p>The analysis of a sample contaminated with NaHCO<sub>3</sub> gave slightly different results. How does the volume of acid necessary to reach G from 0 compare to the volume of acid necessary to get from G to H for the second sample?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. pH versus volume of titrant added The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na 2 CO 3 , with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO 3 - and H 2 CO 3 , respectively. G and H correspond to the quantity of acid required to reach the endpoints. The analysis of a sample contaminated with NaHCO 3 gave slightly different results. How does the volume of acid necessary to reach G from 0 compare to the volume of acid necessary to get from G to H for the second sample?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -At point G, all the CO 3 2- has been converted to HCO 3 - and the moles of HCO 3 - will equal the moles of CO 3 2- originally present plus the quantity of HCO 3 - originally present. It will require a greater volume of acid to titrate a greater number of moles of HCO 3 - as required for the CO 3 2- .",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 511."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 3,
        "choices": [
          "They are the same.",
          "It takes more to reach point G.",
          "It takes more to get from G to H.",
          "It is impossible to determine."
        ],
        "questionId": 510,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 3-7</b> refer to the following information.</p><p>pH versus volume of titrant added</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00530.jpg\" /></p><p>The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na<sub>2</sub>CO<sub>3</sub>, with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO<sub>3</sub><sup>-</sup> and H<sub>2</sub>CO<sub>3</sub>, respectively. G and H correspond to the quantity of acid required to reach the endpoints.</p></pre></div><p>A trial run used a sample of pure sodium carbonate. How does the volume of acid necessary to reach G from 0 compare to the volume of acid necessary to get from G to H?</p>",
        "hasImage": true,
        "plain": "Questions 3-7 refer to the following information. pH versus volume of titrant added The diagram above represents the idealized titration curve for the reaction of pure sodium carbonate, Na 2 CO 3 , with a strong acid such as hydrochloric acid, HCl. E and F represent the pH at the endpoints corresponding to the formation of HCO 3 - and H 2 CO 3 , respectively. G and H correspond to the quantity of acid required to reach the endpoints. A trial run used a sample of pure sodium carbonate. How does the volume of acid necessary to reach G from 0 compare to the volume of acid necessary to get from G to H?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -At point G, all the CO 3 2- has been converted to HCO 3 - and the moles of HCO 3 - will equal the moles of CO 3 2- originally present. It will require an equal volume of acid to titrate an equal number of moles of HCO 3 - as required for the CO 3 2- . For pure sodium carbonate, F will always be 2G.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 510."
      },
      {
        "subjectKey": "chem",
        "testNumber": 43,
        "testTitle": "AP Chemistry Practice Test 43",
        "testUrl": "https://www.crackap.com/ap/chemistry/test43.html",
        "number": 1,
        "choices": [
          "The student used the total sample volume of the acid instead of the pipetted sample volume.",
          "The student did not use the correct mole ratio in the calculation.",
          "The student did not use the correct indicator.",
          "The student contaminated the samples during preparation."
        ],
        "questionId": 508,
        "q": "<p>Oxalic acid, H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>, is a useful chemical for rust removal. A student prepared five oxalic acid samples by dissolving 0.9000 grams of oxalic acid in 100.00 mL of water and pipetting 10.00 mL samples of this solution into five separate beakers. Each of the samples was diluted with deionized water, and an appropriate indicator was added as an indicator. The samples were then titrated with standard 0.05000 <em>M</em> sodium hydroxide, NaOH, until the appearance of a permanent color change of the indicator indicated the endpoint of the titration. The following volumes were obtained. Molar mass of H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> = 90.04 g mol<sup>-1</sup>.</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00528.jpg\" /></p><p>The student calculated a concentration of approximately 0.20 <em>M</em> in each case. This is not the correct value. What is the most likely mistake that the student made?</p>",
        "hasImage": true,
        "plain": "Oxalic acid, H 2 C 2 O 4 , is a useful chemical for rust removal. A student prepared five oxalic acid samples by dissolving 0.9000 grams of oxalic acid in 100.00 mL of water and pipetting 10.00 mL samples of this solution into five separate beakers. Each of the samples was diluted with deionized water, and an appropriate indicator was added as an indicator. The samples were then titrated with standard 0.05000 M sodium hydroxide, NaOH, until the appearance of a permanent color change of the indicator indicated the endpoint of the titration. The following volumes were obtained. Molar mass of H 2 C 2 O 4 = 90.04 g mol -1 . The student calculated a concentration of approximately 0.20 M in each case. This is not the correct value. What is the most likely mistake that the student made?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "B -The first step is to calculate the true concentration of the sample to see how the student results compare. The balanced chemical equation is H 2 C 2 O 4 (aq) + 2 NaOH(aq) → Na 2 C 2 O 4 (aq) + 2 H 2 O(l) All the volumes are similar; therefore, it is possible to use any one of them and calculate an approximate molarity using rounded numbers for simplicity.  The calculated value should be about half what the student reported. This indicates that the student did not include the 1:2 mole ratio relating the acid to the base or that the student incorrectly used a relationship such as M 1 V 1 = M 2 V 2 .",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test43.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 43</a> · Question ID 508."
      },
      {
        "subjectKey": "chem",
        "testNumber": 42,
        "testTitle": "AP Chemistry Practice Test 42",
        "testUrl": "https://www.crackap.com/ap/chemistry/test42.html",
        "number": 11,
        "choices": [
          "7.1 &#215; 10<sup>3</sup> <em>M</em><sup>2</sup> s<sup>-1</sup>.",
          "7.1 &#215; 10<sup>3</sup> <em>M</em> s<sup>-1</sup>.",
          "7.1 &#215; 10<sup>3</sup> <em>M</em><sup>-2</sup> s<sup>-1</sup>.",
          "7.1 &#215; 10<sup>3</sup>."
        ],
        "questionId": 506,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-10</b> refer to the following information.</p><p>Many metal salts crystallize from solution in the form of a hydrate. If the formula of the anhydrous salt is A<sub>a</sub>X<sub>x</sub>, then the generic formula of the hydrated form would be A<sub>a</sub>X<sub>x</sub>&bull;xH<sub>2</sub>O. A student conducts an experiment to determine the formula of a metal oxide by collecting the following data:</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00526.jpg\" /></p><p>The hydrated salt is finely powdered to ensure complete water loss to produce the anhydrous salt.</p></pre></div><p>For the following reaction, 2 NO(g) + O<sub>2</sub>(g) → 2 NO<sub>2</sub>(g), the rate law is: Rate = <em>k</em>[NO]<sup>2</sup>[O<sub>2</sub>]. In one experiment, the rate of appearance of NO<sub>2</sub> was determined to be 0.0138 <em>M</em> s<sup>-1</sup> when [NO] = 0.0125 <em>M</em> and [O<sub>2</sub>] = 0.0125 <em>M</em>. What was the value of the rate constant?</p>",
        "hasImage": true,
        "plain": "Questions 6-10 refer to the following information. Many metal salts crystallize from solution in the form of a hydrate. If the formula of the anhydrous salt is A a X x , then the generic formula of the hydrated form would be A a X x •xH 2 O. A student conducts an experiment to determine the formula of a metal oxide by collecting the following data: The hydrated salt is finely powdered to ensure complete water loss to produce the anhydrous salt. For the following reaction, 2 NO(g) + O 2 (g) → 2 NO 2 (g), the rate law is: Rate = k [NO] 2 [O 2 ]. In one experiment, the rate of appearance of NO 2 was determined to be 0.0138 M s -1 when [NO] = 0.0125 M and [O 2 ] = 0.0125 M . What was the value of the rate constant?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -No calculations are necessary as this is the only answer with the correct units.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test42.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 42</a> · Question ID 506."
      },
      {
        "subjectKey": "chem",
        "testNumber": 42,
        "testTitle": "AP Chemistry Practice Test 42",
        "testUrl": "https://www.crackap.com/ap/chemistry/test42.html",
        "number": 10,
        "choices": [
          "MnO<sub>2</sub>",
          "Mn<sub>3</sub>O<sub>4</sub>",
          "Mn<sub>2</sub>O<sub>3</sub>",
          "MnO"
        ],
        "questionId": 505,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-10</b> refer to the following information.</p><p>Many metal salts crystallize from solution in the form of a hydrate. If the formula of the anhydrous salt is A<sub>a</sub>X<sub>x</sub>, then the generic formula of the hydrated form would be A<sub>a</sub>X<sub>x</sub>&bull;xH<sub>2</sub>O. A student conducts an experiment to determine the formula of a metal oxide by collecting the following data:</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00526.jpg\" /></p><p>The hydrated salt is finely powdered to ensure complete water loss to produce the anhydrous salt.</p></pre></div><p>Manganese normally forms one of four oxides. The oxides are MnO, Mn<sub>2</sub>O<sub>3</sub>, MnO<sub>2</sub>, and Mn<sub>3</sub>O<sub>4</sub>. Which of the four oxides has the highest percentage of oxygen? (Molar masses: O = 16.0 g mol<sup>-1</sup>, Mn = 54.9 g mol<sup>-1</sup>, MnO = 70.9 g mol<sup>-1</sup>, Mn<sub>2</sub>O<sub>3</sub> = 157.8 g mol<sup>-1</sup>, MnO<sub>2</sub> = 86.9 g mol<sup>-1</sup>, and Mn<sub>3</sub>O<sub>4</sub> = 228.7 g mol<sup>-1</sup>.)</p>",
        "hasImage": true,
        "plain": "Questions 6-10 refer to the following information. Many metal salts crystallize from solution in the form of a hydrate. If the formula of the anhydrous salt is A a X x , then the generic formula of the hydrated form would be A a X x •xH 2 O. A student conducts an experiment to determine the formula of a metal oxide by collecting the following data: The hydrated salt is finely powdered to ensure complete water loss to produce the anhydrous salt. Manganese normally forms one of four oxides. The oxides are MnO, Mn 2 O 3 , MnO 2 , and Mn 3 O 4 . Which of the four oxides has the highest percentage of oxygen? (Molar masses: O = 16.0 g mol -1 , Mn = 54.9 g mol -1 , MnO = 70.9 g mol -1 , Mn 2 O 3 = 157.8 g mol -1 , MnO 2 = 86.9 g mol -1 , and Mn 3 O 4 = 228.7 g mol -1 .)",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A -The general equation to determine the percent oxygen in the sample is: Percent oxygen = However, no percent calculation is necessary. The sample with the highest Mn:O ratio will have the highest percentage. The ratios are: MnO = 1:1, Mn 2 O 3 = 1:15, MnO 2 = 1:2, and Mn 3 O 4 = 1:1.3, which means that MnO 2 will have the highest percentage.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test42.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 42</a> · Question ID 505."
      },
      {
        "subjectKey": "chem",
        "testNumber": 42,
        "testTitle": "AP Chemistry Practice Test 42",
        "testUrl": "https://www.crackap.com/ap/chemistry/test42.html",
        "number": 9,
        "choices": [
          "A<sub>a</sub>X<sub>x</sub>&bull;5H<sub>2</sub>O",
          "A<sub>a</sub>X<sub>x</sub>&bull;10H<sub>2</sub>O",
          "A<sub>a</sub>X<sub>x</sub>&bull;2H<sub>2</sub>O",
          "A<sub>a</sub>X<sub>x</sub>&bull;6H<sub>2</sub>O"
        ],
        "questionId": 504,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-10</b> refer to the following information.</p><p>Many metal salts crystallize from solution in the form of a hydrate. If the formula of the anhydrous salt is A<sub>a</sub>X<sub>x</sub>, then the generic formula of the hydrated form would be A<sub>a</sub>X<sub>x</sub>&bull;xH<sub>2</sub>O. A student conducts an experiment to determine the formula of a metal oxide by collecting the following data:</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00526.jpg\" /></p><p>The hydrated salt is finely powdered to ensure complete water loss to produce the anhydrous salt.</p></pre></div><p>In another experiment on a different metal hydrate a student found that the salt was 62.9% water. In this case, the molar mass of the anhydrous salt was 106 g mol<sup>-1</sup>. Which of the following general formulas gives the correct value of <em>x</em>?</p>",
        "hasImage": true,
        "plain": "Questions 6-10 refer to the following information. Many metal salts crystallize from solution in the form of a hydrate. If the formula of the anhydrous salt is A a X x , then the generic formula of the hydrated form would be A a X x •xH 2 O. A student conducts an experiment to determine the formula of a metal oxide by collecting the following data: The hydrated salt is finely powdered to ensure complete water loss to produce the anhydrous salt. In another experiment on a different metal hydrate a student found that the salt was 62.9% water. In this case, the molar mass of the anhydrous salt was 106 g mol -1 . Which of the following general formulas gives the correct value of x ?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "B -It is necessary to determine the empirical formula of the compound. If the sample is 63% water, then it is 37% anhydrous salt. Assuming 100 grams of compound, the masses of water and anhydrous salt are 63 g and 37 g, respectively. Converting each of these to moles gives:  Since there are ten times as many moles of water as moles of the anhydrous salt, the formula must be A a X x •10H 2 O.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test42.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 42</a> · Question ID 504."
      },
      {
        "subjectKey": "chem",
        "testNumber": 42,
        "testTitle": "AP Chemistry Practice Test 42",
        "testUrl": "https://www.crackap.com/ap/chemistry/test42.html",
        "number": 8,
        "choices": [
          "The sample dried further overnight.",
          "The student performed one or more weighings before the crucible had cooled to room temperature.",
          "The sample absorbed water from the air overnight.",
          "The sample decomposed to another salt."
        ],
        "questionId": 503,
        "q": "<div class=\"stimulus\"><pre><p><b>Questions 6-10</b> refer to the following information.</p><p>Many metal salts crystallize from solution in the form of a hydrate. If the formula of the anhydrous salt is A<sub>a</sub>X<sub>x</sub>, then the generic formula of the hydrated form would be A<sub>a</sub>X<sub>x</sub>&bull;xH<sub>2</sub>O. A student conducts an experiment to determine the formula of a metal oxide by collecting the following data:</p><p><img src=\"assets/source-lock/chem/ap/chemistry/a5/Image00526.jpg\" /></p><p>The hydrated salt is finely powdered to ensure complete water loss to produce the anhydrous salt.</p></pre></div><p>The student did not have time to finish the experiment during the lab period and was forced to store the anhydrous salt and crucible in his lab drawer until the next day. At the beginning of the next lab period the student weighed the anhydrous salt and beaker. After calculating the percent water in the sample, the student found that the percentage was lower than predicted. Assuming all weighing were done correctly, what might be the cause of the lower than expected percentage?</p>",
        "hasImage": true,
        "plain": "Questions 6-10 refer to the following information. Many metal salts crystallize from solution in the form of a hydrate. If the formula of the anhydrous salt is A a X x , then the generic formula of the hydrated form would be A a X x •xH 2 O. A student conducts an experiment to determine the formula of a metal oxide by collecting the following data: The hydrated salt is finely powdered to ensure complete water loss to produce the anhydrous salt. The student did not have time to finish the experiment during the lab period and was forced to store the anhydrous salt and crucible in his lab drawer until the next day. At the beginning of the next lab period the student weighed the anhydrous salt and beaker. After calculating the percent water in the sample, the student found that the percentage was lower than predicted. Assuming all weighing were done correctly, what might be the cause of the lower than expected percentage?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "C -Leaving the sample overnight in the lab drawer would cause the sample to be no longer anhydrous. The mass of the “anhydrous” salt would now be higher indicating a smaller amount of water loss, which would lead to a lower percentage of water in the sample.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/chemistry/test42.html\" target=\"_blank\" rel=\"noreferrer\">AP Chemistry Practice Test 42</a> · Question ID 503."
      }
    ],
    "frq": [
      {
        "title": "Official 2023 FRQ 1",
        "text": "<strong>Official 2023 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 1 (2023)<br>Use the official prompt packet for Question 1. Work the chemistry from setup through justification before scoring yourself.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/chem/ap23-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-chemistry.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/chem/ap23-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-chemistry.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Identifies the governing chemistry principle or relationship needed to start the problem.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Uses the prompt data, figure, or table correctly rather than relying on a memorized shortcut.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows a valid setup with equations, particle reasoning, or stoichiometric relationships.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Carries the calculation or causal reasoning through to a defensible conclusion.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Justifies the result clearly with units, chemistry vocabulary, and no major conceptual contradiction.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Check the scoring-guidelines PDF after self-scoring and compare your work against the official point-by-point expectations for the chosen question.",
        "scoringNotes": "A strong chemistry response explicitly ties every claim to particle-level reasoning, data from the prompt, or a shown calculation.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/chem/ap23-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-chemistry.pdf</a> and <a href=\"assets/source-lock/official/chem/ap23-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-chemistry.pdf</a>."
      },
      {
        "title": "Official 2023 FRQ 4",
        "text": "<strong>Official 2023 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 4 (2023)<br>Use the official prompt packet for Question 4. Treat it as a second, medium-length free response and self-score with the checklist.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/chem/ap23-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-chemistry.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/chem/ap23-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-chemistry.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Identifies the governing chemistry principle or relationship needed to start the problem.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Uses the prompt data, figure, or table correctly rather than relying on a memorized shortcut.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows a valid setup with equations, particle reasoning, or stoichiometric relationships.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Carries the calculation or causal reasoning through to a defensible conclusion.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Justifies the result clearly with units, chemistry vocabulary, and no major conceptual contradiction.",
            "pts": 1
          }
        ],
        "sampleAnswer": "After drafting, compare your structure with the official scoring guidelines and revise missing justification before assigning your final checklist score.",
        "scoringNotes": "Do not give yourself the point unless the reasoning and the conclusion both appear in the written response.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/chem/ap23-frq-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-chemistry.pdf</a> and <a href=\"assets/source-lock/official/chem/ap23-sg-chemistry.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-chemistry.pdf</a>."
      }
    ]
  },
  {
    "id": "stats_set1",
    "subjectKey": "stats",
    "examName": "AP Statistics",
    "title": "Set 1",
    "cardLabel": "1",
    "badge": "SOURCE LOCK",
    "description": "18 CrackAP MCQ balanced across units + 2 official FRQ packets.",
    "mcTime": 32,
    "frqTime": 45,
    "liveFeedback": true,
    "liveRubric": true,
    "scoreProfile": {
      "mcWeight": 60,
      "frqTotal": 10,
      "frqWeight": 40,
      "compositeMax": 100,
      "thresholds": {
        "5": 82,
        "4": 68,
        "3": 54,
        "2": 40
      },
      "mcLabel": "60.00",
      "frqLabel": "40.00"
    },
    "mc": [
      {
        "subjectKey": "stats",
        "testNumber": 44,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test44.html",
        "number": 12,
        "choices": [
          "I only",
          "I and II only",
          "I and III only",
          "II and III only",
          "All three are plausible."
        ],
        "questionId": 443,
        "q": "<p>Question below refers to the following population pyramids (source: U.S. Census Bureau).</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p96.jpg\" /></p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p96-1.jpg\" /></p><p>Which of the following statements are plausible, given the graphs?</p><p>I.Canadian women tend to live longer than men.</p><p>II.The recent civil war in Liberia, with the extensive use of child soldiers, has had an impact on the population age distribution.</p><p>III.Canadian demographics show a decreasing birth rate.</p>",
        "hasImage": true,
        "plain": "Question below refers to the following population pyramids (source: U.S. Census Bureau). Which of the following statements are plausible, given the graphs? I.Canadian women tend to live longer than men. II.The recent civil war in Liberia, with the extensive use of child soldiers, has had an impact on the population age distribution. III.Canadian demographics show a decreasing birth rate.",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) In the Canadian graph, all higher age groups show greater numbers of women than men. In the Liberian graph, the smaller 15-19 age group shows a definite break with the overall pattern (a great number of child soldiers died in the fighting). In the Canadian graph, the narrowing base indicates a decreasing birth rate.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3</a> · Question ID 443."
      },
      {
        "subjectKey": "stats",
        "testNumber": 44,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test44.html",
        "number": 11,
        "choices": [
          "Liberia",
          "Canada",
          "You can't tell without calculating means.",
          "You can't tell without calculating medians.",
          "You can't tell without calculating some measure of variability."
        ],
        "questionId": 442,
        "q": "<p>Question below refers to the following population pyramids (source: U.S. Census Bureau).</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p96.jpg\" /></p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p96-1.jpg\" /></p><p>Which country has more children younger than 10 years of age?</p>",
        "hasImage": true,
        "plain": "Question below refers to the following population pyramids (source: U.S. Census Bureau). Which country has more children younger than 10 years of age?",
        "choiceCount": 5,
        "answer": 1,
        "explanation": "(B) There are about 1.2 million younger than the age of 10 in Liberia (boys and girls) and roughly 3.5 million in Canada.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3</a> · Question ID 442."
      },
      {
        "subjectKey": "stats",
        "testNumber": 44,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test44.html",
        "number": 10,
        "choices": [
          "0-4",
          "15-19",
          "30-34",
          "40-44",
          "There is insufficient information to approximate the median."
        ],
        "questionId": 441,
        "q": "<p>Question below refers to the following population pyramids (source: U.S. Census Bureau).</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p96.jpg\" /></p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p96-1.jpg\" /></p><p>What is the approximate median age of the Liberian population?</p>",
        "hasImage": true,
        "plain": "Question below refers to the following population pyramids (source: U.S. Census Bureau). What is the approximate median age of the Liberian population?",
        "choiceCount": 5,
        "answer": 1,
        "explanation": "(B) Roughly 50% of total bar length is above and below the 15-19 interval.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3</a> · Question ID 441."
      },
      {
        "subjectKey": "stats",
        "testNumber": 47,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables",
        "testUrl": "https://www.crackap.com/ap/statistics/test47.html",
        "number": 11,
        "choices": [
          "10",
          "40",
          "60",
          "75",
          "100"
        ],
        "questionId": 480,
        "q": "<p>In the following table, what value for <span class=\"italic\">n</span> results in a table showing perfect independence?</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p155.jpg\" /></p>",
        "hasImage": true,
        "plain": "In the following table, what value for n results in a table showing perfect independence?",
        "choiceCount": 5,
        "answer": 3,
        "explanation": "(D) Relative frequencies must be equal. Either looking at rows gives or looking at columns gives . We could also set up a proportion or . Solving any of these equations gives n = 75.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test47.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables</a> · Question ID 480."
      },
      {
        "subjectKey": "stats",
        "testNumber": 47,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables",
        "testUrl": "https://www.crackap.com/ap/statistics/test47.html",
        "number": 10,
        "choices": [
          "Yes, because the corresponding segments of the three bars have different lengths.",
          "Yes, because the heights of the three bars are identical.",
          "Yes, because there are three segments and three bars.",
          "No, because the heights of the three bars are identical.",
          "No, because summing the corresponding segments for classical, summing the corresponding segments for country, and summing the corresponding segments for pop or rock all give approximately the same total."
        ],
        "questionId": 479,
        "q": "<p>Question below is based on the following: A study of music preferences in three geographic locations resulted in the following segmented bar chart:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p154.jpg\" /></p><p>Based on the given segmented bar chart, does there seem to be a relationship between geographic location and music preference?</p>",
        "hasImage": true,
        "plain": "Question below is based on the following: A study of music preferences in three geographic locations resulted in the following segmented bar chart: Based on the given segmented bar chart, does there seem to be a relationship between geographic location and music preference?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) The different lengths of corresponding segments show that in different geographic regions different percentages of people prefer each of the music categories.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test47.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables</a> · Question ID 479."
      },
      {
        "subjectKey": "stats",
        "testNumber": 47,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables",
        "testUrl": "https://www.crackap.com/ap/statistics/test47.html",
        "number": 9,
        "choices": [
          "This is a coincidence.",
          "This happened because each bar shows a complete distribution.",
          "This happened because there are three bars each divided into three segments.",
          "This happened because of the nature of musical patterns.",
          "None of the above is true."
        ],
        "questionId": 478,
        "q": "<p>Question below is based on the following: A study of music preferences in three geographic locations resulted in the following segmented bar chart:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p154.jpg\" /></p><p>All three bars have a height of 100%. Which of the following is true?</p>",
        "hasImage": true,
        "plain": "Question below is based on the following: A study of music preferences in three geographic locations resulted in the following segmented bar chart: All three bars have a height of 100%. Which of the following is true?",
        "choiceCount": 5,
        "answer": 1,
        "explanation": "(B) In a complete distribution, the probabilities sum to 1, and the relative frequencies total 100%.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test47.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables</a> · Question ID 478."
      },
      {
        "subjectKey": "stats",
        "testNumber": 51,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test51.html",
        "number": 8,
        "choices": [
          "An experiment with a single factor",
          "An experiment with control group and blinding",
          "An experiment with blocking",
          "An observational study with comparison and randomization",
          "An observational study with little, if any, bias"
        ],
        "questionId": 512,
        "q": "<p>Some researchers believe that too much iron in the blood can raise the level of cholesterol. The iron level in the blood can be lowered by making periodic blood donations. A study is performed by randomly selecting half of a group of volunteers to give periodic blood donations while the rest do not. Is this an experiment or an observational study?</p>",
        "hasImage": false,
        "plain": "Some researchers believe that too much iron in the blood can raise the level of cholesterol. The iron level in the blood can be lowered by making periodic blood donations. A study is performed by randomly selecting half of a group of volunteers to give periodic blood donations while the rest do not. Is this an experiment or an observational study?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) This study is an experiment because a treatment (periodic removal of a pint of blood) is imposed. There is no blinding because the subjects clearly know whether or not they are giving blood. There is no blocking because the subjects are not divided into blocks before random assignment to treatments. For example, blocking would have been used if the subjects had been separated by gender or age before random assignment to give or not give blood donations. There is a single factor—giving or not giving blood.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test51.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2</a> · Question ID 512."
      },
      {
        "subjectKey": "stats",
        "testNumber": 51,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test51.html",
        "number": 7,
        "choices": [
          "No, because the volunteers know whether they are drinking a blue or green drink.",
          "No, because the volunteers know whether or not they play on a high school team.",
          "Yes, by having the experimenter in a separate room randomly pick one of two containers and remotely have a drink poured from that container.",
          "Yes, by having the statistician analyzing the results not knowing which volunteer sampled which drink.",
          "Yes, by having the volunteers drink out of solid colored thermoses, so that they don't know the color of the drink they are tasting."
        ],
        "questionId": 511,
        "q": "<p>Do teenagers prefer sports drinks colored blue or green? Two different colorings, which have no effect on taste, are used on the identical drink to result in a blue and a green beverage; volunteer teenagers are randomly assigned to drink one or the other colored beverage; and the volunteers then rate the beverage on a one to ten scale. Because of concern that sports interest may affect the outcome, the volunteers are first blocked by whether or not they play on a high school team. Is blinding possible in this experiment?</p>",
        "hasImage": false,
        "plain": "Do teenagers prefer sports drinks colored blue or green? Two different colorings, which have no effect on taste, are used on the identical drink to result in a blue and a green beverage; volunteer teenagers are randomly assigned to drink one or the other colored beverage; and the volunteers then rate the beverage on a one to ten scale. Because of concern that sports interest may affect the outcome, the volunteers are first blocked by whether or not they play on a high school team. Is blinding possible in this experiment?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) Blinding does have to do with whether or not the subjects know which treatment (color in this experiment) they are receiving. However, drinking out of solid colored thermoses makes no sense since the beverages are identical except for color and the point of the experiment is the teenager's reaction to color. Blinding has nothing to do with blocking (team participation in this experiment).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test51.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2</a> · Question ID 511."
      },
      {
        "subjectKey": "stats",
        "testNumber": 51,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test51.html",
        "number": 6,
        "choices": [
          "Each subject might receive both treatments.",
          "Each pair of subjects receives the identical treatment, and differences in their responses are noted.",
          "Blocking is one form of matched-pair design.",
          "Stratification into two equal sized strata is an example of matched pairs.",
          "Randomization is unnecessary in true matched pair designs."
        ],
        "questionId": 510,
        "q": "<p>Which of the following is a true statement about the design of matched-pair experiments?</p>",
        "hasImage": false,
        "plain": "Which of the following is a true statement about the design of matched-pair experiments?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) Each subject might receive both treatments, as, for example, in the Pepsi-Coke taste comparison study. The point is to give each subject in a matched pair a different treatment and note any difference in responses. Matched-pair experiments are a particular example of blocking, not vice versa. Stratification refers to a sampling method, not to experimental design. Randomization is used to decide which of a pair gets which treatment or which treatment is given first if one subject is to receive both.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test51.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2</a> · Question ID 510."
      },
      {
        "subjectKey": "stats",
        "testNumber": 57,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: The Normal Distribution 1",
        "testUrl": "https://www.crackap.com/ap/statistics/test57.html",
        "number": 4,
        "choices": [
          "Larger mean, <span class=\"italic\">a</span>; larger standard deviation, <span class=\"italic\">a</span>",
          "Larger mean, <span class=\"italic\">a</span>; larger standard deviation, <span class=\"italic\">b</span>",
          "Larger mean, <span class=\"italic\">b</span>; larger standard deviation, <span class=\"italic\">a</span>",
          "Larger mean, <span class=\"italic\">b</span>; larger standard deviation, <span class=\"italic\">b</span>",
          "Larger mean, <span class=\"italic\">b</span>; same standard deviation"
        ],
        "questionId": 569,
        "q": "<p>Consider the following two normal curves:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p260.jpg\" /></p><p>Which has the larger mean and which has the larger standard deviation?</p>",
        "hasImage": true,
        "plain": "Consider the following two normal curves: Which has the larger mean and which has the larger standard deviation?",
        "choiceCount": 5,
        "answer": 2,
        "explanation": "(C) Curve a has mean 6 and standard deviation 2, while curve b has mean 18 and standard deviation 1.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test57.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: The Normal Distribution 1</a> · Question ID 569."
      },
      {
        "subjectKey": "stats",
        "testNumber": 55,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 4",
        "testUrl": "https://www.crackap.com/ap/statistics/test55.html",
        "number": 5,
        "choices": [
          "0.37",
          "0.63",
          "3.7",
          "6.3",
          "None of the above"
        ],
        "questionId": 551,
        "q": "<p>Suppose we have a random variable <span class=\"italic\">X</span> where for the values <span class=\"italic\">k</span> = 0, ..., 10, the associated probabilities are <img src=\"assets/source-lock/stats/ap/statistics/br/p223-1.jpg\" />. What is the mean of <span class=\"italic\">X</span>?</p>",
        "hasImage": true,
        "plain": "Suppose we have a random variable X where for the values k = 0, ..., 10, the associated probabilities are . What is the mean of X ?",
        "choiceCount": 5,
        "answer": 2,
        "explanation": "(C) This is a binomial with n = 10 and p = 0.37, and so the mean is np = 10(0.37) = 3.7.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test55.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 4</a> · Question ID 551."
      },
      {
        "subjectKey": "stats",
        "testNumber": 55,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 4",
        "testUrl": "https://www.crackap.com/ap/statistics/test55.html",
        "number": 3,
        "choices": [
          "Yes.",
          "No, because probabilities cannot be negative.",
          "No, because probabilities cannot be greater than 1.",
          "No, because the probabilities do not sum to 1.",
          "Not enough information is given to answer the question."
        ],
        "questionId": 549,
        "q": "<p>Can the function <img src=\"assets/source-lock/stats/ap/statistics/br/p223.jpg\" />, for <span class=\"italic\">x</span> = 1, 2, and 3, be the probability distribution for some random variable?</p>",
        "hasImage": true,
        "plain": "Can the function , for x = 1, 2, and 3, be the probability distribution for some random variable?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) The probabilities , , and are all nonnegative, and they sum to 1.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test55.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 4</a> · Question ID 549."
      },
      {
        "subjectKey": "stats",
        "testNumber": 60,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test60.html",
        "number": 7,
        "choices": [
          "<span class=\"italic\">n</span> = 100 and <span class=\"italic\">p</span> = 0.1",
          "<span class=\"italic\">n</span> = 100 and <span class=\"italic\">p</span> = 0.5",
          "<span class=\"italic\">n</span> = 100 and <span class=\"italic\">p</span> = 0.99",
          "<span class=\"italic\">n</span> = 1000 and <span class=\"italic\">p</span> = 0.1",
          "<span class=\"italic\">n</span> = 1000 and <span class=\"italic\">p</span> = 0.5"
        ],
        "questionId": 598,
        "q": "<p>A study is to be performed to estimate the proportion of voters who believe the economy is \"heading in the right direction.\" Which of the following pairs of sample size and population proportion <span class=\"italic\">p</span> will result in the smallest variance for the sampling distribution of <img src=\"assets/source-lock/stats/ap/statistics/br/pcap.jpg\" />?</p>",
        "hasImage": true,
        "plain": "A study is to be performed to estimate the proportion of voters who believe the economy is \"heading in the right direction.\" Which of the following pairs of sample size and population proportion p will result in the smallest variance for the sampling distribution of ?",
        "choiceCount": 5,
        "answer": 3,
        "explanation": "(D) The variance for the sampling distribution of equals . A larger n in the denominator results in a smaller quotient, and (0.1)(0.9) < (0.5)(0.5).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test60.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2</a> · Question ID 598."
      },
      {
        "subjectKey": "stats",
        "testNumber": 60,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test60.html",
        "number": 9,
        "choices": [
          "<img src=\"https://img.crackap.com/ap/statistics/br/p287.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p287-1.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p287-2.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p287-3.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p287-4.jpg\" />"
        ],
        "questionId": 600,
        "q": "<p>In a recent study of fatal automobile crashes (<span class=\"italic\"><a>http://www-nrd.nhtsa.dot.gov/Pubs/811870.pdf</a>)</span> for drivers ages 21-24, 32% were legally drunk, while for drivers ages 25-34, 29% were legally drunk. A simulation is conducted in which a random sample of 400 drivers ages 21-24 and a random sample of 400 drivers 25-34, all involved in fatal automobile crashes, are selected. The difference in proportions of those who were legally drunk is calculated, and this simulation is repeated 1000 times. Which of the following is most likely to occur in the simulated sampling distribution of the difference between the two sample proportions?</p>",
        "hasImage": false,
        "plain": "In a recent study of fatal automobile crashes ( http://www-nrd.nhtsa.dot.gov/Pubs/811870.pdf ) for drivers ages 21-24, 32% were legally drunk, while for drivers ages 25-34, 29% were legally drunk. A simulation is conducted in which a random sample of 400 drivers ages 21-24 and a random sample of 400 drivers 25-34, all involved in fatal automobile crashes, are selected. The difference in proportions of those who were legally drunk is calculated, and this simulation is repeated 1000 times. Which of the following is most likely to occur in the simulated sampling distribution of the difference between the two sample proportions?",
        "choiceCount": 5,
        "answer": 2,
        "explanation": "(C) The sampling distribution is roughly normal with a mean of μ = 0.32 - 0.29 = 0.03 and a standard deviation of",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test60.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2</a> · Question ID 600."
      },
      {
        "subjectKey": "stats",
        "testNumber": 60,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test60.html",
        "number": 8,
        "choices": [
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp286a.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp286b.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp286c.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp286d.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp286e.jpg\" />"
        ],
        "questionId": 599,
        "q": "<p>A random sample of 50 high school girls has a mean of 287 Facebook friends with a standard deviation of 68 friends. An independent random sample of 50 high school boys has a mean of 165 Facebook friends with a standard deviation of 45 friends. What is the standard error of the difference (girls - boys) between the sample means?</p>",
        "hasImage": false,
        "plain": "A random sample of 50 high school girls has a mean of 287 Facebook friends with a standard deviation of 68 friends. An independent random sample of 50 high school boys has a mean of 165 Facebook friends with a standard deviation of 45 friends. What is the standard error of the difference (girls - boys) between the sample means?",
        "choiceCount": 5,
        "answer": 3,
        "explanation": "(D) Variances add, and so .",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test60.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2</a> · Question ID 599."
      },
      {
        "subjectKey": "stats",
        "testNumber": 66,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line",
        "testUrl": "https://www.crackap.com/ap/statistics/test66.html",
        "number": 14,
        "choices": [
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp399a.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp399b.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp399c.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp399d.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp399e.jpg\" />"
        ],
        "questionId": 678,
        "q": "<p>Can Points Per Game (PPG) be predicted based on players' salaries? For the Chicago Bulls 2015-2016 season, a linear association study yields the following computer output:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p399.jpg\" /></p><p>Which of the following is an appropriate test statistic for testing the null hypothesis that the slope of the regression line is greater than 0? (Assume all conditions for inference are met.)</p>",
        "hasImage": true,
        "plain": "Can Points Per Game (PPG) be predicted based on players' salaries? For the Chicago Bulls 2015-2016 season, a linear association study yields the following computer output: Which of the following is an appropriate test statistic for testing the null hypothesis that the slope of the regression line is greater than 0? (Assume all conditions for inference are met.)",
        "choiceCount": 5,
        "answer": 3,
        "explanation": "(D) With H 0 : β = 0 and H a : β > 0, .",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test66.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line</a> · Question ID 678."
      },
      {
        "subjectKey": "stats",
        "testNumber": 66,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line",
        "testUrl": "https://www.crackap.com/ap/statistics/test66.html",
        "number": 12,
        "choices": [
          "Variability in calories among slices",
          "Variability in fat among slices",
          "Variability in the slope (g/kcal) of the regression line",
          "Variability in the <span class=\"italic\">y</span>-intercept of the regression line",
          "Variability in the residuals"
        ],
        "questionId": 676,
        "q": "<p>To study the relationship between calories (kcal) and fat (g) in pizza, slices of 14 randomly selected major brand pizzas are chemically analyzed. Computer printout for regression:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p398-1.jpg\" /></p><p>What is measured by S = 1.27515?</p>",
        "hasImage": true,
        "plain": "To study the relationship between calories (kcal) and fat (g) in pizza, slices of 14 randomly selected major brand pizzas are chemically analyzed. Computer printout for regression: What is measured by S = 1.27515?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) In computer printouts of regression analysis, \"S\" typically gives the standard deviation of the residuals.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test66.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line</a> · Question ID 676."
      },
      {
        "subjectKey": "stats",
        "testNumber": 66,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line",
        "testUrl": "https://www.crackap.com/ap/statistics/test66.html",
        "number": 11,
        "choices": [
          "No, because <span class=\"italic\">r</span><span class=\"sup\">2</span><span class=\"italic\">,</span> the coefficient of determination, is too small.",
          "No, because 0.128 is above any reasonable significance level.",
          "Yes, because by any reasonable observation, taller women tend to have larger dress sizes.",
          "Yes, because the computer printout does give a regression equation.",
          "There is sufficient evidence at the 10% significance level, but not at the 5% level."
        ],
        "questionId": 675,
        "q": "<p>Can dress size be predicted from a woman's height? In a random sample of 20 female high school students, dress size versus height (cm) gives the following regression results:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p398.jpg\" /></p><p>Is there statistical evidence of a linear relationship between dress size and height?</p>",
        "hasImage": true,
        "plain": "Can dress size be predicted from a woman's height? In a random sample of 20 female high school students, dress size versus height (cm) gives the following regression results: Is there statistical evidence of a linear relationship between dress size and height?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) The relevant P -value is 0.065 which is less than 0.10 but greater than 0.05.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test66.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line</a> · Question ID 675."
      }
    ],
    "frq": [
      {
        "title": "Official 2025 FRQ 1",
        "text": "<strong>Official 2025 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 1 (2025)<br>Answer official Question 1 from the local FRQ packet. Use the checklist to verify setup, calculations, and interpretation in context.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/stats/ap25-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-statistics.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/stats/ap25-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-statistics.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Names the correct statistical parameter, procedure, or model for the task.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Checks and uses the relevant conditions or study design correctly.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows the needed calculation, graph reading, or probability/statistic setup accurately.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Interprets the result in the context of the problem instead of giving only raw numbers.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "States the inference or conclusion with appropriate statistical language and no major overclaim.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Use the official scoring guidelines to compare whether you named the right procedure, checked conditions, and interpreted the result in context.",
        "scoringNotes": "Stats responses lose points most often when the arithmetic is fine but the conclusion is not tied back to the context.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/stats/ap25-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-statistics.pdf</a> and <a href=\"assets/source-lock/official/stats/ap25-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-statistics.pdf</a>."
      },
      {
        "title": "Official 2025 FRQ 6",
        "text": "<strong>Official 2025 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 6 Investigative Task (2025)<br>Answer the investigative task from the local FRQ packet. Build the response in stages and then self-score line by line.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/stats/ap25-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-statistics.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/stats/ap25-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-statistics.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Names the correct statistical parameter, procedure, or model for the task.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Checks and uses the relevant conditions or study design correctly.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows the needed calculation, graph reading, or probability/statistic setup accurately.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Interprets the result in the context of the problem instead of giving only raw numbers.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "States the inference or conclusion with appropriate statistical language and no major overclaim.",
            "pts": 1
          }
        ],
        "sampleAnswer": "For the investigative task, compare your structure against the official rubric before reading the full sample responses.",
        "scoringNotes": "Treat each checklist line independently. Missing conditions or context language should cost the point even if the numeric work is correct.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/stats/ap25-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-statistics.pdf</a> and <a href=\"assets/source-lock/official/stats/ap25-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-statistics.pdf</a>."
      }
    ]
  },
  {
    "id": "stats_set2",
    "subjectKey": "stats",
    "examName": "AP Statistics",
    "title": "Set 2",
    "cardLabel": "2",
    "badge": "SOURCE LOCK",
    "description": "18 CrackAP MCQ balanced across units + 2 official FRQ packets.",
    "mcTime": 32,
    "frqTime": 45,
    "liveFeedback": true,
    "liveRubric": true,
    "scoreProfile": {
      "mcWeight": 60,
      "frqTotal": 10,
      "frqWeight": 40,
      "compositeMax": 100,
      "thresholds": {
        "5": 82,
        "4": 68,
        "3": 54,
        "2": 40
      },
      "mcLabel": "60.00",
      "frqLabel": "40.00"
    },
    "mc": [
      {
        "subjectKey": "stats",
        "testNumber": 44,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test44.html",
        "number": 9,
        "choices": [
          "<img src=\"https://img.crackap.com/ap/statistics/br/p95-2a.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p95-2b.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p95-2c.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p95-2d.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p95-2e.jpg\" />"
        ],
        "questionId": 440,
        "q": "<p>The following boxplots were constructed from SAT math scores of boys and girls at a high school:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p95-1.jpg\" /></p><p>Which of the following is a possible boxplot for the combined scores of all the students?</p>",
        "hasImage": true,
        "plain": "The following boxplots were constructed from SAT math scores of boys and girls at a high school: Which of the following is a possible boxplot for the combined scores of all the students?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) The minimum of the combined set of scores must be the min of the boys since it is lower; the maximum of the combined set of scores must be the max of the girls since it is higher; the first quartile must be the same as the identical first quartiles of the two original distributions. There are no outliers (scores more than 1.5(IQR) from the first and third quartiles).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3</a> · Question ID 440."
      },
      {
        "subjectKey": "stats",
        "testNumber": 44,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test44.html",
        "number": 8,
        "choices": [
          "I and II",
          "I and IV",
          "II and V",
          "III and V",
          "I, II, and III"
        ],
        "questionId": 439,
        "q": "<p>Consider the following back-to-back stemplots comparing car battery lives (in months) of samples of two popular brands.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p95.jpg\" /></p><p>Which of the following are true statements?</p><p>I.The sample sizes are the same.</p><p>II.The ranges are the same.</p><p>III.The variances are the same.</p><p>IV.The means are the same.</p><p>V.The medians are the same.</p>",
        "hasImage": true,
        "plain": "Consider the following back-to-back stemplots comparing car battery lives (in months) of samples of two popular brands. Which of the following are true statements? I.The sample sizes are the same. II.The ranges are the same. III.The variances are the same. IV.The means are the same. V.The medians are the same.",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) Both sets have 20 elements. The ranges, 76-37 = 39 and 86-47 = 39, are equal. Brand A clearly has the larger mean and median, and with its skewness it also has the larger variance.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3</a> · Question ID 439."
      },
      {
        "subjectKey": "stats",
        "testNumber": 44,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test44.html",
        "number": 7,
        "choices": [
          "The empirical rule applies only to set A.",
          "The mean of set A looks to be greater than the mean of set B.",
          "The mean of set B looks to be greater than the mean of set A.",
          "Both sets have roughly the same variance.",
          "The standard deviation of set B is greater than 5."
        ],
        "questionId": 438,
        "q": "<p><img src=\"assets/source-lock/stats/ap/statistics/br/p94-1.jpg\" /></p><p>Which of the following statements about the two histograms above is true?</p>",
        "hasImage": true,
        "plain": "Which of the following statements about the two histograms above is true?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) The empirical rule applies to bell-shaped data like those found in set B, not in set A. Both sets are roughly symmetric around 150 and so both should have means about 150. Set A is much more spread out than set B, and so set A has the greater variance. For bell-shaped data, about 95% of the values fall within two standard deviations of the mean and 99.7% fall within three. However, in the histogram for set B, one sees that 95% of the data are not between 140 and 160, and 99.7% are not between 135 and 165. Thus, the standard deviation for set B must be greater than 5.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3</a> · Question ID 438."
      },
      {
        "subjectKey": "stats",
        "testNumber": 47,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables",
        "testUrl": "https://www.crackap.com/ap/statistics/test47.html",
        "number": 8,
        "choices": [
          "The number of people in the Northeast who prefer pop or rock.",
          "The number of people in the West who prefer classical.",
          "The number of people in the South who prefer country.",
          "The above are all equal.",
          "It is impossible to determine the answer without knowing the actual numbers of people involved."
        ],
        "questionId": 477,
        "q": "<p>Question below is based on the following: A study of music preferences in three geographic locations resulted in the following segmented bar chart:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p154.jpg\" /></p><p>Which of the following is greatest?</p>",
        "hasImage": true,
        "plain": "Question below is based on the following: A study of music preferences in three geographic locations resulted in the following segmented bar chart: Which of the following is greatest?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) The given bar chart shows percentages, not actual numbers.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test47.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables</a> · Question ID 477."
      },
      {
        "subjectKey": "stats",
        "testNumber": 47,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables",
        "testUrl": "https://www.crackap.com/ap/statistics/test47.html",
        "number": 7,
        "choices": [
          "The percentage of those from the Northeast who prefer classical.",
          "The percentage of those from the West who prefer country.",
          "The percentage of those from the South who prefer pop or rock.",
          "The above are all equal.",
          "It is impossible to determine the answer without knowing the actual numbers of people involved."
        ],
        "questionId": 476,
        "q": "<p>Question below is based on the following: A study of music preferences in three geographic locations resulted in the following segmented bar chart:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p154.jpg\" /></p><p>Which of the following is greatest?</p>",
        "hasImage": true,
        "plain": "Question below is based on the following: A study of music preferences in three geographic locations resulted in the following segmented bar chart: Which of the following is greatest?",
        "choiceCount": 5,
        "answer": 1,
        "explanation": "(B) Based on lengths of indicated segments, the percentage from the West who prefer country is the greatest.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test47.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables</a> · Question ID 476."
      },
      {
        "subjectKey": "stats",
        "testNumber": 47,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables",
        "testUrl": "https://www.crackap.com/ap/statistics/test47.html",
        "number": 6,
        "choices": [
          "20%",
          "30%",
          "40%",
          "50%",
          "70%"
        ],
        "questionId": 475,
        "q": "<p>Question below is based on the following: A study of music preferences in three geographic locations resulted in the following segmented bar chart:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p154.jpg\" /></p><p>What percentage of those surveyed from the Northeast prefer country music?</p>",
        "hasImage": true,
        "plain": "Question below is based on the following: A study of music preferences in three geographic locations resulted in the following segmented bar chart: What percentage of those surveyed from the Northeast prefer country music?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) In the bar corresponding to the Northeast, the segment corresponding to country music stretches from the 50% level to the 70% level, indicating a length of 20%.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test47.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables</a> · Question ID 475."
      },
      {
        "subjectKey": "stats",
        "testNumber": 51,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test51.html",
        "number": 5,
        "choices": [
          "Control of confounding variables",
          "Randomization in assigning subjects to different treatments",
          "Replication of the experiment using sufficient numbers of subjects",
          "Care in observing without imposing change",
          "Isolating variability due to differences between blocks"
        ],
        "questionId": 509,
        "q": "<p>Which of the following is <span class=\"italic\">not</span> important in the design of experiments?</p>",
        "hasImage": false,
        "plain": "Which of the following is not important in the design of experiments?",
        "choiceCount": 5,
        "answer": 3,
        "explanation": "(D) Control, randomization, and replication are all important aspects of well-designed experiments. Care in observing without imposing change refers to observational studies, not experiments.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test51.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2</a> · Question ID 509."
      },
      {
        "subjectKey": "stats",
        "testNumber": 51,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test51.html",
        "number": 4,
        "choices": [
          "In an experiment some treatment is intentionally forced on one group to note the response.",
          "In an observational study information is gathered on an already existing situation.",
          "Sample surveys are observational studies, not experiments.",
          "While observational studies may suggest relationships, it is usually not possible to conclude cause and effect because of the lack of control over possible confounding variables.",
          "A complete census is the only way to establish a cause-and-effect relationship absolutely."
        ],
        "questionId": 508,
        "q": "<p>Which of the following is not true?</p>",
        "hasImage": false,
        "plain": "Which of the following is not true?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) The first two sentences can be considered part of the definitions of experiment and observational study. A sample survey does not impose any treatment; it simply counts a certain outcome, and so it is an observational study, not an experiment. A complete census can provide much information about a population, but it doesn't necessarily establish a cause-and-effect relationship among seemingly related population parameters.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test51.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2</a> · Question ID 508."
      },
      {
        "subjectKey": "stats",
        "testNumber": 51,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test51.html",
        "number": 3,
        "choices": [
          "In general, people find Western omelets with home fries more satisfying for breakfast than hot oatmeal with fruit.",
          "There is no reasonable conclusion because the subjects were volunteering rather than being randomly selected from the general population.",
          "There is no reasonable conclusion because of the small size of the sample.",
          "There is no reasonable conclusion because blinding was not used.",
          "There is no reasonable conclusion because there are too many possible confounding variables such as age, race, and ethnic background of the individual volunteers and season when the study was performed."
        ],
        "questionId": 507,
        "q": "<p>Is hot oatmeal with fruit or a Western omelet with home fries a more satisfying breakfast? Fifty volunteers are randomly split into two groups. One group is fed oatmeal with fruit, while the other is fed Western omelets with home fries. Each volunteer then rates his/her breakfast on a one to ten scale for satisfaction. If the Western omelet with home fries receives a substantially higher average score, what is a reasonable conclusion?</p>",
        "hasImage": false,
        "plain": "Is hot oatmeal with fruit or a Western omelet with home fries a more satisfying breakfast? Fifty volunteers are randomly split into two groups. One group is fed oatmeal with fruit, while the other is fed Western omelets with home fries. Each volunteer then rates his/her breakfast on a one to ten scale for satisfaction. If the Western omelet with home fries receives a substantially higher average score, what is a reasonable conclusion?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) There is nothing wrong with using volunteers—what is important is to randomly assign the volunteers into the two treatment groups. There is no way to use blinding in this study—the subjects will clearly know which breakfast they are eating. The main idea behind randomly assigning subjects to the different treatments is to control for various possible confounding variables—it is reasonable to assume that people of various ages, races, ethnic backgrounds, etc., are assigned to receive each of the treatments.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test51.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2</a> · Question ID 507."
      },
      {
        "subjectKey": "stats",
        "testNumber": 54,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test54.html",
        "number": 10,
        "choices": [
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-10.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-11.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-12.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-13.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-14.jpg\" />"
        ],
        "questionId": 544,
        "q": "<p>Question below refers to the following study: Five hundred people used a home test for HIV, and then all underwent more conclusive hospital testing. The accuracy of the home test was evidenced in the following table.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p220-1.jpg\" /></p><p>What is the <span class=\"italic\">specificity</span> of the test? That is, what is the probability of testing negative given that the person does not have HIV?</p>",
        "hasImage": true,
        "plain": "Question below refers to the following study: Five hundred people used a home test for HIV, and then all underwent more conclusive hospital testing. The accuracy of the home test was evidenced in the following table. What is the specificity of the test? That is, what is the probability of testing negative given that the person does not have HIV?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) Of the 460 healthy people, 435 tested negative.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test54.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3</a> · Question ID 544."
      },
      {
        "subjectKey": "stats",
        "testNumber": 54,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test54.html",
        "number": 9,
        "choices": [
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-5.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-6.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-7.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-8.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-9.jpg\" />"
        ],
        "questionId": 543,
        "q": "<p>Question below refers to the following study: Five hundred people used a home test for HIV, and then all underwent more conclusive hospital testing. The accuracy of the home test was evidenced in the following table.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p220-1.jpg\" /></p><p>What is the <span class=\"italic\">sensitivity</span> of the test? That is, what is the probability of testing positive given that the person has HIV?</p>",
        "hasImage": true,
        "plain": "Question below refers to the following study: Five hundred people used a home test for HIV, and then all underwent more conclusive hospital testing. The accuracy of the home test was evidenced in the following table. What is the sensitivity of the test? That is, what is the probability of testing positive given that the person has HIV?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) Of the 40 people with HIV, 35 tested positive.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test54.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3</a> · Question ID 543."
      },
      {
        "subjectKey": "stats",
        "testNumber": 54,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test54.html",
        "number": 8,
        "choices": [
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-1.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-2.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-3.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p221-4.jpg\" />"
        ],
        "questionId": 542,
        "q": "<p>Question below refers to the following study: Five hundred people used a home test for HIV, and then all underwent more conclusive hospital testing. The accuracy of the home test was evidenced in the following table.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p220-1.jpg\" /></p><p>What is the <span class=\"italic\">false-positive</span> rate? That is, what is the probability of testing positive given that the person does not have HIV?</p>",
        "hasImage": true,
        "plain": "Question below refers to the following study: Five hundred people used a home test for HIV, and then all underwent more conclusive hospital testing. The accuracy of the home test was evidenced in the following table. What is the false-positive rate? That is, what is the probability of testing positive given that the person does not have HIV?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) Of the 460 healthy people, 25 tested positive.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test54.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3</a> · Question ID 542."
      },
      {
        "subjectKey": "stats",
        "testNumber": 60,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test60.html",
        "number": 6,
        "choices": [
          "I only",
          "I and II",
          "I and III",
          "II and III",
          "I, II, and III"
        ],
        "questionId": 597,
        "q": "<p>Which of the following statements about <span class=\"italic\">t</span>-distributions are true?</p><p>I.The greater the number of degrees of freedom, the narrower the tails.</p><p>II.The smaller the number of degrees of freedom, the closer the curve is to the normal curve.</p><p>III.Thirty degrees of freedom gives the normal curve.</p>",
        "hasImage": false,
        "plain": "Which of the following statements about t -distributions are true? I.The greater the number of degrees of freedom, the narrower the tails. II.The smaller the number of degrees of freedom, the closer the curve is to the normal curve. III.Thirty degrees of freedom gives the normal curve.",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) The larger the number of degrees of freedom, the closer the curve to the normal curve. While around the 30 level is often considered a reasonable approximation to the normal curve, it is not the normal curve.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test60.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2</a> · Question ID 597."
      },
      {
        "subjectKey": "stats",
        "testNumber": 60,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test60.html",
        "number": 5,
        "choices": [
          "II only",
          "I and II",
          "I and III",
          "II and III",
          "I, II, and III"
        ],
        "questionId": 596,
        "q": "<p>Which of the following statements are true?</p><p>I.Like the normal, <span class=\"italic\">t</span>-distributions are always symmetric.</p><p>II.Like the normal, <span class=\"italic\">t</span>-distributions are always mound-shaped.</p><p>III.The <span class=\"italic\">t</span>-distributions have less spread than the normal, that is, they have less probability in the tails and more in the center than the normal.</p>",
        "hasImage": false,
        "plain": "Which of the following statements are true? I.Like the normal, t -distributions are always symmetric. II.Like the normal, t -distributions are always mound-shaped. III.The t -distributions have less spread than the normal, that is, they have less probability in the tails and more in the center than the normal.",
        "choiceCount": 5,
        "answer": 1,
        "explanation": "(B) The t -distributions are symmetric and mound-shaped, and they have more, not less, spread than the normal distribution.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test60.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2</a> · Question ID 596."
      },
      {
        "subjectKey": "stats",
        "testNumber": 60,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test60.html",
        "number": 4,
        "choices": [
          "0.0519",
          "0.1179",
          "0.4481",
          "0.3821",
          "0.9481"
        ],
        "questionId": 595,
        "q": "<p>Suppose \"sleep-trained\" babies (allowed to cry themselves to sleep) wake up an average of 1.2 times a night with a standard deviation of 0.3 times, while nontrained babies wake up an average of 1.8 times a night with a standard deviation of 0.5 times. In a random sample of 80 babies, half of which are sleep-trained, what is the probability that the nontrained babies in the sample wake up an average number of times greater than 0.75 more than the average of the sleep-trained babies?</p>",
        "hasImage": false,
        "plain": "Suppose \"sleep-trained\" babies (allowed to cry themselves to sleep) wake up an average of 1.2 times a night with a standard deviation of 0.3 times, while nontrained babies wake up an average of 1.8 times a night with a standard deviation of 0.5 times. In a random sample of 80 babies, half of which are sleep-trained, what is the probability that the nontrained babies in the sample wake up an average number of times greater than 0.75 more than the average of the sleep-trained babies?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) We have independent random samples, each less than 10% of babies, and both sample sizes are 40 ≥ 30, so the sampling distribution of 1 - 2 is roughly normal with mean and standard deviation . The z -score of 0.75 is , and normalcdf(1.627,1000)= 0.0519. [Or normalcdf(.75,1000,.6,.0922)= 0.0519.]",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test60.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2</a> · Question ID 595."
      },
      {
        "subjectKey": "stats",
        "testNumber": 66,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line",
        "testUrl": "https://www.crackap.com/ap/statistics/test66.html",
        "number": 10,
        "choices": [
          "The data prove that there is a difference in cafeteria food satisfaction among the class levels.",
          "There is sufficient evidence of a linear relationship between food satisfaction and class level.",
          "There is sufficient evidence at the 1% significance level of a difference in cafeteria food satisfaction among the class levels.",
          "There is sufficient evidence at the 5% significance level, but not at the 1% significance level, of a difference in cafeteria food satisfaction among the class levels.",
          "With <span class=\"italic\">P</span> = 0.1117 there is not sufficient evidence of a difference in cafeteria food satisfaction among the class levels."
        ],
        "questionId": 674,
        "q": "<p>Random samples of 25 students are chosen from each high school class level, students are asked whether or not they are satisfied with the school cafeteria food, and the results are summarized in the following table:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p397.jpg\" /></p><p>Is there sufficient evidence of a difference in cafeteria food satisfaction among the class levels?</p>",
        "hasImage": true,
        "plain": "Random samples of 25 students are chosen from each high school class level, students are asked whether or not they are satisfied with the school cafeteria food, and the results are summarized in the following table: Is there sufficient evidence of a difference in cafeteria food satisfaction among the class levels?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) A chi-square test of homogeneity gives χ 2 = 5.998, and with df = 3, the P -value is 0.1117. With a P -value this large (0.1117 > 0.10) there is not sufficient evidence of a difference in cafeteria food satisfaction among the class levels.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test66.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line</a> · Question ID 674."
      },
      {
        "subjectKey": "stats",
        "testNumber": 66,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line",
        "testUrl": "https://www.crackap.com/ap/statistics/test66.html",
        "number": 9,
        "choices": [
          "At the 10% significance level, the data prove that there is a relationship between taste preference and the presence of the marker.",
          "At the 10% significance level, the data prove that there is no relationship between taste preference and the presence of the marker.",
          "There is sufficient evidence at the 5% significance level of a relationship between taste preference and the presence of the marker.",
          "There is sufficient evidence at the 10% significance level, but not at the 5% significance level, of a relationship between taste preference and the presence of the marker.",
          "There is not sufficient evidence at the 10% significance level of a relationship between taste preference and the presence of the marker."
        ],
        "questionId": 673,
        "q": "<p>A food biologist surveys people at an ice cream parlor, noting their taste preferences and cross-classifying against the presence or absence of a particular marker in a saliva swab test.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/pp397.jpg\" /></p><p>Is there sufficient evidence of a relationship between taste preference and the marker presence?</p>",
        "hasImage": true,
        "plain": "A food biologist surveys people at an ice cream parlor, noting their taste preferences and cross-classifying against the presence or absence of a particular marker in a saliva swab test. Is there sufficient evidence of a relationship between taste preference and the marker presence?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) A chi-square test of independence gives χ 2 = 2.852, and with df = 2, we find P = 0.2403, and since 0.2403 > 0.10, there is not sufficient evidence at the 10% significance level of a relationship between taste preference and the presence of the marker.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test66.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line</a> · Question ID 673."
      },
      {
        "subjectKey": "stats",
        "testNumber": 66,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line",
        "testUrl": "https://www.crackap.com/ap/statistics/test66.html",
        "number": 2,
        "choices": [
          "The data prove that dog bites occur equally during all moon phases.",
          "The data prove that dog bites do not occur equally during all moon phases.",
          "The data give evidence that dog bites occur equally during all moon phases.",
          "The data give evidence that dog bites do not occur equally during all moon phases.",
          "The data do not give sufficient evidence to conclude that dog bites are related to moon phases."
        ],
        "questionId": 666,
        "q": "<p>To test the claim that dogs bite more or less depending upon the phase of the moon, a university hospital counts admissions for dog bites and classifies with moon phase.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p394.jpg\" /></p><p>Which of the following is the proper conclusion?</p>",
        "hasImage": true,
        "plain": "To test the claim that dogs bite more or less depending upon the phase of the moon, a university hospital counts admissions for dog bites and classifies with moon phase. Which of the following is the proper conclusion?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) The expected counts if dog bites occur equally during all moon phases are each (32 + 27 + 47 + 38) = 36. A chi-square goodness-of-fit test gives , and with df = 4 - 1 = 3, P (χ 2 > 6.167) = 0.1038. With this large a P -value (0.1038 > 0.10), there is not sufficient evidence to conclude that dog bites are related to moon phases.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test66.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Chi-Square and Slope of Least Squares Line</a> · Question ID 666."
      }
    ],
    "frq": [
      {
        "title": "Official 2024 FRQ 1",
        "text": "<strong>Official 2024 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 1 (2024)<br>Answer official Question 1 from the local FRQ packet. Use the checklist to verify setup, calculations, and interpretation in context.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/stats/ap24-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-statistics.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/stats/ap24-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-statistics.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Names the correct statistical parameter, procedure, or model for the task.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Checks and uses the relevant conditions or study design correctly.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows the needed calculation, graph reading, or probability/statistic setup accurately.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Interprets the result in the context of the problem instead of giving only raw numbers.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "States the inference or conclusion with appropriate statistical language and no major overclaim.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Use the official scoring guidelines to compare whether you named the right procedure, checked conditions, and interpreted the result in context.",
        "scoringNotes": "Stats responses lose points most often when the arithmetic is fine but the conclusion is not tied back to the context.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/stats/ap24-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-statistics.pdf</a> and <a href=\"assets/source-lock/official/stats/ap24-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-statistics.pdf</a>."
      },
      {
        "title": "Official 2024 FRQ 6",
        "text": "<strong>Official 2024 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 6 Investigative Task (2024)<br>Answer the investigative task from the local FRQ packet. Build the response in stages and then self-score line by line.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/stats/ap24-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-statistics.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/stats/ap24-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-statistics.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Names the correct statistical parameter, procedure, or model for the task.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Checks and uses the relevant conditions or study design correctly.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows the needed calculation, graph reading, or probability/statistic setup accurately.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Interprets the result in the context of the problem instead of giving only raw numbers.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "States the inference or conclusion with appropriate statistical language and no major overclaim.",
            "pts": 1
          }
        ],
        "sampleAnswer": "For the investigative task, compare your structure against the official rubric before reading the full sample responses.",
        "scoringNotes": "Treat each checklist line independently. Missing conditions or context language should cost the point even if the numeric work is correct.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/stats/ap24-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-statistics.pdf</a> and <a href=\"assets/source-lock/official/stats/ap24-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-statistics.pdf</a>."
      }
    ]
  },
  {
    "id": "stats_set3",
    "subjectKey": "stats",
    "examName": "AP Statistics",
    "title": "Set 3",
    "cardLabel": "3",
    "badge": "SOURCE LOCK",
    "description": "18 CrackAP MCQ balanced across units + 2 official FRQ packets.",
    "mcTime": 32,
    "frqTime": 45,
    "liveFeedback": true,
    "liveRubric": true,
    "scoreProfile": {
      "mcWeight": 60,
      "frqTotal": 10,
      "frqWeight": 40,
      "compositeMax": 100,
      "thresholds": {
        "5": 82,
        "4": 68,
        "3": 54,
        "2": 40
      },
      "mcLabel": "60.00",
      "frqLabel": "40.00"
    },
    "mc": [
      {
        "subjectKey": "stats",
        "testNumber": 44,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test44.html",
        "number": 6,
        "choices": [
          "0.5 mph",
          "1.1 mph",
          "1.6 mph",
          "2.2 mph",
          "6.0 mph"
        ],
        "questionId": 437,
        "q": "<p>The following dotplot shows the speeds (in mph) of 100 fastballs thrown by a major league pitcher.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p94.jpg\" /></p><p>Which of the following is the best estimate of the standard deviation of these speeds?</p>",
        "hasImage": true,
        "plain": "The following dotplot shows the speeds (in mph) of 100 fastballs thrown by a major league pitcher. Which of the following is the best estimate of the standard deviation of these speeds?",
        "choiceCount": 5,
        "answer": 1,
        "explanation": "(B) With bell-shaped data the empirical rule applies, giving that the spread from 92 to 98 is roughly 6 standard deviations, and so one SD is about 1.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3</a> · Question ID 437."
      },
      {
        "subjectKey": "stats",
        "testNumber": 44,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test44.html",
        "number": 5,
        "choices": [
          "1.0",
          "1.8",
          "2.4",
          "2.8",
          "4.0"
        ],
        "questionId": 436,
        "q": "<p>For Question below considers the following: The graph below shows cumulative proportions plotted against grade point averages for a large public high school.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p93.jpg\" /></p><p>What is the interquartile range?</p>",
        "hasImage": true,
        "plain": "For Question below considers the following: The graph below shows cumulative proportions plotted against grade point averages for a large public high school. What is the interquartile range?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) The 0.25 and 0.75 cumulative proportions correspond to Q 1 = 1.8 and Q 3 = 2.8, respectively, and so the interquartile range is 2.8 - 1.8 = 1.0.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3</a> · Question ID 436."
      },
      {
        "subjectKey": "stats",
        "testNumber": 44,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test44.html",
        "number": 4,
        "choices": [
          "0.8",
          "2.0",
          "2.4",
          "2.5",
          "2.6"
        ],
        "questionId": 435,
        "q": "<p>For Question below considers the following: The graph below shows cumulative proportions plotted against grade point averages for a large public high school.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p93.jpg\" /></p><p>What is the median grade point average?</p>",
        "hasImage": true,
        "plain": "For Question below considers the following: The graph below shows cumulative proportions plotted against grade point averages for a large public high school. What is the median grade point average?",
        "choiceCount": 5,
        "answer": 2,
        "explanation": "(C) The median corresponds to the 0.5 cumulative proportion.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test44.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Summarizing Distributions 3</a> · Question ID 435."
      },
      {
        "subjectKey": "stats",
        "testNumber": 47,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables",
        "testUrl": "https://www.crackap.com/ap/statistics/test47.html",
        "number": 5,
        "choices": [
          "Democrat",
          "Republican",
          "Independent",
          "Republican and Independent, equally",
          "Democrat, Republican, and Independent, equally"
        ],
        "questionId": 474,
        "q": "<p>Question below is based on the following: To study the relationship between party affiliation and support for a balanced budget amendment, 500 registered voters were surveyed with the following results:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p152.jpg\" /></p><p>Voters of which affiliation were most likely to have no opinion about the amendment?</p>",
        "hasImage": true,
        "plain": "Question below is based on the following: To study the relationship between party affiliation and support for a balanced budget amendment, 500 registered voters were surveyed with the following results: Voters of which affiliation were most likely to have no opinion about the amendment?",
        "choiceCount": 5,
        "answer": 2,
        "explanation": "(C) The percentages of Democrats, Republicans, and Independents with no opinion are 20%, 12.5%, and 50%, respectively.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test47.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables</a> · Question ID 474."
      },
      {
        "subjectKey": "stats",
        "testNumber": 47,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables",
        "testUrl": "https://www.crackap.com/ap/statistics/test47.html",
        "number": 4,
        "choices": [
          "30%",
          "42%",
          "50%",
          "60%",
          "71.4%"
        ],
        "questionId": 473,
        "q": "<p>Question below is based on the following: To study the relationship between party affiliation and support for a balanced budget amendment, 500 registered voters were surveyed with the following results:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p152.jpg\" /></p><p>What percentage of those against the amendment were Democrats?</p>",
        "hasImage": true,
        "plain": "Question below is based on the following: To study the relationship between party affiliation and support for a balanced budget amendment, 500 registered voters were surveyed with the following results: What percentage of those against the amendment were Democrats?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) There were 150 + 50 + 10 = 210 people against the amendment; 150 of them were Democrats, and = 0.714 or 71.4%.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test47.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables</a> · Question ID 473."
      },
      {
        "subjectKey": "stats",
        "testNumber": 47,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables",
        "testUrl": "https://www.crackap.com/ap/statistics/test47.html",
        "number": 3,
        "choices": [
          "5%",
          "10%",
          "20%",
          "25%",
          "50%"
        ],
        "questionId": 472,
        "q": "<p>Question below is based on the following: To study the relationship between party affiliation and support for a balanced budget amendment, 500 registered voters were surveyed with the following results:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p152.jpg\" /></p><p>What percentage of Independents had no opinion?</p>",
        "hasImage": true,
        "plain": "Question below is based on the following: To study the relationship between party affiliation and support for a balanced budget amendment, 500 registered voters were surveyed with the following results: What percentage of Independents had no opinion?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) There were 15 + 10 + 25 = 50 Independents; 25 of them had no opinion, and = 0.5 or 50%.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test47.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Exploring Categorical Data: Two-Way Tables</a> · Question ID 472."
      },
      {
        "subjectKey": "stats",
        "testNumber": 51,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test51.html",
        "number": 2,
        "choices": [
          "There are four explanatory variables and one response variable.",
          "There is one explanatory variable with four levels of response.",
          "Miles per gallon is the only explanatory variable, but there are four response variables corresponding to the different octanes.",
          "There are four levels of a single explanatory variable.",
          "Each explanatory level has an associated level of response."
        ],
        "questionId": 506,
        "q": "<p>A consumer product agency tests miles per gallon for a sample of automobiles using each of four different octanes of gasoline. Which of the following is true?</p>",
        "hasImage": false,
        "plain": "A consumer product agency tests miles per gallon for a sample of automobiles using each of four different octanes of gasoline. Which of the following is true?",
        "choiceCount": 5,
        "answer": 3,
        "explanation": "(D) Octane is the only explanatory variable, and it is being tested at four levels. Miles per gallon is the single response variable.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test51.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2</a> · Question ID 506."
      },
      {
        "subjectKey": "stats",
        "testNumber": 51,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test51.html",
        "number": 1,
        "choices": [
          "None of these studies uses randomization.",
          "None of these studies uses control groups.",
          "None of these studies uses blinding.",
          "Important information can be obtained from all these studies, but none will be able to establish causal relationships.",
          "All of the above"
        ],
        "questionId": 505,
        "q": "<p>Consider the following studies being run by three different nursing home establishments.</p><p>I.One nursing home has pets brought in for an hour every day to see if patient morale is improved.</p><p>II.One nursing home allows hourly visits every day by kindergarten children to see if patient morale is improved.</p><p>III.One nursing home administers antidepressants to all patients to see if patient morale is improved.</p><p>Which of the following is true?</p>",
        "hasImage": false,
        "plain": "Consider the following studies being run by three different nursing home establishments. I.One nursing home has pets brought in for an hour every day to see if patient morale is improved. II.One nursing home allows hourly visits every day by kindergarten children to see if patient morale is improved. III.One nursing home administers antidepressants to all patients to see if patient morale is improved. Which of the following is true?",
        "choiceCount": 5,
        "answer": 4,
        "explanation": "(E) None of the studies has any controls, such as randomization, control groups, or blinding, and so while they may give valuable information, they cannot establish cause and effect.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test51.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 2</a> · Question ID 505."
      },
      {
        "subjectKey": "stats",
        "testNumber": 50,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 1",
        "testUrl": "https://www.crackap.com/ap/statistics/test50.html",
        "number": 8,
        "choices": [
          "Blocking is to experiment design as stratification is to sampling design.",
          "By controlling certain variables, blocking can make conclusions more specific.",
          "The paired comparison design is a special case of blocking.",
          "Blocking results in increased accuracy because the blocks have smaller size than the original group.",
          "In a randomized block design, the randomization occurs within the blocks."
        ],
        "questionId": 504,
        "q": "<p>Which of the following is <span class=\"italic\">incorrec</span><span class=\"italic\">t</span>?</p>",
        "hasImage": false,
        "plain": "Which of the following is incorrec t ?",
        "choiceCount": 5,
        "answer": 3,
        "explanation": "(D) Blocking in experiment design first divides the subjects into representative groups called blocks, just as stratification in sampling design first divides the population into representative groups called strata. This procedure can control certain variables by bringing them directly into the picture, and thus conclusions are more specific. The paired comparison design is a special case of blocking in which each pair can be considered a block. Unnecessary blocking detracts from accuracy because of smaller sample sizes.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test50.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Planning and Conducting Experiments 1</a> · Question ID 504."
      },
      {
        "subjectKey": "stats",
        "testNumber": 54,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test54.html",
        "number": 7,
        "choices": [
          "<img src=\"https://img.crackap.com/ap/statistics/br/p220-2.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p220-3.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p220-4.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p220-5.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/p220-6.jpg\" />"
        ],
        "questionId": 541,
        "q": "<p>Question below refers to the following study: Five hundred people used a home test for HIV, and then all underwent more conclusive hospital testing. The accuracy of the home test was evidenced in the following table.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p220-1.jpg\" /></p><p>What is the <span class=\"italic\">predictive value</span> of the test? That is, what is the probability that a person has HIV and tests positive?</p>",
        "hasImage": true,
        "plain": "Question below refers to the following study: Five hundred people used a home test for HIV, and then all underwent more conclusive hospital testing. The accuracy of the home test was evidenced in the following table. What is the predictive value of the test? That is, what is the probability that a person has HIV and tests positive?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) 35 out of the entire population of 500 both have HIV and tested positive.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test54.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3</a> · Question ID 541."
      },
      {
        "subjectKey": "stats",
        "testNumber": 54,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test54.html",
        "number": 6,
        "choices": [
          "0.580",
          "0.624",
          "0.643",
          "0.892",
          "0.969"
        ],
        "questionId": 540,
        "q": "<p>Consider the following table of ages of U.S. senators:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p220.jpg\" /></p><p>What is the probability that a senator is under 70 years old given that he or she is at least 50 years old?</p>",
        "hasImage": true,
        "plain": "Consider the following table of ages of U.S. senators: What is the probability that a senator is under 70 years old given that he or she is at least 50 years old?",
        "choiceCount": 5,
        "answer": 3,
        "explanation": "(D)",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test54.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3</a> · Question ID 540."
      },
      {
        "subjectKey": "stats",
        "testNumber": 54,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3",
        "testUrl": "https://www.crackap.com/ap/statistics/test54.html",
        "number": 4,
        "choices": [
          "No, because 0.475 ≠ 0.506.",
          "No, because 0.475 ≠ 0.890.",
          "No, because 0.450 ≠ 0.475.",
          "Yes, because of conditional probabilities.",
          "Yes, because of the product rule."
        ],
        "questionId": 538,
        "q": "<p>Question below refers to the following study: One thousand students at a city high school were classified both according to GPA and whether or not they consistently skipped classes.</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p218.jpg\" /></p><p>Are \"GPA between 2.0 and 3.0\" and \"skipped few classes\" independent?</p>",
        "hasImage": true,
        "plain": "Question below refers to the following study: One thousand students at a city high school were classified both according to GPA and whether or not they consistently skipped classes. Are \"GPA between 2.0 and 3.0\" and \"skipped few classes\" independent?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) however, . If independent, these would have been equal.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test54.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Probability as Relative Frequency 3</a> · Question ID 538."
      },
      {
        "subjectKey": "stats",
        "testNumber": 60,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test60.html",
        "number": 3,
        "choices": [
          "0.176",
          "0.245",
          "0.473",
          "0.527",
          "0.755"
        ],
        "questionId": 594,
        "q": "<p>Binge drinking is a serious problem, killing more than 1700 college students per year. Suppose the incidence of binge drinking is 43% and 37%, respectively, at two large universities. In a random sample of 75 students at the first school and 80 students at the second, what is the probability that the difference (first minus second) between the percentages of binge drinkers is between 5% and 10%?</p>",
        "hasImage": false,
        "plain": "Binge drinking is a serious problem, killing more than 1700 college students per year. Suppose the incidence of binge drinking is 43% and 37%, respectively, at two large universities. In a random sample of 75 students at the first school and 80 students at the second, what is the probability that the difference (first minus second) between the percentages of binge drinkers is between 5% and 10%?",
        "choiceCount": 5,
        "answer": 1,
        "explanation": "(B) We have two independent random samples, each less than 10% of their respective populations, and we note that n 1 p 1 = 75(0.43) = 32.25, n 1 (1 - p 1 ) = 75(0.57) = 42.75, n 2 p 2 = 80(0.37) = 29.6, and n 2 (1 - p 2 ) = 80(0.63) = 50.4 are all ≥10. Thus the sampling distribution of 1 - 2 is roughly normal with mean and standard deviation . The z -score of 0.05 is , the z -score of 0.10 is , and normalcdf(-.127,.509)= 0.245. [Or normalcdf(.05,.10,.06,.0786)= 0.245.]",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test60.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2</a> · Question ID 594."
      },
      {
        "subjectKey": "stats",
        "testNumber": 60,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test60.html",
        "number": 2,
        "choices": [
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp284a.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp284b.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp284c.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp284d.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp284e.jpg\" />"
        ],
        "questionId": 593,
        "q": "<p>It is estimated that school CO<span class=\"sub\">2</span> levels average 1200 ppm with a standard deviation of 300 ppm. In a random sample of 30 schools, what is the probability that the mean CO<span class=\"sub\">2</span> level is more than 1000, a level at which some researchers feel will cause a drop in academic performance?</p>",
        "hasImage": false,
        "plain": "It is estimated that school CO 2 levels average 1200 ppm with a standard deviation of 300 ppm. In a random sample of 30 schools, what is the probability that the mean CO 2 level is more than 1000, a level at which some researchers feel will cause a drop in academic performance?",
        "choiceCount": 5,
        "answer": 0,
        "explanation": "(A) We have a random sample that is less than 10% of all schools. With a sample size of 30, the central limit theorem applies, and the sampling distribution of is approximately normal with mean = 1200 and standard deviation . The z -score of 1000 is , and the probability of a sample mean over 1000 is P",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test60.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2</a> · Question ID 593."
      },
      {
        "subjectKey": "stats",
        "testNumber": 60,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test60.html",
        "number": 1,
        "choices": [
          "0.236",
          "0.429",
          "0.571",
          "0.614",
          "0.764"
        ],
        "questionId": 592,
        "q": "<p>Suppose using accelerometers in helmets, researchers determine that boys playing high school football absorb an average of 355 hits to the head with a standard deviation of 80 hits during a season (including both practices and games). What is the probability on a randomly selected team of 48 players that the average number of head hits per player is between 340 and 360?</p>",
        "hasImage": false,
        "plain": "Suppose using accelerometers in helmets, researchers determine that boys playing high school football absorb an average of 355 hits to the head with a standard deviation of 80 hits during a season (including both practices and games). What is the probability on a randomly selected team of 48 players that the average number of head hits per player is between 340 and 360?",
        "choiceCount": 5,
        "answer": 2,
        "explanation": "(C) We have a random sample that is less than 10% of the high school football population. With a sample size of 48, the central limit theorem applies, and the sampling distribution of is approximately normal with mean = 355 and standard deviation . The z -scores of 340 and 360 are and , the probability of a sample mean between 340 and 360 is normalcdf(-1.299,.433)= 0.571. [Or normalcdf(340,360,355,11.547)= 0.571.]",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test60.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Sampling Distributions 2</a> · Question ID 592."
      },
      {
        "subjectKey": "stats",
        "testNumber": 65,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Proportions and Means 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test65.html",
        "number": 10,
        "choices": [
          "No, because the <span class=\"italic\">P</span>-value is greater than 0.10.",
          "Yes, the <span class=\"italic\">P</span>-value is between 0.05 and 0.10 indicating some evidence for the teacher's belief.",
          "Yes, the <span class=\"italic\">P</span>-value is between 0.01 and 0.05 indicating evidence for the teacher's belief.",
          "Yes, the <span class=\"italic\">P</span>-value is between 0.001 and 0.01 indicating strong evidence for the teacher's belief.",
          "Yes, the <span class=\"italic\">P</span>-value is less than 0.001 indicating very strong evidence for the teacher's belief."
        ],
        "questionId": 660,
        "q": "<p>A company selling home appliances claims that the accompanying instruction guides are written at a 6th grade reading level. An English teacher believes that the true figure is higher and with the help of an AP Statistics student runs a hypothesis test. The student randomly picks one page from each of 25 of the company's instruction guides, and the teacher subjects the pages to a standard readability test. The reading levels of the 25 pages are given in the following table:</p><p><img src=\"assets/source-lock/stats/ap/statistics/br/p363.jpg\" /></p><p>Assuming that the conditions for inference are met, is there statistical evidence to support the English teacher's belief?</p>",
        "hasImage": true,
        "plain": "A company selling home appliances claims that the accompanying instruction guides are written at a 6th grade reading level. An English teacher believes that the true figure is higher and with the help of an AP Statistics student runs a hypothesis test. The student randomly picks one page from each of 25 of the company's instruction guides, and the teacher subjects the pages to a standard readability test. The reading levels of the 25 pages are given in the following table: Assuming that the conditions for inference are met, is there statistical evidence to support the English teacher's belief?",
        "choiceCount": 5,
        "answer": 2,
        "explanation": "(C) With = 6.48 and s = 1.388, . Given df = 29, P = 0.048. [A calculator gives P = 0.048322.]",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test65.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Proportions and Means 2</a> · Question ID 660."
      },
      {
        "subjectKey": "stats",
        "testNumber": 65,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Proportions and Means 2",
        "testUrl": "https://www.crackap.com/ap/statistics/test65.html",
        "number": 6,
        "choices": [
          "Decrease in probability of a Type I error; decrease in probability of a Type II error; decrease in power.",
          "Increase in probability of a Type I error; increase in probability of a Type II error; decrease in power.",
          "Decrease in probability of a Type I error; decrease in probability of a Type II error; increase in power.",
          "Increase in probability of a Type I error; decrease in probability of a Type II error; decrease in power.",
          "Decrease in probability of a Type I error; increase in probability of a Type II error; increase in power."
        ],
        "questionId": 656,
        "q": "<p>Given an experiment with <span class=\"italic\">H</span><span class=\"sub\">0</span>: <span class=\"italic\">&micro;</span> = 35, <span class=\"italic\">H</span><span class=\"sub\">a</span>: <span class=\"italic\">&micro;</span> &lt; 35, and a possible correct value of 32, you obtain a sample statistic of <img src=\"assets/source-lock/stats/ap/statistics/br/xbar.jpg\" /> = 33. After doing analysis, you realize that the sample size <span class=\"italic\">n</span> is actually larger than you first thought. Which of the following results from reworking with the increase in sample size?</p>",
        "hasImage": true,
        "plain": "Given an experiment with H 0 : µ = 35, H a : µ < 35, and a possible correct value of 32, you obtain a sample statistic of = 33. After doing analysis, you realize that the sample size n is actually larger than you first thought. Which of the following results from reworking with the increase in sample size?",
        "choiceCount": 5,
        "answer": 2,
        "explanation": "(C) A larger sample size n reduces the standard deviation of the sampling distributions resulting in narrower sampling distributions so that for the given sample statistic, the P -value is smaller, and the probabilities of mistakenly rejecting a true null hypothesis or mistakenly failing to reject a false null hypothesis are both decreased. Furthermore, a lower Type II error results in higher power.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test65.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Proportions and Means 2</a> · Question ID 656."
      },
      {
        "subjectKey": "stats",
        "testNumber": 64,
        "testTitle": "AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Proportions and Means 1",
        "testUrl": "https://www.crackap.com/ap/statistics/test64.html",
        "number": 9,
        "choices": [
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp359a.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp359b.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp359c.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp359d.jpg\" />",
          "<img src=\"https://img.crackap.com/ap/statistics/br/pp359e.jpg\" />"
        ],
        "questionId": 646,
        "q": "<p>A pharmaceutical company claims that a medicine will produce a desired effect for a mean time of 58.4 minutes. A government researcher runs a hypothesis test of 40 patients and calculates a mean of <img src=\"assets/source-lock/stats/ap/statistics/br/xbar.jpg\" /> = 59.5 with a standard deviation of <span class=\"italic\">s</span> = 8.3. What is the <span class=\"italic\">P</span>-value?</p>",
        "hasImage": true,
        "plain": "A pharmaceutical company claims that a medicine will produce a desired effect for a mean time of 58.4 minutes. A government researcher runs a hypothesis test of 40 patients and calculates a mean of = 59.5 with a standard deviation of s = 8.3. What is the P -value?",
        "choiceCount": 5,
        "answer": 2,
        "explanation": "(C) Medications having an effect shorter or longer than claimed should be of concern, so this is a two-sided test: H a : μ ≠ 58.4, and df = n - 1 = 40 - 1 = 39.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/statistics/test64.html\" target=\"_blank\" rel=\"noreferrer\">AP Statistics Multiple-Choice Practice Questions: Tests of Significance-Proportions and Means 1</a> · Question ID 646."
      }
    ],
    "frq": [
      {
        "title": "Official 2023 FRQ 1",
        "text": "<strong>Official 2023 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 1 (2023)<br>Answer official Question 1 from the local FRQ packet. Use the checklist to verify setup, calculations, and interpretation in context.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/stats/ap23-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-statistics.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/stats/ap23-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-statistics.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Names the correct statistical parameter, procedure, or model for the task.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Checks and uses the relevant conditions or study design correctly.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows the needed calculation, graph reading, or probability/statistic setup accurately.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Interprets the result in the context of the problem instead of giving only raw numbers.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "States the inference or conclusion with appropriate statistical language and no major overclaim.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Use the official scoring guidelines to compare whether you named the right procedure, checked conditions, and interpreted the result in context.",
        "scoringNotes": "Stats responses lose points most often when the arithmetic is fine but the conclusion is not tied back to the context.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/stats/ap23-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-statistics.pdf</a> and <a href=\"assets/source-lock/official/stats/ap23-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-statistics.pdf</a>."
      },
      {
        "title": "Official 2023 FRQ 6",
        "text": "<strong>Official 2023 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> Question 6 Investigative Task (2023)<br>Answer the investigative task from the local FRQ packet. Build the response in stages and then self-score line by line.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/stats/ap23-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-statistics.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/stats/ap23-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-statistics.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Names the correct statistical parameter, procedure, or model for the task.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Checks and uses the relevant conditions or study design correctly.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Shows the needed calculation, graph reading, or probability/statistic setup accurately.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Interprets the result in the context of the problem instead of giving only raw numbers.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "States the inference or conclusion with appropriate statistical language and no major overclaim.",
            "pts": 1
          }
        ],
        "sampleAnswer": "For the investigative task, compare your structure against the official rubric before reading the full sample responses.",
        "scoringNotes": "Treat each checklist line independently. Missing conditions or context language should cost the point even if the numeric work is correct.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/stats/ap23-frq-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-statistics.pdf</a> and <a href=\"assets/source-lock/official/stats/ap23-sg-statistics.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-statistics.pdf</a>."
      }
    ]
  },
  {
    "id": "ush_set1",
    "subjectKey": "ush",
    "examName": "AP United States History",
    "title": "Set 1",
    "cardLabel": "1",
    "badge": "SOURCE LOCK",
    "description": "24 CrackAP MCQ balanced across periods + SAQ, DBQ, and LEQ.",
    "mcTime": 40,
    "frqTime": 70,
    "liveFeedback": true,
    "liveRubric": true,
    "scoreProfile": {
      "mcWeight": 55,
      "frqTotal": 15,
      "frqWeight": 45,
      "compositeMax": 100,
      "thresholds": {
        "5": 82,
        "4": 68,
        "3": 54,
        "2": 40
      },
      "mcLabel": "55.00",
      "frqLabel": "45.00"
    },
    "mc": [
      {
        "subjectKey": "ush",
        "testNumber": 33,
        "testTitle": "AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)",
        "testUrl": "https://www.crackap.com/ap/us-history/test33.html",
        "number": 2,
        "choices": [
          "It posits the source of government power in the people rather than in God.",
          "It ensures both the right to free speech and the separation of church and state.",
          "It limits the term of office for all government officials.",
          "It establishes three branches of government in order to create a system of checks and balances."
        ],
        "questionId": 332,
        "q": "<p>The Mayflower Compact foreshadows the U.S. Constitution in which of the following ways?</p>",
        "hasImage": false,
        "plain": "The Mayflower Compact foreshadows the U.S. Constitution in which of the following ways?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "The Mayflower Compact states that government derives its power from the consent of the governed, not from divine mandate. This distinguishes government under the Mayflower Compact from the monarchial government the Pilgrims left behind in England.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test33.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)</a> · Question ID 332."
      },
      {
        "subjectKey": "ush",
        "testNumber": 33,
        "testTitle": "AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)",
        "testUrl": "https://www.crackap.com/ap/us-history/test33.html",
        "number": 3,
        "choices": [
          "cotton",
          "corn",
          "tea",
          "tobacco"
        ],
        "questionId": 333,
        "q": "<p>The first important cash crop in the American colonies was</p>",
        "hasImage": false,
        "plain": "The first important cash crop in the American colonies was",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "Virginia, one of the earliest colonies, developed around the tobacco trade; tobacco was the colonies' first important cash crop. Choice (A), cotton, did not become a major export until the early nineteenth century, when the invention of the cotton gin made large-scale cotton farming practical.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test33.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)</a> · Question ID 333."
      },
      {
        "subjectKey": "ush",
        "testNumber": 33,
        "testTitle": "AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)",
        "testUrl": "https://www.crackap.com/ap/us-history/test33.html",
        "number": 4,
        "choices": [
          "surplus manpower and control over raw materials",
          "control of hard currency and a positive trade balance",
          "the ability to extend and receive credit at favorable interest rates",
          "domination of the slave trade and control of the shipping lanes"
        ],
        "questionId": 334,
        "q": "<p>The philosophy of mercantilism holds that economic power resides primarily in</p>",
        "hasImage": false,
        "plain": "The philosophy of mercantilism holds that economic power resides primarily in",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "During the colonial era, the British subscribed to the economic theory of mercantilism, which held that a favorable balance of trade and control of hard currency were the keys to economic power. Ultimately, the theory of capitalism, famously championed by Adam Smith, supplanted mercantilism as the predominant economic theory of the West.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test33.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)</a> · Question ID 334."
      },
      {
        "subjectKey": "ush",
        "testNumber": 34,
        "testTitle": "AP US History Practice Test: Conflict and American Independence (1754–1800)",
        "testUrl": "https://www.crackap.com/ap/us-history/test34.html",
        "number": 2,
        "choices": [
          "the new restrictions would hinder New England trade",
          "their rights as Englishmen were being violated",
          "they resented quartering British troops now that the French threat was removed",
          "they believed they should be represented in Parliament if they were subjected to mercantilist restrictions"
        ],
        "questionId": 341,
        "q": "<p>The American colonists objected to the policies imposed by Parliament after the French and Indian War for all of the following reasons EXCEPT</p>",
        "hasImage": false,
        "plain": "The American colonists objected to the policies imposed by Parliament after the French and Indian War for all of the following reasons EXCEPT",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "1763, the year the Treaty of Paris ended the French and Indian War, is often considered to be a major turning point in British-colonial relations, as it marked the end of Britain's policy of salutary neglect. Beginning with the Proclamation of 1763, the colonists began to feel England tightening the screws. The passage of the Sugar and Stamp Acts set off a chain of new restrictions that set the colonists on the road to revolution. Although you no doubt know the phrase \"No taxation without representation!\" the colonists did not actually want to send colonial representatives to sit in the British Parliament in London. Rather, as the resolutions of the Stamp Act Congress make clear, they believed that only their own colonial legislatures had the power to tax them. They initially understood that they were British subjects and that Parliament had the right to enact mercantilist restrictions to regulate trade. However, they soon voiced their concern that there was a significant difference between taxation and legislation.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test34.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Conflict and American Independence (1754–1800)</a> · Question ID 341."
      },
      {
        "subjectKey": "ush",
        "testNumber": 34,
        "testTitle": "AP US History Practice Test: Conflict and American Independence (1754–1800)",
        "testUrl": "https://www.crackap.com/ap/us-history/test34.html",
        "number": 3,
        "choices": [
          "colonists were represented in Parliament by virtue of their British citizenship",
          "slaves were represented in Congress by virtue of the fact that their owners were voters",
          "paper money has value by virtue of the fact that it is backed by the full faith and credit of the government",
          "the best interests of criminal defendants are represented by their attorneys"
        ],
        "questionId": 342,
        "q": "<p>According to the theory of virtual representation,</p>",
        "hasImage": false,
        "plain": "According to the theory of virtual representation,",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "In the run-up to the Revolutionary War, colonists complained that Parliament had no business taxing them because the colonists lacked representation in the legislature. Their slogan, \"No taxation without representation!\" neatly summed up their argument (and it was catchy too!). The British responded with the theory of virtual representation, which stated that the colonists were represented in Parliament because members of Parliament represent all British citizens, not just the voters who elected them. Like most political debates, this one reeked of disingenuousness on both sides. The colonists knew that any delegation they sent to Parliament would be essentially powerless; what they really wanted was the right to set their own taxes, not a representative in the legislature. The British knew full well that their MPs did not give a tinker's damn about the colonists or their interests; what they wanted was for the colonists to shut up and pay their taxes.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test34.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Conflict and American Independence (1754–1800)</a> · Question ID 342."
      },
      {
        "subjectKey": "ush",
        "testNumber": 34,
        "testTitle": "AP US History Practice Test: Conflict and American Independence (1754–1800)",
        "testUrl": "https://www.crackap.com/ap/us-history/test34.html",
        "number": 4,
        "choices": [
          "represented a first step in colonial unity against Britain",
          "demonstrated Parliament's determination to tax its American colonies",
          "represented New England's determination to go to war against England",
          "demonstrated the colonists' political and philosophical disagreement among themselves"
        ],
        "questionId": 343,
        "q": "<p>The Stamp Act Congress of 1765 was historically significant in that it</p>",
        "hasImage": false,
        "plain": "The Stamp Act Congress of 1765 was historically significant in that it",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "A recent DBQ on the AP Exam asked to what extent the colonists had developed a sense of unity by the eve of the Revolution. One could certainly argue that most colonists considered themselves to be loyal British subjects even after fighting had begun in Lexington and Concord in April 1775. Many historians view the Declaration of Independence, written in July 1776, as propaganda to convince those still loyal to England to fight for their independence. At the start of the French and Indian War, Benjamin Franklin had proposed the Albany Plan of Union, which was rejected by the colonists in favor of maintaining individual colonial sovereignty. The Stamp Act Congress of 1765 is historically significant because it marks the beginning of colonial unity and resistance against the British.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test34.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Conflict and American Independence (1754–1800)</a> · Question ID 343."
      },
      {
        "subjectKey": "ush",
        "testNumber": 35,
        "testTitle": "AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)",
        "testUrl": "https://www.crackap.com/ap/us-history/test35.html",
        "number": 2,
        "choices": [
          "opened new markets among the western Indian nations",
          "gave the country complete control of the Mississippi River",
          "added numerous French factories in the Louisiana Territory to the U.S. economy",
          "facilitated the immediate completion of the transcontinental railroad"
        ],
        "questionId": 351,
        "q": "<p>The Louisiana Purchase was an important factor in the development of U.S. trade because it</p>",
        "hasImage": false,
        "plain": "The Louisiana Purchase was an important factor in the development of U.S. trade because it",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "The Louisiana Purchase grew out of the government's efforts to purchase New Orleans from the French; President Jefferson wanted control of the city because it sits at the mouth of the Mississippi River, an essential trade route. Jefferson sent James Monroe to France to negotiate the sale. The French, desperate for cash and nearly as desperate to divest themselves of New World holdings, offered to sell the entire massive Louisiana Territory, giving the United States control of both banks of the Mississippi River (as well as a tremendous amount of western land). As a result, American traders could travel the length of the river unimpeded, and trade subsequently boomed. Many of the incorrect answers to this question are anachronistic; the date of the purchase was too early for there to be \"numerous French factories\" in the territory, as in (C), or to allow for \"the immediate completion of the transcontinental railroad,\" as in (D).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)</a> · Question ID 351."
      },
      {
        "subjectKey": "ush",
        "testNumber": 35,
        "testTitle": "AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)",
        "testUrl": "https://www.crackap.com/ap/us-history/test35.html",
        "number": 3,
        "choices": [
          "the Federalist party lost credibility and eventually died out",
          "the Constitution was amended to limit the president to two terms in office",
          "the New England states threatened to secede",
          "Congress passed the War Powers Act, limiting future presidents from gaining too much power during wartime, as Madison had"
        ],
        "questionId": 352,
        "q": "<p>As a result of the Hartford Convention following the War of 1812,</p>",
        "hasImage": false,
        "plain": "As a result of the Hartford Convention following the War of 1812,",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "The War of 1812 was very unpopular with New England Federalists who called the war \"Mr. Madison's War.\" The economic policies of Jefferson and Madison disrupted trade, and as a result, were detrimental to New England merchants and shippers. Consequently, a group of New England Federalists met in Hartford, Connecticut in 1814 to articulate a list of grievances against the Democratic-Republicans and their policies. While some men suggested secession, others suggested amending the Constitution to protect New England's commercial interests against what they perceived to be a dangerous, growing threat from the agrarian, Republican South. Because we \"defeated\" the British in what is often termed the Second War for Independence, the Federalists were seen as big babies and ultimately discredited. With the election of James Monroe in 1816, the United States had entered the Era of Good Feelings, a relatively brief period when there was only one political party—the Republicans. Although the War of 1812 damaged New England commerce initially, in the long run, the Embargo Act of 1807 and the War of 1812 forced Americans to be less dependent on British goods and indirectly stimulated the growth of industry in antebellum New England.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)</a> · Question ID 352."
      },
      {
        "subjectKey": "ush",
        "testNumber": 35,
        "testTitle": "AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)",
        "testUrl": "https://www.crackap.com/ap/us-history/test35.html",
        "number": 4,
        "choices": [
          "was promised a cabinet position if John Quincy Adams was elected president",
          "was promised the vice presidency if Jackson was defeated",
          "knew Jackson did not support his \"American System\"",
          "feared Jackson's pro-slavery stance on states' rights"
        ],
        "questionId": 353,
        "q": "<p>Andrew Jackson accused Henry Clay of using his influence to broker the \"corrupt bargain\" of 1824 (which cost Andrew Jackson the election) because Clay</p>",
        "hasImage": false,
        "plain": "Andrew Jackson accused Henry Clay of using his influence to broker the \"corrupt bargain\" of 1824 (which cost Andrew Jackson the election) because Clay",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "The election of 1824 is one of the more infamous elections in American political history and exposes one of the unanticipated flaws in the Electoral College system. Because of the winner-take-all system of awarding electoral votes in most states, it is possible for a candidate to actually win the popular vote nationwide but lose the election. According to the Constitution, a candidate must win a majority, not a plurality, of electoral votes to win the presidential election. If no one candidate receives the requisite majority, the election is \"thrown into the House,\" and the House of Representatives chooses the president from among the top three candidates. In the event this occurs, each state casts only one vote. Because there were five candidates running for president in 1824, it was almost impossible for anyone to receive a majority. Realizing that he did not have enough support to win the presidency, Henry Clay threw his support to John Quincy Adams in exchange for Adams's promise to make Clay his secretary of state. Jackson believed he lost the election because of this \"corrupt bargain.\"",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)</a> · Question ID 353."
      },
      {
        "subjectKey": "ush",
        "testNumber": 36,
        "testTitle": "AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)",
        "testUrl": "https://www.crackap.com/ap/us-history/test36.html",
        "number": 2,
        "choices": [
          "judicial review",
          "imperialism",
          "containment",
          "popular sovereignty"
        ],
        "questionId": 359,
        "q": "<p>\"Bleeding Kansas\" was a direct result of the doctrine of</p>",
        "hasImage": false,
        "plain": "\"Bleeding Kansas\" was a direct result of the doctrine of",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "The term \"Bleeding Kansas\" refers to the battle in Kansas between pro-slavery and abolitionist forces. The doctrine of popular sovereignty had created the circumstances that led to the gruesome conflict; it left the slave status of each territory up to its residents, to be decided at the time when the territory was ready to write a constitution and apply for statehood. Both sides wanted Kansas badly, and both sent representatives into the territory to form governments. President Pierce recognized the pro-slavery government, but abolitionist forces cried \"foul\" and continued their fight to establish Kansas as a free state. More than 200 people died in the resulting skirmishes.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test36.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)</a> · Question ID 359."
      },
      {
        "subjectKey": "ush",
        "testNumber": 36,
        "testTitle": "AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)",
        "testUrl": "https://www.crackap.com/ap/us-history/test36.html",
        "number": 3,
        "choices": [
          "all slaves in the Union and the Confederacy were declared free",
          "nearly 200,000 free blacks and escaped slaves joined the Union Army",
          "Maryland seceded from the Union",
          "African Americans in the United States received the right to vote"
        ],
        "questionId": 360,
        "q": "<p>As a result of the Emancipation Proclamation,</p>",
        "hasImage": false,
        "plain": "As a result of the Emancipation Proclamation,",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "The Emancipation Proclamation did not free all the slaves. Instead, it freed only those slaves in rebel territories not controlled by the Union. In other words, it was completely unenforceable; it immediately took effect only in those places where Union forces had no power to act, but it ultimately had a significant impact as Union troops took over Confederate territory. The Emancipation Proclamation had a huge symbolic effect, though, as it clearly cast the Civil War as a war against slavery. Free blacks and escaped slaves rushed to join the cause; nearly 200,000 joined the Union army as a consequence of the Emancipation Proclamation.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test36.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)</a> · Question ID 360."
      },
      {
        "subjectKey": "ush",
        "testNumber": 36,
        "testTitle": "AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)",
        "testUrl": "https://www.crackap.com/ap/us-history/test36.html",
        "number": 4,
        "choices": [
          "he refused to carry out Lincoln's plan for reconstruction",
          "he vetoed the Wade-Davis Bill",
          "Congress was controlled by Republicans and he was a Democrat",
          "he violated the Tenure of Office Act by firing Secretary of War Stanton"
        ],
        "questionId": 361,
        "q": "<p>Andrew Johnson was impeached because</p>",
        "hasImage": false,
        "plain": "Andrew Johnson was impeached because",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "Many historians argue that Andrew Johnson was neither the man nor the politician that Lincoln was. Johnson locked horns with the Radical Republicans in Congress over several issues pertaining to Reconstruction. Johnson had vetoed the Tenure of Office Act, which required a president to obtain Senate approval before firing an appointed official. The Senate argued that if it had the power to confirm nominations, it should also be allowed to have a say in the event a president wanted to fire someone. Congress overrode Johnson's veto; Johnson fired his secretary of state, the Radical Republican Henry Stanton; and the House of Representatives impeached the President of the United States for the first time in American history. Johnson was acquitted, however, by one vote in the Senate and thus remained in office to finish his term.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test36.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)</a> · Question ID 361."
      },
      {
        "subjectKey": "ush",
        "testNumber": 37,
        "testTitle": "AP US History Practice Test: The Industrial Revolution (1865–1898)",
        "testUrl": "https://www.crackap.com/ap/us-history/test37.html",
        "number": 2,
        "choices": [
          "They reduced federal power over the states by narrowly defining the applicability of the Constitution to state law.",
          "They cleared the way for the liberal reforms of the twentieth century by broadly interpreting constitutional guarantees of individual rights.",
          "They had little practical effect because the executive branch consistently refused to enforce the Court's rulings.",
          "They used the Fourteenth Amendment to create numerous environmental regulations and human rights, stifling American business growth."
        ],
        "questionId": 369,
        "q": "<p>Which of the following statements about Supreme Court decisions during the latter part of the nineteenth century is most accurate?</p>",
        "hasImage": false,
        "plain": "Which of the following statements about Supreme Court decisions during the latter part of the nineteenth century is most accurate?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "If you remember that the Supreme Court of the late nineteenth century was extremely conservative and extremely pro-business—and you should remember that, because it's important—you should have been able to eliminate (B) and (D) immediately. If you remember the profound impact of such decisions as Plessy v. Ferguson—and you should also remember that—you could have eliminated (C).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test37.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Industrial Revolution (1865–1898)</a> · Question ID 369."
      },
      {
        "subjectKey": "ush",
        "testNumber": 37,
        "testTitle": "AP US History Practice Test: The Industrial Revolution (1865–1898)",
        "testUrl": "https://www.crackap.com/ap/us-history/test37.html",
        "number": 3,
        "choices": [
          "Reconstruction-era efforts to assimilate newly freed slaves into all social strata of American society",
          "an architectural movement that sought to blend urban skyscrapers with the natural landscape surrounding them",
          "the industrial practice of assigning workers a single, repetitive task in order to maximize productivity",
          "control of all aspects of an industry, from production of raw materials to delivery of finished goods"
        ],
        "questionId": 370,
        "q": "<p>The term vertical integration refers to</p>",
        "hasImage": false,
        "plain": "The term vertical integration refers to",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "\"Vertical integration\" is another name for monopoly. Monopolies ran rampant in the late 1800s; the government did little to prevent them, and the courts actively encouraged them. Of the incorrect answers, (C) refers to assembly line production, and (A) and (B) are just made up.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test37.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Industrial Revolution (1865–1898)</a> · Question ID 370."
      },
      {
        "subjectKey": "ush",
        "testNumber": 37,
        "testTitle": "AP US History Practice Test: The Industrial Revolution (1865–1898)",
        "testUrl": "https://www.crackap.com/ap/us-history/test37.html",
        "number": 4,
        "choices": [
          "assassination of Abraham Lincoln",
          "failure of Reconstruction",
          "assassination of James A. Garfield",
          "Supreme Court decision in Plessy v. Ferguson"
        ],
        "questionId": 371,
        "q": "<p>The passage of the Pendleton Act was a direct result of the</p>",
        "hasImage": false,
        "plain": "The passage of the Pendleton Act was a direct result of the",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "James A. Garfield's presidency is remembered for one thing: Garfield's assassination at the hands of a disgruntled office seeker. His assassin, Charles Guiteau, was actually a mentally disturbed individual who imagined himself an important player in Garfield's electoral success. Guiteau convinced himself that he deserved a big fat government job as a reward for his efforts, and when he received none he retaliated by shooting Garfield. Garfield's successor, Chester Arthur, signed the Pendleton Act, which replaced the spoils system Guiteau had hoped to exploit with a merit-based system for selecting civil servants.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test37.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Industrial Revolution (1865–1898)</a> · Question ID 371."
      },
      {
        "subjectKey": "ush",
        "testNumber": 38,
        "testTitle": "AP US History Practice Test: The Early Twentieth Century (1890–1945)",
        "testUrl": "https://www.crackap.com/ap/us-history/test38.html",
        "number": 2,
        "choices": [
          "dismantle corporate monopolies",
          "suppress trade unions",
          "impose import tariffs",
          "enforce civil rights in the South"
        ],
        "questionId": 379,
        "q": "<p>Prior to the administration of Theodore Roosevelt, the Sherman Antitrust Act had been used primarily to</p>",
        "hasImage": false,
        "plain": "Prior to the administration of Theodore Roosevelt, the Sherman Antitrust Act had been used primarily to",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "Conservative courts and pro-business administrations allowed the Sherman Antitrust Act to be used to restrain labor but rarely to restrain business. Theodore Roosevelt changed all that. With public support Roosevelt transformed the Sherman Antitrust Act into a tool with which to break up monopolies. He focused his attention on corrupt monopolies whose activities countered the public interest, leaving alone trusts that operated more or less honestly. His approach garnered broad public acclaim, earning him the nickname \"the Trustbuster.\"",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test38.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Early Twentieth Century (1890–1945)</a> · Question ID 379."
      },
      {
        "subjectKey": "ush",
        "testNumber": 38,
        "testTitle": "AP US History Practice Test: The Early Twentieth Century (1890–1945)",
        "testUrl": "https://www.crackap.com/ap/us-history/test38.html",
        "number": 3,
        "choices": [
          "natives living on American soil abroad were guaranteed the same rights and privileges as U.S. citizens living within the continental United States",
          "colonial subjects within the American Empire were not entitled to the rights guaranteed by the U.S. Constitution",
          "the Constitution follows the flag",
          "Congress must relinquish control of these overseas possessions and honor their right of self-determination"
        ],
        "questionId": 380,
        "q": "<p>Following the Spanish-American War and the acquisition of territory overseas, in a series of cases known as the Insular Cases, the U.S. Supreme Court ruled that</p>",
        "hasImage": false,
        "plain": "Following the Spanish-American War and the acquisition of territory overseas, in a series of cases known as the Insular Cases, the U.S. Supreme Court ruled that",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "As a result of winning the Spanish-American War in 1898, the United States acquired Guam, Puerto Rico, the Philippines, and for all intents and purposes, Cuba. (Although we had claimed we had no interest in acquiring Cuba and could empathize with its colonial status, having once been a colony ourselves, the Platt Amendment rendered the island a virtual colony of the United States.) The situation in the Philippines created intense debate between business interests that saw the enormous economic benefits to acquiring \"stepping stones\" to profitable Chinese trade, and those Americans who believed having colonies contradicted our fundamental democratic principles. Once we acquired overseas possessions, a question arose as to the rights and privileges of the native peoples living within the American Empire. In a series of Supreme Court cases known as the Insular Cases, the Court ruled that the \"Constitution did not follow the flag,\" and thus, colonial subjects were not entitled to the same rights as U.S. citizens living at home or abroad.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test38.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Early Twentieth Century (1890–1945)</a> · Question ID 380."
      },
      {
        "subjectKey": "ush",
        "testNumber": 38,
        "testTitle": "AP US History Practice Test: The Early Twentieth Century (1890–1945)",
        "testUrl": "https://www.crackap.com/ap/us-history/test38.html",
        "number": 4,
        "choices": [
          "Germany offered Mexico a chance to regain the land it had lost in the Mexican Cession if Mexico attacked the United States and helped prevent the United States from assisting the Allies.",
          "A British spy alerted the world to the existence of mass extermination camps in German-held territories.",
          "The United States assured the British that it would join the war in Europe if the war were to continue for another year.",
          "The owner of the Boston Red Sox revealed a plan to sell star player Babe Ruth to the New York Yankees for a large amount of cash."
        ],
        "questionId": 381,
        "q": "<p>Which of the following best summarizes the contents of the Zimmermann telegram, which was intercepted in 1917?</p>",
        "hasImage": false,
        "plain": "Which of the following best summarizes the contents of the Zimmermann telegram, which was intercepted in 1917?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "This is a straight recall question. You either know what the Zimmermann telegram is or you don't. If you know it, you're going to get this question right. If you don't, use process of elimination to get rid of anachronistic answers, as in (B), or answers that seem un-AP-like because they don't reinforce important themes of U.S. history, as in (D). You should know, however, that the Zimmermann telegram was one of the reasons the United States entered World War I.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test38.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Early Twentieth Century (1890–1945)</a> · Question ID 381."
      },
      {
        "subjectKey": "ush",
        "testNumber": 39,
        "testTitle": "AP US History Practice Test: The Postwar Period and Cold War (1945–1980)",
        "testUrl": "https://www.crackap.com/ap/us-history/test39.html",
        "number": 2,
        "choices": [
          "civil rights movement",
          "New Deal",
          "Red Scare",
          "Great Society"
        ],
        "questionId": 389,
        "q": "<p>Loyalty oaths, blacklists, and Alger Hiss are all associated with the</p>",
        "hasImage": false,
        "plain": "Loyalty oaths, blacklists, and Alger Hiss are all associated with the",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "Fear of communist infiltration and subversion reached hysterical proportions in the post–World War II era, making all sorts of excessive responses to the communist threat not only possible but likely. Loyalty oaths were instituted by private companies, state governments, and even the federal government, based on the apparent belief that communist spies are capable of espionage but not of lying under oath. Blacklists banned suspected subversives from work in many industries, destroying the lives of many innocent people. Alger Hiss was accused of passing government secrets to the Soviet Union. He professed his innocence to his dying day, although Soviet files released in the post-Soviet era suggest his guilt. The Hiss case was front-page news. Richard Nixon played a prominent role in Hiss's prosecution, thereby earning Nixon the national spotlight for the first time.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test39.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Postwar Period and Cold War (1945–1980)</a> · Question ID 389."
      },
      {
        "subjectKey": "ush",
        "testNumber": 39,
        "testTitle": "AP US History Practice Test: The Postwar Period and Cold War (1945–1980)",
        "testUrl": "https://www.crackap.com/ap/us-history/test39.html",
        "number": 3,
        "choices": [
          "threatening Moscow with \"massive retaliation\"",
          "containment",
          "collective security",
          "summit diplomacy"
        ],
        "questionId": 390,
        "q": "<p>John Foster Dulles, secretary of state under Eisenhower, intensified Cold War rhetoric with Washington's New Look defense program that emphasized</p>",
        "hasImage": false,
        "plain": "John Foster Dulles, secretary of state under Eisenhower, intensified Cold War rhetoric with Washington's New Look defense program that emphasized",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "The key to this question is the phrase \"intensified Cold War rhetoric.\" Words like \"massive retaliation\" didn't exactly improve relations with the Soviet Union. While (B), containment, was the guiding principle of U.S. foreign policy throughout the Cold War, this question is asking something more specific. And although Dulles did forge many alliances with smaller nations (collective security), (A) is a better answer. Choice (C), summit diplomacy, was practiced by Reagan and Gorbachev, while the term \"shuttle diplomacy,\" (D), was applied to Henry Kissinger under Nixon.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test39.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Postwar Period and Cold War (1945–1980)</a> · Question ID 390."
      },
      {
        "subjectKey": "ush",
        "testNumber": 39,
        "testTitle": "AP US History Practice Test: The Postwar Period and Cold War (1945–1980)",
        "testUrl": "https://www.crackap.com/ap/us-history/test39.html",
        "number": 4,
        "choices": [
          "backing down from the Brown decision in its other civil rights rulings",
          "exercising judicial restraint",
          "protecting civil rights for African Americans while denying rights for political activists and communists",
          "in effect, enacting \"judicial legislation\" through its rulings on individual rights"
        ],
        "questionId": 391,
        "q": "<p>During the 1950s and early 1960s, the Warren Court was often criticized for</p>",
        "hasImage": false,
        "plain": "During the 1950s and early 1960s, the Warren Court was often criticized for",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "You should be familiar with the important decisions of the Marshall Court (1801–1835) and the Warren Court (1953–1969). Marshall is remembered as a Federalist who strengthened the new federal government and encouraged economic development of the new nation. The Warren Court was an activist court, best remembered for increasing the rights of individuals, specifically the rights of the accused. (For example, the Gideon and Miranda cases were decided by the Warren Court.) According to the Constitution, only Congress can make laws, but in effect, many of the Warren decisions established social policy, which many conservative critics saw as \"judicial legislation.\"",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test39.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Postwar Period and Cold War (1945–1980)</a> · Question ID 391."
      },
      {
        "subjectKey": "ush",
        "testNumber": 40,
        "testTitle": "AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)",
        "testUrl": "https://www.crackap.com/ap/us-history/test40.html",
        "number": 2,
        "choices": [
          "fears of renewed Soviet expansion",
          "the protection of human rights",
          "American economic interests",
          "the desire to promote and develop democratic institutions in former communist and Third World nations"
        ],
        "questionId": 397,
        "q": "<p>Since the end of the Cold War, the continuing American impulse to intervene in the economic and political affairs of other nations around the world is motivated by all of the following EXCEPT</p>",
        "hasImage": false,
        "plain": "Since the end of the Cold War, the continuing American impulse to intervene in the economic and political affairs of other nations around the world is motivated by all of the following EXCEPT",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "Though American relations with Russia remain uneasy, fears of Soviet expansion are a thing of the past; the Soviet Union ceased to exist in 1991, ending the Cold War.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)</a> · Question ID 397."
      },
      {
        "subjectKey": "ush",
        "testNumber": 40,
        "testTitle": "AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)",
        "testUrl": "https://www.crackap.com/ap/us-history/test40.html",
        "number": 3,
        "choices": [
          "cuts in the federal budget",
          "the appointment of Sandra Day O'Connor to the Supreme Court",
          "tax cuts for corporations",
          "the loosening of government regulation"
        ],
        "questionId": 398,
        "q": "<p>All of the following acts of President Ronald Reagan's administration are characterized as a return to conservative political values EXCEPT</p>",
        "hasImage": false,
        "plain": "All of the following acts of President Ronald Reagan's administration are characterized as a return to conservative political values EXCEPT",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "In 1981 Ronald Reagan, in a move supported by various groups across the political spectrum, made Sandra Day O'Connor the first woman to serve on the Supreme Court. All the other choices represent typically conservative policy decisions by Reagan.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)</a> · Question ID 398."
      },
      {
        "subjectKey": "ush",
        "testNumber": 40,
        "testTitle": "AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)",
        "testUrl": "https://www.crackap.com/ap/us-history/test40.html",
        "number": 4,
        "choices": [
          "The Moral Majority movement",
          "The popularity of Ronald Reagan",
          "The \"stagflation\" economic condition of the 1970s",
          "The drop in the stock market"
        ],
        "questionId": 399,
        "q": "<p>Which of the following did NOT contribute to the emergence of the New Right of the 1970s and 1980s?</p>",
        "hasImage": false,
        "plain": "Which of the following did NOT contribute to the emergence of the New Right of the 1970s and 1980s?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "The drop in the stock market, which occurred in 1987, was not a contributing factor to the emergence of the New Right. All of the other factors did lead to this renewal of conservatism.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)</a> · Question ID 399."
      }
    ],
    "frq": [
      {
        "title": "Official 2025 SAQ 1",
        "text": "<strong>Official 2025 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> SAQ 1 Set 1 (2025)<br>Answer SAQ 1 from the official set 1 packet and then grade each checklist item separately.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/ush/ap25-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-us-history-set-1.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/ush/ap25-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-us-history-set-1.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Directly answers the task with a historically defensible claim.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Uses accurate evidence from the prompt or historical knowledge.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Explains the evidence rather than only naming it.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Responds to every part of the SAQ prompt.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Uses specific period language and avoids major factual errors.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Before reading official commentary, verify that each mini-response actually explains why the evidence matters.",
        "scoringNotes": "SAQs reward precision. Short answers that only list facts without explanation should not earn the explanation point.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/ush/ap25-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-us-history-set-1.pdf</a> and <a href=\"assets/source-lock/official/ush/ap25-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-us-history-set-1.pdf</a>."
      },
      {
        "title": "Official 2025 DBQ",
        "text": "<strong>Official 2025 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> DBQ Set 1 (2025)<br>Complete the DBQ from the official set 1 packet. Use the condensed rubric to self-check before reading any official commentary.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/ush/ap25-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-us-history-set-1.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/ush/ap25-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-us-history-set-1.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Presents a defensible thesis that answers the prompt.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Provides meaningful contextualization.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Uses the documents as evidence for the argument.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Brings in outside historical evidence beyond the provided documents.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Explains sourcing, complexity, or nuance rather than summarizing documents mechanically.",
            "pts": 1
          }
        ],
        "sampleAnswer": "After drafting, compare your thesis, document use, and outside evidence against the scoring-guidelines PDF before assigning a score.",
        "scoringNotes": "A DBQ can sound polished and still lose points if the documents are only summarized instead of used to advance the argument.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/ush/ap25-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-us-history-set-1.pdf</a> and <a href=\"assets/source-lock/official/ush/ap25-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-us-history-set-1.pdf</a>."
      },
      {
        "title": "Official 2025 LEQ 2",
        "text": "<strong>Official 2025 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> LEQ 2 Set 1 (2025)<br>Write LEQ 2 from the official set 1 packet using the checklist rubric below.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/ush/ap25-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-us-history-set-1.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/ush/ap25-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-us-history-set-1.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "States a defensible thesis and line of reasoning.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Provides broader historical context for the claim.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Uses specific historical evidence relevant to the prompt.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Explains how the evidence supports the argument, not just where it happened.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Shows nuance, qualification, or complexity in the final argument.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Read the official scoring guidelines after self-scoring and compare whether your evidence is both specific and actually tied to your thesis.",
        "scoringNotes": "The easiest point to over-award is the reasoning point. Evidence must be connected to the line of argument to count.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/ush/ap25-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-frq-us-history-set-1.pdf</a> and <a href=\"assets/source-lock/official/ush/ap25-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap25-sg-us-history-set-1.pdf</a>."
      }
    ]
  },
  {
    "id": "ush_set2",
    "subjectKey": "ush",
    "examName": "AP United States History",
    "title": "Set 2",
    "cardLabel": "2",
    "badge": "SOURCE LOCK",
    "description": "24 CrackAP MCQ balanced across periods + SAQ, DBQ, and LEQ.",
    "mcTime": 40,
    "frqTime": 70,
    "liveFeedback": true,
    "liveRubric": true,
    "scoreProfile": {
      "mcWeight": 55,
      "frqTotal": 15,
      "frqWeight": 45,
      "compositeMax": 100,
      "thresholds": {
        "5": 82,
        "4": 68,
        "3": 54,
        "2": 40
      },
      "mcLabel": "55.00",
      "frqLabel": "45.00"
    },
    "mc": [
      {
        "subjectKey": "ush",
        "testNumber": 33,
        "testTitle": "AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)",
        "testUrl": "https://www.crackap.com/ap/us-history/test33.html",
        "number": 5,
        "choices": [
          "Puritan religious edicts",
          "prohibitions on anti-monarchist speech",
          "import and export restrictions",
          "travel bans imposed on Native Americans"
        ],
        "questionId": 335,
        "q": "<p>Colonial vice-admiralty courts were created to enforce</p>",
        "hasImage": false,
        "plain": "Colonial vice-admiralty courts were created to enforce",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "During the Age of Salutary Neglect, Britain regarded the colonies primarily as a market for exports and a resource of raw materials. England imposed numerous import and export restrictions on the colonies in an effort to maintain its monopoly on colonial markets. The colonists, naturally, tried to smuggle cheaper goods into the country and smuggled products out of the country in order to sell them. The British established their own military-style courts—called vice-admiralty courts—to enforce trade laws because they knew the colonists themselves would not.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test33.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)</a> · Question ID 335."
      },
      {
        "subjectKey": "ush",
        "testNumber": 33,
        "testTitle": "AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)",
        "testUrl": "https://www.crackap.com/ap/us-history/test33.html",
        "number": 6,
        "choices": [
          "Bacon's Rebellion",
          "the Pequot War",
          "the Stono Uprising",
          "King Philip's War"
        ],
        "questionId": 336,
        "q": "<p>All of the following are examples of conflicts between colonists and Native American tribes EXCEPT</p>",
        "hasImage": false,
        "plain": "All of the following are examples of conflicts between colonists and Native American tribes EXCEPT",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "The Stono Uprising was an early slave rebellion (1739) in which African slaves rose against their oppressors. The Stono Uprising is sometimes referred to as the Cato Rebellion.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test33.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)</a> · Question ID 336."
      },
      {
        "subjectKey": "ush",
        "testNumber": 33,
        "testTitle": "AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)",
        "testUrl": "https://www.crackap.com/ap/us-history/test33.html",
        "number": 7,
        "choices": [
          "Poor sanitation left colonial cities vulnerable to epidemics.",
          "Religious and ethnic diversity was greater in colonial cities than in the colonial countryside.",
          "Most large colonial cities grew around a port.",
          "The majority of colonists lived in urban areas."
        ],
        "questionId": 337,
        "q": "<p>Which of the following statements about cities during the colonial era is NOT true?</p>",
        "hasImage": false,
        "plain": "Which of the following statements about cities during the colonial era is NOT true?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "The vast majority of colonists lived in rural areas. By 1750 roughly 5 percent of the colonial population resided in cities. Philadelphia, Boston, Williamsburg, Baltimore, and Boston were the most important cities of the era; all were built around ports.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test33.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)</a> · Question ID 337."
      },
      {
        "subjectKey": "ush",
        "testNumber": 34,
        "testTitle": "AP US History Practice Test: Conflict and American Independence (1754–1800)",
        "testUrl": "https://www.crackap.com/ap/us-history/test34.html",
        "number": 5,
        "choices": [
          "man is born free and equal",
          "man must submit to the General Will to protect his natural rights",
          "governments get their authority from the people, not God",
          "the purpose of government is to protect man's natural rights"
        ],
        "questionId": 344,
        "q": "<p>Thomas Jefferson relied on the ideas of John Locke in writing the American Declaration of Independence in all of the following ways EXCEPT Locke's belief that</p>",
        "hasImage": false,
        "plain": "Thomas Jefferson relied on the ideas of John Locke in writing the American Declaration of Independence in all of the following ways EXCEPT Locke's belief that",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "Much of the American Declaration of Independence is derived from the writings of John Locke, particularly his Two Treatises of Government, published in 1690, in which he challenged the theory of divine right of kings and put forth what is known as social contract theory. Both Locke and Rousseau believed that man was born free, but it was Rousseau who argued that \"Man must be forced to be free\" and submit to the \"General Will.\"",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test34.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Conflict and American Independence (1754–1800)</a> · Question ID 344."
      },
      {
        "subjectKey": "ush",
        "testNumber": 34,
        "testTitle": "AP US History Practice Test: Conflict and American Independence (1754–1800)",
        "testUrl": "https://www.crackap.com/ap/us-history/test34.html",
        "number": 6,
        "choices": [
          "demonstrated the strength, yet fairness, of the newly created federal government",
          "made many Americans realize that slavery could not last",
          "made Americans realize that excessive taxation often leads to violence",
          "demonstrated the weakness of the federal government under the Articles of Confederation"
        ],
        "questionId": 345,
        "q": "<p>Historians often cite Shays's Rebellion (1786–1787) as a significant event in U.S. history because it</p>",
        "hasImage": false,
        "plain": "Historians often cite Shays's Rebellion (1786–1787) as a significant event in U.S. history because it",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "The Articles of Confederation had intentionally created a weak central government, granting Congress few regulatory powers so as to avoid recreating an American Parliament. Shays's Rebellion threatened the survival of the newly established republic because the farmers in western Massachusetts were rebelling against their state government for the very same reason the colonists had rebelled against England—taxes. Under the Articles of Confederation, Congress could neither raise nor support a federal militia, so when Massachusetts requested federal assistance in squelching Daniel Shays and his farmer friends, no help was available. Had this question been about the Whiskey Rebellion during George Washington's administration, (A) would have been the correct answer. Choice (A) also demonstrates the difference between the limited power of the federal government under the Articles of Confederation and the stronger federal government established by the Constitution. Choice (C) is not correct, although excessive taxation was certainly one of the major causes of the American Revolution and subsequent rebellions. It is interesting to note that we did not have a federal income tax until the Sixteenth Amendment was ratified in the early twentieth century.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test34.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Conflict and American Independence (1754–1800)</a> · Question ID 345."
      },
      {
        "subjectKey": "ush",
        "testNumber": 34,
        "testTitle": "AP US History Practice Test: Conflict and American Independence (1754–1800)",
        "testUrl": "https://www.crackap.com/ap/us-history/test34.html",
        "number": 7,
        "choices": [
          "I only",
          "II only",
          "I and III only",
          "I, II, and III"
        ],
        "questionId": 346,
        "q": "<p>Under the Articles of Confederation, the national government had which of the following powers?</p><p>I. The power to collect taxes</p><p>II. The power to negotiate treaties</p><p>III. The power to supercede state law</p>",
        "hasImage": false,
        "plain": "Under the Articles of Confederation, the national government had which of the following powers? I. The power to collect taxes II. The power to negotiate treaties III. The power to supercede state law",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "The Articles of Confederation were established to provide a limited framework to organize the states under a single banner. However, they had very little power (purposefully) so that each state could decide its own legislation and government. States were expected to establish taxation and Congress under the Articles of Confederation was not allowed to set up taxes (eliminating I). Furthermore, the whole purpose of the Articles of Confederation was to provide a legal document to enforce states rights, not undermine them (eliminating III). The Articles of Confederation did, however, provide a framework for how the United States government would represent the states in foreign diplomatic matters such as treaties (making II correct).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test34.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Conflict and American Independence (1754–1800)</a> · Question ID 346."
      },
      {
        "subjectKey": "ush",
        "testNumber": 35,
        "testTitle": "AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)",
        "testUrl": "https://www.crackap.com/ap/us-history/test35.html",
        "number": 5,
        "choices": [
          "New Englanders were more radical than Southerners, as they had been since the days of the American Revolution",
          "Andrew Jackson favored states' rights over federal supremacy",
          "the system of checks and balances was flawed",
          "economic sectionalism was a serious threat to national unity"
        ],
        "questionId": 354,
        "q": "<p>The controversy over the tariff during the late 1820s and early 1830s demonstrated that</p>",
        "hasImage": false,
        "plain": "The controversy over the tariff during the late 1820s and early 1830s demonstrated that",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "The tariff in question here is the infamous Tariff of Abominations, so named by the Southern states that protested that this protective tariff benefited the New England manufacturers at the expense of cotton exporters in the South. The enactment of the Tariff of 1828 led to the nullification crisis a few years later when South Carolina declared the tariff null and void. (A similar situation had occurred in 1798 when Jefferson and Madison penned the Virginia and Kentucky resolutions in protest against the Alien and Sedition Acts.) In the case of Marbury v. Madison, Marshall had argued that only the Supreme Court could rule a law to be unconstitutional, not individual states. Eventually, a compromise tariff was brokered, and the crisis was resolved. Nevertheless, the nullification crisis during Andrew Jackson's administration exposed the increasing tension of economic sectionalism that would propel the nation to civil war 30 years later.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)</a> · Question ID 354."
      },
      {
        "subjectKey": "ush",
        "testNumber": 35,
        "testTitle": "AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)",
        "testUrl": "https://www.crackap.com/ap/us-history/test35.html",
        "number": 6,
        "choices": [
          "distrust of large national government programs",
          "abhorrence of the spoils system",
          "tendency to favor the interests of the Northeast",
          "commitment to developing a national economy"
        ],
        "questionId": 355,
        "q": "<p>Andrew Jackson's positions on the Second National Bank and the American System typified his</p>",
        "hasImage": false,
        "plain": "Andrew Jackson's positions on the Second National Bank and the American System typified his",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "Andrew Jackson generally sided with the states on the issue of states' rights, preferring to limit the powers of the federal government to only those he perceived to be essential. He also favored his Western constituency to the power elite of the Northeast, whom he regarded with suspicion. Thus, Jackson scuttled the Second National Bank, a large federal program championed by Northeastern bankers, and the American System, a large public works program.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)</a> · Question ID 355."
      },
      {
        "subjectKey": "ush",
        "testNumber": 35,
        "testTitle": "AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)",
        "testUrl": "https://www.crackap.com/ap/us-history/test35.html",
        "number": 7,
        "choices": [
          "they refused to assimilate to the \"American\" way of life",
          "gold was discovered in their territory and Georgians demanded that the Indian Removal Act be enforced",
          "the Supreme Court refused to hear their cases",
          "the Seminole tribe, their traditional enemy, conquered their territory"
        ],
        "questionId": 356,
        "q": "<p>The Cherokee of Georgia were forced off their land because</p>",
        "hasImage": false,
        "plain": "The Cherokee of Georgia were forced off their land because",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "The Cherokee were considered part of the \"Five Civilized Tribes\" living in the South, having established a republic in the state of Georgia. Unfortunately the discovery of gold within the Cherokee nation's borders was the catalyst for the tribe's forced relocation. Georgian citizens wanted to enforce the Indian Removal Act in order to have access to the territory. Although the Supreme Court ruled in favor of the Cherokees, President Andrew Jackson did not comply with the decision. States' rights were an important issue during Jackson's presidency, and he did not want to intervene on behalf of the Cherokee nation.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)</a> · Question ID 356."
      },
      {
        "subjectKey": "ush",
        "testNumber": 36,
        "testTitle": "AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)",
        "testUrl": "https://www.crackap.com/ap/us-history/test36.html",
        "number": 5,
        "choices": [
          "was similar to the election of 2000 in that the Supreme Court ultimately had to step in and decide the election",
          "was resolved by a special bipartisan commission and resulted in the end of military reconstruction",
          "led many members of Congress to push for a Constitutional amendment to abolish the electoral college",
          "was resolved when Samuel J. Tilden conceded the election to Rutherford B. Hayes"
        ],
        "questionId": 362,
        "q": "<p>The dispute over electoral votes in the election of 1876</p>",
        "hasImage": false,
        "plain": "The dispute over electoral votes in the election of 1876",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "The election of 1876 is another one of the disputed elections in American political history. Although Samuel J. Tilden, then Governor of New York, won the popular vote nationwide, there were several states that contested the results of the election. Consequently, a special bipartisan commission was set up to determine the outcome of the election. In what became known as the \"Compromise of 1877,\" Rutherford B. Hayes won the presidential election by a margin of one single electoral vote. Hayes had promised to remove federal troops still stationed in the South after the Civil War, thus ending military reconstruction.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test36.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)</a> · Question ID 362."
      },
      {
        "subjectKey": "ush",
        "testNumber": 36,
        "testTitle": "AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)",
        "testUrl": "https://www.crackap.com/ap/us-history/test36.html",
        "number": 6,
        "choices": [
          "stayed in the South and worked as sharecroppers",
          "joined the pioneering movement as it headed West",
          "moved to the North to work in factories",
          "took work building the nation's growing railroad system"
        ],
        "questionId": 363,
        "q": "<p>Following the Civil War, most freed slaves</p>",
        "hasImage": false,
        "plain": "Following the Civil War, most freed slaves",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "Remember that most slaves had no job skills and could neither read nor write. They had no money and nowhere to go when slavery was abolished. Some slaves took off in search of their scattered families, but most stayed exactly where they were and worked as tenant farmers or sharecroppers. Under the new wage-labor system, plantations were subdivided into smaller farms of thirty to fifty acres, which were then leased to freedmen under a one-year contract. Tenants would work a piece of land and turn over 50 percent of their crops to the landlord. Often, other expenses, such as rent for a run-down shack or over-priced groceries, available only through the landowner, would be deducted from whatever was produced. One of the services initially provided by the Freedmen's Bureau was to help freed slaves who could neither read nor write understand the contracts they were about to sign. The system of sharecropping persisted well into the twentieth century, keeping many blacks in positions of poverty and degradation. Choice (C) is incorrect for reasons stated above. The Great Migration of Southern blacks into Northern cities did not take place until World War I, long after Reconstruction. Choice (D) is incorrect because Chinese immigrants were used to construct our nation's railroad system, much of which had been completed by the end of the Civil War.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test36.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)</a> · Question ID 363."
      },
      {
        "subjectKey": "ush",
        "testNumber": 36,
        "testTitle": "AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)",
        "testUrl": "https://www.crackap.com/ap/us-history/test36.html",
        "number": 7,
        "choices": [
          "the right to bear arms",
          "the prohibition of alcohol",
          "women's rights",
          "immigration"
        ],
        "questionId": 364,
        "q": "<p>The Know-Nothing Party focused its efforts almost exclusively on the issue of</p>",
        "hasImage": false,
        "plain": "The Know-Nothing Party focused its efforts almost exclusively on the issue of",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "The Know-Nothings were a nativist group formed in response to the growing concentration of immigrants—particularly Italian and Irish Catholics—in Eastern cities. The party grew out of a number of secret societies whose members were instructed to tell outsiders nothing, hence the party's name: When asked anything about their groups, Know-Nothings would respond, \"I know nothing.\" Their program included a 25-year residency requirement for citizenship; they also wanted to restrict all public offices to only those who were native-born Americans. By 1855 they had changed their name to the American Party, and in 1856 they fielded a presidential candidate (former president Millard Fillmore). Within a few years the party had disbanded, destroyed by their disagreements over slavery. Most Northern Know-Nothings joined the Republican party.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test36.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)</a> · Question ID 364."
      },
      {
        "subjectKey": "ush",
        "testNumber": 37,
        "testTitle": "AP US History Practice Test: The Industrial Revolution (1865–1898)",
        "testUrl": "https://www.crackap.com/ap/us-history/test37.html",
        "number": 5,
        "choices": [
          "women's suffrage movement",
          "civil rights movement for African Americans",
          "Knights of Labor",
          "Temperance movement"
        ],
        "questionId": 372,
        "q": "<p>The Haymarket Affair represented a major setback for the</p>",
        "hasImage": false,
        "plain": "The Haymarket Affair represented a major setback for the",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "Although one might certainly make a valid claim that labor unions were necessary during the late nineteenth century when working conditions were dangerous, unsanitary, and exploitative, unions were very unpopular because they were associated with political radicalism and violence. The Haymarket incident began as a mass meeting organized by anarchists, held in Haymarket Square in Chicago in 1886 in sympathy and protest of events related to striking workers at the McCormick Harvester Company plant nearby. When police tried to break up the meeting, someone threw a bomb into the crowd, leaving seven policemen dead and several wounded. This incident convinced the American public that unions were dangerous and ultimately led to the decline of the Knights of Labor.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test37.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Industrial Revolution (1865–1898)</a> · Question ID 372."
      },
      {
        "subjectKey": "ush",
        "testNumber": 37,
        "testTitle": "AP US History Practice Test: The Industrial Revolution (1865–1898)",
        "testUrl": "https://www.crackap.com/ap/us-history/test37.html",
        "number": 6,
        "choices": [
          "Japan depended heavily on trade with Hawaii to support its economy",
          "the United States had signed a treaty with Japan granting Japan rights to Hawaii",
          "the Japanese were committed to the principle of self-rule throughout the Pacific",
          "nearly half of Hawaii's residents were of Japanese descent"
        ],
        "questionId": 373,
        "q": "<p>Japan was outraged by the American annexation of Hawaii in 1898 primarily because</p>",
        "hasImage": false,
        "plain": "Japan was outraged by the American annexation of Hawaii in 1898 primarily because",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "If you can't immediately identify the correct answer to this one, use common sense to eliminate incorrect answers. Japan is a huge nation relative to Hawaii; its economy couldn't realistically depend on trade with the island, so eliminate (A). Choice (B) contradicts one of the main themes of the period—the Age of Imperialism, when every Western power, including the United States, was gathering colonies in the East. Would the United States have ceded Hawaii to Japan during that period? Unlikely, and much less likely still that the AP Exam would ask about an anomalous agreement. Choice (C) suggests Japan was a bastion of democracy in the late nineteenth century; in fact, it was ruled by an emperor.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test37.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Industrial Revolution (1865–1898)</a> · Question ID 373."
      },
      {
        "subjectKey": "ush",
        "testNumber": 37,
        "testTitle": "AP US History Practice Test: The Industrial Revolution (1865–1898)",
        "testUrl": "https://www.crackap.com/ap/us-history/test37.html",
        "number": 7,
        "choices": [
          "came mostly from Latin American countries",
          "settled in rural areas in the Midwest where land was plentiful",
          "were better prepared than previous immigrants had been to face the challenges of urban life",
          "spoke different languages and had different customs than most Americans and thus were not easily assimilated"
        ],
        "questionId": 374,
        "q": "<p>The \"new immigrants\" who arrived in the United States after the Civil War were different from the\"old immigrants\" in that they</p>",
        "hasImage": false,
        "plain": "The \"new immigrants\" who arrived in the United States after the Civil War were different from the\"old immigrants\" in that they",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "Historians describe the immigrants who came to the United States before the Civil War as \"old immigrants.\" These men and women came predominantly from countries in northwestern Europe. For the most part, they were Protestants and spoke English and easily became part of the melting pot we call America. Following the Civil War, however, the \"new immigrants\" came predominantly from nations in southeastern Europe, including Russians, Italians, and Poles. Many of these people were Catholics and Jews and were culturally very different from most Americans by that point. These new immigrants were not easily assimilated. They tended to settle amongst themselves in ethnic neighborhoods in major cities like New York and Chicago where there was a demand for unskilled labor in the numerous factories of these big cities.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test37.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Industrial Revolution (1865–1898)</a> · Question ID 374."
      },
      {
        "subjectKey": "ush",
        "testNumber": 38,
        "testTitle": "AP US History Practice Test: The Early Twentieth Century (1890–1945)",
        "testUrl": "https://www.crackap.com/ap/us-history/test38.html",
        "number": 5,
        "choices": [
          "promotion of universal self-determination",
          "lower tariffs to promote free trade",
          "repayment of all Allied war expenses by Germany",
          "across-the-board arms reductions"
        ],
        "questionId": 382,
        "q": "<p>Wilson's Fourteen Points plan for peace after World War I included all of the following EXCEPT</p>",
        "hasImage": false,
        "plain": "Wilson's Fourteen Points plan for peace after World War I included all of the following EXCEPT",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "In the aftermath of World War I, President Wilson favored a peace that would promote openness in international affairs, free trade, and diplomacy. He also sought universal arms reductions and a mechanism for enforcing world peace, which was to be achieved through the League of Nations. He did not seek a punitive treaty that forced Germany to pay heavy reparations; the European allies, however, insisted. Wilson was able to negotiate very little of his Fourteen Points plan, but he remained optimistic that the League of Nations would eventually broker a fairer postwar peace. Unfortunately, Wilson's hopes were never realized.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test38.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Early Twentieth Century (1890–1945)</a> · Question ID 382."
      },
      {
        "subjectKey": "ush",
        "testNumber": 38,
        "testTitle": "AP US History Practice Test: The Early Twentieth Century (1890–1945)",
        "testUrl": "https://www.crackap.com/ap/us-history/test38.html",
        "number": 6,
        "choices": [
          "the rise of the Ku Klux Klan",
          "the Teapot Dome Scandal",
          "the Scopes Monkey Trial",
          "the Emergency Quota Act of 1924"
        ],
        "questionId": 383,
        "q": "<p>All of the following can be seen as clashes between traditional and modern culture during the post–World War I era EXCEPT</p>",
        "hasImage": false,
        "plain": "All of the following can be seen as clashes between traditional and modern culture during the post–World War I era EXCEPT",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "The Ku Klux Klan evoked the execrable Southern traditions of racism and physical intimidation against the modern drive for expanded civil rights. The Scopes Monkey Trial pitted religion against the modern notion of evolution. The Emergency Quota Act of 1924 was passed to check immigration from non-western European countries; its champions felt the nation's western European traditions were threatened by immigrants from Southern Europe, Eastern Europe, South America, and Asia. Prohibition pitted religion against modern licentiousness. The Teapot Dome Scandal, on the other hand, was just an example of good old-fashioned political corruption.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test38.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Early Twentieth Century (1890–1945)</a> · Question ID 383."
      },
      {
        "subjectKey": "ush",
        "testNumber": 38,
        "testTitle": "AP US History Practice Test: The Early Twentieth Century (1890–1945)",
        "testUrl": "https://www.crackap.com/ap/us-history/test38.html",
        "number": 7,
        "choices": [
          "required investors to purchase only high-risk, volatile stocks",
          "imposed high interest rates that discouraged trading",
          "prevented traders from learning the true financial state of the companies in which they invested",
          "allowed traders to pay for stock with projected future profits"
        ],
        "questionId": 384,
        "q": "<p>Buying \"on margin\" contributed to the stock market crash of 1929 because it</p>",
        "hasImage": false,
        "plain": "Buying \"on margin\" contributed to the stock market crash of 1929 because it",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "Buying \"on margin\" allowed investors to buy stock with only a small amount of cash; the rest was borrowed from stockbrokers and banks against the presumed profits from subsequent stock sales. The system worked only as long as stock prices kept rising; once they started to fall, all hell broke loose. In response to market weakness in the fall of 1929, investors who had long believed the market was overvalued started to sell off their stocks, causing prices to drop. Noting the market downturn, stockbrokers demanded that clients repay margin loans and, when their clients couldn't repay, dumped the stocks on the market in order to recoup some of their losses. The law of supply and demand sent stock prices spiraling uncontrollably downward. Over a period of two months, the market lost nearly half its value and many, many investors—including some of the nation's biggest banks—were ruined.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test38.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Early Twentieth Century (1890–1945)</a> · Question ID 384."
      },
      {
        "subjectKey": "ush",
        "testNumber": 39,
        "testTitle": "AP US History Practice Test: The Postwar Period and Cold War (1945–1980)",
        "testUrl": "https://www.crackap.com/ap/us-history/test39.html",
        "number": 5,
        "choices": [
          "the war in Vietnam demanded his full attention",
          "African American leaders refused to work with him",
          "his vice president, Lyndon Johnson, opposed any changes to civil rights law",
          "the violent tactics of the civil rights movement made any association with it politically untenable"
        ],
        "questionId": 392,
        "q": "<p>John F. Kennedy was unable to accomplish much of his stated civil rights agenda during his lifetime primarily because</p>",
        "hasImage": false,
        "plain": "John F. Kennedy was unable to accomplish much of his stated civil rights agenda during his lifetime primarily because",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "Kennedy's victory in 1960 was by the tiniest of margins. He could not have won, or governed, without the support of Democrats in the South, many of whom opposed any federal strengthening of civil rights law. As a result, Kennedy had to tread carefully on the issue of African American civil rights, a cause he had supported forcefully during his campaign. He used the attorney general's office to bring suits to force desegregation of Southern universities and appointed African Americans to prominent positions in his administration but made no effort at civil rights legislation until his final year in office. After Kennedy's assassination, new President Lyndon Johnson invoked Kennedy's memory and commitment to civil rights to force the Civil Rights Act of 1964 through Congress.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test39.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Postwar Period and Cold War (1945–1980)</a> · Question ID 392."
      },
      {
        "subjectKey": "ush",
        "testNumber": 39,
        "testTitle": "AP US History Practice Test: The Postwar Period and Cold War (1945–1980)",
        "testUrl": "https://www.crackap.com/ap/us-history/test39.html",
        "number": 6,
        "choices": [
          "The Democratic Party was fractured due to dissent over the Vietnam War.",
          "A frontrunner for one of the major parties was assassinated during the primary season.",
          "Both major-party candidates campaigned as Washington outsiders.",
          "A third-party candidacy split the traditionally Democratic Southern vote."
        ],
        "questionId": 393,
        "q": "<p>Which of the following does NOT accurately describe the presidential election of 1968?</p>",
        "hasImage": false,
        "plain": "Which of the following does NOT accurately describe the presidential election of 1968?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "The Republican candidate, Richard Nixon, was a former vice president. The Democratic candidate, Hubert Humphrey, was the current vice president and, before that, a longtime senator. Neither could have campaigned as a Washington outsider, and neither did. The Democrats were fractured over the war; the party was home to both aggressive cold warriors and the anti-war movement. Robert Kennedy was assassinated in June; many believe he would have won the nomination had he not been killed. George Wallace formed a third party and campaigned on states' rights and segregation, siphoning off key votes in the South, where the Democrats had traditionally done well. Nixon's only opposition in the Republican primaries came from Nelson D. Rockefeller, who campaigned halfheartedly, and Ronald Reagan, who, at the time, was seen as too extreme to ever win the presidency. Reagan never changed, but the country did.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test39.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Postwar Period and Cold War (1945–1980)</a> · Question ID 393."
      },
      {
        "subjectKey": "ush",
        "testNumber": 39,
        "testTitle": "AP US History Practice Test: The Postwar Period and Cold War (1945–1980)",
        "testUrl": "https://www.crackap.com/ap/us-history/test39.html",
        "number": 7,
        "choices": [
          "the cost of funding the Vietnam War",
          "rapidly increasing gasoline and oil prices",
          "government investment in the space program",
          "a dramatic reduction of income tax rates"
        ],
        "questionId": 394,
        "q": "<p>Inflation throughout the 1970s was driven in large part by</p>",
        "hasImage": false,
        "plain": "Inflation throughout the 1970s was driven in large part by",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "Gasoline and oil prices shot through the roof in the 1970s, affecting a wide range of industries that relied on the fuels to run. The result was widespread inflation throughout the decade.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test39.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Postwar Period and Cold War (1945–1980)</a> · Question ID 394."
      },
      {
        "subjectKey": "ush",
        "testNumber": 40,
        "testTitle": "AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)",
        "testUrl": "https://www.crackap.com/ap/us-history/test40.html",
        "number": 5,
        "choices": [
          "support anti-communist resistance movements, particularly in the Third World",
          "sponsor covert military operations to overthrow communist regimes in Eastern Europe",
          "ease tensions between the Soviet Union and the United States",
          "broker a peace agreement between the Palestinians and the Israelis"
        ],
        "questionId": 400,
        "q": "<p>In his 1985 State of the Union Address, Ronald Reagan articulated his foreign policy goals in what has come to be known as the Reagan Doctrine. Like Truman, Reagan pledged to</p>",
        "hasImage": false,
        "plain": "In his 1985 State of the Union Address, Ronald Reagan articulated his foreign policy goals in what has come to be known as the Reagan Doctrine. Like Truman, Reagan pledged to",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "There are several presidential doctrines you should know for this exam; for example, the Monroe Doctrine and the Truman Doctrine. In most cases these \"doctrines\" were delivered as speeches to Congress but became statements of U.S. foreign policy. Alarmed by the establishment of Soviet satellites in Eastern Europe and the potential Soviet threat to Greece and Turkey following World War II, Truman pledged his support to prevent the spread of communism in Europe (although he did not use those exact words). As a cold warrior, Ronald Reagan was committed to providing covert and overt assistance to anti-communist resistance movements, particularly in nations like Afghanistan and Nicaragua.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)</a> · Question ID 400."
      },
      {
        "subjectKey": "ush",
        "testNumber": 40,
        "testTitle": "AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)",
        "testUrl": "https://www.crackap.com/ap/us-history/test40.html",
        "number": 6,
        "choices": [
          "signed the welfare reform bill",
          "persuaded Anwar Sadat and Menachem Begin to sign the Camp David Accords",
          "sent troops to fight in the Persian Gulf War",
          "cut taxes and social services"
        ],
        "questionId": 401,
        "q": "<p>During the 1990s, President George H. W. Bush</p>",
        "hasImage": false,
        "plain": "During the 1990s, President George H. W. Bush",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "This is a factoid question. President George H. W. Bush led the brief Persian Gulf War in 1990. Choice (B) is Carter and (D) is Reagan. Choice (A) is President Clinton.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)</a> · Question ID 401."
      },
      {
        "subjectKey": "ush",
        "testNumber": 40,
        "testTitle": "AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)",
        "testUrl": "https://www.crackap.com/ap/us-history/test40.html",
        "number": 7,
        "choices": [
          "Military peacekeeping interventions in the Balkans and Somalia",
          "Welfare benefit reform to encourage young mothers to reenter the work force",
          "Free trade agreements such as NAFTA and GATT",
          "The effort to pass a universal health care legislation in the Congress"
        ],
        "questionId": 402,
        "q": "<p>Which of the following actions by the Clinton administration was most harmonious with Liberal Democrat values?</p>",
        "hasImage": false,
        "plain": "Which of the following actions by the Clinton administration was most harmonious with Liberal Democrat values?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "Liberal Democrats would have mixed feelings about war and free trade, so rule out (A). Welfare benefit reform was in fact designed to get young mothers off welfare, so this was not necessarily a boon to the Democrats. The most ambitious effort by the Clinton administration was to pass a universal health care bill, but this ultimately did not pass Congress.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)</a> · Question ID 402."
      }
    ],
    "frq": [
      {
        "title": "Official 2024 SAQ 1",
        "text": "<strong>Official 2024 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> SAQ 1 Set 1 (2024)<br>Answer SAQ 1 from the official set 1 packet and then grade each checklist item separately.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/ush/ap24-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-us-history-set-1.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/ush/ap24-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-us-history-set-1.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Directly answers the task with a historically defensible claim.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Uses accurate evidence from the prompt or historical knowledge.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Explains the evidence rather than only naming it.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Responds to every part of the SAQ prompt.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Uses specific period language and avoids major factual errors.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Before reading official commentary, verify that each mini-response actually explains why the evidence matters.",
        "scoringNotes": "SAQs reward precision. Short answers that only list facts without explanation should not earn the explanation point.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/ush/ap24-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-us-history-set-1.pdf</a> and <a href=\"assets/source-lock/official/ush/ap24-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-us-history-set-1.pdf</a>."
      },
      {
        "title": "Official 2024 DBQ",
        "text": "<strong>Official 2024 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> DBQ Set 1 (2024)<br>Complete the DBQ from the official set 1 packet. Use the condensed rubric to self-check before reading any official commentary.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/ush/ap24-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-us-history-set-1.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/ush/ap24-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-us-history-set-1.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Presents a defensible thesis that answers the prompt.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Provides meaningful contextualization.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Uses the documents as evidence for the argument.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Brings in outside historical evidence beyond the provided documents.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Explains sourcing, complexity, or nuance rather than summarizing documents mechanically.",
            "pts": 1
          }
        ],
        "sampleAnswer": "After drafting, compare your thesis, document use, and outside evidence against the scoring-guidelines PDF before assigning a score.",
        "scoringNotes": "A DBQ can sound polished and still lose points if the documents are only summarized instead of used to advance the argument.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/ush/ap24-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-us-history-set-1.pdf</a> and <a href=\"assets/source-lock/official/ush/ap24-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-us-history-set-1.pdf</a>."
      },
      {
        "title": "Official 2024 LEQ 2",
        "text": "<strong>Official 2024 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> LEQ 2 Set 1 (2024)<br>Write LEQ 2 from the official set 1 packet using the checklist rubric below.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/ush/ap24-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-us-history-set-1.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/ush/ap24-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-us-history-set-1.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "States a defensible thesis and line of reasoning.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Provides broader historical context for the claim.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Uses specific historical evidence relevant to the prompt.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Explains how the evidence supports the argument, not just where it happened.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Shows nuance, qualification, or complexity in the final argument.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Read the official scoring guidelines after self-scoring and compare whether your evidence is both specific and actually tied to your thesis.",
        "scoringNotes": "The easiest point to over-award is the reasoning point. Evidence must be connected to the line of argument to count.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/ush/ap24-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-frq-us-history-set-1.pdf</a> and <a href=\"assets/source-lock/official/ush/ap24-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap24-sg-us-history-set-1.pdf</a>."
      }
    ]
  },
  {
    "id": "ush_set3",
    "subjectKey": "ush",
    "examName": "AP United States History",
    "title": "Set 3",
    "cardLabel": "3",
    "badge": "SOURCE LOCK",
    "description": "24 CrackAP MCQ balanced across periods + SAQ, DBQ, and LEQ.",
    "mcTime": 40,
    "frqTime": 70,
    "liveFeedback": true,
    "liveRubric": true,
    "scoreProfile": {
      "mcWeight": 55,
      "frqTotal": 15,
      "frqWeight": 45,
      "compositeMax": 100,
      "thresholds": {
        "5": 82,
        "4": 68,
        "3": 54,
        "2": 40
      },
      "mcLabel": "55.00",
      "frqLabel": "45.00"
    },
    "mc": [
      {
        "subjectKey": "ush",
        "testNumber": 33,
        "testTitle": "AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)",
        "testUrl": "https://www.crackap.com/ap/us-history/test33.html",
        "number": 8,
        "choices": [
          "medical doctors",
          "scientists",
          "political leaders",
          "the clergy"
        ],
        "questionId": 338,
        "q": "<p>Colleges and universities during the colonial period were dedicated primarily to the training of</p>",
        "hasImage": false,
        "plain": "Colleges and universities during the colonial period were dedicated primarily to the training of",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "The purpose of America's first colleges was to train homegrown clergy so that the colonies would no longer have to import its clergy from England. The four oldest extant colonial universities—Harvard, William & Mary, Yale, and Princeton—were all originally affiliated with specific Protestant faiths.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test33.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)</a> · Question ID 338."
      },
      {
        "subjectKey": "ush",
        "testNumber": 33,
        "testTitle": "AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)",
        "testUrl": "https://www.crackap.com/ap/us-history/test33.html",
        "number": 9,
        "choices": [
          "The British cared little how the colonists lived so long as the colonies remained a productive economic asset.",
          "Britain feared that the colonists would rebel against any substantial government force that it established.",
          "Few members of the British elite were willing to travel to the colonies, even for the opportunity to govern.",
          "Britain gave the colonies a large measure of autonomy as a first step in transitioning the region to independence."
        ],
        "questionId": 339,
        "q": "<p>Which of the following is the best explanation for why the British did not establish a powerful central government in the American colonies?</p>",
        "hasImage": false,
        "plain": "Which of the following is the best explanation for why the British did not establish a powerful central government in the American colonies?",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "Provided the colonies continued to buy British goods and to supply the British with raw materials, England did not care how the colonies governed themselves. England did impose its will (through the vice-admiralty courts) when the colonies attempted to shirk their economic responsibilities but otherwise took a laissez-faire approach. As a result, the colonies developed a tradition of independence that contributed to their eventual rebellion against the Crown.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test33.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)</a> · Question ID 339."
      },
      {
        "subjectKey": "ush",
        "testNumber": 33,
        "testTitle": "AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)",
        "testUrl": "https://www.crackap.com/ap/us-history/test33.html",
        "number": 10,
        "choices": [
          "English colonists viewed Native Americans as a potential workforce and largely aimed to enslaved them in the regions they colonized.",
          "English colonists largely avoided contact or relations with Native Americans as much as possible in the regions they colonized.",
          "English colonists maintained friendly relations with Native Americans and sought alliances with them in the regions they colonized.",
          "English colonists considered Native Americans as valuable trading partners and depended on their skills and knowledge with the land to their mutual benefit in the regions they colonized."
        ],
        "questionId": 464,
        "q": "<p>Which of the following statements best defines the early interactions between English colonists and Native Americans in the New World?</p>",
        "hasImage": false,
        "plain": "Which of the following statements best defines the early interactions between English colonists and Native Americans in the New World?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "Unlike most other early European colonizing powers, English settlers aimed to avoid contact and relations with Native Americans. Choices (A), (C), and (D) describe the early interactions between Native Americans and the Spanish, French, and Dutch, respectively.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test33.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Early Contact with the New World (1491–1607) Colonization of North America (1607–1754)</a> · Question ID 464."
      },
      {
        "subjectKey": "ush",
        "testNumber": 34,
        "testTitle": "AP US History Practice Test: Conflict and American Independence (1754–1800)",
        "testUrl": "https://www.crackap.com/ap/us-history/test34.html",
        "number": 8,
        "choices": [
          "Alien and Sedition Acts",
          "legality of political parties",
          "Jay Treaty",
          "Whiskey Rebellion"
        ],
        "questionId": 347,
        "q": "<p>George Washington established the principle of executive privilege in a dispute with Congress over the</p>",
        "hasImage": false,
        "plain": "George Washington established the principle of executive privilege in a dispute with Congress over the",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "Washington's presidency was all about establishing precedents. He was extremely conscious of this fact and proceeded cautiously throughout his two terms, aware that future presidents would follow his example. Thus, he rarely used his presidential veto, hoping to encourage future executives to accommodate the legislature on most matters. He didn't want the Congress to have complete control over the executive branch, though; he believed in the system of checks and balances. Thus, when the House of Representatives demanded all of Washington's papers regarding negotiations for the unpopular Jay Treaty, Washington refused. He reasoned that the papers were none of the House's business because only the Senate—with whom Washington did share the papers—is required to ratify treaties. His action established the precedent of executive privilege, a nebulous executive right to protect sensitive information and executive privacy. The right is occasionally invoked by the executive and almost as frequently challenged by the legislature, with the two typically working out a solution of compromise before the matter can reach the courts.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test34.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Conflict and American Independence (1754–1800)</a> · Question ID 347."
      },
      {
        "subjectKey": "ush",
        "testNumber": 34,
        "testTitle": "AP US History Practice Test: Conflict and American Independence (1754–1800)",
        "testUrl": "https://www.crackap.com/ap/us-history/test34.html",
        "number": 9,
        "choices": [
          "the Boston Tea Party",
          "the formation of the Republic of Texas",
          "the Salem Witch Trials",
          "the end of the French and Indian War"
        ],
        "questionId": 348,
        "q": "<p>The Age of Salutary Neglect drew to a close with</p>",
        "hasImage": false,
        "plain": "The Age of Salutary Neglect drew to a close with",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "The French and Indian War gave the British unchecked control over North America and a huge war debt. Searching for ways to repay the debt, the British sought greater contributions from, and subsequently greater control over, its American colonies. The Age of Salutary Neglect, an era during which the British basically allowed the colonies to govern themselves, was over.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test34.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Conflict and American Independence (1754–1800)</a> · Question ID 348."
      },
      {
        "subjectKey": "ush",
        "testNumber": 34,
        "testTitle": "AP US History Practice Test: Conflict and American Independence (1754–1800)",
        "testUrl": "https://www.crackap.com/ap/us-history/test34.html",
        "number": 10,
        "choices": [
          "All matters not clearly reconciled by the Constitution, such as the establishment of a national bank, must be arbitrated by the federal judiciary.",
          "The establishment of the National Bank is necessary to strengthen the United States economy and therefore must be allowed even if it is technically unconstitutional.",
          "The decision on whether to establish a National Bank, like all important governmental decisions, should be left in the hands of a powerful executive branch.",
          "The Constitution forbids the establishment of the bank because creating a bank is not among Congress's enumerated powers."
        ],
        "questionId": 349,
        "q": "<p>Which of the following best summarizes the strict constructionist position on the establishment of the National Bank?</p>",
        "hasImage": false,
        "plain": "Which of the following best summarizes the strict constructionist position on the establishment of the National Bank?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "The strict constructionist interpretation of the Constitution is that Congress may use only those powers specifically enumerated in the Constitution. Other powers, regardless of how necessary they may be to national interests, are prohibited. The broad constructionist interpretation, in contrast, holds that Congress has numerous implied powers. For example, Congress has the power to print money, borrow money, and collect taxes; thus, the Constitution implies that Congress has the power to create a bank, the proper instrument for exercising these powers.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test34.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Conflict and American Independence (1754–1800)</a> · Question ID 349."
      },
      {
        "subjectKey": "ush",
        "testNumber": 35,
        "testTitle": "AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)",
        "testUrl": "https://www.crackap.com/ap/us-history/test35.html",
        "number": 8,
        "choices": [
          "were religious communities inspired by the Second Great Awakening",
          "demonstrated the attraction of communism to many Americans",
          "failed because they practiced political and social equality within their own communities",
          "were utopian communities designed to ameliorate the effects of a growing commercial society"
        ],
        "questionId": 357,
        "q": "<p>Brook Farm in Massachusetts, the Oneida Community in upstate New York, and New Harmony in Indiana were similar in that they</p>",
        "hasImage": false,
        "plain": "Brook Farm in Massachusetts, the Oneida Community in upstate New York, and New Harmony in Indiana were similar in that they",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "Brook Farm, the Oneida Community, and New Harmony were all utopian communities that arose during the antebellum period in response to what some people perceived to be the ill effects of a growing commercial society.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)</a> · Question ID 357."
      },
      {
        "subjectKey": "ush",
        "testNumber": 35,
        "testTitle": "AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)",
        "testUrl": "https://www.crackap.com/ap/us-history/test35.html",
        "number": 9,
        "choices": [
          "The United States had authority to intervene in the affairs of other nations in the Western hemisphere.",
          "The United States would not interfere in the affairs of European powers.",
          "European nations were not permitted to trade with nations of the Western hemisphere without U.S. consent.",
          "European nations should stay out of the affairs of the Western hemisphere."
        ],
        "questionId": 467,
        "q": "<p>Which of the following statements was NOT consistent with the foreign policy of the Monroe Doctrine?</p>",
        "hasImage": false,
        "plain": "Which of the following statements was NOT consistent with the foreign policy of the Monroe Doctrine?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "The Monroe Doctrine aimed to establish a policy of mutual noninterference with European governments. While largely unenforceable by the United States, it established that the United States would stay out of European affairs if Europe stayed out of affairs of the Western Hemisphere. While trade and diplomacy would still occur between Europe and the Americas, this foreign policy would aid in keeping the United States out of European conflicts during the 19th century.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)</a> · Question ID 467."
      },
      {
        "subjectKey": "ush",
        "testNumber": 35,
        "testTitle": "AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)",
        "testUrl": "https://www.crackap.com/ap/us-history/test35.html",
        "number": 10,
        "choices": [
          "the speed with which goods were brought to market",
          "the opening of western markets to eastern agricultural goods",
          "the rapid population increase in western New York state alongside the Erie Canal",
          "the major challenge it presented to railroads in the shipping industry"
        ],
        "questionId": 468,
        "q": "<p>The greatest economic consequence of the early nineteenth-century boom in canal-building was</p>",
        "hasImage": false,
        "plain": "The greatest economic consequence of the early nineteenth-century boom in canal-building was",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "Prior to the canal era, it was an expensive and slow process to bring goods from the western part of the United States to the cities of the East Coast. (Imagine riding a horse-drawn cart from Ohio to New York City!) With the construction of the canals, such as the Erie Canal, this process was made immeasurably easier by boat, resulting in a drastic reduction of both price and time to market. Choice (B) is a reversal; it resulted in the opening of eastern markets to western goods, so eliminate (B). While the population did expand rapidly alongside the Erie Canal, this wasn't an economic consequence, so eliminate (C). Finally, it was the railroads that presented a challenge to the canals, eventually ending their short-lived dominance over U.S. shipping. Eliminate (D).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test35.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Beginnings of Modern American Democracy (1800–1848)</a> · Question ID 468."
      },
      {
        "subjectKey": "ush",
        "testNumber": 36,
        "testTitle": "AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)",
        "testUrl": "https://www.crackap.com/ap/us-history/test36.html",
        "number": 8,
        "choices": [
          "The freedom of settlers within the territories to determine the slave status of their new state",
          "Passage of the Homestead Act to give free land to all Western settlers",
          "The exclusion of slavery from any of the new territories",
          "The policy of giving newly-freed slaves \"40 acres and a mule\" following the Civil War"
        ],
        "questionId": 365,
        "q": "<p>The Free-Soil party advocated which of the following?</p>",
        "hasImage": false,
        "plain": "The Free-Soil party advocated which of the following?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "The Free-Soil Party was created in the mid-1840s and was more like a faction or interest group than a political party. However, unlike a faction, it developed a political platform and nominated a candidate (Martin Van Buren) for the presidential election of 1844. The Free-Soil party attracted anti-slavery \"Conscience\" Whigs, former members of the Liberty party, and pro-Wilmot Proviso Democrats. The Wilmot Proviso was rejected by Congress but suggested that there be no slavery in any territory acquired from Mexico. Free-Soilers were opposed to the extension of slavery into the new territories. Remember: The Constitution protected slavery where it already existed, but many people believed Congress could prevent the further spread of slavery as the United States acquired new land. Although the Free-Soil party did not exist for long, its major principles were adopted by the new Republican party, which was formed in 1854 and was opposed to the extension of slavery into the new territories.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test36.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)</a> · Question ID 365."
      },
      {
        "subjectKey": "ush",
        "testNumber": 36,
        "testTitle": "AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)",
        "testUrl": "https://www.crackap.com/ap/us-history/test36.html",
        "number": 9,
        "choices": [
          "whenever a new area was settled, all United States citizens were required to vote on the slave status of that area",
          "slavery would not be permitted in any area after 1848",
          "the president, after meeting with public interest groups, was to decide on whether slaves would be allowed in a given territory",
          "settlers in the Western territories, not Congress, would decide whether to allow slavery in their territories"
        ],
        "questionId": 366,
        "q": "<p>The principle of popular sovereignty stated that</p>",
        "hasImage": false,
        "plain": "The principle of popular sovereignty stated that",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "In the election of 1848, the Democrats realized that their party was crumbling because its members could not agree on whether to allow slavery in the Western territories. They sought a policy to appease both abolitionists and slaveholders; the result of that search was the concept of popular sovereignty. By allowing the settlers to decide the slave status of an area, popular sovereignty took some pressure off Congress, which was growing increasingly divided over the issue. It also took pressure off the political parties, which were coming apart due to the irreconcilable regional differences of their members. Henry Clay invoked the notion of popular sovereignty in the Compromise of 1850, but the compromise contained a purposefully ambiguous interpretation of what popular sovereignty meant. While the ambiguous wording was necessary to make the Compromise of 1850 possible, it also made future disagreements over the issue inevitable.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test36.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)</a> · Question ID 366."
      },
      {
        "subjectKey": "ush",
        "testNumber": 36,
        "testTitle": "AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)",
        "testUrl": "https://www.crackap.com/ap/us-history/test36.html",
        "number": 10,
        "choices": [
          "Blacks had to be allowed to participate in state conventions and state elections.",
          "The state had to ratify the Fourteenth Amendment to the Constitution.",
          "The state had to pay reparations and provide land grants to all former slaves.",
          "The state had to rewrite its constitution and ratify it."
        ],
        "questionId": 367,
        "q": "<p>Which of the following is NOT a requirement set by the Reconstruction Act of 1867 for Southern states' readmission to the Union?</p>",
        "hasImage": false,
        "plain": "Which of the following is NOT a requirement set by the Reconstruction Act of 1867 for Southern states' readmission to the Union?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "The Reconstruction Act of 1867, Congress's plan for the rehabilitation of the South, was much harsher than President Johnson's plan. Johnson, like Lincoln (who began planning the method for readmitting Southern states before his assassination), wanted a reconciliatory plan that punished only the most prominent leaders of the secession. Radical Republicans in Congress wanted something much tougher, and Johnson's plan was so lenient (in the first postwar Congress, Johnson's plan would have allowed the former president of the Confederacy to take a seat in Senate) that it drove many moderates into the radicals' camp. The result was the Reconstruction Act, a punitive measure that imposed a number of strict requirements on Southern states as preconditions for their readmission to the Union. Choices (A), (B), and (D) list all of those preconditions; the fact that Congress did not impose any requirements such as the one described in (C) pretty much doomed postwar Southern blacks to poverty.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test36.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Toward the Civil War and Reconstruction (1844–1877)</a> · Question ID 367."
      },
      {
        "subjectKey": "ush",
        "testNumber": 37,
        "testTitle": "AP US History Practice Test: The Industrial Revolution (1865–1898)",
        "testUrl": "https://www.crackap.com/ap/us-history/test37.html",
        "number": 8,
        "choices": [
          "the belief that the world would soon come to an end",
          "rejection of alcohol and other trappings of white society",
          "unity among Native Americans of different tribes",
          "nonviolence"
        ],
        "questionId": 375,
        "q": "<p>The \"Ghost Dance\" movement among Western Native Americans stressed all of the following EXCEPT</p>",
        "hasImage": false,
        "plain": "The \"Ghost Dance\" movement among Western Native Americans stressed all of the following EXCEPT",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "The Ghost Dancers arose in the late 1800s when the sad fate awaiting the great Native American tribes of the era was becoming all too apparent. Wovoka, a Paiute Indian, started the Ghost Dance movement, which resembled a religious revival. It centered on a dance ritual that enabled participants to envision a brighter future, one in which whites no longer dominated North America. Wovoka preached unity among Native Americans and the rejection of white culture and its trappings, especially alcohol. He also preached the imminent end of the world, at which point the Indian dead would rise to reclaim the land that was rightfully theirs. Sioux Ghost Dancers believed in the power of \"ghost shirts,\" garments blessed by medicine men that were capable of stopping bullets. This belief led to a rise in Sioux militancy and ultimately contributed to their massacre at Wounded Knee in 1890.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test37.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Industrial Revolution (1865–1898)</a> · Question ID 375."
      },
      {
        "subjectKey": "ush",
        "testNumber": 37,
        "testTitle": "AP US History Practice Test: The Industrial Revolution (1865–1898)",
        "testUrl": "https://www.crackap.com/ap/us-history/test37.html",
        "number": 9,
        "choices": [
          "they operated primarily in rural areas, where the government could not monitor their activities",
          "they focused on accomplishing only a narrow set of human rights objectives",
          "they championed the suffragettes and received their support in return",
          "machine politicians provided needed jobs and services to naturalized citizens in return for their votes"
        ],
        "questionId": 376,
        "q": "<p>In the late nineteenth century, political machines such as Tammany Hall were successful primarily because</p>",
        "hasImage": false,
        "plain": "In the late nineteenth century, political machines such as Tammany Hall were successful primarily because",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "Waves of European immigration throughout the nineteenth century swelled cities' populations. Governments of the time were nowhere near as activist as they are today, and only a very few provided even minimal services to immigrants as they accommodated themselves to their new homeland; ethnic communities and churches were expected to provide such services. A number of enterprising, unscrupulous men recognized in these immigrants the opportunity for great political power. Such men, known as political bosses, helped immigrants find homes and jobs and acquire citizenship and voting rights. In essence, these bosses created entire communities, then provided them with all sorts of services: food and loans for the poor, parks and protection for the community. In return, the communities were expected to provide loyal political support, which they did, originally out of loyalty, and later, as the machines became extremely powerful, out of both loyalty and fear. The bosses could then hand an election to a politician of their choice, in return for favors. Political machines filled a need, albeit in an expensive and unethical way. They fell from power when governments started to provide many of the services machines had provided.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test37.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Industrial Revolution (1865–1898)</a> · Question ID 376."
      },
      {
        "subjectKey": "ush",
        "testNumber": 37,
        "testTitle": "AP US History Practice Test: The Industrial Revolution (1865–1898)",
        "testUrl": "https://www.crackap.com/ap/us-history/test37.html",
        "number": 10,
        "choices": [
          "Railroad companies would be persuaded to stop unfair pricing through a number of government incentives.",
          "Recently arrived European immigrants would be enticed into settling in the less populated West.",
          "Legislators would be less likely to accept bribes because of the severity of the penalty.",
          "Native Americans would be coaxed off reservations by land grants and would thus assimilate into Western culture."
        ],
        "questionId": 377,
        "q": "<p>Which of the following was the intended result of the Dawes Severalty Act of 1887?</p>",
        "hasImage": false,
        "plain": "Which of the following was the intended result of the Dawes Severalty Act of 1887?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "In the 1860s the government initiated its reservation policy by which Native Americans were granted (usually less desirable) portions of the lands they inhabited. The policy failed on many fronts, and by the 1880s the government was searching for a different tack. Congress struck on the Dawes Severalty Act, which offered individual Native Americans 160-acre plots in return for leaving their reservations; through this program Congress hoped to hasten the assimilation of Native Americans, whose cultures most congressmen held in contempt. The results were not good: Most American Indians preferred to remain among their tribes and did not accept the offer. Those who did accept usually ended up selling their land to whites, who often placed considerable pressure on them to do so.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test37.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Industrial Revolution (1865–1898)</a> · Question ID 377."
      },
      {
        "subjectKey": "ush",
        "testNumber": 38,
        "testTitle": "AP US History Practice Test: The Early Twentieth Century (1890–1945)",
        "testUrl": "https://www.crackap.com/ap/us-history/test38.html",
        "number": 8,
        "choices": [
          "Providing England with munitions to defend itself against Germany",
          "Creating the Tennessee Valley Authority to provide power in the poor rural South",
          "Banning trade of war-related materials with Japan and freezing Japanese assets in the United States",
          "Recalling U.S. troops from Nicaragua and Haiti"
        ],
        "questionId": 385,
        "q": "<p>Franklin Roosevelt invoked the Good Neighbor Policy in taking which of the following actions?</p>",
        "hasImage": false,
        "plain": "Franklin Roosevelt invoked the Good Neighbor Policy in taking which of the following actions?",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "Roosevelt coined the phrase \"Good Neighbor Policy\" to reflect a shift in American attitudes toward Latin America. In the past, American intervention in the region had incited great resentment of the United States. Roosevelt announced a new U.S. commitment to autonomy throughout the hemisphere and showed his intentions by withdrawing U.S. troops from Nicaragua and Haiti. He later resisted sending troops to Cuba to quell a revolution.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test38.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Early Twentieth Century (1890–1945)</a> · Question ID 385."
      },
      {
        "subjectKey": "ush",
        "testNumber": 38,
        "testTitle": "AP US History Practice Test: The Early Twentieth Century (1890–1945)",
        "testUrl": "https://www.crackap.com/ap/us-history/test38.html",
        "number": 9,
        "choices": [
          "revealing unethical profiteering by American munitions companies during World War I",
          "concluding that Germany had no interest in engaging the United States in war",
          "listing the domestic programs that would have to be forfeited if the United States were to increase its overseas commitments",
          "detailing deficiencies in all branches of the U.S. military"
        ],
        "questionId": 386,
        "q": "<p>The Nye Commission report of 1936 reinforced American isolationism by</p>",
        "hasImage": false,
        "plain": "The Nye Commission report of 1936 reinforced American isolationism by",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "Americans were already predisposed to isolationism by nature before they heard the results of the Nye Commission's investigations. They had been promised that World War I was \"the war to end all wars.\" Less than 20 years later, Europe was apparently on the verge of another big confrontation. The sentiment in the United States was, \"Let them sort this out themselves.\" Those feelings were strengthened when the Nye Commission revealed that many American munitions companies had violated an arms embargo in order to arm the nation's enemies. It further revealed that U.S. banks had lobbied for entry into the war in order to protect more than $2 billion in loans to Britain and its allies. The report left Americans more cynical about the motives of its leaders and less susceptible to calls for intervention overseas.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test38.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Early Twentieth Century (1890–1945)</a> · Question ID 386."
      },
      {
        "subjectKey": "ush",
        "testNumber": 38,
        "testTitle": "AP US History Practice Test: The Early Twentieth Century (1890–1945)",
        "testUrl": "https://www.crackap.com/ap/us-history/test38.html",
        "number": 10,
        "choices": [
          "the wartime relocation of West Coast Japanese Americans was not unconstitutional",
          "the Japanese government had no legitimate claim to reparations for the bombings of Hiroshima and Nagasaki",
          "the U.S. government had violated the Constitution by entering the Korean War",
          "immigration quotas based on race were unconstitutional"
        ],
        "questionId": 387,
        "q": "<p>In its Korematsu v. United States decision, the Supreme Court ruled that</p>",
        "hasImage": false,
        "plain": "In its Korematsu v. United States decision, the Supreme Court ruled that",
        "choiceCount": 4,
        "answer": 0,
        "explanation": "Fred Korematsu was among the more than 110,000 Japanese Americans ordered to relocate from the West Coast to internment camps during World War II. Korematsu refused, was arrested, and took his case all the way to the Supreme Court. The Court ruled that the government had not exceeded its power, noting that extraordinary times sometimes call for extraordinary measures; three of the nine justices dissented. History has not judged Roosevelt's internment policy kindly. In 1998 Fred Korematsu was awarded the Presidential Medal of Honor.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test38.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Early Twentieth Century (1890–1945)</a> · Question ID 387."
      },
      {
        "subjectKey": "ush",
        "testNumber": 39,
        "testTitle": "AP US History Practice Test: The Postwar Period and Cold War (1945–1980)",
        "testUrl": "https://www.crackap.com/ap/us-history/test39.html",
        "number": 8,
        "choices": [
          "burglary of Daniel Ellsberg's psychiatrist's office",
          "political sabotage of Nixon's opponent, George McGovern",
          "illegal use of the CIA to hush up the FBI's investigation of the events surrounding the publication of the Pentagon Papers",
          "break-in and attempted bugging of the Democratic party's national headquarters"
        ],
        "questionId": 395,
        "q": "<p>The incident that began a chain of events that became one of the most infamous presidential scandals in American history and eventually led to the resignation of Richard Nixon was the</p>",
        "hasImage": false,
        "plain": "The incident that began a chain of events that became one of the most infamous presidential scandals in American history and eventually led to the resignation of Richard Nixon was the",
        "choiceCount": 4,
        "answer": 3,
        "explanation": "This is the event that started it all—the break-in to the Watergate complex in Washington, D.C., where the Democratic party had its national headquarters. All of the other choices became part of the cover-up and are known collectively as \"Watergate,\" which ultimately forced the resignation of Richard Nixon, the only President to resign in American history. Nixon resigned before he was impeached and was subsequently pardoned by Gerald Ford.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test39.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Postwar Period and Cold War (1945–1980)</a> · Question ID 395."
      },
      {
        "subjectKey": "ush",
        "testNumber": 39,
        "testTitle": "AP US History Practice Test: The Postwar Period and Cold War (1945–1980)",
        "testUrl": "https://www.crackap.com/ap/us-history/test39.html",
        "number": 9,
        "choices": [
          "the Interstate Highway Act",
          "the Peace Corps",
          "the Berlin Wall",
          "the Central Intelligence Agency"
        ],
        "questionId": 473,
        "q": "<p>The Cold War policy of containment and concern with national defense played a background role in the development of all of the following programs or projects EXCEPT</p>",
        "hasImage": false,
        "plain": "The Cold War policy of containment and concern with national defense played a background role in the development of all of the following programs or projects EXCEPT",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "The influence of the policy of containment could be seen across many U.S policies and programs, though in some not-so-obvious ways. For example, the Interstate Highway Act was intended to build a national highway system both for civilian use and to facilitate national defense, if needed; eliminate (A). The Peace Corps was created to send exemplary young Americans around the world to not only persuade young people in other countries that war wasn't necessary—but also that the American system of capitalism created happier, healthier, more helpful citizens than communism did. This was a \"soft\" form of containment; eliminate (B). Likewise, while the government had established other intelligence organizations previously, the Central Intelligence Agency was founded in 1947 to not only centralize all intelligence but also to aim more specifically at gathering information about the Soviet Union. Eliminate (D). The Berlin Wall was certainly a literal type of containment, but it was built by the Soviet Union across the city of Berlin, Germany, and its construction was unrelated to the U.S. government. Choice (C) is correct.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test39.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Postwar Period and Cold War (1945–1980)</a> · Question ID 473."
      },
      {
        "subjectKey": "ush",
        "testNumber": 39,
        "testTitle": "AP US History Practice Test: The Postwar Period and Cold War (1945–1980)",
        "testUrl": "https://www.crackap.com/ap/us-history/test39.html",
        "number": 10,
        "choices": [
          "The U.S. won a victory in the armed conflict and secured a democratic ally in the region.",
          "The U.S. withdrew and the nation became a single nation united under communist rule.",
          "The Vietnam War ended in a stalemate resulting in geographic division of the nation of Vietnam into democratic and communist nations.",
          "The Vietnam War has never ceased and armed conflicts between democratic and communist factions within the nation continue today."
        ],
        "questionId": 474,
        "q": "<p>What was the final result of the Vietnam War?</p>",
        "hasImage": false,
        "plain": "What was the final result of the Vietnam War?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "Under increasing social and political pressure, the United States withdrew from Vietnam and ultimately the communist-backed forces of North Vietnamese secured victory and united the nation as a communist state in 1975.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test39.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: The Postwar Period and Cold War (1945–1980)</a> · Question ID 474."
      },
      {
        "subjectKey": "ush",
        "testNumber": 40,
        "testTitle": "AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)",
        "testUrl": "https://www.crackap.com/ap/us-history/test40.html",
        "number": 8,
        "choices": [
          "Jimmy Carter",
          "Ronald Reagan",
          "George H. W. Bush",
          "Bill Clinton"
        ],
        "questionId": 403,
        "q": "<p>Which one of these presidents was best known for the campaign promise \"Read my lips: No new taxes!\"?</p>",
        "hasImage": false,
        "plain": "Which one of these presidents was best known for the campaign promise \"Read my lips: No new taxes!\"?",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "Another factoid question. This was President George H. W. Bush's campaign promise (though the promise was not kept).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)</a> · Question ID 403."
      },
      {
        "subjectKey": "ush",
        "testNumber": 40,
        "testTitle": "AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)",
        "testUrl": "https://www.crackap.com/ap/us-history/test40.html",
        "number": 9,
        "choices": [
          "the increasing racial and ethnic diversity of the United States",
          "a series of laws mandating bilingual education",
          "laws restricting the employment of illegal immigrants",
          "increased spending on social services and more ethnic media content"
        ],
        "questionId": 476,
        "q": "<p>In the 1990s, the conservative distaste for the changing demographics of the United States fueled</p>",
        "hasImage": false,
        "plain": "In the 1990s, the conservative distaste for the changing demographics of the United States fueled",
        "choiceCount": 4,
        "answer": 2,
        "explanation": "After 40 years of restricted immigration, in the 1960s the federal government threw open the gates to immigrants from around the world. As a result, the United States was flooded with legal immigrants from almost every conceivable nation, which caused cultural conservatives to feel that their country was losing its identity. While conservatives couldn't restrict legal immigration, they were able to respond by restricting illegal immigration—a much more popular cause, politically. Choice (A) is a cause, not an effect, so eliminate it. Choice (B) is a reversal; bilingual education was abolished in some states, so eliminate that too. Choice (D) confuses causes; if there was more social spending or ethnic media, it certainly wasn't because of conservative distaste for immigrants. Eliminate (D).",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)</a> · Question ID 476."
      },
      {
        "subjectKey": "ush",
        "testNumber": 40,
        "testTitle": "AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)",
        "testUrl": "https://www.crackap.com/ap/us-history/test40.html",
        "number": 10,
        "choices": [
          "A shift in the majority of the American public toward embracing a new conservatism",
          "Deep ideological division and partisan politics between Democrats and Republicans",
          "An increased influence of religion on the policy decisions of the presidential administrations",
          "A decline in public involvement and engagement with Washington politics"
        ],
        "questionId": 477,
        "q": "<p>The 21st century has thus far seen a dramatic shift in politics characterized by which of the following?</p>",
        "hasImage": false,
        "plain": "The 21st century has thus far seen a dramatic shift in politics characterized by which of the following?",
        "choiceCount": 4,
        "answer": 1,
        "explanation": "The past four elections (2008, 2012, 2016, and 2020) have seen a dramatic shift in political division and partisan politics within the American public. While the new populism associated with Donald Trump and the Republican party has certainly shaped modern politics, Trump failed to secure a majority of American votes in both 2016 and 2020, making (A) an incorrect answer. Health care, rather than religion, (C), has been a much larger factor on policy decisions thus far in the 21st century and the high voter turnout in the 2020 election suggests a potential shift toward more engagement, (D), of the American public in politics.",
        "source": "CrackAP source: <a href=\"https://www.crackap.com/ap/us-history/test40.html\" target=\"_blank\" rel=\"noreferrer\">AP US History Practice Test: Entering Into the Twenty-First Century (1980–Present)</a> · Question ID 477."
      }
    ],
    "frq": [
      {
        "title": "Official 2023 SAQ 1",
        "text": "<strong>Official 2023 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> SAQ 1 Set 1 (2023)<br>Answer SAQ 1 from the official set 1 packet and then grade each checklist item separately.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/ush/ap23-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-us-history-set-1.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/ush/ap23-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-us-history-set-1.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Directly answers the task with a historically defensible claim.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Uses accurate evidence from the prompt or historical knowledge.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Explains the evidence rather than only naming it.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Responds to every part of the SAQ prompt.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Uses specific period language and avoids major factual errors.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Before reading official commentary, verify that each mini-response actually explains why the evidence matters.",
        "scoringNotes": "SAQs reward precision. Short answers that only list facts without explanation should not earn the explanation point.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/ush/ap23-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-us-history-set-1.pdf</a> and <a href=\"assets/source-lock/official/ush/ap23-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-us-history-set-1.pdf</a>."
      },
      {
        "title": "Official 2023 DBQ",
        "text": "<strong>Official 2023 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> DBQ Set 1 (2023)<br>Complete the DBQ from the official set 1 packet. Use the condensed rubric to self-check before reading any official commentary.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/ush/ap23-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-us-history-set-1.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/ush/ap23-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-us-history-set-1.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "Presents a defensible thesis that answers the prompt.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Provides meaningful contextualization.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Uses the documents as evidence for the argument.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Brings in outside historical evidence beyond the provided documents.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Explains sourcing, complexity, or nuance rather than summarizing documents mechanically.",
            "pts": 1
          }
        ],
        "sampleAnswer": "After drafting, compare your thesis, document use, and outside evidence against the scoring-guidelines PDF before assigning a score.",
        "scoringNotes": "A DBQ can sound polished and still lose points if the documents are only summarized instead of used to advance the argument.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/ush/ap23-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-us-history-set-1.pdf</a> and <a href=\"assets/source-lock/official/ush/ap23-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-us-history-set-1.pdf</a>."
      },
      {
        "title": "Official 2023 LEQ 2",
        "text": "<strong>Official 2023 source packet.</strong><p><em>Open the mirrored College Board prompt packet and answer the specific task below. The original prompt stays in its original PDF instead of being retyped.</em></p><p><strong>Task:</strong> LEQ 2 Set 1 (2023)<br>Write LEQ 2 from the official set 1 packet using the checklist rubric below.</p><p><strong>Prompt PDF:</strong> <a href=\"assets/source-lock/official/ush/ap23-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-us-history-set-1.pdf</a></p><p><strong>Scoring Guidelines:</strong> <a href=\"assets/source-lock/official/ush/ap23-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-us-history-set-1.pdf</a></p>",
        "maxPoints": 5,
        "rubric": [
          {
            "part": "(1)",
            "desc": "States a defensible thesis and line of reasoning.",
            "pts": 1
          },
          {
            "part": "(2)",
            "desc": "Provides broader historical context for the claim.",
            "pts": 1
          },
          {
            "part": "(3)",
            "desc": "Uses specific historical evidence relevant to the prompt.",
            "pts": 1
          },
          {
            "part": "(4)",
            "desc": "Explains how the evidence supports the argument, not just where it happened.",
            "pts": 1
          },
          {
            "part": "(5)",
            "desc": "Shows nuance, qualification, or complexity in the final argument.",
            "pts": 1
          }
        ],
        "sampleAnswer": "Read the official scoring guidelines after self-scoring and compare whether your evidence is both specific and actually tied to your thesis.",
        "scoringNotes": "The easiest point to over-award is the reasoning point. Evidence must be connected to the line of argument to count.",
        "source": "Original College Board PDFs mirrored locally: <a href=\"assets/source-lock/official/ush/ap23-frq-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-frq-us-history-set-1.pdf</a> and <a href=\"assets/source-lock/official/ush/ap23-sg-us-history-set-1.pdf\" target=\"_blank\" rel=\"noreferrer\">ap23-sg-us-history-set-1.pdf</a>."
      }
    ]
  }
];

  root.AP_CUSTOM_SUBJECTS = AP_CUSTOM_SUBJECTS;
  root.AP_CUSTOM_DYNAMIC_SETS = AP_CUSTOM_DYNAMIC_SETS;
})(typeof window !== 'undefined' ? window : globalThis);
