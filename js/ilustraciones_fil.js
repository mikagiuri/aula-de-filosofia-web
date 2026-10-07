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
 },
 {
  "f": "media/galeria_museo/extra3/rembrandt-aristoteles-con-un-busto-de-homero.jpg",
  "t": "Aristóteles con un busto de Homero (Rembrandt, 1653)",
  "pie": "El filósofo apoya la mano sobre la cabeza del poeta de la Ilíada y la Odisea. La filosofía nace dialogando con los mitos que contaba Homero.",
  "tema": "fil-t1",
  "license": "Dominio público",
  "artist": "Rembrandt"
 },
 {
  "f": "media/galeria_museo/antiguedad/mito_delfos.jpg",
  "t": "El santuario de Apolo en Delfos",
  "pie": "Ruinas del lugar donde se consultaba el oráculo. Según Platón, el oráculo dijo que nadie era más sabio que Sócrates, y él lo entendió así: su sabiduría consistía en saber que no sabía.",
  "tema": "fil-t1",
  "license": "Licencia Unsplash",
  "artist": "Saara Sanamo"
 },
 {
  "f": "media/retratos/museo/academia.jpg",
  "t": "Mosaico de la Academia de Platón",
  "pie": "Siete sabios conversan bajo un árbol en un mosaico romano hallado cerca de Pompeya. Suele interpretarse como la Academia: la filosofía como diálogo entre iguales.",
  "tema": "fil-t1",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/extra3/mapa-bahia-de-saronikos-con-la-ciudad-de-atenas-cuna-de-la-filoso.jpg",
  "t": "Atenas en un portulano otomano",
  "pie": "Carta náutica de la bahía de Atenas en el libro de navegación del almirante Piri Reis. La ciudad donde la filosofía encontró su plaza pública aparece aquí como un puerto más para los navegantes.",
  "tema": "fil-t1",
  "license": "CC0",
  "artist": "Piri Reis"
 },
 {
  "f": "media/galeria_museo/extra3/durero-melencolia-i.jpg",
  "t": "Melencolía I (Durero, 1514)",
  "pie": "Una figura alada medita rodeada de instrumentos de medir, un reloj de arena y un extraño poliedro. Es la imagen de quien se hace preguntas y todavía no encuentra la respuesta.",
  "tema": "fil-t1",
  "license": "Dominio público",
  "artist": "Albrecht Dürer"
 },
 {
  "f": "media/retratos/museo/zambrano.jpg",
  "t": "María Zambrano",
  "pie": "Filósofa malagueña, discípula de Ortega y Gasset. Buscó una «razón poética» capaz de unir el pensamiento con la vida y los sentimientos.",
  "tema": "fil-t1",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/extra3/habermas.jpg",
  "t": "Jürgen Habermas en 1969",
  "pie": "Filósofo de la Escuela de Fráncfort. Defiende que una norma es justa si pudieran aceptarla todos los afectados en un diálogo libre y sin coacciones.",
  "tema": "fil-t1",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo2/diogenes-laercio.jpg",
  "t": "Diógenes Laercio",
  "pie": "Escribió las Vidas de los filósofos más ilustres, una de las fuentes principales sobre la filosofía antigua. Mucho de lo que sabemos de los primeros filósofos nos llega a través de él.",
  "tema": "fil-t1",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/antiguedad/mito_minerva_capitolina.jpg",
  "t": "Atenea (Minerva) de los Museos Capitolinos",
  "pie": "Fotografía del siglo XIX de una estatua de la diosa de la sabiduría. Su lechuza, ave que ve en la oscuridad, acabó siendo el símbolo de la filosofía.",
  "tema": "fil-t1",
  "license": "Dominio público",
  "artist": "Boston Public Library"
 },
 {
  "f": "media/galeria_museo/epocas/ilustracion_Encyclop_die_ou_Dictionnaire_raisonn_des_sciences_des_arts_et_des_m_tiers_fron.jpg",
  "t": "La Enciclopedia de Diderot y D'Alembert (1751)",
  "pie": "Portada del primer tomo: un «diccionario razonado de las ciencias, las artes y los oficios». La Ilustración quiso ordenar todos los saberes y mostrar cómo se relacionan entre sí.",
  "tema": "fil-t1",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/epocas/mito_logos_Achilles_and_Ajax_playing_dice_Attic_black_figured_amphora_signed_by_Exekias_as.jpg",
  "t": "Aquiles y Áyax jugando (Exekias)",
  "pie": "Dos héroes de la guerra de Troya, inclinados sobre un tablero, en un ánfora ática del siglo VI a. C. Es el mundo de los mitos homéricos, del que parte el paso al logos.",
  "tema": "fil-t1",
  "license": "Dominio público",
  "artist": "Exekias"
 },
 {
  "f": "media/retratos/museo2/parmenides.jpg",
  "t": "Parménides de Elea",
  "pie": "Busto antiguo del filósofo. Sostuvo que el ser es eterno e inmutable: el cambio que muestran los sentidos pertenece a la vía de la opinión.",
  "tema": "fil-presocraticos",
  "license": "CC BY 4.0",
  "artist": "Sergio Spolti (foto)"
 },
 {
  "f": "media/retratos/museo2/anaximenes.jpg",
  "t": "Anaxímenes de Mileto",
  "pie": "Grabado antiguo con un retrato imaginado. Para Anaxímenes, el principio de todo es el aire, que al condensarse o enrarecerse da lugar a las demás cosas.",
  "tema": "fil-presocraticos",
  "license": "Dominio público",
  "artist": "Girolamo Olgiati"
 },
 {
  "f": "media/retratos/museo2/tales.jpg",
  "t": "Tales de Mileto",
  "pie": "Medallón con el perfil del que se considera el primer filósofo. Frente al Océano divino de Homero, eligió un principio que se puede observar: el agua.",
  "tema": "fil-presocraticos",
  "license": "CC BY 4.0",
  "artist": "Wellcome Collection"
 },
 {
  "f": "media/retratos/museo2/pitagoras.jpg",
  "t": "Pitágoras entre otros bustos clásicos",
  "pie": "Estudio de dibujo con tres cabezas antiguas; la de abajo lleva el rótulo «Pythagore». Para los pitagóricos, la esencia del universo es el número y la armonía.",
  "tema": "fil-presocraticos",
  "license": "CC0",
  "artist": "Rijksmuseum"
 },
 {
  "f": "media/galeria_museo/extra3/mapa-1794-anville-map-of-ancient-greece.jpg",
  "t": "La Grecia antigua (mapa de D'Anville, 1794)",
  "pie": "El mundo griego en torno al mar Egeo. La filosofía nació en Mileto, en la costa de Jonia, en un mundo de ciudades comerciales unidas por el mar.",
  "tema": "fil-presocraticos",
  "license": "Dominio público",
  "artist": "Jean-Baptiste Bourguignon d'Anville"
 },
 {
  "f": "media/galeria_museo/extra3/mapa-egypt-phoenicia-palestine-kiepert-atlas-antiquus-map-3.jpg",
  "t": "Egipto, Fenicia y Palestina (atlas de Kiepert)",
  "pie": "Mapa histórico del Mediterráneo oriental antiguo. Los griegos tomaron de Egipto saberes prácticos como la geometría. ¿Por qué la filosofía nació en Grecia y no allí? Es la pregunta de la lectura «Tales y el Escriba».",
  "tema": "fil-presocraticos",
  "license": "Dominio público",
  "artist": "Heinrich Kiepert"
 },
 {
  "f": "media/galeria_museo/antiguedad/mito_zeus_olimpico.jpg",
  "t": "El Zeus de Olimpia imaginado por Quatremère de Quincy (1815)",
  "pie": "Reconstrucción de la gigantesca estatua de Fidias, hoy perdida. Jenófanes criticó estos dioses con forma humana: si los caballos pudieran pintar, pintarían dioses con forma de caballo.",
  "tema": "fil-presocraticos",
  "license": "Dominio público",
  "artist": "Quatremère de Quincy"
 },
 {
  "f": "media/galeria_museo/antiguedad/arte_zeus_artemision.jpg",
  "t": "Zeus o Poseidón del cabo Artemisio",
  "pie": "Bronce griego de hacia 460 a. C., recuperado del mar. Un dios con cuerpo de atleta: justo el tipo de dios antropomórfico que critica Jenófanes.",
  "tema": "fil-presocraticos",
  "license": "CC0",
  "artist": "Jebulon (foto)"
 },
 {
  "f": "media/galeria_museo/antiguedad/mito_atenea_encelado.jpg",
  "t": "Atenea contra el gigante Encélado",
  "pie": "Lámina del siglo XIX con una escena de la lucha entre dioses y gigantes. En los mitos, el orden del mundo se explica por batallas divinas; los milesios buscarán en cambio un principio natural.",
  "tema": "fil-presocraticos",
  "license": "Dominio público",
  "artist": "The New York Public Library"
 },
 {
  "f": "media/galeria_museo/temas2/mito_logos_Odysseus_Circe_Met_41_83.jpg",
  "t": "Odiseo y Circe",
  "pie": "Vaso ático de hacia 440 a. C. con un episodio de la Odisea. Los poemas de Homero eran la gran enciclopedia de los griegos antes de que los filósofos buscaran explicaciones racionales.",
  "tema": "fil-presocraticos",
  "license": "CC BY 2.0",
  "artist": "Pintor de Perséfone (atribuido)"
 },
 {
  "f": "media/retratos/museo2/sartre.jpg",
  "t": "Jean-Paul Sartre en 1965",
  "pie": "El existencialista que sostuvo que «la existencia precede a la esencia»: no nacemos con una naturaleza fija, sino que nos hacemos con lo que elegimos.",
  "tema": "fil-t2",
  "license": "Dominio público",
  "artist": "Daniel Cande"
 },
 {
  "f": "media/retratos/museo/beauvoir.jpg",
  "t": "Simone de Beauvoir",
  "pie": "Dibujo de la autora de El segundo sexo. Con su frase «No se nace mujer: se llega a serlo» mostró cuánto de lo que somos es cultura y no solo biología.",
  "tema": "fil-t2",
  "license": "CC BY 2.0",
  "artist": "aeneastudio"
 },
 {
  "f": "media/retratos/museo2/camus.jpg",
  "t": "Albert Camus",
  "pie": "Escritor y filósofo, premio Nobel en 1957. Pensó lo absurdo: el choque entre nuestra necesidad de sentido y un mundo que no responde.",
  "tema": "fil-t2",
  "license": "Dominio público",
  "artist": "United Press International"
 },
 {
  "f": "media/retratos/museo/ortega.jpg",
  "t": "José Ortega y Gasset",
  "pie": "«Yo soy yo y mi circunstancia»: para Ortega, el ser humano no tiene una naturaleza ya hecha, sino una vida que tiene que ir haciendo.",
  "tema": "fil-t2",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo/descartes.jpg",
  "t": "René Descartes (según Frans Hals)",
  "pie": "Para Descartes somos una mente que piensa unida a un cuerpo que funciona como una máquina. Ese dualismo deja abierta la pregunta de cómo se relacionan ambos.",
  "tema": "fil-t2",
  "license": "Dominio público",
  "artist": "Según Frans Hals"
 },
 {
  "f": "media/retratos/museo/locke.jpg",
  "t": "John Locke (John Greenhill)",
  "pie": "Locke ligó la identidad personal a la conciencia y la memoria: sigo siendo la misma persona mientras puedo recordar lo que hice.",
  "tema": "fil-t2",
  "license": "Dominio público",
  "artist": "John Greenhill"
 },
 {
  "f": "media/retratos/museo/platon.jpg",
  "t": "Platón",
  "pie": "Busto del filósofo que vio en el alma lo más propio del ser humano: un alma inmortal que, según él, vive como prisionera en el cuerpo.",
  "tema": "fil-t2",
  "license": "CC0",
  "artist": "Jpergrc (foto)"
 },
 {
  "f": "media/retratos/museo/kant.jpg",
  "t": "Immanuel Kant (Johann Gottlieb Becker)",
  "pie": "Para Kant, el ser humano es racional, libre y autónomo, y por eso tiene dignidad: es un fin en sí mismo, nunca un simple medio.",
  "tema": "fil-t2",
  "license": "Dominio público",
  "artist": "Johann Gottlieb Becker"
 },
 {
  "f": "media/galeria_museo/temas2/romanticismo_idealismo_Friedrich_Caspar_David_-_Mönch_am_Meer_-_Alte_Nationalgalerie_in_Berlin.jpg",
  "t": "El monje junto al mar (Friedrich)",
  "pie": "Una figura diminuta frente al mar y un cielo inmenso. El cuadro plantea la pregunta por el lugar y el sentido de la vida humana.",
  "tema": "fil-t2",
  "license": "Dominio público",
  "artist": "Caspar David Friedrich"
 },
 {
  "f": "media/galeria_museo/temas2/romanticismo_idealismo_Abtei_im_Eichwald-_Caspar_David_Friedrich_-WUS03167.jpg",
  "t": "La abadía en el robledal (Friedrich)",
  "pie": "Una procesión de monjes avanza por la nieve hacia las ruinas de una iglesia, entre árboles desnudos. Saber que vamos a morir forma parte de la pregunta por el sentido de la existencia.",
  "tema": "fil-t2",
  "license": "CC0",
  "artist": "Caspar David Friedrich"
 },
 {
  "f": "media/retratos/museo2/montaigne.jpg",
  "t": "Michel de Montaigne",
  "pie": "Su lema era «¿Qué sé yo?». Recuperó el escepticismo antiguo para examinar con honestidad los límites de lo que creemos saber.",
  "tema": "fil-t3",
  "license": "Dominio público",
  "artist": "J. C. G. Fritzsch (grabado)"
 },
 {
  "f": "media/galeria_museo/extra3/goya-el-sueno-de-la-razon-produce-monstruos.jpg",
  "t": "El sueño de la razón produce monstruos (Goya)",
  "pie": "Un hombre dormido sobre su mesa, rodeado de búhos y murciélagos. Cuando la razón se adormece, crecen los engaños: una advertencia que vale también para los bulos de hoy.",
  "tema": "fil-t3",
  "license": "Dominio público",
  "artist": "Francisco de Goya"
 },
 {
  "f": "media/galeria_museo/extra3/vermeer-el-astronomo.jpg",
  "t": "El astrónomo (Vermeer)",
  "pie": "Un sabio estudia un globo celeste junto a un libro abierto. La ciencia moderna une la observación, la medida y la teoría.",
  "tema": "fil-t3",
  "license": "Dominio público",
  "artist": "Johannes Vermeer"
 },
 {
  "f": "media/galeria_museo/extra3/vermeer-el-geografo.jpg",
  "t": "El geógrafo (Vermeer)",
  "pie": "Con un compás en la mano, el geógrafo se detiene a pensar ante sus mapas. Conocer no es solo acumular datos: también es interpretarlos.",
  "tema": "fil-t3",
  "license": "Dominio público",
  "artist": "Johannes Vermeer"
 },
 {
  "f": "media/retratos/museo2/kepler.jpg",
  "t": "Johannes Kepler",
  "pie": "Descubrió que los planetas describen órbitas elípticas y no circulares. Tuvo que abandonar su hipótesis inicial porque no encajaba con las observaciones: así avanza la ciencia.",
  "tema": "fil-t3",
  "license": "Dominio público",
  "artist": "Wellcome Collection"
 },
 {
  "f": "media/retratos/museo2/emilie-chatelet.jpg",
  "t": "Émilie du Châtelet (Marianne Loir)",
  "pie": "Matemática y física de la Ilustración. Tradujo al francés y comentó los Principia de Newton.",
  "tema": "fil-t3",
  "license": "Dominio público",
  "artist": "Marianne Loir"
 },
 {
  "f": "media/retratos/museo/hipatia.jpg",
  "t": "Hipatia (Charles William Mitchell)",
  "pie": "Imagen romántica de la matemática y filósofa de Alejandría, asesinada a comienzos del siglo V. Su figura recuerda que el saber ha tenido que defenderse a menudo frente al fanatismo.",
  "tema": "fil-t3",
  "license": "Dominio público",
  "artist": "Charles William Mitchell"
 },
 {
  "f": "media/galeria_museo/epocas/ilustracion_Encyclopedie_frontispice_full.jpg",
  "t": "Frontispicio de la Enciclopedia (Cochin)",
  "pie": "En el centro, la Verdad aparece cubierta por un velo, y la Razón y la Filosofía tratan de retirarlo. Conocer es desvelar lo que está oculto.",
  "tema": "fil-t3",
  "license": "Dominio público",
  "artist": "Charles-Nicolas Cochin / Benoît-Louis Prévost"
 },
 {
  "f": "media/retratos/museo2/ptolomeo.jpg",
  "t": "Claudio Ptolomeo",
  "pie": "Grabado del astrónomo que situó la Tierra inmóvil en el centro del universo. Su sistema funcionó durante siglos, hasta que nuevas observaciones obligaron a abandonarlo.",
  "tema": "fil-t3",
  "license": "Dominio público",
  "artist": "Wellcome Collection"
 },
 {
  "f": "media/galeria_museo/temas2/positivismo_ciencia_The_Royal_Institution_Albemarle_Street_the_laboratory_Eng_Wellcome_M0009405.jpg",
  "t": "El laboratorio de la Royal Institution (Londres)",
  "pie": "Grabado antiguo de un laboratorio científico. La ciencia se hace con instrumentos, con experimentos que otros pueden repetir y con una comunidad que comprueba los resultados.",
  "tema": "fil-t3",
  "license": "CC BY 4.0",
  "artist": "Wellcome Collection"
 },
 {
  "f": "media/galeria_museo/extra3/rafael-escuela-de-atenas-platon-y-aristotele.jpg",
  "t": "Platón y Aristóteles en La Escuela de Atenas (Rafael)",
  "pie": "Platón señala hacia arriba, hacia el mundo de las Ideas; Aristóteles extiende la mano hacia la tierra. Dos respuestas a la pregunta de qué es lo real.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": "Rafael"
 },
 {
  "f": "media/retratos/museo2/heraclito.jpg",
  "t": "Heráclito, «el filósofo que llora»",
  "pie": "Busto de porcelana del siglo XVIII. Para Heráclito todo cambia: no podemos bañarnos dos veces en el mismo río.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": "Manufactura de porcelana de Viena"
 },
 {
  "f": "media/retratos/museo2/democrito.jpg",
  "t": "Demócrito",
  "pie": "Busto del filósofo que afirmó que todo está hecho de átomos indivisibles y vacío: una idea metafísica que, siglos después, la ciencia retomó.",
  "tema": "fil-metafisica",
  "license": "CC BY 2.0",
  "artist": "Afshin Darian (foto)"
 },
 {
  "f": "media/retratos/museo/spinoza.jpg",
  "t": "Baruch Spinoza",
  "pie": "Defendió que solo existe una sustancia, «Dios o la Naturaleza», de la que el pensamiento y la materia son dos aspectos. Es el gran ejemplo de monismo.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo2/berkeley.jpg",
  "t": "George Berkeley (John Smibert)",
  "pie": "«Ser es ser percibido»: para este filósofo idealista, una mesa no es más que el conjunto de percepciones que tenemos de ella.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": "John Smibert"
 },
 {
  "f": "media/retratos/museo2/anselmo.jpg",
  "t": "Anselmo de Canterbury",
  "pie": "Grabado del autor del argumento ontológico: Dios es «aquello mayor que lo cual nada puede pensarse» y, por tanto, tiene que existir.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo/aquino.jpg",
  "t": "Tomás de Aquino (Carlo Crivelli)",
  "pie": "Propuso cinco vías para demostrar la existencia de Dios a partir del mundo que vemos: el movimiento, las causas, el orden de la naturaleza…",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": "Carlo Crivelli"
 },
 {
  "f": "media/retratos/museo2/pascal.jpg",
  "t": "Blaise Pascal (dibujo antiguo)",
  "pie": "Dibujo con la nota manuscrita «retrato del señor Pascal». Su célebre apuesta no prueba que Dios exista: sostiene que conviene creer.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo2/isabel-bohemia.jpg",
  "t": "Isabel de Bohemia (Gerard van Honthorst)",
  "pie": "En sus cartas de 1643 preguntó a Descartes cómo puede una mente sin extensión mover el cuerpo. Es la gran objeción al dualismo.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": "Gerard van Honthorst"
 },
 {
  "f": "media/retratos/museo2/hobbes.jpg",
  "t": "Thomas Hobbes",
  "pie": "Materialista: para él todo lo que existe es cuerpo en movimiento, también el pensamiento. Por eso defendió que la libertad es compatible con que todo tenga una causa.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/extra3/rafael-la-disputa-del-sacramento.jpg",
  "t": "La disputa del Sacramento (Rafael)",
  "pie": "Frente a La Escuela de Atenas, en la misma sala del Vaticano, Rafael pintó la teología: el cielo arriba y los sabios debatiendo abajo. ¿Puede la razón hablar de Dios?",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": "Rafael"
 },
 {
  "f": "media/retratos/museo2/kierkegaard.jpg",
  "t": "Søren Kierkegaard",
  "pie": "Para Kierkegaard, a Dios no se llega con argumentos, sino con un «salto» de fe: una decisión personal que la razón no puede garantizar.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": "Luplau Janssen"
 },
 {
  "f": "media/galeria_museo/extra3/wright-of-derby-la-leccion-del-planetario.jpg",
  "t": "La lección del planetario (Wright of Derby)",
  "pie": "Un sabio explica un modelo mecánico del sistema solar a la luz de una lámpara. Si el universo funciona como un mecanismo de relojería, ¿queda sitio para la libertad?",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": "Joseph Wright of Derby"
 },
 {
  "f": "media/retratos/museo2/lucrecio.jpg",
  "t": "Lucrecio y el azar",
  "pie": "El poeta epicúreo señala una lluvia de partículas que sale de un globo con la palabra «Casus» (azar). Para los atomistas todo es átomos y vacío; Epicuro añadió una pequeña desviación de los átomos para dejar sitio a la libertad.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": "Wellcome Collection"
 },
 {
  "f": "media/galeria_museo/epocas/revolucion_cientifica_Cellarius_Harmonia_Macrocosmica_Scenographia_Systematis_CopernicaniF.jpg",
  "t": "El sistema de Copérnico (Cellarius, 1661)",
  "pie": "Lámina de un atlas celeste con el Sol en el centro. Parece que el Sol gira a nuestro alrededor, pero es la Tierra la que se mueve: la apariencia no siempre coincide con la realidad.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": "Andreas Cellarius"
 },
 {
  "f": "media/galeria_museo/temas2/siglo_xxi_Data_center_roof.jpg",
  "t": "Un centro de datos",
  "pie": "Hileras de equipos de refrigeración sobre el tejado de un centro de datos. En instalaciones así funcionan las inteligencias artificiales: ¿pueden pensar o solo parece que piensan?",
  "tema": "fil-metafisica",
  "license": "CC0",
  "artist": "Rsparks3 (foto)"
 },
 {
  "f": "media/retratos/museo2/boecio.jpg",
  "t": "Boecio y la rueda de la Fortuna",
  "pie": "Miniatura de una edición francesa de La consolación de la filosofía: Boecio conversa con dos figuras femeninas junto a la rueda de la Fortuna, que sube y baja a los hombres. La obra se pregunta cómo encaja la libertad humana con el destino y con un Dios que lo sabe todo.",
  "tema": "fil-metafisica",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo/agustin.jpg",
  "t": "Agustín de Hipona",
  "pie": "Grabado del autor de las Confesiones, que se preguntó: «¿Qué es, pues, el tiempo? Si nadie me lo pregunta, lo sé; si quiero explicárselo a quien me lo pregunta, no lo sé».",
  "tema": "fil-metafisica",
  "license": "CC BY 4.0",
  "artist": "Wellcome Collection"
 },
 {
  "f": "media/retratos/museo2/gorgias.jpg",
  "t": "Gorgias de Leontinos",
  "pie": "Grabado del gran maestro de retórica. Los sofistas enseñaban a persuadir; la lógica se pregunta otra cosa: si la conclusión se sigue de verdad de las razones.",
  "tema": "fil-t4",
  "license": "Dominio público",
  "artist": "Giuseppe Emanuele Ortolani / C. Biondi"
 },
 {
  "f": "media/retratos/museo/socrates.jpg",
  "t": "Sócrates (Museos Capitolinos)",
  "pie": "Busto antiguo del filósofo que discutía en la plaza pública. Con sus preguntas llevaba al interlocutor a descubrir las contradicciones de sus propias opiniones.",
  "tema": "fil-t4",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo2/ockham.jpg",
  "t": "Guillermo de Ockham",
  "pie": "Esbozo en un manuscrito medieval con la leyenda «frater Occham iste». La «navaja de Ockham» aconseja no multiplicar los supuestos sin necesidad: entre dos explicaciones, mejor la más sencilla.",
  "tema": "fil-t4",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo2/russell.jpg",
  "t": "Bertrand Russell",
  "pie": "Busto de bronce del lógico que, con Whitehead, intentó derivar toda la aritmética de la lógica en los Principia Mathematica.",
  "tema": "fil-t4",
  "license": "CC0",
  "artist": "William Timym"
 },
 {
  "f": "media/galeria_museo/temas2/analitica_lenguaje_Tractatus_title_page.jpg",
  "t": "Portada del Tractatus de Wittgenstein (1922)",
  "pie": "Una obra breve, organizada en proposiciones numeradas como un sistema lógico. Busca los límites de lo que el lenguaje puede decir con sentido.",
  "tema": "fil-t4",
  "license": "Dominio público",
  "artist": "Ludwig Wittgenstein"
 },
 {
  "f": "media/galeria_museo/temas2/analitica_lenguaje_Logical_positivists_collage_free.png",
  "t": "Los positivistas lógicos",
  "pie": "Collage con retratos de filósofos del positivismo lógico. Querían usar la lógica moderna para aclarar el lenguaje de la ciencia y separar lo que tiene sentido de lo que no.",
  "tema": "fil-t4",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/epocas/edad_media_Henry_of_Germany_delivering_a_lecture_to_university_students_in_Bologna_by_Laur.jpg",
  "t": "Una clase en la universidad de Bolonia",
  "pie": "Miniatura medieval de Laurentius de Voltolina: un maestro lee desde la cátedra ante sus estudiantes. En las universidades medievales, la lógica era una materia básica de todos los estudios.",
  "tema": "fil-t4",
  "license": "Dominio público",
  "artist": "Laurentius de Voltolina"
 },
 {
  "f": "media/galeria_museo/temas2/atenas_clasica_View_of_the_Acropolis_of_Athens_and_Mount_Lycabettus_from_the_Orator_s_Bema_on_the_Pnyx_on_23_September_2.jpg",
  "t": "La Acrópolis vista desde la tribuna de la Pnyx",
  "pie": "Desde esta tribuna de piedra hablaban los oradores a la asamblea de Atenas. Allí había que convencer con argumentos… o con trucos retóricos: el terreno de las falacias.",
  "tema": "fil-t4",
  "license": "CC0",
  "artist": "George E. Koronaios (foto)"
 },
 {
  "f": "media/retratos/museo2/protagoras.jpg",
  "t": "Protágoras (Ribera, 1637)",
  "pie": "Retrato imaginado por el pintor. Protágoras enseñaba que sobre cualquier asunto pueden darse dos argumentos opuestos: argumentar bien exige examinar los dos.",
  "tema": "fil-t4",
  "license": "Dominio público",
  "artist": "Jusepe de Ribera"
 },
 {
  "f": "media/retratos/museo/wittgenstein.jpg",
  "t": "Ludwig Wittgenstein (Moritz Nähr)",
  "pie": "En su Tractatus empleó tablas de verdad para mostrar cuándo una proposición compuesta es verdadera o falsa.",
  "tema": "fil-t4",
  "license": "Dominio público",
  "artist": "Moritz Nähr"
 },
 {
  "f": "media/galeria_museo/temas2/siglo_xxi_Internet_map_1024_-_transparent_inverted.png",
  "t": "Mapa de Internet (Opte Project)",
  "pie": "Cada línea es una conexión entre redes de ordenadores. Todo ese tráfico lo procesan circuitos que calculan con 0 y 1, según el álgebra de Boole.",
  "tema": "fil-t4",
  "license": "CC BY 2.0",
  "artist": "The Opte Project"
 },
 {
  "f": "media/retratos/museo/aspasia.jpg",
  "t": "Aspasia de Mileto",
  "pie": "Grabado de una gema antigua que se atribuyó a Aspasia, compañera de Pericles. En el Menéxeno de Platón, Sócrates afirma con ironía que aprendió de ella el arte de los discursos.",
  "tema": "fil-t4",
  "license": "Dominio público",
  "artist": "Giovanni Angelo Canini"
 },
 {
  "f": "media/retratos/museo/nietzsche.jpg",
  "t": "Friedrich Nietzsche en 1882",
  "pie": "Sospechó de la moral heredada: quiso averiguar de dónde vienen nuestros valores y a quién benefician, y propuso crear valores nuevos.",
  "tema": "fil-t5",
  "license": "Dominio público",
  "artist": "Gustav-Adolf Schultze"
 },
 {
  "f": "media/retratos/museo2/freud.jpg",
  "t": "Sigmund Freud",
  "pie": "Con Marx y Nietzsche, uno de los «maestros de la sospecha»: nuestra conciencia moral podría tener raíces que no conocemos.",
  "tema": "fil-t5",
  "license": "Dominio público",
  "artist": "Library of Congress"
 },
 {
  "f": "media/galeria_museo/extra3/david-el-juramento-de-los-horacios.jpg",
  "t": "El juramento de los Horacios (copia de Girodet según David)",
  "pie": "Tres hermanos juran luchar por Roma mientras las mujeres de la familia lloran a un lado. El deber y los afectos chocan: un dilema moral pintado.",
  "tema": "fil-t5",
  "license": "Dominio público",
  "artist": "Anne-Louis Girodet, según Jacques-Louis David"
 },
 {
  "f": "media/galeria_museo/extra3/wright-of-derby-experimento-con-un-pajaro-en.jpg",
  "t": "Experimento con un pájaro en la bomba de aire (Wright of Derby, 1768)",
  "pie": "Un científico vacía de aire el recipiente donde está el pájaro ante espectadores que miran, dudan o se tapan los ojos. Plantea la pregunta de la ética animal: ¿pueden sufrir?",
  "tema": "fil-t5",
  "license": "Dominio público",
  "artist": "Joseph Wright of Derby"
 },
 {
  "f": "media/retratos/museo2/hipocrates.jpg",
  "t": "Hipócrates",
  "pie": "Grabado del médico griego al que se atribuye el juramento hipocrático. La bioética actual sigue discutiendo cómo hacer el bien al paciente sin dañarlo y respetando su autonomía.",
  "tema": "fil-t5",
  "license": "Dominio público",
  "artist": "Wellcome Collection"
 },
 {
  "f": "media/galeria_museo/temas2/siglo_xxi_Blue_Marble_2002.png",
  "t": "La Tierra vista desde el espacio (Blue Marble, 2002)",
  "pie": "Imagen de satélite de la NASA. La ética ambiental se pregunta qué deberes tenemos con el planeta y con las generaciones futuras.",
  "tema": "fil-t5",
  "license": "Dominio público",
  "artist": "NASA"
 },
 {
  "f": "media/galeria_museo/temas2/utilitarismo_Panopticon-_or_the_inspection-house_Fleuron_N037874-3.png",
  "t": "Plano del panóptico de Bentham (1791)",
  "pie": "Desde un punto central se vigilan todas las secciones de la prisión. Bentham la diseñó con criterio utilitarista: conseguir el máximo resultado con el mínimo coste.",
  "tema": "fil-t5",
  "license": "Dominio público",
  "artist": "Jeremy Bentham"
 },
 {
  "f": "media/galeria_museo/temas2/utilitarismo_Bpt6k10470488_f295.jpg",
  "t": "Un callejón pobre de Londres (Gustave Doré)",
  "pie": "Grabado del Londres victoriano: familias sin recursos a la luz de una farola. La ética aplicada se pregunta qué deberes tenemos ante la pobreza y la desigualdad.",
  "tema": "fil-t5",
  "license": "Dominio público",
  "artist": "Gustave Doré"
 },
 {
  "f": "media/galeria_museo/temas2/utilitarismo_Bpt6k10470488_f277.jpg",
  "t": "Londres desde el tren (Gustave Doré)",
  "pie": "Hileras de casas obreras apiñadas junto a las vías, en el Londres industrial del siglo XIX. El utilitarismo propuso juzgar las leyes por la felicidad que producen al mayor número.",
  "tema": "fil-t5",
  "license": "Dominio público",
  "artist": "Gustave Doré"
 },
 {
  "f": "media/retratos/museo/aristoteles.jpg",
  "t": "Aristóteles (Palazzo Altemps, Roma)",
  "pie": "Copia romana de un retrato atribuido a Lisipo. Para Aristóteles, el fin de la vida humana es la felicidad (eudaimonía), que se alcanza practicando la virtud.",
  "tema": "fil-t5",
  "license": "Dominio público",
  "artist": "Según Lisipo"
 },
 {
  "f": "media/galeria_museo/epocas/helenismo_Alexander_Battle_of_Issus_Mosaic.jpg",
  "t": "El mosaico de Alejandro (Pompeya)",
  "pie": "Alejandro Magno a caballo frente al rey persa Darío, en un mosaico romano que copia una pintura griega. Con sus conquistas, la polis pierde su autonomía.",
  "tema": "fil-helenismo",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo/alejandro.jpg",
  "t": "Alejandro Magno (British Museum)",
  "pie": "Busto del rey macedonio que fue alumno de Aristóteles. Su imperio abrió un mundo más grande e inseguro, en el que la filosofía se vuelve hacia la vida personal.",
  "tema": "fil-helenismo",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/extra3/mapa-los-reinos-helenisticos-diadocos.jpg",
  "t": "Los reinos helenísticos (mapa de Shepherd)",
  "pie": "Tras la muerte de Alejandro, sus generales se repartieron el imperio en grandes reinos. En ese mundo nacen las escuelas que buscan la felicidad individual.",
  "tema": "fil-helenismo",
  "license": "Dominio público",
  "artist": "William R. Shepherd"
 },
 {
  "f": "media/galeria_museo/extra3/mapa-el-imperio-de-alejandro.jpg",
  "t": "El imperio de Alejandro (mapa del siglo XIX)",
  "pie": "Del Mediterráneo a la India: un imperio inmenso en el que el ciudadano de una pequeña polis se convierte en súbdito de un reino lejano.",
  "tema": "fil-helenismo",
  "license": "Dominio público",
  "artist": "Friedrich von Stülpnagel"
 },
 {
  "f": "media/galeria_museo/epocas/academia_liceo_Stoa_of_Attalos_Athens_Agora.jpg",
  "t": "La Stoa de Átalo, en el ágora de Atenas",
  "pie": "Este pórtico reconstruido permite imaginar cómo eran las stoas. Los estoicos tomaron su nombre de otra, la Stoa Pintada, donde enseñaba Zenón de Citio.",
  "tema": "fil-helenismo",
  "license": "CC BY 3.0",
  "artist": "Ian W. Scott (foto)"
 },
 {
  "f": "media/retratos/museo2/antistenes.jpg",
  "t": "Antístenes",
  "pie": "Grabado del discípulo de Sócrates al que la tradición considera precursor del cinismo: para ser feliz basta la virtud.",
  "tema": "fil-helenismo",
  "license": "Dominio público",
  "artist": "Wellcome Collection"
 },
 {
  "f": "media/retratos/museo2/cleantes.jpg",
  "t": "Cleantes",
  "pie": "Grabado del sucesor de Zenón al frente de la escuela estoica. Su Himno a Zeus celebra el orden racional que gobierna el cosmos.",
  "tema": "fil-helenismo",
  "license": "Dominio público",
  "artist": "Girolamo Olgiati"
 },
 {
  "f": "media/retratos/museo2/crisipo.jpg",
  "t": "Crisipo (estudio de un busto, 1826)",
  "pie": "Dibujo académico de un busto antiguo del gran sistematizador del estoicismo. Para los estoicos, el sabio vive de acuerdo con la razón que gobierna la naturaleza.",
  "tema": "fil-helenismo",
  "license": "CC0",
  "artist": "Johannes du Burck"
 },
 {
  "f": "media/retratos/museo2/sexto-empirico.jpg",
  "t": "Sexto Empírico",
  "pie": "Médico y filósofo escéptico. Sus obras recogen la escuela de Pirrón: ante cada argumento cabe otro de igual fuerza, y suspender el juicio trae la calma.",
  "tema": "fil-helenismo",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/epocas/roma_estoica_Marcus_Aurelius_Capitoline_Hill_September_2015_1.jpg",
  "t": "Estatua ecuestre de Marco Aurelio en el Capitolio (Roma)",
  "pie": "El emperador dejó escritas sus reflexiones estoicas en las Meditaciones. El estoicismo lo practicaron tanto un esclavo, Epicteto, como un emperador.",
  "tema": "fil-helenismo",
  "license": "Dominio público",
  "artist": "Alvesgaspar (foto)"
 },
 {
  "f": "media/retratos/museo/arendt.jpg",
  "t": "Hannah Arendt en 1933",
  "pie": "Estudió cómo los totalitarismos destruyen la libertad y la pluralidad, y defendió la política como acción conjunta entre iguales.",
  "tema": "fil-t6",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo2/rawls.jpg",
  "t": "John Rawls de joven (1937)",
  "pie": "Rawls propuso imaginar las reglas de una sociedad justa tras un «velo de ignorancia», sin saber qué lugar ocuparíamos en ella.",
  "tema": "fil-t6",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/retratos/museo/mill.jpg",
  "t": "John Stuart Mill (John Watkins, 1865)",
  "pie": "Defendió la libertad individual frente a la tiranía de la mayoría y escribió La sujeción de la mujer (1869) a favor de la igualdad entre mujeres y hombres.",
  "tema": "fil-t6",
  "license": "Dominio público",
  "artist": "John Watkins"
 },
 {
  "f": "media/retratos/museo2/tomas-moro.jpg",
  "t": "Tomás Moro (según Holbein)",
  "pie": "Inventó la palabra utopía: una isla imaginaria que sirve para criticar, por contraste, las injusticias de la Inglaterra de su tiempo.",
  "tema": "fil-t6",
  "license": "Dominio público",
  "artist": "Wellcome Collection"
 },
 {
  "f": "media/galeria_museo/temas2/feminismo_Olympe_de_Gouges_19178_Découper.jpg",
  "t": "Olympe de Gouges",
  "pie": "En 1791 escribió la Declaración de los Derechos de la Mujer y de la Ciudadana, porque la de 1789 dejaba fuera a la mitad de la población.",
  "tema": "fil-t6",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/epocas/feminismo_Suffragette_parade_Mar_3_1913_Wash_D_C_LCCN2001704194.jpg",
  "t": "Desfile sufragista en Washington (1913)",
  "pie": "Miles de mujeres marcharon para reclamar el derecho al voto. La ciudadanía plena se conquistó con lucha política: nadie la concedió por sí sola.",
  "tema": "fil-t6",
  "license": "Dominio público",
  "artist": "George Grantham Bain Collection"
 },
 {
  "f": "media/galeria_museo/temas2/contrato_social_Title_page_of_John_Locke_Two_Treatises_of_Government_London_1690_LCCN2002710224.jpg",
  "t": "Dos tratados sobre el gobierno civil (Locke, 1690)",
  "pie": "Portada de la primera edición. Locke defiende que el poder nace del consentimiento y debe proteger la vida, la libertad y la propiedad; si no lo hace, el pueblo puede resistir.",
  "tema": "fil-t6",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/temas2/revolucion_francesa_Jacques-Louis_David_-_Serment_du_Jeu_de_paume_le_20_juin_1789_-_P67_-_musée_Carnavalet_-_7.jpg",
  "t": "El juramento del Juego de Pelota (David)",
  "pie": "En junio de 1789, los diputados del Tercer Estado juran no separarse hasta dar a Francia una constitución. La soberanía pasa del rey a la nación.",
  "tema": "fil-t6",
  "license": "CC0",
  "artist": "Jacques-Louis David"
 },
 {
  "f": "media/galeria_museo/epocas/revolucion_francesa_Prise_de_la_Bastille.jpg",
  "t": "La toma de la Bastilla (Houël, 1789)",
  "pie": "El pueblo de París asalta la fortaleza-prisión, símbolo del poder absoluto. ¿Cuándo es legítimo rebelarse contra un gobierno?",
  "tema": "fil-t6",
  "license": "Dominio público",
  "artist": "Jean-Pierre Houël"
 },
 {
  "f": "media/retratos/museo2/cristina-pizan.jpg",
  "t": "Cristina de Pizán presenta su libro",
  "pie": "Miniatura medieval en la que la escritora entrega su obra a la reina. En La ciudad de las damas defendió la dignidad y la capacidad de las mujeres, siglos antes del feminismo.",
  "tema": "fil-t6",
  "license": "Dominio público",
  "artist": ""
 },
 {
  "f": "media/galeria_museo/temas2/industrializacion_William_Bell_Scott_-_Iron_and_Coal.jpg",
  "t": "Hierro y carbón (William Bell Scott)",
  "pie": "Obreros de una fundición en la Inglaterra industrial del siglo XIX. Liberalismo y socialismo discuten cómo repartir los frutos del trabajo y qué papel debe tener el Estado.",
  "tema": "fil-t6",
  "license": "Dominio público",
  "artist": "William Bell Scott"
 },
 {
  "f": "media/retratos/museo/hegel.jpg",
  "t": "Hegel (Jakob Schlesinger, 1831)",
  "pie": "Para Hegel, el arte es una de las formas en que el espíritu se conoce a sí mismo, junto a la religión y la filosofía.",
  "tema": "fil-t7",
  "license": "Dominio público",
  "artist": "Jakob Schlesinger"
 },
 {
  "f": "media/retratos/museo2/heidegger.jpg",
  "t": "Martin Heidegger durante una conferencia",
  "pie": "En El origen de la obra de arte sostiene que la obra no se limita a copiar el mundo: abre un mundo y deja que aparezca la verdad.",
  "tema": "fil-t7",
  "license": "CC BY 4.0",
  "artist": "Willy Pragher"
 },
 {
  "f": "media/retratos/museo2/plotino.jpg",
  "t": "Plotino (Museo de Ostia)",
  "pie": "Cabeza antigua que se atribuye al filósofo. Plotino objetó que la belleza no puede ser solo proporción: también son bellas cosas simples, como la luz.",
  "tema": "fil-t7",
  "license": "CC BY 3.0",
  "artist": "Sailko (foto)"
 },
 {
  "f": "media/galeria_museo/epocas/helenismo_Laocoon_group_left_part_Pio_Clementino_Museum_Vatican_Museums.jpg",
  "t": "Laocoonte y sus hijos (Museos Vaticanos)",
  "pie": "El sacerdote troyano y sus hijos luchan contra las serpientes. Una obra clave para pensar cómo puede el arte representar el dolor.",
  "tema": "fil-t7",
  "license": "CC BY 4.0",
  "artist": "Quentin Lowagie (foto)"
 },
 {
  "f": "media/galeria_museo/temas2/helenismo_Nike_of_Samothrace_Paris_Louvre.jpg",
  "t": "La Victoria de Samotracia (Louvre)",
  "pie": "La diosa de la victoria se posa en la proa de una nave con las alas abiertas. El movimiento y el viento convertidos en piedra.",
  "tema": "fil-t7",
  "license": "CC0",
  "artist": "Wilfredor (foto)"
 },
 {
  "f": "media/galeria_museo/antiguedad/arte_discobolo.jpg",
  "t": "El Discóbolo de Mirón",
  "pie": "Copia romana de un bronce griego: el atleta, detenido justo antes de lanzar. El arte clásico buscaba el equilibrio y la proporción del cuerpo.",
  "tema": "fil-t7",
  "license": "CC BY-SA 4.0",
  "artist": "Livioandronico2013 (foto)"
 },
 {
  "f": "media/galeria_museo/antiguedad/arte_kritios.jpg",
  "t": "El Efebo de Kritios",
  "pie": "Hacia 480 a. C., el cuerpo deja de estar rígido y apoya el peso en una pierna. Es el paso a la escultura clásica y a su ideal de naturalidad y medida.",
  "tema": "fil-t7",
  "license": "CC BY-SA 2.5",
  "artist": "Marsyas (foto)"
 },
 {
  "f": "media/galeria_museo/extra3/friedrich-el-mar-de-hielo.jpg",
  "t": "El mar de hielo (Friedrich)",
  "pie": "Placas de hielo levantadas aplastan los restos de un barco. Lo sublime: una naturaleza que nos sobrepasa y produce a la vez temor y fascinación.",
  "tema": "fil-t7",
  "license": "Dominio público",
  "artist": "Caspar David Friedrich"
 },
 {
  "f": "media/galeria_museo/antiguedad/atenas_richmond_agamenon.jpg",
  "t": "El público de Atenas ante el Agamenón (Richmond, 1884)",
  "pie": "El pintor imagina a los atenienses en el teatro durante una tragedia de Esquilo. Para Aristóteles, la tragedia produce catarsis: al vivir el miedo y la compasión, el espectador se purifica.",
  "tema": "fil-t7",
  "license": "Dominio público",
  "artist": "William Blake Richmond"
 },
 {
  "f": "media/galeria_museo/temas2/revolucion_francesa_Jacques-Louis_David_-_Marat_assassinated_-_Google_Art_Project_2.jpg",
  "t": "La muerte de Marat (David, 1793)",
  "pie": "El revolucionario asesinado aparece casi como un mártir. Un ejemplo del papel político del arte: emocionar para defender una causa.",
  "tema": "fil-t7",
  "license": "Dominio público",
  "artist": "Jacques-Louis David"
 },
 {
  "f": "media/galeria_museo/epocas/revolucion_industrial_Philipp_Jakob_Loutherbourg_d_J_Coalbrookdale_by_Night_WGA13730.jpg",
  "t": "Coalbrookdale de noche (Loutherbourg, 1801)",
  "pie": "Los hornos de una fundición iluminan el cielo nocturno. También la industria podía despertar la experiencia de lo sublime.",
  "tema": "fil-t7",
  "license": "Dominio público",
  "artist": "Philip James de Loutherbourg"
 },
 {
  "f": "media/galeria_museo/temas2/reforma_Lucas_Cranach_I_Le_lavement_des_pieds.jpg",
  "t": "Pasional de Cristo y del Anticristo (Cranach)",
  "pie": "A la izquierda, Cristo lava los pies a sus discípulos; a la derecha, el papa ofrece el pie para que se lo besen. Imágenes enfrentadas al servicio de la propaganda protestante.",
  "tema": "fil-t7",
  "license": "Dominio público",
  "artist": "Lucas Cranach el Viejo"
 },
 {
  "f": "media/galeria_museo/antiguedad/arte_hermes_praxiteles.jpg",
  "t": "Hermes con Dioniso niño (Olimpia)",
  "pie": "Escultura atribuida a Praxíteles. La gracia suave del cuerpo muestra otra idea de belleza, más cercana y sensual que la del clasicismo anterior.",
  "tema": "fil-t7",
  "license": "CC BY-SA 2.0",
  "artist": "Dennis G. Jarvis (foto)"
 }
];
