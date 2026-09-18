// Generado por tools/build_bach.js — Bachillerato para el alumnado (sin material del profesor).
const ESQUEMAS = {
 "AA-REL-02": {
  "subject": "hf",
  "block": "A",
  "tema": "Aristóteles",
  "title": "Las causas del cambio",
  "mermaid": "flowchart TD\n  center[\"LAS CAUSAS DEL CAMBIO\"]:::axis\n  intr[\"intrínsecas\"]\n  estr[\"extrínsecas\"]\n  mat[\"material\"]:::key\n  mat_e[\"el sustrato en que ocurre\"]\n  form[\"formal\"]:::key\n  form_e[\"la figura que se adopta\"]\n  erag[\"eficiente\"]:::key\n  erag_e[\"lo que lo pone en marcha\"]\n  xede[\"final\"]:::key\n  xede_e[\"el fin del cambio\"]\n  center -->|\"son estas\"| intr\n  center -->|\"son estas\"| estr\n  intr --> mat\n  intr --> form\n  estr --> erag\n  estr --> xede\n  mat -->|\"es\"| mat_e\n  form -->|\"es\"| form_e\n  erag -->|\"es\"| erag_e\n  xede -->|\"es\"| xede_e\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "BH-REL-01": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "Hume y el empirismo",
  "mermaid": "flowchart TD\n  n0[\"HUME\"]\n  n1[\"Examen del conocimiento\"]\n  n2[\"percepciones\"]:::axis\n  n3[\"impresiones\"]\n  n4[\"ideas\"]\n  n5[\"organizadas por las leyes de asociación de la imaginación\"]\n  n6[\"contigüidad\"]\n  n7[\"causalidad\"]:::key\n  n8[\"semejanza\"]\n  n9[\"conocimiento fáctico\"]:::key\n  n10[\"relaciones entre ideas\"]:::key\n  n11[\"creencia basada en el hábito\"]\n  n12[\"conocimiento universal, necesario\"]\n  n13[\"crítica de la metafísica y la ciencia\"]:::axis\n  n14[\"base de la moral: emotivismo moral\"]:::key\n  n15[\"la idea de sustancia: mundo, dios, yo\"]\n  n16[\"la idea de conexión necesaria\"]\n  n17[\"en el sentimiento\"]\n  n18[\"fenomenismo\"]\n  n19[\"escepticismo\"]\n  n20[\"lo bueno\"]\n  n21[\"la acción\"]\n  n22[\"tolerancia: norma y actitud para la convivencia\"]\n  n23[\"en el pacto\"]\n  n0 --> n1\n  n1 -->|\"su base\"| n2\n  n2 -->|\"se dividen en dos\"| n3\n  n2 --> n4\n  n2 -->|\"son causa de:\"| n5\n  n5 --> n6\n  n5 --> n7\n  n5 --> n8\n  n7 -->|\"se aplican en:\"| n9\n  n8 -->|\"se aplican en:\"| n10\n  n9 -->|\"su base\"| n11\n  n10 -->|\"forman\"| n12\n  n11 --> n13\n  n13 --> n15\n  n13 --> n16\n  n12 --> n14\n  n14 -->|\"¿dónde?\"| n17\n  n15 -->|\"produce\"| n18\n  n16 -->|\"produce\"| n19\n  n17 -->|\"decide\"| n20\n  n17 --> n21\n  n19 -->|\"produce\"| n22\n  n20 -->|\"se expresa\"| n23\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "BH-REL-02": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "El conocimiento en Hume",
  "mermaid": "flowchart TD\n  ezag[\"CONOCIMIENTO\"]:::axis\n  lock[\"Locke y Descartes\"]:::key\n  pertz[\"PERCEPCIONES\"]:::axis\n  eduk[\"todos los contenidos mentales\"]\n  inpr[\"impresiones\"]:::key\n  trin[\"intensas y vivas\"]\n  ideiak[\"ideas\"]:::key\n  ahul[\"débiles y no nítidas\"]\n  esper[\"EXPERIENCIA\"]:::axis\n  desc[\"Descartes\"]:::key\n  sortz[\"ideas innatas, adventicias y facticias\"]\n  ezag -->|\"como para estos\"| lock\n  ezag -->|\"es tener esto\"| pertz\n  pertz -->|\"son estos\"| eduk\n  pertz -->|\"pueden ser estas\"| inpr\n  pertz -->|\"pueden ser estas\"| ideiak\n  inpr -->|\"si son así\"| trin\n  inpr -->|\"producen estas\"| ideiak\n  ideiak -->|\"si son así\"| ahul\n  pertz -->|\"tienen este origen\"| esper\n  esper -->|\"a diferencia de este\"| desc\n  desc -->|\"que aceptaba esto\"| sortz\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CK-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Kant y la Ilustración",
  "mermaid": "flowchart TD\n  n0[\"LA FILOSOFÍA DE KANT\"]\n  n1[\"¿Qué es el hombre?\"]\n  n2[\"¿Qué puedo conocer?\"]:::axis\n  n3[\"¿Qué debo hacer?\"]:::axis\n  n4[\"¿Qué puedo esperar?\"]:::axis\n  n5[\"la libertad\"]\n  n6[\"la inmortalidad del alma\"]\n  n7[\"la existencia de Dios\"]\n  n8[\"condición de la moralidad\"]\n  n9[\"garantía del cumplimiento del deber\"]\n  n10[\"garantía del bien supremo: virtud + felicidad\"]\n  n11[\"partir del hecho de la ciencia\"]\n  n12[\"partir del hecho moral\"]\n  n13[\"uso teórico de la razón\"]\n  n14[\"uso práctico de la razón\"]\n  n15[\"sus condiciones\"]\n  n16[\"sus límites\"]\n  n17[\"condiciones a priori: universales de la ley moral\"]\n  n18[\"condiciones formales a priori\"]\n  n19[\"condiciones materiales: la experiencia\"]\n  n20[\"en el deber como forma de la ley\"]\n  n21[\"de la sensibilidad\"]\n  n22[\"del entendimiento\"]\n  n23[\"de la razón\"]\n  n24[\"en el imperativo categórico\"]:::key\n  n25[\"formas a priori: espacio y tiempo\"]:::key\n  n26[\"categorías\"]:::key\n  n27[\"ideas\"]\n  n0 --> n1\n  n1 --> n2\n  n2 -->|\"hace posible\"| n3\n  n3 -->|\"postula\"| n4\n  n4 --> n5\n  n4 --> n6\n  n4 --> n7\n  n5 --> n8\n  n6 --> n9\n  n7 --> n10\n  n2 --> n11\n  n3 --> n12\n  n11 -->|\"para examinar\"| n13\n  n12 -->|\"para examinar\"| n14\n  n13 -->|\"hace posible\"| n14\n  n13 --> n15\n  n13 -->|\"los constituyen\"| n16\n  n14 -->|\"las establece\"| n17\n  n15 -->|\"¿síntesis de qué son?\"| n18\n  n18 --> n21\n  n18 --> n22\n  n18 --> n23\n  n21 --> n25\n  n22 --> n26\n  n23 --> n27\n  n19 -->|\"no es conocimiento, pues las deja aparte\"| n16\n  n17 -->|\"las encuentra\"| n20\n  n20 -->|\"se expresa\"| n24\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CK-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "El conocimiento sensible (Kant)",
  "mermaid": "flowchart TD\n  erreal[\"LA REALIDAD\"]:::axis\n  gbera[\"la cosa en sí\"]:::key\n  noum[\"el noúmeno\"]:::key\n  kaos[\"caos de sensaciones\"]:::axis\n  subj[\"el sujeto\"]:::key\n  forma[\"formas a priori de la sensibilidad\"]:::axis\n  puru[\"intuiciones puras\"]:::key\n  espa[\"espacio y tiempo\"]\n  objl[\"objeto del conocimiento sensible\"]:::key\n  enp[\"intuición empírica\"]\n  fen[\"fenómeno sensible\"]\n  niret[\"la cosa para mí\"]\n  erreal -->|\"es\"| gbera\n  erreal -->|\"es\"| noum\n  erreal -->|\"envía\"| kaos\n  kaos -->|\"lo componen\"| objl\n  objl -->|\"se llama así\"| enp\n  enp -->|\"o\"| fen\n  fen -->|\"esto es\"| niret\n  kaos -->|\"los organizan\"| forma\n  forma -->|\"se llaman así\"| puru\n  puru -->|\"son estas\"| espa\n  subj -->|\"las tiene\"| forma\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CC-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Comte: la sociedad, la ley de los tres estadios y la ciencia positiva",
  "mermaid": "flowchart TD\n  co[\"COMTE\"]\n  giz[\"LA SOCIEDAD\"]:::axis\n  ord[\"ORDEN\"]:::key\n  aur[\"PROGRESO\"]:::key\n  lege[\"LEY DE LOS TRES ESTADIOS\"]:::axis\n  teo[\"teológico\"]\n  met[\"metafísico\"]\n  pos[\"POSITIVO\"]:::key\n  zient[\"LA CIENCIA\"]:::key\n  gert[\"HECHOS Y LEYES\"]:::key\n  feno[\"explica los fenómenos desde ellos\"]\n  co --> giz\n  giz -->|\"organizada por dos principios\"| ord\n  giz -->|\"organizada por dos principios\"| aur\n  ord -->|\"siguiendo\"| lege\n  aur -->|\"siguiendo\"| lege\n  lege --> teo\n  lege --> met\n  lege --> pos\n  pos -->|\"de ahí\"| zient\n  zient -->|\"investiga\"| gert\n  gert --> feno\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CM-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Hegel y Karl Marx",
  "mermaid": "flowchart TD\n  n0[\"LA FILOSOFÍA DE MARX\"]:::axis\n  n1[\"filosofía alemana\"]\n  n2[\"economía política\"]\n  n3[\"socialismo utópico\"]\n  n4[\"Hegel\"]\n  n5[\"Smith, Ricardo\"]\n  n6[\"Owen · Saint-Simon · Fourier\"]\n  n7[\"Feuerbach\"]\n  n8[\"dialéctica\"]\n  n9[\"materialismo\"]\n  n10[\"teoría del valor-trabajo\"]\n  n11[\"socialismo\"]\n  n12[\"el ser humano\"]\n  n13[\"la naturaleza\"]\n  n14[\"la historia\"]\n  n15[\"actividad creadora: el trabajo\"]\n  n16[\"crea su vida en sociedad\"]\n  n17[\"creación de herramientas (tecnología)\"]\n  n18[\"crece la fuerza productiva\"]\n  n19[\"relación contradictoria\"]\n  n20[\"cambia las relaciones de producción\"]\n  n21[\"relaciones de propiedad\"]\n  n22[\"modo de producción capitalista\"]\n  n23[\"propiedad privada de los medios de producción\"]\n  n24[\"alienación o desposesión de su ser\"]:::axis\n  n25[\"social\"]:::key\n  n26[\"política\"]:::key\n  n27[\"religiosa\"]:::key\n  n28[\"económica\"]:::key\n  n29[\"división en clases sociales\"]\n  n30[\"burguesía\"]\n  n31[\"proletarios\"]\n  n32[\"revolución\"]:::axis\n  n33[\"sociedad sin clases sociales\"]\n  n34[\"fin de la explotación\"]\n  n35[\"superar la alienación y realizar al ser humano\"]\n  n1 --> n4\n  n2 --> n5\n  n3 --> n6\n  n4 --> n8\n  n4 -->|\"Feuerbach\"| n7\n  n7 --> n9\n  n5 --> n10\n  n6 --> n11\n  n8 --> n0\n  n9 --> n0\n  n10 --> n0\n  n11 --> n0\n  n0 --> n12\n  n12 -->|\"es su esencia\"| n15\n  n15 -->|\"mediante ella\"| n16\n  n16 -->|\"la transforma y socializa\"| n13\n  n16 -->|\"aquí se desarrolla dialécticamente\"| n14\n  n16 -->|\"se desarrolla\"| n18\n  n16 --> n19\n  n18 -->|\"por esto\"| n17\n  n20 -->|\"las produce\"| n21\n  n18 -->|\"eso crea\"| n22\n  n20 --> n22\n  n21 --> n23\n  n22 -->|\"eso provoca\"| n24\n  n24 -->|\"provoca\"| n25\n  n24 --> n26\n  n24 --> n27\n  n24 --> n28\n  n24 -->|\"provoca\"| n29\n  n29 -->|\"eso crea\"| n30\n  n29 --> n31\n  n31 -->|\"eso hace\"| n32\n  n32 -->|\"eso trae\"| n33\n  n32 --> n34\n  n33 -->|\"condición para ello\"| n35\n  n34 -->|\"condición para ello\"| n35\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CM-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Las ideologías en el marxismo",
  "mermaid": "flowchart TD\n  ideo[\"LAS IDEOLOGÍAS\"]:::axis\n  kausak[\"causas\"]:::key\n  funtz[\"funciones\"]:::key\n  k1[\"la situación económica de los individuos\"]\n  k2[\"su posición en el proceso de producción\"]\n  k3[\"las relaciones de producción en que están inmersos\"]\n  f1[\"hacer una representación imaginaria de la realidad\"]\n  f2[\"reconstruir la realidad de forma deformada\"]\n  f3[\"cohesionar la estructura social\"]\n  f4[\"legitimar el poder de la clase dirigente\"]\n  osag[\"componentes: Estado, derecho, moral, economía política, religión, filosofía, arte\"]:::key\n  ideo -->|\"causas\"| kausak\n  ideo -->|\"funciones\"| funtz\n  ideo -->|\"componentes\"| osag\n  kausak --> k1\n  kausak --> k2\n  kausak --> k3\n  funtz --> f1\n  funtz --> f2\n  funtz --> f3\n  funtz --> f4\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CF-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Feuerbach: de la alienación religiosa a la república democrática",
  "mermaid": "flowchart TD\n  fe[\"FEUERBACH\"]\n  giz[\"el ser humano es esto\"]:::axis\n  nahi[\"LA VOLUNTAD\"]:::key\n  arr[\"LA RAZÓN\"]:::key\n  sent[\"EL SENTIMIENTO\"]:::key\n  perf[\"pensados como PERFECCIONES DE DIOS\"]:::axis\n  ali[\"el ser humano se ALIENA DE SÍ MISMO\"]:::key\n  bot[\"debe recuperar su poder\"]\n  erre[\"LA REPÚBLICA DEMOCRÁTICA\"]:::key\n  fe --> giz\n  giz --> nahi\n  giz --> arr\n  giz --> sent\n  nahi -->|\"son pensados\"| perf\n  arr -->|\"son pensados\"| perf\n  sent -->|\"son pensados\"| perf\n  perf -->|\"en consecuencia\"| ali\n  ali -->|\"por tanto\"| bot\n  bot -->|\"en ella\"| erre\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5A-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Gramsci: la hegemonía cultural",
  "mermaid": "flowchart TD\n  gra[\"GRAMSCI\"]\n  heg[\"hegemonía cultural\"]:::axis\n  ind[\"la fuerza: el Estado y la ley\"]\n  bai[\"consentimiento y acuerdo\"]:::key\n  intel[\"intelectuales orgánicos\"]:::key\n  zen[\"el sentido común\"]:::key\n  zib[\"la sociedad civil\"]:::axis\n  bloke[\"el bloque histórico\"]\n  ideo[\"interés de clase como interés general\"]\n  ohi[\"costumbre tomada como normal\"]\n  gerra[\"guerra de posiciones\"]:::axis\n  kontra[\"un sentido común nuevo\"]:::key\n  eman[\"la emancipación\"]\n  gra -->|\"concepto central\"| heg\n  heg -->|\"no solo la fuerza\"| ind\n  heg -->|\"también el consentimiento\"| bai\n  heg -->|\"agentes\"| intel\n  bai -->|\"mediante\"| zen\n  bai -->|\"donde\"| zib\n  zib -->|\"escuela, prensa\"| ohi\n  zen -->|\"consecuencia\"| ideo\n  intel -->|\"alianza\"| bloke\n  intel -->|\"lucha cultural\"| gerra\n  gerra -->|\"construir\"| kontra\n  ideo -->|\"romper\"| kontra\n  kontra -->|\"objetivo\"| eman\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5A-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "La Escuela de Frankfurt: la teoría crítica",
  "mermaid": "flowchart TD\n  frk[\"ESCUELA DE FRANKFURT\"]\n  teo[\"Teoría crítica\"]:::axis\n  trad[\"contra la teoría tradicional\"]\n  marx[\"Marx\"]\n  freud[\"Freud\"]\n  weber[\"Weber\"]\n  helb[\"la emancipación\"]:::key\n  hoad[\"Horkheimer y Adorno\"]:::axis\n  mar[\"Marcuse\"]:::axis\n  hab[\"Habermas\"]:::axis\n  ains[\"razón instrumental\"]:::key\n  dial[\"Dialéctica de la Ilustración\"]:::key\n  indk[\"industria cultural\"]\n  uni[\"sociedad unidimensional\"]:::key\n  behf[\"necesidades falsas\"]\n  erre[\"represión excedente\"]\n  komu[\"razón comunicativa\"]:::key\n  elka[\"diálogo y consenso\"]\n  esp[\"la esfera pública\"]\n  frk -->|\"programa\"| teo\n  marx -->|\"fuente\"| teo\n  freud --> teo\n  weber --> teo\n  teo -->|\"objetivo\"| helb\n  teo -->|\"se distingue\"| trad\n  teo --> hoad\n  teo --> mar\n  teo --> hab\n  hoad -->|\"diagnóstico\"| ains\n  ains -->|\"se convierte\"| dial\n  dial -->|\"por ejemplo\"| indk\n  mar -->|\"la sociedad\"| uni\n  uni -->|\"creando\"| behf\n  behf --> erre\n  hab -->|\"salida\"| komu\n  komu -->|\"mediante\"| elka\n  elka --> esp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5B-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Arendt: el análisis del totalitarismo",
  "mermaid": "flowchart TD\n  tot[\"TOTALITARISMO\"]\n  ideo[\"ideología totalizadora\"]:::key\n  ter[\"la lógica del terror\"]:::key\n  masa[\"sociedad de masas\"]\n  bak[\"soledad y atomización\"]:::key\n  sus[\"raíces\"]:::axis\n  anti[\"antisemitismo (Dreyfus)\"]\n  inp[\"imperialismo\"]\n  ban[\"la banalidad del mal\"]:::key\n  eich[\"Eichmann: renuncia a pensar\"]\n  tot --> ideo\n  tot --> ter\n  ideo --> masa\n  ter --> bak\n  tot -->|\"origen\"| sus\n  sus --> anti\n  sus --> inp\n  tot -->|\"consecuencia\"| ban\n  ban --> eich\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5B-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Arendt: vita activa y acción política",
  "mermaid": "flowchart TD\n  vit[\"VITA ACTIVA\"]\n  lan[\"labor (animal laborans)\"]\n  egi[\"trabajo (homo faber)\"]\n  eki[\"acción (zoon politikon)\"]:::axis\n  bizi[\"sobrevivir\"]\n  mundu[\"el mundo de los objetos\"]\n  plu[\"natalidad y pluralidad\"]:::key\n  esp[\"el espacio público\"]:::key\n  bot[\"poder: actuar juntos\"]:::key\n  ind[\"la violencia\"]\n  vit --> lan\n  vit --> egi\n  vit -->|\"la suprema\"| eki\n  lan --> bizi\n  egi --> mundu\n  eki -->|\"fundamento\"| plu\n  eki -->|\"donde\"| esp\n  esp --> bot\n  bot -->|\"se distingue\"| ind\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CdB-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Beauvoir: la mujer, la alteridad y la libertad",
  "mermaid": "flowchart TD\n  be[\"BEAUVOIR\"]\n  tez[\"no se nace mujer, se llega a serlo\"]:::axis\n  best[\"la mujer como la Otra\"]:::key\n  aska[\"la libertad en situación\"]:::key\n  mit[\"los mitos de la feminidad\"]\n  obj[\"dialéctica objeto/sujeto\"]\n  trans[\"trascendencia\"]\n  inm[\"inmanencia\"]\n  gor[\"el cuerpo y la situación\"]\n  be -->|\"tesis\"| tez\n  tez -->|\"la mujer\"| best\n  tez -->|\"proyecto\"| aska\n  best --> mit\n  best -->|\"Hegel\"| obj\n  aska --> trans\n  aska -->|\"contra\"| inm\n  aska --> gor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CdB-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Después de Beauvoir: género y justicia",
  "mermaid": "flowchart TD\n  gen[\"LA CONSTRUCCIÓN DEL GÉNERO\"]\n  but[\"Butler\"]:::axis\n  fra[\"Fraser\"]:::axis\n  nus[\"Nussbaum\"]:::axis\n  perf[\"la performatividad\"]:::key\n  queer[\"la teoría queer\"]\n  bir[\"la redistribución\"]\n  ait[\"el reconocimiento\"]:::key\n  gait[\"las capacidades humanas\"]:::key\n  just[\"justicia de género\"]:::key\n  gen --> but\n  gen --> fra\n  gen --> nus\n  but --> perf\n  perf --> queer\n  fra --> bir\n  fra --> ait\n  nus --> gait\n  bir --> just\n  ait --> just\n  gait --> just\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C8-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "El existencialismo: libertad, absurdo y ser",
  "mermaid": "flowchart TD\n  ext[\"EXISTENCIALISMO\"]\n  tesi[\"la existencia precede a la esencia\"]:::axis\n  fen[\"fenomenología\"]\n  kier[\"Kierkegaard\"]\n  hei[\"HEIDEGGER\"]:::axis\n  sar[\"SARTRE\"]:::axis\n  cam[\"CAMUS\"]:::axis\n  das[\"Dasein: estar-en-el-mundo\"]:::key\n  her[\"ser-para-la-muerte\"]\n  den[\"la temporalidad\"]\n  ask[\"la libertad\"]:::key\n  era[\"la responsabilidad\"]\n  ang[\"la angustia\"]\n  abs[\"el absurdo\"]:::key\n  mat[\"la rebeldía\"]\n  zen[\"dar sentido a la vida\"]\n  aut[\"autenticidad: autor de la propia vida\"]:::key\n  ext -->|\"tesis central\"| tesi\n  fen -->|\"fuente\"| ext\n  kier -->|\"precedente\"| ext\n  tesi -->|\"como ontología\"| hei\n  tesi -->|\"como libertad\"| sar\n  tesi -->|\"como absurdo\"| cam\n  hei -->|\"la pregunta del ser\"| das\n  das -->|\"estructura\"| her\n  her -->|\"base\"| den\n  sar -->|\"el hombre es libertad\"| ask\n  ask -->|\"de ahí\"| era\n  era -->|\"y\"| ang\n  cam -->|\"el mundo es absurdo\"| abs\n  abs -->|\"respuesta\"| mat\n  mat -->|\"creando\"| zen\n  den -->|\"vivir auténticamente\"| aut\n  ang --> aut\n  zen --> aut\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C8K-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Kierkegaard: la angustia de la libertad y el salto de la fe",
  "mermaid": "flowchart TD\n  kk[\"KIERKEGAARD\"]\n  giz[\"el hombre se caracteriza así\"]:::axis\n  ezdet[\"su esencia no lo determina de antemano\"]:::key\n  elegi[\"debe elegirse a sí mismo\"]:::key\n  ezdeus[\"por sí mismo no es nada\"]\n  ahalg[\"toda opción es mera posibilidad\"]\n  angus[\"LA ANGUSTIA\"]:::key\n  etsip[\"LA DESESPERACIÓN\"]:::key\n  fede[\"el salto de la fe: a la pura realidad\"]:::key\n  jaink[\"DIOS\"]:::axis\n  kk --> giz\n  giz --> ezdet\n  giz --> elegi\n  ezdet -->|\"por tanto\"| ezdeus\n  elegi -->|\"pero\"| ahalg\n  ezdeus -->|\"produce\"| angus\n  ahalg -->|\"produce\"| etsip\n  angus -->|\"salimos\"| fede\n  etsip -->|\"salimos\"| fede\n  fede -->|\"es\"| jaink\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C6-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "La posmodernidad: los ejes del fin de los metarrelatos",
  "mermaid": "flowchart TD\n  pm[\"POSMODERNIDAD\"]\n  meta[\"el fin de los metarrelatos\"]\n  niet[\"la herencia de Nietzsche\"]\n  lyo[\"Lyotard\"]:::axis\n  der[\"Derrida\"]:::axis\n  fou[\"Foucault\"]:::axis\n  bau[\"Baudrillard\"]:::axis\n  del[\"Deleuze y Guattari\"]:::axis\n  jak[\"la pérdida de legitimación del saber\"]:::key\n  desk[\"deconstrucción y différance\"]:::key\n  bot[\"poder / saber, biopolítica\"]:::key\n  sim[\"el simulacro\"]:::key\n  erri[\"rizoma y líneas de fuga\"]:::key\n  haber[\"Habermas: modernidad inacabada\"]:::axis\n  vat[\"Vattimo: pensamiento débil\"]\n  ror[\"Rorty: conversación e ironía\"]\n  pm -->|\"diagnóstico central\"| meta\n  pm -->|\"punto de partida\"| niet\n  meta --> lyo\n  meta --> der\n  meta --> fou\n  meta --> bau\n  meta --> del\n  lyo -->|\"el saber\"| jak\n  der -->|\"el texto\"| desk\n  fou -->|\"genealogía\"| bot\n  bau -->|\"hiperrealidad\"| sim\n  del -->|\"no jerárquico\"| erri\n  jak -->|\"contrarrespuesta\"| haber\n  desk -->|\"debilitar el ser\"| vat\n  erri -->|\"conversación\"| ror\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C7-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Los cambios de paradigma",
  "mermaid": "flowchart TD\n  arist[\"Aristóteles\"]:::key\n  org[\"paradigma organicista\"]:::axis\n  magik[\"Paradigma mágico-animista\"]:::axis\n  mek[\"paradigma mecanicista\"]:::axis\n  esp[\"basado en la experiencia\"]:::key\n  anim[\"la naturaleza = un gran animal\"]\n  ezoh[\"acepta fenómenos extraordinarios\"]\n  inoz[\"mentalidad ingenua\"]\n  makin[\"la naturaleza = máquinas\"]:::key\n  hedad[\"lo real: extensión y movimiento\"]\n  ezind[\"no acepta fuerzas ocultas\"]\n  ondor[\"consecuencias: descubrimientos y matemática en la ciencia\"]:::key\n  arist -->|\"este es su origen\"| org\n  org -->|\"sustituyó a este\"| magik\n  magik -->|\"este lo sustituyó\"| mek\n  magik -->|\"se basa\"| esp\n  esp -->|\"cree\"| anim\n  anim -->|\"acepta\"| ezoh\n  ezoh -->|\"produce\"| inoz\n  mek -->|\"la naturaleza es\"| makin\n  makin -->|\"solo lo real\"| hedad\n  makin -->|\"no acepta\"| ezind\n  mek -->|\"la consecuencia es\"| ondor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C9-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "El feminismo: género, alteridad y debates actuales",
  "mermaid": "flowchart TD\n  fem[\"FEMINISMO\"]\n  sgb[\"distinción sexo-género\"]:::axis\n  ola[\"las olas\"]\n  bea[\"Simone de Beauvoir\"]:::axis\n  but[\"Judith Butler\"]:::axis\n  gaur[\"debates actuales\"]\n  alt[\"la alteridad\"]\n  ezda[\"no se nace mujer, se llega a serlo\"]:::key\n  traz[\"trascendencia e inmanencia\"]\n  perf[\"performatividad del género\"]:::key\n  queer[\"teoría queer\"]\n  deseg[\"deshacer el género\"]\n  fra[\"Fraser: redistribución y reconocimiento\"]:::key\n  nus[\"Nussbaum: capacidades\"]:::key\n  inter[\"interseccionalidad\"]:::key\n  zain[\"ética del cuidado e interdependencia\"]:::key\n  fem -->|\"base\"| sgb\n  fem -->|\"contexto\"| ola\n  sgb --> bea\n  sgb --> but\n  sgb --> gaur\n  bea -->|\"el hombre sujeto, la mujer Otra\"| alt\n  alt -->|\"de ahí\"| ezda\n  ezda -->|\"quiere superar\"| traz\n  but -->|\"el género es acto\"| perf\n  perf -->|\"de ahí\"| queer\n  queer --> deseg\n  gaur --> fra\n  gaur --> nus\n  gaur --> inter\n  traz --> zain\n  deseg --> zain\n  inter --> zain\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A2": {
  "subject": "hf",
  "block": "A",
  "tema": "Métodos del filósofo",
  "title": "Métodos y herramientas del filósofo",
  "mermaid": "graph LR\n\n  subgraph A2 [\"A.2 Métodos y herramientas del filósofo\"]\n    subgraph A2a [\"Fuentes de información\"]\n      A2a1[\"Documentos\"]\n      A2a2[\"Conferencias\"]\n      A2a3[\"Huellas digitales\"]\n    end\n    subgraph A2b [\"Herramientas del filósofo\"]\n      A2b1[\"Análisis crítico de las fuentes\"]\n      A2b2[\"Interpretación de documentos\"]\n      A2b3[\"Identificar problemas filosóficos\"]\n      A2b4[\"Diálogo basado en argumentos\"]\n      A2b5[\"Investigación filosófica\"]\n    end\n    A2a --> A2b1\n    A2b2 --> A2b3\n    A2b4 --> A2b5\n  end"
 },
 "ds-A3": {
  "subject": "hf",
  "block": "A",
  "tema": "Origen de la filosofía",
  "title": "El nacimiento de la filosofía en Grecia",
  "mermaid": "graph LR\n\n  subgraph A3 [\"A.3 El nacimiento de la filosofía en Grecia\"]\n    subgraph A3a [\"Transición del mito al logos\"]\n      A3a1[\"Mito - explicaciones imaginativas\"]\n      A3a2[\"Logos - explicaciones racionales\"]\n    end\n    subgraph A3b [\"Factores determinantes\"]\n      A3b1[\"Democracia de la polis - debate en el ágora\"]\n      A3b2[\"La esclavitud - tiempo libre\"]\n      A3b3[\"Religión sin escritura - ausencia de dogmas\"]\n      A3b4[\"Comercio - multiculturalidad\"]\n      A3b5[\"Leyes escritas - debate sistemático\"]\n    end\n    A3b --> A3a\n  end"
 },
 "ds-A4": {
  "subject": "hf",
  "block": "A",
  "tema": "Presocráticos",
  "title": "Presocráticos: la búsqueda del arché",
  "mermaid": "graph LR\n\n  subgraph A4 [\"A.4 Presocráticos - la búsqueda del arché\"]\n    subgraph A4a [\"Físicos - materialistas\"]\n      A4a1[\"Tales → Agua\"]\n      A4a2[\"Anaximandro → Ápeiron\"]\n      A4a3[\"Anaxímenes → Aire\"]\n      A4a4[\"Demócrito → Átomos + vacío\"]\n    end\n    subgraph A4b [\"Otros\"]\n      A4b1[\"Pitágoras → Números\"]\n      A4b2[\"Heráclito → Cambio / fuego\"]\n      A4b3[\"Parménides → Ser inmutable\"]\n      A4b4[\"Empédocles → 4 elementos\"]\n      A4b5[\"Anaxágoras → Nous\"]\n    end\n    A4a --> A4b\n  end"
 },
 "ds-A5": {
  "subject": "hf",
  "block": "A",
  "tema": "Sofistas y Sócrates",
  "title": "Los sofistas y Sócrates",
  "mermaid": "graph LR\n\n  subgraph A5 [\"A.5 Los sofistas y Sócrates\"]\n    subgraph A5a [\"Sofistas\"]\n      A5a1[\"Protágoras, Gorgias\"]\n      A5a2[\"Escepticismo epistemológico\"]\n      A5a3[\"Relativismo moral\"]\n      A5a4[\"Convencionalidad de las leyes\"]\n    end\n    subgraph A5b [\"Sócrates\"]\n      A5b1[\"Universalismo moral\"]\n      A5b2[\"Definiciones universales\"]\n      A5b3[\"Intelectualismo moral\"]\n      A5b4[\"Método: ironía + mayéutica\"]\n    end\n    subgraph A5c [\"Aspasia de Mileto\"]\n      A5c1[\"Maestra de retórica\"]\n      A5c2[\"Maestra de Sócrates\"]\n    end\n    A5a -- contra --> A5b\n    A5c --> A5b\n  end"
 },
 "ds-A6": {
  "subject": "hf",
  "block": "A",
  "tema": "Platón y Aristóteles",
  "title": "Platón y Aristóteles",
  "mermaid": "graph LR\n\n  subgraph A6 [\"A.6 Platón y Aristóteles\"]\n    subgraph A6a [\"Platón\"]\n      A6a1[\"Dualismo: mundo de las Ideas vs. mundo físico\"]\n      A6a2[\"Anamnesis - reminiscencia\"]\n      A6a3[\"Episteme - conocimiento cierto\"]\n      A6a4[\"Doxa - opinión\"]\n    end\n    subgraph A6b [\"Aristóteles\"]\n      A6b1[\"Hilemorfismo: materia + forma\"]\n      A6b2[\"Teoría de las cuatro causas\"]\n      A6b3[\"De la potencia al acto\"]\n    end\n    A6b -- crítica --> A6a\n  end"
 },
 "ds-A7": {
  "subject": "hf",
  "block": "A",
  "tema": "Antropología clásica",
  "title": "Antropología clásica: la psique",
  "mermaid": "graph LR\n\n  subgraph A7 [\"A.7 Antropología clásica - la psique\"]\n    subgraph A7a [\"Sócrates\"]\n      A7a1[\"Conócete a ti mismo\"]\n      A7a2[\"El alma es lo más valioso\"]\n      A7a3[\"Conocimiento = virtud\"]\n    end\n    subgraph A7b [\"Platón\"]\n      A7b1[\"Alma inmortal, tres partes\"]\n      A7b2[\"El cuerpo - cárcel\"]\n      A7b3[\"Dualismo antropológico\"]\n    end\n    subgraph A7c [\"Aristóteles\"]\n      A7c1[\"Alma = forma, no existe sin cuerpo\"]\n      A7c2[\"Tres almas: vegetativa, sensitiva, racional\"]\n      A7c3[\"Unidad sustancial\"]\n    end\n    A7a --> A7b --> A7c\n  end"
 },
 "ds-A8": {
  "subject": "hf",
  "block": "A",
  "tema": "Ética clásica",
  "title": "El debate ético",
  "mermaid": "graph LR\n\n  subgraph A8 [\"A.8 El debate ético\"]\n    subgraph A8a [\"Sócrates - Platón\"]\n      A8a1[\"Intelectualismo moral\"]\n      A8a2[\"Conocimiento → virtud\"]\n      A8a3[\"Nadie obra mal voluntariamente\"]\n    end\n    subgraph A8b [\"Aristóteles\"]\n      A8b1[\"La virtud se cultiva con el hábito\"]\n      A8b2[\"El término medio - entre dos extremos\"]\n      A8b3[\"Eudaimonía - la felicidad como fin\"]\n    end\n    A8b -- diferencia principal --> A8a\n  end"
 },
 "ds-A9": {
  "subject": "hf",
  "block": "A",
  "tema": "Política clásica",
  "title": "El debate político",
  "mermaid": "graph LR\n\n  subgraph A9 [\"A.9 El debate político\"]\n    subgraph A9a [\"Platón - Utopía\"]\n      A9a1[\"Tres clases sociales\"]\n      A9a2[\"Reyes filósofos\"]\n      A9a3[\"Crítica de la democracia\"]\n    end\n    subgraph A9b [\"Aristóteles - Política realista\"]\n      A9b1[\"Zoon politikon - animal político\"]\n      A9b2[\"Tres gobiernos rectos: monarquía, aristocracia, república\"]\n      A9b3[\"Tres gobiernos desviados: tiranía, oligarquía, demagogia\"]\n      A9b4[\"La república es la mejor\"]\n    end\n    A9b -- más pragmático --> A9a\n  end"
 },
 "ds-A10": {
  "subject": "hf",
  "block": "A",
  "tema": "Helenismo",
  "title": "Las escuelas helenísticas",
  "mermaid": "graph LR\n\n  subgraph A10 [\"A.10 Escuelas helenísticas\"]\n    subgraph A10a [\"Epicureísmo\"]\n      A10a1[\"El placer como fin\"]\n      A10a2[\"Ataraxia - serenidad del alma\"]\n    end\n    subgraph A10b [\"Estoicismo\"]\n      A10b1[\"Aceptar el destino\"]\n      A10b2[\"Apatía - controlar los sentimientos\"]\n    end\n    subgraph A10c [\"Cinismo\"]\n      A10c1[\"Volver a la naturaleza\"]\n      A10c2[\"Autarquía - gobernarse a uno mismo\"]\n    end\n    subgraph A10d [\"Escepticismo\"]\n      A10d1[\"Epojé - suspensión del juicio\"]\n      A10d2[\"Alcanzar la ataraxia renunciando al conocimiento\"]\n    end\n  end"
 },
 "ds-B1": {
  "subject": "hf",
  "block": "B",
  "tema": "Filosofía medieval",
  "title": "La filosofía medieval",
  "mermaid": "graph LR\n\n  subgraph B1 [\"B.1 La filosofía medieval\"]\n    subgraph B1a [\"Etapas\"]\n      B1a1[\"Patrística - Agustín\"]\n      B1a2[\"Escolástica temprana - Anselmo\"]\n      B1a3[\"Escolástica tardía - Tomás de Aquino\"]\n      B1a4[\"Nominalismo - Ockham\"]\n    end\n    subgraph B1b [\"Pruebas de la existencia de Dios\"]\n      B1b1[\"Agustín: la verdad interior\"]\n      B1b2[\"Tomás de Aquino: las cinco vías\"]\n      B1b3[\"Ockham: las pruebas en duda\"]\n    end\n    B1a --> B1b\n  end"
 },
 "ds-B2": {
  "subject": "hf",
  "block": "B",
  "tema": "Fe y razón",
  "title": "Fe y razón",
  "mermaid": "graph LR\n\n  subgraph B2 [\"B.2 Fe y razón\"]\n    subgraph B2a [\"Agustín\"]\n      B2a1[\"Creer para entender, entender para creer\"]\n      B2a2[\"Fe y razón son compatibles\"]\n    end\n    subgraph B2b [\"Tomás de Aquino\"]\n      B2b1[\"Ámbitos distintos: filosofía vs teología\"]\n      B2b2[\"Compatibles - preámbulos de la fe\"]\n    end\n    subgraph B2c [\"Tertuliano\"]\n      B2c1[\"La fe basta, la razón no tiene nada que ver\"]\n    end\n  end"
 },
 "ds-B3": {
  "subject": "hf",
  "block": "B",
  "tema": "Renacimiento",
  "title": "El Renacimiento",
  "mermaid": "graph LR\n\n  subgraph B3 [\"B.3 El Renacimiento\"]\n    subgraph B3a [\"Cambios sociales\"]\n      B3a1[\"La crisis del feudalismo\"]\n      B3a2[\"El fortalecimiento de la burguesía\"]\n      B3a3[\"La imprenta - Gutenberg\"]\n    end\n    subgraph B3b [\"Antropocentrismo\"]\n      B3b1[\"El ser humano en el centro\"]\n      B3b2[\"Humanismo\"]\n    end\n    subgraph B3c [\"Revolución científica\"]\n      B3c1[\"Heliocentrismo - Copérnico, Galileo\"]\n      B3c2[\"Método empírico\"]\n    end\n    B3a --> B3b --> B3c\n  end"
 },
 "ds-B4": {
  "subject": "hf",
  "block": "B",
  "tema": "Racionalismo y empirismo",
  "title": "Racionalismo y empirismo",
  "mermaid": "graph LR\n\n  subgraph B4 [\"B.4 Racionalismo y empirismo\"]\n    subgraph B4a [\"Racionalismo - Descartes\"]\n      B4a1[\"La fuente del conocimiento: la razón\"]\n      B4a2[\"Ideas innatas - a priori\"]\n      B4a3[\"Método matemático-deductivo\"]\n      B4a4[\"Cogito ergo sum\"]\n    end\n    subgraph B4b [\"Empirismo - Hume\"]\n      B4b1[\"La fuente del conocimiento: la experiencia\"]\n      B4b2[\"Tabula rasa\"]\n      B4b3[\"Conocimiento probabilístico\"]\n      B4b4[\"Crítica de la causalidad\"]\n    end\n    B4a -- contra --> B4b\n  end"
 },
 "ds-B5": {
  "subject": "hf",
  "block": "B",
  "tema": "Sustancia (modernos)",
  "title": "El debate moderno sobre la sustancia",
  "mermaid": "graph LR\n\n  subgraph B5 [\"B.5 El debate moderno sobre la sustancia\"]\n    subgraph B5a [\"Descartes - Dualismo\"]\n      B5a1[\"Tres sustancias\"]\n      B5a2[\"Alma y cuerpo separados\"]\n      B5a3[\"La glándula pineal - interacción\"]\n    end\n    subgraph B5b [\"Spinoza - Panteísmo\"]\n      B5b1[\"Una sola sustancia: Dios o Naturaleza\"]\n      B5b2[\"Cuerpo y alma, dos aspectos de una misma realidad\"]\n    end\n    subgraph B5c [\"Leibniz - Monadología\"]\n      B5c1[\"Mónadas - sustancias simples\"]\n      B5c2[\"Armonía preestablecida\"]\n    end\n    B5a -- problema --> B5b\n    B5a -- problema --> B5c\n  end"
 },
 "ds-B6": {
  "subject": "hf",
  "block": "B",
  "tema": "Contrato social",
  "title": "El contrato social",
  "mermaid": "graph LR\n\n  subgraph B6 [\"B.6 El contrato social\"]\n    subgraph B6a [\"Hobbes\"]\n      B6a1[\"Homo homini lupus\"]\n      B6a2[\"Leviatán - monarquía absoluta\"]\n    end\n    subgraph B6b [\"Locke\"]\n      B6b1[\"Derechos naturales: vida, libertad, propiedad\"]\n      B6b2[\"Monarquía parlamentaria\"]\n      B6b3[\"Separación de poderes\"]\n    end\n    subgraph B6c [\"Rousseau\"]\n      B6c1[\"La voluntad general\"]\n      B6c2[\"Democracia asamblearia\"]\n    end\n    B6a --> B6b --> B6c\n  end"
 },
 "ds-B7": {
  "subject": "hf",
  "block": "B",
  "tema": "Utilitarismo y liberalismo",
  "title": "Utilitarismo, liberalismo y capitalismo",
  "mermaid": "graph LR\n\n  subgraph B7 [\"B.7 Utilitarismo, liberalismo, capitalismo\"]\n    subgraph B7a [\"Utilitarismo - Bentham, Mill\"]\n      B7a1[\"La mayor felicidad para el mayor número de personas\"]\n      B7a2[\"Placer vs dolor\"]\n    end\n    subgraph B7b [\"Liberalismo\"]\n      B7b1[\"La primacía del individuo\"]\n      B7b2[\"Propiedad privada\"]\n      B7b3[\"La neutralidad del Estado\"]\n    end\n    subgraph B7c [\"Adam Smith - Capitalismo\"]\n      B7c1[\"La mano invisible\"]\n      B7c2[\"El interés personal trae el bienestar general\"]\n    end\n    subgraph B7d [\"Azurmendi - Cooperación\"]\n      B7d1[\"El ser humano tiene una tendencia cooperativa innata\"]\n      B7d2[\"No solo competitivo\"]\n    end\n    B7b --> B7c\n    B7d -- crítica --> B7c\n  end"
 },
 "ds-C1": {
  "subject": "hf",
  "block": "C",
  "tema": "Ilustración",
  "title": "La Ilustración: razón y derechos",
  "mermaid": "graph LR\n\n  subgraph C1 [\"C.1 La Ilustración\"]\n    subgraph C1a [\"Un nuevo modelo de razón\"]\n      C1a1[\"Razón crítica\"]\n      C1a2[\"Razón autónoma\"]\n    end\n    subgraph C1b [\"Derechos naturales\"]\n      C1b1[\"Rechazo del absolutismo\"]\n      C1b2[\"Separación de poderes - Montesquieu\"]\n      C1b3[\"Soberanía popular - Rousseau\"]\n    end\n    subgraph C1c [\"La primera ola del feminismo\"]\n      C1c1[\"Mary Wollstonecraft\"]\n      C1c2[\"Olympe de Gouges\"]\n    end\n    C1a --> C1b --> C1c\n  end"
 },
 "ds-C2": {
  "subject": "hf",
  "block": "C",
  "tema": "Kant",
  "title": "La filosofía crítica de Kant",
  "mermaid": "graph LR\n\n  subgraph C2 [\"C.2 La filosofía crítica de Kant\"]\n    subgraph C2a [\"Criticismo\"]\n      C2a1[\"Unir racionalismo + empirismo\"]\n      C2a2[\"Conocimiento = materia (a posteriori) + forma (a priori)\"]\n    end\n    subgraph C2b [\"Fenómeno / Noúmeno\"]\n      C2b1[\"Fenómeno - la realidad que aparece (se puede conocer)\"]\n      C2b2[\"Noúmeno - la realidad en sí (incognoscible)\"]\n    end\n    subgraph C2c [\"El problema de la metafísica\"]\n      C2c1[\"La metafísica no puede ser ciencia\"]\n      C2c2[\"Los objetos trascendentes no se pueden demostrar\"]\n    end\n    C2a --> C2b --> C2c\n  end"
 },
 "ds-C3": {
  "subject": "hf",
  "block": "C",
  "tema": "Ética moderna",
  "title": "Ética: Kant frente al utilitarismo",
  "mermaid": "graph LR\n\n  subgraph C3 [\"C.3 Ética: Kant vs Utilitarismo\"]\n    subgraph C3a [\"Kant - Ética deontológica\"]\n      C3a1[\"La ética del deber\"]\n      C3a2[\"Imperativo categórico\"]\n      C3a3[\"La persona como fin, no como medio\"]\n    end\n    subgraph C3b [\"Utilitarismo - Bentham, Mill\"]\n      C3b1[\"Ética consecuencialista\"]\n      C3b2[\"Valora las consecuencias\"]\n      C3b3[\"La mayor felicidad para el mayor número de personas\"]\n    end\n    subgraph C3c [\"Azurmendi - Relativismo relativo\"]\n      C3c1[\"No hay un fundamento ético absoluto\"]\n      C3c2[\"Los valores dependen del contexto\"]\n    end\n    C3a -- contra --> C3b\n    C3c --> C3a & C3b\n  end"
 },
 "ds-C4": {
  "subject": "hf",
  "block": "C",
  "tema": "Filósofos de la sospecha",
  "title": "Los filósofos de la sospecha",
  "mermaid": "graph LR\n\n  subgraph C4 [\"C.4 Los filósofos de la sospecha\"]\n    subgraph C4a [\"Marx\"]\n      C4a1[\"Alienación económica\"]\n      C4a2[\"Materialismo histórico\"]\n      C4a3[\"Revolución - sociedad comunista\"]\n    end\n    subgraph C4b [\"Nietzsche\"]\n      C4b1[\"Nihilismo\"]\n      C4b2[\"La muerte de Dios\"]\n      C4b3[\"El superhombre\"]\n      C4b4[\"La voluntad de poder\"]\n    end\n    subgraph C4c [\"Freud\"]\n      C4c1[\"El inconsciente\"]\n      C4c2[\"Ello, yo, superyó\"]\n      C4c3[\"Eros y thanatos\"]\n    end\n  end"
 },
 "ds-C5": {
  "subject": "hf",
  "block": "C",
  "tema": "Crítica del capitalismo",
  "title": "La crítica del capitalismo",
  "mermaid": "graph LR\n\n  subgraph C5 [\"C.5 La crítica del capitalismo\"]\n    subgraph C5a [\"La Escuela de Frankfurt\"]\n      C5a1[\"Razón instrumental\"]\n      C5a2[\"Industria cultural\"]\n      C5a3[\"Deshumanización\"]\n    end\n    subgraph C5b [\"Hannah Arendt\"]\n      C5b1[\"Análisis del totalitarismo\"]\n      C5b2[\"Ideología totalizadora\"]\n      C5b3[\"La anulación de la esfera pública/privada\"]\n    end\n    subgraph C5c [\"John Rawls\"]\n      C5c1[\"La justicia como equidad\"]\n      C5c2[\"El Estado del bienestar\"]\n    end\n  end"
 },
 "ds-C6": {
  "subject": "hf",
  "block": "C",
  "tema": "Postmodernidad",
  "title": "Nietzsche y la postmodernidad",
  "mermaid": "graph LR\n\n  subgraph C6 [\"C.6 Nietzsche y la postmodernidad\"]\n    subgraph C6a [\"Nietzsche - Deconstrucción\"]\n      C6a1[\"Crítica de la verdad objetiva\"]\n      C6a2[\"Crítica de la metafísica\"]\n      C6a3[\"Crítica del dualismo\"]\n    end\n    subgraph C6b [\"Postmodernidad\"]\n      C6b1[\"Crítica de las verdades universales\"]\n      C6b2[\"Pluralidad y diferencia\"]\n    end\n    subgraph C6c [\"Habermas - Defensa de la modernidad\"]\n      C6c1[\"Razón comunicativa\"]\n      C6c2[\"El proyecto no se ha agotado\"]\n    end\n    C6a --> C6b\n    C6c -- crítica --> C6b\n  end"
 },
 "ds-C7": {
  "subject": "hf",
  "block": "C",
  "tema": "Filosofía del lenguaje",
  "title": "La filosofía del lenguaje",
  "mermaid": "graph LR\n\n  subgraph C7 [\"C.7 La filosofía del lenguaje\"]\n    subgraph C7a [\"Wittgenstein - el primero\"]\n      C7a1[\"El lenguaje = imagen del mundo\"]\n      C7a2[\"Metafísica sin sentido\"]\n      C7a3[\"De lo que no se puede hablar, hay que callar\"]\n    end\n    subgraph C7b [\"Wittgenstein - el segundo\"]\n      C7b1[\"El significado = el uso\"]\n      C7b2[\"Juegos de lenguaje\"]\n      C7b3[\"Filosofía terapéutica\"]\n    end\n    subgraph C7c [\"Txillardegi\"]\n      C7c1[\"La lengua condiciona el pensamiento\"]\n      C7c2[\"Estructurador inconsciente\"]\n      C7c3[\"La supervivencia del euskera - difícil sin un Estado vasco\"]\n    end\n    C7a --> C7b\n    C7c -- desde el euskera --> C7b\n  end"
 },
 "ds-C8": {
  "subject": "hf",
  "block": "C",
  "tema": "Existencialismo",
  "title": "El existencialismo",
  "mermaid": "graph LR\n\n  subgraph C8 [\"C.8 El existencialismo\"]\n    subgraph C8a [\"Sartre - Existencialismo ateo\"]\n      C8a1[\"La existencia precede a la esencia\"]\n      C8a2[\"Condenados a ser libres\"]\n    end\n    subgraph C8b [\"Heidegger\"]\n      C8b1[\"Distinguir el ser y los entes\"]\n      C8b2[\"Dasein - proyectado en el mundo\"]\n    end\n    subgraph C8c [\"Ortega y Gasset\"]\n      C8c1[\"La razón vital\"]\n      C8c2[\"Yo soy yo y mi circunstancia\"]\n    end\n    subgraph C8d [\"Unamuno - Existencialismo cristiano\"]\n      C8d1[\"El sentimiento trágico de la vida\"]\n      C8d2[\"El ansia de inmortalidad\"]\n    end\n  end"
 },
 "ds-C9": {
  "subject": "hf",
  "block": "C",
  "tema": "Beauvoir / feminismo",
  "title": "Simone de Beauvoir: el feminismo",
  "mermaid": "graph LR\n\n  subgraph C9 [\"C.9 Simone de Beauvoir - Feminismo\"]\n    subgraph C9a [\"No se nace mujer, se llega a serlo\"]\n      C9a1[\"No existe una esencia femenina fija\"]\n      C9a2[\"La cultura la construye\"]\n    end\n    subgraph C9b [\"La alteridad - el segundo sexo\"]\n      C9b1[\"El hombre = sujeto absoluto\"]\n      C9b2[\"La mujer = la otra, lo complementario\"]\n      C9b3[\"La dialéctica del amo y el esclavo\"]\n    end\n    subgraph C9c [\"Emancipación\"]\n      C9c1[\"Educación igualitaria\"]\n      C9c2[\"Derecho al aborto y a la anticoncepción\"]\n      C9c3[\"Autonomía económica\"]\n    end\n    C9a --> C9b --> C9c\n  end"
 }
};
