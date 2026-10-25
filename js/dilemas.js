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
    "biografia": "descartes"
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
    "biografia": "hume"
   },
   {
    "quien": "Kant",
    "elige": "A",
    "porque": "Conocemos fenómenos, no la cosa en sí; pero eso no es un engaño sino la condición de todo conocimiento. El mundo tal como lo experimentamos es objetivo para todos los seres racionales, y eso basta.",
    "biografia": "kant"
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
    "biografia": "aristoteles"
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
    "biografia": "hume"
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
    "biografia": "platon"
   },
   {
    "quien": "Hume",
    "elige": "B",
    "porque": "Cuando me busco a mí mismo, solo encuentro percepciones sueltas; el «yo» es un haz, una ficción útil. La pregunta de si «seguirás siendo tú» no tiene respuesta porque no hay tal cosa.",
    "biografia": "hume"
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
    "biografia": "aristoteles"
   },
   {
    "quien": "Rousseau",
    "elige": "B",
    "porque": "El ser humano nace bueno y libre y la sociedad lo encadena; el niño del bosque no es un defecto de humanidad sino una muestra de lo que somos antes de que nos deformen.",
    "biografia": "rousseau"
   },
   {
    "quien": "Kant",
    "elige": "A",
    "porque": "El ser humano es la única criatura que debe ser educada; solo por la educación puede llegar a ser humano. No hay humanidad sin disciplina y cultura.",
    "biografia": "kant"
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
    "biografia": "epicuro"
   },
   {
    "quien": "Bentham y Mill (utilitarismo)",
    "elige": "A",
    "porque": "Bentham mediría cantidad de placer y diría que sí; Mill distingue placeres superiores e inferiores («más vale un Sócrates insatisfecho que un necio satisfecho») y dudaría.",
    "biografia": "mill"
   },
   {
    "quien": "Aristóteles (eudaimonía)",
    "elige": "B",
    "porque": "La felicidad no es una sensación sino una actividad del alma conforme a la virtud; quien no actúa no vive bien.",
    "biografia": "aristoteles"
   },
   {
    "quien": "Kant",
    "elige": "B",
    "porque": "Una vida programada renuncia a la autonomía; la dignidad está en darse uno mismo la ley, no en ser un receptor de estímulos.",
    "biografia": "kant"
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
    "biografia": "bentham"
   },
   {
    "quien": "Kant",
    "elige": "B",
    "porque": "Empujar al hombre es tratarlo solo como un medio, y eso está prohibido por el imperativo categórico. Desviar el tranvía no lo usa a él: su muerte es un efecto, no el instrumento.",
    "biografia": "kant"
   },
   {
    "quien": "Tomás de Aquino (doctrina del doble efecto)",
    "elige": "B",
    "porque": "Una acción con un efecto malo puede ser lícita si el mal no es el medio ni el fin, sino un efecto colateral proporcionado. La palanca cumple la regla; el empujón, no.",
    "biografia": "tomas"
   },
   {
    "quien": "Aristóteles",
    "elige": "B",
    "porque": "La persona virtuosa no decide con una fórmula sino con el carácter: hay acciones que un ser humano bueno no realiza, y empujar a un inocente es una de ellas, aunque el resultado sea mejor.",
    "biografia": "aristoteles"
   },
   {
    "quien": "Spinoza",
    "elige": "—",
    "porque": "Antes de elegir, tres preguntas: qué sé de verdad, quién ha construido la situación y desde qué afecto actúo. La razón elige el menor de dos males (Ética, IV, 65), pero sin conocer a las personas ni las circunstancias, «cinco contra uno» es un cálculo de la imaginación. Las dos salidas pueden hacerse por miedo o ambición, o por firmeza y generosidad: lo que hace libre la acción no es el resultado, sino entender por qué se actúa.",
    "biografia": "spinoza"
   }
  ],
  "debate": {
   "epoca": "Siglo XX",
   "texto": "«Obra de tal modo que trates a la humanidad, tanto en tu persona como en la de cualquier otro, siempre como un fin y nunca solamente como un medio.»",
   "fuente": "Kant, Fundamentación de la metafísica de las costumbres (1785). El dilema lo formuló Philippa Foot en 1967; la variante del puente la planteó Judith Jarvis Thomson en 1976, y en 1985 dio nombre al «problema del tranvía».",
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
    "biografia": "kant"
   },
   {
    "quien": "Mill (utilitarismo)",
    "elige": "A",
    "porque": "Si la verdad solo produce sufrimiento y no puede cambiar nada, la mentira es la acción correcta. Aunque Mill añade: la regla de veracidad es tan útil que las excepciones deben ser muy raras.",
    "biografia": "mill"
   },
   {
    "quien": "Aristóteles (ética de la virtud)",
    "elige": "B",
    "porque": "La persona prudente no mentiría, pero tampoco soltaría la verdad como una piedra: encontraría el modo justo, en el momento justo, de estar con el abuelo. La virtud no está en la regla sino en el tacto.",
    "biografia": "aristoteles"
   },
   {
    "quien": "Agustín de Hipona",
    "elige": "B",
    "porque": "Escribió dos tratados contra la mentira: ninguna mentira es lícita, ni la que salva una vida, porque quien miente pierde algo que vale más que lo que protege.",
    "biografia": "agustin"
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
    "biografia": "platon"
   },
   {
    "quien": "Hobbes",
    "elige": "A",
    "porque": "En estado de naturaleza cada uno tiene derecho a todo; las leyes obligan porque hay una espada que las respalda. «Los pactos sin la espada son solo palabras».",
    "biografia": "hobbes"
   },
   {
    "quien": "Kant",
    "elige": "B",
    "porque": "La moral no depende de las consecuencias ni de ser visto: una acción es buena si su máxima puede ser ley universal, y «robaré cuando nadie me vea» no puede serlo.",
    "biografia": "kant"
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
    "biografia": "rawls"
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
    "biografia": "aristoteles"
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
    "biografia": "platon"
   },
   {
    "quien": "Aristóteles",
    "elige": "B",
    "porque": "Muchos que individualmente no son sabios, reunidos pueden juzgar mejor que unos pocos, como un banquete al que cada uno aporta un plato. Además, quien lleva los zapatos sabe dónde aprietan mejor que el zapatero.",
    "biografia": "aristoteles"
   },
   {
    "quien": "Rousseau",
    "elige": "B",
    "porque": "La soberanía es del pueblo y no puede delegarse: la ley es justa porque la quiere la voluntad general, no porque la dicte un experto. Un pueblo que deja decidir a otros ya no es libre.",
    "biografia": "rousseau"
   },
   {
    "quien": "Mill",
    "elige": "A",
    "porque": "A medias: defendía el sufragio universal, pero proponía que los más instruidos tuvieran más de un voto. Temía la «tiranía de la mayoría» tanto como la de un rey.",
    "biografia": "mill"
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
    "biografia": "platon"
   },
   {
    "quien": "Kant (juicio estético)",
    "elige": "B",
    "porque": "El juicio de gusto es desinteresado: lo bello nos complace sin que importe la existencia, el origen ni la utilidad del objeto. Si el cuadro era bello el lunes, sigue siéndolo el martes.",
    "biografia": "kant"
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
 },
 {
  "subject": "fil",
  "grupo": "fil-humano",
  "id": "fil-fision",
  "emoji": "👥",
  "etiqueta": "Identidad y supervivencia",
  "titulo": "El escáner de Tokio",
  "situacion": "Año 2090. Para ir de Bilbao a Tokio ya nadie coge un avión: entras en una cabina, un escáner registra la posición de cada átomo de tu cuerpo, la cabina deshace el original y en Tokio una máquina te construye otra vez, idéntico, en pocos segundos. Lo has hecho veinte veces y siempre has salido de la cabina de llegada con tus recuerdos, tus manías y tus planes. Hoy algo falla: el escáner te registra, pero la cabina de Bilbao no te deshace. Sigues aquí sentado, con el corazón en la boca, cuando un técnico te cuenta que en Tokio ya ha salido alguien que dice ser tú y que acaba de llamar a tu madre. La empresa te pide perdón y te regala un billete para el próximo viaje. Tienes que decidir si lo aceptas.",
  "a": "Viajaré: si en el destino aparece alguien con mi memoria, mi carácter y mis proyectos, eso es todo lo que le puedo pedir a seguir vivo; el fallo de hoy solo demuestra que puedo continuar en dos sitios a la vez.",
  "b": "No viajaré: el fallo ha demostrado que lo que sale en Tokio es una copia; si el original puede quedarse mirando, en cada viaje anterior alguien murió en Bilbao y otro nació en Tokio.",
  "pregunta": "¿Qué hace que sigas siendo tú de un día para otro: tu cuerpo, tu memoria o algo más? Si existiera una copia perfecta de ti, ¿cuál de las dos serías tú, y debería importarte?",
  "enjuego": "Los criterios de la identidad personal (el cuerpo, la memoria y la continuidad psicológica) puestos a prueba por una copia, y la diferencia entre ser el mismo individuo (identidad numérica) y ser exactamente igual (identidad cualitativa).",
  "escuelas": [
   {
    "quien": "Locke (empirismo)",
    "elige": "A",
    "porque": "Eres la misma persona hasta donde llega tu conciencia: quien recuerda tus actos y los siente como suyos eres tú, esté hecho de los átomos que esté. El problema es que su criterio da el mismo resultado para el de Bilbao y para el de Tokio, y Locke nunca pensó en una persona repetida.",
    "biografia": "locke"
   },
   {
    "quien": "Parfit (siglo XX)",
    "elige": "A",
    "porque": "Imaginó una máquina así en Razones y personas y sacó una conclusión inquietante: puede que la pregunta «¿cuál de los dos soy yo?» no tenga respuesta, y no pasa nada, porque lo que importa no es la identidad, sino que continúen tu memoria, tu carácter y tus planes. Viajar en la cabina sería casi tan bueno como viajar en avión."
   },
   {
    "quien": "Thomas Reid",
    "elige": "B",
    "porque": "Una persona no se puede dividir ni repetir: o eres tú o no lo eres. Recordar tu vida no te convierte en ti, solo es una señal de que lo eres. El de Tokio tiene tus recuerdos igual que una fotocopia tiene el texto del original."
   },
   {
    "quien": "Descartes (racionalismo)",
    "elige": "B",
    "porque": "Tú eres una cosa que piensa, distinta del cuerpo. La máquina mide y reproduce materia: copia un cuerpo con tu aspecto y tu cerebro, pero nada garantiza que con él viaje la mente que eres.",
    "biografia": "descartes"
   }
  ],
  "debate": {
   "epoca": "Siglos XVII y XX",
   "texto": "«[Una persona es] un ser que piensa y entiende, dotado de razón y de reflexión, capaz de verse a sí mismo como él mismo, la misma cosa pensante, en tiempos y lugares diferentes.»",
   "fuente": "Locke, en el libro II (capítulo 27, § 9) de su Ensayo sobre el entendimiento humano, 2.ª edición (1694). El teletransportador que deja una copia lo planteó Derek Parfit en Razones y personas (1984), capítulo 10.",
   "unidad": "fil-t2"
  },
  "preguntas": [
   "Si los dos sois tú, ¿quién duerme esta noche en tu cama y quién va mañana al instituto? Y si el de Tokio firma un contrato, ¿te obliga a ti?",
   "Antes del fallo viajaste veinte veces sin preocuparte. ¿Ha cambiado algo de aquellos viajes o solo lo que sabes de ellos?",
   "Con los años, muchos de los átomos de tu cuerpo se sustituyen por otros. ¿En qué se diferencia eso de la cabina, aparte de la velocidad?"
  ],
  "ysi": "¿Y si la cabina de Bilbao funcionara bien, pero con un minuto de retraso? Durante ese minuto existirían los dos, y después solo el de Tokio. Si eso es viajar, un minuto no debería convertirlo en morir; y si es morir, ¿por qué no lo era cuando el retraso era de una milésima de segundo?",
  "dato": "La teletransportación existe, pero no de personas ni de objetos: lo que se envía es el estado cuántico de una partícula. En 2017 un equipo chino lo hizo desde el Tíbet hasta el satélite Micius, a distancias de hasta 1.400 km. Y hay un detalle curioso: las leyes de la física cuántica impiden copiar un estado desconocido (el teorema de no clonación, de 1982), así que en esa teletransportación el estado original siempre se destruye en el punto de salida."
 },
 {
  "subject": "fil",
  "grupo": "fil-conocer",
  "id": "fil-jersey",
  "emoji": "🖋️",
  "etiqueta": "Creencia y razón",
  "titulo": "La pluma del juez",
  "situacion": "En un mercadillo de antigüedades ves una pluma estilográfica preciosa: plumín de oro, cuerpo negro; escribe de maravilla y cuesta menos que un bolígrafo de marca. Llevas meses buscando una para tomar apuntes. El vendedor, que conoce bien lo que vende, te cuenta su historia: perteneció a un juez de una dictadura europea, que la usó durante años para firmar condenas a muerte. La han limpiado y restaurado, y fuera de este puesto nadie conoce ese detalle. Sabes que el metal y la tinta no guardan nada de quien los usó. Aun así, cuando la tienes en la mano, algo te frena. Tienes que decidir si la compras.",
  "a": "La compro: una pluma no tiene memoria ni culpa, y no quiero que decida por mí una sensación que yo mismo sé que no tiene fundamento.",
  "b": "No la compro: aunque no pueda demostrar nada, lo que siento al cogerla dice algo de cómo veo el mundo, y no todas mis decisiones tienen que pasar por un tribunal de argumentos.",
  "pregunta": "¿Debemos creer y actuar solo según lo que podemos justificar? ¿Qué hacemos con una sensación que sabemos infundada y que, sin embargo, no se va?",
  "enjuego": "La diferencia entre saber y creer, el paso del mito al logos dentro de cada uno y el pensamiento mágico que sigue funcionando en personas que se consideran racionales.",
  "escuelas": [
   {
    "quien": "Kant (Ilustración)",
    "elige": "A",
    "porque": "Ilustrarse es atreverse a usar tu propio entendimiento sin que nadie, ni siquiera un miedo heredado, te lleve de la mano. Si tu razón dice que la pluma es solo una pluma, obedecer a la sensación es renunciar a pensar por ti mismo.",
    "biografia": "kant"
   },
   {
    "quien": "William K. Clifford (siglo XIX)",
    "elige": "A",
    "porque": "En «La ética de la creencia» defendió que creer sin pruebas suficientes está siempre mal, porque cada creencia infundada nos acostumbra a ser crédulos. Actuar como si la pluma estuviera manchada es creer, con los hechos, algo que no se puede sostener."
   },
   {
    "quien": "Hume (empirismo)",
    "elige": "B",
    "porque": "La razón sola no nos mueve a actuar: deciden los sentimientos y la costumbre. Que algo te frene sin argumento no es una locura, es naturaleza humana; lo absurdo sería pensar que el metal ha cambiado.",
    "biografia": "hume"
   },
   {
    "quien": "Pascal (siglo XVII)",
    "elige": "B",
    "porque": "El corazón tiene sus razones, que la razón no conoce. Hay cosas que captamos por el sentimiento antes que por la demostración, y no por eso son menos nuestras."
   }
  ],
  "debate": {
   "epoca": "Siglos XVIII y XIX",
   "texto": "«Está mal, siempre, en todas partes y para cualquiera, creer algo a partir de pruebas insuficientes.»",
   "fuente": "William K. Clifford, «La ética de la creencia» (1877). La invitación a servirse del propio entendimiento es de Kant, Respuesta a la pregunta: ¿Qué es la Ilustración? (1784).",
   "unidad": "fil-t3"
  },
  "preguntas": [
   "Escribe en una frase por qué no la usarías. Después léela: ¿es un argumento o un sentimiento disfrazado de argumento?",
   "Si la pluma hubiera sido de una escritora a la que admiras, pagarías más por ella. ¿Es la misma creencia, pero al revés?",
   "¿Hay diferencia entre rechazar la pluma por miedo a que te «pegue» algo y rechazarla por respeto a las víctimas? ¿Cuál de las dos razones aguanta mejor un examen?"
  ],
  "ysi": "¿Y si el vendedor se hubiera equivocado y la pluma fuera de otro juez, uno que nunca condenó a nadie? Tendrías en la mano exactamente la misma pluma. Si tu sensación cambia, no venía de la pluma, sino de la historia que te han contado.",
  "dato": "El antropólogo James Frazer, en La rama dorada (1890-1915), llamó «magia contagiosa» a la creencia de que las cosas que han estado en contacto siguen unidas después de separarse. La idea sigue viva: en un estudio de 2011, George Newman, Gil Diesendruck y Paul Bloom comprobaron que la gente pagaría menos por una prenda de un famoso al que admira si le dicen que la han lavado y desinfectado antes de venderla, como si con la limpieza se hubiera ido algo de la persona."
 },
 {
  "subject": "fil",
  "grupo": "fil-conocer",
  "id": "fil-existir",
  "emoji": "🧵",
  "etiqueta": "Ser y existir",
  "titulo": "La costurera y el personaje",
  "situacion": "Mira la etiqueta de la camiseta que llevas puesta: «Made in Bangladesh». Alguien la cortó y la cosió, quizá una mujer de tu edad o de la de tu madre, en un taller de Daca, con las mismas manos con las que esa noche preparó la cena. Tocó algo que ahora te toca la piel, pero no sabes su nombre y nunca habías pensado en ella. Piensa ahora en el protagonista del videojuego al que más horas has dedicado: conoces su pasado, su voz y sus miedos, has decidido por él cientos de veces y hasta has soñado con él. Él no existe; ella, sí. Una amiga te pregunta cuál de los dos ocupa más sitio en tu vida, y si eso hace a uno de ellos más real que el otro.",
  "a": "La costurera: existir no depende de que yo la conozca ni de que piense en ella; es real aunque nadie la recuerde, y el personaje no lo es aunque lo jueguen millones de personas.",
  "b": "En cierto sentido, el personaje: está en mis recuerdos, en mis conversaciones y en lo que siento; lo que existe pero no deja ninguna huella en mi vida es, para mí, casi como si no existiera.",
  "pregunta": "¿Qué significa que algo sea real? ¿Es lo mismo existir que estar presente en la vida de alguien? ¿De qué manera «son» las cosas que solo existen en una historia?",
  "enjuego": "La distinción entre esencia y existencia (saber cómo es algo no garantiza que exista), los distintos modos de ser y la pregunta básica de la metafísica: qué hay de verdad, al margen de cuánto nos afecte.",
  "escuelas": [
   {
    "quien": "Aristóteles",
    "elige": "A",
    "porque": "Lo que existe en sentido pleno son las sustancias concretas, como esa mujer, que es por sí misma. El personaje solo es en otra cosa: en un programa, en una pantalla y en la cabeza de quienes juegan. También es, pero de una manera secundaria.",
    "biografia": "aristoteles"
   },
   {
    "quien": "Kant (Ilustración)",
    "elige": "A",
    "porque": "Puedes describir al personaje con todo detalle y no le habrás añadido existencia: existir no es una característica más de una cosa. Cien táleros (monedas de su época) pensados tienen las mismas propiedades que cien táleros reales; lo que les falta es estar en el mundo.",
    "biografia": "kant"
   },
   {
    "quien": "Meinong (siglo XX)",
    "elige": "B",
    "porque": "Con matices: hay objetos que no existen y que, sin embargo, tienen propiedades verdaderas; es verdad que tu personaje es valiente y que tiene una cicatriz. No existir no lo convierte en nada: tiene su propia manera de ser."
   },
   {
    "quien": "Nietzsche",
    "elige": "B",
    "porque": "Desconfía de quienes separan un «mundo verdadero» del mundo que vivimos; lo que cuenta es lo que actúa en una vida y la hace más intensa. Lo que el personaje te hace sentir y decidir forma parte de tu realidad.",
    "biografia": "nietzsche"
   }
  ],
  "debate": {
   "epoca": "Siglo IV a. C. y siglo XVIII",
   "texto": "«“Ser” no es, evidentemente, un predicado real, es decir, el concepto de algo que pueda añadirse al concepto de una cosa.»",
   "fuente": "Kant, Crítica de la razón pura (1781), A 598 / B 626, donde pone el ejemplo de los cien táleros. Que lo que es se dice de muchas maneras lo había sostenido Aristóteles en la Metafísica (IV, 2).",
   "unidad": "fil-metafisica"
  },
  "preguntas": [
   "¿Qué cambiaría hoy en tu vida si la costurera no existiera? ¿Y si desapareciera el personaje? Si la segunda pérdida te duele más, ¿demuestra algo sobre lo que existe o solo sobre lo que te importa?",
   "Se puede decir con verdad que tu personaje tiene una cicatriz en la ceja. ¿De qué es verdad esa frase, si no hay nadie con esa ceja?",
   "Los números, las reglas de un juego o las promesas tampoco se pueden tocar. ¿Existen como la costurera, como el personaje o de una tercera manera?"
  ],
  "ysi": "¿Y si en la etiqueta vinieran su nombre, su foto y una frase escrita por ella? En ella no habría cambiado nada: ya existía. Solo cambiaría el sitio que ocupa en tu cabeza. Si con eso cambia tu respuesta, quizá no hablabas de lo que existe, sino de lo que tienes delante.",
  "dato": "El 24 de abril de 2013 se derrumbó el Rana Plaza, un edificio de ocho plantas lleno de talleres de costura a las afueras de Daca, en Bangladés: murieron más de 1.100 personas que cosían ropa para marcas que se vendían en Europa. Hoy Bangladés sigue entre los mayores exportadores de ropa del mundo."
 },
 {
  "subject": "fil",
  "grupo": "fil-etica",
  "id": "fil-medicamento",
  "emoji": "🧪",
  "etiqueta": "Motivos y razones",
  "titulo": "El medicamento robado",
  "situacion": "Tu abuela tiene una enfermedad grave y hay un medicamento nuevo que podría salvarla. Lo ha descubierto un pequeño laboratorio de tu ciudad: fabricar cada dosis le cuesta doscientos euros y la vende a dos mil. La sanidad pública todavía no lo cubre. Entre toda la familia habéis reunido mil euros. Le pides al dueño que os lo deje a mitad de precio o que os deje pagar el resto más adelante, y se niega: lo descubrió él y quiere ganar dinero con ello. Esa noche sabes cómo entrar en el laboratorio sin que te vean.",
  "a": "Entrar y llevármelo: una vida vale más que el beneficio de un laboratorio, y esa razón valdría igual si la enferma fuera una desconocida.",
  "b": "No robarlo: si cada uno se salta la ley cuando cree tener un buen motivo, la ley no protege a nadie; hay que buscar otras salidas, aunque sean más lentas.",
  "pregunta": "¿Qué hace correcta una acción: sus consecuencias, el deber, el carácter de quien actúa o el cuidado de quienes dependen de nosotros? ¿Y qué diferencia hay entre un motivo («es mi abuela») y una razón que valga para cualquiera?",
  "enjuego": "La vida frente a la propiedad y la ley, la diferencia entre motivo y razón, y la universalidad de la ética: una razón moral tiene que servir también cuando el enfermo no es de los tuyos.",
  "escuelas": [
   {
    "quien": "Tomás de Aquino",
    "elige": "A",
    "porque": "En caso de necesidad extrema, todas las cosas son comunes: tomar lo ajeno para salvar una vida, la propia o la de otro, no es propiamente robar. La propiedad existe para servir a la vida, no al revés.",
    "biografia": "tomas"
   },
   {
    "quien": "Mill (utilitarismo)",
    "elige": "A",
    "porque": "Cuenta las consecuencias: una vida salvada pesa mucho más que el perjuicio a un laboratorio que seguirá ganando dinero. Aunque añadiría una advertencia: una costumbre general de robar cuando uno se cree con razón tendría malas consecuencias para todos.",
    "biografia": "mill"
   },
   {
    "quien": "Kant (ética del deber)",
    "elige": "B",
    "porque": "Prueba tu máxima: «robaré cuando crea que lo necesito»; convertida en ley universal, destruye la propiedad y la confianza. El deber de ayudar existe, pero no autoriza a violar el derecho de otro; Kant llegó a decir que en un caso de necesidad el acto puede quedar sin castigo, pero no por eso es justo.",
    "biografia": "kant"
   },
   {
    "quien": "Gilligan (ética del cuidado)",
    "elige": "B",
    "porque": "Como Amy, la niña de su estudio: robar puede romper las relaciones de las que depende la enferma (si te detienen, ¿quién la cuida?). Hay que seguir hablando con el farmacéutico y buscar ayuda; el problema no es de matemáticas, es de vínculos."
   }
  ],
  "debate": {
   "epoca": "Siglo XVIII y siglo XX",
   "texto": "«Obra solo según aquella máxima por la cual puedas querer al mismo tiempo que se convierta en ley universal.»",
   "fuente": "Kant, Fundamentación de la metafísica de las costumbres (1785). Lawrence Kohlberg usó un caso como este, el dilema de Heinz, desde su tesis doctoral (1958) para estudiar cómo razonamos; Carol Gilligan le respondió en La moral y la teoría (In a Different Voice, 1982).",
   "unidad": "fil-t5"
  },
  "preguntas": [
   "Escribe tu razón sin usar «porque es mi abuela». ¿Sigue valiendo si la enferma es una desconocida? ¿Y si es alguien que te cae mal?",
   "¿Hizo algo malo el dueño del laboratorio, o solo algo legal? ¿Puede algo ser legal e injusto a la vez?",
   "Kohlberg decía que importa más el porqué que el sí o el no. Mira tu razón: ¿es miedo al castigo, lo que pensarían los demás, la ley o un principio que valga para todos?"
  ],
  "ysi": "¿Y si esa fuera la única dosis y el laboratorio la tuviera reservada para otro enfermo que ya la había pagado? Ahora robar no le quita dinero a un empresario: le quita la vida a otra persona. Si cambias de respuesta, tu razón no era «la vida vale más que la propiedad». ¿Cuál era?",
  "dato": "El caso tiene versiones reales: hay medicamentos que cuesta poco fabricar y se venden muy caros porque la patente da a una empresa el derecho exclusivo a venderlos durante unos veinte años. Por eso las normas de la Organización Mundial del Comercio permiten a los países, en una emergencia de salud, autorizar copias sin permiso del dueño de la patente (las «licencias obligatorias»)."
 }
];
