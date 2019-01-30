const quizQuestions = [
{
      question: "Isotope unterscheiden sich durch die Anzahl von...",
      answers: [
        "Elektronen", 
        "Sauerstoff Atomen", 
        "Protonen", 
        "Neutronen",
        "Kernladungen"
      ],
      correctAnswers: [3]
  },
  {
    question: "Welche Formeln haben Aluminiumsulfat, Magnesiumnitrat und Perchlorsäure?",
    answers: [
      "Al(SO₂)₃, MgNO₂, HClO₄", 
      "AlSO₄, MgCN, HClO₄", 
      "Al₂(SO₃)₃, MgOCN, HClO₃", 
      "Al₂(SO₄)₃, Mg(NO₃)₂, HClO₄", 
      "AlS₄, MgCN, HClO₄"
    ],
    correctAnswers: [3]
  },
  {
    question: "Wie ist das Massenwirkungsgesetz für Ni (s) + 4CO (g)  Ni (CO)₄ (g) ?",
    answers: [
      "[CO]⁴ / [Ni(CO)₂]",
      "[Ni (CO)₄] / [CO]⁴",
      "[Ni] [CO] / [Ni(CO)₄]",
      "[CO] / [Ni(CO)₄]",
      "[Ni] [CO]⁴ / [Ni (CO)₄]"
    ],
    correctAnswers: [1]
  },
  {
    question: "Wie lautet die Definition von pH?",
    answers: [
      "–ln [OH-]",
      "10- ^([H₃O+])",
      "10- ^([OH-])",
      "–ln [H₃O+]",
      "-log [H₃O+]"
    ],
    correctAnswers: [4]
  },
  {
    question: "Welche Formel haben Natriumhydrogensulfat, Magnesiumchromat und Essigsäure?",
    answers: [
      "NaHSO₄, MgCrO₄, HClO",
      "Na₂HSO₄, Mg₂CrO₄, CH₃COOH",
      "NaHSO₄, Mg₂CrO₄, CH₃COOH",
      "NaHSO₄, MgCrO₄, CH₃COOH",
      "Na₂HSO₄, MgCrO₄, HClO"
    ],
    correctAnswers: [3]
  },
  {
    question: "Bestimmte die Lewis Formel für XeF₂ und BF₃. Was sind molekulare Geometrien?",
    answers: [
      "XeF₂ – Oktaedrisch, BF₃ Tetraedrisch",
      "XeF₂ – linear, BF₃ Tetraedrisch",
      "XeF₂ – linear, BF₃ Trigonal Planar",
      "XeF₂ – Oktaedrisch, BF₃ Trigonal pyramidal",
      "XeF₂ – Gewinkelt, BF₃ Trigonal Planar"
    ],
    correctAnswers: [2]
  },
  {
    question: "Welche der folgenden Substanzen ist nicht polar?",
    answers: [
      "NH₃",
      "SF₄",
      "H₂O",
      "CHCl₃",
      "SF₆"
    ],
    correctAnswers: [4]
  },
  {
    question: "Was ist keine starke Säure?",
    answers: [
      "HClO₄",
      "H₃PO₄",
      "HNO₃",
      "HCl",
      "H₂SO₄"
    ],
    correctAnswers: [1]
  },
  {
    question: "Ordne nach zunehmender Ionisierungsenergie Li, Na, F, Cl",
    answers: [
      "Li < Na < Cl < F",
      "Cl < F < Na < Li",
      "Cl < F < Li < Na",
      "Na < Li < F < Cl",
      "Na < Li < Cl < F"
    ],
    correctAnswers: [4]
  },
  {
    question: "Welche Art der elektromagnetischen Strahlung hat die höchste Energie?",
    answers: [
      "UV - Licht",
      "blaues Licht",
      "Röntgenstrahlen",
      "Radiowellen",
      "Mikrowellen"
    ],
    correctAnswers: [2]
  },
  {
    question: "Berechne 6,022 * 10^23 * 1,55 g / 18,02 g/ mol und wähle das Ergebnis mit der richtigen Menge an signifikanten Stellen aus",
    answers: [
      "5,1799 * 10^22",
      "5,18 * 10^22",
      "5,17985 * 10^22",
      "5,180 * 10^22",
      "5,2 * 10^22"
    ],
    correctAnswers: [1]
  },
  {
    question: "Welches Element hat die folgende Elektronenkonfiguration [Kr] 5s²4d¹⁰5p¹?",
    answers: [
      "Te",
      "Sn",
      "Sb",
      "In",
      "Nb"
    ],
    correctAnswers: [3]
  },
  {
    question: "Was ist der Van’t Hoff Faktor bei einer Gefrierpunkts-Erniedrigungsberechnung?",
    answers: [
      "1",
      "4",
      "2",
      "3",
      "0"
    ],
    correctAnswers: [3]
  },
  {
    question: "Welches Element hat 30 Neutronen und 26 Protonen",
    answers: [
      "Al",
      "Zn",
      "Fe",
      "P",
      "Ba"
    ],
    correctAnswers: [2]
  },
  {
    question: "Welchen Gefrierpunkt hat eine Lösung die 139,0 g Rohrzucker (342,3 g/mol) gelöst in 500 g Wasser ist. (Egp = -1,86 °C/m)",
    answers: [
      "-0,755 °C",
      "-1,51 °C",
      "-1,86 °C",
      "-0,378 °C",
      "-3,02 °C"
    ],
    correctAnswers: [1]
  },
  {
    question: "Welches Element hat eine Elektronenaffinität von Null?",
    answers: [
      "Be",
      "O",
      "F",
      "Cl",
      "C"
    ],
    correctAnswers: [0]
  },
  {
    question: "Ordne nach zunehmenden Siedepunkt H₂, HCl, N₂, Cl₂",
    answers: [
      "H₂ < N₂ < Cl₂ < HCl",
      "H₂ < HCl < N₂ < Cl₂",
      "N₂ < Cl₂ < H₂ < HCl",
      "Cl₂ < N₂ < H₂ < HCl",
      "HCl < H₂ < N₂ < Cl₂"
    ],
    correctAnswers: [0]
  },
  {
    question: "Bei einer Reaktion von 0,200 mol Al und 0,150 mol Cl₂ bleibt wie viel Mol Aluminium übrig?",
    answers: [
      "0,0500 mol",
      "0,100 mol",
      "0,00 mol",
      "0,00 mol",
      "0,00500 mol",
      "0,150 mol"
    ],
    correctAnswers: [1]
  },
  {
    question: "Wie viele signifikanten Stellen sind bei 1,01000 angegeben?",
    answers: [
      "4",
      "2",
      "5",
      "6",
      "3"
    ],
    correctAnswers: [3]
  },
  {
    question: "Wie lautet die Henderson-Hasselbalch Puffergleichung?",
    answers: [
      "pH = pKs – log ([Salz]/[Säure])",
      "pH = pKs – log ([Säure]/[Salz])",
      "pH = Ks – log ([Salz]/[Säure])",
      "pH = pKs – log ([Base]/[Salz])"
    ],
    correctAnswers: [1]
  },
  {
    question: "Welche intermolekulare Kraft herrscht zwischen Sauerstoffgas Molekülen?",
    answers: [
      "Dipol – Dipol",
      "Ion - Dipol",
      "Dipol - Induzierter Dipol",
      "Induzierter Dipol - Induzierter Dipol",
      "Ion - Ion"
    ],
    correctAnswers: [3]
  },
  {
    question: "Wie groß ist Kh",
    answers: [
      "10^(-14)",
      "14",
      "10^7",
      "7",
      "10^(-7)"
    ],
    correctAnswers: [0]
  },
  {
    question: "Welche Substanz ist nach der Bronsted- Lowry Definition eine Base? HCl + NH₃  NH₄+ + Cl-",
    answers: [
      "NH₄+",
      "Cl-",
      "HCl",
      "NH₃",
    ],
    correctAnswers: [3]
  },
  {
    question: "Wie viel ist 0,0045 M in mol/ millimeter",
    answers: [
      "4,5 * 10^(-9)",
      "4,5",
      "4,5 * 10^(-6)",
      "4500",
      "4,5 * 10^(-3)"
    ],
    correctAnswers: [2]
  },
  {
    question: "Welches Element ist im Normalzustand kein zweiatomiges Molekül?",
    answers: [
      "Sauerstoff",
      "Kohlenstoff",
      "Chlor",
      "Wasserstoff",
      "Stickstoff"
    ],
    correctAnswers: [1]
  }, 
  {
    question: "Welche Bindung ist am stärksten ionisch?",
    answers: [
      "K - F",
      "Li - I",
      "H - O",
      "K - Cl",
      "Na - Cl",
    ],
    correctAnswers: [0]
  }, 
  {
    question: "Durch welchen Prozess reagiert O₄- zu Mn²+?",
    answers: [
      "5 Elektronen Reduktion",
      "3 Elektronen Reduktion",
      "7 Elektronen Oxidation", 
      "5 Elektronen Oxidation", 
      "3 Elektronen Oxidation"
    ],
    correctAnswers: [0]
  }, 
  {
    question: "Wie ist die Oxidationszahl von Schwefel in dem Sulfat-Ion?",
    answers: [
      "0",
      "4+",
      "2-",
      "6+",
      "2+",
    ],
    correctAnswers: [3]
  }, 
  {
    question: "Welchen Bindungswinkel gibt es in SO₂?",
    answers: [
      "120°",
      "90°",
      "104,5°",
      "120,9°"
    ],
    correctAnswers: [0]
  }, 
  {
    question: "Welche ist die konjugierte Base von CH₃COOH?",
    answers: [
      "CH₃COOH₂+",
      "CH₃COOHOH-",
      "CH₃COO-",
      "CH₃COOH+",
      "CH₃COOH-"
    ],
    correctAnswers: [2]
  }, 
  {
    question: "Ordne nach zunehmender Atomgröße Na, K, Mg, Ca",
    answers: [
      "Na > Ca > Mg > K",
      "Ca > Na > K > Mg",
      "Mg > Na > Ca > K",
      "Mg > Na > K > Ca"
    ],
    correctAnswers: [2]
  }, 
  {
    question: "Welche der folgenden Bindungen ist am stärksten polar?",
    answers: [
      "O – H",
      "F - H",
      "I - H",
      "N - H"
    ],
    correctAnswers: [1]
  }, 
  {
    question: "Welche intermolekularen Kräfte sind in NH₃ und O₂ zu erwarten und welches der Beiden hat den höheren Siedepunkt?",
    answers: [
      "NH₃: Dipol - Dipol; O₂: induziert - induziert; O₂",
      "NH₃: induzierter Dipol - Dipol; O₂: Dipol - Dipol; NH₃",
      "NH₃: Dipol - Dipol; O₂: Ion - Ion; NH₃",
      "NH₃: Dipol - Dipol; O₂: induziert - induziert; NH₃",
    ],
    correctAnswers: [3]
  }, 
  {
    question: "Welches der folgenden Ionen ist paramagnetisch?"    ,
    answers: [
      "Na+",
      "Ca²+	",
      "Mn²+",
      "Cu+",
    ],
    correctAnswers: [2]
  }, 
  {
    question: "Ordne nach der Frequenz",
    answers: [
      "Mikrowelle < Radiowelle <  Infrarot < blaues Licht < rotes Licht < UV – Licht < Röntgenstrahlen < Gammastrahlen",
      "Radiowelle < Mikrowelle < Infrarot < rotes Licht < blaues Licht < UV – Licht < Röntgenstrahlen < Gammastrahlen",
      "Mikrowelle < Radiowelle <  Infrarot < rotes Licht < blaues Licht <  UV – Licht < Röntgenstrahlen < Gammastrahlen",
      "Radiowelle < Mikrowelle < Infrarot < blaues Licht < rotes Licht  < UV – Licht < Gammastrahlen< Röntgenstrahlen",
    ],
    correctAnswers: [1]
  }, 
  {
    question: "Welche Formeln haben Phosphat, Perchlorat und Nitrit?",
    answers: [
      "P₄O²-, Cl²O₄-, NO₂²-",
      "PO₄³ -, ClO²-, NO²-",
      "PO₃²-, ClO₄-, NO²-",
      "PO₄³-, ClO₄-, NO²-",
      "PO³-, ClO₄-, NO₂²-",
    ],
    correctAnswers: [3]
  }, 
  {
    question: "Bestimmte die Lewis Formel für NH₃ HCN und SF₄ . Was sind molekulare Geometrien?",
    answers: [
      "NH₃: Wippe; HCN:  trigonal pyramidal; SF₄: linear",
      "NH₃: trigonal pyramidal; HCN: Wippe; SF₄: linear",
      "NH₃: trigonal pyramidal; HCN:  linear; SF₄: trigonal pyramidal",
      "NH₃: trigonal pyramidal; HCN:  linear; SF₄: Wippe"
    ],
    correctAnswers: [3]
  }, 
  {
    question: "Welche Quantenzahlen sind nicht möglich?",
    answers: [
      "n = 3, l = 2, m = 1",
      "n = 2, l = 0, m = 0",
      "n = 4, l = 1, m = 1",
      "n = 3, l = 4, m = 2",
    ],
    correctAnswers: [3]
  }, 
  {
    question: "Wie viele signifikante Stellen sind bei 0,41010 ",
    answers: [
      "6",
      "5", 
      "4",
      "1"
    ],
    correctAnswers: [1]
  }, 
  {
    question: "Welche Formeln haben Lithiumsulfid, Calciumphosphat und Salpetersäure",
    answers: [
      "Li₂S , Ca₃(PO₄)₂, HNO₃",
      "LiS , Ca₃(PO₄)₂, HNO₄",
      "Li₂S₂ , Ca₃PO₄, HNO",
      "Li₂S , Ca₃(PO₄)₂, HNO₃"
    ],
    correctAnswers: [0]
  }
];

export default quizQuestions;
