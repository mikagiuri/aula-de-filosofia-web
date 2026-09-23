"use strict";
/* ===== Ilustraciones de tema (Filosofía 1.º) — imágenes de DOMINIO PÚBLICO =====
   {f:ruta, t:título, pie, tema:clave THEORY, license, artist, page(Commons)}.
   Recopiladas de Wikimedia Commons (PD). Sin atribución obligatoria; se cita por cortesía. */
const ILUSTRACIONES = [
 {
  "f": "media/ilustraciones/altamira_bison.jpg",
  "t": "Bisonte de Altamira",
  "pie": "Arte rupestre paleolítico: los primeros símbolos y la cultura.",
  "tema": "fil-t2",
  "license": "Public domain",
  "artist": "unknown prehistoric artist",
  "page": "https://commons.wikimedia.org/wiki/File:Altamira,_bison.jpg"
 },
 {
  "f": "media/ilustraciones/evolucion_huxley.jpg",
  "t": "El lugar del hombre en la naturaleza",
  "pie": "Esqueletos comparados (Huxley, 1863): la continuidad evolutiva.",
  "tema": "fil-t2",
  "license": "Public domain",
  "artist": "Benjamin Waterhouse Hawkins (1807–94)",
  "page": "https://commons.wikimedia.org/wiki/File:Huxley_-_Mans_Place_in_Nature.jpg"
 },
 {
  "f": "media/ilustraciones/homo_erectus_craneo.png",
  "t": "Cráneo de Homo erectus",
  "pie": "Un homínido extinto en la línea hacia el ser humano.",
  "tema": "fil-t2",
  "license": "Public domain",
  "artist": "Franz Weidenreich",
  "page": "https://commons.wikimedia.org/wiki/File:Homo_erectus_skull_cross-section.png"
 },
 {
  "f": "media/ilustraciones/java_man.jpg",
  "t": "El «hombre de Java»",
  "pie": "Reconstrucción de Pithecanthropus (Homo erectus): la hominización.",
  "tema": "fil-t2",
  "license": "Public domain",
  "artist": "J. H. McGREGOR",
  "page": "https://commons.wikimedia.org/wiki/File:Java_man.jpg"
 },
 {
  "f": "media/ilustraciones/herramientas_liticas.jpg",
  "t": "Herramientas líticas",
  "pie": "Útiles del Paleolítico (Lartet & Christy): cultura material y técnica.",
  "tema": "fil-t2",
  "license": "Public domain",
  "artist": "Édouard Lartet &amp; Henry Christy, ed. T. Rupert Jones",
  "page": "https://commons.wikimedia.org/wiki/File:Reliquiae_aquitanicae--pl._A-1--BHL20495573.jpg"
 },
 {
  "f": "media/ilustraciones/hooke_pulga.jpg",
  "t": "La pulga de Hooke",
  "pie": "Micrographia (1665): la mirada de la ciencia con el microscopio.",
  "tema": "fil-t3",
  "license": "Public domain",
  "artist": "Robert Hooke",
  "page": "https://commons.wikimedia.org/wiki/File:HookeFlea01.jpg"
 },
 {
  "f": "media/ilustraciones/byrne_euclides.png",
  "t": "Los Elementos de Euclides",
  "pie": "Edición de Byrne (1847): la geometría como saber demostrativo.",
  "tema": "fil-t3",
  "license": "Public domain",
  "artist": "Oliver Byrne, Euclid",
  "page": "https://commons.wikimedia.org/wiki/File:Byrne_Euclid_p9_image.png"
 },
 {
  "f": "media/ilustraciones/frege_begriffsschrift.png",
  "t": "La conceptografía de Frege",
  "pie": "Frege funda la lógica moderna (de primer orden).",
  "tema": "fil-t4",
  "license": "Public domain",
  "artist": "Frege",
  "page": "https://commons.wikimedia.org/wiki/File:Frege-gegens%C3%A4tze.png"
 },
 {
  "f": "media/ilustraciones/principia_mathematica.png",
  "t": "«1+1=2» en Principia Mathematica",
  "pie": "Lógica simbólica: derivar la aritmética de la lógica.",
  "tema": "fil-t4",
  "license": "Public domain",
  "artist": "Whitehead and Russell",
  "page": "https://commons.wikimedia.org/wiki/File:Principia_Mathematica_54-43.png"
 },
 {
  "f": "media/ilustraciones/escuela_atenas.jpg",
  "t": "La Escuela de Atenas",
  "pie": "Rafael: los filósofos griegos reunidos; el paso del mito al logos.",
  "tema": "fil-t1",
  "license": "Public domain",
  "artist": "Raphael",
  "page": "https://commons.wikimedia.org/wiki/File:%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg"
 },
 {
  "f": "media/ilustraciones/acropolis.jpg",
  "t": "La Acrópolis de Atenas",
  "pie": "Atenas, cuna de la filosofía y de la vida en la polis.",
  "tema": "fil-t1",
  "license": "CC0",
  "artist": "Jebulon",
  "page": "https://commons.wikimedia.org/wiki/File:Acropolis_Parthenon_Athens_Greece.jpg"
 },
 {
  "f": "media/ilustraciones/muerte_socrates.jpg",
  "t": "La muerte de Sócrates",
  "pie": "David: Sócrates elige la coherencia moral antes que salvar la vida.",
  "tema": "fil-t5",
  "license": "Public domain",
  "artist": "Jacques-Louis David",
  "page": "https://commons.wikimedia.org/wiki/File:David_-_The_Death_of_Socrates.jpg"
 },
 {
  "f": "media/ilustraciones/justicia.jpg",
  "t": "Alegoría de la Justicia",
  "pie": "La ética pregunta qué es lo justo y cómo debemos actuar.",
  "tema": "fil-t5",
  "license": "Public domain",
  "artist": "Sienese school",
  "page": "https://commons.wikimedia.org/wiki/File:Allegory_of_Justice-f3434433.jpg"
 },
 {
  "f": "media/ilustraciones/venus_milo.jpg",
  "t": "Venus de Milo",
  "pie": "La belleza clásica: proporción y armonía como ideal estético.",
  "tema": "fil-t7",
  "license": "Public domain",
  "artist": "Unknown artistUnknown artist",
  "page": "https://commons.wikimedia.org/wiki/File:Venus_de_Milo_Louvre_Ma399_n4.jpg"
 },
 {
  "f": "media/ilustraciones/las_meninas.jpg",
  "t": "Las Meninas",
  "pie": "Velázquez: el arte que se piensa a sí mismo (representación y mirada).",
  "tema": "fil-t7",
  "license": "Public domain",
  "artist": "?",
  "page": "https://commons.wikimedia.org/wiki/File:Las_Meninas_(1656),_by_Velazquez.jpg"
 },
 {
  "f": "media/ilustraciones/fil_leviatan.jpg",
  "t": "Frontispicio del Leviatán (Hobbes, 1651)",
  "pie": "El Estado como un gran cuerpo formado por los individuos.",
  "tema": "fil-t6",
  "license": "Public domain",
  "artist": "Wenceslas Hollar or (more likely) Abraham Bosse.",
  "page": "https://commons.wikimedia.org/wiki/File:Drawing_of_frontispiece_of_Leviathan.jpg"
 },
 {
  "f": "media/ilustraciones/fil_hobbes.jpg",
  "t": "Thomas Hobbes",
  "pie": "Del miedo de «todos contra todos» al soberano que trae la paz.",
  "tema": "fil-t6",
  "license": "Public domain",
  "artist": "John Michael Wright",
  "page": "https://commons.wikimedia.org/wiki/File:Thomas_Hobbes_by_John_Michael_Wright.jpg"
 },
 {
  "f": "media/ilustraciones/fil_locke.jpg",
  "t": "John Locke",
  "pie": "Derechos naturales y gobierno limitado: raíz del liberalismo.",
  "tema": "fil-t6",
  "license": "Public domain",
  "artist": "Godfrey Kneller",
  "page": "https://commons.wikimedia.org/wiki/File:Godfrey_Kneller_-_Portrait_of_John_Locke_(Hermitage).jpg"
 },
 {
  "f": "media/ilustraciones/fil_rousseau_pol.jpg",
  "t": "Jean-Jacques Rousseau",
  "pie": "El contrato social y la voluntad general: soberanía popular.",
  "tema": "fil-t6",
  "license": "Public domain",
  "artist": "Martin, David, 1737-1797, engraver; Ramsay, Allan, 1713-1784, artist",
  "page": "https://commons.wikimedia.org/wiki/File:Jean-Jacques_Rousseau,_half-length_portrait,_facing_left_with_right_hand_on_chest,_wearing_fur-trimmed_coat_and_hat_LCCN2012645515.jpg"
 },
 {
  "f": "media/ilustraciones/fil_marx.jpg",
  "t": "Karl Marx",
  "pie": "Clases, trabajo y crítica del Estado y la desigualdad.",
  "tema": "fil-t6",
  "license": "Public domain",
  "artist": "John Jabez Edwin Mayall",
  "page": "https://commons.wikimedia.org/wiki/File:Karl_Marx_by_John_Jabez_Edwin_Mayall_1875_-_Restored.png"
 },
 {
  "f": "media/ilustraciones/fil_ddhh.jpg",
  "t": "Declaración de los Derechos del Hombre (1789)",
  "pie": "Los derechos como límite que ningún poder puede traspasar.",
  "tema": "fil-t6",
  "license": "CC0",
  "artist": "Imprimerie des Frères Périsse, imprimeur",
  "page": "https://commons.wikimedia.org/wiki/File:DECLARATION_DES_DROITS_ET_DES_DEVOIRS_DE_L%27HOMME_ET_DU_CITOYEN,_AFF2950.jpg"
 },
 {
  "f": "media/ilustraciones/fil_socrates.jpg",
  "t": "Sócrates",
  "pie": "«Solo sé que no sé nada»: la pregunta como método.",
  "tema": "fil-t1",
  "license": "Public domain",
  "artist": "Copy of Lysippos (?)",
  "page": "https://commons.wikimedia.org/wiki/File:Socrates_Louvre.jpg"
 },
 {
  "f": "media/ilustraciones/fil_diogenes.jpg",
  "t": "Diógenes",
  "pie": "El filósofo que buscaba a un hombre honesto con un candil.",
  "tema": "fil-t1",
  "license": "Public domain",
  "artist": "Jean-Léon Gérôme",
  "page": "https://commons.wikimedia.org/wiki/File:Jean-L%C3%A9on_G%C3%A9r%C3%B4me_-_Diogenes_-_Walters_37131.jpg"
 },
 {
  "f": "media/ilustraciones/fil_galileo.jpg",
  "t": "Galileo Galilei",
  "pie": "El método científico: observar, medir, contrastar.",
  "tema": "fil-t3",
  "license": "Public domain",
  "artist": "Justus Sustermans",
  "page": "https://commons.wikimedia.org/wiki/File:Justus_Sustermans_-_Portrait_of_Galileo_Galilei,_1636.jpg"
 },
 {
  "f": "media/ilustraciones/fil_vesalio.jpg",
  "t": "Anatomía (Vesalio, 1543)",
  "pie": "Observar para conocer: nace la ciencia moderna.",
  "tema": "fil-t3",
  "license": "Public domain",
  "artist": "desconocido",
  "page": "https://commons.wikimedia.org/wiki/File:Vesalius_Fabrica_p163.jpg"
 },
 {
  "f": "media/ilustraciones/fil_newton.jpg",
  "t": "Isaac Newton",
  "pie": "Las leyes de la naturaleza descubiertas por la razón.",
  "tema": "fil-t3",
  "license": "Public domain",
  "artist": "Godfrey Kneller",
  "page": "https://commons.wikimedia.org/wiki/File:Portrait_of_Sir_Isaac_Newton,_1689.jpg"
 },
 {
  "f": "media/ilustraciones/fil_boole.jpg",
  "t": "George Boole",
  "pie": "El álgebra de la lógica: lo verdadero y lo falso como 1 y 0.",
  "tema": "fil-t4",
  "license": "Public domain",
  "artist": "Unknown authorUnknown author",
  "page": "https://commons.wikimedia.org/wiki/File:Portrait_of_George_Boole.png"
 },
 {
  "f": "media/ilustraciones/fil_leibniz.jpg",
  "t": "Gottfried W. Leibniz",
  "pie": "El sueño de un cálculo universal del razonamiento.",
  "tema": "fil-t4",
  "license": "Public domain",
  "artist": "Christoph Bernhard Francke",
  "page": "https://commons.wikimedia.org/wiki/File:Christoph_Bernhard_Francke_-_Bildnis_des_Philosophen_Leibniz_(ca._1695).jpg"
 },
 {
  "f": "media/ilustraciones/fil_aristoteles_log.jpg",
  "t": "Aristóteles",
  "pie": "El Organon: la primera teoría de la deducción válida.",
  "tema": "fil-t4",
  "license": "Public domain",
  "artist": "Unknown authorUnknown author",
  "page": "https://commons.wikimedia.org/wiki/File:Portrait_of_Aristotle,_set_on_a_restored_bust,_Colosseum.jpg"
 },
 {
  "f": "media/ilustraciones/fil_kant.jpg",
  "t": "Immanuel Kant",
  "pie": "El deber y el imperativo categórico.",
  "tema": "fil-t5",
  "license": "CC0",
  "artist": "Rijksmuseum",
  "page": "https://commons.wikimedia.org/wiki/File:Portret_van_Immanuel_Kant_Emanuel_Kant_(titel_op_object),_RP-P-2015-26-1764.jpg"
 },
 {
  "f": "media/ilustraciones/fil_epicuro.jpg",
  "t": "Epicuro",
  "pie": "La felicidad como placer sereno y ausencia de dolor.",
  "tema": "fil-t5",
  "license": "Public domain",
  "artist": "Unknown artistUnknown artist",
  "page": "https://commons.wikimedia.org/wiki/File:Epikouros_BM_1843.jpg"
 },
 {
  "f": "media/ilustraciones/fil_mill.jpg",
  "t": "John Stuart Mill",
  "pie": "El utilitarismo: la mayor felicidad para el mayor número.",
  "tema": "fil-t5",
  "license": "Public domain",
  "artist": "London Stereoscopic Company",
  "page": "https://commons.wikimedia.org/wiki/File:John_Stuart_Mill_by_London_Stereoscopic_Company,_c1870.jpg"
 },
 {
  "f": "media/ilustraciones/fil_friedrich.jpg",
  "t": "El caminante sobre el mar de nubes",
  "pie": "Lo sublime: el arte romántico ante lo inabarcable.",
  "tema": "fil-t7",
  "license": "Public domain",
  "artist": "Caspar David Friedrich (1774–1840)",
  "page": "https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg"
 },
 {
  "f": "media/ilustraciones/fil_botticelli.jpg",
  "t": "El nacimiento de Venus (Botticelli)",
  "pie": "La belleza ideal del Renacimiento.",
  "tema": "fil-t7",
  "license": "Public domain",
  "artist": "Sandro Botticelli",
  "page": "https://commons.wikimedia.org/wiki/File:Botticelli_Venus.jpg"
 }
];
