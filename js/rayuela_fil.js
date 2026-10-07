"use strict";
/* ===== «Rayuela filosófica» (Filosofía 1.º de Bachillerato) — datos =====
   Mismo motor y mismo esquema que RAYUELA_HF (web/js/rayuela_hf.js; diseño en docs/13_diseno_narrativa_marco_HF.md),
   más dos campos: clave (dónde guarda el navegador los viajes) y txt.paraPau (rótulo de la reflexión final).
   Una sola red, «Las grandes preguntas», con las líneas del conocimiento, la realidad, el ser humano, la ética,
   la ciudad y el arte (temas fil-t1 … fil-t7, fil-presocraticos, fil-metafisica, fil-helenismo). Estaciones de
   pregunta 1-25 (seis dilemas: 9 habitación china, 12 barco de Teseo, 15 tranvía y puente, 16 máquina de experiencias,
   17 anillo de Giges, 21 velo de ignorancia; y 25, el dilema de Heinz), vidas 40-52 y contradicciones 90-96;
   finales A-L. Sin bucles. Validar con el validador adaptado (validar_fil.js).
   Coordenadas xy: fila = camino más largo desde la salida; columna = línea. */
const RAYUELA_FIL = {
 "clave": "aula-rayuela-fil",
 "txt": { "paraPau": "Para tu disertación (200-300 palabras)" },
 "inicio": "1",
 "inicios": ["1", "2", "3", "4", "5", "7", "14", "17", "23", "24"],
 "lineas": [
  { "id": "l-inicio", "nombre": "Salida", "color": "#9b4a4f" },
  { "id": "l-conocimiento", "nombre": "Línea del conocimiento", "color": "#2f6db5" },
  { "id": "l-realidad", "nombre": "Línea de la realidad", "color": "#e0701b" },
  { "id": "l-humano", "nombre": "Línea del ser humano", "color": "#2e9b5b" },
  { "id": "l-etica", "nombre": "Línea de la ética", "color": "#d99a00" },
  { "id": "l-ciudad", "nombre": "Línea de la ciudad", "color": "#5b6770" },
  { "id": "l-arte", "nombre": "Línea del arte", "color": "#7d4fb5" },
  { "id": "l-contradiccion", "nombre": "Contradicciones", "color": "#d23a2b" }
 ],
 "redes": [{ "n": 1, "nombre": "Red 1 · Las grandes preguntas", "abre": "2026-09-01" }],
 "tensiones": [
  { "id": "t-relativismo-universal", "grado": "contradiccion", "a": ["m-relativismo", "m-relativismo-cultural", "m-relativismo-moral"], "b": ["m-verdad-objetiva", "m-derechos-universales", "m-objetivismo", "m-derechos-minorias"], "titulo": "¿Todo es relativo… o hay algo que vale para todos?", "texto": "En una respuesta dices que la verdad o lo que está bien dependen de cada persona o de cada cultura; en otra, que hay verdades o derechos que valen para todos. Las dos cosas no pueden sostenerse a la vez sin más. Platón le objetó a Protágoras que, si todo es relativo, también lo es esa misma frase. Quizá la salida sea distinguir: que nuestras creencias dependan de la cultura no significa que la verdad dependa de ella." },
  { "id": "t-determinismo-responsabilidad", "grado": "contradiccion", "a": ["m-determinismo", "m-todo-programado"], "b": ["m-responsable", "m-deber", "m-libertarismo", "m-existencia"], "titulo": "Nadie puede elegir… pero cada uno responde", "texto": "En una respuesta dices que todo lo que hacemos está determinado, como un programa; en otra, que cada uno responde de sus actos, que hay deberes o que podrías haber elegido otra cosa. Pero no se puede culpar a nadie de lo que no podía evitar. Los compatibilistas, como Hobbes y Hume, buscan una salida: eres libre si actúas por tus propias razones, aunque tengan causas. ¿Te basta?" },
  { "id": "t-materia-mente", "grado": "contradiccion", "a": ["m-materia", "m-solo-materia"], "b": ["m-dualismo", "m-dualismo-firme"], "titulo": "¿Solo materia, o algo más?", "texto": "En una respuesta dices que todo es materia, también el pensamiento; en otra, que la mente es algo distinto del cuerpo. No pueden ser verdad las dos. Descartes defendía dos sustancias; Demócrito y Hobbes, una sola. Y quien elige la materia hereda una pregunta difícil: por qué se siente algo «desde dentro»." },
  { "id": "t-real-enchufe", "grado": "tension", "a": ["m-enchufarse"], "b": ["m-correspondencia", "m-verdad-objetiva", "m-garantia"], "titulo": "Quieres la verdad… pero te enchufarías", "texto": "En una respuesta dices que lo verdadero es lo que se ajusta a los hechos, aunque nadie lo crea, o que necesitas algo que te garantice que no te engañas; en otra, que te conectarías a una máquina que te haría vivir experiencias falsas. Si te importa tanto lo real, ¿por qué aceptarías una vida de ilusiones? Quizá no valoras la verdad igual cuando conoces que cuando buscas la felicidad." },
  { "id": "t-consecuencias-deber", "grado": "tension", "a": ["m-bienestar", "m-placer", "m-mayor-numero", "m-mayor-bienestar"], "b": ["m-deber", "m-no-usar", "m-no-mentir"], "titulo": "¿Las consecuencias o el deber?", "texto": "En una respuesta juzgas lo correcto por sus resultados: que la gente se sienta bien, la mayor felicidad para el mayor número. En otra, que hay cosas que no se hacen aunque salgan bien las cuentas, como mentir o usar a una persona como un simple medio. Es el gran debate entre el utilitarismo de Bentham y Mill y la ética del deber de Kant. ¿Qué pesa más para ti cuando chocan?" },
  { "id": "t-mayoria-derechos", "grado": "tension", "a": ["m-mayoria", "m-mayor-bienestar"], "b": ["m-derechos-minorias", "m-derechos-universales", "m-libertad-individual", "m-poder-limitado"], "titulo": "¿Decide la mayoría, o hay derechos intocables?", "texto": "En una respuesta dejas que decida la mayoría, o que se busque el mayor bienestar total; en otra, que cada persona tiene derechos y libertades que nadie puede pisar. Si la mayoría vota quitar un derecho a una minoría, ¿quién gana? Tocqueville y Mill lo llamaron la tiranía de la mayoría, y Mill defendió que solo se puede limitar la libertad de alguien para evitar que dañe a otros." },
  { "id": "t-obedecer-pensar", "grado": "tension", "a": ["m-obedecer", "m-orden-primero", "m-ley"], "b": ["m-desobedecer", "m-pensar-juzgar", "m-libertad-pensar", "m-cinico-libre"], "titulo": "¿Obedecer o pensar por tu cuenta?", "texto": "En una respuesta defiendes obedecer: a las leyes aunque se equivoquen, o a un poder fuerte que asegure el orden. En otra, que cada uno debe pensar y juzgar por sí mismo, e incluso desobedecer una ley injusta. Sócrates obedeció a las leyes de Atenas, pero nunca dejó de preguntar; Arendt vio en Eichmann lo que pasa cuando alguien solo obedece. ¿Dónde pones tú el límite?" },
  { "id": "t-trascendente-materia", "grado": "tension", "a": ["m-trascendente", "m-teismo"], "b": ["m-materia", "m-solo-materia", "m-determinismo"], "titulo": "¿Algo más allá, o solo materia?", "texto": "En una respuesta pones el sentido de la vida, o la explicación última del mundo, en Dios o en algo que va más allá de esta vida; en otra, que todo es materia y ocurre por causas necesarias. No es imposible juntar las dos cosas —hay creyentes que aceptan la ciencia entera—, pero te toca explicar dónde queda ese «más allá» en un mundo que solo es materia." },
  { "id": "t-gusto-criterio", "grado": "tension", "a": ["m-gusto", "m-institucional", "m-museo"], "b": ["m-belleza-objetiva", "m-oficio", "m-objetivismo", "m-verdad-objetiva"], "titulo": "Sobre gustos… ¿no hay nada escrito?", "texto": "En una respuesta dices que la belleza es cuestión de gusto, o que es arte lo que decidan los museos; en otra, que hay criterios que valen para todos: una belleza que está en las cosas, un oficio que se puede juzgar, verdades que no dependen de la opinión. Hume intentó unir las dos ideas: el gusto es subjetivo, pero unos juicios valen más que otros. Kant añadió que, cuando decimos que algo es bello, esperamos que los demás estén de acuerdo." },
  { "id": "t-duda-certeza", "grado": "tension", "a": ["m-suspender", "m-duda", "m-duda-esteril"], "b": ["m-razon-matematica", "m-verdad-objetiva", "m-correspondencia", "m-objetivismo"], "titulo": "¿Nada es seguro… salvo esto?", "texto": "En una respuesta prefieres no fiarte del todo de nada, o suspender el juicio; en otra afirmas que hay verdades firmes, como las de las matemáticas, o que lo verdadero lo es aunque nadie lo crea. Es la objeción de siempre contra el escepticismo: quien dice «no se puede saber nada» ya está afirmando algo. Quizá tu duda sea más bien un método, como la de Descartes, y no una renuncia." },
  { "id": "t-naturaleza-libertad", "grado": "tension", "a": ["m-naturaleza", "m-naturaleza-fija"], "b": ["m-me-hago", "m-existencia", "m-relato", "m-libertarismo"], "titulo": "¿Naturaleza o libertad?", "texto": "En una respuesta dices que lo que traemos de fábrica —genes, cerebro, naturaleza— marca lo que llegamos a ser; en otra, que nos hacemos a nosotros mismos con lo que elegimos. Sartre y Beauvoir negaban que tuviéramos una esencia previa; la biología recuerda que no partimos de cero. Quizá la respuesta más razonable no elija un extremo, pero ¿cuánto pesa cada parte?" },
  { "id": "t-razon-experiencia", "grado": "tension", "a": ["m-razon", "m-razon-matematica", "m-duda-metodica"], "b": ["m-experiencia", "m-empirismo", "m-observar"], "titulo": "¿La razón o la experiencia?", "texto": "En una respuesta te fías sobre todo de la razón, como en las matemáticas; en otra, de la experiencia y de lo que se observa. Es la gran discusión entre racionalistas, como Descartes, y empiristas, como Locke y Hume. Kant intentó unir los dos bandos: los pensamientos sin contenido están vacíos, y las intuiciones sin conceptos, ciegas." }
 ],
 "estaciones": {
  "1": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-inicio",
   "xy": [6.3, 14.4],
   "titulo": "El inicio",
   "texto": "Estás en el andén de salida. Hace unos 2.600 años, en Mileto, Tales dejó de conformarse con lo que contaban los mitos y buscó el principio del que procede todo. Antes de subir al tren, te toca a ti.",
   "pregunta": "Ante algo que te desconcierta —un rayo, una injusticia, la muerte de alguien—, ¿qué quieres saber antes?",
   "opciones": [
    { "t": "Cómo funciona y por qué ha pasado: quiero causas y razones.", "to": "2", "marca": "m-causas" },
    { "t": "Qué dice de nosotros: qué somos y qué sentido tiene vivir.", "to": "3", "marca": "m-quienes-somos" },
    { "t": "Qué debemos hacer ahora: lo urgente es actuar bien.", "to": "4", "marca": "m-que-hacer" }
   ],
   "temas": ["fil-t1", "fil-presocraticos"],
   "autores": [{ "id": "tales" }, { "id": "aristoteles" }]
  },
  "2": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [9.6, 13],
   "titulo": "Los sentidos y la razón",
   "texto": "Metes un lápiz en un vaso de agua y parece quebrado; lo sacas y está recto. Ves el sol del tamaño de una moneda, y la razón te dice que su diámetro es unas cien veces mayor que el de la Tierra.",
   "pregunta": "¿De qué te fías más para conocer?",
   "opciones": [
    { "t": "De la razón: los sentidos engañan, las matemáticas no.", "to": "41", "marca": "m-razon" },
    { "t": "De la experiencia: sin lo que veo y toco, la razón no tiene nada que pensar.", "to": "5", "marca": "m-experiencia" },
    { "t": "De ninguno del todo: los dos pueden fallar.", "to": "42", "marca": "m-duda" }
   ],
   "temas": ["fil-t3"],
   "autores": [{ "id": "descartes" }, { "id": "locke" }, { "id": "hume" }]
  },
  "3": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-humano",
   "xy": [5.2, 13],
   "titulo": "¿Qué nos hace humanos?",
   "texto": "Un potro se pone en pie a las pocas horas de nacer; un bebé humano tarda alrededor de un año en dar sus primeros pasos y muchos más en valerse por sí mismo. Nacemos «inacabados»: lo que nos falta lo pone la cultura.",
   "pregunta": "¿Qué pesa más en lo que llegas a ser?",
   "opciones": [
    { "t": "Lo que traigo de fábrica: genes, cerebro, temperamento.", "to": "7", "marca": "m-naturaleza" },
    { "t": "Lo que aprendo: la lengua, la familia, la sociedad en la que crezco.", "to": "14", "marca": "m-cultura" },
    { "t": "Lo que yo decida hacer con las dos cosas.", "to": "12", "marca": "m-me-hago" }
   ],
   "temas": ["fil-t2"],
   "autores": [{ "id": "aristoteles" }, { "id": "darwin" }, { "id": "ortega" }]
  },
  "4": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-etica",
   "xy": [3, 13],
   "titulo": "¿Qué hace buena una acción?",
   "texto": "Tu mejor amiga te enseña un dibujo del que está muy orgullosa y te pregunta qué te parece. A ti no te gusta nada.",
   "pregunta": "¿Qué le dices y, sobre todo, por qué?",
   "opciones": [
    { "t": "La verdad, con tacto: no se miente, aunque cueste.", "to": "17", "marca": "m-no-mentir" },
    { "t": "Que me gusta: lo que importa es que se sienta bien.", "to": "19", "marca": "m-bienestar" },
    { "t": "Depende de ella: de qué necesita ahora, de cómo está, de lo que nos une.", "to": "15", "marca": "m-cuidado" }
   ],
   "temas": ["fil-t5"],
   "autores": [{ "id": "socrates" }, { "id": "kant" }, { "id": "mill" }]
  },
  "5": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [9.6, 11.6],
   "titulo": "El hombre, medida de todas las cosas",
   "texto": "Protágoras, el sofista más famoso de Atenas, sostenía que «el hombre es la medida de todas las cosas»: el mismo viento es frío para quien tirita y agradable para quien viene de correr. ¿Vale eso también para la verdad?",
   "pregunta": "¿Hay verdades que valen para todos?",
   "opciones": [
    { "t": "No: cada uno, o cada cultura, tiene su verdad.", "to": "90", "marca": "m-relativismo" },
    { "t": "Sí: lo que es verdad lo es aunque nadie lo crea.", "to": "6", "marca": "m-verdad-objetiva" },
    { "t": "No lo sé, pero vale la pena examinarlo con otros, sin dar nada por sabido.", "to": "40", "marca": "m-examinar" }
   ],
   "temas": ["fil-t3", "fil-t1"],
   "autores": [{ "id": "protagoras" }, { "id": "platon" }]
  },
  "6": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [9.6, 5.8],
   "titulo": "¿Qué hace verdadera una afirmación?",
   "texto": "Un vídeo falso sobre una vacuna acumula millones de visitas en un fin de semana. Los médicos lo desmienten, pero mucha gente sigue creyéndolo: le encaja con lo que ya pensaba.",
   "pregunta": "¿Qué hace verdadera una afirmación?",
   "opciones": [
    { "t": "Que se ajuste a los hechos, aunque nadie la crea.", "to": "44", "marca": "m-correspondencia" },
    { "t": "Que la acepten todos los que la discutan con libertad y buenas razones.", "to": "18", "marca": "m-consenso" },
    { "t": "Que funcione: si una idea me sirve, para mí es verdadera.", "to": "43", "marca": "m-pragmatica" }
   ],
   "temas": ["fil-t3"],
   "autores": [{ "id": "aristoteles" }, { "id": "habermas" }, { "id": "james" }]
  },
  "7": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-realidad",
   "xy": [7.4, 13],
   "titulo": "¿De qué está hecho todo?",
   "texto": "Tales dijo que todo es agua; Anaxímenes, que aire; Demócrito, que átomos y vacío. Hoy la física habla de partículas y campos. Pero hay algo que no parece estar hecho de nada de eso: lo que sientes al oír tu canción favorita.",
   "pregunta": "¿Qué hay, en el fondo?",
   "opciones": [
    { "t": "Solo materia: también los pensamientos son procesos del cerebro.", "to": "9", "marca": "m-materia" },
    { "t": "Dos cosas distintas: la materia y la mente.", "to": "46", "marca": "m-dualismo" },
    { "t": "Lo que conozco directamente son experiencias; lo demás lo supongo.", "to": "8", "marca": "m-idealismo" }
   ],
   "temas": ["fil-metafisica", "fil-presocraticos"],
   "autores": [{ "id": "tales" }, { "id": "democrito" }, { "id": "descartes" }, { "id": "berkeley" }]
  },
  "8": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-realidad",
   "xy": [7.4, 11.5],
   "titulo": "¿Y si fuera una simulación?",
   "texto": "Platón imaginó unos prisioneros encadenados en una caverna que solo ven sombras y las toman por lo real. En 2003, el filósofo Nick Bostrom planteó algo parecido: si alguna civilización llegara a simular mentes conscientes, ¿cómo sabríamos que no somos una de ellas?",
   "pregunta": "Si te demostraran que vives en una simulación, ¿sería menos real tu vida?",
   "opciones": [
    { "t": "Sí: si todo puede ser un engaño, necesito algo que me garantice que no me engaño.", "to": "11", "marca": "m-garantia" },
    { "t": "No: lo que vivo, siento y elijo seguiría siendo mío.", "to": "13", "marca": "m-vivido" },
    { "t": "Me inquieta otra cosa: si todo está programado, ¿elijo yo algo?", "to": "10", "marca": "m-todo-programado" }
   ],
   "temas": ["fil-metafisica", "fil-t3"],
   "autores": [{ "id": "platon" }, { "id": "descartes" }]
  },
  "9": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-realidad",
   "xy": [7.4, 10],
   "titulo": "La habitación china",
   "texto": "John Searle propuso en 1980 este experimento mental. Estás encerrado en un cuarto con un manual que te dice qué símbolos chinos devolver según los que entran por una ranura. No sabes chino, pero tus respuestas son perfectas: desde fuera parece que lo entiendes. Hoy los chatbots conversan así de bien.",
   "pregunta": "¿Entiende chino la habitación? ¿Y un chatbot?",
   "opciones": [
    { "t": "No: manejar símbolos según reglas no es comprender lo que significan.", "to": "46", "marca": "m-no-comprende" },
    { "t": "En cierto modo sí: lo que entiende es el sistema entero, no la persona de dentro.", "to": "10", "marca": "m-funcionalismo" },
    { "t": "Da igual: si se comporta como si entendiera, no tengo por qué negarle la inteligencia.", "to": "16", "marca": "m-turing" }
   ],
   "temas": ["fil-metafisica"],
   "autores": [{ "id": "chalmers" }]
  },
  "10": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-realidad",
   "xy": [7.4, 7],
   "titulo": "¿Somos libres?",
   "texto": "Esta mañana has elegido qué ropa ponerte, y tienes la impresión de que podrías haber elegido otra. Pero tu cerebro sigue leyes físicas, y tus genes y tu educación también empujan. En 1814, Laplace imaginó una inteligencia que, conociendo todas las partículas del universo, podría calcular todo lo que vas a hacer.",
   "pregunta": "¿Podrías haber elegido otra cosa?",
   "opciones": [
    { "t": "No: todo lo que ocurre es efecto necesario de lo anterior, también mis decisiones.", "to": "92", "marca": "m-determinismo" },
    { "t": "Sí: al decidir, nada me obliga; podría haber hecho otra cosa.", "to": "13", "marca": "m-libertarismo" },
    { "t": "Mi elección tiene causas, pero es libre si sale de mis razones y nadie me obliga.", "to": "51", "marca": "m-compatibilismo" }
   ],
   "temas": ["fil-metafisica", "fil-t5"],
   "autores": [{ "id": "hobbes" }, { "id": "hume" }, { "id": "sartre" }]
  },
  "11": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-realidad",
   "xy": [7.4, 5.5],
   "titulo": "¿Existe Dios?",
   "texto": "Anselmo de Canterbury pensó que bastaba con entender la palabra «Dios» —aquello mayor que lo cual nada puede pensarse— para ver que tiene que existir. Tomás de Aquino prefirió partir del mundo: todo lo que se mueve es movido por otro, y la cadena no puede ser infinita. Y en contra, la pregunta más dura: si Dios es bueno y todopoderoso, ¿por qué sufren los inocentes?",
   "pregunta": "¿Qué te parece más razonable?",
   "opciones": [
    { "t": "Que exista un primer ser que explique por qué hay algo y no nada.", "to": "FE", "marca": "m-teismo" },
    { "t": "Que no exista: el sufrimiento de los inocentes lo hace muy difícil de creer.", "to": "48", "marca": "m-ateismo" },
    { "t": "Que no podemos saberlo: ningún argumento zanja la cuestión.", "to": "FC", "marca": "m-agnostico" }
   ],
   "temas": ["fil-metafisica"],
   "autores": [{ "id": "tomas" }, { "id": "hume" }]
  },
  "12": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-humano",
   "xy": [5.2, 10],
   "titulo": "El barco de Teseo",
   "texto": "Al barco de Teseo le van cambiando las tablas podridas, una a una, hasta que no queda ninguna de las originales. ¿Sigue siendo el mismo barco? Plutarco ya recogía la discusión. A ti te pasa algo parecido: buena parte de tus células se renuevan, tus gustos cambian y casi no recuerdas nada de cuando tenías tres años.",
   "pregunta": "¿Qué te hace ser la misma persona que eras de niño?",
   "opciones": [
    { "t": "La memoria: me reconozco en lo que recuerdo.", "to": "13", "marca": "m-memoria" },
    { "t": "El cuerpo: es el mismo organismo, aunque cambie.", "to": "7", "marca": "m-cuerpo" },
    { "t": "Nada fijo: no hay un yo permanente, solo una historia que voy contando y cambiando.", "to": "10", "marca": "m-relato" }
   ],
   "temas": ["fil-t2", "fil-metafisica"],
   "autores": [{ "id": "locke" }, { "id": "hume" }]
  },
  "13": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-humano",
   "xy": [5.2, 8.5],
   "titulo": "El sentido de la vida",
   "texto": "Camus comparó la vida humana con el castigo de Sísifo: empujar una roca hasta la cima de una montaña para verla caer, una y otra vez. Y aun así escribió que hay que imaginarse a Sísifo feliz.",
   "pregunta": "¿Tiene sentido la vida?",
   "opciones": [
    { "t": "Sí, y viene de más allá de esta vida: de Dios o de un destino trascendente.", "to": "11", "marca": "m-trascendente" },
    { "t": "No tiene un sentido dado: es absurda, y aun así merece la pena vivirla con rebeldía.", "to": "48", "marca": "m-absurdo" },
    { "t": "Se lo damos nosotros: en lo que hacemos, con los demás, desarrollando lo que podemos ser.", "to": "47", "marca": "m-inmanente" }
   ],
   "temas": ["fil-t2"],
   "autores": [{ "id": "camus" }, { "id": "sartre" }]
  },
  "14": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-humano",
   "xy": [5.2, 11.5],
   "titulo": "Culturas distintas",
   "texto": "En unas culturas se come con cubiertos; en otras, con palillos o con la mano derecha. Hasta aquí, nada que discutir. Pero en algunos lugares todavía se casa a niñas de doce años, y quienes lo defienden dicen que es su tradición.",
   "pregunta": "¿Podemos juzgar las costumbres de otra cultura?",
   "opciones": [
    { "t": "No: cada cultura solo puede valorarse con sus propios criterios.", "to": "18", "marca": "m-relativismo-cultural" },
    { "t": "Sí: hay unos mínimos, como la dignidad de cada persona, que valen en todas partes.", "to": "45", "marca": "m-derechos-universales" },
    { "t": "Sí, pero dialogando: conocerla antes de juzgarla, y dejar que también juzgue la mía.", "to": "6", "marca": "m-interculturalidad" }
   ],
   "temas": ["fil-t2", "fil-t5"],
   "autores": [{ "id": "tylor" }]
  },
  "15": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-etica",
   "xy": [3, 7.8],
   "titulo": "El tranvía y el puente",
   "texto": "Un tranvía sin frenos va a arrollar a cinco personas. Primera versión: puedes accionar una palanca y desviarlo a otra vía, donde hay una sola. Segunda versión: estás en un puente, y la única forma de frenarlo es empujar a la vía a una persona corpulenta que está a tu lado. En los dos casos muere una persona en lugar de cinco. Philippa Foot planteó el problema en 1967, y Judith Jarvis Thomson añadió el puente.",
   "pregunta": "¿Qué haces en cada caso?",
   "opciones": [
    { "t": "Palanca y empujón: si el resultado es el mismo, la decisión también.", "to": "16", "marca": "m-mayor-numero" },
    { "t": "Palanca sí, empujón no: no puedo usar a una persona como un simple medio.", "to": "51", "marca": "m-no-usar" },
    { "t": "Ninguna de las dos: no me corresponde decidir quién muere.", "to": "25", "marca": "m-no-intervenir" }
   ],
   "temas": ["fil-t5"],
   "autores": [{ "id": "bentham" }, { "id": "kant" }]
  },
  "16": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-etica",
   "xy": [3, 6.6],
   "titulo": "La máquina de experiencias",
   "texto": "Robert Nozick propuso en 1974 este experimento mental: unos neurocientíficos pueden conectarte a una máquina que te hará vivir las experiencias que quieras —éxito, amor, aventuras— y te parecerán completamente reales. Mientras tanto, flotarás en un tanque. No tienes que preocuparte por los demás: también ellos pueden conectarse.",
   "pregunta": "¿Te conectarías para siempre?",
   "opciones": [
    { "t": "Sí: si lo que importa es sentirse bien, la máquina me da justo eso.", "to": "93", "marca": "m-enchufarse" },
    { "t": "No: quiero hacer las cosas de verdad, no solo tener la sensación de hacerlas.", "to": "47", "marca": "m-vida-real" },
    { "t": "No: quiero estar con personas reales, aunque a veces me hagan sufrir.", "to": "25", "marca": "m-vinculos-reales" }
   ],
   "temas": ["fil-t5", "fil-helenismo"],
   "autores": [{ "id": "epicuro" }, { "id": "bentham" }, { "id": "mill" }]
  },
  "17": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-etica",
   "xy": [3, 11.7],
   "titulo": "El anillo de Giges",
   "texto": "En la República de Platón, Glaucón cuenta la historia de Giges, un pastor que encuentra un anillo que lo vuelve invisible. Con él seduce a la reina, mata al rey y se queda con el trono. Y desafía a Sócrates: cualquiera, justo o injusto, haría lo mismo si nadie pudiera verlo.",
   "pregunta": "Si tuvieras el anillo, ¿seguirías siendo justo?",
   "opciones": [
    { "t": "Seguramente no: casi todos somos justos por miedo a que nos pillen.", "to": "18", "marca": "m-miedo-castigo" },
    { "t": "Sí: lo correcto lo es aunque nadie me vea.", "to": "15", "marca": "m-deber" },
    { "t": "Sí, porque usarlo me convertiría en alguien que no quiero ser.", "to": "19", "marca": "m-caracter" }
   ],
   "temas": ["fil-t5"],
   "autores": [{ "id": "platon" }, { "id": "socrates" }]
  },
  "18": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-etica",
   "xy": [3, 9.1],
   "titulo": "¿Hay verdades morales?",
   "texto": "«Siete por ocho son cincuenta y seis», y da igual lo que opine cada uno. ¿Pasa lo mismo con «la esclavitud es injusta»? Durante siglos muchas sociedades la aceptaron; hoy casi todas la condenan.",
   "pregunta": "¿Era injusta la esclavitud también cuando casi todos la aceptaban?",
   "opciones": [
    { "t": "Sí: hay verdades morales que valen aunque una sociedad no las vea.", "to": "15", "marca": "m-objetivismo" },
    { "t": "Es injusta para nosotros; para ellos no lo era: depende de cada sociedad.", "to": "95", "marca": "m-relativismo-moral" },
    { "t": "Lo que hay son sentimientos: «injusta» quiere decir que nos indigna.", "to": "25", "marca": "m-emotivismo" }
   ],
   "temas": ["fil-t5"],
   "autores": [{ "id": "platon" }, { "id": "hume" }]
  },
  "19": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-etica",
   "xy": [3, 10.4],
   "titulo": "¿Cómo se alcanza la felicidad?",
   "texto": "Tras las conquistas de Alejandro Magno, las ciudades griegas pierden su independencia y la filosofía se vuelve hacia una pregunta más personal: ¿cómo ser feliz en un mundo que no controlas? Epicúreos y estoicos —y, antes que ellos, los cínicos— dieron respuestas muy distintas.",
   "pregunta": "¿Dónde está para ti la felicidad?",
   "opciones": [
    { "t": "En el placer, bien elegido: buena comida, amigos y ningún miedo.", "to": "16", "marca": "m-placer" },
    { "t": "En dominar mis reacciones y aceptar lo que no depende de mí.", "to": "10", "marca": "m-estoico" },
    { "t": "En necesitar muy poco y reírme de las convenciones.", "to": "45", "marca": "m-autarquia" }
   ],
   "temas": ["fil-helenismo", "fil-t5"],
   "autores": [{ "id": "epicuro" }, { "id": "zenon" }, { "id": "seneca" }, { "id": "diogenes" }]
  },
  "20": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-ciudad",
   "xy": [0.8, 10],
   "titulo": "Sin Estado",
   "texto": "Imagina que mañana desaparecen el Estado, la policía y los jueces. Hobbes, Locke y Rousseau hicieron este experimento mental para explicar por qué obedecemos a un gobierno.",
   "pregunta": "¿Cómo sería la vida sin Estado?",
   "opciones": [
    { "t": "Una guerra de todos contra todos: la vida sería solitaria, pobre, desagradable, brutal y corta.", "to": "52", "marca": "m-guerra-todos" },
    { "t": "Tendríamos derechos —vida, libertad, propiedad—, pero nadie imparcial que los protegiera.", "to": "22", "marca": "m-derechos-naturales" },
    { "t": "Seríamos más libres e iguales: es la sociedad la que nos corrompe con la desigualdad.", "to": "21", "marca": "m-bondad-natural" }
   ],
   "temas": ["fil-t6"],
   "autores": [{ "id": "hobbes" }, { "id": "locke" }, { "id": "rousseau" }]
  },
  "21": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-ciudad",
   "xy": [0.8, 5.5],
   "titulo": "El velo de ignorancia",
   "texto": "John Rawls propuso en 1971 este experimento mental: vas a decidir las reglas de una sociedad, pero tras un «velo de ignorancia». No sabes si serás rico o pobre, hombre o mujer, si tendrás salud, qué talentos o qué creencias. Solo sabes que vivirás en ella.",
   "pregunta": "¿Qué reglas eliges?",
   "opciones": [
    { "t": "Libertades iguales para todos, y desigualdades solo si mejoran la vida de quienes están peor.", "to": "FK", "marca": "m-equidad" },
    { "t": "Que cada uno conserve lo que gane honradamente, aunque las diferencias sean grandes.", "to": "FJ", "marca": "m-titularidad" },
    { "t": "Las que den más bienestar total, aunque a algunos les toque perder.", "to": "FG", "marca": "m-mayor-bienestar" }
   ],
   "temas": ["fil-t6"],
   "autores": [{ "id": "rawls" }]
  },
  "22": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-ciudad",
   "xy": [0.8, 7],
   "titulo": "La mayoría y la minoría",
   "texto": "En un pueblo, el 70 % de los vecinos vota cerrar el único local donde se reúne una minoría que no les cae bien. Todo es legal: ha habido votación. Tocqueville y Mill lo llamaron la tiranía de la mayoría.",
   "pregunta": "¿Basta con votar para que una decisión sea justa?",
   "opciones": [
    { "t": "Sí: en democracia decide la mayoría.", "to": "21", "marca": "m-mayoria" },
    { "t": "No: hay derechos que ninguna mayoría puede tocar.", "to": "FJ", "marca": "m-derechos-minorias" },
    { "t": "No basta con votar: antes hay que discutirlo en público, con razones y escuchando a todos.", "to": "21", "marca": "m-deliberar" }
   ],
   "temas": ["fil-t6"],
   "autores": [{ "id": "mill" }, { "id": "habermas" }]
  },
  "23": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-arte",
   "xy": [11.8, 13],
   "titulo": "¿Qué es el arte?",
   "texto": "Una catedral, una sinfonía, un cómic, un tatuaje y un plátano pegado a la pared con cinta adhesiva que se vendió por más de cien mil dólares. ¿Qué tienen en común para que los llamemos arte?",
   "pregunta": "¿Qué convierte algo en una obra de arte?",
   "opciones": [
    { "t": "Que represente con oficio la realidad o algo bello.", "to": "24", "marca": "m-mimesis" },
    { "t": "Que exprese lo que siente su autor y nos lo haga sentir.", "to": "13", "marca": "m-expresion" },
    { "t": "Que el mundo del arte —museos, críticos, galerías— lo trate como arte.", "to": "50", "marca": "m-institucional" }
   ],
   "temas": ["fil-t7"],
   "autores": [{ "id": "aristoteles" }, { "id": "danto" }, { "id": "dickie" }]
  },
  "24": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-arte",
   "xy": [11.8, 11.5],
   "titulo": "¿Dónde está la belleza?",
   "texto": "Los griegos pensaban que la belleza está en las cosas: en la proporción, la armonía y la medida, y el escultor Policleto escribió un canon con las proporciones ideales del cuerpo. Hoy solemos decir lo contrario: «sobre gustos no hay nada escrito».",
   "pregunta": "Cuando dices que algo es bello, ¿qué estás diciendo?",
   "opciones": [
    { "t": "Algo del objeto: tiene una armonía que cualquiera con buenos ojos puede ver.", "to": "6", "marca": "m-belleza-objetiva" },
    { "t": "Algo mío: que me gusta. Y sobre gustos no hay nada escrito.", "to": "96", "marca": "m-gusto" },
    { "t": "Que me gusta, pero espero que a los demás también les guste: no es un simple capricho.", "to": "50", "marca": "m-gusto-universal" }
   ],
   "temas": ["fil-t7"],
   "autores": [{ "id": "policleto" }, { "id": "hume" }, { "id": "kant" }]
  },
  "25": {
   "tipo": "pregunta",
   "red": 1,
   "linea": "l-etica",
   "xy": [3, 5.3],
   "titulo": "El dilema de Heinz",
   "texto": "La mujer de Heinz morirá si no toma un medicamento que un farmacéutico vende a diez veces lo que le cuesta. Heinz solo consigue reunir la mitad del dinero, y el farmacéutico se niega a rebajarlo o a dejarle pagar más tarde. Lawrence Kohlberg usó este dilema para estudiar cómo razonamos en moral.",
   "pregunta": "¿Debería Heinz robar el medicamento?",
   "opciones": [
    { "t": "Sí: una vida vale más que el beneficio de un comerciante.", "to": "21", "marca": "m-vida-primero" },
    { "t": "No: si cada uno roba cuando lo necesita, la ley deja de protegernos a todos.", "to": "49", "marca": "m-ley" },
    { "t": "Antes que robar o rendirse: hablar con el farmacéutico, pedir ayuda, no dejarla sola.", "to": "FI", "marca": "m-cuidar" }
   ],
   "temas": ["fil-t5"],
   "autores": []
  },
  "40": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [9.6, 7.2],
   "titulo": "Sócrates y el oráculo",
   "texto": "Atenas, siglo V a. C. Querefonte, amigo de Sócrates, pregunta al oráculo de Delfos si hay alguien más sabio que él, y la sacerdotisa responde que nadie. Desconcertado, Sócrates interroga a políticos, poetas y artesanos que presumen de saber. Descubre que no saben lo que creen saber, y que los poetas dicen cosas hermosas sin saber explicarlas. Él, al menos, no cree saber lo que no sabe.",
   "pregunta": "¿Qué sacas de su investigación?",
   "opciones": [
    { "t": "Que reconocer la propia ignorancia es el principio del saber: hay que seguir preguntando.", "to": "6", "marca": "m-socratica" },
    { "t": "Que el arte va por otro camino que el saber: los poetas crean sin saber explicar.", "to": "23", "marca": "m-arte-otro-saber" },
    { "t": "Que preguntar así a la gente en público es buscarse enemigos: mejor callar.", "to": "49", "marca": "m-callar" }
   ],
   "temas": ["fil-t1", "fil-t3"],
   "autores": [{ "id": "socrates" }, { "id": "platon" }]
  },
  "41": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [9.6, 10.1],
   "titulo": "Descartes y la estufa",
   "texto": "Alemania, invierno de 1619. Descartes, con veintitrés años, pasa un día entero encerrado en una habitación caldeada por una estufa, pensando a solas. Allí decide derribar todo lo que le habían enseñado y reconstruir el saber desde cero, aceptando solo lo que fuera tan claro y evidente que no se pudiera dudar.",
   "pregunta": "¿Qué te parece su plan?",
   "opciones": [
    { "t": "Bueno: hay que dudar de todo una vez en la vida para encontrar algo seguro.", "to": "8", "marca": "m-duda-metodica" },
    { "t": "Peligroso: si lo derribas todo, quizá no consigas levantar nada.", "to": "42", "marca": "m-duda-esteril" },
    { "t": "Innecesario: lo seguro lo da la experiencia, no una habitación cerrada.", "to": "43", "marca": "m-experiencia" }
   ],
   "temas": ["fil-t3", "fil-metafisica"],
   "autores": [{ "id": "descartes" }]
  },
  "42": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [9.6, 8.7],
   "titulo": "Pirrón y la tormenta",
   "texto": "Un barco navega en medio de una tormenta y los pasajeros gritan aterrados. Pirrón de Elis, el primer gran escéptico griego, les señala un cerdo que sigue comiendo tan tranquilo: así, sin perder la calma, debería estar el sabio. Lo cuenta Diógenes Laercio. Para Pirrón, como no podemos saber cómo son las cosas, lo mejor es suspender el juicio, y de ahí nace la serenidad.",
   "pregunta": "¿Te convence?",
   "opciones": [
    { "t": "Sí: si no afirmo nada, nada me perturba.", "to": "19", "marca": "m-suspender" },
    { "t": "A medias: dudar está bien, pero no puedo vivir sin creer nada.", "to": "43", "marca": "m-duda-moderada" },
    { "t": "No: el cerdo está tranquilo porque no piensa. Prefiero pensar, aunque me inquiete.", "to": "40", "marca": "m-pensar-inquieta" }
   ],
   "temas": ["fil-t3", "fil-helenismo"],
   "autores": [{ "id": "pirron" }]
  },
  "43": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [9.6, 4.3],
   "titulo": "Hume y el backgammon",
   "texto": "1739. En su Tratado de la naturaleza humana, Hume confiesa que, después de dudar de las causas, del mundo y hasta de su propio yo, se siente perdido. Entonces cena, juega una partida de backgammon y charla con sus amigos, y al cabo de tres o cuatro horas sus especulaciones le parecen frías y ridículas.",
   "pregunta": "¿Qué te parece?",
   "opciones": [
    { "t": "Sensato: la naturaleza nos hace creer y vivir, aunque la razón no pueda demostrarlo todo.", "to": "10", "marca": "m-naturalismo" },
    { "t": "Coherente: todo lo que sabemos viene de la experiencia, y por eso nada es del todo seguro.", "to": "44", "marca": "m-empirismo" },
    { "t": "Me quedo con su duda sobre el yo: ¿qué soy, si no hay nada fijo en mí?", "to": "12", "marca": "m-yo-haz" }
   ],
   "temas": ["fil-t3", "fil-t2"],
   "autores": [{ "id": "hume" }]
  },
  "44": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-conocimiento",
   "xy": [9.6, 2.8],
   "titulo": "Hipatia de Alejandría",
   "texto": "Alejandría, hacia el año 400. Hipatia, matemática y astrónoma, dirige una escuela de filosofía a la que acuden alumnos paganos y cristianos, y las autoridades de la ciudad la consultan. En 415, en plena lucha por el poder en la ciudad, una turba de cristianos la asesina. Siglos después se convirtió en símbolo de la libertad de pensamiento y de las mujeres en la ciencia.",
   "pregunta": "¿Qué te enseña su historia?",
   "opciones": [
    { "t": "Que las matemáticas dan verdades que ningún fanatismo puede borrar.", "to": "FA", "marca": "m-razon-matematica" },
    { "t": "Que hay que contrastar lo que se cree con lo que se observa, como hacían los astrónomos.", "to": "FB", "marca": "m-observar" },
    { "t": "Que el saber no basta: hay que protegerlo con leyes y libertades.", "to": "51", "marca": "m-libertad-pensar" }
   ],
   "temas": ["fil-t3", "fil-t1"],
   "autores": [{ "id": "hipatia" }]
  },
  "45": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-ciudad",
   "xy": [0.8, 13],
   "titulo": "Diógenes y Alejandro",
   "texto": "Corinto, hacia el 336 a. C. Diógenes el Cínico vive sin casa ni posesiones y se llama a sí mismo «ciudadano del mundo». Alejandro Magno, el hombre más poderoso de su tiempo, se planta ante él y le ofrece lo que quiera. «Apártate, que me tapas el sol», le contesta.",
   "pregunta": "¿Qué piensas de Diógenes?",
   "opciones": [
    { "t": "Es libre de verdad: cuanto menos necesitas, menos pueden mandarte.", "to": "13", "marca": "m-cinico-libre" },
    { "t": "Tiene algo de razón, pero sin los demás no se puede vivir bien.", "to": "49", "marca": "m-con-otros" },
    { "t": "Es pura pose: también él vive de lo que producen los demás.", "to": "52", "marca": "m-pose" }
   ],
   "temas": ["fil-helenismo", "fil-t6"],
   "autores": [{ "id": "diogenes" }]
  },
  "46": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-realidad",
   "xy": [7.4, 8.5],
   "titulo": "Isabel de Bohemia escribe a Descartes",
   "texto": "La Haya, 1643. Isabel de Bohemia, una princesa exiliada de veinticuatro años, pregunta a Descartes en una carta cómo puede el alma, que no ocupa lugar, mover el cuerpo. Descartes le responde, pero ella no queda convencida. Su objeción sigue siendo la gran dificultad del dualismo.",
   "pregunta": "¿Qué concluyes?",
   "opciones": [
    { "t": "Que mente y cuerpo son distintos, aunque no sepamos cómo se unen.", "to": "13", "marca": "m-dualismo-firme" },
    { "t": "Que, si el alma no puede mover nada, solo queda la materia.", "to": "91", "marca": "m-solo-materia" },
    { "t": "Que la mente es lo que hace el cuerpo vivo, no una cosa aparte.", "to": "10", "marca": "m-alma-forma" }
   ],
   "temas": ["fil-metafisica", "fil-t2"],
   "autores": [{ "id": "descartes" }]
  },
  "47": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-etica",
   "xy": [3, 4],
   "titulo": "La crisis de Mill",
   "texto": "Londres, 1826. John Stuart Mill tiene veinte años y lo han educado desde niño para trabajar por «la mayor felicidad para el mayor número». Un día se pregunta: si se cumplieran ahora todas las reformas que deseas, ¿serías feliz? La respuesta es no, y se hunde en una depresión. Empieza a salir de ella cuando descubre que todavía puede emocionarse, y le ayuda mucho la poesía de Wordsworth.",
   "pregunta": "¿Qué aprende Mill?",
   "opciones": [
    { "t": "Que la felicidad sigue siendo el criterio, pero hay placeres más altos que otros.", "to": "FG", "marca": "m-placeres-superiores" },
    { "t": "Que sumar felicidad no basta: hay que proteger la libertad de cada uno.", "to": "22", "marca": "m-libertad-individual" },
    { "t": "Que la vida buena no se calcula: se cultiva, con sentimientos, amistades y buenos hábitos.", "to": "FF", "marca": "m-cultivar" }
   ],
   "temas": ["fil-t5"],
   "autores": [{ "id": "mill" }, { "id": "bentham" }]
  },
  "48": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-humano",
   "xy": [5.2, 7],
   "titulo": "Beauvoir: «No se nace mujer»",
   "texto": "París, 1949. Simone de Beauvoir publica El segundo sexo, donde escribe: «No se nace mujer: se llega a serlo». Recibe insultos y cartas furiosas, y en 1956 el Vaticano incluye el libro en su Índice de libros prohibidos. Para Beauvoir, nadie nace con un destino escrito: llegamos a ser lo que somos con lo que hacemos y con lo que la sociedad hace con nosotros.",
   "pregunta": "¿Qué te parece su idea?",
   "opciones": [
    { "t": "Que acierta: somos lo que hacemos con nuestra libertad, y nada nos sirve de excusa.", "to": "FL", "marca": "m-existencia" },
    { "t": "Que acierta en algo más: mi libertad depende también de la de los demás, y hay que cambiar leyes y costumbres.", "to": "21", "marca": "m-libertad-otros" },
    { "t": "Que exagera: hay una naturaleza que marca lo que somos.", "to": "92", "marca": "m-naturaleza-fija" }
   ],
   "temas": ["fil-t2", "fil-t6"],
   "autores": [{ "id": "beauvoir" }, { "id": "sartre" }]
  },
  "49": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-ciudad",
   "xy": [0.8, 11.5],
   "titulo": "Sócrates en la cárcel",
   "texto": "Atenas, 399 a. C. Sócrates ha sido condenado a muerte, acusado de corromper a los jóvenes y de no creer en los dioses de la ciudad. Su amigo Critón ha preparado la fuga, pero Sócrates se niega: huir sería romper el acuerdo con las leyes que lo han protegido toda su vida.",
   "pregunta": "¿Qué harías en su lugar?",
   "opciones": [
    { "t": "Me quedaría: hay que respetar las leyes, también cuando se equivocan.", "to": "20", "marca": "m-obedecer" },
    { "t": "Huiría: una ley injusta no obliga.", "to": "51", "marca": "m-desobedecer" },
    { "t": "Huiría sin dudarlo: ninguna ciudad vale más que mi vida.", "to": "52", "marca": "m-salvar-vida" }
   ],
   "temas": ["fil-t6", "fil-t1"],
   "autores": [{ "id": "socrates" }, { "id": "platon" }]
  },
  "50": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-arte",
   "xy": [11.8, 10],
   "titulo": "Duchamp y la Fuente",
   "texto": "Nueva York, 1917. Marcel Duchamp compra un urinario de porcelana, lo firma «R. Mutt 1917» y lo presenta, con el título de Fuente, a una exposición que prometía aceptar la obra de cualquiera que pagara la cuota. Los organizadores no lo exponen. Hoy se considera una de las obras más influyentes del siglo XX.",
   "pregunta": "¿Es arte?",
   "opciones": [
    { "t": "Sí: la obra es la idea, y nos obliga a preguntarnos qué es el arte.", "to": "8", "marca": "m-arte-idea" },
    { "t": "Sí, porque los museos y los críticos lo aceptan como arte.", "to": "96", "marca": "m-museo" },
    { "t": "No: el arte exige oficio y algo que contemplar, no solo una ocurrencia.", "to": "96", "marca": "m-oficio" }
   ],
   "temas": ["fil-t7"],
   "autores": [{ "id": "duchamp" }, { "id": "danto" }]
  },
  "51": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-etica",
   "xy": [3, 2.7],
   "titulo": "Arendt en el juicio de Eichmann",
   "texto": "Jerusalén, 1961. Hannah Arendt asiste como periodista al juicio de Adolf Eichmann, que organizó el transporte de millones de judíos a los campos de exterminio. Esperaba encontrar a un monstruo y ve a un funcionario corriente que repite frases hechas y dice que solo cumplía órdenes. Habla de la «banalidad del mal»: el mal enorme que puede hacer alguien que no se detiene a pensar.",
   "pregunta": "¿Qué te dice el caso?",
   "opciones": [
    { "t": "Que cumplir órdenes no excusa: cada uno responde de lo que hace.", "to": "FH", "marca": "m-responsable" },
    { "t": "Que lo que falló fue pensar por uno mismo: hay que juzgar, no solo obedecer.", "to": "22", "marca": "m-pensar-juzgar" },
    { "t": "Que cualquiera puede hacer el mal si el sistema lo empuja: hay que vigilar el sistema.", "to": "20", "marca": "m-sistema" }
   ],
   "temas": ["fil-t5", "fil-t6"],
   "autores": [{ "id": "arendt" }]
  },
  "52": {
   "tipo": "vida",
   "red": 1,
   "linea": "l-ciudad",
   "xy": [0.8, 8.5],
   "titulo": "Hobbes y el miedo",
   "texto": "Malmesbury, Inglaterra, 1588. Corre el rumor de que la Armada Invencible española está a punto de invadir el país, y la madre de Thomas Hobbes da a luz antes de tiempo. Muchos años después, Hobbes escribirá en verso que su madre tuvo gemelos: él y el miedo. En el Leviatán (1651) defenderá que, sin un poder que nos atemorice a todos, no hay paz posible.",
   "pregunta": "¿Qué te parece su solución?",
   "opciones": [
    { "t": "Acertada: mejor un poder fuerte, aunque no tenga límites, que el caos.", "to": "94", "marca": "m-orden-primero" },
    { "t": "Entiendo el miedo, pero un poder sin límites también da miedo: hay que limitarlo.", "to": "FJ", "marca": "m-poder-limitado" },
    { "t": "El poder tiene que ser del pueblo entero, no de un soberano.", "to": "22", "marca": "m-soberania-popular" }
   ],
   "temas": ["fil-t6"],
   "autores": [{ "id": "hobbes" }]
  },
  "90": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [10.7, 9.1],
   "titulo": "Contradicción: todo es relativo",
   "texto": "Dices que no hay verdades que valgan para todos, o que todo depende del gusto de cada uno. Pero esa frase, ¿es verdad para todos o solo para ti? Si es verdad para todos, ya hay al menos una verdad universal; si solo lo es para ti, quien piense lo contrario también tiene razón. Platón usó este argumento contra Protágoras en el Teeteto.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Corrijo: alguna verdad tiene que valer para todos.", "to": "6" },
    { "t": "Ni todo es seguro ni nada lo es: examino cada caso con pruebas.", "to": "FC" },
    { "t": "Lo mantengo, al menos en moral: lo bueno depende de cada cultura.", "to": "18" }
   ],
   "choque": ["m-relativismo", "m-verdad-objetiva", "m-gusto", "m-museo", "m-institucional"],
   "temas": ["fil-t3"],
   "autores": [{ "id": "protagoras" }, { "id": "platon" }]
  },
  "91": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [8.5, 6.1],
   "titulo": "Contradicción: materia o mente",
   "texto": "Has dicho que hay algo más que materia —una mente, un alma— y también que todo es materia. Las dos cosas no pueden ser verdad a la vez. Y quien elige la materia tiene que explicar por qué se siente algo «desde dentro»: es lo que David Chalmers llamó el problema difícil de la conciencia.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Me quedo con la materia: algún día la ciencia explicará la conciencia.", "to": "FD" },
    { "t": "Me quedo con la mente: en nosotros hay algo que no es físico.", "to": "FE" },
    { "t": "Todavía no decido: sigo pensando por otro lado.", "to": "10" }
   ],
   "choque": ["m-materia", "m-solo-materia", "m-dualismo", "m-dualismo-firme", "m-no-comprende", "m-idealismo", "m-cuerpo"],
   "temas": ["fil-metafisica", "fil-t2"],
   "autores": [{ "id": "chalmers" }, { "id": "descartes" }, { "id": "democrito" }]
  },
  "92": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [6.3, 4],
   "titulo": "Contradicción: determinismo y culpa",
   "texto": "Si todo lo que haces es efecto necesario de lo anterior —de tus genes, de tu cerebro, de tu naturaleza—, nadie podría haber obrado de otro modo. Pero entonces, ¿con qué derecho culpamos, castigamos o felicitamos a alguien? Toda la moral da por supuesto que podemos elegir.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Mantengo el determinismo: la libertad es una ilusión.", "to": "FD" },
    { "t": "Redefino la libertad: soy libre si actúo por mis razones y sin coacción, aunque tenga causas.", "to": "51" },
    { "t": "Corrijo: al decidir, el futuro no está escrito.", "to": "FL" }
   ],
   "choque": ["m-determinismo", "m-todo-programado", "m-naturaleza-fija", "m-naturaleza", "m-me-hago", "m-relato", "m-deber", "m-no-mentir", "m-libertarismo", "m-responsable", "m-existencia"],
   "temas": ["fil-metafisica", "fil-t5"],
   "autores": [{ "id": "hobbes" }, { "id": "hume" }, { "id": "kant" }]
  },
  "93": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [4.1, 6.1],
   "titulo": "Contradicción: la felicidad enchufada",
   "texto": "Si lo único que importa es sentirse bien, la máquina de experiencias es la mejor vida posible. Pero casi nadie quiere conectarse para siempre, y quizá tú tampoco del todo: ¿y la verdad, los amigos de carne y hueso, hacer las cosas por ti mismo? Nozick concluía que nos importa algo más que lo que sentimos: lo que hacemos y lo que somos de verdad.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Corrijo: no me conecto; quiero vivir de verdad, no solo sentirlo.", "to": "47" },
    { "t": "Me conecto: un placer que no se distingue del real vale lo mismo.", "to": "FG" },
    { "t": "No lo sé: tendré que pensar qué hace valiosa una vida.", "to": "13" }
   ],
   "choque": ["m-enchufarse", "m-placer", "m-bienestar", "m-turing", "m-verdad-objetiva", "m-correspondencia", "m-garantia", "m-cuidado"],
   "temas": ["fil-t5", "fil-helenismo"],
   "autores": [{ "id": "bentham" }, { "id": "epicuro" }, { "id": "mill" }]
  },
  "94": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [1.9, 2.3],
   "titulo": "Contradicción: orden o libertad",
   "texto": "Defiendes un poder fuerte y sin límites que garantice el orden. Locke lo objetó contra el poder absoluto: si el soberano puede hacer lo que quiera, ¿quién nos protege de él? Sería como protegerse de las comadrejas y los zorros para dejarse devorar por los leones. Y quizá has defendido por el camino derechos o libertades que ese soberano podría pisar.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Corrijo: el poder debe estar limitado y respetar los derechos.", "to": "FJ" },
    { "t": "Que mande el pueblo entero, no un soberano.", "to": "22" },
    { "t": "Lo mantengo: primero la seguridad. Pero lo pongo a prueba.", "to": "21" }
   ],
   "choque": ["m-orden-primero", "m-guerra-todos", "m-miedo-castigo", "m-salvar-vida", "m-pose", "m-derechos-naturales", "m-derechos-universales", "m-libertad-individual", "m-desobedecer", "m-cinico-libre"],
   "temas": ["fil-t6"],
   "autores": [{ "id": "hobbes" }, { "id": "locke" }]
  },
  "95": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [4.1, 7.8],
   "titulo": "Contradicción: cada cultura, su verdad",
   "texto": "Si cada sociedad decide lo que está bien, nadie podría criticar la esclavitud antigua ni la persecución de disidentes en una dictadura actual: solo serían costumbres «distintas». Y quienes lucharon contra la esclavitud o por el voto de las mujeres se habrían equivocado, porque iban contra la mayoría de su tiempo. Además, decir «hay que respetar todas las culturas» ya es defender un valor universal.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Corrijo: hay mínimos, como la dignidad de cada persona, que valen en todas partes.", "to": "FH" },
    { "t": "Distingo: respetar otras culturas no es aceptar cualquier injusticia; lo discutiría con razones.", "to": "51" },
    { "t": "Lo mantengo: sin valores comunes, solo queda la fuerza de cada uno.", "to": "52" }
   ],
   "choque": ["m-relativismo-cultural", "m-relativismo-moral", "m-relativismo", "m-derechos-universales", "m-objetivismo", "m-verdad-objetiva", "m-interculturalidad"],
   "temas": ["fil-t5", "fil-t2"],
   "autores": [{ "id": "platon" }]
  },
  "96": {
   "tipo": "contradiccion",
   "red": 1,
   "linea": "l-contradiccion",
   "xy": [12.9, 9.6],
   "titulo": "Contradicción: ¿todo vale en arte?",
   "texto": "Si la belleza es solo cuestión de gusto, o si es arte lo que decidan los museos, nadie podría tener mal gusto y no tendría sentido discutir si una película es mejor que otra. Pero si el arte exige oficio y belleza, se queda fuera buena parte del arte del siglo XX. Hume buscó una salida: el gusto es subjetivo, pero el de un crítico con experiencia y sin prejuicios vale más.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Acepto la salida de Hume: el gusto se educa, y unos juicios valen más que otros.", "to": "18" },
    { "t": "Lo mantengo: sobre gustos no hay nada escrito.", "to": "90" },
    { "t": "Me interesa más lo que una obra me hace pensar que si es bella.", "to": "13" }
   ],
   "choque": ["m-gusto", "m-institucional", "m-museo", "m-oficio", "m-belleza-objetiva", "m-gusto-universal", "m-mimesis"],
   "temas": ["fil-t7"],
   "autores": [{ "id": "hume" }, { "id": "kant" }, { "id": "duchamp" }]
  }
 },
 "terminales": {
  "A": {
   "xy": [0.8, 0.9],
   "titulo": "Racionalismo",
   "texto": "Confías en la razón por encima de los sentidos: las matemáticas y lo que se piensa con claridad dan certezas que la experiencia, siempre cambiante, no puede dar. Es la línea que va de Platón a Descartes, que buscó una verdad de la que no se pudiera dudar y la encontró en el «pienso, luego existo».",
   "abierto": "Si la razón trabaja sin la experiencia, ¿cómo sabe que lo que piensa corresponde al mundo real?",
   "reflexion": "¿Podemos conocer algo con total seguridad?",
   "autores": [{ "id": "platon" }, { "id": "descartes" }, { "id": "hipatia" }],
   "temas": ["fil-t3", "fil-metafisica"]
  },
  "B": {
   "xy": [1.9, 0.9],
   "titulo": "Empirismo",
   "texto": "Para ti, todo lo que sabemos empieza en la experiencia: al nacer, la mente es como una hoja en blanco que se va llenando con lo que vemos, oímos y tocamos. Por eso la ciencia observa y comprueba, y por eso también sus conclusiones son probables, nunca absolutas. Es la línea de Locke y de Hume.",
   "abierto": "Si todo viene de la experiencia, ¿de dónde sale la certeza de las matemáticas, que no se comprueban con los ojos?",
   "reflexion": "¿Es la experiencia la única fuente del conocimiento?",
   "autores": [{ "id": "locke" }, { "id": "hume" }],
   "temas": ["fil-t3"]
  },
  "C": {
   "xy": [3, 0.9],
   "titulo": "Escepticismo moderado",
   "texto": "No crees tenerlo todo claro, pero tampoco renuncias a buscar: dudas con método, pides pruebas y estás dispuesto a corregirte. Ni el dogmático que lo da todo por seguro ni el escéptico que lo niega todo. Es la actitud de Sócrates, que sabía que no sabía; de Hume, que dudaba sin dejar de vivir; y de Popper, para quien la ciencia avanza buscando sus propios errores.",
   "abierto": "Si nada es del todo seguro, ¿cuándo tenemos razones suficientes para actuar?",
   "reflexion": "¿Es la duda el comienzo o el final del conocimiento?",
   "autores": [{ "id": "socrates" }, { "id": "hume" }, { "id": "popper" }],
   "temas": ["fil-t3", "fil-t1"]
  },
  "D": {
   "xy": [4.1, 0.9],
   "titulo": "Materialismo",
   "texto": "Para ti todo lo que existe es materia o depende de ella: también los pensamientos, los recuerdos y los sentimientos son actividad del cerebro. Es la línea que va de Demócrito, con sus átomos y su vacío, a Hobbes y a buena parte de la ciencia actual.",
   "abierto": "Si todo es materia, ¿por qué se siente algo «desde dentro»? Es el problema difícil de la conciencia, y sigue abierto.",
   "reflexion": "¿Somos solo nuestro cerebro?",
   "autores": [{ "id": "democrito" }, { "id": "hobbes" }],
   "temas": ["fil-metafisica", "fil-t2"]
  },
  "E": {
   "xy": [5.2, 0.9],
   "titulo": "Dualismo",
   "texto": "Crees que la realidad no se agota en la materia: en nosotros hay una mente o un alma distinta del cuerpo y, más allá del mundo físico, quizá un fundamento que lo explica todo. Es la línea de Platón, para quien el alma es inmortal, y de Descartes, que distinguió la cosa que piensa de la cosa extensa y buscó en Dios la garantía de sus certezas.",
   "abierto": "Si la mente no ocupa lugar, ¿cómo puede mover el cuerpo? Es la objeción que Isabel de Bohemia le hizo a Descartes en 1643.",
   "reflexion": "¿Es la mente algo distinto del cuerpo?",
   "autores": [{ "id": "platon" }, { "id": "descartes" }],
   "temas": ["fil-t2", "fil-metafisica"]
  },
  "F": {
   "xy": [6.3, 0.9],
   "titulo": "Ética de la virtud",
   "texto": "Para ti, la vida buena no se calcula ni se reduce a cumplir normas: se cultiva. Uno se hace justo practicando la justicia y valiente actuando con valor, hasta que el bien se vuelve hábito. La felicidad (eudaimonía) es una vida lograda en su conjunto, y se vive con otros. Es la ética de Aristóteles.",
   "abierto": "¿Qué haría una persona virtuosa ante un dilema en el que todas las salidas hacen daño?",
   "reflexion": "¿Se aprende a ser buena persona?",
   "autores": [{ "id": "aristoteles" }, { "id": "socrates" }],
   "temas": ["fil-t5", "fil-helenismo"]
  },
  "G": {
   "xy": [7.4, 0.9],
   "titulo": "Utilitarismo",
   "texto": "Juzgas las acciones por sus consecuencias: lo correcto es lo que produce más felicidad para el mayor número, contando a cada persona como una y a nadie como más de una. Bentham quiso medir el placer y el dolor; Mill añadió que unos placeres valen más que otros.",
   "abierto": "¿Se puede sacrificar a una persona si así se salva a cinco?",
   "reflexion": "¿Deben juzgarse las acciones solo por sus consecuencias?",
   "autores": [{ "id": "bentham" }, { "id": "mill" }],
   "temas": ["fil-t5"]
  },
  "H": {
   "xy": [8.5, 0.9],
   "titulo": "Ética del deber",
   "texto": "Para ti, lo que hace buena una acción no son sus resultados, sino hacerla por deber: según una regla que pudieras querer para todos, y tratando a cada persona siempre como un fin y nunca solo como un medio. Es la ética de Kant: la ley moral no la dictan el miedo ni la costumbre, sino tu propia razón.",
   "abierto": "¿Y si cumplir una regla universal hace daño en un caso concreto, como no mentir a quien busca a alguien para hacerle daño?",
   "reflexion": "¿Debemos cumplir nuestro deber aunque las consecuencias sean malas?",
   "autores": [{ "id": "kant" }],
   "temas": ["fil-t5", "fil-t2"]
  },
  "I": { "xy": [9.6, 0.9], "titulo": "Ética del cuidado", "texto": "Para ti, la moral empieza en las relaciones: todos somos vulnerables y dependemos de otros, y lo primero es atender a lo que necesita quien tienes delante. Carol Gilligan defendió esta otra voz moral frente a quienes medían la madurez solo con la justicia; Nel Noddings y Joan Tronto la convirtieron en una teoría y la llevaron a la política.", "abierto": "¿Cómo se cuida a los lejanos, a quienes nunca veremos, sin favorecer solo a los cercanos?", "reflexion": "¿Es el cuidado de los demás tan importante como la justicia?", "autores": [], "temas": ["fil-t5"] },
  "J": {
   "xy": [10.7, 0.9],
   "titulo": "Liberalismo",
   "texto": "Crees que cada persona tiene derechos —vida, libertad, propiedad— que ningún gobierno ni ninguna mayoría puede pisar, y que el poder debe estar limitado para protegerlos. Es la línea de Locke y, en el siglo XIX, de Mill, que defendió que solo se puede limitar la libertad de alguien para evitar que dañe a otros.",
   "abierto": "¿Qué pasa con quienes no tienen medios para disfrutar de esas libertades?",
   "reflexion": "¿Cuáles deben ser los límites del poder del Estado?",
   "autores": [{ "id": "locke" }, { "id": "mill" }],
   "temas": ["fil-t6"]
  },
  "K": {
   "xy": [11.8, 0.9],
   "titulo": "Justicia como equidad",
   "texto": "Para ti, una sociedad justa es la que elegirías sin saber qué lugar te tocaría en ella: libertades iguales para todos, y desigualdades solo si mejoran la vida de quienes están peor. Nadie merece haber nacido con más talento o en una familia más rica. Es la propuesta de John Rawls.",
   "abierto": "¿Es justo quitar a alguien parte de lo que ganó honradamente para ayudar a otros? Es la objeción de Robert Nozick.",
   "reflexion": "¿Qué hace justa a una sociedad?",
   "autores": [{ "id": "rawls" }],
   "temas": ["fil-t6"]
  },
  "L": {
   "xy": [12.9, 0.9],
   "titulo": "Existencialismo",
   "texto": "Para ti nadie nace con una esencia ni con un destino escrito: primero existimos y después nos hacemos con lo que elegimos, y de eso somos responsables. Es la línea de Sartre, de Simone de Beauvoir y, a su manera, de Camus, que pedía vivir con rebeldía aunque la vida no tenga un sentido dado.",
   "abierto": "Si somos tan libres, ¿cuánto pesan el cuerpo, la familia o la clase social en lo que llegamos a ser?",
   "reflexion": "¿Somos lo que hacemos?",
   "autores": [{ "id": "sartre" }, { "id": "beauvoir" }, { "id": "camus" }],
   "temas": ["fil-t2"]
  }
 }
};
