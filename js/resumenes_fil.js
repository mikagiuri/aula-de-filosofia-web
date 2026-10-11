"use strict";
/* ===== Resúmenes de Filosofía 1.º (12-10-2026) — grupo «F1» =====
   Un resumen por tema del curso, con el mismo formato que los de Historia de la Filosofía (esquemas_autor.js):
   pregunta guía, apartados con su idea y sus conceptos (t: término, d: explicación, a: autores) e idea clave.
   Sale de la teoría de cada tema (theory.js, fil-*). Datos puros (traducibles por la cadena i18n);
   la vista «Resúmenes» (esquemas_autorview.js) los junta con los de HF. */
const RESUMENES_FIL = [
 {
  "title": "¿Qué es la filosofía?",
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 1",
  "pregunta": "¿Qué es la filosofía y en qué se distingue de otras formas de saber?",
  "sections": [
   {
    "heading": "Amor a la sabiduría",
    "d": "Philía (amor) y sophía (sabiduría): el filósofo no posee la verdad, la desea y la busca.",
    "items": [
     {
      "t": "Actitud y saber",
      "d": "una manera de preguntar ante la vida y, a la vez, el conjunto de teorías y problemas elaborados a lo largo de la historia"
     },
     {
      "t": "El asombro",
      "d": "extrañarse ante lo que parece obvio lleva a preguntar por qué",
      "a": "Platón, Aristóteles"
     },
     {
      "t": "Saber que no se sabe",
      "d": "reconocer la propia ignorancia es el primer paso para aprender",
      "a": "Sócrates"
     },
     {
      "t": "Preguntas filosóficas",
      "d": "no las cierra un dato (ciencia), ni un cálculo (matemáticas), ni el gusto (opinión): solo la calidad de los argumentos"
     }
    ]
   },
   {
    "heading": "Del mito al logos",
    "d": "Grecia, siglo VI a. C.: de los relatos sobre dioses a las explicaciones racionales.",
    "items": [
     {
      "t": "Mito",
      "d": "relato tradicional y anónimo; antropomórfico, animista, arbitrario, normativo y acrítico"
     },
     {
      "t": "Logos",
      "d": "busca causas naturales (el arché), argumenta, tiene autor y admite la crítica",
      "a": "Tales de Mileto"
     },
     {
      "t": "Un matiz",
      "d": "el mito ya es pensamiento: cambia la forma (conceptos en vez de imágenes), y el paso no fue lineal",
      "a": "Hegel"
     }
    ]
   },
   {
    "heading": "Tres tipos de saber",
    "d": "No se excluyen: se complementan.",
    "items": [
     {
      "t": "Saber común",
      "d": "espontáneo y útil para la vida diaria, pero no reflexivo; tiende a los prejuicios"
     },
     {
      "t": "Saber científico",
      "d": "causas próximas de una parcela de la realidad, por observación y experimento"
     },
     {
      "t": "Saber filosófico",
      "d": "primeros principios y causas últimas; busca una visión de conjunto (cosmovisión)"
     }
    ]
   },
   {
    "heading": "Rasgos del saber filosófico",
    "d": "Racional, crítico, radical, universal, sistemático y práctico.",
    "items": [
     {
      "t": "Radical",
      "d": "va a la raíz (radix) de los problemas: la libertad, el bien, el sentido de la vida"
     },
     {
      "t": "Práctico",
      "d": "también piensa cómo vivir: de ahí la ética y la filosofía política"
     },
     {
      "t": "Abierto e histórico",
      "d": "sus respuestas se revisan, pero no todas valen lo mismo: unas están mejor argumentadas (no es relativismo)"
     }
    ]
   },
   {
    "heading": "Las ramas de la filosofía",
    "items": [
     {
      "t": "Metafísica",
      "d": "qué es ser y qué existe; la rama más antigua (la «filosofía primera»)",
      "a": "Aristóteles"
     },
     {
      "t": "Teoría del conocimiento",
      "d": "qué podemos conocer y qué es la verdad"
     },
     {
      "t": "Lógica",
      "d": "la corrección de los razonamientos"
     },
     {
      "t": "Ética y filosofía política",
      "d": "cómo debemos actuar y cómo organizar la vida en común"
     },
     {
      "t": "Estética",
      "d": "la belleza y el arte"
     },
     {
      "t": "Antropología filosófica",
      "d": "qué es el ser humano; la más joven, disciplina propia desde 1928",
      "a": "Kant, Max Scheler"
     }
    ]
   },
   {
    "heading": "La filosofía y los otros saberes",
    "d": "No compite con ellos: dialoga.",
    "items": [
     {
      "t": "Ciencia",
      "d": "comparte la razón, pero estudia parcelas comprobables; las ciencias se independizaron de la filosofía al encontrar su método",
      "a": "Newton"
     },
     {
      "t": "Religión",
      "d": "las mismas grandes preguntas, respondidas desde la fe y la revelación"
     },
     {
      "t": "Arte",
      "d": "comparte el asombro, pero se expresa con obras que nos hacen sentir"
     },
     {
      "t": "Derecho",
      "d": "sus normas se imponen desde fuera, con sanciones; las éticas obligan desde la conciencia"
     }
    ]
   },
   {
    "heading": "Cuatro etapas",
    "items": [
     {
      "t": "Antigua",
      "d": "del arché de la naturaleza al ser humano; Platón, Aristóteles y las escuelas helenísticas",
      "a": "presocráticos, Sócrates"
     },
     {
      "t": "Medieval",
      "d": "la relación entre razón y fe",
      "a": "Agustín de Hipona, Tomás de Aquino"
     },
     {
      "t": "Moderna",
      "d": "el conocimiento: racionalismo, empirismo y la síntesis crítica",
      "a": "Descartes, Locke, Hume, Kant"
     },
     {
      "t": "Contemporánea",
      "d": "muy diversa: marxismo, vitalismo, existencialismo, filosofía analítica",
      "a": "Marx, Nietzsche, Beauvoir, Arendt, Zambrano"
     }
    ]
   }
  ],
  "idea": "Filosofar es buscar con razones respuestas a las preguntas que no cierra ni un dato ni un cálculo; ese saber crítico y radical nació en Grecia con el paso del mito al logos."
 },
 {
  "title": "Los orígenes de la filosofía: los presocráticos",
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 1",
  "pregunta": "¿De qué está hecho todo y por qué cambia, según los primeros filósofos griegos?",
  "sections": [
   {
    "heading": "¿Quiénes fueron los presocráticos?",
    "d": "Los primeros pensadores griegos (siglos VII-V a. C.); el nombre es doblemente impreciso.",
    "items": [
     {
      "t": "Físicos",
      "d": "la mayoría estudia la physis (la naturaleza); algunos los llaman «pre-filósofos» porque aún no se separaban filosofía, ciencia y religión"
     },
     {
      "t": "Arjé",
      "d": "principio común que explica de qué está hecho el mundo y por qué cambia, ante la pluralidad y el cambio de las cosas"
     },
     {
      "t": "Contra Hesíodo",
      "d": "en Mileto, ciudad comercial y abierta, buscan elementos comunes en vez de genealogías de dioses; pero el arjé aún tiene rasgos divinos"
     }
    ]
   },
   {
    "heading": "Los milesios y Jenófanes",
    "items": [
     {
      "t": "Agua",
      "d": "el arjé es un principio visible y observable, frente al Océano-dios de Homero; además, predijo el eclipse del 585 a. C.",
      "a": "Tales de Mileto"
     },
     {
      "t": "Ápeiron",
      "d": "lo ilimitado e indeterminado, inmortal e indestructible; fue el primero en usar la palabra arjé",
      "a": "Anaximandro"
     },
     {
      "t": "Aire",
      "d": "por rarefacción (calor) y condensación (frío) genera todas las cosas",
      "a": "Anaxímenes"
     },
     {
      "t": "Crítica de los dioses antropomórficos",
      "d": "cada pueblo pinta a los dioses a su imagen; propone un Dios Uno, esférico e inmóvil",
      "a": "Jenófanes de Colofón"
     }
    ]
   },
   {
    "heading": "Pitágoras de Samos",
    "d": "Una cofradía religiosa: la realidad auténtica es la inteligible y su esencia es matemática.",
    "items": [
     {
      "t": "Número y armonía",
      "d": "el universo es armónico, musical y numérico; símbolo sagrado: la tetractys (1+2+3+4 = 10)",
      "a": "pitagóricos"
     },
     {
      "t": "Tabla de opuestos",
      "d": "diez pares: límite/ilimitado, par/impar, uno/múltiple, luz/oscuridad, bueno/malo…"
     },
     {
      "t": "Metempsícosis",
      "d": "el alma se reencarna hasta purificarse con la ciencia y la vida contemplativa; idea tomada del orfismo, influirá en Platón"
     }
    ]
   },
   {
    "heading": "Parménides y Heráclito",
    "d": "El ser inmutable frente al devenir regido por un logos.",
    "items": [
     {
      "t": "Vía del ser",
      "d": "la de la verdad y la razón: pensar y ser se identifican; el ser es eterno e inmutable; el no ser es impensable",
      "a": "Parménides"
     },
     {
      "t": "Vía de la opinión",
      "d": "la de los sentidos, que muestran un mundo cambiante",
      "a": "Parménides"
     },
     {
      "t": "Devenir y lucha de contrarios",
      "d": "nada permanece igual; «la guerra es padre de todas las cosas»; el fuego expresa el cambio",
      "a": "Heráclito"
     },
     {
      "t": "Logos",
      "d": "ley racional común bajo el cambio; los sentidos no bastan si no se entiende el logos",
      "a": "Heráclito"
     },
     {
      "t": "Caso trampa: «todo fluye»",
      "d": "panta rhei no aparece en sus fragmentos: es un resumen posterior; lo estable es la ley del cambio",
      "a": "Heráclito"
     }
    ]
   },
   {
    "heading": "Zenón de Elea: las paradojas del movimiento",
    "d": "Defiende a Parménides: aceptar el movimiento y la pluralidad lleva a contradicciones.",
    "items": [
     {
      "t": "Dicotomía, Aquiles y la flecha",
      "d": "nunca se empieza a andar; el más rápido no alcanza al más lento; la flecha está quieta en cada instante",
      "a": "Zenón"
     },
     {
      "t": "Caso trampa: ¿resuelto?",
      "d": "una suma infinita puede dar un resultado finito, pero se discute si eso responde a la pregunta de fondo"
     }
    ]
   },
   {
    "heading": "Pluralistas y atomistas",
    "d": "Tras Parménides, el ser no nace ni perece: nacer y morir es mezcla y separación.",
    "items": [
     {
      "t": "Cuatro raíces",
      "d": "fuego, aire, agua y tierra, movidas por el Amor y el Odio; que se arrojara al Etna es una leyenda",
      "a": "Empédocles de Agrigento"
     },
     {
      "t": "Semillas y nous",
      "d": "«en todo hay una parte de todo»; el intelecto ordena la mezcla; Sócrates quedó decepcionado al leerlo",
      "a": "Anaxágoras de Clazómenas"
     },
     {
      "t": "Átomos y vacío",
      "d": "partículas indivisibles, eternas y sin cualidades; el vacío es el no ser; todo ocurre por necesidad",
      "a": "Leucipo, Demócrito"
     },
     {
      "t": "Por convención",
      "d": "colores, sabores o calor no están en las cosas: en realidad, átomos y vacío",
      "a": "Demócrito"
     },
     {
      "t": "Caso trampa: no son los de la química",
      "d": "los de Demócrito eran indivisibles por definición; el átomo químico tiene partes y se puede dividir"
     }
    ]
   },
   {
    "heading": "Un mapa por problemas",
    "d": "Los presocráticos dejan problemas que la filosofía sigue discutiendo.",
    "items": [
     {
      "t": "¿De qué está hecho todo?",
      "d": "un principio, varios principios, átomos y vacío, o el número como estructura"
     },
     {
      "t": "¿Es real el cambio?",
      "d": "sí, regido por un logos; no, es apariencia; o es mezcla y separación de algo que no cambia",
      "a": "Heráclito, Parménides, Zenón"
     },
     {
      "t": "¿Razón o sentidos?",
      "d": "solo la razón (Parménides); los sentidos con el logos (Heráclito); los sentidos «oscuros» que la razón corrige (Demócrito)"
     },
     {
      "t": "¿Qué mueve el mundo?",
      "d": "el Amor y el Odio, el nous, o la necesidad del choque de los átomos",
      "a": "Empédocles, Anaxágoras, Leucipo, Demócrito"
     }
    ]
   },
   {
    "heading": "Lectura: «Tales y el Escriba»",
    "d": "Diálogo didáctico del profesor sobre por qué la filosofía nace en Grecia.",
    "items": [
     {
      "t": "Mito frente a logos",
      "d": "mitos incuestionables, dictados por un poder absoluto, frente a la pregunta y la petición de razones"
     },
     {
      "t": "Plaza frente a estrado",
      "d": "diálogo entre iguales y poder que circula, frente a la autoridad del faraón y de la tradición"
     },
     {
      "t": "Vida tempestuosa frente a inmóvil",
      "d": "una civilización ritual que se repite frente a una vida imprevista que crece desde la pregunta"
     }
    ]
   }
  ],
  "idea": "Los presocráticos sustituyen los relatos sobre dioses por la búsqueda racional de un arjé, y dejan abiertos los grandes problemas: de qué está hecho todo, si el cambio es real y si se conoce con la razón o con los sentidos."
 },
 {
  "title": "¿Qué es el ser humano?",
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 2",
  "pregunta": "¿Qué somos los seres humanos y qué nos distingue del resto de los seres vivos?",
  "sections": [
   {
    "heading": "Un enigma para sí mismo",
    "d": "El ser humano es a la vez sujeto y objeto de la pregunta por lo que es.",
    "items": [
     {
      "t": "Antropología filosófica",
      "d": "busca con conceptos y argumentos lo que nos define; no es la antropología científica o cultural, que describe pueblos y costumbres"
     },
     {
      "t": "Seres complejos",
      "d": "cuerpo y mente, biología y cultura, individuo y sociedad, condicionamiento y libertad; ninguna respuesta ha cerrado el debate"
     },
     {
      "t": "«El hombre es la medida de todas las cosas»",
      "d": "hoy se lee en clave humanista, pero es una lectura moderna: hablaba de la verdad y es una tesis relativista",
      "a": "Protágoras"
     }
    ]
   },
   {
    "heading": "Naturaleza y cultura",
    "d": "Somos a la vez producto de la biología y de la cultura.",
    "items": [
     {
      "t": "Evolución",
      "d": "frente al fijismo, el transformismo y la herencia de caracteres adquiridos; luego, origen común y selección natural (hoy, teoría sintética)",
      "a": "Lamarck, Darwin, Wallace, Mendel"
     },
     {
      "t": "Hominización",
      "d": "proceso biológico hasta el Homo sapiens: marcha bípeda, encefalización, manos con pulgar oponible y vida social; no descendemos del chimpancé, compartimos antepasado"
     },
     {
      "t": "Humanización",
      "d": "llegar a ser plenamente humanos por la cultura: fuego, herramientas, agricultura y ganadería, organización social; el lenguaje une ambos procesos"
     },
     {
      "t": "Ser carencial",
      "d": "nacemos inacabados, con instintos reducidos y un mundo abierto; la cultura es un «útero social», una segunda matriz",
      "a": "Arnold Gehlen, Adolf Portmann"
     },
     {
      "t": "Dialéctica naturaleza-cultura",
      "d": "frente al innatismo y el ambientalismo, la respuesta más razonable no elige un extremo: somos las dos cosas entrelazadas"
     }
    ]
   },
   {
    "heading": "Cultura, identidad y diversidad",
    "d": "La cultura no se hereda con los genes: se aprende.",
    "items": [
     {
      "t": "Cultura",
      "d": "conocimientos, creencias, arte, moral, derecho, costumbres y hábitos adquiridos como miembro de una sociedad; de colere, «cultivar»",
      "a": "E. B. Tylor"
     },
     {
      "t": "Ni homogéneas ni islas",
      "d": "hay subculturas y contraculturas, y las culturas se intercambian; aun así existen universales culturales como la lengua o los ritos funerarios"
     },
     {
      "t": "Socialización",
      "d": "primaria (familia, lengua y normas básicas) y secundaria (escuela, trabajo, grupo de iguales); dura toda la vida y puede exigir resocialización"
     },
     {
      "t": "Identidad",
      "d": "personal (lo que me hace yo) y colectiva (lo que comparto con mi grupo); la cultura nos hace iguales y diferentes"
     },
     {
      "t": "Etnocentrismo",
      "d": "juzgar las demás culturas desde la propia como único modelo superior; raíz de prejuicios, racismo y xenofobia"
     },
     {
      "t": "Relativismo cultural",
      "d": "ninguna cultura es mejor; favorece el respeto, pero el metodológico (comprender) no implica el moral (no hay criterios universales)"
     },
     {
      "t": "Interculturalidad",
      "d": "diálogo y enriquecimiento mutuo sobre unos mínimos comunes, como los derechos humanos, sin renunciar a la crítica"
     }
    ]
   },
   {
    "heading": "Cuerpo y mente",
    "d": "El problema mente-cuerpo: ¿somos una sola cosa o dos?",
    "items": [
     {
      "t": "Dualismo",
      "d": "cuerpo material y alma inmaterial, superior; el cuerpo es cárcel del alma (mito del carro alado) o máquina",
      "a": "Platón, Descartes"
     },
     {
      "t": "Monismo materialista",
      "d": "solo hay una realidad: somos cuerpo, y la mente es la actividad del cerebro",
      "a": "Demócrito, Hobbes, La Mettrie, Daniel Dennett, Paul y Patricia Churchland"
     },
     {
      "t": "Postura intermedia",
      "d": "el alma es la forma del cuerpo vivo y no existe sin él; alma vegetativa, sensitiva y racional",
      "a": "Aristóteles"
     },
     {
      "t": "Estructura psicosomática",
      "d": "la unión de lo psíquico y lo corporal, hoy entendida como un todo, tras una historia cambiante de la mirada sobre el cuerpo"
     },
     {
      "t": "Debate actual",
      "d": "teoría de la identidad, funcionalismo, emergentismo y dualismo de propiedades; sigue abierto el problema difícil de la conciencia",
      "a": "Chalmers"
     }
    ]
   },
   {
    "heading": "Concepciones a lo largo de la historia",
    "d": "Cada época ha respondido a su manera.",
    "items": [
     {
      "t": "Antigüedad",
      "d": "animal racional (logos) y, además, social por naturaleza",
      "a": "Aristóteles"
     },
     {
      "t": "Edad Media",
      "d": "teocentrismo: criatura a imagen de Dios, con dignidad y dependencia; vida orientada a la salvación",
      "a": "San Agustín, Santo Tomás de Aquino"
     },
     {
      "t": "Modernidad",
      "d": "el yo se define por el pensamiento («Pienso, luego existo»); después, ser racional, libre y autónomo, fin en sí mismo",
      "a": "Descartes, Kant"
     },
     {
      "t": "Marx y Nietzsche",
      "d": "ser social que se hace por el trabajo y sufre alienación; superhombre que crea sus valores tras la muerte de Dios",
      "a": "Marx, Nietzsche"
     },
     {
      "t": "El inconsciente",
      "d": "el yo no es dueño en su propia casa",
      "a": "Freud"
     },
     {
      "t": "Existencialismo",
      "d": "no hay una esencia previa: «la existencia precede a la esencia», en la fórmula de Sartre",
      "a": "Sartre, Simone de Beauvoir"
     }
    ]
   },
   {
    "heading": "Conciencia, lenguaje y persona",
    "items": [
     {
      "t": "Conciencia y autoconciencia",
      "d": "sabemos que percibimos y podemos examinar nuestros propios pensamientos por introspección",
      "a": "Descartes"
     },
     {
      "t": "Lenguaje",
      "d": "articulado y simbólico: signos convencionales y arbitrarios para hablar de lo ausente, transmitir cultura y pensar en abstracto"
     },
     {
      "t": "Persona",
      "d": "de la máscara del actor; sujeto libre, racional y responsable con dignidad; «sustancia individual de naturaleza racional»",
      "a": "Boecio"
     },
     {
      "t": "Fin en sí mismo",
      "d": "a las personas nunca hay que tratarlas solo como medios; base de los derechos humanos",
      "a": "Kant"
     }
    ]
   },
   {
    "heading": "La identidad personal",
    "d": "¿Qué hace que siga siendo la misma persona a lo largo del tiempo?",
    "items": [
     {
      "t": "Barco de Teseo",
      "d": "si se cambian todas las tablas, ¿es el mismo barco?; identidad numérica (ser uno) frente a cualitativa (mismos rasgos)"
     },
     {
      "t": "Criterios",
      "d": "la memoria y continuidad de la conciencia, la continuidad corporal y el relato que hago de mí mismo",
      "a": "Locke"
     },
     {
      "t": "Objeciones a la memoria",
      "d": "la memoria muestra la identidad, no la crea (el general y el niño); la fisión hace dudar de que importe la identidad",
      "a": "Thomas Reid, Derek Parfit"
     },
     {
      "t": "El yo como haz",
      "d": "no hay sustancia permanente, sino percepciones que se suceden; no niega la continuidad, sino que descanse en una sustancia",
      "a": "Hume"
     },
     {
      "t": "Transhumanismo y circunstancia",
      "d": "la tecnología para superar los límites humanos reabre la pregunta; «Yo soy yo y mi circunstancia»",
      "a": "Ortega y Gasset"
     }
    ]
   },
   {
    "heading": "El sentido de la existencia",
    "d": "La ciencia no lo responde con un dato: se trata de cómo vivir.",
    "items": [
     {
      "t": "La vida es absurda",
      "d": "como Sísifo con su roca, o un ser «arrojado al mundo» sin justificación previa",
      "a": "Camus, Sartre"
     },
     {
      "t": "Sentido trascendente",
      "d": "más allá de esta vida, en Dios o la salvación: religiones y personalismo cristiano"
     },
     {
      "t": "Sentido inmanente",
      "d": "en esta vida: desarrollar capacidades, trabajo, relación con los demás y la naturaleza (evolucionistas, vitalistas, humanismo marxista)"
     },
     {
      "t": "Darse uno el sentido",
      "d": "construirlo con decisiones y compromisos frente al vacío existencial; es una opción más, no la conclusión obligada"
     }
    ]
   }
  ],
  "idea": "No hay una sola respuesta a qué es el ser humano: somos un animal biológico y cultural, cuerpo y mente, que se pregunta por sí mismo y debe decidir qué sentido dar a su vida."
 },
 {
  "title": "¿Qué podemos conocer?",
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 3",
  "pregunta": "¿Qué podemos conocer, con qué lo conocemos y hasta dónde podemos fiarnos de lo que creemos saber?",
  "sections": [
   {
    "heading": "El conocimiento humano",
    "d": "Conocer es una relación entre un sujeto que conoce y un objeto conocido.",
    "items": [
     {
      "t": "Sentidos y razón",
      "d": "los dos órganos del conocimiento: conocimiento sensible y conocimiento racional o inteligible"
     },
     {
      "t": "Sensación y percepción",
      "d": "la sensación es la materia prima; la percepción la organiza con expectativas, emociones y experiencia (figura sobre fondo)"
     },
     {
      "t": "Concepto",
      "d": "por abstracción, representación mental de lo común a las cosas; con conceptos formamos juicios y razonamientos"
     },
     {
      "t": "Epistemología o gnoseología",
      "d": "estudia origen, estructura, métodos y valor del conocimiento; en sentido estricto, la epistemología se centra en el científico",
      "a": "Max Scheler"
     },
     {
      "t": "Realismo",
      "d": "el objeto existe sin el sujeto y podemos conocerlo; ingenuo (tal como es) o crítico (parcial y corregible)"
     },
     {
      "t": "Idealismo",
      "d": "lo conocido no existe al margen de la mente: subjetivo («ser es ser percibido»), trascendental y objetivo",
      "a": "Berkeley, Kant, Platón, Hegel"
     }
    ]
   },
   {
    "heading": "Las fuentes del conocimiento",
    "d": "¿Es la razón o la experiencia la fuente fiable? (siglos XVII-XVIII).",
    "items": [
     {
      "t": "Racionalismo",
      "d": "los sentidos engañan; duda metódica hasta una certeza («Pienso, luego existo») e ideas innatas de la razón",
      "a": "Descartes, Spinoza, Leibniz, Malebranche"
     },
     {
      "t": "Empirismo",
      "d": "no hay ideas innatas: la mente es tabula rasa y la experiencia es origen y límite del conocimiento",
      "a": "Locke, Hume"
     },
     {
      "t": "La costumbre",
      "d": "la ciencia es solo probable; no la niega, pero su fundamento es psicológico, el hábito, no racional",
      "a": "Hume"
     },
     {
      "t": "Criticismo",
      "d": "sentidos dan el contenido y entendimiento las formas; revolución copernicana: solo conocemos fenómenos, no las cosas en sí",
      "a": "Kant"
     }
    ]
   },
   {
    "heading": "¿Podemos alcanzar la verdad?",
    "d": "Cuatro posturas ante las posibilidades del conocimiento.",
    "items": [
     {
      "t": "Dogmatismo",
      "d": "confía plenamente en alcanzar verdades absolutas sin examinar su capacidad; en Kant, la metafísica que no examina los límites de la razón"
     },
     {
      "t": "Escepticismo",
      "d": "el antiguo suspendía el juicio (epojé) buscando ataraxia; el total se contradice al afirmar que nada se conoce",
      "a": "Pirrón de Elis, Sexto Empírico"
     },
     {
      "t": "Relativismo",
      "d": "no hay verdades universales; favorece la tolerancia, pero si todo vale no cabe criticar mentiras ni injusticias",
      "a": "Protágoras"
     },
     {
      "t": "Autorrefutación",
      "d": "si la tesis relativista es verdad para todos, hay una verdad no relativa; si no, pierde fuerza",
      "a": "Platón"
     },
     {
      "t": "Criticismo",
      "d": "examinar posibilidades y límites antes de afirmar; una postura más, no la única defendible",
      "a": "Kant"
     },
     {
      "t": "«Solo sé que no sé nada»",
      "d": "frase atribuida; en la Apología dice, más exactamente, que no cree saber lo que no sabe",
      "a": "Sócrates"
     }
    ]
   },
   {
    "heading": "La cuestión de la verdad",
    "d": "En sentido gnoseológico, la verdad es propiedad de los juicios.",
    "items": [
     {
      "t": "Doxa y episteme",
      "d": "opinión superficial y cambiante frente a saber estable, universal y necesario: «me parece» frente a «sé, y sé por qué»",
      "a": "Platón"
     },
     {
      "t": "Creencia verdadera y justificada",
      "d": "definición examinada en el Teeteto sin darla por buena; los contraejemplos muestran que no basta (el reloj parado)",
      "a": "Platón, Edmund Gettier, Russell"
     },
     {
      "t": "Trilema de Agripa",
      "d": "toda justificación acaba en regreso al infinito, en círculo o en un dogma sin justificar",
      "a": "Agripa"
     },
     {
      "t": "Correspondencia",
      "d": "un enunciado es verdadero si concuerda con los hechos",
      "a": "Aristóteles"
     },
     {
      "t": "Coherencia, consenso y pragmática",
      "d": "no contradecir el sistema; acuerdo en un diálogo ideal sin coacción (no una votación); lo que funciona en la práctica",
      "a": "Habermas, William James"
     }
    ]
   },
   {
    "heading": "Posverdad y fake news",
    "d": "La verdad es también un asunto político.",
    "items": [
     {
      "t": "Verdad y poder",
      "d": "la verdad suele perder frente al poder, pero este no logra sustituirla del todo",
      "a": "Hannah Arendt"
     },
     {
      "t": "Posverdad",
      "d": "los hechos pesan menos que las emociones y creencias; prosperan desinformación, información errónea y bulos"
     },
     {
      "t": "Mecanismos",
      "d": "sesgo de confirmación, cámaras de eco y burbujas de filtro: solo oímos nuestra propia opinión"
     },
     {
      "t": "Defensa",
      "d": "pensamiento crítico y contraste de fuentes: quién lo dice, qué pruebas, fuentes independientes, hechos frente a opiniones"
     }
    ]
   },
   {
    "heading": "El saber científico",
    "d": "Racional, objetivo, sistemático, metódico y verificable.",
    "items": [
     {
      "t": "Formales y empíricas",
      "d": "las formales demuestran por coherencia lógica; las empíricas (naturales y sociales) contrastan con la experiencia"
     },
     {
      "t": "Inducción e hipotético-deducción",
      "d": "la inducción solo da conclusiones probables; el método hipotético-deductivo formula hipótesis, deduce consecuencias y las comprueba",
      "a": "Galileo"
     },
     {
      "t": "Falsabilidad",
      "d": "una teoría no se demuestra verdadera, resiste refutaciones; la verdad es una idea regulativa a la que se aproxima",
      "a": "Karl Popper"
     },
     {
      "t": "Paradigmas",
      "d": "ciencia normal dentro de un paradigma hasta que las anomalías llevan a una revolución científica",
      "a": "Thomas Kuhn"
     },
     {
      "t": "Pseudociencia",
      "d": "apariencia científica sin sus exigencias; cae en la falacia de la ignorancia: la carga de la prueba es de quien afirma"
     }
    ]
   },
   {
    "heading": "Ciencia, tecnología, arte y sociedad",
    "items": [
     {
      "t": "Ciencia, técnica y tecnología",
      "d": "conocer; habilidad práctica muy antigua; aplicación sistemática de la ciencia. Entrelazadas forman la tecnociencia, gran fuente de poder"
     },
     {
      "t": "Límites éticos",
      "d": "saber hacer algo no es saber si debemos: clima, inteligencia artificial y genética exigen razón práctica"
     },
     {
      "t": "Ciencia y arte",
      "d": "leyes generales frente a lo singular y simbólico; formas complementarias, no compartimentos estancos"
     },
     {
      "t": "Mujeres en la ciencia",
      "d": "apartadas durante siglos y con aportaciones atribuidas a otros",
      "a": "Hipatia de Alejandría, Marie Curie, Rosalind Franklin"
     }
    ]
   },
   {
    "heading": "Conocer para no dejarse engañar",
    "items": [
     {
      "t": "Actitud crítica y humilde",
      "d": "ni dogmatismo ni escepticismo radical: distinguir opinión y saber, exigir pruebas y corregirse; razonable, no conclusión obligada"
     },
     {
      "t": "Sapere aude",
      "d": "«¡Atrévete a saber!»: servirse del propio entendimiento sin que otros piensen por nosotros",
      "a": "Kant"
     }
    ]
   }
  ],
  "idea": "Conocemos con los sentidos y la razón, pero con límites: distinguir la opinión del saber, exigir pruebas y contrastar fuentes es la mejor defensa contra el engaño."
 },
 {
  "title": "La realidad: ¿qué hay y cómo es? (Metafísica)",
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema M",
  "pregunta": "¿Qué existe realmente y cómo es en último término?",
  "sections": [
   {
    "heading": "¿Qué es la metafísica?",
    "d": "Pregunta qué hay realmente y qué es existir; casi nada está zanjado.",
    "items": [
     {
      "t": "Origen del nombre",
      "d": "según la explicación más extendida, libros sobre el ser colocados tras los de física; Aristóteles hablaba de «filosofía primera»",
      "a": "Aristóteles"
     },
     {
      "t": "Ontología",
      "d": "la parte de la metafísica que estudia qué tipos de cosas existen"
     },
     {
      "t": "Metafísica y ciencia",
      "d": "no compiten: revisa los supuestos de toda ciencia; los átomos fueron primero idea metafísica",
      "a": "Demócrito"
     },
     {
      "t": "Críticos",
      "d": "no cabe conocimiento de alma, mundo o Dios; o carece de sentido. Réplica: «no científico» no es «absurdo»",
      "a": "Kant, Círculo de Viena"
     }
    ]
   },
   {
    "heading": "Apariencia y realidad",
    "d": "La sospecha de que las cosas no son como parecen.",
    "items": [
     {
      "t": "El ser inmóvil",
      "d": "el no-ser no puede pensarse; el ser es uno, eterno e inmutable, y el cambio es apariencia; manda la razón",
      "a": "Parménides"
     },
     {
      "t": "Dos mundos",
      "d": "mundo sensible, cambiante copia imperfecta, y mundo inteligible de las Ideas, más real (alegoría de la caverna)",
      "a": "Platón"
     },
     {
      "t": "Argumento de la simulación",
      "d": "podría haber más mentes simuladas que originales; no afirma que vivamos en una simulación, solo que es posible",
      "a": "Nick Bostrom"
     }
    ]
   },
   {
    "heading": "¿De qué está hecho todo?",
    "d": "Cuántas realidades básicas hay y de qué tipo.",
    "items": [
     {
      "t": "Arkhé",
      "d": "el principio de todo: agua, aire, cuatro elementos, átomos en el vacío",
      "a": "Tales, Anaxímenes, Empédocles, Demócrito"
     },
     {
      "t": "Monismo",
      "d": "un solo tipo de realidad; una única sustancia, «Dios o la Naturaleza», con pensamiento y extensión",
      "a": "Spinoza"
     },
     {
      "t": "Dualismo y pluralismo",
      "d": "dos sustancias, pensante y extensa; o muchas, como los cuatro elementos o las mónadas",
      "a": "Descartes, Empédocles, Leibniz"
     },
     {
      "t": "Materialismo",
      "d": "todo es materia o depende de ella; hoy el fisicalismo: lo real es lo que describe la física",
      "a": "Demócrito, Hobbes"
     },
     {
      "t": "Idealismo",
      "d": "la realidad es mental: ser es ser percibido; lo que nadie mira sigue existiendo porque Dios lo percibe",
      "a": "Berkeley"
     }
    ]
   },
   {
    "heading": "Sustancia, esencia y existencia",
    "d": "Lo real son ante todo las cosas concretas.",
    "items": [
     {
      "t": "Sustancia y accidente",
      "d": "lo que existe por sí mismo y sostiene sus cualidades; los accidentes solo existen en una sustancia",
      "a": "Aristóteles"
     },
     {
      "t": "Hilemorfismo",
      "d": "toda sustancia física es materia y forma; la forma corresponde a grandes rasgos a la esencia, el «qué es»"
     },
     {
      "t": "Acto y potencia",
      "d": "cambiar es hacer real una potencia, no pasar de la nada al ser; así responde a Parménides"
     },
     {
      "t": "Esencia y existencia",
      "d": "qué es una cosa no es lo mismo que el hecho de que sea; se puede saber qué es un dragón",
      "a": "Avicena, Tomás de Aquino"
     },
     {
      "t": "La existencia precede a la esencia",
      "d": "en el caso humano, primero existimos y luego nos definimos con lo que hacemos",
      "a": "Sartre"
     }
    ]
   },
   {
    "heading": "Mente y cuerpo hoy",
    "d": "¿Son los pensamientos algo distinto de los procesos físicos?",
    "items": [
     {
      "t": "Dualismo de sustancias",
      "d": "la mente es no física; su dificultad es la interacción: ¿cómo mueve el brazo?",
      "a": "Descartes, Isabel de Bohemia"
     },
     {
      "t": "Teoría de la identidad",
      "d": "los estados mentales son estados del cerebro; pero un pulpo, con otro sistema nervioso, también parece sentir",
      "a": "U. T. Place, J. J. C. Smart"
     },
     {
      "t": "Funcionalismo",
      "d": "un estado mental se define por su función, no por su material; una mente podría funcionar en silicio",
      "a": "Hilary Putnam"
     },
     {
      "t": "Test de Turing",
      "d": "si al conversar por escrito no distinguimos máquina y persona, no habría motivo para negarle inteligencia",
      "a": "Alan Turing"
     },
     {
      "t": "Habitación china",
      "d": "manejar símbolos (sintaxis) no es comprender su significado (semántica); réplica: entendería el sistema entero",
      "a": "John Searle"
     },
     {
      "t": "Problema difícil de la conciencia",
      "d": "por qué existe la experiencia subjetiva, lo que se siente al ver el rojo",
      "a": "David Chalmers"
     }
    ]
   },
   {
    "heading": "El tiempo y el cambio",
    "d": "Si algo cambia, ¿sigue siendo lo mismo?",
    "items": [
     {
      "t": "Todo cambia",
      "d": "tensión entre contrarios; al bañarse en los ríos llegan aguas distintas (la versión popular la transmitió Platón)",
      "a": "Heráclito"
     },
     {
      "t": "Paradojas",
      "d": "Aquiles nunca alcanza a la tortuga; las matemáticas dan una suma finita, aunque se discute si responde del todo",
      "a": "Zenón de Elea"
     },
     {
      "t": "Barco de Teseo",
      "d": "si se cambian todas las tablas, ¿es el mismo barco?; el cambio plantea un problema de identidad"
     },
     {
      "t": "¿Qué es el tiempo?",
      "d": "difícil de explicar; absoluto como un reloj universal o relativo, orden de los sucesos",
      "a": "Agustín de Hipona, Newton, Leibniz"
     },
     {
      "t": "Relatividad",
      "d": "duración y simultaneidad dependen del movimiento y la gravedad; pero no dice que «todo es relativo»",
      "a": "Einstein"
     },
     {
      "t": "Presentismo y eternalismo",
      "d": "solo existe el presente, o pasado, presente y futuro son igual de reales"
     }
    ]
   },
   {
    "heading": "¿Somos libres?",
    "d": "Si nadie puede actuar de otro modo, ¿tiene sentido culpar o felicitar?",
    "items": [
     {
      "t": "Determinismo",
      "d": "todo resulta necesariamente de lo anterior y de las leyes; solo hay un futuro posible (el demonio de Laplace)",
      "a": "Laplace"
     },
     {
      "t": "Indeterminismo",
      "d": "hay sucesos no necesarios, como en la física cuántica; pero el azar no hace libre una decisión"
     },
     {
      "t": "Determinismo duro",
      "d": "como todo está determinado, la libertad es una ilusión",
      "a": "D’Holbach"
     },
     {
      "t": "Libertarismo",
      "d": "somos libres y podríamos haber actuado de otro modo; no confundir con la ideología política",
      "a": "Sartre"
     },
     {
      "t": "Compatibilismo",
      "d": "ser libre es actuar por los propios deseos y razones sin coacción, aunque haya causas",
      "a": "Hobbes, Hume"
     },
     {
      "t": "Experimentos de Libet",
      "d": "actividad cerebral antes de decidir moverse; su alcance está muy discutido: eran movimientos simples",
      "a": "Benjamin Libet"
     }
    ]
   },
   {
    "heading": "¿Existe Dios?",
    "d": "No se trata de defender ni atacar una fe, sino de examinar argumentos.",
    "items": [
     {
      "t": "Argumento ontológico",
      "d": "del concepto de ser mayor que el cual nada puede pensarse; objeciones: la isla perfecta y la existencia no es propiedad",
      "a": "Anselmo de Canterbury, Gaunilón, Kant"
     },
     {
      "t": "Argumento cosmológico",
      "d": "las cinco vías: la cadena de causas exige un primer ser necesario; ¿por qué no detenerse en el universo?",
      "a": "Tomás de Aquino"
     },
     {
      "t": "Argumento del diseño",
      "d": "el reloj exige relojero; la analogía es débil y la selección natural explica la apariencia de diseño",
      "a": "William Paley, Hume, Darwin"
     },
     {
      "t": "Problema del mal",
      "d": "el mal no encaja con un Dios bueno y todopoderoso; atribuido por Lactancio a Epicuro, atribución hoy discutida. Respuestas: teodicea",
      "a": "Lactancio, Leibniz"
     },
     {
      "t": "Apuesta de Pascal",
      "d": "no prueba que Dios exista, sino que conviene creer; valdría para cualquier dios y no se cree por cálculo",
      "a": "Pascal"
     },
     {
      "t": "Posturas",
      "d": "teísmo, ateísmo, agnosticismo y fideísmo; ningún argumento es concluyente para todos ni ninguna objeción cierra el debate",
      "a": "T. H. Huxley, Kierkegaard"
     }
    ]
   }
  ],
  "idea": "La metafísica pregunta qué existe y cómo es en último término: apariencia, sustancia, mente, tiempo, libertad y Dios siguen abiertos, y lo que se pide es entender cada postura y su objeción."
 },
 {
  "title": "Lógica y argumentación",
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 4",
  "pregunta": "¿Cuándo se sigue de verdad una conclusión de sus premisas, y cómo distinguimos un buen argumento de uno que solo lo parece?",
  "sections": [
   {
    "heading": "La lógica, las proposiciones y los argumentos",
    "d": "La lógica estudia la forma del pensamiento, no su contenido.",
    "items": [
     {
      "t": "Lógica",
      "d": "parte de la filosofía que estudia la corrección de los razonamientos; la fundó como disciplina con la teoría del silogismo",
      "a": "Aristóteles"
     },
     {
      "t": "Proposición",
      "d": "enunciado que puede ser verdadero o falso; no es la frase: tres frases en tres lenguas pueden decir la misma proposición"
     },
     {
      "t": "Lo que no es proposición",
      "d": "una súplica o una orden («¡Cierra la puerta!») no son ni verdaderas ni falsas",
      "a": "Aristóteles"
     },
     {
      "t": "Juicio y proposición",
      "d": "el juicio es el acto de alguien que afirma o niega; la proposición es lo pensado, la misma la piense quien la piense"
     },
     {
      "t": "Argumento",
      "d": "conjunto de proposiciones en el que las premisas apoyan una conclusión; argumentar es dar razones, no imponer ni repetir"
     },
     {
      "t": "S es P",
      "d": "forma más sencilla de proposición en la lógica clásica: sujeto, predicado y la cópula «es»"
     }
    ]
   },
   {
    "heading": "Modos de razonar: validez y verdad",
    "d": "La distinción clave del tema: la validez es de la forma; la verdad, del contenido.",
    "items": [
     {
      "t": "Deducción",
      "d": "la conclusión se sigue con necesidad: si las premisas son verdaderas, no puede ser falsa; propia de matemáticas y lógica formal"
     },
     {
      "t": "Inducción",
      "d": "de casos particulares a una conclusión general solo probable; no se dice válida o inválida, sino fuerte o débil"
     },
     {
      "t": "Abducción",
      "d": "inferencia a la mejor explicación, como la del detective o el médico; solo elige entre las hipótesis que se nos han ocurrido",
      "a": "Peirce"
     },
     {
      "t": "Validez y verdad",
      "d": "son independientes: hay argumentos válidos con premisas falsas e inválidos con premisas verdaderas"
     },
     {
      "t": "Argumento sólido",
      "d": "el que es válido y además tiene premisas verdaderas: solo entonces la conclusión queda garantizada"
     }
    ]
   },
   {
    "heading": "Lógica simbólica y proposiciones categóricas",
    "d": "Los símbolos evitan las ambigüedades del lenguaje corriente.",
    "items": [
     {
      "t": "Lógica de primer orden",
      "d": "lógica de predicados creada a finales del siglo XIX, base de la lógica actual, de la informática y de la IA",
      "a": "Frege"
     },
     {
      "t": "Principia Mathematica",
      "d": "intento de derivar toda la aritmética de la lógica",
      "a": "Russell y Whitehead"
     },
     {
      "t": "A, E, I, O",
      "d": "combinan cantidad (universal o particular) y cualidad (afirmativa o negativa); vocales de affirmo y nego"
     },
     {
      "t": "La A en la lógica actual",
      "d": "«para todo x, si es S, es P»: no dice que existan S; la I y la O sí empiezan por «existe»"
     }
    ]
   },
   {
    "heading": "Cuadrado de oposición y diagramas",
    "d": "Dibujar las clases permite ver qué afirma cada proposición y comprobar silogismos.",
    "items": [
     {
      "t": "Contradictorias (A-O, E-I)",
      "d": "siempre valores opuestos; para negar «todo deportista es zurdo» basta un deportista diestro"
     },
     {
      "t": "Contrarias y subcontrarias",
      "d": "A y E no pueden ser ambas verdaderas; I y O no pueden ser ambas falsas. «Algún alumno ha aprobado» no implica que alguno suspendiera"
     },
     {
      "t": "Subalternas",
      "d": "si la universal es verdadera, también lo es la particular (A → I, E → O)"
     },
     {
      "t": "Diagramas de Euler",
      "d": "círculos dentro, separados o cruzados; Leibniz los dibujó antes, pero su borrador quedó inédito hasta 1903",
      "a": "Euler, Leibniz"
     },
     {
      "t": "Diagramas de Venn",
      "d": "círculos siempre cortados: gris si la región está vacía, ✕ si hay al menos uno, blanco si no sabemos",
      "a": "Venn, Peirce"
     },
     {
      "t": "Comprobar un silogismo",
      "d": "se dibujan primero las universales, luego las particulares; si el dibujo ya muestra la conclusión, es válido"
     },
     {
      "t": "Compromiso existencial",
      "d": "Aristóteles suponía que existen los S en las afirmativas; la lógica actual no, y del cuadrado solo quedan las contradictorias",
      "a": "Aristóteles, Boole, Venn"
     }
    ]
   },
   {
    "heading": "Las falacias",
    "d": "Argumentos que parecen válidos pero no lo son: reconocerlas defiende de la manipulación.",
    "items": [
     {
      "t": "Formales e informales",
      "d": "las formales fallan en la estructura lógica; las informales, en el contenido o el uso del lenguaje"
     },
     {
      "t": "Las más frecuentes",
      "d": "ad hominem, ad populum, ad verecundiam, falsa causa, hombre de paja, generalización apresurada y pendiente resbaladiza"
     },
     {
      "t": "Otras",
      "d": "ad ignorantiam, el equívoco (una palabra con dos sentidos) y la falacia de la falacia: un mal argumento no hace falsa la tesis"
     },
     {
      "t": "Sofisma y paralogismo",
      "d": "sofisma es la falacia usada a propósito para engañar; paralogismo, la cometida sin querer"
     }
    ]
   },
   {
    "heading": "Conectivas, álgebra de Boole y clases",
    "d": "La misma lógica vale para proposiciones, circuitos y conjuntos.",
    "items": [
     {
      "t": "Tablas de verdad",
      "d": "un razonamiento es válido si no hay fila con premisas verdaderas y conclusión falsa; tautología si siempre es verdadera"
     },
     {
      "t": "Paradoja",
      "d": "conclusión inaceptable que sale de premisas en apariencia aceptables, como «esta frase es falsa»; no busca engañar, obliga a revisar nociones"
     },
     {
      "t": "Álgebra de Boole y puertas lógicas",
      "d": "1 y 0 por verdadero y falso; luego se construyeron con circuitos (AND, OR, NOT), base de los ordenadores",
      "a": "Boole, Shannon"
     },
     {
      "t": "Pertenencia e inclusión",
      "d": "«Sócrates ∈ humanos» y «humanos ⊆ mortales» se dicen con «es», pero solo la inclusión se encadena"
     },
     {
      "t": "Operaciones con clases",
      "d": "unión (o), intersección (y), diferencia y complemento (no); las leyes de De Morgan son las más usadas al razonar",
      "a": "Boole, Schröder, De Morgan"
     },
     {
      "t": "Paradoja de Russell",
      "d": "la clase de las clases que no se contienen a sí mismas lleva a contradicción: no toda propiedad forma una clase",
      "a": "Russell, Frege"
     }
    ]
   },
   {
    "heading": "Más allá de deducir e inducir: analizar argumentos reales",
    "d": "Los argumentos de la vida diaria no llegan ordenados.",
    "items": [
     {
      "t": "La mejor explicación",
      "d": "la que da cuenta de todos los datos, es coherente, sencilla (navaja de Ockham) y permite predicciones comprobables"
     },
     {
      "t": "Los tres modos encadenados",
      "d": "la abducción propone, la deducción extrae consecuencias comprobables y la inducción mide la confianza: en pequeño, el método científico"
     },
     {
      "t": "Analogía",
      "d": "nunca garantiza; su fuerza depende de que las semejanzas sean relevantes; si no, falsa analogía",
      "a": "Paley, Hume, Darwin"
     },
     {
      "t": "Indicadores",
      "d": "«luego», «por tanto» marcan conclusión; «porque», «ya que», premisa. Pero una explicación no es un argumento"
     },
     {
      "t": "Entimema",
      "d": "argumento con una premisa implícita; sacarla a la luz es lo más útil del análisis, porque ahí suele estar el punto débil"
     }
    ]
   },
   {
    "heading": "Argumentar en diálogo, definir y distinguir",
    "d": "Se discute para acercarse a la verdad, no solo para ganar.",
    "items": [
     {
      "t": "Carga de la prueba",
      "d": "quien afirma debe dar razones, más cuanto más se aparta de lo establecido; evita la falacia ad ignorantiam"
     },
     {
      "t": "Principio de caridad",
      "d": "interpretar al otro en su versión más fuerte: lo contrario del hombre de paja"
     },
     {
      "t": "Contraejemplo",
      "d": "un solo caso refuta una afirmación universal; de ahí el falsacionismo",
      "a": "Karl Popper"
     },
     {
      "t": "Reducción al absurdo",
      "d": "se supone la tesis y se muestra que lleva a contradicción, como la de un número natural máximo"
     },
     {
      "t": "Razonar y racionalizar",
      "d": "racionalizar es partir de la conclusión deseada y buscarle premisas a medida; quien razona está dispuesto a cambiar de idea"
     },
     {
      "t": "Preferir ser refutado",
      "d": "librarse uno mismo de un error es mejor que librar de él a otro: se discute para acercarse a la verdad",
      "a": "Platón (Gorgias), Sócrates"
     },
     {
      "t": "Definición clásica",
      "d": "género próximo y diferencia específica; no debe ser circular, demasiado amplia, demasiado estrecha ni oscura"
     },
     {
      "t": "Condición necesaria y suficiente",
      "d": "necesaria: sin ella no se da la otra cosa; suficiente: si se da, la otra se da seguro"
     },
     {
      "t": "Análisis conceptual",
      "d": "proponer condiciones y probarlas con contraejemplos, como al definir mentir: afirmar lo que se cree falso para que otro lo crea"
     }
    ]
   }
  ],
  "idea": "Un argumento vale por su forma (validez) y por la verdad de sus premisas: separar ambas cosas, sacar a la luz lo implícito y desconfiar de lo que solo parece válido es la base de razonar bien."
 },
 {
  "title": "Las preguntas de la ética",
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 5",
  "pregunta": "¿Qué hace buena a una acción: el fin y sus consecuencias, el deber, el carácter o el cuidado de los demás?",
  "sections": [
   {
    "heading": "Ética, moral y libertad",
    "d": "La ética pregunta, con Sócrates, «¿cómo debemos vivir?».",
    "items": [
     {
      "t": "Moral y ética",
      "d": "la moral son las normas que rigen de hecho en una comunidad; la ética reflexiona sobre si están justificadas",
      "a": "Sócrates"
     },
     {
      "t": "Tres niveles",
      "d": "ética normativa (qué debemos hacer), ética aplicada (casos concretos) y metaética (qué son los juicios morales)"
     },
     {
      "t": "Dos relativismos",
      "d": "del hecho de que las sociedades discrepen (descriptivo) no se sigue que ningún juicio valga más que otro (metaético)"
     },
     {
      "t": "Autonomía y heteronomía",
      "d": "darse la ley moral con la propia razón o recibirla desde fuera (miedo, costumbre, autoridad)",
      "a": "Kant"
     },
     {
      "t": "Libertad y causas",
      "d": "el incompatibilismo exige haber podido obrar de otro modo; el compatibilismo basta con actuar sin coacción según las propias razones",
      "a": "Frankfurt"
     }
    ]
   },
   {
    "heading": "Cómo se clasifican las teorías éticas",
    "items": [
     {
      "t": "Éticas materiales",
      "d": "dicen cuál es el bien que hay que perseguir; suelen ser teleológicas (telos, fin), aunque no todas consecuencialistas",
      "a": "Aristóteles, Epicuro, utilitarismo"
     },
     {
      "t": "Éticas formales",
      "d": "fijan la forma de toda norma moral; son deontológicas (déon, deber): juzgan por el deber, no por los resultados",
      "a": "Kant"
     }
    ]
   },
   {
    "heading": "Las grandes éticas materiales",
    "items": [
     {
      "t": "Eudaimonismo",
      "d": "el fin último es la felicidad, una vida lograda; se alcanza con la virtud como término medio entre dos extremos",
      "a": "Aristóteles"
     },
     {
      "t": "Hedonismo",
      "d": "el bien es el placer entendido como ausencia de dolor y perturbación (ataraxia): vida serena, con amigos y sin miedos",
      "a": "Epicuro"
     },
     {
      "t": "Utilitarismo",
      "d": "es buena la acción que produce «la mayor felicidad para el mayor número»; hay placeres superiores",
      "a": "Bentham, Mill"
     },
     {
      "t": "Del acto y de la regla",
      "d": "ante la objeción de sacrificar a un inocente, se distingue calcular cada acción de juzgar normas generales"
     }
    ]
   },
   {
    "heading": "La ética formal de Kant",
    "d": "Una acción es moral cuando se hace por respeto a la ley moral, no por sus consecuencias.",
    "items": [
     {
      "t": "Crítica a las éticas materiales",
      "d": "si el bien depende de un fin, la moral se vuelve relativa y condicionada",
      "a": "Kant"
     },
     {
      "t": "Imperativo categórico",
      "d": "mandato incondicional de la razón: obrar según una máxima que pueda ser ley universal",
      "a": "Kant"
     },
     {
      "t": "La humanidad como fin",
      "d": "tratar a la humanidad, en uno mismo y en otro, siempre como un fin y nunca solo como un medio",
      "a": "Kant"
     }
    ]
   },
   {
    "heading": "¿Hay verdades morales?",
    "d": "La metaética examina si existen hechos morales que hagan verdaderos nuestros juicios.",
    "items": [
     {
      "t": "Emotivismo",
      "d": "los juicios morales no se deducen de la razón: expresan sentimientos de aprobación o rechazo",
      "a": "Hume"
     },
     {
      "t": "Objetivismo",
      "d": "hay verdades morales válidas para todos; la razón descubre el Bien. Problema: ¿cómo se conocen?, ¿por qué tanto desacuerdo?",
      "a": "Platón"
     },
     {
      "t": "Voluntarismo",
      "d": "el bien depende de la voluntad de Dios; contra él, la pregunta del Eutifrón",
      "a": "Guillermo de Ockham, Platón"
     },
     {
      "t": "Subjetivismo",
      "d": "la verdad moral depende de cada persona; no habría desacuerdos reales"
     },
     {
      "t": "Relativismo cultural",
      "d": "es correcto lo que aprueba cada sociedad; impide criticar otras culturas y hablar de progreso moral, y se contradice si se vuelve norma",
      "a": "Sumner, círculo de Boas"
     },
     {
      "t": "No cognitivismo",
      "d": "los juicios morales no son verdaderos ni falsos: expresan actitudes o emociones",
      "a": "A. J. Ayer"
     }
    ]
   },
   {
    "heading": "Cómo se forma el juicio moral",
    "d": "De obedecer normas ajenas a razonar con principios propios.",
    "items": [
     {
      "t": "Heterónoma y autónoma",
      "d": "los pequeños juzgan por el daño; los mayores, por la intención; las normas pasan de impuestas a acordadas",
      "a": "Piaget"
     },
     {
      "t": "Tres niveles, seis estadios",
      "d": "preconvencional, convencional y posconvencional; importa la razón ante el dilema de Heinz, no el sí o el no",
      "a": "Kohlberg"
     },
     {
      "t": "Otra voz",
      "d": "la escala medía solo con la justicia y dejaba fuera el razonamiento atento a las relaciones y al cuidado",
      "a": "Carol Gilligan"
     },
     {
      "t": "Un debate abierto",
      "d": "estudios posteriores hallaron diferencias entre sexos mínimas o nulas; el esquema mide cómo razonamos, no cómo actuamos",
      "a": "Lawrence Walker"
     }
    ]
   },
   {
    "heading": "El utilitarismo a fondo y la sospecha de Nietzsche",
    "items": [
     {
      "t": "Cálculo felicífico",
      "d": "medir placeres y dolores por intensidad, duración, certeza, proximidad, fecundidad, pureza y extensión",
      "a": "Bentham"
     },
     {
      "t": "Objeciones con casos",
      "d": "el tranvía, el trasplante y la exigencia de darlo casi todo chocan con la intuición de que hay cosas que no se hacen a nadie",
      "a": "Philippa Foot, Judith Jarvis Thomson, Peter Singer"
     },
     {
      "t": "Moral de señores y de esclavos",
      "d": "la segunda nacería del resentimiento de los débiles, que convierten su debilidad en mérito",
      "a": "Nietzsche"
     },
     {
      "t": "Nihilismo y transvaloración",
      "d": "si se derrumba la fe que sostenía la moral, amenaza el nihilismo; propone crear valores que afirmen la vida",
      "a": "Nietzsche"
     },
     {
      "t": "Leerlo con cautela",
      "d": "su genealogía tiene pocas pruebas, el origen no decide el valor, y el antisemitismo era de su hermana Elisabeth"
     }
    ]
   },
   {
    "heading": "Ética del cuidado y ética aplicada",
    "d": "Cuatro maneras de juzgar que no siempre se excluyen.",
    "items": [
     {
      "t": "Ética del cuidado",
      "d": "todos somos vulnerables e interdependientes; se parte de personas en relación, y la empatía informa el juicio",
      "a": "Nel Noddings, Joan Tronto"
     },
     {
      "t": "Bioética",
      "d": "cuatro principios: autonomía, beneficencia, no maleficencia y justicia",
      "a": "Beauchamp y Childress"
     },
     {
      "t": "Ética animal",
      "d": "la cuestión es si los animales pueden sufrir; especismo es discriminar por la especie",
      "a": "Bentham, Peter Singer"
     },
     {
      "t": "Ética de la IA",
      "d": "algoritmos con sesgos heredados de sus datos, coches autónomos y la pregunta de quién responde cuando decide una máquina"
     },
     {
      "t": "Cuatro enfoques",
      "d": "virtud (Aristóteles, MacIntyre), deber (Kant), consecuencias (Bentham, Mill, Singer) y cuidado (Gilligan, Noddings, Tronto), cada uno con su crítica"
     }
    ]
   }
  ],
  "idea": "La ética no da una respuesta hecha: enseña a razonar sobre cómo vivir mirando el fin, el deber, el carácter y el cuidado, sabiendo que la discrepancia entre culturas no prueba que nadie pueda equivocarse."
 },
 {
  "title": "Las escuelas helenísticas: ¿cómo se alcanza la felicidad?",
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 5",
  "pregunta": "¿Cómo se alcanza la felicidad?",
  "sections": [
   {
    "heading": "Una misma pregunta, cuatro respuestas",
    "d": "Tras Aristóteles y las conquistas de Alejandro Magno, la polis pierde su autonomía y la filosofía se vuelve hacia la vida personal.",
    "items": [
     {
      "t": "La pregunta común",
      "d": "las escuelas helenísticas comparten la pregunta por la felicidad y se distinguen por la respuesta"
     },
     {
      "t": "Un precursor",
      "d": "el hedonismo es anterior (discípulo de Sócrates, contemporáneo de Platón), pero responde a la misma pregunta",
      "a": "Aristipo de Cirene"
     }
    ]
   },
   {
    "heading": "Hedonismo",
    "d": "El placer es el bien supremo y el objetivo de la vida.",
    "items": [
     {
      "t": "Carpe diem",
      "d": "disfrutar el placer inmediato: sensaciones corporales agradables como la comida, el descanso o los placeres cotidianos",
      "a": "Aristipo de Cirene"
     }
    ]
   },
   {
    "heading": "Epicureísmo",
    "d": "El placer no está en el exceso, sino en la moderación.",
    "items": [
     {
      "t": "Placeres moderados",
      "d": "evitar el dolor; por ejemplo, una comida sencilla con amigos, sin preocupaciones",
      "a": "Epicuro"
     },
     {
      "t": "Ataraxia",
      "d": "paz del alma: eliminar los miedos a la muerte y a los dioses",
      "a": "Epicuro"
     }
    ]
   },
   {
    "heading": "Estoicismo",
    "d": "No controlamos lo que ocurre, pero sí nuestra reacción.",
    "items": [
     {
      "t": "Vivir conforme a la naturaleza",
      "d": "aceptar el destino y lo que no se puede cambiar",
      "a": "Zenón de Citio, Séneca"
     },
     {
      "t": "Autodominio",
      "d": "controlar las emociones; por ejemplo, mantener la calma ante un fracaso",
      "a": "Zenón de Citio, Séneca"
     }
    ]
   },
   {
    "heading": "Cinismo",
    "d": "«Cuanto menos necesito, más feliz soy».",
    "items": [
     {
      "t": "Autosuficiencia",
      "d": "vida austera: vivir con lo mínimo",
      "a": "Diógenes de Sinope"
     },
     {
      "t": "Rechazo de las convenciones",
      "d": "cuestionar las normas sociales y rechazar los bienes materiales",
      "a": "Diógenes de Sinope"
     }
    ]
   }
  ],
  "idea": "Cuando la polis pierde su autonomía, la filosofía busca la felicidad personal: en el placer inmediato, en el placer moderado y la paz del alma, en el autodominio o en necesitar lo mínimo."
 },
 {
  "title": "La vida en sociedad (Filosofía política)",
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 6",
  "pregunta": "¿Por qué existe el Estado, qué lo hace legítimo y qué es una sociedad justa?",
  "sections": [
   {
    "heading": "Animal político, poder y legitimidad",
    "d": "La filosofía política no describe cómo son las sociedades, sino cómo deberían ser.",
    "items": [
     {
      "t": "Zoon politikón",
      "d": "el ser humano es un animal político; quien viviera aislado sería «una bestia o un dios»",
      "a": "Aristóteles"
     },
     {
      "t": "Filosofía política",
      "d": "rama de la filosofía práctica, hermana de la ética: qué poder es legítimo, qué reparto es justo, qué libertad debemos tener"
     },
     {
      "t": "Poder y legitimidad",
      "d": "el poder hace obedecer; la legitimidad es el derecho a mandar, reconocido como justo por quienes obedecen"
     },
     {
      "t": "Tres fuentes de legitimidad",
      "d": "la tradición, el carisma de un líder y la legalidad racional, propia del Estado moderno",
      "a": "Max Weber"
     }
    ]
   },
   {
    "heading": "¿Por qué existe el Estado? El contrato social",
    "d": "Para los antiguos, la comunidad política es natural; para los modernos, un artificio pactado.",
    "items": [
     {
      "t": "Estado de naturaleza",
      "d": "no es un hecho histórico, sino una hipótesis para pensar los fundamentos del poder"
     },
     {
      "t": "Hobbes",
      "d": "por igualdad de fuerzas, guerra de todos contra todos; por miedo, se cede el poder a un soberano. Nadie cede el derecho a la vida",
      "a": "Hobbes"
     },
     {
      "t": "Locke",
      "d": "derechos naturales a vida, libertad y propiedad; pacto limitado, poder revocable y derecho de resistencia. Los tres poderes son de Montesquieu",
      "a": "Locke, Montesquieu"
     },
     {
      "t": "Rousseau",
      "d": "la sociedad corrompe con la desigualdad; voluntad general y soberanía inalienable. No usa la expresión «buen salvaje»",
      "a": "Rousseau"
     },
     {
      "t": "«Se le obligará a ser libre»",
      "d": "frase de Rousseau que alimenta la sospecha de que la libertad positiva pueda volverse coacción",
      "a": "Rousseau, Berlin"
     },
     {
      "t": "Críticas y reinterpretación",
      "d": "nadie firmó el pacto: obedecemos por utilidad (Hume); el contrato es una idea de la razón para juzgar leyes (Kant)",
      "a": "Hume, Kant"
     }
    ]
   },
   {
    "heading": "La justicia: ¿qué es una sociedad justa?",
    "d": "Elegir un criterio de reparto es elegir un modelo de sociedad.",
    "items": [
     {
      "t": "Distributiva y correctiva",
      "d": "una reparte bienes y cargas según un criterio; la otra restablece el equilibrio roto entre dos partes",
      "a": "Aristóteles"
     },
     {
      "t": "Velo de ignorancia",
      "d": "elegir las reglas sin saber qué lugar ocuparemos; regla maximin y bienes primarios",
      "a": "John Rawls"
     },
     {
      "t": "Principios de Rawls",
      "d": "primero, iguales libertades básicas; después, desigualdades solo con igualdad de oportunidades y si benefician a los menos aventajados",
      "a": "John Rawls"
     },
     {
      "t": "Teoría de la titularidad",
      "d": "un reparto es justo si se adquirió legítimamente o por intercambios libres; defiende un Estado mínimo",
      "a": "Robert Nozick"
     },
     {
      "t": "Comunitarismo",
      "d": "critica el individuo abstracto: somos miembros de una tradición, y lo justo se piensa desde los bienes compartidos",
      "a": "Sandel, MacIntyre, Walzer"
     },
     {
      "t": "Sus objeciones",
      "d": "a Rawls, que impone sacrificios a quien ganó lo suyo; a Nozick, que nadie empieza en la misma casilla; al comunitarismo, ahogar al discrepante"
     }
    ]
   },
   {
    "heading": "Democracia y derechos",
    "d": "La democracia no se reduce a la regla de la mayoría.",
    "items": [
     {
      "t": "Formas de gobierno",
      "d": "uno, pocos o muchos, cada una con su forma degenerada cuando se gobierna en interés propio",
      "a": "Aristóteles"
     },
     {
      "t": "Democracia moderna",
      "d": "soberanía popular, participación, igualdad ante la ley y respeto a las minorías; exige libertades, pluralismo y control del poder"
     },
     {
      "t": "Tres modelos",
      "d": "liberal representativa (cambiar de gobierno sin violencia), deliberativa (pesa el mejor argumento) y participativa (decidir directamente)",
      "a": "Schumpeter, Habermas, Pateman"
     },
     {
      "t": "Amenazas",
      "d": "la tiranía de la mayoría, el populismo antipluralista y la erosión desde dentro de jueces, prensa y árbitros electorales",
      "a": "Tocqueville, Mill, Mudde, Müller, Levitsky y Ziblatt"
     },
     {
      "t": "Derechos humanos",
      "d": "exigencias mínimas de toda persona (1948), en tres generaciones: libertad, igualdad y solidaridad; su fundamento se discute",
      "a": "Bentham"
     },
     {
      "t": "Estado de derecho",
      "d": "también el gobierno está sometido a la ley; frente a él, el totalitarismo anula libertad, pluralidad y vida pública",
      "a": "Hannah Arendt"
     }
    ]
   },
   {
    "heading": "Ideologías, libertad y utopías",
    "items": [
     {
      "t": "Ideología",
      "d": "conjunto de ideas sobre cómo organizar la sociedad: el liberalismo acentúa la libertad individual; el socialismo, la igualdad"
     },
     {
      "t": "Libertad negativa y positiva",
      "d": "ausencia de interferencias frente a ser dueño de uno mismo; unos piden un Estado que se aparte, otros uno que provea",
      "a": "Isaiah Berlin"
     },
     {
      "t": "Utopía",
      "d": "sociedad ideal inexistente que critica la real y orienta; cada una lleva las marcas de su época",
      "a": "Platón, Tomás Moro"
     },
     {
      "t": "Distopía",
      "d": "advertencia que exagera una tendencia: control por el placer o por el miedo y la vigilancia",
      "a": "Huxley, Orwell, Postman"
     },
     {
      "t": "Reformas graduales",
      "d": "imponer una sociedad perfecta acaba justificando cualquier medio; mejor reformas contra males concretos",
      "a": "Karl Popper"
     }
    ]
   },
   {
    "heading": "Feminismo y perspectiva de género",
    "d": "Pregunta quién queda fuera del pacto; su historia en olas es una metáfora útil pero simplificadora.",
    "items": [
     {
      "t": "Etapas",
      "d": "precedente ilustrado; primera ola (voto y educación); segunda (igualdad real); tercera (diversidad); quizá una cuarta desde 2010",
      "a": "Olympe de Gouges, Wollstonecraft, Mill, Campoamor, Friedan"
     },
     {
      "t": "«No se nace mujer: se llega a serlo»",
      "d": "la cultura ha pensado a la mujer como «la Otra», definida respecto al varón",
      "a": "Simone de Beauvoir"
     },
     {
      "t": "Patriarcado",
      "d": "la relación entre los sexos es de poder; «lo personal es político» se popularizó con Hanisch, no es de Millett",
      "a": "Kate Millett, Carol Hanisch"
     },
     {
      "t": "Sexo y género",
      "d": "rasgos biológicos frente a papeles sociales asignados; para Butler, el género es performativo",
      "a": "Ann Oakley, Judith Butler"
     },
     {
      "t": "Igualdad y diferencia",
      "d": "unas reclaman los mismos derechos y oportunidades; otras, que se valore lo considerado femenino",
      "a": "Celia Amorós, Amelia Valcárcel, Luce Irigaray"
     },
     {
      "t": "Interseccionalidad",
      "d": "las discriminaciones se cruzan y producen una forma específica de exclusión, no una simple suma",
      "a": "Kimberlé Crenshaw"
     }
    ]
   },
   {
    "heading": "Marx: la crítica de la sociedad capitalista",
    "d": "No pregunta tanto qué Estado sería legítimo como a quién sirve el que existe.",
    "items": [
     {
      "t": "Materialismo histórico",
      "d": "la estructura económica es la base; sobre ella se levanta la superestructura de leyes, política, religión e ideas",
      "a": "Marx"
     },
     {
      "t": "Lucha de clases y plusvalía",
      "d": "la historia como lucha de clases; el obrero produce más valor del que recibe como salario",
      "a": "Marx, Engels"
     },
     {
      "t": "Alienación",
      "d": "el obrero se vuelve ajeno a lo que produce, a su actividad y a los demás",
      "a": "Marx"
     },
     {
      "t": "Liberalismo frente a Marx",
      "d": "el Estado como árbitro que protege derechos, o como instrumento de la clase dominante; libertad sin interferencias, o formal sin condiciones materiales",
      "a": "Locke, Marx"
     },
     {
      "t": "El «opio del pueblo»",
      "d": "caso trampa: en su contexto, la religión consuela de un sufrimiento real; no es una burla del creyente",
      "a": "Marx"
     },
     {
      "t": "¿Lleva Marx al Gulag?",
      "d": "debate abierto: unos ven conexión (Popper, Kołakowski); otros, deformación o traición (Luxemburgo, Trotski, Marcuse, Fromm); Arendt, un lugar propio"
     }
    ]
   },
   {
    "heading": "Totalitarismos y franquismo: conceptos discutidos",
    "d": "Los crímenes no se discuten; se discute la categoría que mejor los explica.",
    "items": [
     {
      "t": "Totalitarismo",
      "d": "poder que quiere controlar también el pensamiento y la vida privada; fascismo italiano y nazismo, los casos más claros",
      "a": "Mussolini"
     },
     {
      "t": "Rasgos comunes",
      "d": "partido único y líder, ideología total, terror, propaganda y destrucción de la vida privada",
      "a": "Arendt, Friedrich y Brzezinski"
     },
     {
      "t": "¿Cabe el estalinismo?",
      "d": "unos comparan ambos regímenes (Arendt, Furet, Snyder); otros critican la comparación (Kershaw y Lewin, Fitzpatrick, Traverso). Comparar no es igualar"
     },
     {
      "t": "Banalidad del mal",
      "d": "grandes crímenes hechos por personas corrientes que dejan de pensar; pensar críticamente es una forma de resistencia",
      "a": "Hannah Arendt"
     },
     {
      "t": "Autoritario y totalitario",
      "d": "uno controla la política y pide obediencia; el otro, todo, y pide adhesión entusiasta. «Autoritario» no quiere decir «blando»"
     },
     {
      "t": "¿Fue totalitario el franquismo?",
      "d": "se llamó «totalitario» en 1938 y borró la palabra en 1967; para unos, autoritario con fase fascista; para otros, fascista o totalitario al principio",
      "a": "Linz, Payne, Tusell, Saz, Fontana"
     },
     {
      "t": "Los intelectuales",
      "d": "antes de la guerra quisieron modernizar el país; durante la dictadura, unos legitimaron el régimen y otros lo erosionaron, desde el exilio y desde dentro",
      "a": "Ortega y Gasset, Zambrano, Laín Entralgo, Aranguren"
     }
    ]
   }
  ],
  "idea": "La filosofía política pregunta cómo queremos vivir juntos: qué hace legítimo el poder y justo el reparto, con respuestas que discrepan por razones que conviene conocer antes de juzgar."
 },
 {
  "title": "¿Qué es el arte? (Estética)",
  "subject": "fil",
  "block": "F1",
  "tema": "Filosofía · Tema 7",
  "pregunta": "¿Qué es lo bello, qué convierte algo en arte y qué papel tiene el arte en nuestra vida?",
  "sections": [
   {
    "heading": "¿Qué es la estética?",
    "d": "Rama de la filosofía que reflexiona sobre la belleza, el arte y la experiencia que tenemos de ellos.",
    "items": [
     {
      "t": "Aísthesis",
      "d": "en griego, sensación o percepción; el nombre lo eligió Baumgarten en el siglo XVIII para el estudio del conocimiento sensible",
      "a": "Alexander Baumgarten"
     },
     {
      "t": "Experiencia estética",
      "d": "percibir algo sin buscar usarlo ni saber para qué sirve: nos detenemos a contemplarlo por sí mismo"
     },
     {
      "t": "Dos grandes preguntas",
      "d": "¿qué es lo bello? y ¿qué es el arte?; además se relaciona con la ética, la política, la religión, la ciencia y la imagen"
     }
    ]
   },
   {
    "heading": "Lo bello: ¿en el objeto o en el sujeto?",
    "d": "Al decir «esto es bello», ¿describimos la cosa o algo que nos pasa a nosotros?",
    "items": [
     {
      "t": "Belleza objetiva (clásica)",
      "d": "está en el objeto: proporción, armonía, orden y medida; por eso puede medirse y enseñarse",
      "a": "pitagóricos, Policleto, San Agustín, Santo Tomás"
     },
     {
      "t": "Matices clásicos",
      "d": "lo bello como lo adecuado a su función (Sócrates), con un tamaño abarcable (Aristóteles) o reflejo de una Belleza superior (Plotino)",
      "a": "Sócrates, Aristóteles, Plotino"
     },
     {
      "t": "Belleza subjetiva (moderna)",
      "d": "está en el sujeto: es el placer que sentimos ante algo; «sobre gustos no hay nada escrito»",
      "a": "Hume, Kant (con matices)"
     },
     {
      "t": "Otras categorías",
      "d": "lo sublime, lo feo, lo trágico, lo cómico, lo grotesco; lo bello gusta sin saciar un deseo, a diferencia de lo agradable"
     }
    ]
   },
   {
    "heading": "El juicio del gusto: Hume y Kant",
    "d": "Si la belleza es subjetiva, ¿decir «es bello» es solo decir «a mí me gusta»?",
    "items": [
     {
      "t": "Buen gusto",
      "d": "el gusto es subjetivo, pero lo tiene el crítico competente: sensibilidad, experiencia, comparación y sin prejuicios",
      "a": "Hume"
     },
     {
      "t": "Límite y argumento de la variación",
      "d": "quedan desacuerdos por temperamento o época; pero que los gustos difieran no prueba por sí solo que la belleza sea subjetiva",
      "a": "Hume"
     },
     {
      "t": "Juicio estético",
      "d": "desinteresado, universal sin concepto, con finalidad sin fin y con un placer libre",
      "a": "Kant"
     },
     {
      "t": "Belleza libre y adherente; lo sublime",
      "d": "la flor gusta por su forma, el edificio según su fin; lo sublime mezcla temor y admiración ante lo inmenso",
      "a": "Kant"
     }
    ]
   },
   {
    "heading": "¿Qué es el arte? Las grandes teorías",
    "d": "Cada teoría encaja con un tipo de arte y le cuesta explicar otro.",
    "items": [
     {
      "t": "Imitación (mímesis)",
      "d": "el arte representa la realidad; domina de Grecia al Renacimiento, pero no explica la música ni el arte abstracto"
     },
     {
      "t": "Expresión",
      "d": "con el Romanticismo, el arte expresa el mundo interior del artista; pero un llanto o un grito no son arte"
     },
     {
      "t": "Forma (formalismo)",
      "d": "lo artístico es la composición, el color, el ritmo; deja fuera el contenido y el significado"
     },
     {
      "t": "Teoría institucional",
      "d": "es arte lo que el mundo del arte reconoce como tal; riesgo: «arte es lo que digan los expertos»",
      "a": "Danto, Dickie"
     },
     {
      "t": "Téchne, bellas artes y genio",
      "d": "téchne y ars eran «saber hacer»; en la Edad Moderna se separan las bellas artes y surge el genio, que crea reglas nuevas"
     },
     {
      "t": "Intencionalismo y antiintencionalismo",
      "d": "¿cuenta lo que quiso el artista o solo la obra? La ironía exige la intención; el espectador también recrea la obra"
     }
    ]
   },
   {
    "heading": "Arte y verdad: ¿el arte conoce?",
    "d": "¿El arte solo entretiene o nos dice algo verdadero sobre el mundo?",
    "items": [
     {
      "t": "Copia de una copia",
      "d": "el arte imita lo sensible, que ya copia las Ideas; apela a las emociones y engaña: hay que vigilar o expulsar a ciertos poetas",
      "a": "Platón"
     },
     {
      "t": "Catarsis",
      "d": "la mímesis es natural y placentera; la tragedia purifica la compasión y el miedo, y la poesía es «más filosófica» que la historia",
      "a": "Aristóteles"
     },
     {
      "t": "«Fin» del arte",
      "d": "el arte manifiesta sensiblemente la verdad, pero hoy pierde su papel central frente a la religión y la filosofía; no desaparece",
      "a": "Hegel"
     },
     {
      "t": "Acontecer de la verdad",
      "d": "la obra abre el mundo; el arte auténtico como conocimiento crítico",
      "a": "Heidegger, Gadamer, Adorno"
     }
    ]
   },
   {
    "heading": "Arte, emociones, cultura y moral",
    "items": [
     {
      "t": "Educar los sentimientos",
      "d": "el arte se siente y nos pone en el lugar de otros; la competencia estética equilibra razón y emoción"
     },
     {
      "t": "El juego y la educación estética",
      "d": "solo en el juego, que une impulso sensible y racional, el ser humano es plenamente humano; camino hacia la libertad",
      "a": "Friedrich Schiller"
     },
     {
      "t": "Moralismo",
      "d": "los valores morales de una obra afectan a su valor artístico; riesgo: convertir el arte en sermón o censura"
     },
     {
      "t": "Autonomismo",
      "d": "«el arte por el arte»: tiene sus propias leyes; riesgo: justificar cualquier contenido. Hoy domina una vía intermedia"
     }
    ]
   },
   {
    "heading": "El papel político del arte",
    "d": "El arte nunca es del todo inocente: transmite o discute los valores de su época.",
    "items": [
     {
      "t": "Arte comprometido frente a arte por el arte",
      "d": "tomar partido y denunciar la injusticia, o defender que el arte no sirve a causas"
     },
     {
      "t": "Estetizar la política",
      "d": "el fascismo convierte la política en espectáculo; frente a ello, politizar el arte al servicio de la emancipación",
      "a": "Walter Benjamin"
     },
     {
      "t": "Industria cultural",
      "d": "el entretenimiento de masas adormece; el arte difícil y autónomo es la última resistencia",
      "a": "Theodor Adorno"
     },
     {
      "t": "Conclusión",
      "d": "el arte cambia la mirada (por eso lo censuran las dictaduras), pero al servicio de una consigna puede volverse panfleto"
     }
    ]
   },
   {
    "heading": "Estética contemporánea: la imagen",
    "d": "El siglo XX rompió casi todas las certezas sobre el arte.",
    "items": [
     {
      "t": "Ready-made",
      "d": "un objeto industrial firmado y expuesto; el arte ya no se define por habilidad, belleza ni imitación",
      "a": "Marcel Duchamp"
     },
     {
      "t": "Aura",
      "d": "con la reproductibilidad técnica la obra pierde su carácter único, pero llega a las masas",
      "a": "Walter Benjamin"
     },
     {
      "t": "Espectáculo y simulacro",
      "d": "vida mediada por imágenes que se consumen; copias sin original que sustituyen la realidad",
      "a": "Guy Debord, Jean Baudrillard"
     },
     {
      "t": "Alfabetización visual",
      "d": "ante la imagen digital y la IA, aprender a mirar críticamente: quién hace la imagen, para qué y qué nos quiere hacer sentir"
     }
    ]
   }
  ],
  "idea": "La estética pregunta qué es lo bello y qué es el arte; sus respuestas van de la proporción al gusto y de la imitación a la institución, y hoy exigen mirar críticamente las imágenes."
 }
];
