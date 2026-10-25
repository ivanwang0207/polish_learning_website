/* ==========================================================
   Polish Study Reference — CONTENT DATA
   ==========================================================
   This is the ONLY file you should need to edit to add content.
   See README.md for full instructions. Quick summary:

   - To add a new tab (e.g. "Practice"), add an entry to CONTENT.tabs.
   - To add a new lesson, add an entry to CONTENT.lessons.
   - To add content to an existing lesson, edit its sections.
   ========================================================== */

const CONTENT = {
  "tabs": [
    {
      "id": "grammar",
      "label": "Grammar",
      "kind": "panels",
      "columns": 2,
      "searchable": false
    },
    {
      "id": "vocab",
      "label": "Vocabulary",
      "kind": "vocab",
      "columns": 1,
      "searchable": true
    }
  ],
  "lessons": [
    {
      "number": 1,
      "title": "Co to jest?",
      "subtitle": "What is this?",
      "sections": {
        "grammar": [
          "<div class=\"panel\"><h3>Demonstrative pronouns</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Masc.</th><th>Fem.</th><th>Neut.</th></tr>\n<tr><td class=\"lbl\">this</td><td>ten</td><td>ta</td><td>to</td></tr>\n<tr><td class=\"lbl\">that</td><td>tamten</td><td>tamta</td><td>tamto</td></tr></table></div>\n<p class=\"note\">Rule: tamten/tamta/tamto = tam + ten/ta/to</p>\n<p>Examples: <b>ten komputer</b> (this computer) · <b>tamta gumka</b> (that eraser) · <b>to okno</b> (this window)</p>\n</div>",
          "<div class=\"panel\"><h3>Noun gender — quick reference</h3>\n<div class=\"tblwrap\"><table><tr><th>Gender</th><th>Typical ending</th><th>Example</th></tr>\n<tr><td class=\"lbl\">Masculine</td><td><span class=\"red\">hard consonant</span></td><td>kompute<span class=\"red\">r</span>, bana<span class=\"red\">n</span>, chle<span class=\"red\">b</span></td></tr>\n<tr><td class=\"lbl\">Feminine</td><td><span class=\"red\">-a</span></td><td>gumk<span class=\"red\">a</span>, sałat<span class=\"red\">a</span>, pizz<span class=\"red\">a</span></td></tr>\n<tr><td class=\"lbl\">Neuter</td><td><span class=\"red\">-o</span></td><td>okn<span class=\"red\">o</span>, jabłk<span class=\"red\">o</span>, mlek<span class=\"red\">o</span></td></tr></table></div>\n<p class=\"note\">In Polish, pronouns, nouns, adjectives and numerals all carry gender.</p>\n</div>",
          "<div class=\"panel\"><h3>Sentence formula</h3>\n<p><b>Q:</b> Co to jest? <span class=\"ex-en\">(what + this + is)</span></p>\n<p><b>A:</b> To jest + [noun]</p>\n<div class=\"ex\">Q: Co to jest? — A: <span class=\"red\">To jest ołówek.</span> <span class=\"en\">(This is a pencil.)</span></div>\n</div>"
        ],
        "vocab": [
          {
            "category": "Core words",
            "items": [
              {
                "pl": "co",
                "en": "what"
              },
              {
                "pl": "jest",
                "en": "is"
              },
              {
                "pl": "to",
                "en": "this / that"
              }
            ]
          },
          {
            "category": "Objects",
            "items": [
              {
                "pl": "komputer",
                "en": "computer"
              },
              {
                "pl": "okno",
                "en": "window"
              },
              {
                "pl": "gumka",
                "en": "eraser"
              },
              {
                "pl": "papier",
                "en": "paper"
              },
              {
                "pl": "krzesło",
                "en": "chair"
              },
              {
                "pl": "długopis",
                "en": "pen"
              },
              {
                "pl": "ołówek",
                "en": "pencil"
              }
            ]
          },
          {
            "category": "Food",
            "items": [
              {
                "pl": "banan",
                "en": "banana"
              },
              {
                "pl": "ananas",
                "en": "pineapple"
              },
              {
                "pl": "sałata",
                "en": "lettuce"
              },
              {
                "pl": "jabłko",
                "en": "apple"
              },
              {
                "pl": "kapusta",
                "en": "cabbage"
              },
              {
                "pl": "pizza",
                "en": "pizza"
              },
              {
                "pl": "chleb",
                "en": "bread"
              },
              {
                "pl": "mleko",
                "en": "milk"
              }
            ]
          }
        ]
      }
    },
    {
      "number": 2,
      "title": "Kto to jest?",
      "subtitle": "Who is this?",
      "sections": {
        "grammar": [
          "<div class=\"panel\"><h3>Personal pronouns</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th></th><th>Plural</th><th></th></tr>\n<tr><td class=\"lbl\">I</td><td>ja</td><td class=\"lbl\">we</td><td>my</td><td></td></tr>\n<tr><td class=\"lbl\">you</td><td>ty</td><td class=\"lbl\">you (pl.)</td><td>wy</td><td></td></tr>\n<tr><td class=\"lbl\">he</td><td>on</td><td class=\"lbl\">they (masc.)</td><td>oni</td><td></td></tr>\n<tr><td class=\"lbl\">she</td><td>ona</td><td class=\"lbl\">they (other)</td><td>one</td><td></td></tr>\n<tr><td class=\"lbl\">it</td><td>ono</td><td></td><td></td><td></td></tr></table></div>\n<p class=\"note\">Plural rule: on + on/ona/ono → <b>oni</b> (any masc. person present) · ona/ono only → <b>one</b></p>\n</div>",
          "<div class=\"panel\"><h3>Gender endings — extended</h3>\n<div class=\"tblwrap\"><table><tr><th>Gender</th><th>Typical ending</th><th>Example</th></tr>\n<tr><td class=\"lbl\">Masculine</td><td><span class=\"red\">hard consonant (often male)</span></td><td>tata, pan, poeta, dom</td></tr>\n<tr><td class=\"lbl\">Feminine</td><td><span class=\"red\">-a, or soft consonant (often female)</span></td><td>pani, mama, twarz, noc</td></tr>\n<tr><td class=\"lbl\">Neuter</td><td><span class=\"red\">-o, -um, -e, -ę</span></td><td>imię, mieszkanie, muzeum, rano</td></tr></table></div>\n</div>",
          "<div class=\"panel\"><h3>Sentence formula</h3>\n<p><b>Q:</b> Kto to jest? <span class=\"en\">(who + this + is)</span> — <b>A:</b> To jest + [person]</p>\n<div class=\"ex\">Q: Kto to jest? — A: <span class=\"red\">To jest tata.</span> <span class=\"en\">(This is dad.)</span><br>\nQ: Co to jest? — A: <span class=\"red\">To jest mieszkanie.</span> <span class=\"en\">(That is an apartment.)</span></div>\n</div>"
        ],
        "vocab": [
          {
            "category": "Core words",
            "items": [
              {
                "pl": "kto",
                "en": "who"
              }
            ]
          },
          {
            "category": "Pronouns",
            "items": [
              {
                "pl": "ja",
                "en": "I"
              },
              {
                "pl": "ty",
                "en": "you"
              },
              {
                "pl": "on",
                "en": "he"
              },
              {
                "pl": "ona",
                "en": "she"
              },
              {
                "pl": "ono",
                "en": "it"
              },
              {
                "pl": "my",
                "en": "we"
              },
              {
                "pl": "wy",
                "en": "you (pl.)"
              },
              {
                "pl": "oni",
                "en": "they (masc.)"
              },
              {
                "pl": "one",
                "en": "they (other)"
              }
            ]
          },
          {
            "category": "People, time & place",
            "items": [
              {
                "pl": "tata",
                "en": "dad"
              },
              {
                "pl": "mama",
                "en": "mom"
              },
              {
                "pl": "pani",
                "en": "lady"
              },
              {
                "pl": "pan",
                "en": "sir"
              },
              {
                "pl": "twarz",
                "en": "face"
              },
              {
                "pl": "imię",
                "en": "first name"
              },
              {
                "pl": "poeta",
                "en": "poet"
              },
              {
                "pl": "noc",
                "en": "night"
              },
              {
                "pl": "rano",
                "en": "morning"
              },
              {
                "pl": "dzień",
                "en": "day"
              },
              {
                "pl": "dom",
                "en": "house"
              },
              {
                "pl": "bank",
                "en": "bank"
              },
              {
                "pl": "ulica",
                "en": "street"
              },
              {
                "pl": "muzeum",
                "en": "museum"
              },
              {
                "pl": "mieszkanie",
                "en": "apartment"
              }
            ]
          }
        ]
      }
    },
    {
      "number": 3,
      "title": "Mam na imię…",
      "subtitle": "My name is…",
      "sections": {
        "grammar": [
          "<div class=\"panel\"><h3>mieć — to have (irregular)</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th></th><th>Plural</th><th></th></tr>\n<tr><td class=\"lbl\">ja</td><td class=\"red\">mam</td><td class=\"lbl\">my</td><td class=\"red\">mamy</td><td></td></tr>\n<tr><td class=\"lbl\">ty</td><td class=\"red\">masz</td><td class=\"lbl\">wy</td><td class=\"red\">macie</td><td></td></tr>\n<tr><td class=\"lbl\">on/ona/ono</td><td class=\"red\">ma</td><td class=\"lbl\">oni/one</td><td class=\"red\">mają</td><td></td></tr></table></div>\n<p class=\"note\">Irregular: mie- → ma-, then regular endings -m/-sz…</p>\n<div class=\"ex\"><b>Mam na imię Ania.</b> <span class=\"en\">My name is Ania (lit. \"I have for name Ania\")</span></div>\n</div>",
          "<div class=\"panel\"><h3>nazywać się — to call oneself</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th></th><th>Plural</th><th></th></tr>\n<tr><td class=\"lbl\">ja</td><td>nazywa<span class=\"red\">m</span></td><td class=\"lbl\">my</td><td>nazywa<span class=\"red\">my</span></td><td></td></tr>\n<tr><td class=\"lbl\">ty</td><td>nazywa<span class=\"red\">sz</span></td><td class=\"lbl\">wy</td><td>nazywa<span class=\"red\">cie</span></td><td></td></tr>\n<tr><td class=\"lbl\">on/ona/ono</td><td>nazywa</td><td class=\"lbl\">oni/one</td><td>nazywa<span class=\"red\">ją</span></td><td></td></tr></table></div>\n<p class=\"note\">się = reflexive pronoun \"oneself\" · regular: drop ć, add -m/-sz…</p>\n<div class=\"ex\"><b>Nazywam się Nowak. Ania Nowak.</b> <span class=\"en\">My name is Nowak, Ania Nowak.</span></div>\n</div>",
          "<div class=\"panel\"><h3>Polite forms of address</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th>Plural</th></tr>\n<tr><td class=\"lbl\">Lady</td><td>Pani</td><td>Panie</td></tr>\n<tr><td class=\"lbl\">Sir</td><td>Pan</td><td>Panowie</td></tr>\n<tr><td class=\"lbl\">Mixed</td><td>—</td><td>Państwo</td></tr></table></div>\n<p class=\"note\">Pan / Pani = \"you\" (polite), but literally \"sir/lady\" — verb takes the on/ona form.</p>\n</div>",
          "<div class=\"panel full\"><h3>\"What is your name?\" — two ways</h3>\n<p><b>Informal:</b> Jak masz na imię? / Jak się nazywasz?</p>\n<p><b>Formal:</b> Jak pan/pani ma na imię? / Jak się pan/pani nazywa?</p>\n<div class=\"ex\">Jak się nazywasz? → <span class=\"red\">Nazywam się Tom Bond.</span><br>\nJak pani ma na imię? → <span class=\"red\">Mam na imię Anna.</span> (formal)<br>\nJak się pan nazywa? → <span class=\"red\">Nazywam się Nowak, Jakub Nowak.</span> (formal)</div>\n</div>"
        ],
        "vocab": [
          {
            "category": "ID card terms",
            "items": [
              {
                "pl": "nazwisko",
                "en": "surname"
              },
              {
                "pl": "imię / imiona",
                "en": "first name(s)"
              }
            ]
          },
          {
            "category": "Verbs",
            "items": [
              {
                "pl": "mieć",
                "en": "to have"
              },
              {
                "pl": "nazywać się",
                "en": "to call oneself"
              }
            ]
          },
          {
            "category": "Polite address",
            "items": [
              {
                "pl": "Pani / Panie",
                "en": "lady (sg./pl.)"
              },
              {
                "pl": "Pan / Panowie",
                "en": "sir (sg./pl.)"
              },
              {
                "pl": "Państwo",
                "en": "mixed group (formal \"you\")"
              }
            ]
          }
        ]
      }
    },
    {
      "number": 4,
      "title": "Ile masz lat?",
      "subtitle": "How old are you?",
      "sections": {
        "grammar": [
          "<div class=\"panel\"><h3>Numbers 0–19</h3>\n<div class=\"tblwrap\"><table><tr><th>#</th><th>Polish</th><th>#</th><th>Polish</th></tr>\n<tr><td>0</td><td>zero</td><td>10</td><td>dziesięć</td></tr>\n<tr><td>1</td><td>jeden</td><td>11</td><td>jeden<span class=\"blue\">aście</span></td></tr>\n<tr><td>2</td><td>dwa</td><td>12</td><td>dwa<span class=\"blue\">naście</span></td></tr>\n<tr><td>3</td><td>trzy</td><td>13</td><td>trzy<span class=\"blue\">naście</span></td></tr>\n<tr><td>4</td><td>cztery</td><td>14</td><td>czter<span class=\"blue\">naście</span></td></tr>\n<tr><td>5</td><td>pięć</td><td>15</td><td>pięt<span class=\"blue\">naście</span></td></tr>\n<tr><td>6</td><td>sześć</td><td>16</td><td>szes<span class=\"blue\">naście</span></td></tr>\n<tr><td>7</td><td>siedem</td><td>17</td><td>siedem<span class=\"blue\">naście</span></td></tr>\n<tr><td>8</td><td>osiem</td><td>18</td><td>osiem<span class=\"blue\">naście</span></td></tr>\n<tr><td>9</td><td>dziewięć</td><td>19</td><td>dziewięt<span class=\"blue\">naście</span></td></tr></table></div>\n</div>",
          "<div class=\"panel\"><h3>Tens & bigger numbers</h3>\n<div class=\"tblwrap\"><table><tr><th>#</th><th>Polish</th><th>#</th><th>Polish</th></tr>\n<tr><td>10</td><td>dziesięć</td><td>60</td><td>sześć<span class=\"blue\">dziesiąt</span></td></tr>\n<tr><td>20</td><td>dwa<span class=\"blue\">dzieścia</span></td><td>70</td><td>siedem<span class=\"blue\">dziesiąt</span></td></tr>\n<tr><td>30</td><td>trzy<span class=\"blue\">dzieści</span></td><td>80</td><td>osiem<span class=\"blue\">dziesiąt</span></td></tr>\n<tr><td>40</td><td>czter<span class=\"blue\">dzieści</span></td><td>90</td><td>dziewięć<span class=\"blue\">dziesiąt</span></td></tr>\n<tr><td>50</td><td>pięć<span class=\"blue\">dziesiąt</span></td><td>100</td><td>sto</td></tr></table></div>\n<p class=\"note\">Combine tens + units: 21 dwadzieścia jeden · 43 czterdzieści trzy · 65 sześćdziesiąt pięć · 98 dziewięćdziesiąt osiem</p>\n</div>",
          "<div class=\"panel\"><h3>Which word for \"year(s)\"?</h3>\n<div class=\"tblwrap\"><table><tr><th>Age ends in…</th><th>Use</th></tr>\n<tr><td>1</td><td class=\"red\">rok</td></tr>\n<tr><td>2, 3, 4 (not 12–14)</td><td class=\"red\">lata</td></tr>\n<tr><td>everything else (5–21, 12–14, 25, 26…)</td><td class=\"red\">lat</td></tr></table></div>\n<p class=\"note\">1 rok · 2, 3, 4, 22, 23, 24, 32… lata · 5–21, 25, 26… lat</p>\n</div>",
          "<div class=\"panel\"><h3>Asking & answering age</h3>\n<p><b>Informal:</b> Ile masz lat?</p>\n<p><b>Formal:</b> Ile ma pan/pani lat? / Ile pan/pani ma lat?</p>\n<div class=\"ex\">How old are you? (18, informal) → <span class=\"red\">Mam 18 lat.</span><br>\nSir, your age? (25) → <span class=\"red\">Mam 25 lat.</span><br>\nMa'am, your age? (22) → <span class=\"red\">Mam 22 lata.</span><br>\nHow old is this child? (1) → <span class=\"red\">Ma 1 rok.</span></div>\n</div>"
        ],
        "vocab": [
          {
            "category": "Core words",
            "items": [
              {
                "pl": "ile",
                "en": "how much / how many"
              },
              {
                "pl": "masz",
                "en": "(you) have"
              },
              {
                "pl": "lat / lata / rok",
                "en": "year(s) — see age rule"
              }
            ]
          },
          {
            "category": "Numbers",
            "items": [
              {
                "pl": "zero…dziesięć",
                "en": "0–10"
              },
              {
                "pl": "jedenaście…dziewiętnaście",
                "en": "11–19"
              },
              {
                "pl": "dwadzieścia…sto",
                "en": "20, 30…100"
              }
            ]
          }
        ]
      }
    },
    {
      "number": 5,
      "title": "Ile to kosztuje?",
      "subtitle": "How much does this cost?",
      "sections": {
        "grammar": [
          "<div class=\"panel\"><h3>Currency — złoty &amp; grosz</h3>\n<p><b>złoty</b> — originally \"golden\" (adj.), now the main currency unit.</p>\n<p><b>grosz</b> — from Latin \"grossus\", the subunit like a cent. 100 grosz = 1 złoty.</p>\n<p class=\"note\">Historically ≈1 PLN ≈ 1.65–1.91 RMB (2017–2020). Prices are traditionally lower than Western Europe but rising toward the EU standard; light haggling is possible at tourist stalls.</p>\n</div>",
          "<div class=\"panel\"><h3>Numeral agreement — same rule as rok/lata/lat</h3>\n<div class=\"tblwrap\"><table><tr><th>Amount ends in…</th><th>złoty</th><th>grosz</th></tr>\n<tr><td>1 (not 11)</td><td class=\"red\">złoty</td><td class=\"red\">grosz</td></tr>\n<tr><td>2, 3, 4 (not 12–14)</td><td class=\"red\">złote</td><td class=\"red\">grosze</td></tr>\n<tr><td>5+, and 12–14</td><td class=\"red\">złotych</td><td class=\"red\">groszy</td></tr></table></div>\n<p class=\"note\">1 złoty · 2 złote · 5 złotych · 22 złote · 1 grosz · 3 grosze · 10 groszy</p>\n</div>",
          "<div class=\"panel\"><h3>Hundreds</h3>\n<div class=\"tblwrap\"><table><tr><th>#</th><th>Polish</th><th>#</th><th>Polish</th></tr>\n<tr><td>100</td><td>sto</td><td>600</td><td>sześć<span class=\"blue\">set</span></td></tr>\n<tr><td>200</td><td>dwie<span class=\"blue\">ście</span></td><td>700</td><td>siedem<span class=\"blue\">set</span></td></tr>\n<tr><td>300</td><td>trzy<span class=\"blue\">sta</span></td><td>800</td><td>osiem<span class=\"blue\">set</span></td></tr>\n<tr><td>400</td><td>czter<span class=\"blue\">ysta</span></td><td>900</td><td>dziewięć<span class=\"blue\">set</span></td></tr>\n<tr><td>500</td><td>pięć<span class=\"blue\">set</span></td><td></td><td></td></tr></table></div>\n<p class=\"note\">542 zł = pięćset czterdzieści dwa złote · pół = half</p>\n</div>",
          "<div class=\"panel\"><h3>Thousands &amp; millions</h3>\n<div class=\"tblwrap\"><table><tr><th>Amount</th><th>Polish</th></tr>\n<tr><td>1 000</td><td>tysiąc</td></tr>\n<tr><td>2 000–4 000</td><td>[X] <span class=\"blue\">tysiące</span></td></tr>\n<tr><td>5 000+ / 10 000–90 000</td><td>[X] <span class=\"blue\">tysięcy</span></td></tr>\n<tr><td>100 000</td><td>sto tysięcy</td></tr>\n<tr><td>500 000</td><td>pół miliona</td></tr>\n<tr><td>1 000 000</td><td>milion</td></tr>\n<tr><td>2–4 000 000</td><td>[X] <span class=\"blue\">miliony</span></td></tr>\n<tr><td>5+ 000 000</td><td>[X] <span class=\"blue\">milionów</span></td></tr></table></div>\n</div>",
          "<div class=\"panel\"><h3>Verb pattern: -ować (kosztować)</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th></th><th>Plural</th><th></th></tr>\n<tr><td class=\"lbl\">ja</td><td>kosztu<span class=\"red\">ję</span></td><td class=\"lbl\">my</td><td>kosztu<span class=\"red\">jemy</span></td><td></td></tr>\n<tr><td class=\"lbl\">ty</td><td>kosztu<span class=\"red\">jesz</span></td><td class=\"lbl\">wy</td><td>kosztu<span class=\"red\">jecie</span></td><td></td></tr>\n<tr><td class=\"lbl\">on/ona/ono</td><td>kosztu<span class=\"red\">je</span></td><td class=\"lbl\">oni/one</td><td>kosztu<span class=\"red\">ją</span></td><td></td></tr></table></div>\n<p class=\"note\">Pattern: stem + -ję/-jesz/-je/-jemy/-jecie/-ją. Same pattern for gotować (to cook).</p>\n<div class=\"ex\">Ile to kosztuje? <span class=\"en\">How much does this cost?</span><br>To kosztuje 25 złotych. <span class=\"en\">This costs 25 złoty.</span></div>\n</div>",
          "<div class=\"panel full\"><h3>Reading prices aloud</h3>\n<p>102 zł = sto dwa złote · 68 zł = sześćdziesiąt osiem złotych · 54 zł = pięćdziesiąt cztery złote</p>\n<p>10 zł 45 gr = dziesięć złotych czterdzieści pięć groszy · 70 zł 99 gr = siedemdziesiąt złotych dziewięćdziesiąt dziewięć groszy</p>\n<div class=\"tblwrap\"><table><tr><th></th><th>Masc.</th><th>Fem.</th><th>Neut.</th><th>Plural</th></tr>\n<tr><td class=\"lbl\">this</td><td>ten</td><td>ta</td><td>to</td><td>te</td></tr>\n<tr><td class=\"lbl\">that</td><td>tamten</td><td>tamta</td><td>tamto</td><td>tamte</td></tr></table></div>\n</div>"
        ],
        "vocab": [
          {
            "category": "Core words",
            "items": [
              {
                "pl": "ile",
                "en": "how much"
              },
              {
                "pl": "kosztować",
                "en": "to cost"
              }
            ]
          },
          {
            "category": "Currency",
            "items": [
              {
                "pl": "złoty",
                "en": "main currency unit (lit. \"golden\")"
              },
              {
                "pl": "grosz",
                "en": "subunit, ~cent (100 grosz = 1 złoty)"
              }
            ]
          },
          {
            "category": "Verbs",
            "items": [
              {
                "pl": "gotować",
                "en": "to cook (practice verb, -ować pattern)"
              }
            ]
          },
          {
            "category": "Shopping",
            "items": [
              {
                "pl": "spódnica",
                "en": "skirt"
              },
              {
                "pl": "bluzka",
                "en": "blouse (formal)"
              },
              {
                "pl": "podkoszulek",
                "en": "T-shirt"
              },
              {
                "pl": "kapelusz",
                "en": "hat (not a cap)"
              },
              {
                "pl": "buty",
                "en": "shoes"
              },
              {
                "pl": "spodnie",
                "en": "pants"
              },
              {
                "pl": "piwo",
                "en": "beer"
              }
            ]
          }
        ]
      }
    },
    {
      "number": 6,
      "title": "Co jest zielone?",
      "subtitle": "What is green?",
      "sections": {
        "grammar": [
          "<div class=\"panel full\"><h3>Combining shade + color</h3>\n<p><b>dark purple</b> = ciemny + fioletowy → <b>ciemnofioletowy</b> &nbsp;&nbsp; <b>light blue</b> = jasny + niebieski → <b>jasnoniebieski</b></p>\n<p class=\"note\">Rule: drop the -y ending of the shade word and fuse it directly onto the color word.</p>\n</div>",
          "<div class=\"panel\"><h3>Nominative — noun endings</h3>\n<div class=\"tblwrap\"><table><tr><th>Gender</th><th>Typical ending</th><th>Examples</th></tr>\n<tr><td class=\"lbl\">Masc.</td><td class=\"red\">hard consonant</td><td>banan, chleb, ołówek</td></tr>\n<tr><td class=\"lbl\">Masc.</td><td class=\"red\">male-related</td><td>tata, pan, poeta</td></tr>\n<tr><td class=\"lbl\">Fem.</td><td class=\"red\">-a</td><td>pizza, gumka, kapusta</td></tr>\n<tr><td class=\"lbl\">Fem.</td><td class=\"red\">female-related</td><td>mama, pani, studentka</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td class=\"red\">-o</td><td>okno, mleko, krzesło</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td class=\"red\">-um, -e, -ę</td><td>muzeum, mieszkanie, imię</td></tr></table></div>\n</div>",
          "<div class=\"panel\"><h3>Nominative — adjective endings</h3>\n<div class=\"tblwrap\"><table><tr><th>Gender</th><th>Ending</th><th>Examples</th></tr>\n<tr><td class=\"lbl\">Masc.</td><td class=\"red\">-y</td><td>zielony, szary, biały</td></tr>\n<tr><td class=\"lbl\">Masc.</td><td class=\"red\">-k,-g → i</td><td>niebieski, drogi, <span class=\"red\">tani</span></td></tr>\n<tr><td class=\"lbl\">Fem.</td><td class=\"red\">-a</td><td>zielona, szara, <span class=\"red\">tania</span></td></tr>\n<tr><td class=\"lbl\">Neut.</td><td class=\"red\">-e</td><td>zielone, szare, białe</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td class=\"red\">-k,-g → ie</td><td>niebieskie, drogie, <span class=\"red\">tanie</span></td></tr></table></div>\n<p class=\"note\">drogi = expensive · tani = cheap</p>\n</div>",
          "<div class=\"panel full\"><h3>Three places you meet the nominative</h3>\n<p><b>① Subject of a sentence:</b> Kto ma 8 lat? — <span class=\"red\">David ma 8 lat.</span> / Co kosztuje 10 złotych? — <span class=\"red\">Pasek kosztuje 10 złotych.</span></p>\n<p><b>② After \"to jest\", introducing something:</b> Kto to jest? — <span class=\"red\">To jest mama.</span> / Co to jest? — <span class=\"red\">To jest kapelusz.</span></p>\n<p><b>③ być + adjective only:</b> Kto jest wysoki? — <span class=\"red\">On jest wysoki.</span> / Co jest zielone? — <span class=\"red\">Sweter jest zielony.</span></p>\n<p class=\"note\">Careful: if być is followed by BOTH an adjective and a noun, both switch to the instrumental case instead (Lessons 8–9) — e.g. <i>On jest wysokim studentem</i> vs. plain <i>To jest zielony sweter</i> (adj.+noun after \"to jest\" stay nominative).</p>\n</div>"
        ],
        "vocab": [
          {
            "category": "Core words",
            "items": [
              {
                "pl": "zielone",
                "en": "green (neut.)"
              }
            ]
          },
          {
            "category": "Clothing",
            "items": [
              {
                "pl": "kurtka",
                "en": "jacket",
                "g": "fem."
              },
              {
                "pl": "płaszcz",
                "en": "coat",
                "g": "masc."
              },
              {
                "pl": "kapelusz",
                "en": "hat",
                "g": "masc."
              },
              {
                "pl": "sweter",
                "en": "sweater",
                "g": "masc."
              },
              {
                "pl": "dżinsy",
                "en": "jeans",
                "g": "pl."
              },
              {
                "pl": "koszula",
                "en": "shirt",
                "g": "fem."
              },
              {
                "pl": "spodnie",
                "en": "pants",
                "g": "pl."
              },
              {
                "pl": "sukienka",
                "en": "dress",
                "g": "fem."
              },
              {
                "pl": "dres",
                "en": "tracksuit",
                "g": "masc."
              },
              {
                "pl": "kamizelka",
                "en": "vest",
                "g": "fem."
              }
            ]
          },
          {
            "category": "Clothing parts & accessories",
            "items": [
              {
                "pl": "kieszeń",
                "en": "pocket",
                "g": "fem."
              },
              {
                "pl": "guzik",
                "en": "button",
                "g": "masc."
              },
              {
                "pl": "rękaw",
                "en": "sleeve",
                "g": "masc."
              },
              {
                "pl": "kołnierzyk",
                "en": "collar",
                "g": "masc."
              },
              {
                "pl": "bielizna",
                "en": "underwear",
                "g": "fem."
              },
              {
                "pl": "pasek",
                "en": "belt",
                "g": "masc."
              },
              {
                "pl": "adidasy",
                "en": "sneakers",
                "g": "pl."
              },
              {
                "pl": "buty",
                "en": "shoes",
                "g": "pl."
              },
              {
                "pl": "skarpetki",
                "en": "socks",
                "g": "pl."
              },
              {
                "pl": "szalik",
                "en": "scarf",
                "g": "masc."
              }
            ]
          },
          {
            "category": "Colors",
            "items": [
              {
                "pl": "czarny",
                "en": "black"
              },
              {
                "pl": "czerwony",
                "en": "red"
              },
              {
                "pl": "fioletowy",
                "en": "purple"
              },
              {
                "pl": "brązowy",
                "en": "brown"
              },
              {
                "pl": "biały",
                "en": "white"
              },
              {
                "pl": "jasny",
                "en": "light"
              },
              {
                "pl": "ciemny",
                "en": "dark"
              },
              {
                "pl": "beżowy",
                "en": "beige"
              },
              {
                "pl": "różowy",
                "en": "pink"
              },
              {
                "pl": "niebieski",
                "en": "blue"
              },
              {
                "pl": "żółty",
                "en": "yellow"
              },
              {
                "pl": "zielony",
                "en": "green"
              },
              {
                "pl": "szary",
                "en": "gray"
              },
              {
                "pl": "pomarańczowy",
                "en": "orange"
              }
            ]
          }
        ]
      }
    },
    {
      "number": 7,
      "title": "Jaki jest ten student?",
      "subtitle": "What is this student like?",
      "sections": {
        "grammar": [
          "<div class=\"panel full\"><h3>Adjective agreement by gender</h3>\n<div class=\"tblwrap\"><table><tr><th>Adjective</th><th>Masculine</th><th>Feminine</th><th>Neuter</th></tr>\n<tr><td class=\"lbl\">miły(a,e) — kind</td><td>miły student</td><td>miła studentka</td><td>miłe dziecko</td></tr>\n<tr><td class=\"lbl\">wysoki(a,ie) — tall</td><td>wysoki mężczyzna</td><td>wysoka kobieta</td><td>wysokie zwierzę</td></tr>\n<tr><td class=\"lbl\">stary(a,e) — old</td><td>stary nauczyciel</td><td>stara nauczycielka</td><td>stare muzeum</td></tr></table></div>\n<p class=\"note\">One way to make a profession feminine: add <span class=\"red\">-ka</span> to the masculine noun — student → student<span class=\"red\">ka</span></p>\n</div>",
          "<div class=\"panel full\"><h3>Jaki / Jaka / Jakie — asking \"what is … like?\"</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Masc. — Jaki</th><th>Fem. — Jaka</th><th>Neut. — Jakie</th></tr>\n<tr><td class=\"lbl\">Question</td><td>Jaki jest ten student?</td><td>Jaka jest ta studentka?</td><td>Jakie jest to dziecko?</td></tr>\n<tr><td class=\"lbl\">Answer</td><td>Ten student jest <span class=\"red\">wysoki</span>.</td><td>Ta studentka jest <span class=\"red\">ładna</span>.</td><td>To dziecko jest <span class=\"red\">wesołe</span>.</td></tr></table></div>\n<p>Patterns: Jestem… wysoki/wysoka; smutny/smutna… · Jesteś… przystojny/ładna; zmęczony/zmęczona…</p>\n<p><span class=\"red\">Jestem chory / chora.</span> <span class=\"en\">(I am sick.)</span> &nbsp; <span class=\"red\">Na zdrowie!</span> <span class=\"en\">(Cheers! / To your health!)</span></p>\n</div>"
        ],
        "vocab": [
          {
            "category": "Core words",
            "items": [
              {
                "pl": "jaki / jaka / jakie",
                "en": "what kind of"
              },
              {
                "pl": "student / studentka",
                "en": "student (m./f.)"
              }
            ]
          },
          {
            "category": "Appearance",
            "items": [
              {
                "pl": "wysoki",
                "en": "tall"
              },
              {
                "pl": "niski",
                "en": "short"
              },
              {
                "pl": "gruby",
                "en": "fat / plump"
              },
              {
                "pl": "szczupły",
                "en": "slim"
              },
              {
                "pl": "ładny (a)",
                "en": "pretty"
              },
              {
                "pl": "przystojny",
                "en": "handsome"
              },
              {
                "pl": "brzydki",
                "en": "ugly"
              },
              {
                "pl": "młody / nowy",
                "en": "young / new"
              },
              {
                "pl": "stary",
                "en": "old"
              },
              {
                "pl": "wysportowany",
                "en": "athletic"
              }
            ]
          },
          {
            "category": "Personality & state",
            "items": [
              {
                "pl": "miły",
                "en": "nice / kind"
              },
              {
                "pl": "wesoły",
                "en": "cheerful"
              },
              {
                "pl": "smutny",
                "en": "sad"
              },
              {
                "pl": "chory",
                "en": "sick"
              },
              {
                "pl": "zdrowy",
                "en": "healthy"
              },
              {
                "pl": "zmęczony",
                "en": "tired"
              },
              {
                "pl": "sympatyczny",
                "en": "nice / sympathetic"
              },
              {
                "pl": "zły",
                "en": "angry"
              },
              {
                "pl": "leniwy",
                "en": "lazy"
              },
              {
                "pl": "pracowity",
                "en": "hardworking"
              }
            ]
          },
          {
            "category": "Phrases",
            "items": [
              {
                "pl": "Na zdrowie!",
                "en": "Cheers! / To your health!"
              }
            ]
          }
        ]
      }
    },
    {
      "number": 8,
      "title": "Kim jesteś?",
      "subtitle": "What are you (by profession)?",
      "sections": {
        "grammar": [
          "<div class=\"panel\"><h3>być — to be (review)</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th></th><th>Plural</th><th></th></tr>\n<tr><td class=\"lbl\">ja</td><td>jest<span class=\"red\">em</span></td><td class=\"lbl\">my</td><td>jest<span class=\"red\">eśmy</span></td><td></td></tr>\n<tr><td class=\"lbl\">ty</td><td>jest<span class=\"red\">eś</span></td><td class=\"lbl\">wy</td><td>jest<span class=\"red\">eście</span></td><td></td></tr>\n<tr><td class=\"lbl\">on/ona/ono</td><td>jest</td><td class=\"lbl\">oni/one</td><td class=\"red\">są</td><td></td></tr></table></div>\n</div>",
          "<div class=\"panel\"><h3>Possessive adjectives — \"my/your/our…\"</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>ja</th><th>ty</th><th>on/ono</th><th>ona</th></tr>\n<tr><td class=\"lbl\">Masc.</td><td>mój</td><td>twój</td><td>jego</td><td>jej</td></tr>\n<tr><td class=\"lbl\">Fem.</td><td>moja</td><td>twoja</td><td>jego</td><td>jej</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td>moje</td><td>twoje</td><td>jego</td><td>jej</td></tr></table></div>\n<div class=\"tblwrap\"><table><tr><th></th><th>my</th><th>wy</th><th>oni/one</th></tr>\n<tr><td class=\"lbl\">Masc.</td><td>nasz</td><td>wasz</td><td>ich</td></tr>\n<tr><td class=\"lbl\">Fem.</td><td>nasza</td><td>wasza</td><td>ich</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td>nasze</td><td>wasze</td><td>ich</td></tr></table></div>\n<p class=\"note\">mój tata = my dad · nasz samochód = our car · To jest jego matka. = This is his mother.</p>\n</div>",
          "<div class=\"panel\"><h3>Profession pairs — male ↔ female</h3>\n<div class=\"tblwrap\"><table><tr><th>Pattern</th><th>Male</th><th>Female</th></tr>\n<tr><td>+ka</td><td>student</td><td>student<span class=\"red\">ka</span></td></tr>\n<tr><td>+ka</td><td>nauczyciel</td><td>nauczyciel<span class=\"red\">ka</span></td></tr>\n<tr><td>+ka</td><td>aktor</td><td>aktor<span class=\"red\">ka</span></td></tr>\n<tr><td>+ka</td><td>kelner</td><td>kelner<span class=\"red\">ka</span></td></tr>\n<tr><td>rz→rka</td><td>lekarz</td><td>leka<span class=\"red\">rka</span></td></tr>\n<tr><td>rz→rka</td><td>dziennikarz</td><td>dziennika<span class=\"red\">rka</span></td></tr>\n<tr><td>rz→rka</td><td>kucharz</td><td>kucha<span class=\"red\">rka</span></td></tr>\n<tr><td>a→ka</td><td>poeta</td><td>poet<span class=\"red\">ka</span></td></tr>\n<tr><td>a→ka</td><td>artysta</td><td>artyst<span class=\"red\">ka</span></td></tr>\n<tr><td>a→ka</td><td>dentysta</td><td>dentyst<span class=\"red\">ka</span></td></tr></table></div>\n<p class=\"note\">Some professions are gender-neutral (prezydent, muzyk, profesor, kierowca, fotograf, inżynier) — add <b>pani</b> to specify: pani inżynier (female engineer).</p>\n</div>",
          "<div class=\"panel full\"><h3>Narzędnik — instrumental case (kto → kim)</h3>\n<div class=\"tblwrap\"><table><tr><th>Gender</th><th>Nominative</th><th>Instrumental</th><th>Example</th></tr>\n<tr><td class=\"lbl\">Masc.</td><td>hard consonant</td><td class=\"red\">-em</td><td>To jest student. → On jest studentem.</td></tr>\n<tr><td class=\"lbl\">Masc.</td><td>k, g</td><td class=\"red\">-iem</td><td>To jest prawnik. → On jest prawnikiem.</td></tr>\n<tr><td class=\"lbl\">Masc. (-a)</td><td>-a ending</td><td class=\"red\">-ą</td><td>To jest poeta. → On jest poetą.</td></tr>\n<tr><td class=\"lbl\">Fem.</td><td>-a</td><td class=\"red\">-ą</td><td>To jest studentka. → Ona jest studentką.</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td>-o</td><td class=\"red\">(same as masc.)</td><td>To jest dziecko. → Ono jest dzieckiem.</td></tr></table></div>\n<p class=\"note\">When być is followed by a noun naming what the subject IS (profession, nationality, role), that noun takes the instrumental case, not the nominative.</p>\n<p><b>Ask:</b> Kim jesteś? / Kim jesteś z zawodu? (specifically your profession) — <b>Answer:</b> <span class=\"red\">Jestem nauczycielem / nauczycielką.</span> (I am a teacher.) Also works with nationality/gender: Jestem Chinką. Jestem mężczyzną.</p>\n</div>"
        ],
        "vocab": [
          {
            "category": "Core words",
            "items": [
              {
                "pl": "kim",
                "en": "who/what (instrumental)"
              },
              {
                "pl": "jesteś",
                "en": "(you) are"
              },
              {
                "pl": "z zawodu",
                "en": "by profession"
              },
              {
                "pl": "prawnik",
                "en": "lawyer"
              }
            ]
          },
          {
            "category": "Professions (pairs)",
            "items": [
              {
                "pl": "student / studentka",
                "en": "student"
              },
              {
                "pl": "nauczyciel / nauczycielka",
                "en": "teacher"
              },
              {
                "pl": "aktor / aktorka",
                "en": "actor"
              },
              {
                "pl": "kelner / kelnerka",
                "en": "waiter"
              },
              {
                "pl": "lekarz / lekarka",
                "en": "doctor"
              },
              {
                "pl": "dziennikarz / dziennikarka",
                "en": "journalist"
              },
              {
                "pl": "kucharz / kucharka",
                "en": "cook"
              },
              {
                "pl": "poeta / poetka",
                "en": "poet"
              },
              {
                "pl": "artysta / artystka",
                "en": "artist"
              },
              {
                "pl": "dentysta / dentystka",
                "en": "dentist"
              }
            ]
          },
          {
            "category": "Professions (gender-neutral)",
            "items": [
              {
                "pl": "prezydent",
                "en": "president"
              },
              {
                "pl": "muzyk",
                "en": "musician"
              },
              {
                "pl": "profesor",
                "en": "professor"
              },
              {
                "pl": "kierowca",
                "en": "driver"
              },
              {
                "pl": "fotograf",
                "en": "photographer"
              },
              {
                "pl": "inżynier",
                "en": "engineer"
              }
            ]
          }
        ]
      }
    },
    {
      "number": 9,
      "title": "Z kim mieszkasz?",
      "subtitle": "Who do you live with?",
      "sections": {
        "grammar": [
          "<div class=\"panel\"><h3>mieszkać — to live</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th></th><th>Plural</th><th></th></tr>\n<tr><td class=\"lbl\">ja</td><td>mieszk<span class=\"red\">am</span></td><td class=\"lbl\">my</td><td>mieszk<span class=\"red\">amy</span></td><td></td></tr>\n<tr><td class=\"lbl\">ty</td><td>mieszk<span class=\"red\">asz</span></td><td class=\"lbl\">wy</td><td>mieszk<span class=\"red\">acie</span></td><td></td></tr>\n<tr><td class=\"lbl\">on/ona/ono</td><td>mieszka</td><td class=\"lbl\">oni/one</td><td>mieszk<span class=\"red\">ają</span></td><td></td></tr></table></div>\n</div>",
          "<div class=\"panel\"><h3>iść — to walk / go (on foot)</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th></th><th>Plural</th><th></th></tr>\n<tr><td class=\"lbl\">ja</td><td>id<span class=\"red\">ę</span></td><td class=\"lbl\">my</td><td>idzie<span class=\"red\">my</span></td><td></td></tr>\n<tr><td class=\"lbl\">ty</td><td>idzie<span class=\"red\">sz</span></td><td class=\"lbl\">wy</td><td>idzie<span class=\"red\">cie</span></td><td></td></tr>\n<tr><td class=\"lbl\">on/ona/ono</td><td>idzie</td><td class=\"lbl\">oni/one</td><td>id<span class=\"red\">ą</span></td><td></td></tr></table></div>\n<p class=\"note\">iść na spacer = to go for a walk</p>\n</div>",
          "<div class=\"panel\"><h3>jechać — to go (by vehicle)</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th></th><th>Plural</th><th></th></tr>\n<tr><td class=\"lbl\">ja</td><td>j<span class=\"red\">adę</span></td><td class=\"lbl\">my</td><td>j<span class=\"red\">edziemy</span></td><td></td></tr>\n<tr><td class=\"lbl\">ty</td><td>j<span class=\"red\">edziesz</span></td><td class=\"lbl\">wy</td><td>j<span class=\"red\">edziecie</span></td><td></td></tr>\n<tr><td class=\"lbl\">on/ona/ono</td><td>j<span class=\"red\">edzie</span></td><td class=\"lbl\">oni/one</td><td>j<span class=\"red\">adą</span></td><td></td></tr></table></div>\n<p class=\"note\">Kto → Kim, Co → Czym · pociąg = train · auto/samochód = car</p>\n<div class=\"ex\">Czym jedziesz do Warszawy? <span class=\"en\">(How are you getting to Warsaw?)</span><br><span class=\"red\">Jadę do Warszawy pociągiem.</span> <span class=\"en\">(I'm going by train.)</span></div>\n</div>",
          "<div class=\"panel\"><h3>Instrumental pronouns — \"with me/you…\"</h3>\n<div class=\"tblwrap\"><table><tr><th>ja</th><th>ty</th><th>on/ono</th><th>ona</th></tr>\n<tr><td class=\"red\">ze mną</td><td class=\"red\">z tobą</td><td class=\"red\">z nim</td><td class=\"red\">z nią</td></tr></table></div>\n<div class=\"tblwrap\"><table><tr><th>my</th><th>wy</th><th>oni/one</th></tr>\n<tr><td class=\"red\">z nami</td><td class=\"red\">z wami</td><td class=\"red\">z nimi</td></tr></table></div>\n</div>",
          "<div class=\"panel full\"><h3>Possessives in the instrumental</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Masc. (nom.→instr.)</th><th>Fem. (nom.→instr.)</th><th>Neut. (nom.→instr.)</th></tr>\n<tr><td class=\"lbl\">ja</td><td>mój → <span class=\"red\">moim</span></td><td>moja → <span class=\"red\">moją</span></td><td>moje → <span class=\"red\">moim</span></td></tr>\n<tr><td class=\"lbl\">ty</td><td>twój → <span class=\"red\">twoim</span></td><td>twoja → <span class=\"red\">twoją</span></td><td>twoje → <span class=\"red\">twoim</span></td></tr>\n<tr><td class=\"lbl\">my</td><td>nasz → <span class=\"red\">naszym</span></td><td>nasza → <span class=\"red\">naszą</span></td><td>nasze → <span class=\"red\">naszym</span></td></tr>\n<tr><td class=\"lbl\">wy</td><td>wasz → <span class=\"red\">waszym</span></td><td>wasza → <span class=\"red\">waszą</span></td><td>wasze → <span class=\"red\">waszym</span></td></tr>\n<tr><td class=\"lbl\">on/ona/oni…</td><td colspan=\"3\">jego / jej / ich — unchanged in every gender</td></tr></table></div>\n<p><span class=\"red\">Idę na spacer z moim bratem.</span> <span class=\"en\">(I'm going for a walk with my brother.)</span> — mój mąż → <span class=\"red\">z moim mężem</span></p>\n</div>",
          "<div class=\"panel full\"><h3>Reading &amp; conversation — composed answers</h3>\n<p style=\"font-size:13px\">Nazywam się Anna Nowicka. Jestem Polką i mam 26 lat. Jestem dziennikarką. Mój brat Piotr ma 30 lat i jest dobrym nauczycielem. On mieszka z żoną w Warszawie, ona ma na imię Hanna, jest ładną kobietą i ma 32 lata. Dzisiaj jadę do Warszawy pociągiem, bardzo się cieszę i wieczorem idziemy na spacer.</p>\n<p class=\"note\"><b>się cieszę</b> = \"I'm happy/glad\" — cieszyć się is reflexive (lit. \"to delight oneself\"), so się is a required part of the verb, not optional.</p>\n<div class=\"tblwrap\"><table><tr><th>Question</th><th>Answer</th></tr>\n<tr><td>Kim jest Anna?</td><td class=\"red\">Jest dziennikarką.</td></tr>\n<tr><td>Ile lat ma Piotr?</td><td class=\"red\">Ma 30 lat.</td></tr>\n<tr><td>Czym Anna jedzie do Warszawy?</td><td class=\"red\">Jedzie pociągiem.</td></tr>\n<tr><td>Z kim Hanna mieszka?</td><td class=\"red\">Mieszka z mężem (z Piotrem).</td></tr>\n<tr><td>Kto idzie na spacer wieczorem?</td><td class=\"red\">Anna z Piotrem i Hanną.</td></tr></table></div>\n<p class=\"note\">These 5 answers were not shown in the source video — composed to fit the passage.</p>\n</div>"
        ],
        "vocab": [
          {
            "category": "Core words",
            "items": [
              {
                "pl": "z",
                "en": "with / and"
              },
              {
                "pl": "kim",
                "en": "whom (instrumental)"
              },
              {
                "pl": "mieszkasz",
                "en": "(you) live"
              }
            ]
          },
          {
            "category": "Family",
            "items": [
              {
                "pl": "matka",
                "en": "mother",
                "g": "+ mój/moja"
              },
              {
                "pl": "ojciec",
                "en": "father"
              },
              {
                "pl": "babcia",
                "en": "grandmother"
              },
              {
                "pl": "dziadek",
                "en": "grandfather"
              },
              {
                "pl": "siostra",
                "en": "sister"
              },
              {
                "pl": "brat",
                "en": "brother"
              },
              {
                "pl": "ciocia",
                "en": "aunt"
              },
              {
                "pl": "wujek",
                "en": "uncle"
              },
              {
                "pl": "żona",
                "en": "wife"
              },
              {
                "pl": "mąż",
                "en": "husband"
              },
              {
                "pl": "córka",
                "en": "daughter"
              },
              {
                "pl": "syn",
                "en": "son"
              }
            ]
          },
          {
            "category": "Verbs",
            "items": [
              {
                "pl": "mieszkać",
                "en": "to live"
              },
              {
                "pl": "iść",
                "en": "to walk / go (on foot)"
              },
              {
                "pl": "jechać",
                "en": "to go (by vehicle)"
              }
            ]
          },
          {
            "category": "Travel & phrases",
            "items": [
              {
                "pl": "na spacer",
                "en": "for a walk"
              },
              {
                "pl": "pociąg",
                "en": "train"
              },
              {
                "pl": "auto / samochód",
                "en": "car"
              }
            ]
          }
        ]
      }
    },
    {
      "number": 10,
      "title": "Proszę iść prosto.",
      "subtitle": "Please go straight.",
      "sections": {
        "grammar": [
          "<div class=\"panel\"><h3>Direction words (方位词)</h3>\n<div class=\"tblwrap\"><table><tr><th>Polish</th><th>English</th></tr>\n<tr><td>prosto</td><td>straight</td></tr>\n<tr><td>iść prosto</td><td>to go straight</td></tr>\n<tr><td>skręcić / iść w lewo</td><td>turn left / go left</td></tr>\n<tr><td>skręcić / iść w prawo</td><td>turn right / go right</td></tr>\n<tr><td>na lewo</td><td>on the left</td></tr>\n<tr><td>na prawo</td><td>on the right</td></tr></table></div>\n<p class=\"note\">w lewo/w prawo = the direction of motion (turning) · na lewo/na prawo = the resulting location (\"is on the left/right\")</p>\n</div>",
          "<div class=\"panel\"><h3>Proszę — usage 1: giving directions</h3>\n<p class=\"note\"><b>Proszę + verb (infinitive)</b> — polite way to instruct someone, used for giving directions</p>\n<div class=\"ex\">Gdzie jest Bank? <span class=\"en\">(Where is the Bank?)</span><br><span class=\"red\">Proszę iść prosto, bank jest na lewo.</span><br>Gdzie jest Hotel?<br><span class=\"red\">Proszę jechać prosto, hotel jest na prawo.</span><br>Gdzie jest Sklep?<br><span class=\"red\">Proszę iść prosto, a potem skręcić w lewo, sklep jest na prawo.</span></div>\n<p class=\"note\">a potem = and then</p>\n</div>",
          "<div class=\"panel\"><h3>Proszę — usage 2: ordering (Proszę + accusative noun)</h3>\n<p class=\"note\"><b>Proszę / Poproszę + noun (biernik, accusative)</b> — used to order or request something</p>\n<div class=\"ex\"><span class=\"red\">Poproszę kawę.</span> <span class=\"en\">(I'd like a coffee, please.)</span></div>\n<p class=\"note\">宾格(biernik)为名词第四格，在句中作宾语，即动作的直接作用对象。</p>\n</div>",
          "<div class=\"panel full\"><h3>Noun accusative (biernik) endings</h3>\n<div class=\"tblwrap\"><table><tr><th>Gender</th><th>Nominative</th><th>Accusative</th><th>Nom. example</th><th>Acc. example</th></tr>\n<tr><td class=\"lbl\">Masc. inanimate</td><td>hard consonant</td><td class=\"red\">unchanged</td><td>dom (house)</td><td>dom</td></tr>\n<tr><td class=\"lbl\">Masc. animate</td><td>hard consonant</td><td class=\"red\">+a</td><td>brat (brother)</td><td>brata</td></tr>\n<tr><td class=\"lbl\">Masc. -a ending</td><td>-a</td><td class=\"red\">-ę</td><td>tata (dad)</td><td>tatę</td></tr>\n<tr><td class=\"lbl\">Fem.</td><td>-a</td><td class=\"red\">-ę</td><td>siostra (sister)</td><td>siostrę</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td>-o</td><td class=\"red\">unchanged</td><td>auto (car)</td><td>auto</td></tr></table></div>\n<p class=\"note\">\"Animate\" masc. nouns = living things (people, animals, plants incl. fruit/veg) and some personified objects (car brands, cigarettes: papieros → papierosa). Neuter and \"inanimate\" masc. nouns keep the nominative form.</p>\n</div>",
          "<div class=\"panel full\"><h3>Ordering with z + instrumental (\"with…\")</h3>\n<div class=\"tblwrap\"><table><tr><th>Gender</th><th>Accusative</th><th>Instrumental</th></tr>\n<tr><td class=\"lbl\">Masc. hard cons.</td><td>unchanged</td><td class=\"red\">-em (k,g → -iem)</td></tr>\n<tr><td class=\"lbl\">Masc./Neut. -a,-o</td><td>-ę / unchanged</td><td class=\"red\">-ą</td></tr>\n<tr><td class=\"lbl\">Fem. -a</td><td>-ę</td><td class=\"red\">-ą</td></tr></table></div>\n<div class=\"ex\">herbata + cukier → <span class=\"red\">Proszę herbatę z cukrem.</span> <span class=\"en\">(Tea with sugar, please.)</span><br>kawa + mleko → <span class=\"red\">Proszę kawę z mlekiem.</span><br>pepsi + lód → <span class=\"red\">Proszę pepsi z lodem.</span><br>mięso + sos → <span class=\"red\">Proszę mięso z sosem.</span></div>\n<p class=\"note\">Pattern: [thing ordered, accusative] + z + [added item, instrumental]. Example: <i>Piszę długopisem.</i> (I write with a pen.) — długopis takes -em because it's the instrumental \"tool\" of the verb pisać.</p>\n</div>",
          "<div class=\"panel full\"><h3>Why cases exist — the quick idea</h3>\n<p>A case ending shows what role the noun plays in the sentence, so the ending alone carries meaning that other languages need extra words for.</p>\n<p>「你怎么去华沙？」 Chinese needs <i>坐火车去的</i> — just 「火车」 sounds wrong. Polish answers with one word: <span class=\"red\">Pociągiem.</span> The instrumental ending already says \"by means of a train\".</p>\n<p class=\"note\">Same for the accusative: it marks the thing an action is done to, so the ending itself tells you the noun is the object.</p>\n</div>"
        ],
        "vocab": [
          {
            "category": "Core words",
            "items": [
              {
                "pl": "proszę",
                "en": "please / here you are"
              },
              {
                "pl": "prosto",
                "en": "straight"
              },
              {
                "pl": "gdzie",
                "en": "where"
              },
              {
                "pl": "a potem",
                "en": "and then"
              }
            ]
          },
          {
            "category": "Directions",
            "items": [
              {
                "pl": "na lewo",
                "en": "on the left"
              },
              {
                "pl": "na prawo",
                "en": "on the right"
              },
              {
                "pl": "w lewo",
                "en": "to the left (turning)"
              },
              {
                "pl": "w prawo",
                "en": "to the right (turning)"
              },
              {
                "pl": "skręcić",
                "en": "to turn"
              }
            ]
          },
          {
            "category": "Places",
            "items": [
              {
                "pl": "sklep",
                "en": "shop"
              },
              {
                "pl": "poczta",
                "en": "post office"
              },
              {
                "pl": "bank",
                "en": "bank"
              },
              {
                "pl": "hotel",
                "en": "hotel"
              }
            ]
          },
          {
            "category": "Food & drink (ordering)",
            "items": [
              {
                "pl": "herbata",
                "en": "tea"
              },
              {
                "pl": "kawa",
                "en": "coffee"
              },
              {
                "pl": "mleko",
                "en": "milk"
              },
              {
                "pl": "cukier",
                "en": "sugar"
              },
              {
                "pl": "lód",
                "en": "ice"
              },
              {
                "pl": "mięso",
                "en": "meat"
              },
              {
                "pl": "sos",
                "en": "sauce"
              },
              {
                "pl": "długopis",
                "en": "pen"
              }
            ]
          }
        ]
      }
    },
    {
      "number": 11,
      "title": "Co lubisz?",
      "subtitle": "What do you like?",
      "sections": {
        "grammar": [
          "<div class=\"panel full\"><h3>Accusative (biernik) — nouns &amp; adjectives</h3>\n<div class=\"tblwrap\"><table><tr><th>Gender</th><th>Nom. noun</th><th>Acc. noun</th><th>Nom. adj.</th><th>Acc. adj.</th></tr>\n<tr><td class=\"lbl\">Masc. inanimate</td><td>hard consonant</td><td>unchanged</td><td>-y, -i</td><td class=\"red\">unchanged</td></tr>\n<tr><td class=\"lbl\">Masc. animate</td><td>hard consonant</td><td class=\"red\">+a</td><td>-y, -i</td><td class=\"red\">-ego (k, g → -iego)</td></tr>\n<tr><td class=\"lbl\">Masc. -a ending</td><td>-a</td><td class=\"red\">-ę</td><td>-y, -i</td><td class=\"red\">-ego (k, g → -iego)</td></tr>\n<tr><td class=\"lbl\">Fem.</td><td>-a</td><td class=\"red\">-ę</td><td>-a</td><td class=\"red\">-ą</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td>-o</td><td>unchanged</td><td>-e</td><td class=\"red\">unchanged</td></tr></table></div>\n<p><b>Masc.:</b> dobry dom → dobry dom · wysoki brat → wysok<span class=\"red\">iego</span> brat<span class=\"red\">a</span> · smutny tata → smutn<span class=\"red\">ego</span> tat<span class=\"red\">ę</span><br>\n<b>Fem.:</b> ładna ciocia → ładn<span class=\"red\">ą</span> cioci<span class=\"red\">ę</span> &nbsp;·&nbsp; <b>Neut.:</b> nowe auto → nowe auto · dobre dziecko → dobr<span class=\"red\">ego</span> dzie<span class=\"red\">ciaka</span></p>\n<p class=\"note\">The adjective copies the noun's gender and animacy. Note the last example switches to <b>dzieciak</b> (colloquial masc. for \"kid\"), which is why it takes the animate masculine ending — plain neuter <i>dziecko</i> would stay <i>dobre dziecko</i>.</p>\n</div>",
          "<div class=\"panel\"><h3>lubić — to like</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th></th><th>Plural</th><th></th></tr>\n<tr><td class=\"lbl\">ja</td><td>lubi<span class=\"red\">ę</span></td><td class=\"lbl\">my</td><td>lubi<span class=\"red\">my</span></td><td></td></tr>\n<tr><td class=\"lbl\">ty</td><td>lubi<span class=\"red\">sz</span></td><td class=\"lbl\">wy</td><td>lubi<span class=\"red\">cie</span></td><td></td></tr>\n<tr><td class=\"lbl\">on/ona/ono</td><td>lubi</td><td class=\"lbl\">oni/one</td><td>lubi<span class=\"red\">ą</span></td><td></td></tr></table></div>\n<p class=\"note\">lubić + noun in the <b>accusative</b></p>\n<div class=\"ex\">Co lubisz? — <span class=\"red\">Lubię nowy dom.</span><br>Co on/ona lubi? — <span class=\"red\">On/Ona lubi czarnego kota.</span> <span class=\"en\">(czarny kot = black cat)</span><br>Co lubicie? — <span class=\"red\">Lubimy kawę z mlekiem.</span><br><span class=\"red\">Ja lubię kawę z mlekiem, a ona lubi czarną herbatę z cytryną.</span></div>\n</div>",
          "<div class=\"panel\"><h3>Kogo lubisz? — possessives in the accusative</h3>\n<p class=\"note\">Kto → accusative <b>Kogo</b> (whom)</p>\n<div class=\"tblwrap\"><table><tr><th></th><th>ja</th><th>ty</th><th>on/ono</th><th>ona</th></tr>\n<tr><td class=\"lbl\">Masc. anim.</td><td>mój → <span class=\"red\">mojego</span></td><td>twój → <span class=\"red\">twojego</span></td><td>jego</td><td>jej</td></tr>\n<tr><td class=\"lbl\">Fem.</td><td>moja → <span class=\"red\">moją</span></td><td>twoja → <span class=\"red\">twoją</span></td><td>jego</td><td>jej</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td>moje</td><td>twoje</td><td>jego</td><td>jej</td></tr></table></div>\n<div class=\"tblwrap\"><table><tr><th></th><th>my</th><th>wy</th><th>oni/one</th></tr>\n<tr><td class=\"lbl\">Masc. anim.</td><td>nasz → <span class=\"red\">naszego</span></td><td>wasz → <span class=\"red\">waszego</span></td><td>ich</td></tr>\n<tr><td class=\"lbl\">Fem.</td><td>nasza → <span class=\"red\">naszą</span></td><td>wasza → <span class=\"red\">waszą</span></td><td>ich</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td>nasze</td><td>wasze</td><td>ich</td></tr></table></div>\n<p class=\"note\">Neuter (and inanimate masc.) possessives keep the nominative form: moje / twoje / nasze / wasze. jego, jej, ich never change.</p>\n<div class=\"ex\"><span class=\"red\">Lubię twoją siostrę.</span> <span class=\"en\">(I like your sister.)</span><br><span class=\"red\">Ona lubi naszego brata.</span><br>Wasz syn jest bardzo przystojny. — <span class=\"red\">Dziękuję, bo on ma przystojnego ojca.</span> <span class=\"en\">(ojciec → ojca)</span></div>\n</div>",
          "<div class=\"panel full\"><h3>interesować się — to be interested in (+ instrumental)</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Sing.</th><th></th><th>Plural</th><th></th></tr>\n<tr><td class=\"lbl\">ja</td><td>interesuj<span class=\"red\">ę</span></td><td class=\"lbl\">my</td><td>interesuje<span class=\"red\">my</span></td><td></td></tr>\n<tr><td class=\"lbl\">ty</td><td>interesuje<span class=\"red\">sz</span></td><td class=\"lbl\">wy</td><td>interesuje<span class=\"red\">cie</span></td><td></td></tr>\n<tr><td class=\"lbl\">on/ona/ono</td><td>interesuje</td><td class=\"lbl\">oni/one</td><td>interesuj<span class=\"red\">ą</span></td><td></td></tr></table></div>\n<div class=\"tblwrap\"><table><tr><th>Gender</th><th>Nom. noun</th><th>Instr. noun</th><th>Instr. adj.</th></tr>\n<tr><td class=\"lbl\">Masc.</td><td>hard consonant</td><td class=\"red\">-em (k, g → -iem)</td><td class=\"red\">-ym (k, g → -im)</td></tr>\n<tr><td class=\"lbl\">Masc. -a ending</td><td>-a</td><td class=\"red\">-ą</td><td class=\"red\">-ym (k, g → -im)</td></tr>\n<tr><td class=\"lbl\">Fem.</td><td>-a</td><td class=\"red\">-ą</td><td class=\"red\">-ą</td></tr>\n<tr><td class=\"lbl\">Neut.</td><td>-o</td><td>same as masc.</td><td>same as masc.</td></tr></table></div>\n<div class=\"ex\"><b>Czym się interesujesz?</b> <span class=\"en\">(What are you interested in?)</span> &nbsp;·&nbsp; <b>Kim się interesujesz?</b> <span class=\"en\">(Who are you interested in?)</span></div>\n<p class=\"note\">Contrast: lubić takes the accusative, interesować się takes the instrumental — Lubię jazz. vs. Interesuję się jazzem.</p>\n</div>",
          "<div class=\"panel full\"><h3>Accusative vs. instrumental — side by side</h3>\n<div class=\"tblwrap\"><table><tr><th>Gender</th><th>Nominative</th><th>Accusative (lubić)</th><th>Instrumental (interesować się)</th></tr>\n<tr><td class=\"lbl\">Masc. inanimate</td><td>dobry dom</td><td>dobry dom</td><td>dobr<span class=\"red\">ym</span> dom<span class=\"red\">em</span></td></tr>\n<tr><td class=\"lbl\">Masc. animate</td><td>wysoki brat</td><td>wysok<span class=\"red\">iego</span> brat<span class=\"red\">a</span></td><td>wysok<span class=\"red\">im</span> brat<span class=\"red\">em</span></td></tr>\n<tr><td class=\"lbl\">Masc. -a ending</td><td>smutny tata</td><td>smutn<span class=\"red\">ego</span> tat<span class=\"red\">ę</span></td><td>smutn<span class=\"red\">ym</span> tat<span class=\"red\">ą</span></td></tr>\n<tr><td class=\"lbl\">Fem.</td><td>ładna ciocia</td><td>ładn<span class=\"red\">ą</span> cioci<span class=\"red\">ę</span></td><td>ładn<span class=\"red\">ą</span> cioci<span class=\"red\">ą</span></td></tr>\n<tr><td class=\"lbl\">Neut.</td><td>nowe auto</td><td>nowe auto</td><td>now<span class=\"red\">ym</span> aut<span class=\"red\">em</span></td></tr>\n<tr><td class=\"lbl\">Neut. (colloq.)</td><td>dobre dziecko</td><td>dobr<span class=\"red\">ego</span> dzie<span class=\"red\">ciaka</span></td><td>dobr<span class=\"red\">ym</span> dzie<span class=\"red\">ckiem</span></td></tr></table></div>\n<p class=\"note\">Feminine is the tricky one: the adjective is <b>-ą</b> in both cases, so only the noun ending tells them apart — <b>-ę</b> accusative vs. <b>-ą</b> instrumental.</p>\n</div>",
          "<div class=\"panel full\"><h3>Practice — the same 15 words in both cases</h3>\n<div class=\"tblwrap\"><table><tr><th></th><th>Nominative</th><th>On lubi… (acc.)</th><th>Ona interesuje się… (instr.)</th></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"ogrodnictwo, ogrodnictwem\" aria-label=\"Play ogrodnictwo\">🔊</button></td><td>ogrodnictwo <span class=\"en\">(gardening)</span></td><td>ogrodnictwo</td><td>ogrodnictw<span class=\"red\">em</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"malarstwo, malarstwem\" aria-label=\"Play malarstwo\">🔊</button></td><td>malarstwo <span class=\"en\">(painting)</span></td><td>malarstwo</td><td>malarstw<span class=\"red\">em</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"bilard, bilardem\" aria-label=\"Play bilard\">🔊</button></td><td>bilard <span class=\"en\">(billiards)</span></td><td>bilard</td><td>bilard<span class=\"red\">em</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"koszykówka, koszykówkę, koszykówką\" aria-label=\"Play koszykówka\">🔊</button></td><td>koszykówka <span class=\"en\">(basketball)</span></td><td>koszykówk<span class=\"red\">ę</span></td><td>koszykówk<span class=\"red\">ą</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"archeologia, archeologię, archeologią\" aria-label=\"Play archeologia\">🔊</button></td><td>archeologia <span class=\"en\">(archaeology)</span></td><td>archeologi<span class=\"red\">ę</span></td><td>archeologi<span class=\"red\">ą</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"socjologia, socjologię, socjologią\" aria-label=\"Play socjologia\">🔊</button></td><td>socjologia <span class=\"en\">(sociology)</span></td><td>socjologi<span class=\"red\">ę</span></td><td>socjologi<span class=\"red\">ą</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"boks, boksem\" aria-label=\"Play boks\">🔊</button></td><td>boks <span class=\"en\">(boxing)</span></td><td>boks</td><td>boks<span class=\"red\">em</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"Szekspir, Szekspira, Szekspirem\" aria-label=\"Play Szekspir\">🔊</button></td><td>Szekspir <span class=\"en\">(Shakespeare)</span></td><td>Szekspir<span class=\"red\">a</span></td><td>Szekspir<span class=\"red\">em</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"komunizm, komunizmem\" aria-label=\"Play komunizm\">🔊</button></td><td>komunizm <span class=\"en\">(communism)</span></td><td>komunizm</td><td>komunizm<span class=\"red\">em</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"nurkowanie, nurkowaniem\" aria-label=\"Play nurkowanie\">🔊</button></td><td>nurkowanie <span class=\"en\">(diving)</span></td><td>nurkowanie</td><td>nurkowani<span class=\"red\">em</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"fotografowanie, fotografowaniem\" aria-label=\"Play fotografowanie\">🔊</button></td><td>fotografowanie <span class=\"en\">(photography)</span></td><td>fotografowanie</td><td>fotografowani<span class=\"red\">em</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"Beckett, Becketta, Beckettem\" aria-label=\"Play Beckett\">🔊</button></td><td>Beckett</td><td>Beckett<span class=\"red\">a</span></td><td>Beckett<span class=\"red\">em</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"reklama, reklamę, reklamą\" aria-label=\"Play reklama\">🔊</button></td><td>reklama <span class=\"en\">(advertising)</span></td><td>reklam<span class=\"red\">ę</span></td><td>reklam<span class=\"red\">ą</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"siatkówka, siatkówkę, siatkówką\" aria-label=\"Play siatkówka\">🔊</button></td><td>siatkówka <span class=\"en\">(volleyball)</span></td><td>siatkówk<span class=\"red\">ę</span></td><td>siatkówk<span class=\"red\">ą</span></td></tr>\n<tr><td class=\"speak\"><button type=\"button\" class=\"speak-btn\" data-speak=\"hipika, hipikę, hipiką\" aria-label=\"Play hipika\">🔊</button></td><td>hipika <span class=\"en\">(horse riding)</span></td><td>hipik<span class=\"red\">ę</span></td><td>hipik<span class=\"red\">ą</span></td></tr></table></div>\n<p class=\"note\">Click 🔊 to hear the forms read in Polish. People's names decline too: Szekspir → Szekspira (animate masc.), Beckett → Becketta. Neuter words in -o and -nie, and inanimate masc. words, don't change in the accusative at all.</p>\n</div>",
          "<div class=\"panel full\"><h3>Reading — Co lubisz? Czym się interesujesz?</h3>\n<p style=\"font-size:13px\">Li Yundi jest muzykiem. Interesuje się muzyką klasyczną i turystyką. On bardzo lubi stare kino.<br>\nIzumi jest studentką. Lubi sport ekstremalny: wspinaczkę. Interesuje się jazzem i pływaniem. Ona lubi czekoladę.<br>\nEla jest informatykiem. Interesuje się reklamą i sportem. Lubi taniec. Lubi geografię i historię.</p>\n<p><b>Exercise:</b> put the nouns and adjectives back into the nominative</p>\n<div class=\"tblwrap\"><table><tr><th>Person</th><th>Nominative forms</th></tr>\n<tr><td class=\"lbl\">Li Yundi</td><td class=\"red\">muzyka klasyczna, turystyka, stare kino</td></tr>\n<tr><td class=\"lbl\">Izumi</td><td class=\"red\">sport ekstremalny, wspinaczka, jazz, pływanie, czekolada</td></tr>\n<tr><td class=\"lbl\">Ela</td><td class=\"red\">informatyk, reklama, sport, taniec, geografia, historia</td></tr></table></div>\n</div>"
        ],
        "vocab": [
          {
            "category": "Core words",
            "items": [
              {
                "pl": "lubić",
                "en": "to like (+ accusative)"
              },
              {
                "pl": "interesować się",
                "en": "to be interested in (+ instrumental)"
              },
              {
                "pl": "kogo",
                "en": "whom (accusative of kto)"
              },
              {
                "pl": "czym",
                "en": "what (instrumental)"
              },
              {
                "pl": "bardzo",
                "en": "very / a lot"
              }
            ]
          },
          {
            "category": "Interests & hobbies",
            "items": [
              {
                "pl": "muzyka klasyczna",
                "en": "classical music"
              },
              {
                "pl": "turystyka",
                "en": "tourism / travel"
              },
              {
                "pl": "kino",
                "en": "cinema"
              },
              {
                "pl": "sport",
                "en": "sport"
              },
              {
                "pl": "sport ekstremalny",
                "en": "extreme sport"
              },
              {
                "pl": "wspinaczka",
                "en": "rock climbing"
              },
              {
                "pl": "pływanie",
                "en": "swimming"
              },
              {
                "pl": "jazz",
                "en": "jazz"
              },
              {
                "pl": "taniec",
                "en": "dance"
              },
              {
                "pl": "reklama",
                "en": "advertising"
              },
              {
                "pl": "geografia",
                "en": "geography"
              },
              {
                "pl": "historia",
                "en": "history"
              }
            ]
          },
          {
            "category": "More interests (review drill)",
            "items": [
              {
                "pl": "ogrodnictwo",
                "en": "gardening"
              },
              {
                "pl": "malarstwo",
                "en": "painting"
              },
              {
                "pl": "bilard",
                "en": "billiards"
              },
              {
                "pl": "koszykówka",
                "en": "basketball"
              },
              {
                "pl": "siatkówka",
                "en": "volleyball"
              },
              {
                "pl": "boks",
                "en": "boxing"
              },
              {
                "pl": "hipika",
                "en": "horse riding"
              },
              {
                "pl": "nurkowanie",
                "en": "diving"
              },
              {
                "pl": "fotografowanie",
                "en": "photography"
              },
              {
                "pl": "archeologia",
                "en": "archaeology"
              },
              {
                "pl": "socjologia",
                "en": "sociology"
              },
              {
                "pl": "komunizm",
                "en": "communism"
              }
            ]
          },
          {
            "category": "Other nouns",
            "items": [
              {
                "pl": "kot",
                "en": "cat"
              },
              {
                "pl": "cytryna",
                "en": "lemon"
              },
              {
                "pl": "czekolada",
                "en": "chocolate"
              },
              {
                "pl": "ciocia",
                "en": "aunt"
              },
              {
                "pl": "syn",
                "en": "son"
              },
              {
                "pl": "ojciec",
                "en": "father (acc. ojca)"
              },
              {
                "pl": "dziecko / dzieciak",
                "en": "child / kid (colloq.)"
              },
              {
                "pl": "informatyk",
                "en": "IT specialist"
              },
              {
                "pl": "muzyk",
                "en": "musician"
              }
            ]
          }
        ]
      }
    }
  ]
};
