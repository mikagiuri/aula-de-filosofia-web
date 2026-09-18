"use strict";
/* ===== Recursos multimedia (índice) =====
   Catálogo de vídeos e infografías del departamento, por tema.
   No se copian los archivos ni se enlazan: solo se listan para saber qué hay
   disponible en cada tema (los archivos están en el Drive del departamento). */

const MEDIA_TEMAS = [
  { t: 1,  v: ["Historicidad y universalidad de la filosofía"], i: [] },
  { t: 3,  v: ["Del mito al logos"], i: [] },
  { t: 4,  v: ["El problema de la realidad en los presocráticos"], i: [] },
  { t: 5,  v: ["Ciudadanía en la Ilustración griega: Sócrates, sofistas y Aspasia"], i: [] },
  { t: 6,  v: ["Idea y naturaleza"], i: [] },
  { t: 7,  v: ["Antropología: Sócrates, Platón y Aristóteles"], i: [] },
  { t: 8,  v: ["Ética: intelectualismo socrático-platónico, virtudes y eudaimonía"], i: [] },
  { t: 9,  v: ["Política: Platón y Aristóteles"], i: [] },
  { t: 10, v: ["La filosofía helenística"], i: [] },
  { t: 11, v: ["El problema de los universales", "Medieval: patrística, escolástica, universales e Hildegarda"], i: [] },
  { t: 12, v: ["Medieval: existencia de Dios y fe-razón"], i: [] },
  { t: 13, v: ["Nacimiento del mundo moderno"], i: ["Renacimiento", "Revolución científica"] },
  { t: 14, v: ["Racionalismo y empirismo", "Racionalismo: Descartes", "Empirismo: Hume"], i: ["Descartes", "Hume"] },
  { t: 15, v: ["El debate metafísico moderno: dualismo cartesiano vs materialismo"], i: [] },
  { t: 16, v: ["El origen de la sociedad y el poder", "Hobbes, Locke y Rousseau: el contrato social"], i: ["Maquiavelo", "Hobbes", "Locke", "Rousseau"] },
  { t: 17, v: ["Utilitarismo y liberalismo: competitividad y cooperación"], i: ["Utilitarismo y liberalismo"] },
  { t: 18, v: ["Ilustración: luces y sombras"], i: [] },
  { t: 19, v: ["Kant: ¿qué puedo conocer?"], i: [] },
  { t: 20, v: ["Éticas del deber y de la felicidad"], i: [] },
  { t: 21, v: ["Los maestros de la sospecha"], i: ["Maestros de la sospecha"] },
  { t: 22, v: ["La crítica del capitalismo"], i: [] },
  { t: 23, v: ["Nietzsche y la posmodernidad"], i: [] },
  { t: 24, v: ["Los problemas filosóficos a la luz del análisis del lenguaje: Wittgenstein"], i: [] },
  { t: 25, v: ["Existencialismo: libertad radical"], i: [] },
  { t: 26, v: ["Beauvoir: feminismo contemporáneo"], i: ["Simone de Beauvoir"] },
  { t: 27, v: ["Retos del siglo XXI"], i: [] },
];

const MEDIA_TEXTOS = [
  "Platón: El mito de la caverna",
  "Platón: La República",
  "Descartes: Discurso del método",
  "Kant: ¿Qué es la Ilustración?",
  "Nietzsche: Por qué soy un destino",
  "Beauvoir: El segundo sexo (conclusión)",
];

const MEDIA_PAU = ["Comprensión de texto (ejercicios 1-2)"];

/* Versiones SVG (calcos vectoriales) de las infografías, por título. */
const MEDIA_SVG = {
  "Renacimiento": "media/svg/infografia_13-renacimiento.svg",
  "Revolución científica": "media/svg/infografia_13-revolucionCientifica.svg",
  "Descartes": "media/svg/infografia_14-descartes.svg",
  "Hume": "media/svg/infografia_14-hume.svg",
  "Maquiavelo": "media/svg/infografia_16-maquiavelo.svg",
  "Hobbes": "media/svg/infografia_16-hobbes.svg",
  "Locke": "media/svg/infografia_16-locke.svg",
  "Rousseau": "media/svg/infografia_16-rousseau.svg",
  "Utilitarismo y liberalismo": "media/svg/infografia_17-utilitarismo-liberalismo.svg",
  "Maestros de la sospecha": "media/svg/infografia_21-maestros-de-la-sospecha.svg",
  "Simone de Beauvoir": "media/svg/infografia_26-beauvoir.svg",
};
