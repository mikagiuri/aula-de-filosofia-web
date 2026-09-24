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
 },
 {
  "f": "media/ilustraciones/fil_pre_tales.jpg",
  "t": "Tales de Mileto",
  "pie": "El primer filósofo: el agua como principio de todo.",
  "tema": "fil-presocraticos",
  "license": "Public domain",
  "artist": "Unknown authorUnknown author",
  "page": "https://commons.wikimedia.org/wiki/File:Thales_in_Thomas_Stanley_History_of_Philosophy.jpg"
 },
 {
  "f": "media/ilustraciones/fil_pre_heraclito.jpg",
  "t": "Heráclito",
  "pie": "«Todo fluye»: el devenir regido por el logos.",
  "tema": "fil-presocraticos",
  "license": "Public domain",
  "artist": "Hendrick ter Brugghen",
  "page": "https://commons.wikimedia.org/wiki/File:Heraclitus_Rijksmuseum_SK-A-2784.jpeg"
 },
 {
  "f": "media/ilustraciones/fil_pre_democrito.jpg",
  "t": "Demócrito",
  "pie": "La materia es átomos y vacío (el filósofo que ríe).",
  "tema": "fil-presocraticos",
  "license": "Public domain",
  "artist": "Johannes Moreelse",
  "page": "https://commons.wikimedia.org/wiki/File:Johannes_Moreelse_-_Democritus,_the_Laughing_Philosopher_-_705_-_Mauritshuis.jpg"
 },
 {
  "f": "media/ilustraciones/fil_hel_epicuro.jpg",
  "t": "Epicuro",
  "pie": "La felicidad como placer sereno y ausencia de dolor (ataraxia).",
  "tema": "fil-helenismo",
  "license": "CC0",
  "artist": "Gary Todd",
  "page": "https://commons.wikimedia.org/wiki/File:Marble_Bust_of_Epicurus,_Roman_Copy.jpg"
 },
 {
  "f": "media/ilustraciones/fil_hel_zenon.jpg",
  "t": "Zenón de Citio",
  "pie": "Fundador del estoicismo: vivir según la razón y la naturaleza.",
  "tema": "fil-helenismo",
  "license": "Public domain",
  "artist": "Marie-Lan Nguyen",
  "page": "https://commons.wikimedia.org/wiki/File:Zeno_of_Citium_Ny_Carlsberg_Glyptotek_IN606.jpg"
 },
 {
  "f": "media/ilustraciones/fil_hel_seneca.jpg",
  "t": "Séneca",
  "pie": "Estoico: aceptar con serenidad lo que no depende de nosotros.",
  "tema": "fil-helenismo",
  "license": "CC0",
  "artist": "Peter Paul Rubens",
  "page": "https://commons.wikimedia.org/wiki/File:Bust_of_Pseudo-Seneca_MET_DP359039.jpg"
 },
 {
  "f": "media/ilustraciones/fil_hel_diogenes.jpg",
  "t": "Diógenes de Sínope",
  "pie": "Cínico: la autarquía, bastarse a sí mismo.",
  "tema": "fil-helenismo",
  "license": "Public domain",
  "artist": "John William Waterhouse",
  "page": "https://commons.wikimedia.org/wiki/File:Waterhouse-Diogenes.jpg"
 },
 {
  "f": "media/ilustraciones/fil_hel_marcoaurelio.jpg",
  "t": "Marco Aurelio",
  "pie": "Emperador estoico: las Meditaciones y el deber.",
  "tema": "fil-helenismo",
  "license": "CC0",
  "artist": "Gary Todd from Xinzheng, China",
  "page": "https://commons.wikimedia.org/wiki/File:Roman_Marble_Bust_of_Emperor_Marcus_Aurelius_(AD_161-180),_c._161_AD_(28204008722).jpg"
 },
 {
  "f": "media/ilustraciones/fil_hel_epicteto.jpg",
  "t": "Epicteto",
  "pie": "Estoico: distinguir lo que depende de mí de lo que no.",
  "tema": "fil-helenismo",
  "license": "Public domain",
  "artist": "\"Abric.\"",
  "page": "https://commons.wikimedia.org/wiki/File:Epictetus_portrait_from_Les_Morales_de_Plutarque,_S%C3%A9n%C3%A8que,_Socrate_et_Epict%C3%A8te,_1653,_Indian_ink.png"
 },
 {
  "f": "media/ilustraciones/fil_pre_pitagoras.jpg",
  "t": "Pitágoras de Samos",
  "pie": "El número como clave y orden de la realidad.",
  "tema": "fil-presocraticos",
  "license": "Public domain",
  "artist": "Unknown authorUnknown author",
  "page": "https://commons.wikimedia.org/wiki/File:Pythagoras_in_the_Roman_Forum,_Colosseum.jpg"
 },
 {
  "f": "media/ilustraciones/fil_pre_anaximandro.jpg",
  "t": "Anaximandro",
  "pie": "El arché es el ápeiron: lo indefinido e ilimitado.",
  "tema": "fil-presocraticos",
  "license": "Public domain",
  "artist": "ancient Roman mosaic artist from the early third century AD",
  "page": "https://commons.wikimedia.org/wiki/File:Anaximander_Mosaic.jpg"
 },
 {
  "f": "media/ilustraciones/fil_rembrandt_filosofo.jpg",
  "t": "Filósofo en meditación (Rembrandt, 1632)",
  "pie": "Pensar requiere detenerse: la luz que entra y la escalera que sube hacia dentro.",
  "tema": "fil-t1",
  "license": "Public domain",
  "artist": "Rembrandt",
  "page": "https://commons.wikimedia.org/wiki/File:Rembrandt_-_The_Philosopher_in_Meditation.jpg"
 },
 {
  "f": "media/ilustraciones/fil_pensador_rodin.jpg",
  "t": "El pensador (Rodin)",
  "pie": "El gesto universal de quien se hace preguntas.",
  "tema": "fil-t1",
  "license": "CC0",
  "artist": "Auguste Rodin",
  "page": "https://commons.wikimedia.org/wiki/File:Auguste_Rodin,_The_Thinker_(Le_Penseur),_model_1880,_cast_1901,_NGA_1005.jpg"
 },
 {
  "f": "media/ilustraciones/fil_vitruvio.jpg",
  "t": "El hombre de Vitruvio (Leonardo)",
  "pie": "El ser humano como medida de todas las cosas (Renacimiento).",
  "tema": "fil-t2",
  "license": "Public domain",
  "artist": "Leonardo da Vinci",
  "page": "https://commons.wikimedia.org/wiki/File:Uomo_Vitruviano.jpg"
 },
 {
  "f": "media/ilustraciones/fil_gauguin.jpg",
  "t": "¿De dónde venimos? ¿Qué somos? ¿Adónde vamos? (Gauguin)",
  "pie": "Las tres preguntas de la antropología filosófica, pintadas en 1897.",
  "tema": "fil-t2",
  "license": "Public domain",
  "artist": "Paul Gauguin",
  "page": "https://commons.wikimedia.org/wiki/File:Gauguin_-_Where_Do_We_Come_From%3F_What_Are_We%3F_Where_Are_We_Going%3F_(1897-98).jpg"
 },
 {
  "f": "media/ilustraciones/fil_darwin_caricatura.jpg",
  "t": "Caricatura de Darwin (1871)",
  "pie": "La teoría de la evolución sacudió la idea de lo que es el ser humano.",
  "tema": "fil-t2",
  "license": "Public domain",
  "artist": "Unknown authorUnknown author",
  "page": "https://commons.wikimedia.org/wiki/File:Editorial_cartoon_depicting_Charles_Darwin_as_an_ape_(1871).jpg"
 },
 {
  "f": "media/ilustraciones/fil_caverna.jpg",
  "t": "La caverna de Platón (Saenredam, 1604)",
  "pie": "Sombras frente a realidad: el mito central de la teoría del conocimiento.",
  "tema": "fil-t3",
  "license": "CC0",
  "artist": "After Cornelis van Haarlem / Jan Saenredam",
  "page": "https://commons.wikimedia.org/wiki/File:Jan_Pietersz_Saenredam_after_Cornelis_Cornelisz_van_Haarlem,_Plato%27s_Cave,_1604,_NGA_62542.jpg"
 },
 {
  "f": "media/ilustraciones/fil_flammarion.jpg",
  "t": "El grabado Flammarion (1888)",
  "pie": "Asomarse más allá de lo que creemos saber del mundo.",
  "tema": "fil-t3",
  "license": "Public domain",
  "artist": "AnonymousUnknown author",
  "page": "https://commons.wikimedia.org/wiki/File:Flammarion.jpg"
 },
 {
  "f": "media/ilustraciones/fil_descartes.jpg",
  "t": "René Descartes (grabado del s. XVII)",
  "pie": "La duda metódica: «pienso, luego existo».",
  "tema": "fil-t3",
  "license": "CC0",
  "artist": "Rijksmuseum",
  "page": "https://commons.wikimedia.org/wiki/File:Portret_van_Ren%C3%A9_Descartes,_RP-P-OB-59.060.jpg"
 },
 {
  "f": "media/ilustraciones/fil_hume.jpg",
  "t": "David Hume (Allan Ramsay)",
  "pie": "Todo conocimiento viene de la experiencia… y la causalidad es un hábito.",
  "tema": "fil-t3",
  "license": "Public domain",
  "artist": "Allan Ramsay",
  "page": "https://commons.wikimedia.org/wiki/File:David_Hume_Ramsay.jpg"
 },
 {
  "f": "media/ilustraciones/fil_arbol_porfirio.jpg",
  "t": "El árbol de Porfirio",
  "pie": "Género, especie y diferencia: clasificar para definir.",
  "tema": "fil-t4",
  "license": "Public domain",
  "artist": "Purchotius",
  "page": "https://commons.wikimedia.org/wiki/File:Arbor_porphyrii_(from_Purchotius%27_Institutiones_philosophicae_I,_1730).png"
 },
 {
  "f": "media/ilustraciones/fil_hercules_encrucijada.jpg",
  "t": "Hércules en la encrucijada (Annibale Carracci)",
  "pie": "Elegir entre el camino fácil del placer y el difícil de la virtud.",
  "tema": "fil-t5",
  "license": "Public domain",
  "artist": "Annibale Carracci",
  "page": "https://commons.wikimedia.org/wiki/File:Annibale_Carracci_-_The_Choice_of_Heracles_-_WGA4416.jpg"
 },
 {
  "f": "media/ilustraciones/fil_buen_samaritano.jpg",
  "t": "El buen samaritano (Van Gogh, 1890)",
  "pie": "Ayudar al desconocido: la ética como cuidado del otro.",
  "tema": "fil-t5",
  "license": "Public domain",
  "artist": "After Eugène Delacroix / Vincent van Gogh",
  "page": "https://commons.wikimedia.org/wiki/File:Vincent_van_Gogh_-_The_Good_Samaritan,_1890_-_Google_Art_Project.jpg"
 },
 {
  "f": "media/ilustraciones/fil_bentham.jpg",
  "t": "Jeremy Bentham",
  "pie": "Fundador del utilitarismo: medir las acciones por sus consecuencias.",
  "tema": "fil-t5",
  "license": "Public domain",
  "artist": "Henry William Pickersgill",
  "page": "https://commons.wikimedia.org/wiki/File:Jeremy_Bentham_by_Henry_William_Pickersgill.jpg"
 },
 {
  "f": "media/ilustraciones/fil_buen_gobierno.jpg",
  "t": "Efectos del buen gobierno (Lorenzetti, Siena)",
  "pie": "Una ciudad justa y en paz: la política pintada en 1338.",
  "tema": "fil-t6",
  "license": "Public domain",
  "artist": "Ambrogio Lorenzetti",
  "page": "https://commons.wikimedia.org/wiki/File:Ambrogio_Lorenzetti_-_Effects_of_Good_Government_in_the_city_-_Google_Art_Project.jpg"
 },
 {
  "f": "media/ilustraciones/fil_libertad_pueblo.jpg",
  "t": "La Libertad guiando al pueblo (Delacroix, 1830)",
  "pie": "La soberanía popular como ideal revolucionario.",
  "tema": "fil-t6",
  "license": "Public domain",
  "artist": "Eugène Delacroix",
  "page": "https://commons.wikimedia.org/wiki/File:Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg"
 },
 {
  "f": "media/ilustraciones/fil_wollstonecraft.jpg",
  "t": "Mary Wollstonecraft (John Opie)",
  "pie": "Vindicación de los derechos de la mujer (1792).",
  "tema": "fil-t6",
  "license": "Public domain",
  "artist": "John Opie",
  "page": "https://commons.wikimedia.org/wiki/File:Mary_Wollstonecraft_by_John_Opie_from_the_National_Portrait_Gallery.jpg"
 },
 {
  "f": "media/ilustraciones/fil_hokusai.jpg",
  "t": "La gran ola de Kanagawa (Hokusai)",
  "pie": "Lo bello y lo sublime en una estampa japonesa.",
  "tema": "fil-t7",
  "license": "Public domain",
  "artist": "After Katsushika Hokusai",
  "page": "https://commons.wikimedia.org/wiki/File:Great_Wave_off_Kanagawa2.jpg"
 },
 {
  "f": "media/ilustraciones/fil_vermeer_arte.jpg",
  "t": "El arte de la pintura (Vermeer)",
  "pie": "Un cuadro sobre el propio arte de pintar.",
  "tema": "fil-t7",
  "license": "Public domain",
  "artist": "Johannes Vermeer",
  "page": "https://commons.wikimedia.org/wiki/File:Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg"
 },
 {
  "f": "media/ilustraciones/fil_noche_estrellada.jpg",
  "t": "La noche estrellada (Van Gogh, 1889)",
  "pie": "El arte como expresión de un mundo interior.",
  "tema": "fil-t7",
  "license": "Public domain",
  "artist": "Vincent van Gogh",
  "page": "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
 },
 {
  "f": "media/ilustraciones/fil_empedocles.jpg",
  "t": "Empédocles (Signorelli, Orvieto)",
  "pie": "Cuatro elementos movidos por el Amor y el Odio.",
  "tema": "fil-presocraticos",
  "license": "Public domain",
  "artist": "Luca Signorelli",
  "page": "https://commons.wikimedia.org/wiki/File:Luca_Signorelli_-_Empedocles_-_WGA21238.jpg"
 },
 {
  "f": "media/ilustraciones/fil_anaximenes.jpg",
  "t": "Anaximandro y Anaxímenes (Crónica de Núremberg, 1493)",
  "pie": "Los milesios buscan el principio (arjé): lo indefinido y el aire.",
  "tema": "fil-presocraticos",
  "license": "Public domain",
  "artist": "Michel Wolgemut, Wilhelm Pleydenwurff (Text: Hartmann Schedel)",
  "page": "https://commons.wikimedia.org/wiki/File:Nuremberg_chronicles_f_68v_2.png"
 },
 {
  "f": "media/ilustraciones/fil_pirron.jpg",
  "t": "Pirrón de Elis",
  "pie": "El escéptico: suspender el juicio para vivir en calma.",
  "tema": "fil-helenismo",
  "license": "Public domain",
  "artist": "Girolamo Olgiati",
  "page": "https://commons.wikimedia.org/wiki/File:Pyrrho_Heliensis_-_Illustrium_philosophorum_et_sapientum_effigies_ab_eorum_numistatibus_extractae.png"
 },
 {
  "f": "media/ilustraciones/fil_lechuza_atenea.jpg",
  "t": "La lechuza de Atenea en una moneda de Atenas",
  "pie": "Símbolo de la sabiduría y, desde Hegel, de la filosofía.",
  "tema": "fil-t1",
  "license": "Public domain",
  "artist": "Hermann Weber 1823-1918",
  "page": "https://commons.wikimedia.org/wiki/File:Athens,_tetradrachm,_86-84_BC,_Weber_3526.png"
 },
 {
  "f": "media/ilustraciones/fil_zenon_elea.jpg",
  "t": "Zenón de Elea muestra las puertas de la verdad y la falsedad",
  "pie": "Las paradojas contra el movimiento (fresco de El Escorial).",
  "tema": "fil-presocraticos",
  "license": "Public domain",
  "artist": "Pellegrini Tiballdi",
  "page": "https://commons.wikimedia.org/wiki/File:Zeno_of_Elea_Tibaldi_or_Carducci_Escorial.jpg"
 },
 {
  "f": "media/ilustraciones/fil_hiparquia_crates.jpg",
  "t": "Crates e Hiparquía (fresco romano)",
  "pie": "La pareja cínica que vivió según la naturaleza, sin convenciones.",
  "tema": "fil-helenismo",
  "license": "Public domain",
  "artist": "Unknown authorUnknown author",
  "page": "https://commons.wikimedia.org/wiki/File:Crates_and_Hipparchia_Villa_Farnesina.jpg"
 }
];
