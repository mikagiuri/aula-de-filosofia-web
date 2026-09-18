"use strict";
/* ===== Rúbricas de examen (identificación de contenidos) =====
   Rúbricas que puntúan comprobando si el alumnado identifica contenidos
   concretos. Cada ítem vale unos puntos; la nota es la suma de los ítems
   identificados. Fuente: rúbricas del departamento (CSV), traducidas. */

const RUBRICAS = {
  "san-agustin": {
    subject: "hf",
    title: "San Agustín",
    tema: "Historia de la Filosofía · Rúbrica de examen",
    intro: "Rúbrica que puntúa identificando contenidos concretos de San Agustín. Cada ítem vale unos puntos; se suman los ítems que el alumnado identifica correctamente.",
    sections: [
      { title: "Interioridad y el camino del conocimiento", max: "0,6", items: [
        { code: "BA.1.1", text: "La importancia de buscar la verdad en el alma", pts: "0,2" },
        { code: "BA.1.2", text: "La introspección como punto de partida del conocimiento", pts: "0,2" },
        { code: "BA.1.3", text: "El ser humano no puede alcanzar por sí solo la verdad completa", pts: "0,2" },
      ]},
      { title: "La teoría de la iluminación", max: "0,5", items: [
        { code: "BA.2.1", text: "Dios enciende la verdad en la mente", pts: "0,2" },
        { code: "BA.2.2", text: "Comparar con la anamnesis (reminiscencia) de Platón", pts: "0,15" },
        { code: "BA.2.3", text: "Las ideas están en la mente de Dios", pts: "0,15" },
      ]},
      { title: "Razón y fe", max: "0,4", items: [
        { code: "BA.3.1", text: "Explicar que la razón y la fe no son contradictorias", pts: "0,1" },
        { code: "BA.3.2", text: "El principio «creo para entender, entiendo para creer»", pts: "0,2" },
        { code: "BA.3.3", text: "Ejemplos de complementariedad entre razón y fe", pts: "0,1" },
      ]},
      { title: "Sobre la vida feliz", max: "0,6", items: [
        { code: "BA.4.1", text: "Feliz es quien tiene a Dios", pts: "0,2" },
        { code: "BA.4.2", text: "Vincular la felicidad con bienes inmutables y eternos", pts: "0,1" },
        { code: "BA.4.3", text: "Explicar que todo ser humano busca la felicidad", pts: "0,15" },
        { code: "BA.4.4", text: "Distinguir la felicidad falsa de la verdadera", pts: "0,15" },
      ]},
      { title: "El mal, la libertad y la gracia", max: "0,4", items: [
        { code: "BA.5.1", text: "Explicar que el mal es privación del bien", pts: "0,15" },
        { code: "BA.5.2", text: "El ser humano es libre, pero pecador y débil", pts: "0,15" },
        { code: "BA.5.3", text: "Explicar la necesidad de la gracia para sanar la voluntad", pts: "0,1" },
      ]},
    ],
  },

  "descartes": {
    subject: "hf",
    title: "Descartes",
    tema: "Historia de la Filosofía · Rúbrica de examen",
    intro: "Rúbrica que puntúa identificando contenidos concretos de Descartes. Cada ítem vale unos puntos; se suman los ítems que el alumnado identifica correctamente.",
    sections: [
      { title: "Duda y método", max: "0,75", items: [
        { code: "BD.1.1", text: "Superar la escolástica y lograr un conocimiento cierto", pts: "0,20" },
        { code: "BD.1.2", text: "El método cartesiano y la función de la duda metódica", pts: "0,20" },
        { code: "BD.1.3", text: "Las reglas del método: 1 evidencia, 2 análisis, 3 síntesis, 4 enumeración", pts: "0,20" },
        { code: "BD.1.4", text: "Entender la duda como método y no como escepticismo", pts: "0,15" },
      ]},
      { title: "El cogito", max: "0,65", items: [
        { code: "BD.2.1", text: "Expresar correctamente el «cogito ergo sum»", pts: "0,15" },
        { code: "BD.2.2", text: "Explicar que la primera verdad es indudable", pts: "0,15" },
        { code: "BD.2.3", text: "El sujeto activo, interpretador", pts: "0,15" },
        { code: "BD.2.4", text: "Entender que el cogito solo prueba que el pensamiento existe", pts: "0,20" },
      ]},
      { title: "Sustancias y dualismo ontológico", max: "0,60", items: [
        { code: "BD.3.1", text: "Distinguir la res cogitans y la res extensa", pts: "0,10" },
        { code: "BD.3.3", text: "Entender que el dualismo está implícito en el cogito", pts: "0,20" },
        { code: "BD.3.4", text: "Los problemas del dualismo (relación cuerpo-alma)", pts: "0,15" },
        { code: "BD.3.5", text: "Identificar el problema del solipsismo", pts: "0,15" },
      ]},
      { title: "Dios", max: "0,5", items: [
        { code: "BD.4.1", text: "La suposición racional de la existencia de Dios", pts: "0,15" },
        { code: "BD.4.2", text: "Entender a Dios como garantía epistemológica", pts: "0,20" },
        { code: "BD.4.3", text: "Argumentos a favor de la existencia de Dios", pts: "0,15" },
      ]},
    ],
  },

  "kant": {
    subject: "hf",
    title: "Kant",
    tema: "Historia de la Filosofía · Rúbrica de examen",
    intro: "Rúbrica que puntúa identificando contenidos concretos de Kant (teoría del conocimiento y ética). Cada ítem vale unos puntos; se suman los ítems que el alumnado identifica correctamente.",
    sections: [
      { title: "Teoría del conocimiento: el criticismo", max: "2,5", items: [
        { code: "C2.1", text: "Kant quiere superar el conflicto entre racionalismo y empirismo", pts: "0,1" },
        { code: "C2.2", text: "La filosofía crítica analiza los límites y condiciones del conocimiento", pts: "0,2" },
        { code: "C2.3", text: "El conocimiento comienza con la experiencia, pero no procede totalmente de ella", pts: "0,2" },
        { code: "C2.4", text: "La revolución copernicana convierte al sujeto en fundamento del conocimiento", pts: "0,2" },
        { code: "C2.5", text: "El sujeto tiene un papel activo en el conocimiento (idealismo): construimos la realidad", pts: "0,2" },
        { code: "C2.6", text: "El espacio y el tiempo son formas de la sensibilidad", pts: "0,1" },
        { code: "C2.7", text: "Las categorías son estructuras del entendimiento", pts: "0,1" },
        { code: "C2.8", text: "El sujeto trascendental organiza los datos de la experiencia", pts: "0,15" },
        { code: "C2.9", text: "Se distingue entre fenómeno y noúmeno", pts: "0,1" },
        { code: "C2.10", text: "El fenómeno es la realidad tal como aparece a la conciencia: se puede conocer", pts: "0,1" },
        { code: "C2.11", text: "El noúmeno es la realidad en sí: no se puede conocer", pts: "0,1" },
        { code: "C2.12", text: "La universalidad del conocimiento científico la garantiza el sujeto trascendental", pts: "0,15" },
        { code: "C2.13", text: "La metafísica tradicional no puede ser ciencia: no tiene base empírica", pts: "0,15" },
        { code: "C2.14", text: "Dios, el alma y el mundo son ideas de la razón (ilusiones, ideales)", pts: "0,1" },
        { code: "C2.15", text: "La razón busca algo incondicionado: quiere crear una síntesis total", pts: "0,1" },
        { code: "C2.16", text: "Se distinguen la verdad científica y la verdad filosófica", pts: "0,1" },
        { code: "C2.17", text: "Esa distinción hace la verdad filosófica irrelevante para la ciencia", pts: "0,1" },
        { code: "C2.18", text: "Kant quiere proteger la religión de la crítica de la ciencia", pts: "0,1" },
        { code: "C2.19", text: "Las ideas religiosas tienen sentido en el uso práctico de la razón (ámbito ético)", pts: "0,15" },
      ]},
      { title: "Ética formal / deontológica", max: "2,5", items: [
        { code: "C3.1.1", text: "Explicar la diferencia entre conocimiento y ética (ser vs. deber ser)", pts: "0,1" },
        { code: "C3.1.2", text: "Explicar que el sujeto establece la ley moral desde la razón (no desde la experiencia)", pts: "0,2" },
        { code: "C3.1.3", text: "Explicar la causalidad del mundo fenoménico (determinismo) y distinguir la libertad nouménica", pts: "0,15" },
        { code: "C3.1.4", text: "Conciencia moral y responsabilidad", pts: "0,2" },
        { code: "C3.2.1.1", text: "Distinguir el imperativo hipotético y el categórico", pts: "0,2" },
        { code: "C3.2.1.2", text: "Explicar la crítica a las éticas materiales (basadas en la experiencia y las consecuencias)", pts: "0,15" },
        { code: "C3.2.1.3", text: "Analizar los límites de la ética basada en la felicidad (no puede ser universal)", pts: "0,2" },
        { code: "C3.2.2.1", text: "Definir el imperativo categórico (la ley moral)", pts: "0,15" },
        { code: "C3.2.2.2", text: "Explicar las formulaciones principales del imperativo categórico", pts: "0,15" },
        { code: "C3.2.2.3", text: "Entender el principio de universalización", pts: "0,1" },
        { code: "C3.2.2.4", text: "Explicar el concepto de dignidad de la persona", pts: "0,1" },
        { code: "C3.2.2.5", text: "Explicar el principio de tratar a la persona como fin", pts: "0,2" },
        { code: "C3.3.1", text: "Explicar el principio de la ética deontológica (el deber por encima del fin)", pts: "0,2" },
        { code: "C3.3.2", text: "Situar el valor moral de las acciones en la intención (buena voluntad)", pts: "0,15" },
        { code: "C3.4.1", text: "Identificar los ideales de la razón (alma, mundo, Dios)", pts: "0,1" },
        { code: "C3.4.2", text: "Explicar la función reguladora de esos ideales (conocimiento vs. orientación práctica)", pts: "0,1" },
        { code: "C3.4.3", text: "Explicar el sentido del postulado de la inmortalidad del alma", pts: "0,1" },
        { code: "C3.4.4", text: "Explicar la función ética de la idea de un creador justo (compatibilidad entre bien y felicidad)", pts: "0,1" },
      ]},
    ],
  },

  "nietzsche": {
    subject: "hf",
    title: "Nietzsche",
    tema: "Historia de la Filosofía · Rúbrica de examen",
    intro: "Rúbrica que puntúa identificando contenidos concretos de Nietzsche. Cada ítem vale unos puntos; se suman los ítems que el alumnado identifica correctamente.",
    sections: [
      { title: "Nietzsche", max: "2,5", items: [
        { code: "CN.2.0.1", text: "Schopenhauer: influencia y crítica", pts: "0,2" },
        { code: "CN.2.0.2", text: "Contra el progreso de la historia", pts: "0,15" },
        { code: "CN.2.0.3", text: "Contra los ideales revolucionarios e ilustrados", pts: "0,15" },
        { code: "CN.2.0.4", text: "Filosofía trágica: contra el pesimismo y el optimismo", pts: "0,15" },
        { code: "CN.2.0.5", text: "Irracionalismo, naturalismo, vitalismo", pts: "0,2" },
        { code: "CN.2.0.6", text: "Crítica de la idea tradicional de verdad (metáfora, interpretación)", pts: "0,1" },
        { code: "CN.2.0.7", text: "Crítica de los seguidores y de la mediocridad", pts: "0,15" },
        { code: "CN.2.1", text: "Analizar la influencia de los instintos y de la voluntad de poder en el pensamiento", pts: "0,1" },
        { code: "CN.2.1.1", text: "Los valores dominantes protegen a los débiles y castigan a los fuertes", pts: "0,15" },
        { code: "CN.2.1.2", text: "Lo apolíneo y la racionalidad niegan la vida y la evolución", pts: "0,15" },
        { code: "CN.2.1.3", text: "El platonismo y el cristianismo desprecian nuestro mundo", pts: "0,2" },
        { code: "CN.2.1.4", text: "La «muerte de Dios»: ya no se cree que los valores tengan un fundamento absoluto", pts: "0,2" },
        { code: "CN.2.1.5", text: "Metáfora para dar valor eterno a esta vida: el «eterno retorno»", pts: "0,15" },
        { code: "CN.2.2.1", text: "Consecuencia 1: el superhombre encontrará valores que fortalezcan la vida", pts: "0,2" },
        { code: "CN.2.2.2", text: "Consecuencia 2: la voluntad de poder supone superarse a uno mismo y a los demás (riesgo, inmoralidad)", pts: "0,2" },
      ]},
    ],
  },
};
