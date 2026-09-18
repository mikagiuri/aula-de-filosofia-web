"use strict";
/* ===== Diapositivas (índice) =====
   Catálogo de las presentaciones del departamento, por tema. No se sirven los
   archivos (los PDF pesan cientos de MB y viven en el Drive del departamento):
   aquí se listan para saber qué pase hay disponible en cada tema, igual que el
   índice de vídeos de Recursos.
   Fuente: carpetas_drive_dpto_16_filosofia\\clasificando_carpetaresultados\\hf_diapos
   (28 PDF) + carpetas_drive_borradores (versiones .pptx editables del bloque A). */

const DIAPOS_TEMAS = [
  { t: 1,  decks: ["Universalidad e historicidad de la filosofía"] },
  { t: 3,  decks: ["Del mito al logos"] },
  { t: 4,  decks: ["El problema de la realidad (presocráticos)"] },
  { t: 5,  decks: ["Ley, justicia y ciudadanía (sofistas y Sócrates)"] },
  { t: 6,  decks: ["Realidad y conocimiento (Platón y Aristóteles)"] },
  { t: 7,  decks: ["Antropología: alma y cuerpo"] },
  { t: 8,  decks: ["El debate ético"] },
  { t: 9,  decks: ["El debate político"] },
  { t: 10, decks: ["La filosofía helenística"] },
  { t: 11, decks: ["Filosofía medieval: etapas, los universales, Hildegarda"] },
  { t: 12, decks: ["Fe y razón: el gran debate medieval"] },
  { t: 13, decks: ["El Renacimiento"] },
  { t: 14, decks: ["Racionalismo: Descartes", "Empirismo: Hume"] },
  { t: 15, decks: ["El debate metafísico moderno"] },
  { t: 16, decks: ["El contrato social: Hobbes", "El contrato social: Locke", "El contrato social: Rousseau"] },
  { t: 17, decks: ["Capitalismo, liberalismo y utilitarismo"] },
  { t: 18, decks: ["La Ilustración: luces y sombras"] },
  { t: 19, decks: ["Kant: ¿qué puedo conocer?"] },
  { t: 20, decks: ["Éticas del deber y de la felicidad"] },
  { t: 21, decks: ["Los maestros de la sospecha"] },
  { t: 22, decks: ["La crítica del capitalismo (Marx)"] },
  { t: 23, decks: ["Nietzsche y la posmodernidad"] },
  { t: 24, decks: ["Filosofía analítica (Wittgenstein)"] },
  { t: 25, decks: ["Existencialismo"] },
];

/* Recursos de diapositivas que no son un tema del temario. */
const DIAPOS_EXTRA = [
  "Bloque Antiguo (temas 1-6): versiones editables en PowerPoint (.pptx)",
  "Ágora (Hipatia de Alejandría): presentación traducida al castellano",
];
