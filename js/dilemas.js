// Generado por tools/build_subject.js (fil) — alumnado, sin material del profesor.
const DILEMAS_INTRO = {
 "fil-conocer": {
  "nombre": "Conocer",
  "titulo": "¿Qué podemos saber?",
  "texto": "Dilemas sobre la verdad, la certeza y la duda. No se resuelven eligiendo bien: se resuelven viendo qué estás dispuesto a dar por sabido.",
  "cierre": "Desde Parménides hasta hoy, la pregunta no es solo qué sabemos, sino qué hacemos cuando no podemos saberlo del todo."
 },
 "fil-humano": {
  "nombre": "Ser humano",
  "titulo": "¿Qué somos?",
  "texto": "Identidad, naturaleza y cultura, libertad. Situaciones en las que la respuesta a «¿quién soy?» cambia lo que hay que hacer.",
  "cierre": "Cada respuesta sobre el ser humano es también una decisión sobre cómo tratarlo."
 },
 "fil-etica": {
  "nombre": "Ética",
  "titulo": "¿Qué debo hacer?",
  "texto": "Las grandes escuelas éticas no son teorías de museo: cada una elige distinto ante el mismo caso. Aquí las ves elegir, y luego eliges tú.",
  "cierre": "Saber qué escuela ha elegido contigo no cierra el problema, pero te dice desde dónde estás pensando."
 },
 "fil-politica": {
  "nombre": "Política",
  "titulo": "¿Cómo vivir juntos?",
  "texto": "Justicia, poder, obediencia y democracia: dilemas en los que lo que eliges para ti lo eliges también para los demás.",
  "cierre": "Toda sociedad es una respuesta a estos dilemas; la diferencia está en si la respuesta se discute o se impone."
 },
 "fil-arte": {
  "nombre": "Arte",
  "titulo": "¿Qué es lo bello?",
  "texto": "Originales y copias, belleza y utilidad, arte y ofensa. Dilemas estéticos que acaban siendo dilemas sobre el valor.",
  "cierre": "Lo que decidimos que vale como arte dice mucho de lo que decidimos que vale en general."
 }
};
const DILEMAS = [
 {
  "subject": "fil",
  "grupo": "fil-conocer",
  "id": "fil-cubeta",
  "emoji": "🧠",
  "etiqueta": "Conocimiento y realidad",
  "titulo": "El cerebro en la cubeta",
  "situacion": "Una científica te lo confiesa: existe una probabilidad, pequeña pero real, de que no seas más que un cerebro en una cubeta de nutrientes, conectado a un ordenador que fabrica todo lo que ves, tocas y recuerdas. No hay ninguna prueba posible que lo descarte: cualquier prueba sería también fabricada. Te ofrece dos actitudes para seguir viviendo.",
  "a": "Actuar como si el mundo fuera real, porque es la única hipótesis con la que se puede vivir, aunque no pueda demostrarla.",
  "b": "Suspender el juicio: si no puedo saberlo, no debo afirmar que el mundo es real, y tengo que vivir sabiendo que quizá no lo sea.",
  "pregunta": "¿Podemos conocer la realidad tal como es, o solo lo que nuestra mente nos presenta? ¿Necesitamos certeza para vivir, o basta con una creencia razonable?",
  "enjuego": "El valor de la duda: si es un método que lleva a la verdad o un abismo del que no se sale. Y la diferencia entre saber y estar seguro.",
  "escuelas": [
   {
    "quien": "Descartes (racionalismo)",
    "elige": "A",
    "porque": "También él imaginó un genio maligno que lo engañaba en todo, y encontró un suelo firme: puedo dudar de todo menos de que estoy dudando; y desde ese «pienso» reconstruyó el mundo. La duda es un método, no un destino.",
    "ilustre": "descartes"
   },
   {
    "quien": "Pirrón (escepticismo)",
    "elige": "B",
    "porque": "Si no hay criterio para distinguir lo verdadero de lo falso, lo honesto es suspender el juicio (epojé) y vivir según las apariencias sin afirmar nada; de esa suspensión, decía, nace la serenidad."
   },
   {
    "quien": "Hume (empirismo)",
    "elige": "A",
    "porque": "Reconoce que la razón no puede demostrar que el mundo exterior exista, pero la naturaleza es más fuerte que el escepticismo: en cuanto sales del despacho, juegas, cenas y crees en el mundo. La creencia no se demuestra, se vive.",
    "ilustre": "hume"
   },
   {
    "quien": "Kant",
    "elige": "A",
    "porque": "Conocemos fenómenos, no la cosa en sí; pero eso no es un engaño sino la condición de todo conocimiento. El mundo tal como lo experimentamos es objetivo para todos los seres racionales, y eso basta.",
    "ilustre": "kant"
   }
  ],
  "debate": {
   "epoca": "Siglo XVII",
   "texto": "«Supondré, pues, que no un Dios óptimo, fuente de la verdad, sino cierto genio maligno, sumamente poderoso y astuto, ha puesto toda su industria en engañarme.»",
   "fuente": "Descartes, Meditaciones metafísicas, I (1641). El caso moderno del «cerebro en una cubeta» lo formuló Hilary Putnam en 1981.",
   "unidad": "fil-t3"
  },
  "preguntas": [
   "Si toda prueba puede ser fabricada, ¿tiene sentido la palabra «prueba»? ¿Qué distingue entonces saber de creer?",
   "Descartes se salva con el «pienso, luego existo». ¿Sirve ese punto de apoyo para recuperar todo lo demás, o solo salva al que piensa?",
   "Vivimos rodeados de imágenes generadas y noticias falsas. ¿Es el dilema de la cubeta un juego filosófico o una descripción de tu vida digital?"
  ],
  "ysi": "¿Y si la científica te ofreciera una prueba que solo funciona si confías en ella? ¿Puede la confianza ser el inicio del conocimiento en vez de su enemigo?",
  "dato": "Putnam sostuvo que la frase «soy un cerebro en una cubeta» no puede ser verdadera aunque lo fueras: las palabras de un cerebro en la cubeta se referirían a cubetas simuladas, no a la cubeta real. Es uno de los argumentos más discutidos de la filosofía del lenguaje."
 },
 {
  "subject": "fil",
  "grupo": "fil-conocer",
  "id": "fil-experto",
  "emoji": "🔭",
  "etiqueta": "Verdad y autoridad",
  "titulo": "El experto y la evidencia",
  "situacion": "Un médico de prestigio te dice que un tratamiento funciona. Un estudio con miles de pacientes, que has leído tú misma, dice que no. El médico responde que él lleva treinta años viendo curarse a la gente y que los estudios no lo ven todo. Tienes que decidir qué hacer con tu propio cuerpo.",
  "a": "Seguir al experto: la experiencia acumulada de alguien que sabe vale más que una tabla de números que yo no sé interpretar del todo.",
  "b": "Seguir la evidencia: la ciencia existe precisamente porque la experiencia de una persona, por larga que sea, engaña.",
  "pregunta": "¿De dónde sale la autoridad de un conocimiento: de quién lo dice o de cómo se ha obtenido? ¿Es racional confiar?",
  "enjuego": "El método frente a la autoridad, y el problema de fondo de nuestro tiempo: casi todo lo que sabemos lo sabemos por otros.",
  "escuelas": [
   {
    "quien": "Aristóteles",
    "elige": "A",
    "porque": "La experiencia (empeiría) de quien ha visto muchos casos es el origen del saber práctico; el médico prudente conoce lo particular, que los principios generales no alcanzan.",
    "ilustre": "aristoteles"
   },
   {
    "quien": "Bacon y la ciencia moderna",
    "elige": "B",
    "porque": "Los «ídolos» de la tribu y del teatro son exactamente eso: la mente ve regularidades donde no las hay y respeta a las autoridades porque son autoridades. Solo el experimento controlado corrige al ojo."
   },
   {
    "quien": "Hume",
    "elige": "B",
    "porque": "La costumbre nos hace esperar que lo que vimos se repita; treinta años de costumbre no son una prueba, son treinta años de hábito. Un sabio proporciona su creencia a la evidencia.",
    "ilustre": "hume"
   },
   {
    "quien": "Popper (siglo XX)",
    "elige": "B",
    "porque": "Ninguna cantidad de casos favorables confirma una teoría, pero un solo estudio bien hecho puede refutarla. La ciencia avanza por lo que sobrevive a los intentos de derribarla, no por la autoridad."
   }
  ],
  "debate": {
   "epoca": "Siglo XVII",
   "texto": "«El entendimiento humano, por su propia naturaleza, se inclina a suponer en las cosas más orden y regularidad del que encuentra.»",
   "fuente": "Francis Bacon, Novum Organum, aforismo 45 (1620).",
   "unidad": "fil-t3"
  },
  "preguntas": [
   "¿Puedes seguir la evidencia sin entenderla del todo? ¿No es eso también confiar en una autoridad, la de los científicos?",
   "Si el estudio se hizo con dinero de una farmacéutica, ¿cambia algo? ¿Es la sospecha un argumento?",
   "¿Qué haces cuando dos expertos se contradicen? ¿Hay un criterio que no sea elegir al que te cae mejor?"
  ],
  "ysi": "¿Y si el estudio dijera lo que tú ya querías creer? Hume advirtió que la razón es «esclava de las pasiones»: ¿confías en la evidencia o en la evidencia que te conviene?",
  "dato": "En 1847, Ignaz Semmelweis demostró con datos que lavarse las manos reducía las muertes de parturientas de un 18 % a un 2 %. Los médicos de prestigio lo rechazaron durante décadas: la evidencia contradecía su experiencia."
 },
 {
  "subject": "fil",
  "grupo": "fil-humano",
  "id": "fil-teseo",
  "emoji": "⛵",
  "etiqueta": "Identidad personal",
  "titulo": "El barco de Teseo",
  "situacion": "Una empresa ofrece sustituir, poco a poco, cada neurona dañada de tu cerebro por un chip que hace exactamente lo mismo. El proceso dura años; en ningún momento notas nada. Al final, ninguna célula del cerebro con el que naciste sigue ahí. Un amigo te pregunta si al terminar seguirás siendo tú, y si merece la pena averiguarlo.",
  "a": "Sí, seguiré siendo yo: lo que me hace ser quien soy es la continuidad de mis recuerdos, mi carácter y mi manera de pensar, no el material.",
  "b": "No lo sé, y por eso no lo haré: si ninguna parte original queda, quien piense mis pensamientos será otro que cree ser yo.",
  "pregunta": "¿Qué hace que una persona siga siendo la misma a lo largo del tiempo: la materia, la memoria, el cuerpo, la conciencia? ¿Hay un «yo» o solo una sucesión?",
  "enjuego": "El problema de la identidad personal, que ya planteaba Heráclito con el río y que la medicina y la tecnología convierten en decisión práctica.",
  "escuelas": [
   {
    "quien": "Heráclito",
    "elige": "A",
    "porque": "Nadie se baña dos veces en el mismo río y, sin embargo, es el mismo río: la identidad no está en la materia, que fluye, sino en la forma del cambio."
   },
   {
    "quien": "Locke (empirismo)",
    "elige": "A",
    "porque": "La identidad personal es la continuidad de la conciencia y la memoria: soy la misma persona que hizo aquello porque lo recuerdo desde dentro. Si los chips conservan la memoria, la persona sigue."
   },
   {
    "quien": "Platón",
    "elige": "B",
    "porque": "El yo verdadero es el alma, no el cuerpo ni sus funciones; si el proceso solo copia funciones, copia el cuerpo, y el alma no se fabrica.",
    "ilustre": "platon"
   },
   {
    "quien": "Hume",
    "elige": "B",
    "porque": "Cuando me busco a mí mismo, solo encuentro percepciones sueltas; el «yo» es un haz, una ficción útil. La pregunta de si «seguirás siendo tú» no tiene respuesta porque no hay tal cosa.",
    "ilustre": "hume"
   }
  ],
  "debate": {
   "epoca": "Antigüedad y siglo XVII",
   "texto": "«Plutarco cuenta que los atenienses conservaron el barco de Teseo sustituyendo las tablas podridas por otras nuevas, de modo que el barco se convirtió en ejemplo para los filósofos: unos decían que seguía siendo el mismo, otros que no.»",
   "fuente": "Plutarco, Vida de Teseo, 23. Locke reformula el problema en el Ensayo sobre el entendimiento humano, II, 27 (1690).",
   "unidad": "fil-t2"
  },
  "preguntas": [
   "Tus células se renuevan casi por completo cada pocos años. ¿Ya has pasado por el dilema sin darte cuenta?",
   "Si copiaran tu cerebro entero en un ordenador mientras tú sigues vivo, ¿cuál de los dos sería tú? ¿Por qué no los dos?",
   "¿Qué te importa más conservar: tus recuerdos o tu cuerpo? ¿Y qué te dice eso de qué crees que eres?"
  ],
  "ysi": "¿Y si el proceso fuera instantáneo en vez de gradual: te duermen y despiertas con todo sustituido? ¿Cambia tu respuesta? Si cambia, lo que pesa no es la materia sino la continuidad.",
  "dato": "Los pacientes con implantes cerebrales profundos para el párkinson describen a veces que «no se sienten ellos mismos» aunque piensen y recuerden igual: la identidad parece incluir también cómo uno se siente desde dentro."
 },
 {
  "subject": "fil",
  "grupo": "fil-humano",
  "id": "fil-salvaje",
  "emoji": "🌲",
  "etiqueta": "Naturaleza y cultura",
  "titulo": "El niño del bosque",
  "situacion": "Un niño de unos once años aparece en un bosque: no habla, camina a cuatro patas, come lo que encuentra y huye de las personas. Un médico joven pide llevárselo y educarlo con paciencia durante años. Un colega replica que es cruel: el niño es feliz a su manera, nunca aprenderá a hablar del todo y solo le darán la conciencia de lo que le falta.",
  "a": "Educarlo: sin lenguaje y sin otros no es libre ni plenamente humano; la educación no lo cambia, lo completa.",
  "b": "Dejarlo en paz o devolverlo al bosque: lo humano no es un molde; imponerle nuestra cultura es tratarlo como un proyecto y no como una persona.",
  "pregunta": "¿Qué es lo natural en el ser humano y qué es aprendido? ¿Somos humanos por nacimiento o nos hacemos humanos con los demás?",
  "enjuego": "El debate naturaleza-cultura, la hominización y la humanización, y una decisión sobre el derecho a intervenir en una vida.",
  "escuelas": [
   {
    "quien": "Aristóteles",
    "elige": "A",
    "porque": "El ser humano es por naturaleza un animal que habla y vive en la polis; quien vive fuera de la comunidad «o es una bestia o es un dios». Educarlo es ayudarle a ser lo que ya es en potencia.",
    "ilustre": "aristoteles"
   },
   {
    "quien": "Rousseau",
    "elige": "B",
    "porque": "El hombre nace bueno y libre y la sociedad lo encadena; el niño del bosque no es un defecto de humanidad sino una muestra de lo que somos antes de que nos deformen.",
    "ilustre": "rousseau"
   },
   {
    "quien": "Kant",
    "elige": "A",
    "porque": "El hombre es la única criatura que debe ser educada; solo por la educación puede llegar a ser hombre. No hay humanidad sin disciplina y cultura.",
    "ilustre": "kant"
   },
   {
    "quien": "Marx y la antropología cultural",
    "elige": "A",
    "porque": "No hay una esencia humana fija: somos el conjunto de nuestras relaciones sociales. Sin sociedad no hay naturaleza humana que respetar, solo un organismo."
   }
  ],
  "debate": {
   "epoca": "Siglo XVIII (Ilustración)",
   "texto": "«El hombre no puede hacerse hombre más que por la educación. No es más que lo que la educación hace de él.»",
   "fuente": "Kant, Pedagogía (1803). El caso real es el de Víctor de Aveyron, educado por el doctor Itard desde 1800; Truffaut lo llevó al cine en El pequeño salvaje (1970).",
   "unidad": "fil-t2"
  },
  "preguntas": [
   "Si Víctor nunca llegó a hablar, ¿fracasó la educación o fracasó la teoría de que el lenguaje es natural?",
   "¿Hay algo en ti que sea «natural» y no aprendido? Intenta nombrarlo y mira si resiste.",
   "¿Es lo mismo educar que domesticar? ¿Dónde está la diferencia?"
  ],
  "ysi": "¿Y si el niño, ya adulto y con lenguaje, te dijera que hubiera preferido seguir en el bosque? ¿Tiene derecho a juzgar una decisión que hizo posible que la juzgara?",
  "dato": "Los casos documentados de «niños salvajes» (Víctor, Genie en 1970) muestran que si el lenguaje no se adquiere antes de la adolescencia, después ya no se aprende del todo: hay un periodo crítico. La cultura tiene un reloj biológico."
 },
 {
  "subject": "fil",
  "grupo": "fil-etica",
  "id": "fil-maquina",
  "emoji": "🎛️",
  "etiqueta": "El bien y el placer",
  "titulo": "La máquina de experiencias",
  "situacion": "Unos neurocientíficos te ofrecen conectarte de por vida a una máquina que estimula el cerebro y produce cualquier experiencia que desees: escribir la novela del siglo, ser querido, viajar, vencer. Dentro no sabrás que es una simulación; lo vivirás como real y sin dolor. Puedes programar toda una vida. Fuera, la vida real sigue con sus fracasos, su aburrimiento y sus pérdidas. Solo hay una condición: si entras, no sales.",
  "a": "Conectarme. Si lo que importa es lo que se siente, una vida de experiencias plenas es la mejor vida posible.",
  "b": "No conectarme. Quiero hacer las cosas, no solo sentir que las hago; quiero ser alguien, no un cerebro estimulado.",
  "pregunta": "¿Es el placer el bien? ¿Una vida buena es una vida que se siente bien, o una vida que es buena aunque a veces duela?",
  "enjuego": "El criterio del bien: el placer, la autenticidad o la excelencia. Y una sospecha: quizá lo que queremos no es sentirnos felices, sino que ciertas cosas sean verdad.",
  "escuelas": [
   {
    "quien": "Epicuro (hedonismo)",
    "elige": "A",
    "porque": "Con condiciones: el placer que cuenta es la ausencia de dolor y de temor (ataraxia); una máquina sin dolor cumple su ideal, siempre que no haya miedo a que falle.",
    "ilustre": "epicuro"
   },
   {
    "quien": "Bentham y Mill (utilitarismo)",
    "elige": "A",
    "porque": "Bentham mediría cantidad de placer y diría que sí; Mill distingue placeres superiores e inferiores («más vale un Sócrates insatisfecho que un necio satisfecho») y dudaría.",
    "ilustre": "mill"
   },
   {
    "quien": "Aristóteles (eudaimonía)",
    "elige": "B",
    "porque": "La felicidad no es una sensación sino una actividad del alma conforme a la virtud; quien no actúa no vive bien.",
    "ilustre": "aristoteles"
   },
   {
    "quien": "Kant",
    "elige": "B",
    "porque": "Una vida programada renuncia a la autonomía; la dignidad está en darse uno mismo la ley, no en ser un receptor de estímulos.",
    "ilustre": "kant"
   }
  ],
  "debate": {
   "epoca": "Siglo XX",
   "texto": "«¿Qué otra cosa puede importarnos, además de cómo se sienten nuestras vidas desde dentro?» La respuesta de Nozick: nos importa hacer ciertas cosas, ser de cierta manera y estar en contacto con una realidad más profunda que la que fabricamos.",
   "fuente": "Robert Nozick, Anarquía, Estado y utopía (1974), contra el hedonismo y el utilitarismo.",
   "unidad": "fil-t5"
  },
  "preguntas": [
   "Si dentro de la máquina no sabes que estás dentro, ¿en qué sentido tu vida es «peor»? ¿Peor para quién?",
   "¿Qué diferencia hay entre esta máquina y las redes sociales, los videojuegos o una droga? ¿Es de grado o de naturaleza?",
   "Mill dice que hay placeres superiores. ¿Quién decide cuáles son? ¿No es eso elitismo?"
  ],
  "ysi": "¿Y si la máquina no simulara nada, sino que borrara el dolor de tu vida real (el del duelo, el del fracaso, el de la vergüenza) y dejara todo lo demás? ¿Entrarías? ¿Qué te dice tu respuesta sobre el papel del dolor en una vida que merezca la pena?",
  "dato": "En las encuestas que replican el experimento, la mayoría rechaza conectarse; pero cuando se pregunta si saldrían de una máquina en la que ya llevaran toda la vida, la mayoría prefiere quedarse. El sesgo del statu quo pesa más que la teoría del bien."
 },
 {
  "subject": "fil",
  "grupo": "fil-etica",
  "id": "fil-tranvia",
  "emoji": "🚋",
  "etiqueta": "Fines y medios",
  "titulo": "El tranvía y el puente",
  "situacion": "Un tranvía sin frenos avanza hacia cinco trabajadores que no pueden apartarse. Primera escena: estás junto a una palanca; si la accionas, el tranvía se desvía a otra vía donde hay una sola persona. Segunda escena: estás en un puente sobre la vía junto a un hombre muy corpulento; si lo empujas, su cuerpo detendrá el tranvía y salvará a los cinco. En las dos escenas mueren uno o mueren cinco. Casi todo el mundo acciona la palanca y casi nadie empuja.",
  "a": "Las dos cosas son lo mismo: uno por cinco. Si acciono la palanca, debo empujar; la diferencia es solo que empujar me da asco, y el asco no es un argumento.",
  "b": "No son lo mismo: desviar un peligro es distinto de usar a una persona como freno. Hay cosas que no se le hacen a nadie, ni por cinco ni por cien.",
  "pregunta": "¿El fin justifica los medios? ¿Se juzga una acción por sus consecuencias o hay actos que están prohibidos hagan lo que hagan?",
  "enjuego": "La frontera entre matar y dejar morir, y entre usar a alguien y aceptar un daño colateral. Es el corazón del debate entre consecuencialismo y deontología.",
  "escuelas": [
   {
    "quien": "Bentham (utilitarismo)",
    "elige": "A",
    "porque": "Cinco vidas valen más que una en cualquier cálculo; el modo de salvarlas es un detalle. Las emociones que nos frenan son restos de superstición moral.",
    "ilustre": "bentham"
   },
   {
    "quien": "Kant",
    "elige": "B",
    "porque": "Empujar al hombre es tratarlo solo como un medio, y eso está prohibido por el imperativo categórico. Desviar el tranvía no lo usa a él: su muerte es un efecto, no el instrumento.",
    "ilustre": "kant"
   },
   {
    "quien": "Tomás de Aquino (doctrina del doble efecto)",
    "elige": "B",
    "porque": "Una acción con un efecto malo puede ser lícita si el mal no es el medio ni el fin, sino un efecto colateral proporcionado. La palanca cumple la regla; el empujón, no.",
    "ilustre": "tomas"
   },
   {
    "quien": "Aristóteles",
    "elige": "B",
    "porque": "La persona virtuosa no decide con una fórmula sino con el carácter: hay acciones que un hombre bueno no realiza, y empujar a un inocente es una de ellas, aunque el resultado sea mejor.",
    "ilustre": "aristoteles"
   }
  ],
  "debate": {
   "epoca": "Siglo XX",
   "texto": "«Obra de tal modo que trates a la humanidad, tanto en tu persona como en la de cualquier otro, siempre como un fin y nunca solamente como un medio.»",
   "fuente": "Kant, Fundamentación de la metafísica de las costumbres (1785). El dilema lo formuló Philippa Foot en 1967; la variante del puente es de Judith Jarvis Thomson (1985).",
   "unidad": "fil-t5"
  },
  "preguntas": [
   "¿Por qué casi nadie empuja? ¿Es una intuición moral que la teoría debe respetar, o un prejuicio que la teoría debe corregir?",
   "Un coche autónomo tendrá que estar programado para un caso así. ¿Quién debe decidir el algoritmo: los ingenieros, los usuarios, la ley?",
   "Si en la vía hubiera cinco desconocidos y en la otra tu hermana, ¿cambia el cálculo? ¿Debería?"
  ],
  "ysi": "¿Y si el hombre del puente fuera el que soltó los frenos del tranvía? Casi todo el mundo lo empujaría entonces. ¿Eso significa que sí se puede usar a alguien como medio, si es culpable? ¿O que lo que te frenaba no era la regla sino la inocencia?",
  "dato": "El experimento se ha pasado a millones de personas en decenas de países: en todas las culturas la mayoría acciona la palanca (entre el 70 y el 90 %) y la mayoría se niega a empujar. Las intuiciones morales básicas parecen más universales que las teorías."
 },
 {
  "subject": "fil",
  "grupo": "fil-etica",
  "id": "fil-mentira",
  "emoji": "🤫",
  "etiqueta": "Verdad y compasión",
  "titulo": "La verdad que hace daño",
  "situacion": "Tu abuelo, muy enfermo, te pregunta si su perro, al que quería como a un hijo, está bien. El perro murió la semana pasada. Los médicos dicen que a tu abuelo le quedan días. Toda la familia ha decidido no decírselo. Él te mira a ti, porque sabe que tú no le mientes.",
  "a": "Mentir: decirle que el perro está bien. La verdad aquí no sirve para nada salvo para hacer daño, y la compasión es más importante que una regla.",
  "b": "No mentir: buscar la manera de no herirle, pero sin engañarle. Si le miento ahora, la confianza en la que se apoya para preguntarme a mí deja de existir.",
  "pregunta": "¿Es la verdad un deber absoluto o un bien entre otros? ¿Puede el amor justificar el engaño?",
  "enjuego": "El conflicto entre dos virtudes, sinceridad y compasión, y la diferencia entre no decir la verdad y decir una mentira.",
  "escuelas": [
   {
    "quien": "Kant",
    "elige": "B",
    "porque": "La mentira es siempre contraria al deber porque destruye la fuente de todo derecho: la confianza en la palabra. Pero Kant no obliga a decir toda la verdad, solo a no afirmar lo falso: callar o desviar es lícito.",
    "ilustre": "kant"
   },
   {
    "quien": "Mill (utilitarismo)",
    "elige": "A",
    "porque": "Si la verdad solo produce sufrimiento y no puede cambiar nada, la mentira es la acción correcta. Aunque Mill añade: la regla de veracidad es tan útil que las excepciones deben ser muy raras.",
    "ilustre": "mill"
   },
   {
    "quien": "Aristóteles (ética de la virtud)",
    "elige": "B",
    "porque": "La persona prudente no mentiría, pero tampoco soltaría la verdad como una piedra: encontraría el modo justo, en el momento justo, de estar con el abuelo. La virtud no está en la regla sino en el tacto.",
    "ilustre": "aristoteles"
   },
   {
    "quien": "Agustín de Hipona",
    "elige": "B",
    "porque": "Escribió dos tratados contra la mentira: ninguna mentira es lícita, ni la que salva una vida, porque quien miente pierde algo que vale más que lo que protege.",
    "ilustre": "agustin"
   }
  ],
  "debate": {
   "epoca": "Siglos IV-V y XVIII",
   "texto": "«La mentira es un decir falso con voluntad de engañar. […] Quien opine que hay alguna mentira que no es pecado, se engaña a sí mismo de la peor manera.»",
   "fuente": "Agustín de Hipona, Sobre la mentira (395). Kant retoma la tesis en Sobre un presunto derecho a mentir por filantropía (1797).",
   "unidad": "fil-t5"
  },
  "preguntas": [
   "¿Hay diferencia moral entre mentir y callar? ¿Y entre callar y cambiar de tema?",
   "Si tu abuelo confía en ti porque nunca le mientes, ¿no es esa confianza lo que destruyes al mentirle «por su bien»?",
   "¿Tenemos derecho a decidir qué verdad puede soportar otra persona?"
  ],
  "ysi": "¿Y si el abuelo estuviera sano y le quedaran veinte años? ¿Cambia tu respuesta? Si cambia, lo que decide no es la verdad sino el cálculo de las consecuencias, y entonces estás con Mill aunque creyeras estar con Kant.",
  "dato": "En medicina, el derecho del paciente a conocer su diagnóstico solo se reconoció en la segunda mitad del siglo XX; hasta entonces «mentir por compasión» era la norma. Hoy la ley protege la verdad, pero también el derecho del paciente a no querer saberla."
 },
 {
  "subject": "fil",
  "grupo": "fil-etica",
  "id": "fil-giges",
  "emoji": "💍",
  "etiqueta": "Justicia y castigo",
  "titulo": "El anillo de Giges",
  "situacion": "Encuentras un anillo que te hace invisible cuando giras el engaste. Nadie podrá verte nunca hacer nada: puedes tomar lo que quieras, entrar donde quieras, vengarte de quien quieras. Ningún castigo te alcanzará jamás. Glaucón, en la República, apuesta a que nadie, ni el más justo, resistiría: solo somos justos por miedo a ser vistos.",
  "a": "Glaucón tiene razón: sin castigo ni mirada ajena, la justicia se derrumba. Yo usaría el anillo, quizá con moderación, pero lo usaría.",
  "b": "Glaucón se equivoca: la justicia es un bien en sí misma, un orden del alma, y quien la abandona se hace daño aunque nadie lo vea.",
  "pregunta": "¿Somos justos por convicción o por miedo? ¿Vale la pena ser justo si nadie lo sabe y no hay recompensa?",
  "enjuego": "El fundamento de la moral: si es un contrato entre débiles que temen o algo que vale por sí mismo. Es la pregunta que abre la República.",
  "escuelas": [
   {
    "quien": "Glaucón y los sofistas",
    "elige": "A",
    "porque": "La justicia nace de un pacto: como sufrir la injusticia es peor que cometerla, los débiles acordaron no hacerse daño. Quitad el miedo y quitáis la justicia."
   },
   {
    "quien": "Platón (Sócrates)",
    "elige": "B",
    "porque": "Toda la República es la respuesta: la justicia es la armonía del alma, y el injusto, aunque tenga el anillo, vive con el alma tiranizada por sus deseos. Ningún anillo lo salva de eso.",
    "ilustre": "platon"
   },
   {
    "quien": "Hobbes",
    "elige": "A",
    "porque": "En estado de naturaleza cada uno tiene derecho a todo; las leyes obligan porque hay una espada que las respalda. «Los pactos sin la espada son solo palabras».",
    "ilustre": "hobbes"
   },
   {
    "quien": "Kant",
    "elige": "B",
    "porque": "La moral no depende de las consecuencias ni de ser visto: una acción es buena si su máxima puede ser ley universal, y «robaré cuando nadie me vea» no puede serlo.",
    "ilustre": "kant"
   }
  ],
  "debate": {
   "epoca": "Siglo IV a. C.",
   "texto": "«Si hubiera dos anillos como ese y se pusiera uno el justo y otro el injusto, nadie sería tan de hierro como para mantenerse en la justicia. […] Nadie es justo voluntariamente, sino forzado.»",
   "fuente": "Platón, República, II, 359d-360d.",
   "unidad": "fil-t5"
  },
  "preguntas": [
   "Piensa en la última vez que hiciste algo bien sin que nadie lo supiera. ¿Por qué lo hiciste? ¿Responde eso a Glaucón?",
   "En internet se es casi invisible: ¿se comporta la gente como predice Glaucón? ¿Tú?",
   "Platón dice que el injusto se daña el alma. ¿Qué significa eso sin religión? ¿Puedes traducirlo a algo que un ateo acepte?"
  ],
  "ysi": "¿Y si el anillo, además de hacerte invisible, te hiciera olvidar cada noche lo que hiciste con él? Ni castigo, ni testigos, ni remordimiento. ¿Queda alguna razón para ser justo? Si crees que sí, ya has respondido a Glaucón.",
  "dato": "El anillo de Giges inspiró a Tolkien el Anillo Único: también en El Señor de los Anillos el anillo no da poder sin más, sino que corrompe a quien lo lleva. Es la tesis de Platón convertida en novela."
 },
 {
  "subject": "fil",
  "grupo": "fil-politica",
  "id": "fil-velo",
  "emoji": "🫥",
  "etiqueta": "Justicia social",
  "titulo": "El velo de ignorancia",
  "situacion": "Tienes que diseñar las reglas de una sociedad en la que vas a vivir, pero con una condición: no sabes qué lugar ocuparás en ella. No sabes si nacerás rico o pobre, sano o enfermo, hombre o mujer, con talento o sin él, en la mayoría o en una minoría. Solo puedes elegir entre dos tipos de sociedad.",
  "a": "Una sociedad de máxima libertad y mínimas garantías: cada uno se queda con lo que consigue; los que ganan, ganan mucho; los que pierden, pierden todo.",
  "b": "Una sociedad que garantiza a todos un mínimo digno y solo permite desigualdades si benefician también a los que están peor; los que ganan, ganan menos.",
  "pregunta": "¿Qué es una sociedad justa? ¿La que respeta lo que cada uno consigue, o la que corrige lo que nadie ha elegido, como dónde nace?",
  "enjuego": "Libertad frente a igualdad, mérito frente a suerte, y una idea potente: la justicia es lo que elegirías si no supieras quién vas a ser.",
  "escuelas": [
   {
    "quien": "Rawls (liberalismo igualitario)",
    "elige": "B",
    "porque": "Bajo el velo de ignorancia, un ser racional elige la estrategia maximin: que el peor lugar posible sea lo mejor posible. De ahí sus dos principios: libertades básicas para todos y desigualdades solo si favorecen a los peor situados.",
    "ilustre": "rawls"
   },
   {
    "quien": "Nozick (libertarismo)",
    "elige": "A",
    "porque": "Lo que cada uno adquiere justamente es suyo; redistribuirlo es trabajo forzado. El velo de ignorancia trata a las personas como si sus talentos fueran un bien común, y no lo son."
   },
   {
    "quien": "Aristóteles",
    "elige": "B",
    "porque": "Justicia es dar a cada uno lo suyo según el mérito, pero la ciudad existe para la vida buena de todos, y una polis de extremos, muy ricos y muy pobres, no es ciudad sino dos ciudades en guerra.",
    "ilustre": "aristoteles"
   },
   {
    "quien": "Marx",
    "elige": "B",
    "porque": "Pero con reservas: el velo sigue aceptando la propiedad privada y las clases; una justicia real no repartiría mejor la desigualdad, la aboliría: «de cada uno según su capacidad, a cada uno según su necesidad»."
   }
  ],
  "debate": {
   "epoca": "Siglo XX",
   "texto": "«Los principios de la justicia se eligen tras un velo de ignorancia. Esto asegura que nadie es favorecido o desfavorecido en la elección por el resultado del azar natural o de las contingencias sociales.»",
   "fuente": "John Rawls, Teoría de la justicia (1971), §3. Nozick le responde en Anarquía, Estado y utopía (1974).",
   "unidad": "fil-t6"
  },
  "preguntas": [
   "¿Elegirías lo mismo si supieras que vas a nacer rico? Si no, ¿tu idea de justicia es justicia o interés?",
   "¿El talento es mérito tuyo o suerte de nacimiento? ¿Y el esfuerzo: te lo has ganado o te lo enseñaron?",
   "¿Es justa una lotería que todos aceptan? El velo dice que la justicia no puede depender de la lotería de nacer."
  ],
  "ysi": "¿Y si detrás del velo tampoco supieras en qué generación vas a nacer, en esta o dentro de cien años? ¿Qué reglas elegirías sobre el clima, la deuda o los recursos? Rawls llamó a esto el principio de ahorro justo.",
  "dato": "En experimentos con dinero real, cuando se pide a la gente que elija reglas de reparto sin saber qué parte le tocará, la mayoría no elige el maximin de Rawls sino un mínimo garantizado más un incentivo al mérito: algo entre A y B."
 },
 {
  "subject": "fil",
  "grupo": "fil-politica",
  "id": "fil-voto",
  "emoji": "🗳️",
  "etiqueta": "Democracia y saber",
  "titulo": "El voto del que no sabe",
  "situacion": "Una ciudad va a decidir por referéndum si construye una central que un informe de doscientas páginas evalúa en términos técnicos. Casi nadie lo ha leído. Alguien propone que solo voten quienes superen un examen sobre el informe. Otro responde que eso es el fin de la democracia. Tú tienes que votar sobre la propuesta.",
  "a": "Que decidan quienes saben: una decisión técnica tomada por ignorantes no es libertad, es ruleta. Sócrates preguntaba si elegiríamos al piloto de un barco a mano alzada.",
  "b": "Que vote todo el mundo: la democracia no es el gobierno de los que saben más, sino de los que van a vivir con las consecuencias; y el examen lo pondría alguien.",
  "pregunta": "¿Quién debe gobernar: los que saben o todos? ¿Es la igualdad política un valor o un error?",
  "enjuego": "La crítica clásica a la democracia (Platón) frente a su defensa moderna, y la pregunta de qué legitima una decisión: su calidad o su origen.",
  "escuelas": [
   {
    "quien": "Platón",
    "elige": "A",
    "porque": "La ciudad es como un barco: quien no sabe navegar no debe llevar el timón. La democracia entrega el poder al que mejor halaga a la masa, y de ahí nace el tirano. Deben gobernar los que saben, los filósofos.",
    "ilustre": "platon"
   },
   {
    "quien": "Aristóteles",
    "elige": "B",
    "porque": "Muchos que individualmente no son sabios, reunidos pueden juzgar mejor que unos pocos, como un banquete al que cada uno aporta un plato. Además, quien lleva los zapatos sabe dónde aprietan mejor que el zapatero.",
    "ilustre": "aristoteles"
   },
   {
    "quien": "Rousseau",
    "elige": "B",
    "porque": "La soberanía es del pueblo y no puede delegarse: la ley es justa porque la quiere la voluntad general, no porque la dicte un experto. Un pueblo que deja decidir a otros ya no es libre.",
    "ilustre": "rousseau"
   },
   {
    "quien": "Mill",
    "elige": "A",
    "porque": "A medias: defendía el sufragio universal, pero proponía que los más instruidos tuvieran más de un voto. Temía la «tiranía de la mayoría» tanto como la de un rey.",
    "ilustre": "mill"
   }
  ],
  "debate": {
   "epoca": "Siglo IV a. C.",
   "texto": "«Imagina un barco cuyo dueño es más grande y fuerte que todos, pero sordo, corto de vista y de poco entendimiento náutico, y unos marineros que se disputan el timón sin haber aprendido jamás el arte de navegar.»",
   "fuente": "Platón, República, VI, 488a-489a (la alegoría de la nave). Aristóteles responde en Política, III, 11.",
   "unidad": "fil-t6"
  },
  "preguntas": [
   "Sabemos que muchos votantes no leen los programas. ¿Es eso un argumento contra la democracia o contra cómo la practicamos?",
   "¿Quién pondría el examen? ¿Qué preguntas entrarían? Ahí está el problema de Platón: ¿quién vigila a los sabios?",
   "¿Hay decisiones que no deberían votarse nunca (los derechos de una minoría, por ejemplo)? ¿Quién lo decide?"
  ],
  "ysi": "¿Y si en vez de un examen la ciudad sorteara cien ciudadanos, les pagara un mes para estudiar el informe con expertos y luego votaran ellos? Es lo que hacía Atenas y lo que hoy se llama asamblea ciudadana. ¿Resuelve el dilema o lo esquiva?",
  "dato": "Irlanda decidió en 2018 sobre el aborto tras una asamblea de 99 ciudadanos sorteados que estudiaron el tema durante meses; su recomendación fue después aprobada en referéndum. Platón y Aristóteles, juntos, por una vez."
 },
 {
  "subject": "fil",
  "grupo": "fil-arte",
  "id": "fil-falsa",
  "emoji": "🖼️",
  "etiqueta": "Original y copia",
  "titulo": "El cuadro que era falso",
  "situacion": "Un museo descubre que uno de sus cuadros más admirados, ante el que la gente lleva décadas emocionándose, es una falsificación perfecta del siglo XX: mismo estilo, misma técnica, indistinguible incluso para los expertos hasta que un análisis químico lo delató. La dirección debe decidir si lo retira o lo deja donde está.",
  "a": "Retirarlo: una obra de arte no es solo una superficie, es un acto de alguien en un momento; si eso es mentira, la obra es mentira, por bella que sea.",
  "b": "Dejarlo: lo que emocionó a miles de personas sigue ahí, pincelada a pincelada; lo único que cambia es una etiqueta y un precio.",
  "pregunta": "¿Dónde está el valor de una obra de arte: en lo que vemos o en su historia? ¿La belleza depende de la autenticidad?",
  "enjuego": "Qué es una obra de arte: un objeto, una experiencia o un gesto humano. Y si el mercado, con sus firmas y precios, ha secuestrado la pregunta.",
  "escuelas": [
   {
    "quien": "Platón",
    "elige": "A",
    "porque": "Con ironía: para Platón todo cuadro es ya una copia de una copia, tres grados alejado de la verdad; la falsificación solo añade un grado más de engaño a lo que ya era engaño.",
    "ilustre": "platon"
   },
   {
    "quien": "Kant (juicio estético)",
    "elige": "B",
    "porque": "El juicio de gusto es desinteresado: lo bello nos complace sin que importe la existencia, el origen ni la utilidad del objeto. Si el cuadro era bello el lunes, sigue siéndolo el martes.",
    "ilustre": "kant"
   },
   {
    "quien": "Hegel y la estética romántica",
    "elige": "A",
    "porque": "El arte es la manifestación sensible de un espíritu, de una época; una falsificación del siglo XX no expresa el siglo XVII, lo imita. Sin la verdad histórica, la obra pierde su alma."
   },
   {
    "quien": "Walter Benjamin (siglo XX)",
    "elige": "B",
    "porque": "El «aura» del original ya la destruyó la reproducción técnica; empeñarse en la autenticidad es un culto casi religioso. Lo que importa es qué hace la obra con quien la mira."
   }
  ],
  "debate": {
   "epoca": "Siglo XX",
   "texto": "«Incluso en la reproducción mejor lograda falta algo: el aquí y ahora de la obra de arte, su existencia irrepetible en el lugar en que se encuentra.»",
   "fuente": "Walter Benjamin, La obra de arte en la época de su reproductibilidad técnica (1936). El caso real más famoso es el de Han van Meegeren, que vendió «Vermeers» falsos entre 1937 y 1945.",
   "unidad": "fil-t7"
  },
  "preguntas": [
   "Si nadie hubiera descubierto la falsificación, ¿la obra sería menos valiosa? ¿Puede una obra perder valor sin cambiar en nada?",
   "Una imagen generada por inteligencia artificial que te emociona: ¿es arte? ¿Cambia tu respuesta si te dicen que la hizo una persona?",
   "¿Pagarías lo mismo por una copia perfecta? Si no, ¿qué estás comprando exactamente con un original?"
  ],
  "ysi": "¿Y si el falsificador confesara que pintó el cuadro por amor al maestro, sin intención de engañar, y que fue un marchante quien le puso la firma? ¿Cambia el valor de la obra la intención de quien la hizo?",
  "dato": "Cuando van Meegeren fue detenido en 1945 acusado de vender un Vermeer a Göring, tuvo que pintar otro «Vermeer» en la cárcel, ante testigos, para demostrar que los cuadros eran falsos y librarse de la acusación de colaboracionismo. Lo consiguió."
 }
];
