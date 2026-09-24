"use strict";
/* ===== Esquemas de Filosofía 1.º (mapas conceptuales, mermaid) — grupo «F1» =====
   Datos puros (traducibles por la cadena i18n). El merge en ESQUEMAS lo hace esquemasview.js. */
const ESQUEMAS_FIL = {
 "FIL-T1-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 1",
  "title": "¿Qué es la filosofía?",
  "mermaid": "flowchart TD\n  center[\"¿QUÉ ES LA FILOSOFÍA?\"]:::axis\n  origen[\"del mito al logos\"]:::key\n  mito[\"mito: explicación por los dioses\"]\n  logos[\"logos: explicación racional\"]\n  carac[\"características\"]:::key\n  c1[\"racional (da razones)\"]\n  c2[\"crítica (no acepta sin examen)\"]\n  c3[\"radical (va a la raíz)\"]\n  c4[\"universal (todo puede ser pensado)\"]\n  saber[\"saber de segundo grado: pregunta por los fundamentos\"]:::key\n  center -->|\"nace\"| origen\n  origen --> mito\n  origen -->|\"pasa al\"| logos\n  center -->|\"es un saber\"| carac\n  carac --> c1\n  carac --> c2\n  carac --> c3\n  carac --> c4\n  center -->|\"por eso es\"| saber\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T1-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 1",
  "title": "Las ramas de la filosofía",
  "mermaid": "flowchart TD\n  fil[\"LA FILOSOFÍA\"]:::axis\n  q1[\"¿qué es la realidad?\"]\n  met[\"Metafísica y Ontología\"]:::key\n  q2[\"¿qué podemos conocer?\"]\n  epi[\"Epistemología\"]:::key\n  q3[\"¿cómo debemos actuar?\"]\n  eti[\"Ética\"]:::key\n  q4[\"¿cómo organizar la convivencia?\"]\n  pol[\"Filosofía política\"]:::key\n  q5[\"¿qué es la belleza y el arte?\"]\n  est[\"Estética\"]:::key\n  q6[\"¿cómo razonar correctamente?\"]\n  log[\"Lógica\"]:::key\n  fil --> q1 --> met\n  fil --> q2 --> epi\n  fil --> q3 --> eti\n  fil --> q4 --> pol\n  fil --> q5 --> est\n  fil --> q6 --> log\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T2-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 2",
  "title": "Naturaleza y cultura en el ser humano",
  "mermaid": "flowchart TD\n  center[\"EL SER HUMANO\"]:::axis\n  bio[\"dimensión biológica\"]:::key\n  hom[\"hominización: evolución del cuerpo\"]\n  ev[\"homínidos, bipedismo, mano, encéfalo\"]\n  cul[\"dimensión cultural\"]:::key\n  hum[\"humanización: aprendizaje social\"]\n  simb[\"animal simbólico: lenguaje, técnica, cultura\"]\n  sintesis[\"naturaleza y cultura se entrelazan\"]:::key\n  center --> bio\n  bio --> hom --> ev\n  center --> cul\n  cul --> hum --> simb\n  bio -->|\"se combinan en\"| sintesis\n  cul -->|\"se combinan en\"| sintesis\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T2-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 2",
  "title": "El problema mente-cuerpo",
  "mermaid": "flowchart TD\n  q[\"¿CUERPO Y MENTE?\"]:::axis\n  dual[\"Dualismo\"]:::key\n  d1[\"dos realidades distintas: alma y cuerpo (Platón, Descartes)\"]\n  mon[\"Monismo\"]:::key\n  m1[\"una sola realidad\"]\n  mat[\"materialismo: todo es materia\"]\n  emer[\"emergentismo: la mente surge del cerebro\"]\n  q --> dual --> d1\n  q --> mon --> m1\n  m1 --> mat\n  m1 --> emer\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T3-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 3",
  "title": "Racionalismo, empirismo y Kant",
  "mermaid": "flowchart TD\n  con[\"EL CONOCIMIENTO\"]:::axis\n  fuente[\"¿cuál es su fuente?\"]:::key\n  rac[\"Racionalismo\"]:::key\n  r1[\"la razón; ideas innatas (Descartes)\"]\n  emp[\"Empirismo\"]:::key\n  e1[\"la experiencia; mente como tabula rasa (Locke, Hume)\"]\n  kant[\"Kant: síntesis crítica\"]:::key\n  k1[\"conocemos fenómenos: experiencia + formas a priori\"]\n  con --> fuente\n  fuente --> rac --> r1\n  fuente --> emp --> e1\n  rac -->|\"los reúne\"| kant\n  emp -->|\"los reúne\"| kant\n  kant --> k1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T3-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 3",
  "title": "La ciencia y su método",
  "mermaid": "flowchart TD\n  ci[\"LA CIENCIA\"]:::axis\n  met[\"método hipotético-deductivo\"]:::key\n  h[\"problema, hipótesis, contrastación, ley\"]\n  pop[\"Popper: falsacionismo\"]:::key\n  p1[\"una teoría es científica si puede ser refutada\"]\n  kuhn[\"Kuhn: paradigmas\"]:::key\n  ku[\"ciencia normal, crisis, revolución, nuevo paradigma\"]\n  ci --> met --> h\n  ci --> pop --> p1\n  ci --> kuhn --> ku\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T5-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 5",
  "title": "Ética y moral: tipos de teorías",
  "mermaid": "flowchart TD\n  center[\"LA ÉTICA\"]:::axis\n  moral[\"reflexiona sobre la MORAL\"]:::key\n  m1[\"normas y valores de una comunidad\"]\n  tipos[\"tipos de teorías éticas\"]:::key\n  mat[\"materiales: dicen cuál es el bien o fin\"]:::key\n  form[\"formales: dan la forma del deber, no el contenido\"]:::key\n  tele[\"teleológicas: miran el fin y las consecuencias\"]\n  deon[\"deontológicas: miran el deber en sí\"]\n  center -->|\"piensa la\"| moral --> m1\n  center --> tipos\n  tipos --> mat\n  tipos --> form\n  mat -->|\"suelen ser\"| tele\n  form -->|\"suelen ser\"| deon\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T5-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 5",
  "title": "Las grandes teorías éticas",
  "mermaid": "flowchart TD\n  et[\"TEORÍAS ÉTICAS\"]:::axis\n  ar[\"Eudaimonismo (Aristóteles)\"]:::key\n  a1[\"fin: la felicidad (eudaimonía) mediante la virtud\"]\n  ep[\"Hedonismo y Utilitarismo (Epicuro, Mill)\"]:::key\n  e1[\"fin: el placer, o la mayor felicidad para el mayor número\"]\n  ka[\"Deontología (Kant)\"]:::key\n  k1[\"el deber por respeto a la ley: imperativo categórico\"]\n  em[\"Emotivismo (Hume)\"]:::key\n  h1[\"los juicios morales expresan sentimientos\"]\n  et --> ar --> a1\n  et --> ep --> e1\n  et --> ka --> k1\n  et --> em --> h1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T7-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 7",
  "title": "¿Qué es la belleza?",
  "mermaid": "flowchart TD\n  bel[\"LA BELLEZA\"]:::axis\n  q[\"¿dónde está?\"]:::key\n  obj[\"Objetivismo: en el objeto\"]:::key\n  o1[\"proporción y armonía (los clásicos)\"]\n  sub[\"Subjetivismo: en el sujeto\"]:::key\n  s1[\"sobre gustos no hay nada escrito\"]\n  jui[\"el juicio estético\"]:::key\n  j1[\"Kant: gusto sin concepto, con pretensión de universalidad\"]\n  bel --> q\n  q --> obj --> o1\n  q --> sub --> s1\n  bel -->|\"lo resuelve\"| jui --> j1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-T7-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 7",
  "title": "Teorías sobre qué es el arte",
  "mermaid": "flowchart TD\n  art[\"¿QUÉ ES EL ARTE?\"]:::axis\n  mim[\"Mímesis: imitar la realidad\"]:::key\n  exp[\"Expresión: comunicar emociones\"]:::key\n  form[\"Formalismo: importa la forma (arte por el arte)\"]:::key\n  inst[\"Teoría institucional: arte es lo que el mundo del arte reconoce\"]:::key\n  fun[\"funciones del arte\"]:::key\n  f1[\"estética, cognoscitiva, social y crítica\"]\n  art --> mim\n  art --> exp\n  art --> form\n  art --> inst\n  art -->|\"cumple\"| fun --> f1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-TA-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Taller de argumentación",
  "title": "El argumento: validez y verdad",
  "mermaid": "flowchart TD\n  arg[\"EL ARGUMENTO\"]:::axis\n  prem[\"premisas\"]:::key\n  conc[\"conclusión\"]:::key\n  tipos[\"tipos\"]:::key\n  ded[\"deductivo: la conclusión se sigue con necesidad\"]\n  ind[\"inductivo: la conclusión es solo probable\"]\n  eval[\"evaluación\"]:::key\n  val[\"validez: la forma es correcta\"]\n  ver[\"verdad: las premisas son verdaderas\"]\n  sol[\"sólido: válido + premisas verdaderas\"]:::key\n  arg --> prem\n  prem -->|\"apoyan la\"| conc\n  arg --> tipos\n  tipos --> ded\n  tipos --> ind\n  arg --> eval\n  eval --> val\n  eval --> ver\n  val -->|\"juntas dan\"| sol\n  ver -->|\"juntas dan\"| sol\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "FIL-TA-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Taller de argumentación",
  "title": "Las falacias",
  "mermaid": "flowchart TD\n  fal[\"LAS FALACIAS\"]:::axis\n  def[\"argumentos que parecen válidos pero no lo son\"]\n  formal[\"formales: fallo en la estructura lógica\"]:::key\n  inf[\"informales: fallo en el contenido o el lenguaje\"]:::key\n  ah[\"ad hominem: atacar a la persona\"]\n  ap[\"ad populum: apelar a la mayoría\"]\n  aver[\"ad verecundiam: apelar a la autoridad\"]\n  fc[\"falsa causa: confundir correlación con causa\"]\n  hp[\"hombre de paja: deformar la tesis rival\"]\n  fal --> def\n  fal --> formal\n  fal --> inf\n  inf --> ah\n  inf --> ap\n  inf --> aver\n  inf --> fc\n  inf --> hp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
  "FIL-T6-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 6",
  "title": "El origen del Estado: ¿naturaleza o contrato?",
  "mermaid": "flowchart TD\n  est[\"EL ORIGEN DEL ESTADO\"]:::axis\n  nat[\"¿Naturaleza? (Aristóteles)\"]:::key\n  n1[\"el humano es zoon politikón: la polis es natural\"]\n  con[\"¿Contrato? (los modernos)\"]:::key\n  c1[\"el Estado es un artificio: un pacto para salir del estado de naturaleza\"]\n  ho[\"Hobbes\"]:::key\n  h1[\"guerra de todos contra todos → soberano absoluto (Leviatán)\"]\n  lo[\"Locke\"]:::key\n  l1[\"derechos naturales → Estado liberal y división de poderes\"]\n  ro[\"Rousseau\"]:::key\n  r1[\"voluntad general → soberanía popular\"]\n  est --> nat --> n1\n  est --> con --> c1\n  con --> ho --> h1\n  con --> lo --> l1\n  con --> ro --> r1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
  "FIL-T6-02": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 6",
  "title": "Justicia, poder y formas de gobierno",
  "mermaid": "flowchart TD\n  pol[\"LA VIDA POLÍTICA\"]:::axis\n  jus[\"Justicia\"]:::key\n  j1[\"Platón: cada parte cumple su función · Rawls: el velo de ignorancia\"]\n  leg[\"Poder y legitimidad (Weber)\"]:::key\n  le1[\"tradición · carisma · legalidad racional\"]\n  gob[\"Formas de gobierno\"]:::key\n  g1[\"uno (monarquía) · pocos (aristocracia) · muchos (democracia)\"]\n  dem[\"Democracia\"]:::key\n  d1[\"soberanía popular, libertades y división de poderes; enemigos: manipulación y desigualdad\"]\n  dh[\"Derechos humanos y Estado de derecho\"]:::key\n  dh1[\"límite que ningún poder puede traspasar (Arendt: contra el totalitarismo)\"]\n  pol --> jus --> j1\n  pol --> leg --> le1\n  pol --> gob --> g1\n  gob --> dem --> d1\n  pol --> dh --> dh1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
  "FIL-T4-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 4",
  "title": "Lógica formal: conectivas, tablas de verdad y Boole",
  "mermaid": "flowchart TD\n  log[\"LÓGICA FORMAL\"]:::axis\n  con[\"Conectivas\"]:::key\n  c1[\"¬ no · ∧ y · ∨ o · → si...entonces · ↔ si y solo si\"]\n  tv[\"Tablas de verdad\"]:::key\n  t1[\"evalúan si una fórmula es verdadera o falsa según sus partes\"]\n  bo[\"Álgebra de Boole\"]:::key\n  b1[\"lo verdadero y lo falso como 1 y 0\"]\n  pu[\"Puertas lógicas (Shannon)\"]:::key\n  p1[\"AND (∧), OR (∨), NOT (¬): la lógica hecha electricidad → el ordenador\"]\n  log --> con --> c1\n  log --> tv --> t1\n  log --> bo --> b1\n  bo --> pu --> p1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
  "FIL-PRE-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Los presocráticos",
  "title": "Los presocráticos: la búsqueda del arché",
  "mermaid": "flowchart TD\n  pre[\"LOS PRESOCRÁTICOS\"]:::axis\n  ml[\"Del mito al logos: explicar la naturaleza con la razón\"]\n  arc[\"Buscan el ARCHÉ: el principio de todo\"]:::key\n  mil[\"Los milesios\"]:::key\n  ta[\"Tales: el agua\"]\n  an[\"Anaximandro: el ápeiron (lo indefinido)\"]\n  ax[\"Anaxímenes: el aire\"]\n  je[\"Jenófanes: crítica a los dioses antropomórficos\"]:::key\n  pi[\"Pitágoras: el número\"]:::key\n  par[\"Parménides: el ser es uno e inmóvil (el cambio, ilusión)\"]:::key\n  her[\"Heráclito: todo fluye, regido por el logos\"]:::key\n  pre --> ml\n  pre --> arc\n  arc --> mil\n  mil --> ta\n  mil --> an\n  mil --> ax\n  arc --> pi\n  pre --> je\n  pre --> par\n  pre --> her\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
  "FIL-HEL-01": {
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · El helenismo",
  "title": "Las escuelas helenísticas: caminos a la felicidad",
  "mermaid": "flowchart TD\n  hel[\"¿CÓMO ALCANZAR LA FELICIDAD?\"]:::axis\n  ep[\"Epicúreos (Epicuro)\"]:::key\n  e1[\"placer sereno y ausencia de dolor: ataraxia\"]\n  es[\"Estoicos (Zenón, Séneca)\"]:::key\n  s1[\"vivir según la razón; aceptar lo que no depende de mí (apatheia)\"]\n  ci[\"Cínicos (Diógenes)\"]:::key\n  c1[\"autarquía: bastarse a sí mismo, sin convenciones\"]\n  esc[\"Escépticos (Pirrón)\"]:::key\n  x1[\"suspender el juicio (epojé): tranquilidad\"]\n  hel --> ep --> e1\n  hel --> es --> s1\n  hel --> ci --> c1\n  hel --> esc --> x1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 }
};

/* ===== Esquemas v2: bloques generados (Filosofía 1.º; formato al final de esquemas.js). Para retocar un esquema, edita aquí su bloque y comprueba con node tools/validar_esquemas.js. ===== */
Object.assign(ESQUEMAS_FIL["FIL-T1-01"], { v2: {
  "pregunta": "¿Qué tipo de saber es la filosofía y en qué se distingue de otros?",
  "raiz": "LA FILOSOFÍA",
  "raiz_d": "Philía (amor) + sophía (sabiduría): amor a la sabiduría. Quien filosofa no posee la verdad: la desea y la busca.",
  "ramas": [
    {
      "rel": "nace del",
      "t": "Asombro",
      "a": "Platón, Aristóteles",
      "d": "Extrañarse ante lo que a los demás les parece obvio; junto a la curiosidad y la duda.",
      "c": [
        {
          "rel": "empieza reconociendo",
          "t": "La propia ignorancia",
          "a": "Sócrates",
          "d": "«Solo sé que no sé nada»: saber que no sé es el primer paso para aprender."
        }
      ]
    },
    {
      "rel": "surge con el paso",
      "t": "Del mito al logos",
      "k": true,
      "a": "Tales de Mileto",
      "d": "Grecia, s. VI a. C.: de los relatos sobre dioses a las explicaciones con razones.",
      "c": [
        {
          "rel": "abandona",
          "t": "El mito",
          "d": "Relato tradicional y dogmático: todo ocurre por la voluntad caprichosa de los dioses."
        },
        {
          "rel": "adopta",
          "t": "El logos",
          "d": "Busca causas naturales (el arché) con argumentos que cualquiera puede discutir."
        }
      ]
    },
    {
      "rel": "se distingue como",
      "t": "Un saber de las causas últimas",
      "k": true,
      "d": "Frente al saber común (espontáneo) y al científico (parcial), busca entender la realidad en su conjunto.",
      "c": [
        {
          "rel": "por su método",
          "t": "Racional y crítica",
          "k": true,
          "d": "Se apoya en argumentos, no en la autoridad, y no acepta nada «porque sí», ni siquiera lo propio."
        },
        {
          "rel": "por su alcance",
          "t": "Radical y universal",
          "d": "Va a la raíz de los problemas y se interesa por toda la realidad."
        },
        {
          "rel": "por su fin",
          "t": "Práctica",
          "d": "Piensa también cómo vivir: de ahí nacen la ética y la filosofía política."
        }
      ]
    },
    {
      "rel": "hoy sirve para",
      "t": "Sus funciones",
      "c": [
        {
          "rel": "enseña",
          "t": "Función crítica",
          "d": "Pensar por uno mismo y protegerse de la manipulación y la propaganda."
        },
        {
          "rel": "ofrece",
          "t": "Orientación y sentido",
          "d": "Ayuda a decidir cómo vivir y a entender quiénes somos."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Función crítica",
      "rel": "pone en práctica la actitud",
      "a": "Racional y crítica"
    }
  ],
  "idea": "«Sapere aude (atrévete a saber): ten el valor de servirte de tu propia razón» (Kant). Filosofar es buscar la verdad con argumentos, sin perder el asombro."
} });
Object.assign(ESQUEMAS_FIL["FIL-T1-02"], { v2: {
  "pregunta": "¿Qué gran pregunta se ocupa de responder cada rama de la filosofía?",
  "raiz": "LAS RAMAS DE LA FILOSOFÍA",
  "raiz_d": "Como su objeto es toda la realidad, la filosofía se divide en disciplinas, cada una centrada en un tipo de preguntas.",
  "ramas": [
    {
      "rel": "¿qué hay y qué sabemos?",
      "t": "Filosofía teórica",
      "k": true,
      "c": [
        {
          "rel": "¿qué es la realidad?",
          "t": "Metafísica",
          "d": "Qué significa «ser», qué existe y cuáles son las propiedades últimas de las cosas."
        },
        {
          "rel": "¿qué podemos conocer?",
          "t": "Teoría del conocimiento",
          "d": "También epistemología o gnoseología: origen y límites del conocimiento, y qué es la verdad."
        },
        {
          "rel": "¿cómo razonar bien?",
          "t": "Lógica",
          "d": "Analiza la forma de los razonamientos para separar los válidos de los que no lo son."
        }
      ]
    },
    {
      "rel": "¿cómo debemos vivir?",
      "t": "Filosofía práctica",
      "k": true,
      "c": [
        {
          "rel": "¿cómo debo actuar?",
          "t": "Ética",
          "d": "El bien y el mal, y el fundamento de las normas morales."
        },
        {
          "rel": "¿cómo convivir?",
          "t": "Filosofía política",
          "d": "La vida en comunidad: el poder, la justicia y las formas de gobierno."
        }
      ]
    },
    {
      "rel": "¿qué somos y qué nos conmueve?",
      "t": "El ser humano y su experiencia",
      "k": true,
      "c": [
        {
          "rel": "¿qué es el ser humano?",
          "t": "Antropología filosófica",
          "d": "Lo que nos define, visto desde lo biológico, lo social y lo cultural."
        },
        {
          "rel": "¿qué es lo bello?",
          "t": "Estética",
          "d": "La belleza y el arte, y en qué se basan nuestros juicios sobre lo bello, lo feo o lo sublime."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Antropología filosófica",
      "rel": "pregunta qué somos antes de la",
      "a": "Ética"
    }
  ],
  "idea": "Cada rama nace de una gran pregunta. En el curso: antropología (Tema 2), conocimiento (3), lógica (4), ética (5), política (6) y estética (7)."
} });
Object.assign(ESQUEMAS_FIL["FIL-T2-01"], { v2: {
  "pregunta": "¿Somos fruto de la biología o de la cultura?",
  "raiz": "NATURALEZA Y CULTURA",
  "raiz_d": "El ser humano es a la vez producto de la evolución biológica y de lo que aprende viviendo en sociedad.",
  "ramas": [
    {
      "rel": "se hereda",
      "t": "Naturaleza (lo biológico)",
      "k": true,
      "d": "Lo que traemos al nacer: cuerpo, cerebro y capacidades. Es común a toda la especie.",
      "c": [
        {
          "rel": "se explica por",
          "t": "La evolución",
          "a": "Darwin, Wallace",
          "d": "Las especies cambian por selección natural: los mejor adaptados sobreviven y se reproducen más."
        },
        {
          "rel": "en nuestra especie, la",
          "t": "Hominización",
          "k": true,
          "d": "Proceso biológico hasta el Homo sapiens: marcha bípeda, encefalización, mano con pulgar oponible."
        }
      ]
    },
    {
      "rel": "se aprende",
      "t": "Cultura (lo aprendido)",
      "k": true,
      "a": "Tylor",
      "d": "Conocimientos, creencias, moral y costumbres que se adquieren como miembro de una sociedad; varía entre pueblos.",
      "c": [
        {
          "rel": "nos hace humanos: la",
          "t": "Humanización",
          "k": true,
          "d": "Llegar a ser plenamente humano gracias al fuego, las herramientas, la agricultura y la organización social."
        },
        {
          "rel": "se transmite por la",
          "t": "Socialización",
          "d": "Familia, escuela, amigos, medios, lengua: así formamos la identidad personal y la colectiva."
        }
      ]
    },
    {
      "rel": "se entrelazan en la",
      "t": "Dialéctica naturaleza-cultura",
      "d": "No se oponen: se necesitan. Somos las dos cosas a la vez.",
      "c": [
        {
          "rel": "porque nacemos",
          "t": "Biológicamente «inacabados»",
          "d": "Con instintos reducidos y un mundo abierto que construir: la cultura es una «segunda matriz»."
        },
        {
          "rel": "las une",
          "t": "El lenguaje",
          "d": "Es la bisagra entre ambos procesos: permite transmitir lo aprendido de una generación a otra."
        },
        {
          "rel": "supera el debate",
          "t": "Innatismo frente a ambientalismo",
          "d": "Ni decide solo lo heredado ni solo lo aprendido del entorno."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Hominización",
      "rel": "sobre ella se monta la",
      "a": "Humanización"
    }
  ],
  "idea": "No descendemos del chimpancé: compartimos con él un antepasado común. La biología nos hace posibles; la cultura termina de hacernos humanos."
} });
Object.assign(ESQUEMAS_FIL["FIL-T2-02"], { v2: {
  "pregunta": "¿Somos un cuerpo, un alma, o las dos cosas a la vez?",
  "raiz": "EL PROBLEMA MENTE-CUERPO",
  "raiz_d": "¿De qué estamos hechos: de una sola realidad o de dos? Las respuestas se agrupan en dos grandes posturas y una vía intermedia.",
  "ramas": [
    {
      "rel": "dos realidades",
      "t": "Dualismo",
      "k": true,
      "d": "Cuerpo material y alma o mente inmaterial; el alma es lo superior y puede existir sin el cuerpo.",
      "c": [
        {
          "rel": "versión antigua",
          "t": "El cuerpo, cárcel del alma",
          "a": "Platón",
          "d": "El alma es inmortal y tiene tres partes: racional, irascible y concupiscible (mito del carro alado)."
        },
        {
          "rel": "versión moderna",
          "t": "Res cogitans y res extensa",
          "a": "Descartes",
          "d": "Dos sustancias: la «cosa pensante» (la mente) y la «cosa extensa» (el cuerpo, casi una máquina)."
        }
      ]
    },
    {
      "rel": "una sola realidad",
      "t": "Monismo materialista",
      "k": true,
      "a": "Demócrito, Hume, Marx",
      "d": "Somos cuerpo: la mente no es una sustancia aparte, sino actividad del cuerpo, sobre todo del cerebro.",
      "c": [
        {
          "rel": "lo apoya hoy",
          "t": "La neurociencia",
          "d": "Gran parte de la ciencia actual entiende lo mental como dependiente del cerebro."
        },
        {
          "rel": "por tanto",
          "t": "No hay alma separable",
          "d": "Con la muerte del cuerpo se acaba todo."
        }
      ]
    },
    {
      "rel": "postura intermedia",
      "t": "El alma, forma del cuerpo",
      "k": true,
      "a": "Aristóteles",
      "d": "El alma es el principio de vida del cuerpo y no puede existir sin él.",
      "c": [
        {
          "rel": "distingue",
          "t": "Alma vegetativa, sensitiva y racional"
        },
        {
          "rel": "hoy se habla de",
          "t": "La estructura psicosomática",
          "d": "Lo psíquico (psique) y lo corporal (soma) entendidos como un todo."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Monismo materialista",
      "rel": "niega la inmortalidad que defiende el",
      "a": "Dualismo"
    },
    {
      "de": "El alma, forma del cuerpo",
      "rel": "rechaza separar, como hace el",
      "a": "Dualismo"
    }
  ],
  "idea": "El dualismo separa alma y cuerpo; el monismo reduce la mente al cuerpo; Aristóteles los une. Hoy tendemos a vernos como una unidad psicosomática."
} });
Object.assign(ESQUEMAS_FIL["FIL-T3-01"], { v2: {
  "pregunta": "¿De dónde procede nuestro conocimiento y hasta dónde llega?",
  "raiz": "EL ORIGEN DEL CONOCIMIENTO",
  "raiz_d": "En la Edad Moderna, tres respuestas a una misma pregunta: ¿razón, experiencia o ambas?",
  "ramas": [
    {
      "rel": "primera respuesta",
      "t": "Racionalismo",
      "k": true,
      "a": "Descartes",
      "d": "La fuente del conocimiento seguro es la razón.",
      "c": [
        {
          "rel": "porque",
          "t": "Hay ideas innatas",
          "d": "La mente trae de nacimiento ideas que no salen de los sentidos."
        },
        {
          "rel": "desconfía de",
          "t": "Los sentidos",
          "d": "Engañan: no son fuente segura de verdad."
        },
        {
          "rel": "límite",
          "t": "La razón bien usada llega a la realidad"
        }
      ]
    },
    {
      "rel": "segunda respuesta",
      "t": "Empirismo",
      "k": true,
      "a": "Locke, Hume",
      "d": "Todo conocimiento procede de la experiencia de los sentidos.",
      "c": [
        {
          "rel": "porque",
          "t": "La mente es una hoja en blanco",
          "d": "No hay ideas innatas: todo lo que sabemos ha entrado por los sentidos."
        },
        {
          "rel": "límite",
          "t": "No podemos ir más allá de la experiencia"
        }
      ]
    },
    {
      "rel": "síntesis",
      "t": "Criticismo",
      "k": true,
      "a": "Kant",
      "d": "Las dos fuentes se necesitan y se completan.",
      "c": [
        {
          "rel": "los sentidos aportan",
          "t": "El contenido",
          "d": "Las impresiones que recibimos."
        },
        {
          "rel": "el entendimiento aporta",
          "t": "Las formas y categorías",
          "d": "Ordenan esas impresiones."
        },
        {
          "rel": "límite",
          "t": "Solo conocemos las cosas como se nos aparecen",
          "d": "No las cosas «en sí mismas»."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Criticismo",
      "rel": "da la razón en parte al",
      "a": "Racionalismo"
    },
    {
      "de": "Criticismo",
      "rel": "da la razón en parte al",
      "a": "Empirismo"
    }
  ],
  "idea": "«Los pensamientos sin contenido son vacíos; las intuiciones sin conceptos son ciegas» (Kant): conocemos combinando experiencia y razón."
} });
Object.assign(ESQUEMAS_FIL["FIL-T3-02"], { v2: {
  "pregunta": "¿Cómo trabaja la ciencia y cómo avanza?",
  "raiz": "EL SABER CIENTÍFICO",
  "raiz_d": "Un conocimiento racional, objetivo, sistemático, metódico y verificable.",
  "ramas": [
    {
      "rel": "se divide en",
      "t": "Tipos de ciencia",
      "c": [
        {
          "rel": "demuestran por coherencia",
          "t": "Ciencias formales",
          "d": "Lógica y matemáticas: estudian formas y relaciones abstractas, sin experimentos."
        },
        {
          "rel": "contrastan con la experiencia",
          "t": "Ciencias empíricas",
          "d": "Naturales (física, química, biología) y sociales (historia, economía, sociología)."
        }
      ]
    },
    {
      "rel": "procede con",
      "t": "El método",
      "c": [
        {
          "rel": "generaliza",
          "t": "Método inductivo",
          "d": "De muchos casos particulares a una ley general; nunca se observan todos, así que solo da conclusiones probables."
        },
        {
          "rel": "lo mejora el",
          "t": "Método hipotético-deductivo",
          "k": true,
          "a": "Galileo",
          "d": "Problema, hipótesis, consecuencias deducidas y comprobación experimental; si se confirman, ley."
        }
      ]
    },
    {
      "rel": "avanza, según Popper, por",
      "t": "Falsabilidad",
      "k": true,
      "a": "Popper",
      "d": "Una teoría es científica si se puede concebir un experimento capaz de desmentirla.",
      "c": [
        {
          "rel": "de ahí",
          "t": "Conjeturas y refutaciones",
          "d": "Ninguna teoría se prueba del todo: solo resiste los intentos de refutarla (ensayo y error)."
        }
      ]
    },
    {
      "rel": "avanza, según Kuhn, por",
      "t": "Paradigmas",
      "k": true,
      "a": "Kuhn",
      "d": "Marco compartido dentro del que trabajan los científicos durante largos periodos.",
      "c": [
        {
          "rel": "si se acumulan anomalías",
          "t": "Revolución científica",
          "d": "Un paradigma sustituye a otro, como la física de Einstein a la de Newton."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Ciencias empíricas",
      "rel": "emplean sobre todo el",
      "a": "Método hipotético-deductivo"
    },
    {
      "de": "Método inductivo",
      "rel": "nunca prueba del todo: de ahí la",
      "a": "Falsabilidad"
    }
  ],
  "idea": "La ciencia no alcanza verdades definitivas: propone hipótesis, las pone a prueba y cambia de marco cuando las anomalías se acumulan."
} });
Object.assign(ESQUEMAS_FIL["FIL-T5-01"], { v2: {
  "pregunta": "¿Qué diferencia hay entre moral y ética, y cómo se clasifican las teorías éticas?",
  "raiz": "ÉTICA Y MORAL",
  "raiz_d": "Parten de la pregunta de Sócrates, «¿cómo debemos vivir?», que no es técnica sino una pregunta por los fines.",
  "ramas": [
    {
      "rel": "lo que se vive",
      "t": "La moral",
      "d": "Normas y valores que de hecho rigen en una comunidad."
    },
    {
      "rel": "lo que se piensa",
      "t": "La ética",
      "k": true,
      "d": "Reflexión filosófica sobre la moral: pregunta si sus normas son buenas y están justificadas."
    },
    {
      "rel": "presuponen",
      "t": "La libertad",
      "c": [
        {
          "rel": "permite la",
          "t": "Responsabilidad moral",
          "d": "Si todo estuviera determinado, no cabría elogiar ni reprochar."
        },
        {
          "rel": "ley propia",
          "t": "Autonomía",
          "k": true,
          "a": "Kant",
          "d": "Darse uno mismo la ley moral con la propia razón."
        },
        {
          "rel": "ley ajena",
          "t": "Heteronomía",
          "d": "Recibir la norma desde fuera: el miedo, la costumbre, la autoridad."
        }
      ]
    },
    {
      "rel": "¿qué hace buena una acción?",
      "t": "Tipos de teorías éticas",
      "c": [
        {
          "rel": "fijan un fin",
          "t": "Éticas materiales",
          "k": true,
          "d": "Dicen cuál es el bien que hay que perseguir: la felicidad, el placer, la utilidad.",
          "c": [
            {
              "rel": "suelen ser",
              "t": "Teleológicas",
              "a": "Aristóteles, Epicuro, utilitarismo",
              "d": "De telos (fin): juzgan la acción por sus consecuencias."
            }
          ]
        },
        {
          "rel": "fijan una forma",
          "t": "Éticas formales",
          "k": true,
          "d": "No dicen qué hacer, sino la forma que debe tener toda norma moral.",
          "c": [
            {
              "rel": "suelen ser",
              "t": "Deontológicas",
              "a": "Kant",
              "d": "De déon (deber): juzgan la acción por el deber y la intención, no por sus resultados."
            }
          ]
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "La ética",
      "rel": "examina y justifica (o critica)",
      "a": "La moral"
    },
    {
      "de": "Autonomía",
      "rel": "es el fundamento de las",
      "a": "Éticas formales"
    }
  ],
  "idea": "La moral se vive; la ética la piensa. Ante una acción, las éticas materiales miran el fin y las consecuencias; las formales, el deber y la intención."
} });
Object.assign(ESQUEMAS_FIL["FIL-T5-02"], { v2: {
  "pregunta": "¿Qué hace buena una acción: el fin que persigue, el deber o el sentimiento?",
  "raiz": "LAS GRANDES TEORÍAS ÉTICAS",
  "raiz_d": "Tres grandes respuestas: el bien como fin (éticas materiales), como deber (Kant) o como sentimiento (Hume).",
  "ramas": [
    {
      "rel": "el bien es un fin",
      "t": "Éticas materiales",
      "d": "Juzgan la acción por el fin que alcanza: son teleológicas.",
      "c": [
        {
          "rel": "el fin es",
          "t": "La felicidad (eudaimonía)",
          "k": true,
          "a": "Aristóteles",
          "d": "Una vida lograda en su conjunto, no un instante de placer.",
          "c": [
            {
              "rel": "se alcanza con la",
              "t": "Virtud como término medio",
              "d": "Entre dos extremos, guiada por la razón y el hábito: el valor, entre la cobardía y la temeridad."
            }
          ]
        },
        {
          "rel": "el fin es",
          "t": "El placer sereno (ataraxia)",
          "a": "Epicuro",
          "d": "Ausencia de dolor y de perturbación: vida serena, con amigos y sin miedo a los dioses ni a la muerte."
        },
        {
          "rel": "el fin es",
          "t": "La mayor felicidad del mayor número",
          "k": true,
          "a": "Bentham, Mill",
          "d": "Utilitarismo: el criterio del placer aplicado a la sociedad. Mill añade que hay placeres superiores."
        }
      ]
    },
    {
      "rel": "el bien es el deber",
      "t": "Ética formal",
      "a": "Kant",
      "d": "Una acción es moral cuando se hace por respeto a la ley moral, no por sus consecuencias.",
      "c": [
        {
          "rel": "se expresa en el",
          "t": "Imperativo categórico",
          "k": true,
          "d": "Mandato incondicional de la razón: obra solo según una máxima que puedas querer como ley universal."
        },
        {
          "rel": "manda tratar a la persona",
          "t": "Siempre como un fin",
          "d": "Y nunca solo como un medio: base de la dignidad humana."
        }
      ]
    },
    {
      "rel": "el bien se siente",
      "t": "Emotivismo",
      "k": true,
      "a": "Hume",
      "d": "Los juicios morales no se deducen de la razón: expresan sentimientos de aprobación o rechazo.",
      "c": [
        {
          "rel": "porque",
          "t": "La razón, esclava de las pasiones",
          "d": "«La razón es, y solo debe ser, esclava de las pasiones» (Hume)."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Ética formal",
      "rel": "rechaza fundar la moral en",
      "a": "La felicidad (eudaimonía)"
    },
    {
      "de": "Emotivismo",
      "rel": "niega el fundamento racional del",
      "a": "Imperativo categórico"
    }
  ],
  "idea": "Aristóteles, Epicuro y el utilitarismo miran el fin; Kant, el deber; Hume, el sentimiento. En la ética aplicada de hoy reaparecen las mismas preguntas."
} });
Object.assign(ESQUEMAS_FIL["FIL-T7-01"], { v2: {
  "pregunta": "¿La belleza está en las cosas o en quien las mira?",
  "raiz": "LO BELLO",
  "raiz_d": "La estética (de aísthesis, «sensación») piensa la belleza, el arte y la experiencia de contemplar algo por sí mismo.",
  "ramas": [
    {
      "rel": "está en el objeto",
      "t": "Belleza objetiva",
      "k": true,
      "a": "Pitagóricos, Policleto, Agustín, Tomás",
      "d": "Concepción clásica: lo bello es lo bien proporcionado.",
      "c": [
        {
          "rel": "consiste en",
          "t": "Proporción, armonía y medida",
          "d": "Por eso puede medirse y enseñarse: la música como número, el Canon del cuerpo."
        }
      ]
    },
    {
      "rel": "está en el sujeto",
      "t": "Belleza subjetiva",
      "k": true,
      "d": "Concepción moderna: lo bello es el placer que sentimos ante algo.",
      "c": [
        {
          "rel": "su riesgo",
          "t": "«Sobre gustos no hay nada escrito»",
          "d": "Si todo depende de quien mira, ningún juicio sería mejor que otro."
        }
      ]
    },
    {
      "rel": "¿vale para todos?",
      "t": "El juicio del gusto",
      "k": true,
      "d": "Decir «esto es bello»: ¿es solo «a mí me gusta» o pide el acuerdo de los demás?",
      "c": [
        {
          "rel": "lo salva con el",
          "t": "Crítico competente",
          "a": "Hume",
          "d": "Sensibilidad, experiencia, comparación y sin prejuicios: hay un buen gusto."
        },
        {
          "rel": "lo define como",
          "t": "Desinteresado y universal sin concepto",
          "a": "Kant",
          "d": "Contemplo sin querer poseer ni usar; pido el acuerdo de todos, pero no puedo demostrarlo con reglas."
        }
      ]
    },
    {
      "rel": "más allá de lo bello",
      "t": "Lo sublime",
      "a": "Kant",
      "d": "Temor y admiración ante lo inmenso o poderoso (una tormenta, el mar, el cosmos)."
    }
  ],
  "cruces": [
    {
      "de": "Crítico competente",
      "rel": "matiza, sin negarla, la",
      "a": "Belleza subjetiva"
    },
    {
      "de": "Desinteresado y universal sin concepto",
      "rel": "pide acuerdo universal para la",
      "a": "Belleza subjetiva"
    }
  ],
  "idea": "Para los clásicos, la belleza está en el objeto; para los modernos, en el sujeto. Hume y Kant buscan que el gusto, aun siendo subjetivo, no sea puro capricho."
} });
Object.assign(ESQUEMAS_FIL["FIL-T7-02"], { v2: {
  "pregunta": "¿Qué convierte a algo en una obra de arte?",
  "raiz": "EL ARTE",
  "raiz_d": "¿Qué tienen en común una catedral, una sinfonía y un urinario firmado por Duchamp? Cuatro respuestas, cada una con su problema.",
  "ramas": [
    {
      "rel": "el arte imita",
      "t": "Mímesis",
      "k": true,
      "d": "Representar la realidad; domina desde Grecia hasta el Renacimiento.",
      "c": [
        {
          "rel": "le cuesta explicar",
          "t": "La música y el arte abstracto",
          "d": "No imitan nada."
        }
      ]
    },
    {
      "rel": "el arte expresa",
      "t": "Expresión",
      "k": true,
      "d": "Desde el Romanticismo: comunicar el mundo interior del artista y hacerlo sentir.",
      "c": [
        {
          "rel": "le cuesta explicar",
          "t": "Por qué un llanto no es arte",
          "d": "Un llanto o un grito también expresan emociones."
        }
      ]
    },
    {
      "rel": "el arte es forma",
      "t": "Formalismo",
      "k": true,
      "d": "Lo artístico es la forma: composición, color, ritmo, estructura.",
      "c": [
        {
          "rel": "le cuesta explicar",
          "t": "El significado y el tema"
        }
      ]
    },
    {
      "rel": "el arte es lo reconocido",
      "t": "Teoría institucional",
      "k": true,
      "a": "Danto, Dickie",
      "d": "Es arte lo que el mundo del arte (museos, críticos, historia del arte) trata como arte.",
      "c": [
        {
          "rel": "responde al",
          "t": "Ready-made",
          "a": "Duchamp",
          "d": "Un objeto industrial firmado y expuesto: ya no cuentan la habilidad ni la belleza."
        },
        {
          "rel": "su riesgo",
          "t": "«Arte es lo que digan los expertos»"
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Formalismo",
      "rel": "sí da cabida a",
      "a": "La música y el arte abstracto"
    },
    {
      "de": "Ready-made",
      "rel": "rompe con la",
      "a": "Mímesis"
    }
  ],
  "idea": "Ninguna definición cierra el debate: cada teoría explica bien un tipo de arte y falla con otro. Desde Duchamp, el arte es también una pregunta."
} });
Object.assign(ESQUEMAS_FIL["FIL-TA-01"], { v2: {
  "pregunta": "¿Cuándo prueba de verdad un argumento su conclusión?",
  "raiz": "EL ARGUMENTO",
  "raiz_d": "Argumentar es dar razones: un conjunto de proposiciones en el que unas, las premisas, apoyan a otra, la conclusión.",
  "ramas": [
    {
      "rel": "se compone de",
      "t": "Premisas y conclusión",
      "d": "Las premisas suelen ir tras «porque», «ya que»; la conclusión, tras «por tanto», «luego».",
      "c": [
        {
          "rel": "cada una es una",
          "t": "Proposición",
          "d": "Enunciado del que tiene sentido decir que es verdadero o falso: «llueve», «7 es primo»."
        }
      ]
    },
    {
      "rel": "razona de dos modos",
      "t": "Deducción e inducción",
      "c": [
        {
          "rel": "conclusión necesaria",
          "t": "Deducción",
          "k": true,
          "d": "Si las premisas son verdaderas, la conclusión no puede ser falsa: «Todos los humanos son mortales…»."
        },
        {
          "rel": "conclusión probable",
          "t": "Inducción",
          "d": "De casos particulares a una ley general: muchos cisnes blancos no prueban que todos lo sean."
        }
      ]
    },
    {
      "rel": "se evalúa por",
      "t": "Validez y verdad",
      "k": true,
      "d": "Son independientes: la validez es cosa de la forma; la verdad, del contenido.",
      "c": [
        {
          "rel": "propiedad de la forma",
          "t": "Validez",
          "d": "La conclusión se sigue correctamente de las premisas.",
          "c": [
            {
              "rel": "con premisas falsas",
              "t": "No prueba nada",
              "d": "«Los peces vuelan; Nemo es un pez; luego Nemo vuela»: forma válida, conclusión falsa."
            }
          ]
        },
        {
          "rel": "propiedad del contenido",
          "t": "Verdad",
          "d": "Las premisas dicen cómo son de hecho las cosas."
        },
        {
          "rel": "si se dan las dos",
          "t": "Argumento sólido",
          "k": true,
          "d": "Válido y con premisas verdaderas: la conclusión queda garantizada."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Deducción",
      "rel": "bien construida, tiene",
      "a": "Validez"
    },
    {
      "de": "Proposición",
      "rel": "es lo que puede tener o no",
      "a": "Verdad"
    }
  ],
  "idea": "Un argumento válido no basta: para probar su conclusión tiene que ser sólido, es decir, válido y con premisas verdaderas."
} });
Object.assign(ESQUEMAS_FIL["FIL-TA-02"], { v2: {
  "pregunta": "¿Cómo reconocer un razonamiento que parece bueno pero no lo es?",
  "raiz": "LAS FALACIAS",
  "raiz_d": "Argumentos que parecen válidos y no lo son. Formales: falla la forma. Informales: falla el contenido o el lenguaje.",
  "ramas": [
    {
      "rel": "falla la forma",
      "t": "Falacias formales",
      "k": true,
      "d": "La estructura lógica es incorrecta, aunque cada frase pueda ser cierta.",
      "c": [
        {
          "rel": "por ejemplo",
          "t": "Afirmar el consecuente",
          "d": "«Si llueve, el suelo se moja; el suelo está mojado; luego ha llovido». Pudo ser una manguera."
        }
      ]
    },
    {
      "rel": "informales: miran quién lo dice",
      "t": "Apelan a personas",
      "d": "Sustituyen las razones por quién lo dice o por cuántos lo dicen.",
      "c": [
        {
          "rel": "ataca a la persona",
          "t": "Ad hominem",
          "k": true,
          "d": "«No puedes opinar sobre la guerra: no has hecho la mili». Quién habla no refuta lo que dice."
        },
        {
          "rel": "autoridad no pertinente",
          "t": "Ad verecundiam",
          "d": "«Un Nobel de Física dice que la homeopatía funciona»: no es experto en medicina."
        },
        {
          "rel": "apela a la mayoría",
          "t": "Ad populum",
          "d": "«Todos mis amigos compran esta marca; será la mejor»: que algo sea popular no lo hace verdadero."
        }
      ]
    },
    {
      "rel": "informales: deforman",
      "t": "Deforman o exageran",
      "d": "Discuten con una versión falsa o exagerada de lo que se ha dicho.",
      "c": [
        {
          "rel": "caricaturiza al rival",
          "t": "Hombre de paja",
          "k": true,
          "d": "«¿Quieres regular las redes? O sea, ¿quieres censurarlo todo?». Regular no es censurarlo todo."
        },
        {
          "rel": "encadena males sin pruebas",
          "t": "Pendiente resbaladiza",
          "d": "«Si dejamos el móvil en el recreo, luego lo usarán en clase y al final nadie estudiará»."
        }
      ]
    },
    {
      "rel": "informales: saltan sin base",
      "t": "Concluyen sin base suficiente",
      "d": "Sacan conclusiones que los datos no permiten.",
      "c": [
        {
          "rel": "correlación no es causa",
          "t": "Falsa causa",
          "k": true,
          "d": "«Desde que gobierna este partido ha subido el paro; luego lo ha causado él»: puede haber otras causas."
        },
        {
          "rel": "pocos casos",
          "t": "Generalización apresurada",
          "d": "«Dos amigos suspendieron con ese profesor: suspende a todo el mundo». Dos casos no bastan."
        }
      ]
    }
  ],
  "idea": "Ante cualquier argumento, pregunta: ¿se sigue de verdad la conclusión?, ¿qué tiene que ver quién lo dice?, ¿es eso lo que se dijo?, ¿hay pruebas suficientes?"
} });
Object.assign(ESQUEMAS_FIL["FIL-T6-01"], { v2: {
  "pregunta": "¿Por qué existe el Estado: brota de nuestra naturaleza o lo creamos con un pacto?",
  "raiz": "EL ORIGEN DEL ESTADO",
  "raiz_d": "Aristóteles: es natural. Los contractualistas: es un artificio, un pacto para salir del estado de naturaleza (una hipótesis, no un hecho).",
  "ramas": [
    {
      "rel": "respuesta antigua",
      "t": "Origen natural",
      "k": true,
      "a": "Aristóteles",
      "d": "El ser humano es zoon politikón, animal político: la comunidad brota de nuestra condición social.",
      "c": [
        {
          "rel": "quien vive aislado",
          "t": "«O es una bestia o es un dios»",
          "d": "Fuera de la pólis nadie llega a ser plenamente humano."
        }
      ]
    },
    {
      "rel": "pacto por miedo",
      "t": "Soberano absoluto",
      "k": true,
      "a": "Hobbes",
      "d": "Todos ceden su poder a uno solo, el Leviatán, que garantiza la paz.",
      "c": [
        {
          "rel": "para salir de la",
          "t": "Guerra de todos contra todos",
          "d": "«El hombre es un lobo para el hombre»: dominan el miedo y la inseguridad."
        }
      ]
    },
    {
      "rel": "pacto limitado",
      "t": "Estado liberal",
      "k": true,
      "a": "Locke",
      "d": "Poder limitado, división de poderes y derecho a rebelarse contra el tirano.",
      "c": [
        {
          "rel": "para proteger los",
          "t": "Derechos naturales",
          "d": "Vida, libertad y propiedad: existen sin Estado, pero falta un juez imparcial."
        }
      ]
    },
    {
      "rel": "pacto de cada uno con todos",
      "t": "Soberanía popular",
      "k": true,
      "a": "Rousseau",
      "d": "El pueblo se gobierna a sí mismo: raíz de la democracia moderna.",
      "c": [
        {
          "rel": "cada uno obedece a la",
          "t": "Voluntad general",
          "d": "El bien común, no el interés particular."
        },
        {
          "rel": "parte del",
          "t": "Buen salvaje",
          "d": "Libre e igual; es la sociedad la que lo corrompe con la desigualdad y la propiedad."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Estado liberal",
      "rel": "limita el poder que concentra el",
      "a": "Soberano absoluto"
    },
    {
      "de": "Soberanía popular",
      "rel": "pone en el pueblo el poder del",
      "a": "Soberano absoluto"
    }
  ],
  "idea": "Para Aristóteles el Estado es natural; para los modernos, un pacto. Según cómo imaginen la vida sin Estado, Hobbes, Locke y Rousseau llegan a Estados muy distintos."
} });
Object.assign(ESQUEMAS_FIL["FIL-T6-02"], { v2: {
  "pregunta": "¿Qué hace legítimo un poder y justa una sociedad?",
  "raiz": "JUSTICIA, PODER Y DEMOCRACIA",
  "raiz_d": "La filosofía política no describe cómo son las sociedades, sino cómo deberían ser.",
  "ramas": [
    {
      "rel": "¿por qué obedecemos?",
      "t": "Legitimidad",
      "k": true,
      "a": "Weber",
      "d": "Poder es hacer que otros obedezcan; legitimidad, el derecho a mandar que se reconoce como justo.",
      "c": [
        {
          "rel": "tres fuentes",
          "t": "Tradición, carisma y legalidad",
          "d": "«Siempre se ha hecho así»; la fuerza de un líder; obedecer leyes y no personas (Estado moderno)."
        }
      ]
    },
    {
      "rel": "¿qué reparto es justo?",
      "t": "Justicia",
      "k": true,
      "d": "Dar a cada cual lo que le corresponde y repartir con equidad cargas y beneficios.",
      "c": [
        {
          "rel": "según Platón",
          "t": "Cada parte cumple su función",
          "d": "La ciudad justa de la República: sus partes viven en armonía."
        },
        {
          "rel": "según Rawls",
          "t": "El velo de ignorancia",
          "d": "Elegir las reglas sin saber qué lugar ocuparás: iguales libertades y solo desigualdades que ayuden a los que menos tienen."
        }
      ]
    },
    {
      "rel": "¿quién manda?",
      "t": "Formas de gobierno",
      "d": "Uno (monarquía), pocos (aristocracia) o muchos (democracia); degeneran en tiranía, oligarquía y demagogia.",
      "c": [
        {
          "rel": "gobierno del pueblo",
          "t": "Democracia",
          "k": true,
          "d": "Soberanía popular, participación, igualdad ante la ley, pluralismo y división de poderes.",
          "c": [
            {
              "rel": "sus enemigos",
              "t": "Manipulación, desigualdad y apatía"
            }
          ]
        }
      ]
    },
    {
      "rel": "¿qué límite tiene el poder?",
      "t": "Derechos humanos",
      "k": true,
      "d": "Exigencias mínimas de toda persona por el hecho de serlo (Declaración Universal, 1948).",
      "c": [
        {
          "rel": "los garantiza el",
          "t": "Estado de derecho",
          "d": "También el gobierno está sometido a la ley."
        },
        {
          "rel": "los anula el",
          "t": "Totalitarismo",
          "a": "Arendt",
          "d": "Poder que suprime la libertad, la pluralidad y la vida pública."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Estado de derecho",
      "rel": "es condición de la",
      "a": "Democracia"
    },
    {
      "de": "Tradición, carisma y legalidad",
      "rel": "la legalidad es la base del",
      "a": "Estado de derecho"
    }
  ],
  "idea": "Un poder es legítimo cuando quienes obedecen lo reconocen como justo; en democracia, ese poder está limitado por la ley y los derechos humanos."
} });
Object.assign(ESQUEMAS_FIL["FIL-T4-01"], { v2: {
  "pregunta": "¿Cómo se calcula si una fórmula es verdadera, y qué tiene eso que ver con un ordenador?",
  "raiz": "LÓGICA FORMAL",
  "raiz_d": "Un lenguaje de símbolos, sin las ambigüedades del lenguaje corriente, para estudiar la forma de los razonamientos.",
  "ramas": [
    {
      "rel": "une proposiciones con",
      "t": "Conectivas",
      "k": true,
      "d": "El valor de verdad del conjunto (V o F) depende solo del valor de sus partes.",
      "c": [
        {
          "rel": "invierte el valor",
          "t": "Negación ¬p («no p»)",
          "d": "Verdadera si p es falsa; falsa si p es verdadera."
        },
        {
          "rel": "exige las dos",
          "t": "Conjunción p ∧ q («p y q»)",
          "d": "Verdadera solo si p y q son verdaderas."
        },
        {
          "rel": "basta con una",
          "t": "Disyunción p ∨ q («p o q»)",
          "d": "Verdadera si al menos una es verdadera; falsa solo si las dos son falsas."
        },
        {
          "rel": "solo falla en un caso",
          "t": "Condicional p → q («si p, entonces q»)",
          "d": "Falso solo si p es verdadera y q falsa; en los otros tres casos, verdadero."
        }
      ]
    },
    {
      "rel": "se calculan con",
      "t": "Tablas de verdad",
      "k": true,
      "d": "Recorren todas las combinaciones posibles de V y F de las proposiciones.",
      "c": [
        {
          "rel": "hay validez si no existe",
          "t": "Fila con premisas V y conclusión F",
          "d": "Si en ninguna fila las premisas son verdaderas y la conclusión falsa, el razonamiento es válido."
        },
        {
          "rel": "verdadera en todas las filas",
          "t": "Tautología"
        },
        {
          "rel": "falsa en todas las filas",
          "t": "Contradicción"
        }
      ]
    },
    {
      "rel": "se vuelve cálculo en el",
      "t": "Álgebra de Boole",
      "k": true,
      "a": "George Boole (1854)",
      "d": "1 = verdadero y 0 = falso: la conjunción funciona como un producto; la disyunción, como una suma (1 + 1 = 1).",
      "c": [
        {
          "rel": "se construye con",
          "t": "Puertas lógicas",
          "a": "Claude Shannon (1938)",
          "d": "Circuitos AND, OR y NOT: la puerta AND da 1 solo si sus dos entradas son 1, como la conjunción.",
          "c": [
            {
              "rel": "son la base de",
              "t": "Los ordenadores",
              "d": "Cada operación de un procesador es, en el fondo, lógica."
            }
          ]
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Puertas lógicas",
      "rel": "reproducen con electricidad las",
      "a": "Conectivas"
    }
  ],
  "idea": "Con las conectivas y sus tablas de verdad se comprueba si un razonamiento es válido. Boole y Shannon convirtieron ese cálculo en los circuitos de todo ordenador."
} });
Object.assign(ESQUEMAS_FIL["FIL-PRE-01"], { v2: {
  "pregunta": "¿De qué está hecho el mundo y por qué cambia?",
  "raiz": "LOS PRESOCRÁTICOS",
  "raiz_d": "Primeros pensadores griegos (s. VII-V a. C.), llamados «físicos»: buscan el arjé, el principio común de la naturaleza (physis).",
  "ramas": [
    {
      "rel": "un arjé material",
      "t": "Los milesios",
      "k": true,
      "d": "Mileto, s. VI a. C.: piensan «contra Hesíodo», desde la experiencia y no desde los dioses.",
      "c": [
        {
          "rel": "según Tales",
          "t": "El agua",
          "d": "Un principio observable, frente al Océano-dios de Homero."
        },
        {
          "rel": "según Anaximandro",
          "t": "El ápeiron",
          "d": "Lo ilimitado e indeterminado: el principio no puede ser un elemento concreto."
        },
        {
          "rel": "según Anaxímenes",
          "t": "El aire",
          "d": "Por rarefacción (calor) y condensación (frío) genera todas las cosas."
        }
      ]
    },
    {
      "rel": "critica el mito",
      "t": "Contra los dioses antropomórficos",
      "a": "Jenófanes",
      "d": "Si los bueyes pudieran pintar, pintarían dioses con forma de buey.",
      "c": [
        {
          "rel": "propone",
          "t": "Un Dios Uno",
          "d": "Esférico e inmóvil, que «abraza el todo»."
        }
      ]
    },
    {
      "rel": "un arjé inteligible",
      "t": "El número",
      "k": true,
      "a": "Pitágoras",
      "d": "El universo es armónico y musical: su esencia es matemática.",
      "c": [
        {
          "rel": "el alma, inmortal,",
          "t": "Se reencarna (metempsícosis)",
          "d": "Se purifica con la ciencia y la vida contemplativa; influirá en Platón."
        }
      ]
    },
    {
      "rel": "solo la razón lo capta",
      "t": "El ser",
      "k": true,
      "a": "Parménides",
      "d": "Pensar y ser se identifican: el ser es eterno e inmutable.",
      "c": [
        {
          "rel": "lo muestra",
          "t": "La vía de la verdad (razón)",
          "d": "Lo inteligible: el ser, sin cambio."
        },
        {
          "rel": "se opone a",
          "t": "La vía de la opinión (sentidos)",
          "d": "Los sentidos nos muestran un mundo cambiante."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "La vía de la opinión (sentidos)",
      "rel": "desconfía de la experiencia de",
      "a": "Los milesios"
    },
    {
      "de": "El número",
      "rel": "deja atrás el principio material de",
      "a": "Los milesios"
    }
  ],
  "idea": "Los presocráticos cambian la pregunta: ya no qué dios hizo el mundo, sino de qué principio está hecho. Unos lo buscan en la experiencia; Parménides, solo en la razón."
} });
Object.assign(ESQUEMAS_FIL["FIL-HEL-01"], { v2: {
  "pregunta": "¿Cómo se alcanza la felicidad?",
  "raiz": "LAS ESCUELAS HELENÍSTICAS",
  "raiz_d": "Tras Aristóteles y las conquistas de Alejandro, la polis pierde su autonomía y la filosofía se vuelve hacia la vida personal.",
  "ramas": [
    {
      "rel": "el placer del momento",
      "t": "Hedonismo",
      "a": "Aristipo de Cirene",
      "d": "El placer es el bien supremo y el objetivo de la vida.",
      "c": [
        {
          "rel": "se alcanza con el",
          "t": "Carpe diem",
          "d": "Disfrutar el placer inmediato: comida, descanso, placeres cotidianos."
        }
      ]
    },
    {
      "rel": "el placer moderado",
      "t": "Epicureísmo",
      "k": true,
      "a": "Epicuro",
      "d": "El placer no está en el exceso, sino en la moderación.",
      "c": [
        {
          "rel": "se alcanza con la",
          "t": "Ataraxia",
          "k": true,
          "d": "Paz del alma: evitar el dolor y eliminar el miedo a la muerte y a los dioses."
        }
      ]
    },
    {
      "rel": "la virtud y la razón",
      "t": "Estoicismo",
      "k": true,
      "a": "Zenón de Citio, Séneca",
      "d": "No controlamos lo que ocurre, pero sí nuestra reacción.",
      "c": [
        {
          "rel": "se alcanza con el",
          "t": "Autodominio (apatheia)",
          "k": true,
          "d": "Vivir conforme a la naturaleza, aceptar el destino y dominar las pasiones."
        }
      ]
    },
    {
      "rel": "necesitar lo mínimo",
      "t": "Cinismo",
      "a": "Diógenes de Sinope",
      "d": "«Cuanto menos necesito, más feliz soy».",
      "c": [
        {
          "rel": "se alcanza con la",
          "t": "Autosuficiencia",
          "d": "Vida austera, sin bienes materiales y cuestionando las normas sociales."
        }
      ]
    }
  ],
  "cruces": [
    {
      "de": "Epicureísmo",
      "rel": "modera el placer que busca el",
      "a": "Hedonismo"
    },
    {
      "de": "Autodominio (apatheia)",
      "rel": "busca también la serenidad, como la",
      "a": "Ataraxia"
    }
  ],
  "idea": "Una misma pregunta, cuatro respuestas: gozar del momento, gozar con medida, aceptar lo que no depende de mí o necesitar lo mínimo."
} });
/* ===== fin de los esquemas v2 ===== */
