"use strict";
/* ===== Mapas conceptuales (Markmap) =====
   Generado desde el vault NAGUSIA OBS (esquemas propios, traducidos).
   Añadir un mapa = una entrada { subject, tema, title, md }; `md` = esquema en viñetas. */
const MAPS = {
  "map-descartes":{ subject:"hf", tema:"Historia de la Filosofía · Descartes", title:"Descartes: la duda y el cogito", md:`# Descartes
## Duda metódica
- **Objetivo**: hallar verdades con **certeza absoluta**
- **Escepticismo radical**: dudar de todo hasta un fundamento firme
### Motivos de la duda
- **Los sentidos** — no son fiables, nos engañan
- **El sueño** — difícil distinguir sueño y vigilia
- **La razón** — también yerra (errores de cálculo)
- **El genio maligno** — ser poderoso que manipula el pensamiento; todo podría ser ilusión
## El cogito
- El genio maligno puede engañar sobre el cuerpo, los sentidos y el mundo
- Pero **no puede engañar** sobre el hecho de que **estoy dudando**
- La duda misma prueba la existencia del sujeto
- **"Pienso, luego existo"** (*cogito ergo sum*)
- Primera **verdad absoluta e indudable**
## Método
- El saber necesita **axiomas indudables**; modelo: la **matemática**
### Las cuatro reglas
- **Evidencia** — admitir solo ideas claras y distintas
- **Análisis** — dividir el problema en partes
- **Síntesis** — reconstruir de lo simple a lo complejo
- **Enumeración** — revisar todo el proceso
## Teoría de las sustancias
- **Res cogitans** — el pensamiento; sustancia pensante e inmaterial; nueva definición del ser humano
- **Res infinita** — Dios; la idea de perfección e infinito no puede venir de un ser imperfecto; **garante** de la verdad, no engaña
- **Res extensa** — la realidad física; garantizada por Dios frente al genio maligno
## Dualismo
- El ser humano es **unión de dos sustancias**
- **Alma** — res cogitans: inmaterial, autónoma, inmortal
- **Cuerpo** — res extensa: material, limitado, mortal
- Sustancias separadas pero que **interactúan**` },
  "map-kant":{ subject:"hf", tema:"Historia de la Filosofía · Kant", title:"Kant: razón teórica y práctica", md:`# Kant
## La razón
- **Uso teórico** — conocer
- **Uso práctico** — actuar moralmente
## Problema central
- **¿Puede la metafísica ser una ciencia?**
- La ciencia está formada por **juicios**
## Teoría del conocimiento
### Tipos de juicios
- **Analíticos** — a priori; universales y necesarios; no amplían el saber
- **Sintéticos** — a posteriori; probables; no científicos
- **Sintéticos a priori** — universales, necesarios y **amplían** el conocimiento
### Giro copernicano
- Conocimiento = **experiencia + entendimiento**
- Distinción **fenómeno / noúmeno**
- **Estética trascendental** — sensibilidad → fenómenos (materia y forma: espacio/tiempo)
- **Analítica trascendental** — entendimiento → categorías
- **Dialéctica trascendental** — razón → metafísica (alma, Dios, mundo); no es ciencia (**ilusión**)
## Ética (uso práctico)
- **Buena voluntad** — base de la moralidad
### Deber → imperativo categórico
- Ética **formal**: autonomía, universalidad, necesidad, a priori
### Interés → imperativo hipotético
- Ética **material**: heteronomía, particular, contingente, a posteriori
## Consecuencia final
- **Felicidad**, articulada mediante los **postulados** de la razón
- Libertad
- Inmortalidad del alma
- Dios` },
  "map-critica-razon-pura":{ subject:"hf", tema:"Historia de la Filosofía · Kant (obra)", title:"Estructura de la Crítica de la razón pura", md:`# Crítica de la razón pura
## Punto de partida
- **Prefacio** — examinar la razón antes de usarla
- **Introducción** — ¿cómo son posibles los **juicios sintéticos a priori**?
## Doctrina de los elementos
### Estética trascendental
- Formas a priori de la **sensibilidad**
- **Espacio** — forma del sentido externo
- **Tiempo** — forma del sentido interno
### Lógica trascendental
- Funciones a priori del **entendimiento**
#### Analítica trascendental
- Condiciones del **conocimiento científico**
- Analítica de los conceptos — **categorías**
- Analítica de los principios — juicios sintéticos a priori
#### Dialéctica trascendental
- **Ilusiones de la razón**
- Paralogismos — error sobre el **alma**
- Antinomias — contradicciones sobre el **mundo**
- Ideal de la razón pura — idea de **Dios**
## Doctrina del método
- **Disciplina** — uso correcto de la razón
- **Canon** — apertura a la razón práctica
- **Arquitectónica e historia** — sistema y límites del saber` },
  "map-ilustracion-modernidad":{ subject:"hf", tema:"Historia de la Filosofía · Ilustración", title:"La Ilustración y la crisis de la modernidad", md:`# Crisis de la modernidad
## Crisis de autoridad
- La modernidad rompe con la autoridad heredada
- Se despliega en **tres ejes**
## Eje epistémico
- **Racionalismo** y **empirismo** enfrentados
- Su síntesis: **criticismo** (Kant)
- **Idealismo trascendental**
- Límite: **fenómeno / noúmeno**
## Eje cultural-estético
- **Disputa de los Antiguos y los Modernos**
- Clasicistas frente a modernos
- **Leibniz** — imparcialidad
- Idea de **progreso**
## Eje político
- El uso de la razón en la vida pública
- Tensión **razonar / obedecer**
## Kant como respuesta
- Fija el **límite del conocimiento** (fenómeno/noúmeno)
- Distingue **uso público y privado** de la razón (razonar/obedecer)` },
  "map-san-agustin":{ subject:"hf", tema:"Historia de la Filosofía · San Agustín", title:"San Agustín: las dos ciudades", md:`# San Agustín
## Antropología
- El ser humano se debate entre cuerpo, libertad y alma
- **Cuerpo** — tiende al **amor desordenado** de los bienes sensibles
- **Libre albedrío** — elige
- **Alma / interioridad** — donde se halla el verdadero yo
## Ética, felicidad y salvación
- **Felicidad falsa** — buscar los bienes materiales como absolutos
- **Mal / pecado** — elegir bienes menores creyéndolos el Bien
- **Gracia** — la voluntad está herida y necesita la ayuda de Dios
- **Felicidad verdadera** — Dios como **Bien Supremo**, hallado en la interioridad
## Historia y política: las dos ciudades
- **Ciudad terrena** — nace del amor de sí (amor desordenado)
- **Ciudad de Dios** — nace del amor a Dios
- **Poder político** — puede buscar orden y paz, no la salvación
- **Dilema moral** — condenarse depende de nosotros; salvarse, no
## Metafísica y teología
- **Dios** crea el mundo **de la nada**
- **Providencia** — guía la historia de la humanidad
- **Predestinación** — Dios conoce y quiere el orden de la salvación
- **Razones eternas** — las ideas ejemplares están en la mente de Dios` },
  "map-platon":{ subject:"hf", tema:"Historia de la Filosofía · Platón", title:"Platón: Ideas, conocimiento y alma", md:`# Platón
## Ontología (dualismo)
### Mundo de las Ideas (inteligible)
- **Perfectas**, sin defecto
- **Inmutables** y **eternas**
- **Universales** — "la Belleza en sí"
### Mundo sensible
- **Material** y **cambiante**
- **Imperfecto** y **mortal**
- Copia de las Ideas
### Teoría de las Ideas
- Las Ideas son **ontológicamente primeras**
- Dan estructura profunda a la realidad
- Las cosas concretas son **copias** de las Ideas
## Epistemología (dualismo)
### Opinión (*doxa*)
- **Imaginación** — sombras, reflejos
- **Creencia** — percepción de lo sensible
### Ciencia (*episteme*)
- **Razón discursiva** — matemática, lógica
- **Intuición intelectual** — captar las Ideas (cima del saber)
## Antropología
- **Alma inmortal** — procede del mundo de las Ideas; transmigración
- **Anamnesis** — aprender es **recordar**
- **Tres partes del alma** — racional, irascible, concupiscible
## Alegorías
- **La caverna** — liberación de las sombras hacia la luz (las Ideas)
- **El amor (Banquete)** — de lo material a la Idea de Belleza` },
  "map-aristoteles":{ subject:"hf", tema:"Historia de la Filosofía · Aristóteles", title:"Aristóteles: alma, conocimiento y virtud", md:`# Aristóteles
## Teoría del conocimiento
- **Rechaza las ideas innatas** (contra Platón)
- El alma nace como **tabula rasa**
- Todo conocimiento parte de la **experiencia sensible**
- La **abstracción** capta lo universal
## Antropología (hilemorfismo)
- Unidad sustancial de **cuerpo (materia)** y **alma (forma)**
- No hay alma sin cuerpo
### Tipos de alma
- **Nutritiva** — plantas, animales, humanos
- **Sensitiva** — animales y humanos
- **Racional** (*noûs*) — solo los humanos
### Potencia y acto
- El ser humano actualiza sus **capacidades**
- **Animal racional y político**
## Ética
- Fin: **eudaimonía** — vivir según la razón
- **Virtud** = **término medio** (*mesótes*) entre dos vicios
### Clases de virtud
- **Éticas** — valentía, templanza (alma apetitiva)
- **Dianoéticas** — **prudencia** (*phronesis*), sabiduría (razón)
- La prudencia es el **timón** de la acción moral
### Desviaciones
- **Akrasia** — incontinencia: se sabe el bien pero no se actúa
- **Kakia** — vicio: el juicio mismo está corrompido
- La virtud se forma por **hábito**` },
  "map-helenismo":{ subject:"hf", tema:"Historia de la Filosofía · Helenismo", title:"Escuelas helenísticas", md:`# Filosofía helenística
## Contexto
- Época helenística (s. IV–I a.C.): **de la polis al imperio**
- Crisis política y existencial: pérdida de la ciudadanía
- Nueva función: **filosofía como terapia del alma**
- Fin común: **eudaimonía** (la buena vida)
## Epicureísmo
- **Epicuro** — "El Jardín"
- **Física** — materialismo y atomismo
- **Ética** — placer natural y necesario
- **Ataraxia** — serenidad del alma
- **Tetrafármaco** — no temer a dioses ni a la muerte
## Estoicismo
- **Zenón de Citio**; Séneca, Epicteto, Marco Aurelio
- **Logos** — razón universal del cosmos; **determinismo**
- **Virtud** — vivir conforme a la razón
- **Apatía** — dominio de las pasiones dañinas
- Distinguir lo que **depende de nosotros** y lo que no
## Cinismo
- **Antístenes**, **Diógenes** de Sínope
- La **naturaleza** como modelo frente a la convención
- **Autarquía** — autogobierno
- **Pobreza voluntaria** y **desvergüenza** (decir la verdad)
## Escepticismo
- **Pirrón**
- No hay **criterio seguro** de verdad
- **Epojé** — suspensión del juicio
- Conduce a la **ataraxia**` },
  "map-nietzsche":{ subject:"hf", tema:"Historia de la Filosofía · Nietzsche", title:"Nietzsche: crítica y vitalismo", md:`# Nietzsche
## Crítica de la tradición occidental
### Metafísica
- Se funda en el **Ser** (mundo aparente / mundo verdadero)
- Procede de **Platón** y del **cristianismo**
- Frente a ella propone el **Devenir**
### Conocimiento
- Basado en el **concepto** — busca esencias inmutables, universales, eternas
- Deriva en la **ciencia** — pretende ser única, objetiva, neutral
- Frente a ello propone **arte**, **perspectiva**, **metáfora**
### Religión
- Basada en la **trascendencia**; rechaza vida, cuerpo y mundo sensible
- **"Dios ha muerto"** → **nihilismo** (confusión y oportunidad)
### Moral
- Nace del **resentimiento**; ascetismo que niega el cuerpo
- Frente a ella propone la **transmutación de los valores**
## Propuesta vitalista
- Afirmación de la **vida**
- **Voluntad de poder** → **superhombre**
- **Eterno retorno**
- Alegoría: **camello, león, niño**` },
  "map-hegel":{ subject:"hf", tema:"Historia de la Filosofía · Hegel", title:"Hegel: dialéctica y Espíritu", md:`# Hegel
## Sistema filosófico
- **Idealismo absoluto**
- Filosofía **sistemática**
- Continúa y supera la síntesis de **Kant**
## Dialéctica
- **Tesis, antítesis, síntesis**
- **Negación de la negación**
- Autodesarrollo del **concepto**
## Fenomenología del Espíritu
- **Conciencia** — experiencia de la realidad
- **Certeza sensible** — primer momento
- **Percepción** — segundo momento
- **En sí** y **para sí** — las dos caras del objeto
- **Reflexión** — proceso del pensamiento
## Conceptos clave
- **Lo Absoluto** — unidad de sujeto y objeto
- **Sujeto-objeto** — unidad de pensamiento y ser
- **Entendimiento intuitivo**
## Influencia
- Schelling, Fichte, Hölderlin
- **Marx** — dialéctica materialista
- Teoría crítica` },
  "map-ideologia":{ subject:"hf", tema:"Historia de la Filosofía · Marx y Frankfurt", title:"Ideología y teoría crítica", md:`# Ideología
## El concepto en Marx
- **Sistema de ideas** de la clase dominante
- **Distorsión** de la realidad
- **Ocultamiento** de las relaciones sociales
- Se apoya en el **modo de producción**
## Crítica ideológica
- **Marx** — crítica de la ideología burguesa
- **Escuela de Frankfurt** — razón instrumental
- **Adorno** — industria cultural
## Historia del concepto
- Marx y el origen
- **Gramsci** y **Althusser**
- Otras perspectivas contemporáneas
## Conceptos vinculados
- **Alienación**
- **Praxis** — transformación de la realidad` },
  "map-filosofia-ciencia":{ subject:"fil", tema:"Filosofía · Filosofía de la ciencia", title:"Filosofía de la ciencia", md:`# Filosofía de la ciencia
## Preguntas centrales
- ¿Qué es el **conocimiento científico**?
- ¿Cómo se obtiene?
- ¿Qué distingue la ciencia de otros saberes?
## Filosofía de la física
- **Espacio y tiempo** — Newton vs Leibniz; relatividad; cuántica
- **Causalidad** — determinismo vs indeterminismo
## Epistemología científica
- **Realismo** — las teorías describen la verdad
- **Instrumentalismo** — las teorías son herramientas
- **Construcción social** del conocimiento
- Prueba: **inducción**, **falsación** (Popper), teorema de Bayes
## Metodología
- **Método científico** — observación, hipótesis, experimentación, teoría
- Clasificación: ciencias formales, físicas, biológicas y sociales
## Filosofía de las matemáticas
- **Platonismo** — los objetos matemáticos existen
- **Nominalismo** — solo son lenguaje
- **Intuicionismo** — son una construcción humana
## Historia de la ciencia
- Revoluciones: **Copérnico**, **Newton**, **Einstein**, cuántica
- **Galileo** — inicio de la revolución científica` },
  "map-presocraticos":{ subject:"hf", tema:"Historia de la Filosofía · Presocráticos", title:"Los presocráticos y el arché", md:`# Presocráticos
## Del mito al logos
- Explicar la **physis** por **causas naturales**, no por los dioses
- **arché**: principio, origen y sustrato de todo
## Monistas (Mileto)
- **Tales** — el agua
- **Anaximandro** — el *ápeiron* (lo indefinido)
- **Anaxímenes** — el aire (condensación / rarefacción)
## Pitagóricos
- **Pitágoras** — el número y la armonía
- Alma inmortal que **transmigra** (influye en Platón)
## El ser y el devenir
- **Heráclito** — «todo fluye»; el *logos* (fuego); lucha de contrarios
- **Parménides** — el ser es uno e inmutable; el cambio es apariencia
## Pluralistas (mecanicismo)
- **Empédocles** — cuatro raíces + Amor y Odio
- **Anaxágoras** — las semillas + el *Nous* (mente)
- **Demócrito** — **átomos** y **vacío**; materia y movimiento` },
  "map-ser-humano":{ subject:"fil", tema:"Filosofía · Tema 2", title:"¿Qué es el ser humano?", md:`# ¿Qué es el ser humano?
## Naturaleza y cultura
- **Evolución** → **hominización** (biológica)
- **Cultura** → **humanización** (aprendida)
- Dialéctica naturaleza-cultura; nacemos «inacabados»
## Cultura, identidad y diversidad
- **Socialización**; identidad personal y colectiva
- **Etnocentrismo / relativismo / interculturalidad**
## Cuerpo y mente
- **Dualismo** — Platón (cárcel del alma); Descartes (res cogitans / res extensa)
- **Monismo / materialismo** — somos cuerpo
- Aristóteles — el alma, **forma** del cuerpo
## Concepciones en la historia
- Antigüedad — animal **racional** y social
- Edad Media — criatura a imagen de Dios
- Modernidad — sujeto que piensa (Descartes); **dignidad** (Kant)
- Contemporánea — Marx (trabajo), Nietzsche, existencialismo (**proyecto** y libertad)
## Conciencia, lenguaje y persona
- **Conciencia** y autoconciencia (introspección)
- **Lenguaje** simbólico
- **Persona** — dignidad; fin en sí misma
## Identidad personal
- Barco de Teseo; **memoria** (Locke); Hume; el relato
- **Transhumanismo**
## El sentido de la existencia
- Absurdo / trascendente / inmanente / **darse sentido uno mismo**` },
  "map-conocimiento":{ subject:"fil", tema:"Filosofía · Tema 3", title:"¿Qué podemos conocer?", md:`# ¿Qué podemos conocer?
## El conocimiento humano
- Relación **sujeto — objeto**
- Grados: **sensación → percepción → concepto** (abstracción)
- La rama: **epistemología / gnoseología**
## Las fuentes del conocimiento
- **Racionalismo** (Descartes) — la razón; ideas innatas
- **Empirismo** (Locke, Hume) — la experiencia; *tabula rasa*
- **Criticismo** (Kant) — experiencia + razón
## ¿Podemos alcanzar la verdad?
- **Dogmatismo** · **Escepticismo** · **Relativismo** · **Criticismo**
## La cuestión de la verdad
- Opinión (**doxa**) frente a ciencia (**episteme**)
- Teorías: **correspondencia**, coherencia, consenso, pragmática
## La posverdad
- Los hechos pesan menos que las emociones
- Bulos, **fake news**, sesgos, cámaras de eco
- Defensa: **pensamiento crítico** y contrastar fuentes
## El saber científico
- Ciencias **formales** y **empíricas** (naturales / sociales)
- **Método hipotético-deductivo**; Popper (falsabilidad), Kuhn (paradigmas)
## Ciencia, tecnología y arte
- Ciencia / técnica / **tecnología**; límites éticos
- La **mujer en la ciencia**` },
  "map-racionalismo-empirismo":{ subject:"fil", tema:"Filosofía · Racionalismo y empirismo", title:"Racionalismo vs. empirismo", md:`# Racionalismo vs. empirismo
## El problema
- Edad Moderna: ¿cuál es el **fundamento del conocimiento**?
## Racionalismo
- Representante: **Descartes**
- Fuente: la **razón** — conocimiento **a priori**
- **Ideas innatas**: Dios (res infinita), res cogitans, res extensa
- **Dogmatismo**: no duda de la capacidad de la razón
- Verdades **universales y necesarias**
- Método **deductivo**; modelo: las **matemáticas**
## Empirismo
- Representantes: **Locke** y **Hume**
- Fuente: la **experiencia** — conocimiento **a posteriori**
- Locke — la mente al nacer es **tabula rasa**
- Hume — duda de la **causalidad** (hábito) → **escepticismo**
- Verdades generales y **provisionales**
- Método **inductivo**; modelo: la **ciencia experimental**
## Síntesis: Kant
- El **criticismo** une razón y experiencia
- Redefine filosofía, metafísica y ciencia` },
  "map-sofistas-socrates":{ subject:"hf", tema:"Historia de la Filosofía · Sofistas y Sócrates", title:"Sofistas y Sócrates", md:`# Sofistas y Sócrates
## Los sofistas
- **Protágoras**, **Gorgias**
- **Escepticismo** epistemológico
- **Relativismo moral**
- La ley es **convención** (*nomos*), no naturaleza
## Sócrates
- **Universalismo moral** (frente al relativismo)
- Busca **definiciones universales**
- **Intelectualismo moral**: conocer el bien lleva a obrarlo
- Método: **ironía** + **mayéutica**
## Aspasia de Mileto
- Maestra de **retórica** y logógrafa
- «Maestra» de Sócrates` },
  "map-medieval":{ subject:"hf", tema:"Historia de la Filosofía · Filosofía medieval", title:"La filosofía medieval", md:`# Filosofía medieval
## El gran tema: razón y fe
- Cómo se relacionan la **fe** y la **razón**
## Etapas
- **Patrística** — San Agustín
- **Escolástica temprana** — San Anselmo
- **Escolástica tardía** — Santo Tomás de Aquino
- **Nominalismo** — Guillermo de Ockham
## Pruebas de la existencia de Dios
- Agustín — la **verdad interior**
- Tomás de Aquino — las **cinco vías**
- Ockham — pruebas **en duda** (fe y razón se separan)` },
  "map-etica-clasica":{ subject:"hf", tema:"Historia de la Filosofía · Ética antigua", title:"El debate ético clásico", md:`# Ética clásica
## Intelectualismo moral (Sócrates y Platón)
- **Conocer el bien** lleva necesariamente a **obrarlo**
- El mal es **ignorancia**: nadie obra mal a sabiendas
- La virtud es **saber** y puede enseñarse
- Fin: el **bien** y la justicia del alma
## Aristóteles: la virtud como hábito
- No basta con conocer la virtud: se adquiere por **hábito** (*ethos*)
- **Término medio** (*mesótes*) entre dos vicios: exceso y defecto
- Guiada por la **prudencia** (*phrónesis*)
- Reconoce la **akrasia**: se conoce el bien, pero la pasión arrastra
## Fin común: la felicidad
- **Eudaimonía** — la buena vida como meta de la ética
- Vivir conforme a la **razón**, lo propio del ser humano
## La gran diferencia
- Sócrates y Platón — basta el **saber** (intelectualismo)
- Aristóteles — hace falta **carácter y costumbre** (realismo moral)` },
  "map-politica-clasica":{ subject:"hf", tema:"Historia de la Filosofía · Política antigua", title:"El debate político clásico", md:`# Política clásica
## Platón — la ciudad justa (utopía)
- La *polis* refleja las **tres partes del alma**
- **Tres clases** — productores, guardianes y gobernantes
- **Rey filósofo**: gobierna quien conoce el **Bien**
- **Crítica de la democracia** — el saber no se vota
## Aristóteles — política realista
- El ser humano es **animal político** (*zoon politikón*)
- La *polis* es **natural**, anterior al individuo
- **Formas puras** — monarquía, aristocracia, república (*politeia*)
- **Formas corruptas** — tiranía, oligarquía, demagogia
- La **república** (clase media) es la más estable
## Contraste
- Platón — Estado **ideal** regido por el saber
- Aristóteles — el mejor gobierno **posible**, empírico y moderado` },
  "map-renacimiento":{ subject:"hf", tema:"Historia de la Filosofía · Renacimiento", title:"Renacimiento y revolución científica", md:`# Renacimiento y ciencia
## Cambios sociales
- **Crisis del feudalismo**; auge de la **burguesía**
- La **imprenta** (Gutenberg) difunde el saber
- Reforma protestante; nuevas rutas y descubrimientos
## Humanismo y antropocentrismo
- El **ser humano** en el centro, ya no Dios
- Vuelta a las fuentes clásicas (*studia humanitatis*)
- Confianza en la razón y en la **dignidad** humana
## Revolución científica
- **Heliocentrismo** — Copérnico frente al geocentrismo
- **Galileo** — observación, experimento y matematización
- **Kepler** y **Newton** — leyes del universo
- Nace el **método empírico-matemático**
## Consecuencia
- Del **cosmos cerrado** medieval al **universo infinito**
- La naturaleza se lee en **lenguaje matemático**` },
  "map-sustancias-modernas":{ subject:"hf", tema:"Historia de la Filosofía · Metafísica moderna", title:"El debate de las sustancias", md:`# Las sustancias (racionalismo)
## El problema
- ¿Qué es la **sustancia**? Lo que existe por sí mismo
- Herencia del **dualismo** de Descartes y su dificultad
## Descartes — dualismo (tres sustancias)
- **Res infinita** (Dios), **res cogitans** (mente), **res extensa** (cuerpo)
- Alma y cuerpo **separados**, pero interactúan
- Problema: ¿**cómo** se comunican? (la glándula pineal)
## Spinoza — panteísmo (monismo)
- Una **única sustancia**: **Dios = Naturaleza** (*Deus sive Natura*)
- Pensamiento y extensión, **dos atributos** de lo mismo
- El ser humano, un **modo** finito de esa sustancia
## Leibniz — pluralismo
- Infinitas **mónadas**: sustancias simples e inextensas
- «Sin ventanas»: no interactúan entre sí
- **Armonía preestablecida** por Dios` },
  "map-contrato-social":{ subject:"hf", tema:"Historia de la Filosofía · Filosofía política moderna", title:"El contrato social", md:`# El contrato social
## La idea
- El poder no viene de Dios, sino de un **pacto** entre individuos
- Del **estado de naturaleza** a la **sociedad civil**
## Hobbes — absolutismo
- Estado de naturaleza: **guerra de todos contra todos**
- *«El hombre es un lobo para el hombre»*
- Se cede **todo** el poder al soberano: el **Leviatán**
- Fin: la **seguridad**
## Locke — liberalismo
- Derechos naturales: vida, libertad y **propiedad**
- El poder es **limitado** y revocable
- **División de poderes**; monarquía parlamentaria
- Fin: proteger los derechos
## Rousseau — democracia
- El ser humano nace **bueno**; la sociedad lo corrompe
- **Voluntad general** — soberanía del pueblo
- Fin: la **libertad** y la igualdad` },
  "map-utilitarismo-liberalismo":{ subject:"hf", tema:"Historia de la Filosofía · Ética y política moderna", title:"Utilitarismo, liberalismo y capitalismo", md:`# Utilitarismo y liberalismo
## Utilitarismo (Bentham, Mill)
- Ética **consecuencialista**: lo bueno se mide por sus **resultados**
- Principio de **utilidad** — la mayor felicidad para el mayor número
- **Bentham** — cálculo de placeres y dolores (cuantitativo)
- **Mill** — hay placeres **superiores**; defiende la libertad individual
## Liberalismo
- Primacía del **individuo** y de sus derechos
- **Propiedad privada** y libre mercado
- **Neutralidad** del Estado (Estado mínimo)
## Adam Smith — capitalismo
- La **«mano invisible»** del mercado
- El **interés propio**, sin quererlo, produce el bien común
## Azurmendi — crítica cooperativa
- El ser humano tiene una tendencia natural a **cooperar**
- No es solo un ser **competitivo**` },
  "map-maestros-sospecha":{ subject:"hf", tema:"Historia de la Filosofía · Maestros de la sospecha", title:"Los maestros de la sospecha", md:`# Los maestros de la sospecha
## La idea común
- La conciencia **no es transparente**: algo oculto la determina
- «Sospechar» de lo que se presenta como evidente
- Expresión de **Paul Ricoeur**
## Marx — sospecha económica
- **Alienación** del trabajador
- **Materialismo histórico** — la economía determina la conciencia
- **Ideología** que oculta las relaciones de clase
- Fin: la **revolución**
## Nietzsche — sospecha moral
- **«Dios ha muerto»** → **nihilismo**
- La moral nace del **resentimiento**
- **Voluntad de poder** y **superhombre**
## Freud — sospecha psicológica
- El **inconsciente** gobierna la conducta
- **Ello, yo, superyó**
- **Eros y Tánatos** — pulsiones de vida y muerte` },
  "map-critica-capitalismo":{ subject:"hf", tema:"Historia de la Filosofía · Teoría crítica y política del s. XX", title:"Crítica del capitalismo (Frankfurt, Arendt, Rawls)", md:`# Crítica del capitalismo (s. XX)
## Escuela de Frankfurt
- **Razón instrumental** — reducida a la relación medio-fin
- **Industria cultural** (Adorno, Horkheimer) — el ocio como mercancía
- **Deshumanización** y dominio técnico
## Hannah Arendt
- Análisis del **totalitarismo**
- La **ideología** total y el terror
- Destrucción de la **esfera pública**; *«banalidad del mal»*
- Defensa de la **acción** política y la pluralidad
## John Rawls
- **Justicia como equidad**
- **Posición original** y **velo de ignorancia**
- Estado de **bienestar**; principio de diferencia` },
  "map-postmodernidad":{ subject:"hf", tema:"Historia de la Filosofía · Posmodernidad", title:"Nietzsche y la posmodernidad", md:`# Posmodernidad
## Raíz: Nietzsche
- Crítica de la **verdad objetiva** (perspectivismo)
- Crítica de la **metafísica** y de los dualismos
## Rasgos posmodernos
- Fin de los **grandes relatos** (Lyotard)
- **Pluralidad** y diferencia frente a lo universal
- Sospecha ante el **progreso** y la razón ilustrada
- **Deconstrucción** (Derrida); poder-saber (Foucault)
## Habermas — defensa de la modernidad
- La modernidad es un **proyecto inacabado**, no agotado
- **Razón comunicativa** — el acuerdo mediante el diálogo
- Frente al relativismo, una racionalidad **intersubjetiva**` },
  "map-filosofia-lenguaje":{ subject:"hf", tema:"Historia de la Filosofía · Filosofía del lenguaje", title:"Filosofía del lenguaje (Wittgenstein)", md:`# Filosofía del lenguaje
## Giro lingüístico
- El siglo XX pone el **lenguaje** en el centro
- Los límites del lenguaje son los límites del **pensamiento**
## Primer Wittgenstein (*Tractatus*)
- El lenguaje es **figura del mundo**
- La metafísica es **sinsentido**: no describe hechos
- *«De lo que no se puede hablar, hay que callar»*
## Segundo Wittgenstein (*Investigaciones*)
- El significado es el **uso**
- **Juegos de lenguaje** — cada contexto tiene sus reglas
- Filosofía **terapéutica**: disolver confusiones
## Txillardegi — voz vasca
- La **lengua condiciona** el pensamiento
- Estructura inconsciente de la comunidad
- La supervivencia del **euskera** como cuestión filosófica` },
  "map-existencialismo":{ subject:"hf", tema:"Historia de la Filosofía · Existencialismo", title:"El existencialismo", md:`# Existencialismo
## Tesis central
- La **existencia precede a la esencia**
- No hay naturaleza humana fija: **nos hacemos**
## Sartre — existencialismo ateo
- **Condenados a ser libres**
- La libertad genera **angustia** y responsabilidad
- La **mala fe** — huir de la propia libertad
## Heidegger
- Diferencia entre el **ser** y los entes
- **Dasein** — el ser humano, arrojado y **proyectado** en el mundo
- Ser-para-la-muerte
## Ortega y Gasset — raciovitalismo
- **«Yo soy yo y mi circunstancia»**
- **Razón vital** e histórica
## Unamuno — existencialismo cristiano
- El **sentimiento trágico de la vida**
- Ansia de **inmortalidad**; fe y razón en conflicto` },
  "map-feminismo-beauvoir":{ subject:"hf", tema:"Historia de la Filosofía · Feminismo", title:"Simone de Beauvoir y el feminismo", md:`# Beauvoir y el feminismo
## «No se nace mujer, se llega a serlo»
- No existe una **esencia** femenina fija
- El género es una **construcción cultural**
## La alteridad — *El segundo sexo*
- El varón se define como **sujeto** absoluto
- La mujer, como **«lo Otro»**, lo secundario
- Dialéctica del **amo y el esclavo** aplicada al género
## Emancipación
- **Educación** en igualdad
- **Autonomía económica** por el trabajo
- Derechos sobre el propio cuerpo
## Olas del feminismo
- **Ilustrado** — Wollstonecraft, De Gouges
- **Sufragista**
- **Contemporáneo** — Beauvoir, Butler, Amorós` },
  "map-ipc-critico":{ subject:"ipc", tema:"Pensamiento crítico · 2.º ESO", title:"Pensamiento crítico: el mapa del curso", md:`# Pensamiento crítico
## Pensar por uno mismo
- **Filosofía**: hacerse **preguntas** y buscar el fundamento
- **La reflexión**: no dar nada por supuesto
- **El diálogo filosófico**: pensar **con** los demás, no contra ellos
## Argumentar
- **Premisas** → **conclusión**, unidas por una buena **inferencia**
- Buen argumento: premisas **verdaderas** + conclusión que **se sigue**
- Opinión ≠ argumento: hay que dar **razones**
### Falacias (trampas del razonar)
- **Ad hominem** — atacar a la persona, no a la idea
- **Hombre de paja** — deformar lo que dice el otro
- **Ad populum** — «lo dicen todos, luego es verdad»
- **Autoridad** — «lo dijo un famoso / influencer»
- **Falsa causa** — «pasó después, luego lo causó»
- **Falso dilema** — presentar solo dos opciones
- **Miedo y pena** — emociones en vez de razones
## Medios y manipulación
- **Bulos y fake news**: mentiras que parecen noticia
- **Verificar**: fuente, pruebas, contrastar
### Publicidad
- Vende **emociones** e **identidad**, no productos
- **FOMO**, idealización, influencers, repetición
- Lenguaje **pseudocientífico**, hipérbole, comparación falsa
## Consumo y felicidad
- **Sociedad de consumo**: comprar sin fin, obsolescencia
- **Necesidad vs deseo** · **Tener vs ser**
- ¿Comprar **nos hace felices**?
## Proyectos
- Escribir una **noticia falsa** con falacias (y cazarlas)
- **Cómic** y **cortometraje**` },
  "map-ipc-falacias":{ subject:"ipc", tema:"Pensamiento crítico · 2.º ESO", title:"Las falacias: mapa por familias", md:`# Las falacias
## ¿Qué es una falacia?
- Un **error** en el razonamiento que **parece** convincente
- Se usa para **convencer sin tener razón**
- Detectarla = **no dejarte engañar**
## Atacan a la persona
- **Ad hominem** — «tú no sabes de esto, así que calla»
- **Hombre de paja** — deforman lo que dijiste para tumbarlo
## Apelan a la emoción
- **Al miedo** — «si no lo haces, pasará algo terrible»
- **A la pena** (ad misericordiam) — dar lástima en vez de razones
- **A la mayoría** (ad populum) — «lo hace todo el mundo»
## Errores al razonar
- **Autoridad** — «lo dijo un famoso / influencer»
- **Tradición** — «siempre se ha hecho así»
- **Generalización apresurada** — pocos casos → regla general
- **Falsa causa** (post hoc) — «pasó después, luego lo causó»
- **Falso dilema** — solo dos opciones cuando hay más
## El reto de clase
- Escribe una **noticia falsa** con 3 falacias
- Los demás tienen que **cazarlas**` },
  "map-ipc-tecnologia":{ subject:"ipc", tema:"Pensamiento crítico · 2.º ESO", title:"Tecnología, redes y ética", md:`# Tecnología y ética
## La vida digital
- **El algoritmo** decide lo que ves; no es neutral
- **Economía de la atención**: las apps compiten por tu tiempo
- **Tus datos** son el precio de lo «gratis»
## Redes sociales
- **Enganche**: diseñadas para que no las sueltes
- **Presión y comparación**: vidas «perfectas»
- **Huella digital**: lo que subes, queda
## Dilemas para debatir
- El **vídeo humillante**: ¿compartir o denunciar? ¿quién es responsable?
- Las **patentes de semillas**: ¿se puede patentar la vida?
- **Pantallas y descanso**: control parental, tiempo de uso
## Antes de compartir
- ¿Es **verdad**? · ¿Hace **daño**? · ¿Me **usa** el algoritmo?` },
  "map-ipc-sesgos":{ subject:"ipc", tema:"Pensamiento crítico · 2.º ESO", title:"Los sesgos cognitivos", md:`# Sesgos cognitivos
## ¿Qué son?
- **Atajos** de la mente para ahorrar esfuerzo
- A veces útiles, a veces nos **engañan**
- Sesgo (error al **pensar**) ≠ falacia (error al **argumentar**)
## Deforman lo que crees
- **Confirmación** — solo ves lo que te da la razón
- **Anclaje** — el primer dato te condiciona (los precios)
- **Disponibilidad** — lo que recuerdas fácil parece más frecuente
## Vienen de los demás
- **Efecto arrastre** — hacer lo que hace la mayoría
- **Efecto halo** — guapo o famoso → le supongo otras virtudes
- **FOMO** — miedo a perderte lo que viven los demás
## Cómo defenderte
- Busca **lo que te incomoda**, no solo lo que te gusta
- **Pide datos y fuentes**
- **Duda** de tu primera impresión` },
  "map-ipc-dialogo":{ subject:"ipc", tema:"Pensamiento crítico · 2.º ESO", title:"El diálogo filosófico", md:`# El diálogo
## Diálogo vs pelea
- **Diálogo**: pensar juntos, buscar la verdad
- **Pelea**: ganar, quedar por encima
- La diferencia está en el **objetivo**
## La herencia de Sócrates
- Dialogar **preguntando** (mayéutica)
- «Solo sé que no sé nada»
- Preguntar bien > respuestas prefabricadas
## Reglas del buen diálogo
- **Escuchar** de verdad antes de responder
- Ir a las **ideas**, no a la persona (evita el *ad hominem*)
- **Dar razones**, no solo afirmar
- **Principio de caridad**: interpreta al otro en su mejor versión
## Estar en desacuerdo bien
- Busca lo que **compartís**
- **Pregunta**, no acuses
- **Cambiar de idea** no es perder` },
  "map-ipc-genero":{ subject:"ipc", tema:"Pensamiento crítico · 2.º ESO", title:"Género, cuerpo y consumo (Caza de brujas)", md:`# Género, cuerpo y consumo
## Caza de brujas (S. Federici)
- **No fue superstición**: violencia para reorganizar la sociedad
- Al nacer el **capitalismo** (Edad Moderna)
- **Saberes de mujeres** (plantas, partos, vivir solas) = amenaza
- Víctimas: mujeres **pobres, viudas, solas**
- Tesis: **violencia machista histórica**
## El mismo control, otras formas
- **El cuerpo** — antes perseguido, hoy vigilado y moldeado
- **El trabajo** — cuidados invisibles y sin pagar
- **La voz** — silenciar (miedo, burla, acoso)
## Género + consumo hoy
- **Tasa rosa** — lo mismo, más caro «para ellas»
- **Presión estética** — cuerpo «ideal» para venderte la solución
- **Moda rápida** — presión + explotación + residuos
## Para pensar
- ¿Por qué precisamente esas mujeres?
- ¿Qué une aquel control con la publicidad de hoy?` },
  "map-ipc-fastfashion":{ subject:"ipc", tema:"Pensamiento crítico · 2.º ESO", title:"Fast fashion: el ciclo de una prenda", md:`# Fast fashion
## El ciclo de vida de una prenda
- **Campo de algodón** — mucha agua (~2.700 L por camiseta)
- **Fábrica** — hilar, teñir, coser (a menudo precariedad)
- **Transporte** — cruza medio mundo
- **Tu armario** — usada pocas veces
- **Vertedero** — tarda siglos en degradarse
## ¿Qué es el fast fashion?
- Colecciones nuevas **sin parar**, muy baratas
- Diseñado para comprar **más y más a menudo**
## El precio que no ves
- **Agua** — gasto y contaminación
- **Trabajo** — sueldos bajos, malas condiciones
- **Residuos** — un camión de ropa por segundo
## ¿Por qué compramos tanto?
- **Presión del grupo** · **Publicidad e influencers** · **Precio bajo**
## Consumo consciente
- ¿La **necesito**? ¿La usaré **mucho**? ¿De qué y **quién** la hizo?
- Segunda mano, intercambio, **cuidar y reparar**, comprar **menos y mejor**` },
  "map-ipc-emociones":{ subject:"ipc", tema:"Pensamiento crítico · 2.º ESO", title:"Emociones y pensamiento crítico", md:`# Emociones y pensamiento crítico
## No son el enemigo
- Son **información**: avisan de algo
- **No luchan** contra la razón: hay que entenderlas
- Pero **se pueden manipular**
## El secuestro emocional
- Emoción muy fuerte → **modo reacción**, sin pensar
- Publicidad, bulos y manipuladores lo saben
## Las que más te usan
- **Miedo** — «te pasará algo»
- **Indignación** — el enfado vuela (el algoritmo lo premia)
- **Pena / culpa** — ceder sin razones (ad misericordiam)
## Pensar CON la emoción
- **Ponle nombre**
- **Para y respira** (cuenta hasta diez)
- **Pregúntate por qué** lo sientes
- **Separa** sentir de saber: la indignación no es verdad` },
  "map-fil-mito-logos":{ subject:"fil", tema:"Filosofía · Tema 1", title:"Del mito al logos", md:`# Del mito al logos
## El paso decisivo
- Grecia, **s. VI a. C.**: nace la filosofía
- De explicar por **dioses** a explicar por **razones**
## Mito (mythos)
- Relatos de **dioses** con voluntad caprichosa
- **Antropomórfico y animista**
- Se transmite por tradición oral
- **Dogmático**: se acepta sin discutir
## Logos (razón)
- Busca **causas naturales** y leyes
- Se apoya en **argumentos**; tiene autor
- **Crítico**: se puede discutir y revisar
## Los primeros filósofos
- Buscan el **arché** (el principio de todo)
- **Tales de Mileto**: el agua
- Lo decisivo: el **cambio de método**` },
  "map-fil-cuerpo-mente":{ subject:"fil", tema:"Filosofía · Tema 2", title:"El cuerpo y la mente", md:`# El cuerpo y la mente
## El problema mente-cuerpo
- ¿Somos **una** cosa o **dos**?
## Dualismo (dos realidades)
- Cuerpo **material** + alma **inmaterial** (lo esencial)
- **Platón** — alma inmortal, cuerpo «cárcel»; carro alado; alma en 3 partes (racional, irascible, concupiscible)
- **Descartes** — res cogitans (mente) vs res extensa (cuerpo-máquina)
## Monismo materialista (una realidad)
- Solo hay **cuerpo**; la mente es su **actividad** (el cerebro)
- **Hume** — critica el alma-sustancia
## Los problemas
- Dualismo: ¿cómo se comunican mente y cuerpo?
- Monismo: ¿somos **libres** o solo química?` }
};
