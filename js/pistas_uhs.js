// Generado por tools/build_subject.js (fil) — alumnado, sin material del profesor.
const PISTAS = [
 {
  "id": "fil-validez",
  "subject": "fil",
  "tema": "Tema 4 · Lógica y argumentación",
  "unidad": "fil-t4",
  "materia": "Filosofía 1.º · Lógica",
  "titulo": "¿Qué hace válido a un argumento?",
  "lede": "La distinción clave del tema: validez y verdad. Pide solo las pistas que necesites.",
  "ciclos": [
   {
    "fase": "Fase 1 · Recuperación",
    "etiqueta": "Pregunta inicial",
    "pregunta": "¿Qué significa que un argumento sea válido?",
    "intro": [
     "Intenta explicarlo antes de pedir ayuda. Una pista para empezar a pensar: ¿la validez depende de <em>lo que</em> dice el argumento o de <em>cómo</em> razona?"
    ],
    "pistas": [
     "Para aterrizar: un argumento tiene <strong>premisas</strong> (de las que se parte) y una <strong>conclusión</strong> (a la que se llega). La validez se pregunta por la relación entre ellas.",
     "Esa relación es lo que nos deja juzgar el <em>razonamiento</em> en sí, aparte de los hechos: nos dice si el paso de las premisas a la conclusión está bien dado.",
     "Por eso es cuestión de la <em>forma</em>, no del contenido: no mira si las premisas son verdaderas, sino si, dándolas por buenas, la conclusión tendría que serlo también.",
     "En un argumento válido <strong>no puede pasar</strong> que las premisas sean verdaderas y la conclusión falsa: la conclusión se sigue necesariamente de ellas, sean estas verdaderas o no."
    ],
    "comprobacion": {
     "pregunta": "¿Cuál de estas definiciones de «argumento válido» es la correcta?",
     "opciones": [
      [
       "Un argumento cuya conclusión se sigue necesariamente de sus premisas.",
       true
      ],
      [
       "Un argumento cuyas premisas son todas verdaderas.",
       false,
       "Eso es hablar de la verdad de las premisas, no de la validez: la validez mira la forma."
      ],
      [
       "Un argumento cuya conclusión es verdadera.",
       false,
       "Una conclusión puede ser verdadera por casualidad aunque no se siga de las premisas."
      ],
      [
       "Un argumento que convence a la mayoría de quien lo escucha.",
       false,
       "Convencer no es lo mismo que razonar bien: las falacias también convencen."
      ]
     ],
     "ok": "Bien. La validez depende de la relación entre premisas y conclusión, no de que sean verdaderas.",
     "mal": "Todavía no."
    },
    "rescate": [
     {
      "boton": "Necesito ver un ejemplo",
      "etiqueta": "Ejemplo",
      "titulo": "Un argumento válido con una premisa falsa",
      "definicion": [
       "Premisa 1: Todos los peces vuelan.",
       "Premisa 2: El salmón es un pez.",
       "Conclusión: Por tanto, el salmón vuela."
      ],
      "parrafos": [
       "La primera premisa es falsa y la conclusión también. Pero fíjate: <em>si</em> todos los peces volaran y el salmón fuera un pez, ¿podría el salmón no volar? Esa es la pregunta de la validez."
      ],
      "comprobacion": {
       "etiqueta": "Comprobación del ejemplo",
       "pregunta": "¿Es válido el argumento del salmón?",
       "opciones": [
        [
         "Sí: si las premisas fueran verdaderas, la conclusión tendría que serlo.",
         true
        ],
        [
         "No, porque la primera premisa es falsa.",
         false,
         "La falsedad de una premisa no afecta a la validez: la validez solo mira si la conclusión se sigue."
        ],
        [
         "No, porque la conclusión es falsa.",
         false,
         "Una conclusión falsa no hace inválido el argumento si alguna premisa también es falsa."
        ],
        [
         "Depende de lo que opine cada persona.",
         false,
         "La validez no es cuestión de opinión: se comprueba mirando la forma del razonamiento."
        ]
       ],
       "ok": "Correcto. Es válido aunque no pruebe nada, porque parte de una premisa falsa.",
       "mal": "Vuelve a mirarlo.",
       "intentos": 2
      }
     },
     {
      "etiqueta": "Definición y explicación",
      "titulo": "Validez y verdad",
      "definicion": [
       "La <strong>validez</strong> es una propiedad de la forma: un argumento es válido cuando la conclusión se sigue correctamente de las premisas.",
       "La <strong>verdad</strong> es una propiedad del contenido: las premisas describen o no cómo son las cosas.",
       "Son independientes: puede haber argumentos válidos con premisas falsas, y argumentos inválidos con premisas verdaderas."
      ],
      "comprobacion": {
       "boton": "Comprobar comprensión",
       "etiqueta": "Comprobación final",
       "pregunta": "¿De qué depende que un argumento sea válido?",
       "opciones": [
        [
         "De su forma: de que la conclusión se siga de las premisas.",
         true
        ],
        [
         "De que las premisas sean verdaderas.",
         false,
         "Eso es la verdad, que es independiente de la validez."
        ],
        [
         "De que la conclusión nos guste.",
         false,
         "Lo que nos guste no cambia la forma del razonamiento."
        ],
        [
         "De que lo diga un experto.",
         false,
         "Eso sería apelar a la autoridad, no examinar el razonamiento."
        ]
       ],
       "ok": "Correcto: la validez es cuestión de forma.",
       "mal": "Todavía no."
      }
     }
    ]
   },
   {
    "fase": "Fase 2 · Profundización",
    "etiqueta": "Nueva pregunta",
    "pregunta": "¿Basta con que un argumento sea válido para que su conclusión sea verdadera?",
    "intro": [
     "Ya sabes qué es la validez. Ahora piensa en el argumento del salmón: era válido… y su conclusión era falsa. ¿Qué le falta a un argumento para <em>garantizar</em> su conclusión?"
    ],
    "pistas": [
     "Recuerda la distinción del tema: la validez mira la <em>forma</em>; la verdad mira si las premisas describen bien cómo son las cosas. Son dos cosas distintas.",
     "Por eso la validez sola no basta: asegura el paso de las premisas a la conclusión, pero no que hayamos partido de premisas ciertas.",
     "Para <em>garantizar</em> la conclusión hacen falta las dos cosas a la vez: que el argumento sea válido y que todas sus premisas sean verdaderas. A eso se le da un nombre propio.",
     "Imagínalo como una máquina: si entra verdad por las premisas y la forma es válida, sale verdad por la conclusión; si entra algo falso, ya no garantiza nada. Al argumento que junta validez y premisas verdaderas se le llama <strong>sólido</strong>."
    ],
    "comprobacion": {
     "pregunta": "¿Qué argumento garantiza que su conclusión es verdadera?",
     "opciones": [
      [
       "El que es válido y tiene todas las premisas verdaderas (sólido).",
       true
      ],
      [
       "Cualquier argumento válido.",
       false,
       "No: un argumento válido con una premisa falsa puede llevar a una conclusión falsa, como el del salmón."
      ],
      [
       "El que tiene premisas verdaderas, aunque sea inválido.",
       false,
       "No: si la conclusión no se sigue, las premisas verdaderas no la garantizan."
      ],
      [
       "El que tiene más premisas.",
       false,
       "El número de premisas no garantiza nada: importa la forma y la verdad."
      ]
     ],
     "ok": "Exacto. Validez más premisas verdaderas: argumento sólido.",
     "mal": "No exactamente."
    },
    "rescate": [
     {
      "boton": "Mostrar la tabla",
      "etiqueta": "La tabla de validez y verdad",
      "titulo": "Cuatro casos posibles",
      "definicion": [
       "<strong>Válido + premisas verdaderas</strong> → sólido: la conclusión queda garantizada.",
       "<strong>Inválido + premisas verdaderas</strong> → la conclusión no queda garantizada.",
       "<strong>Válido + premisas falsas</strong> → correcto en la forma, pero no prueba nada.",
       "<strong>Inválido + premisas falsas</strong> → doblemente fallido."
      ],
      "comprobacion": {
       "boton": "Terminar comprobando",
       "pregunta": "Un argumento válido tiene una conclusión falsa. ¿Qué podemos asegurar?",
       "opciones": [
        [
         "Que al menos una de sus premisas es falsa.",
         true
        ],
        [
         "Que todas sus premisas son verdaderas.",
         false,
         "Si fueran todas verdaderas, al ser válido, la conclusión sería verdadera."
        ],
        [
         "Que en realidad es inválido.",
         false,
         "Puede ser perfectamente válido: el fallo está en alguna premisa."
        ],
        [
         "Nada en absoluto.",
         false,
         "Sí podemos asegurar algo: mira la fila «válido + premisas falsas» de la tabla."
        ]
       ],
       "ok": "Correcto: si es válido y la conclusión es falsa, alguna premisa tiene que ser falsa.",
       "mal": "Relee la tabla."
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Ya distingues validez y verdad",
   "parrafos": [
    "Un argumento es válido cuando su conclusión se sigue de las premisas; es sólido cuando, además, sus premisas son verdaderas. Solo el argumento sólido garantiza la verdad de la conclusión.",
    "Para seguir: busca en la lista de falacias del tema un argumento que convenza sin ser válido."
   ]
  }
 },
 {
  "id": "fil-virtud",
  "subject": "fil",
  "tema": "Tema 5 · Las preguntas de la ética",
  "unidad": "fil-t5",
  "materia": "Filosofía 1.º · Ética",
  "titulo": "¿Qué es la virtud para Aristóteles?",
  "lede": "La ética de la felicidad y del término medio. Pide solo las pistas que necesites.",
  "ciclos": [
   {
    "fase": "Fase 1 · Recuperación",
    "etiqueta": "Pregunta inicial",
    "pregunta": "¿Qué es la virtud para Aristóteles?",
    "intro": [
     "Piensa en una persona valiente. ¿Qué la distingue de alguien cobarde… y de alguien temerario?"
    ],
    "pistas": [
     "Para aterrizar: la meta de la vida humana es, para Aristóteles, la felicidad (<em>eudaimonía</em>); no un rato de placer, sino una vida lograda en su conjunto.",
     "A esa vida lograda se llega desarrollando la <em>virtud</em>; y la virtud no es un don con el que se nace, sino algo que se aprende.",
     "¿Cómo es esa virtud? No consiste en reprimirse ni en obedecer normas: en cada rasgo hay un vicio por <em>defecto</em> y otro por <em>exceso</em>, y acertar es no pasarse ni quedarse corto.",
     "La virtud es el <strong>término medio</strong> entre esos dos extremos, señalado por la razón y fijado por el hábito: ni de menos ni de más, sino la medida adecuada."
    ],
    "comprobacion": {
     "pregunta": "¿Cuál de estas definiciones se acerca más a la virtud aristotélica?",
     "opciones": [
      [
       "Un hábito de elegir el término medio entre dos extremos, guiado por la razón.",
       true
      ],
      [
       "Un talento con el que se nace.",
       false,
       "Para Aristóteles la virtud se adquiere con la práctica: nadie nace virtuoso."
      ],
      [
       "Hacer siempre lo contrario de lo que nos apetece.",
       false,
       "No se trata de reprimirse, sino de encontrar la medida justa."
      ],
      [
       "Cumplir las normas de la ciudad, sean cuales sean.",
       false,
       "La virtud la guía la razón práctica, no la obediencia sin más."
      ]
     ],
     "ok": "Bien: hábito, término medio y razón son las tres claves.",
     "mal": "Todavía no."
    },
    "rescate": [
     {
      "boton": "Necesito ver ejemplos",
      "etiqueta": "Ejemplos",
      "titulo": "Defecto, término medio y exceso",
      "definicion": [
       "Cobardía ← <strong>valor</strong> → temeridad",
       "Tacañería ← <strong>generosidad</strong> → derroche",
       "Insensibilidad ← <strong>moderación</strong> → desenfreno"
      ],
      "parrafos": [
       "Fíjate en que la virtud no es la mitad exacta: es lo adecuado en cada situación, según lo decidiría una persona prudente."
      ],
      "comprobacion": {
       "etiqueta": "Comprobación de los ejemplos",
       "pregunta": "¿Cuál es el término medio entre la tacañería y el derroche?",
       "opciones": [
        [
         "La generosidad.",
         true
        ],
        [
         "La riqueza.",
         false,
         "La riqueza no es una virtud, sino un bien externo."
        ],
        [
         "Gastar exactamente la mitad de lo que se tiene.",
         false,
         "El término medio no es una cuenta matemática: es lo adecuado en cada caso."
        ],
        [
         "No gastar nunca.",
         false,
         "Eso sería el extremo de la tacañería."
        ]
       ],
       "ok": "Correcto. Ni dar de menos ni de más: dar como conviene.",
       "mal": "Vuelve a mirar la tabla.",
       "intentos": 2
      }
     },
     {
      "etiqueta": "Definición y explicación",
      "titulo": "La virtud aristotélica",
      "definicion": [
       "La <strong>virtud</strong> (<em>areté</em>) es una disposición estable a elegir el término medio entre dos vicios, uno por defecto y otro por exceso.",
       "Ese término medio no es matemático: lo determina la <strong>razón práctica</strong> (la prudencia) en cada situación.",
       "Se adquiere por <strong>hábito</strong>: nos hacemos valientes haciendo actos valientes. Y practicar la virtud es el camino a la felicidad."
      ],
      "comprobacion": {
       "boton": "Comprobar comprensión",
       "etiqueta": "Comprobación final",
       "pregunta": "¿Cómo se llega a ser virtuoso, según Aristóteles?",
       "opciones": [
        [
         "Practicando actos virtuosos hasta que se convierten en hábito.",
         true
        ],
        [
         "Leyendo mucho sobre ética.",
         false,
         "Saber qué es el valor no basta: hay que practicarlo."
        ],
        [
         "Naciendo en una buena familia.",
         false,
         "La virtud no se hereda: se adquiere."
        ],
        [
         "Siguiendo siempre el placer.",
         false,
         "Eso se acerca más al hedonismo, y el placer sin medida es un vicio."
        ]
       ],
       "ok": "Correcto: la virtud se aprende practicándola.",
       "mal": "Todavía no."
      }
     }
    ]
   },
   {
    "fase": "Fase 2 · Profundización",
    "etiqueta": "Nueva pregunta",
    "pregunta": "¿Qué relación hay entre la virtud y la felicidad?",
    "intro": [
     "Ya sabes qué es la virtud. Ahora piensa: ¿para qué sirve ser virtuoso? ¿Es la felicidad un premio que llega después?"
    ],
    "pistas": [
     "Para aterrizar: todo lo que hacemos busca algún fin, y la felicidad es el <em>fin último</em>, el que queremos por sí mismo y no como medio para otra cosa.",
     "Eso cambia la pregunta: no se trata de ser virtuoso <em>para</em> ganar aparte un premio llamado felicidad, sino de ver en qué consiste esa felicidad.",
     "¿Cómo se responde? Cada ser cumple lo suyo cuando realiza bien su función propia; la del ser humano es vivir según la razón, y vivir así es vivir con virtud.",
     "Por eso la virtud no es el camino hacia la felicidad, sino la felicidad misma en marcha: ser feliz <strong>consiste</strong> en vivir de forma virtuosa, no es un premio que llega después."
    ],
    "comprobacion": {
     "pregunta": "¿Qué relación hay entre virtud y felicidad para Aristóteles?",
     "opciones": [
      [
       "La felicidad consiste en una vida conforme a la virtud.",
       true
      ],
      [
       "La virtud es un sacrificio que se recompensa después de la muerte.",
       false,
       "Aristóteles habla de la felicidad en esta vida, no de un premio en otra."
      ],
      [
       "No tienen relación: la felicidad depende solo de la suerte.",
       false,
       "La suerte influye, pero la clave es la actividad virtuosa."
      ],
      [
       "La felicidad es acumular placeres.",
       false,
       "Eso es una vida de placer, no la vida lograda en su conjunto."
      ]
     ],
     "ok": "Exacto. Ser feliz es vivir bien, y vivir bien es vivir con virtud.",
     "mal": "No exactamente."
    },
    "rescate": [
     {
      "boton": "Mostrar la explicación",
      "etiqueta": "Ética de la felicidad",
      "titulo": "Una vida lograda",
      "definicion": [
       "La ética de Aristóteles es una <strong>ética de la felicidad</strong> (eudemonista): pregunta cómo vivir una buena vida.",
       "La felicidad (<em>eudaimonía</em>) es el fin último y consiste en realizar bien la función propia del ser humano: vivir según la razón.",
       "Por eso la virtud no es un medio para obtener la felicidad como premio: vivir virtuosamente <strong>es</strong> ya ser feliz, aunque también ayudan los bienes externos (salud, amigos, recursos)."
      ],
      "comprobacion": {
       "boton": "Terminar comprobando",
       "pregunta": "¿Por qué se dice que la ética de Aristóteles es eudemonista?",
       "opciones": [
        [
         "Porque gira en torno a la felicidad como fin último.",
         true
        ],
        [
         "Porque se basa en el deber por el deber.",
         false,
         "Esa es la ética de Kant, no la de Aristóteles."
        ],
        [
         "Porque mide lo bueno por las consecuencias para la mayoría.",
         false,
         "Eso es el utilitarismo."
        ],
        [
         "Porque obedece los mandatos de los dioses.",
         false,
         "Aristóteles funda la ética en la razón humana."
        ]
       ],
       "ok": "Correcto: <em>eudaimonía</em> significa felicidad.",
       "mal": "Relee la explicación."
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Ya conoces la ética de Aristóteles",
   "parrafos": [
    "La virtud es un hábito de elegir el término medio entre dos vicios, guiado por la razón práctica. Vivir así es la felicidad: una vida lograda en su conjunto.",
    "Para seguir: compárala con Epicuro (el placer como ausencia de dolor) y con Kant (el deber)."
   ]
  }
 },
 {
  "id": "fil-contrato",
  "subject": "fil",
  "tema": "Tema 6 · La vida en sociedad",
  "unidad": "fil-t6",
  "materia": "Filosofía 1.º · Política",
  "titulo": "¿Qué es el contrato social?",
  "lede": "¿Por qué obedecemos al Estado? Pide solo las pistas que necesites.",
  "ciclos": [
   {
    "fase": "Fase 1 · Recuperación",
    "etiqueta": "Pregunta inicial",
    "pregunta": "¿Qué es el contrato social?",
    "intro": [
     "Imagina que no existiera ningún gobierno, ni leyes, ni policía. ¿Por qué aceptaríamos que alguien nos mandara?"
    ],
    "pistas": [
     "Para aterrizar: los contractualistas no ven el Estado como algo natural ni eterno, sino como un <em>artificio</em>, algo que los seres humanos hemos fabricado.",
     "Eso cambia la pregunta: si lo hemos hecho nosotros, su poder no manda porque sí; necesita justificarse ante quienes obedecen.",
     "¿Cómo lo justifican? No apelando a un documento firmado un día de la historia, sino imaginando cómo sería la vida sin poder político (el <em>estado de naturaleza</em>) y un <strong>acuerdo</strong> para salir de ahí.",
     "El contrato social es ese pacto imaginado: como si todos nos pusiéramos de acuerdo para crear, entre todos, el poder que luego nos manda."
    ],
    "comprobacion": {
     "pregunta": "¿Qué es el contrato social?",
     "opciones": [
      [
       "Un acuerdo imaginado por el que las personas crean el poder político para salir del estado de naturaleza.",
       true
      ],
      [
       "Un documento firmado en una fecha concreta de la historia.",
       false,
       "No es un hecho histórico: es una hipótesis para pensar por qué es legítimo el poder."
      ],
      [
       "Un contrato de trabajo entre empresas y trabajadores.",
       false,
       "Aquí «contrato» se refiere al origen del Estado, no a un acuerdo laboral."
      ],
      [
       "La idea de que el poder viene de Dios.",
       false,
       "Justo lo contrario: el contrato funda el poder en el acuerdo humano."
      ]
     ],
     "ok": "Bien. El poder político nace de un acuerdo, no de la naturaleza ni de Dios.",
     "mal": "Todavía no."
    },
    "rescate": [
     {
      "boton": "Necesito una explicación",
      "etiqueta": "Las piezas de la teoría",
      "titulo": "Estado de naturaleza, pacto y Estado",
      "definicion": [
       "<strong>Estado de naturaleza</strong>: cómo sería la vida humana sin poder político.",
       "<strong>Pacto</strong>: el acuerdo por el que se sale de ese estado y se cede algo (poder, derechos) a cambio de algo (seguridad, protección, libertad).",
       "<strong>Estado</strong>: el poder político que resulta del pacto, y que es legítimo porque nace del consentimiento."
      ],
      "parrafos": [
       "Ojo: nadie piensa que esto ocurriera de verdad. Es una hipótesis para pensar los fundamentos del poder."
      ],
      "comprobacion": {
       "etiqueta": "Comprobación",
       "pregunta": "¿Por qué los contractualistas imaginan un estado de naturaleza?",
       "opciones": [
        [
         "Para justificar por qué conviene salir de él y crear el Estado.",
         true
        ],
        [
         "Porque creen que existió tal cual en la prehistoria.",
         false,
         "No es un hecho histórico, sino un experimento mental."
        ],
        [
         "Para defender que vivamos sin leyes.",
         false,
         "Al contrario: sirve para mostrar por qué necesitamos un poder político."
        ],
        [
         "Para estudiar la vida de los animales.",
         false,
         "Habla de seres humanos sin gobierno, no de biología."
        ]
       ],
       "ok": "Correcto. El estado de naturaleza es el punto de partida del argumento.",
       "mal": "Vuelve a leerlo.",
       "intentos": 2
      }
     },
     {
      "etiqueta": "Definición",
      "titulo": "Contrato social",
      "definicion": [
       "El <strong>contrato social</strong> es el acuerdo, hipotético, por el que los seres humanos crean el poder político.",
       "El Estado es así un <strong>artificio</strong>: su legitimidad no viene de la naturaleza ni de Dios, sino del <strong>consentimiento</strong> de quienes lo forman.",
       "Cada autor imagina un estado de naturaleza distinto, y por eso llega a un Estado distinto."
      ],
      "comprobacion": {
       "boton": "Comprobar comprensión",
       "etiqueta": "Comprobación final",
       "pregunta": "Según el contractualismo, ¿de dónde viene la legitimidad del Estado?",
       "opciones": [
        [
         "Del consentimiento de quienes lo forman.",
         true
        ],
        [
         "De la fuerza de quien gobierna.",
         false,
         "La fuerza no da legitimidad: el contrato busca justificar el poder."
        ],
        [
         "De la voluntad de Dios.",
         false,
         "Esa es la teoría del derecho divino, que el contractualismo sustituye."
        ],
        [
         "De la tradición: siempre ha sido así.",
         false,
         "Que algo sea antiguo no lo hace legítimo."
        ]
       ],
       "ok": "Correcto: el poder es legítimo porque lo hemos acordado.",
       "mal": "Todavía no."
      }
     }
    ]
   },
   {
    "fase": "Fase 2 · Profundización",
    "etiqueta": "Nueva pregunta",
    "pregunta": "¿Por qué Hobbes y Locke llegan a Estados tan distintos?",
    "intro": [
     "Los dos son contractualistas, pero Hobbes defiende un poder absoluto y Locke un poder limitado. La clave está en cómo imaginan el punto de partida."
    ],
    "pistas": [
     "Para aterrizar: los dos parten de un estado de naturaleza imaginado y de un pacto para salir de él. La diferencia no está en el país ni en la época, sino en ese punto de partida.",
     "Lo que buscas es una palanca: cuanto peor pintan la vida sin Estado, más poder estamos dispuestos a ceder para escapar de ella.",
     "Así, quien imagina el punto de partida como un peligro insoportable justifica entregar <em>todo</em> el poder; quien lo imagina soportable pero inseguro justifica ceder solo una parte y guardarse derechos.",
     "Por eso del mismo pacto salen Estados opuestos: un poder absoluto si el miedo lo tiñe todo, un poder limitado si solo falta un árbitro de confianza."
    ],
    "comprobacion": {
     "pregunta": "¿Qué explica mejor la diferencia entre Hobbes y Locke?",
     "opciones": [
      [
       "Imaginan estados de naturaleza distintos, y por eso pactan cosas distintas.",
       true
      ],
      [
       "Hobbes no es contractualista.",
       false,
       "Sí lo es: el Leviatán nace de un pacto."
      ],
      [
       "Locke prefiere la monarquía absoluta.",
       false,
       "Es al revés: Locke defiende el poder limitado y la división de poderes."
      ],
      [
       "Vivieron en países distintos.",
       false,
       "El contexto influye, pero la razón filosófica está en su idea del estado de naturaleza."
      ]
     ],
     "ok": "Exacto. El punto de partida decide el tipo de Estado.",
     "mal": "No exactamente."
    },
    "rescate": [
     {
      "boton": "Mostrar la tabla",
      "etiqueta": "Tres contractualistas",
      "titulo": "Del estado de naturaleza al Estado",
      "definicion": [
       "<strong>Hobbes</strong>: «guerra de todos contra todos» («el hombre es un lobo para el hombre») → por miedo, todos ceden su poder a un soberano → monarquía absoluta (el Leviatán).",
       "<strong>Locke</strong>: paz insegura, con derechos naturales (vida, libertad, propiedad) → pacto limitado → Estado liberal, con división de poderes y derecho a rebelarse contra el tirano.",
       "<strong>Rousseau</strong>: el «buen salvaje» es libre e igual; la sociedad lo corrompe → pacto en el que cada uno se somete a la voluntad general → democracia."
      ],
      "comprobacion": {
       "boton": "Terminar comprobando",
       "pregunta": "¿Qué autor defiende el derecho a rebelarse contra un gobierno tirano?",
       "opciones": [
        [
         "Locke.",
         true
        ],
        [
         "Hobbes.",
         false,
         "Hobbes da al soberano un poder absoluto, precisamente para evitar el caos."
        ],
        [
         "Ninguno de ellos.",
         false,
         "Uno sí: relee la fila del Estado liberal."
        ],
        [
         "Todos los contractualistas por igual.",
         false,
         "No: depende de lo que se haya cedido en el pacto."
        ]
       ],
       "ok": "Correcto: si el gobierno rompe el pacto, el pueblo puede retirarle su consentimiento.",
       "mal": "Relee la tabla."
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Ya entiendes el contrato social",
   "parrafos": [
    "El contrato social es el acuerdo hipotético por el que creamos el Estado: su legitimidad viene del consentimiento. Según cómo se imagine el estado de naturaleza, el pacto da un Estado absoluto (Hobbes), liberal (Locke) o democrático (Rousseau).",
    "Para pensar: ¿qué cederías tú para vivir seguro? ¿Hay algo que nunca cederías?"
   ]
  }
 }
];
