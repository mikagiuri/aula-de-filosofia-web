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
     "La validez es una propiedad de la <em>forma</em> del argumento, no de su contenido.",
     "Un argumento tiene premisas y una conclusión. La pregunta es qué relación hay entre ellas.",
     "Si el argumento es válido, <strong>no puede ocurrir</strong> que las premisas sean verdaderas y la conclusión falsa.",
     "Es válido cuando la conclusión se sigue necesariamente de las premisas, sean estas verdaderas o no."
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
     "Un argumento válido funciona como una máquina: si entra verdad por las premisas, sale verdad por la conclusión.",
     "Pero si entra algo falso, la máquina no garantiza nada.",
     "Hay un nombre para el argumento que es válido <em>y además</em> tiene todas las premisas verdaderas.",
     "Ese argumento se llama <strong>sólido</strong>: es el único que garantiza que la conclusión es verdadera."
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
 }
];
