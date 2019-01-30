const quizQuestions = [
{
      question: "Welche Aussagen treffen/trifft für die Verdauung von Makronährstoffen zu?",
      answers: [
        "D-Glucose wird aktiv Carrier-vermittelt transportiert", 
        "Fette werden über Micellenbildung transportiert", 
        "Fette mit Schmelzpunkten über der Körpertemperatur werden besser absorbiert als Fette mit niedrigeren Schmelzpunkten.", 
        "Die Proteinabsorption erfolgt im gesamten Dünndarm."
      ],
      correctAnswers: [1,3]
  },
  {
    question: "Welche Aussage(n) zur Regulation des Wasserhaushalts trifft/treffen zu?",
    answers: [
      "Bei Salzmangel wird das Renin-Angiotensin-Aldosteron-System aktiviert", 
      "Aldosteron senkt die Natriumresorption", 
      "Das Adiuretin-System hält Wasser im Körper zurück", 
      "Sinkt das Plasmavolumen wird in der Niere Renin freigesetzt", 
      "Ein erhöhter Venendruck bedingt die Ausschüttung von antidiuretischem Hormon"
    ],
    correctAnswers: [0,2,3]
  },
  {
    question: "Welche Aussage(n) trifft/treffen zum Säure-Basen-Haushalt zu?",
    answers: [
      "Der Bicarbonatpuffer ist das größte Puffersystem im Extrazellulärraum",
      "Längeres Hungern kann Ursache einer metabolischen Alkalose sein",
      "Blut hat einen pH-Wert im leicht alkalischen Bereich",
      "Als basenbildend gelten Lebensmittel wie Fleisch, Milch und Eier"
    ],
    correctAnswers: [0,2]
  },
  {
    question: "Was sind die Vorteile der Wiegemethode?",
    answers: [
      "Erfassung von Risikofaktoren",
      "Möglichkeit der Untersuchung großer Studienkollektive",
      "Einfache Durchführung",
      "Individuelle Ermittlung der Energie- und Nährstoffaufnahme",
    ],
    correctAnswers: [0,3]
  },
  {
    question: "Welche Aussage(n) trifft/treffen zur Blutglucosekonzentration zu?",
    answers: [
      "Fructose ist süßer als Saccharose",
      "Adrenalin begünstigt die Speicherung von Glucose in Form von Glykogen",
      "Insulin ist ein anaboles Hormon",
      "Die Nüchtern-Blutglucosekonzentration beträgt zwischen 65 und 110 mg/dl"
    ],
    correctAnswers: [0,2,3]
  },
  {
    question: "Welche Aussage(n) zur Verdauung trifft/treffen zu?",
    answers: [
      "Der auslösende Reiz für die Abgabe von Cholezystokinin sind Fette und ein niedriger pH Wert im duodenalen Speisebrei",
      "Die Verweildauer im Magen sinkt in der Reihenfolge: KH–Proteine–Fette",
      "Die funktionellen Bestandteile des Magensafts sind Pepsinogene, Mucine, Salzsäure und Intrinsic Faktor.",
      "Mucine im Mund dienen als Gleitmittel und Antikörper"
    ],
    correctAnswers: [0,2]
  },
  {
    question: "Welche Aussage hinsichtlich des Proteinbedarfs trifft/treffen zu?",
    answers: [
      "Kwashiorkor ist charakterisiert durch fehlende Fettdepots",
      "Marasmus ist eine Fehlernährung, ausgelöst hauptsächlich durch eine proteinarme Kost",
      "Der Proteinbedarf wird durch Messung aller Stickstoffverluste bei proteinfreier, energetisch ausreichender Ernährung ermittelt ",
      "Der Mindestproteinbedarf beträgt 0.34 g/kg KG",
      "Für eine 60 kg schwere Frau werden 48 g Proteine pro Tag empfohlen (0,8g/kg KG)"
    ],
    correctAnswers: [2,4]
  },
  {
    question: "Welche Aussage trifft/treffen für Carotinoide zu?",
    answers: [
      "Lycopin ist reichlich in Tomaten enthalten",
      "β-Carotin zählt zu den Provitamin A Carotinoiden",
      "Der Richtwert für die tägliche Zufuhr an β-Carotin liegt bei 20 mg/d",
      "Die Absorptionsrate von β-Carotin beträgt 30 %",
      "Provitamin A Carotinoide aus Lebensmitteln können bei übermäßiger Zufuhr toxisch sein"
    ],
    correctAnswers: [0,1,3]
  },
  {
    question: "Mit welchen Methoden kann die Proteinqualität beurteilt werden?",
    answers: [
      "Gewichtszunahme (g) dividiert durch Proteinaufnahme (g)",
      "E/N-Ratio",
      "Bestimmung der limitierenden AS",
      "Prozent einer AS im Referenzprotein dividiert durch Prozent einer AS im Testprotein"
    ],
    correctAnswers: [0,1,2]
  },
  {
    question: "Welche Aussage(n) trifft/treffen für Riboflavin zu?",
    answers: [
      "Der Bedarf ist abhängig von der Proteinzufuhr ",
      "Riboflavin ist bei chronischer Zufuhr hoher Dosen (400 mg, 3 Monate) toxisch",
      "Riboflavin wirkt synergistisch mit Folsäure und Vitamin B6",
      "Zu den frühen Symptomen eines Mangels zählen Läsionen der Mundwinkel",
      "FAD ist Bestandteil der Glutathionreduktase"
    ],
    correctAnswers: [2,3,4]
  },
  {
    question: "Was bedeutet „Äquivalenz“ bei Vitaminen?",
    answers: [
      "In Nährwerttabellen erfolgt die Angabe der empfohlenen Mengen nicht in Form von Äquivalenten",
      "18 mg Tryptophan entsprechen 1 mg Niacinäquivalent bei gesunden Erwachsenen",
      "1 mg α -Tocopherol und 10 mg γ -Tocopherol sind äquivalent ",
      "Mit Hilfe von „Äquivalenz“ werden Stoffe vergleichbar gemacht",
      "Verschiedene Vitamere entfalten die gleiche biologische Wirkung"
    ],
    correctAnswers: [3,4]
  },
  {
    question: "Welche Aussage(n) zu Nährstoffen trifft/treffen zu?",
    answers: [
      "Sekundäre Pflanzeninhaltsstoffe sind essentiell ",
      "Energieliefernde Nährstoffe sind primäre Pflanzeninhaltsstoffe",
      "Bioaktive Pflanzenstoffe und Ballaststoffe zählen zu den primären Pflanzeninhaltsstoffen",
      "Essentielle Mineralstoffe, Spurenelemente und Vitamine sind sekundäre Pflanzeninhaltsstoffe",
    ],
    correctAnswers: [1,2]
  },
  {
    question: "Welche Fettsäuren sind n-3 Fettsäuren?",
    answers: [
      "Eicosapentaensäure",
      "Linolsäure",
      "α-Linolensäure",
      "Docosahexaensäure",
      "γ-Linolensäure"
    ],
    correctAnswers: [0,2,3]
  },
  {
    question: "Welche Antwort(en) zu Ballaststoffen ist/sind richtig?",
    answers: [
      "Ballaststoffe binden Gallensäure und haben daher eine cholesterinsenkende Wirkung",
      "Ballaststoffreiche Lebensmittel haben eine besonders hohe Energiedichte",
      "Eine Zufuhr von 30 g Ballaststoffen pro Tag kann die Absorption von Magnesium verringern",
      "Ballaststoffe verlängern die Verweildauer des Nahrungsbreis im Magen",
    ],
    correctAnswers: [0,3]
  },
  {
    question: "Welche Faktoren gelten als Risikofaktoren bei der Entstehung von Krebs?",
    answers: [
      "Gepökeltes Fleisch",
      "Übergewicht",
      "Alkoholabusus",
      "Zu geringe Energiezufuhr",
    ],
    correctAnswers: [0,1,2]
  },
  {
    question: "Welche Methode(n) zählt/zählen zu den retrospektiven Ernährungserhebungen?",
    answers: [
      "Tonbandaufnahme",
      "24h-Recal",
      "Diet(ary) History",
      "Inventurmethode",
      "Einkaufsliste"
    ],
    correctAnswers: [1,2,4]
  },
  {
    question: "Wie verteilt sich das Gesamtkörperwasser?",
    answers: [
      "Interstitielle Flüssigkeiten = 27 % der EZF",
      "Plasmaflüssigkeiten= 19% der EZF",
      "EZF = 1/3 des Gesamtkörperwassers",
      "Transzelluläre Flüssigkeiten= 3% der EZF!!!!",
      "IZF = 2/3 des Gesamtkörperwassers"
    ],
    correctAnswers: [1,2,4]
  },
  {
    question: "Welche(s) Lipoprotein(e) hat/haben ein besonders hohes atherogenes Potential?",
    answers: [
      "LDL-Cholesterin",
      "Chylomikronen",
      "HDL-Cholesterin",
      "Triglyceride"
    ],
    correctAnswers: [0]
  },
  {
    question: "Wie unterscheiden sich Empfehlungen, Richtwerte und Schätzwerte laut DACH-Referenzwerten?",
    answers: [
      "Empfehlungen werden durch experimentelle Untersuchungen ermittelt",
      "Schätzwerte stellen experimentell untersuchte und abgesicherte Werte dar",
      "Für Vitamin E gelten Schätzwerte",
      "Richtwerte gelten für die Zufuhr von n-3 Fettsäuren"
    ],
    correctAnswers: [0,2]
  },
  {
    question: "Welche sind wesentliche Funktionen von Vitamin C?",
    answers: [
      "Regeneration von Vitamin E",
      "Wichtiges fettlösliches Antioxidans",
      "Cofaktor bei der Bildung von Dopamin und Noradrenalin",
      "Verbesserung der Eisenabsorption",
      "Cofaktor bei der DNA-Synthese"
    ],
    correctAnswers: [0,2,3]
  },
  {
    question: "Welche Aussage(n) zur Nährstoffdichte trifft/treffen zu?",
    answers: [
      "Die Nährstoffdichte ist gut geeignet, um die Nährstoffversorgung über einen Tag zu beurteilen",
      "Mit Hilfe der Nährstoffdichte kann man die Qualität eines Lebensmittels beurteilen",
      "Die Nährstoffdichte errechnet sich als Nährstoffgehalt dividiert durch den Energiegehalt",
      "Sinkt der Energiebedarf im Alter sollten Lebensmittel mit geringerer Nährstoffdichte zugeführt werden",
      "Die Nährstoffdichte dient der Beurteilung der Nährstoffversorgung einzelner Personen"
    ],
    correctAnswers: [1,2,4]
  },
  {
    question: "Welche Aussage(n) trifft/treffen für Calcium zu?",
    answers: [
      "Die Absorptionsrate liegt zwischen 15 und 75%",
      "99% des Körperbestands finden sich in Knochen und Zähnen",
      "Rachitis ist eine typische Mangelerscheinung bei Kindern ",
      "Durch einen Abfall der Parathormonkonzentration wird die Mobilisierung von Calcium gehemmt",
      "Die Zufuhrempfehlung für Erwachsene lautet 2500 mg/d "
    ],
    correctAnswers: [0,1,3]
  },
  {
    question: "Welche Aussage(n) zu Empfehlungen ist/sind richtig?",
    answers: [
      "Lebensmittelbasierte Empfehlungen fordern Mindestmengen in mg oder g",
      "Zu den Lebensmittelbasierten Empfehlungen zählen die „10 Regeln der DGE“",
      "Lebensmittelbasierte Empfehlungen richten sich an Laien",
      "Lebensmittelbasierte Empfehlungen basieren nicht auf wissenschaftlichen Studien"
    ],
    correctAnswers: [1,2]
  },
  {
    question: "Welche Aussage(n) trifft/treffen für Vitamin E zu?",
    answers: [
      "Im Mangel besteht eine erhöhte Hämolyseneigung der Erythrozyten",
      "Der UL für die Zufuhr an Vitamin E liegt bei 200mg α-Tocopherol/d",
      "Wichtiges fettlösliches Antioxidans",
      "Tocopherole enthalten am C2 des Chromanrings eine ungesättigte isoprenoide Seitenkette",
      "Bei Vitamin E-Mangel nimmt die Membranfluidität ab",
    ],
    correctAnswers: [0,2,3,4]
  },
  {
    question: "Welche der Angeführten Antworten zählen zu den Versorgungsparametern?",
    answers: [
      "Folatkonzentration in den Erythrozyten",
      "Zinkkonzentration im Blut",
      "Homocysteinkonzentration im Serum",
      "Blutgerinnungsfaktoren",
      "Präalbumin",
    ],
    correctAnswers: [0,1,4]
  },
  {
    question: "Das drei-Kompartiment-Modell umfasst ...",
    answers: [
      "Wasser",
      "Extrazelluläre Masse",
      "Fettmasse",
      "Body Cell Mass"
    ],
    correctAnswers: [1,2,3]
  }, 
  {
    question: "Welche Arten der Absorption gibt es?",
    answers: [
      "Erleichterte Diffusion über einen Carrier oder einen Kanal",
      "Aktiver Transport ohne Energieverbrauch",
      "Nährstoffe gelangen mit Ionen über ein Gefälle in die Zelle",
      "Freie Diffusion entlang eines Konzentrations- oder Ladungsgefälles",
      "Ungelöste Nahrungspartikel treten durch die intakte Epithelzelle",
    ],
    correctAnswers: [0,3,4]
  }, 
  {
    question: "Welche Aussage(n) trifft/ treffen zur biologischen Wertigkeit von Proteinen zu?",
    answers: [
      "Hühner-Vollei hat eine biologische Wertigkeit von 100",
      "Eine Kombination aus Bohnen und Mais hat eine bessere biologische Wertigkeit als Vollei ",
      "Bohnen haben eine höhere biologische Wertigkeit als Schweinefleisch",
      "Die Kombination aus 75% Mich und 25% Weizenmehl hat eine biologische Wertigkeit von 125",
    ],
    correctAnswers: [0,3]
  }, 
  {
    question: "Welche Faktoren beeinflussen den Ernährungsstatus?",
    answers: [
      "Kultur und Religion",
      "Wachstum",
      "Nährstofferhebung",
      "Versorgungsparameter",
      "Nahrungsmittelverfügbarkeit",
    ],
    correctAnswers: [0,1,4]
  }, 
  {
    question: "Welche Faktoren begünstigen die Pathogenese der Adipositas?",
    answers: [
      "koronare Herzkrankheiten",
      "Körperliche Inaktivität",
      "Diabetes mellitus Typ II ",
      "Genetische Faktoren",
      "Thermogenese",
    ],
    correctAnswers: [1,3,4]
  }, 
  {
    question: "Welche Aussage(n) zur Körperzusammensetzung ist/sind richtig?",
    answers: [
      "Bei bestimmten metabolischen Störungen und physiologischen Veränderungen der Konstitution können die Komponente Fettmasse und fettfreie Masse unabhängig voneinander variieren.",
      "Fettfreie Körpermasse und Lean Body Mass sind ident",
      "Der Anteil an Körperwasser nimmt im Rahmen des Alterungsprozesses zu ",
      "Das Ein-Kompartiment-Modell dient als indirekte Beurteilungsgrundlage der Körperzusammensetzung und seiner Energiereserven.",
      "Das Verhältnis aktiver Zellmasse zur Extrazellulärmasse sollte optimalerweise kleiner 1 sein"
    ],
    correctAnswers: [3]
  }, 
  {
    question: "Welche Aussage(n) trifft auf Folsäure zu?",
    answers: [
      "Nahrungsfolat = Pteroylpolyglutamat",
      "Zu den Mangelsymptomen zählt die megaloblastäre Anämie",
      "Verminderte Homocysteinkonzentrationen weisen auf einen Folsäuremangel hin",
      "1μg Folatäquivalent = 0,5μg freie Folsäure",
      "Die empfohlene Zufuhr für Erwachsene beträgt 200μg Folatäquivalente/d "
    ],
    correctAnswers: [0,1,3]
  }, 
  {
    question: "Wie werden Mineralstoffe eingeteilt?",
    answers: [
      "Spurenelemente kommen im Körper in Konzentrationen kleiner 60mg/kg KG vor ",
      "Calcium und Magnesium sind für Körperfunktionen nicht essentiell ",
      "Mengenelemente kommen im Körper in Konzentrationen größer 50mg/kg KG vor",
      "Kalium dient der osmotischen Regulation",
    ],
    correctAnswers: [2,3]
  }, 
  {
    question: "Welche negativen Auswirkungen hat Alkohol bei übermäßiger Zufuhr?",
    answers: [
      "Unterstützt die Gewichtsreduktion",
      "Vermindert das Risiko von Bluthochdruck",
      "Erhöht die Triglyceride",
      "Induziert einen Mangel an Folsäure, Vitamin B1, B6 und B12",
    ],
    correctAnswers: [2,3]
  }, 
  {
    question: "Welche Faktoren beeinflussen die Absorption fettlöslicher Vitamine negativ?",
    answers: [
      "Magensäure",
      "Pankreasinsuffizienz",
      "Gallensäuremangel",
      "Medikamente",
    ],
    correctAnswers: [0,2,3]
  }, 
  {
    question: "Welche Aussage(n) trifft/treffen zu Fetten ist richtig?",
    answers: [
      "Cholesterin wird zu etwa 50% mit der Nahrung aufgenommen und im Körper gebildet",
      "Das Verhältnis α-Linolensäure zu Linolsäure sollte kleiner/gleich 5:1 sein",
      "Trans-Fettsäuren kommen natürlich in Lebensmitteln vor",
      "Ein wichtiger Vertreter der einfach ungesättigten Fettsäuren ist die Ölsäure",
      "Ein Trien zu Tetraen Quotient kleiner 0.4 deutet auf einen Mangel an essentiellen Fettsäuren hin",
    ],
    correctAnswers: [0,2,3]
  }, 
  {
    question: "Zu den lebensmittelbasierten Empfehlungen zählen?",
    answers: [
      "Ernährungspyramiden",
      "DACH Referenzwerte",
      "Regeln zur vollwertigen Ernährung",
      "Food Plates",
      "Nordic Nutrition Recommendations",
    ],
    correctAnswers: [0,2,3]
  }, 
  {
    question: "Welche dieser Fettsäuren sind omega-3-FS?",
    answers: [
      "Linolsäure",
      "Arachidonsäure",
      "Docosahexaensäure",
      "Gamma-Linolenäure",
      "Ölsäure",
    ],
    correctAnswers: [2]
  }, 
  {
    question: "Vorteile retrospektiver Ernährungserhebungsmethoden",
    answers: [
      "keine Beeinflussung der Gewohnheiten",
      "Für große Kollektive geeignet",
      "Geringe Belastung der Studienteilnehmer",
      "sehr genau hinsichtlich Mengenangaben",
      "ermöglicht eine genaue Bestimmung der Nährstoffaufnahme",
    ],
    correctAnswers: [0,1,2]
  }, 
  {
    question: "Zur Steigerung der Fettmasse kommt es...",
    answers: [
      "durch Proteinmangel",
      "durch Überernährung",
      "Bei Bodybuildern",
      "Während der Schwangerschaft",
      "Durch energiereiche, Proteinarme Diäten",
    ],
    correctAnswers: [1,3,4]
  }, 
  {
    question: "Faktoren, welche den Bedarf an bestimmten Vitaminen erhöhen können",
    answers: [
      "Wachstum",
      "Jahreszeit",
      "Tabakkonsum",
      "Appetitverlust",
      "Malabsorption",
    ],
    correctAnswers: [0,1,2,4]
  }
];

export default quizQuestions;
