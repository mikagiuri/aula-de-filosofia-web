"use strict";
/* ===== Materiales completos (fichas, presentación, guías) =====
   Añadir un material: clave -> { subject, tema, title, html }.
   El html se pega tal cual (encabezados, párrafos, tablas, etc.). */

const MATERIALS = {
  "fil-presentacion":{ subject:"fil", tema:"Filosofía · Presentación", title:"Presentación de la asignatura", html:`
<p><strong>Curso 2026-27 · IES Martín de Bertendona BHI</strong></p>
<p>¡Bienvenido y bienvenida a la filosofía! Este curso vamos a hacernos
algunas de las preguntas más grandes que existen —qué es el ser humano,
qué podemos conocer, qué está bien y qué está mal— y, sobre todo, vamos
a aprender a <strong>pensarlas por nosotros mismos</strong>. Esta hoja
te explica qué haremos, cómo trabajaremos y cómo se evalúa.</p>
<hr />
<h2 id="qué-es-la-filosofía-y-para-qué-te-sirve">1. ¿Qué es la filosofía
y para qué te sirve?</h2>
<p>Filosofía significa «amor a la sabiduría». No es aprenderse de
memoria lo que pensaron unos señores antiguos: es <strong>aprender a
pensar bien</strong>. A hacerte buenas preguntas, a dar razones, a
distinguir un buen argumento de un engaño y a escuchar ideas distintas
de las tuyas.</p>
<p>Y eso hoy es más útil que nunca: te ayuda a <strong>no dejarte
manipular</strong> (por bulos, publicidad o propaganda), a <strong>tomar
decisiones</strong> con criterio y a <strong>convivir</strong> con quien
piensa diferente. El lema del curso lo resume en dos palabras latinas:
<strong><em>Sapere aude</em></strong>, «atrévete a pensar por ti
mismo».</p>
<hr />
<h2 id="qué-vamos-a-estudiar-este-curso">2. ¿Qué vamos a estudiar este
curso?</h2>
<p>Tenemos <strong>tres sesiones por semana</strong>. El temario se
reparte en las tres evaluaciones:</p>
<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>Evaluación</th>
<th>Temas</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1.ª</strong></td>
<td><strong>Tema 1 · ¿Qué es la filosofía?</strong> (el asombro, del
mito al logos, cómo se piensa y se argumenta). Con el proyecto
<strong>«Mujeres ilustres de la historia y del
conocimiento»</strong>.</td>
</tr>
<tr>
<td><strong>2.ª</strong></td>
<td><strong>Tema 2 · ¿Qué es el ser humano?</strong> y <strong>Tema 3 ·
¿Qué podemos conocer?</strong> (la verdad y la mentira, la posverdad y
las <em>fake news</em>, la ciencia).</td>
</tr>
<tr>
<td><strong>3.ª</strong></td>
<td><strong>Tema 5 · Las preguntas de la ética</strong> (cómo debemos
actuar, los derechos humanos, los grandes problemas de hoy). En el
Bachillerato Artístico, además, <strong>Tema 7 · ¿Qué es el
arte?</strong></td>
</tr>
</tbody>
</table>
<p>A lo largo del curso haremos también un <strong>taller de
argumentación</strong> (aprender a razonar bien y a detectar trampas y
falacias).</p>
<hr />
<h2 id="cómo-vamos-a-trabajar">3. ¿Cómo vamos a trabajar?</h2>
<p>La filosofía se aprende haciéndola. En clase vamos a:</p>
<ul>
<li><strong>Leer y comentar textos</strong>: sacar de qué tratan, qué
defienden y con qué razones.</li>
<li><strong>Dialogar y debatir</strong> con respeto: defender las ideas
con argumentos, no a gritos.</li>
<li><strong>Escribir</strong>: disertaciones y comentarios breves con
tus propias palabras.</li>
<li>Hacer <strong>trabajos y proyectos</strong>, individuales y en
grupo.</li>
<li>Usar <strong>cuestionarios</strong> para repasar y el
<strong>cuaderno</strong> de clase, además de <strong>Classroom</strong>
y la pizarra digital.</li>
<li><strong>Inteligencia artificial</strong>: puedes aprender con ella,
pero el <strong>examen se hace sin IA</strong>; y siempre que la uses en
un trabajo, tienes que <strong>decirlo y citarla</strong>. Se aprende
con la IA; se demuestra sin ella.</li>
</ul>
<hr />
<h2 id="cómo-se-evalúa">4. ¿Cómo se evalúa?</h2>
<p>En cada evaluación la nota se reparte así:</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Qué</th>
<th>Peso</th>
<th>Detalle</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Examen</strong> (uno por evaluación)</td>
<td><strong>70 %</strong></td>
<td>Hay que sacar al menos <strong>3,5 sobre 7</strong> para que cuente
el 30 % restante.</td>
</tr>
<tr>
<td><strong>Trabajos, cuestionarios y disertaciones</strong></td>
<td><strong>20 %</strong></td>
<td>Proyectos, comentarios, exposiciones y cuestionarios.</td>
</tr>
<tr>
<td><strong>Trabajo diario, interés y participación</strong></td>
<td><strong>10 %</strong></td>
<td>Cuaderno al día, atención y participación en clase y en los
debates.</td>
</tr>
</tbody>
</table>
<p>Y estas son las reglas del juego:</p>
<ul>
<li>La <strong>evaluación es continua</strong>: no hay exámenes de
recuperación. Si suspendes una evaluación, la recuperas si la media con
la siguiente da aprobado.</li>
<li>El <strong>curso se aprueba</strong> si la media de las tres
evaluaciones es <strong>5 o más</strong>.</li>
<li>La <strong>ortografía</strong> cuenta: las faltas descuentan hasta
un <strong>10 %</strong> de la nota. Cuida la escritura.</li>
<li>Faltar <strong>sin justificar al 20 %</strong> de las clases supone
<strong>perder la evaluación continua</strong>.</li>
<li><strong>Convocatoria ordinaria</strong> (junio): te examinas solo de
las evaluaciones que hayan quedado suspendidas.
<strong>Extraordinaria</strong>: de los contenidos mínimos de todo el
curso, con <strong>nota máxima de 5</strong>.</li>
<li>Un examen solo se repite si la falta está <strong>justificada con un
documento oficial</strong>.</li>
</ul>
<hr />
<h2 id="normas-de-clase-para-trabajar-bien-todos">5. Normas de clase
(para trabajar bien todos)</h2>
<ul>
<li>Trae siempre el <strong>material</strong>: cuaderno, bolígrafo y el
acceso al libro y a Classroom.</li>
<li><strong>Puntualidad</strong> y atención en clase.</li>
<li><strong>Respeto en el diálogo</strong>: pide el turno, escucha y
argumenta sin descalificar a nadie.</li>
<li><strong>Móvil</strong>: guardado, según la norma del centro, salvo
que se pida para una actividad.</li>
<li><strong>Honestidad</strong>: cita lo que uses y no presentes como
tuyo lo que no lo es (tampoco lo de la IA).</li>
</ul>
<hr />
<h2 id="cómo-aprobar-y-disfrutar-la-asignatura">6. Cómo aprobar (y
disfrutar) la asignatura</h2>
<ul>
<li>Lleva el <strong>cuaderno al día</strong> y repasa un poco cada
semana.</li>
<li><strong>Pregunta</strong>: en filosofía, una buena pregunta vale
tanto como una buena respuesta.</li>
<li><strong>Participa</strong> en los debates: es parte de la nota y es
lo que más se aprende.</li>
<li>Entrega los <strong>trabajos a tiempo</strong>.</li>
<li>Repasa con las <strong>tarjetas y los cuestionarios</strong> del
<em>Aula de Filosofía</em> (la web de clase).</li>
<li>Y, sobre todo: <strong>atrévete a pensar por ti mismo</strong>.
<em>Sapere aude</em>.</li>
</ul>
<p>Nos vemos en clase. Vamos a hacernos preguntas grandes y a aprender a
pensarlas juntos.</p>
<hr />
<p><em>Nota para el profesor — Fuente y pendientes:</em> documento
redactado a partir de la programación del departamento de Filosofía del
centro (curso 25-26) y del dosier de arranque de la materia. Los pesos
(examen 70 % · trabajos/cuestionarios/disertaciones 20 % · trabajo
diario 10 %, con mínimo de 3,5/7 en el examen) y las normas de
evaluación son los <strong>acordados por el departamento</strong>.
Quedan por confirmar con el departamento y con el calendario del centro
26-27: la <strong>opción de 3.ª evaluación</strong> (ética T5 y/o arte
T7 según el grupo), la <strong>norma concreta de móvil</strong> (aquí,
«según la norma del centro») y las <strong>fechas</strong> de las
evaluaciones. La reformulación de la convocatoria ordinaria evita el
error de copia «autores suspendidos» (propio de 2.º de HF): en 1.º son
<strong>evaluaciones/unidades</strong> suspendidas.</p>
` },
  "fil-ficha-t1":{ subject:"fil", tema:"Filosofía · Tema 1", title:"Ficha de ejercicios T1 (con soluciones)", html:`
<ul>
<li><strong>Materia</strong>: Filosofía, 1.º de Bachillerato (IES Martín
de Bertendona, modelo A, castellano).</li>
<li><strong>Uso/sesión</strong>: Tema 1 (1.ª evaluación). Se rellena a
lo largo de las sesiones del tema y en casa. Algunos ejercicios remiten
a <strong>textos del libro</strong> (McGraw Hill, unidad 1); el profesor
indica la página.</li>
<li><strong>Saberes</strong>: A.1.1 (qué es la filosofía:
características, concepciones, del mito al logos, ramas, vigencia),
A.1.2 (la filosofía y otros saberes), A.1.3 (método y herramientas:
fuentes, textos, problemas, diálogo argumentativo).</li>
<li><strong>Criterios/CE</strong>: comprensión de qué es la filosofía y
su método; lectura y comentario de textos; formulación de problemas
filosóficos.</li>
<li><strong>Duración</strong>: transversal al tema; cada bloque, 10-15
minutos en clase o en casa.</li>
<li><strong>Material</strong>: esta ficha + el libro del alumnado. Se
responde en la propia ficha (líneas) o en el cuaderno cuando se
indique.</li>
<li><strong>Fuente de origen</strong>: estructura de la unidad 1 del
libro (definición, asombro, del mito al logos, características, ramas,
filosofía y otros saberes, método) y dosier de Filosofía §3.2;
ejercicios de creación propia.</li>
</ul>
<blockquote>
<p>Cómo se corrige: las respuestas cortas se comentan en voz alta al
terminar cada bloque; las de desarrollo (marcadas con ✍) van al cuaderno
y las revisa el profesor. Al final hay una hoja de soluciones
orientativas para el profesor.</p>
</blockquote>
<hr />
<h2 id="bloque-a-qué-es-la-filosofía-el-asombro">Bloque A · Qué es la
filosofía (el asombro)</h2>
<p><strong>1. Etimología.</strong> La palabra «filosofía» viene del
griego <em>philía</em> (____________) y <em>sophía</em> (____________).
Escribe una definición de filosofía con tus palabras, usando esas dos
raíces:</p>
<hr />
<p><strong>2. El asombro.</strong> Aristóteles dice que la filosofía
nace del <em>asombro</em> (la extrañeza ante lo que parece obvio).
Escribe <strong>dos preguntas</strong> que te hayas hecho alguna vez
sobre algo cotidiano y que no supieras responder:</p>
<ul>
<li><ol type="a">
<li><hr /></li>
</ol></li>
<li><ol start="2" type="a">
<li><hr /></li>
</ol></li>
</ul>
<hr />
<h2 id="bloque-b-del-mito-al-logos-el-origen">Bloque B · Del mito al
logos (el origen)</h2>
<p><strong>3. Mito y logos.</strong> Completa la tabla con lo que
caracteriza a cada forma de explicar la realidad (apóyate en el libro y
en clase):</p>
<table>
<thead>
<tr>
<th></th>
<th><strong>Mito</strong></th>
<th><strong>Logos (filosofía)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>¿Quién o qué explica el mundo?</td>
<td></td>
<td></td>
</tr>
<tr>
<td>¿Cómo se transmite?</td>
<td></td>
<td></td>
</tr>
<tr>
<td>¿Se puede discutir o comprobar?</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Ejemplo</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>4. Texto del libro (mito→logos).</strong> Lee el texto que
indique el profesor y responde en el cuaderno ✍: ¿qué idea del mito
conserva la filosofía y cuál abandona?</p>
<hr />
<h2 id="bloque-c-las-características-de-la-filosofía">Bloque C · Las
características de la filosofía</h2>
<p><strong>5. Rasgos.</strong> Une cada característica de la filosofía
con su significado:</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Característica</th>
<th></th>
<th>Significado</th>
</tr>
</thead>
<tbody>
<tr>
<td>1. Racional</td>
<td></td>
<td>a) No se conforma con lo superficial: va a la raíz de los
problemas.</td>
</tr>
<tr>
<td>2. Crítica</td>
<td></td>
<td>b) Busca explicaciones para el conjunto de la realidad, no un
trozo.</td>
</tr>
<tr>
<td>3. Radical</td>
<td></td>
<td>c) Usa la razón y los argumentos, no la fe ni la autoridad.</td>
</tr>
<tr>
<td>4. Universal</td>
<td></td>
<td>d) Examina y pone en cuestión las creencias, también las
propias.</td>
</tr>
</tbody>
</table>
<p>Respuestas: 1-<strong><em>, 2-</em></strong>, 3-<strong><em>,
4-</em></strong>.</p>
<hr />
<h2 id="bloque-d-las-preguntas-de-la-filosofía">Bloque D · Las preguntas
de la filosofía</h2>
<p><strong>6. ¿Filosófica o no?</strong> Clasifica cada pregunta en
<strong>C</strong> (científica), <strong>F</strong> (filosófica) o
<strong>P</strong> (personal/opinión):</p>
<ul>
<li>___ ¿A qué temperatura hierve el agua?</li>
<li>___ ¿Está bien mentir para no hacer daño?</li>
<li>___ ¿Qué serie veo esta noche?</li>
<li>___ ¿Existe el libre albedrío?</li>
<li>___ ¿Cuántos planetas tiene el sistema solar?</li>
<li>___ ¿Qué es la justicia?</li>
</ul>
<p><strong>7. Formula tú.</strong> Escribe <strong>una pregunta
filosófica</strong> propia y explica en una frase por qué lo es (por qué
no la responde solo la ciencia ni es solo opinión): ✍</p>
<hr />
<h2 id="bloque-e-la-filosofía-y-otros-saberes">Bloque E · La filosofía y
otros saberes</h2>
<p><strong>8. Comparación.</strong> Completa qué aporta cada saber ante
una misma pregunta, por ejemplo «¿qué es el ser humano?»:</p>
<table>
<thead>
<tr>
<th>Saber</th>
<th>Cómo responde</th>
<th>Con qué método</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ciencia</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Religión</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Arte</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Filosofía</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>9. Texto del libro (filosofía y ciencia).</strong> Lee el
texto indicado y responde en el cuaderno ✍: ¿en qué se parecen y en qué
se diferencian la filosofía y la ciencia según el texto?</p>
<hr />
<h2 id="bloque-f-método-leer-y-argumentar">Bloque F · Método: leer y
argumentar</h2>
<p><strong>10. Mini-comentario.</strong> Elige un texto breve de la
unidad 1 del libro y complétalo (en el cuaderno) ✍:</p>
<ul>
<li><strong>Tema</strong>: ¿de qué trata el texto en una frase?</li>
<li><strong>Tesis</strong>: ¿qué defiende el autor o la autora?</li>
<li><strong>Un argumento</strong> que da para defenderlo.</li>
<li><strong>Tu opinión</strong> con una razón (¿estás de acuerdo? ¿por
qué?).</li>
</ul>
<hr />
<h2 id="hoja-de-soluciones-orientativas-para-el-profesor">Hoja de
soluciones orientativas (para el profesor)</h2>
<ul>
<li><strong>1.</strong> <em>philía</em> = amor/amistad; <em>sophía</em>
= sabiduría; «amor a la sabiduría». Se valora una definición coherente,
no una fórmula exacta.</li>
<li><strong>2.</strong> Cualquier pregunta genuina de asombro; se
descarta lo puramente factual.</li>
<li><strong>3.</strong> Mito: lo explican los dioses, de forma
narrativa; se transmite por tradición oral/poetas; no se discute ni se
comprueba. Logos: lo explican causas naturales (physis, arché), con
razones; se transmite por escrito y en debate; se puede discutir y
criticar.</li>
<li><strong>5.</strong> 1-c, 2-d, 3-a, 4-b.</li>
<li><strong>6.</strong> C, F, P, F, C, F.</li>
<li><strong>7.</strong> Se valora que la pregunta no la cierre un dato
ni sea mera preferencia (que admita razones a favor y en contra).</li>
<li><strong>8.</strong> Ciencia: datos y experimentos (biología,
psicología). Religión: sentido y trascendencia, por revelación/fe. Arte:
expresión y experiencia, por la obra. Filosofía: conceptos y argumentos,
buscando fundamentos.</li>
<li><strong>10.</strong> Rúbrica rápida: tema (0,5) · tesis (1) ·
argumento (1) · opinión razonada (1,5) = 4 puntos.</li>
</ul>
<p><em>Nota: los ejercicios 4, 7, 9 y 10 (marcados con ✍) son los que
mejor entrenan el comentario de texto y la argumentación de cara al
examen del tema 1.</em></p>
` },
  "fil-ficha-t2":{ subject:"fil", tema:"Filosofía · Tema 2", title:"Ficha de ejercicios T2 (con soluciones)", html:`
<ul>
<li><strong>Materia</strong>: Filosofía, 1.º de Bachillerato (IES Martín
de Bertendona, modelo A, castellano).</li>
<li><strong>Uso/sesión</strong>: Tema 2 (2.ª evaluación). Se rellena a
lo largo de las sesiones del tema y en casa. Algunos ejercicios remiten
a <strong>textos del libro</strong> (McGraw Hill, unidad 4); el profesor
indica la página.</li>
<li><strong>Saberes</strong>: A.2.1 (el ser humano como sujeto de la
pregunta filosófica; sentido de la vida), A.2.2 (naturaleza y cultura;
concepciones filosóficas del ser humano), A.2.3 (actitudes ante la
diversidad cultural), A.2.4 (estructura psicosomática; conciencia y
lenguaje; identidad personal), A.2.5 (tipos de identidad;
transhumanismo).</li>
<li><strong>Criterios/CE</strong>: comprender qué es el ser humano y qué
lo distingue; relacionar naturaleza y cultura; conocer las grandes
concepciones filosóficas del ser humano; plantear el problema de la
identidad personal y el del sentido de la existencia; leer y comentar
textos.</li>
<li><strong>Duración</strong>: transversal al tema; cada bloque, 10-15
minutos en clase o en casa.</li>
<li><strong>Material</strong>: esta ficha + el libro del alumnado. Se
responde en la propia ficha (líneas) o en el cuaderno cuando se
indique.</li>
<li><strong>Fuente de origen</strong>: estructura de la unidad 4 del
libro (naturaleza/cultura, cuerpo y mente, concepciones históricas,
identidad, sentido) y dosier de Filosofía §3.3; ejercicios de creación
propia.</li>
</ul>
<blockquote>
<p>Cómo se corrige: las respuestas cortas se comentan en voz alta al
terminar cada bloque; las de desarrollo (marcadas con ✍) van al cuaderno
y las revisa el profesor. Al final hay una hoja de soluciones
orientativas para el profesor.</p>
</blockquote>
<hr />
<h2
id="bloque-a-la-pregunta-antropológica-el-enigma-del-ser-humano">Bloque
A · La pregunta antropológica (el enigma del ser humano)</h2>
<p><strong>1. Etimología.</strong> La palabra «antropología» viene del
griego <em>ánthropos</em> (____________) y <em>logos</em>
(____________). Define con tus palabras qué estudia la
<strong>antropología filosófica</strong> y en qué se diferencia de la
antropología científica o cultural:</p>
<hr />
<p><strong>2. Protágoras.</strong> El sofista Protágoras afirmó: «El
hombre es la medida de todas las cosas». Explica en una o dos frases qué
quería decir:</p>
<hr />
<hr />
<h2
id="bloque-b-naturaleza-y-cultura-hominización-y-humanización">Bloque B
· Naturaleza y cultura (hominización y humanización)</h2>
<p><strong>3. Naturaleza y cultura.</strong> Completa la tabla con lo
que aporta cada una (apóyate en el apunte y en clase):</p>
<table>
<thead>
<tr>
<th></th>
<th><strong>Naturaleza</strong> (lo biológico)</th>
<th><strong>Cultura</strong> (lo aprendido)</th>
</tr>
</thead>
<tbody>
<tr>
<td>¿Qué aporta?</td>
<td></td>
<td></td>
</tr>
<tr>
<td>¿Cómo se recibe?</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Proceso</td>
<td></td>
<td></td>
</tr>
<tr>
<td>¿Es igual en todas partes?</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>4. Hominización y humanización.</strong> Define cada proceso
y cita los cuatro factores que hicieron posible la humanización:</p>
<ul>
<li><strong>Hominización</strong>:
____________________________________________________</li>
<li><strong>Humanización</strong>:
____________________________________________________</li>
<li>Factores: 1) ______________ 2) ______________ 3) ______________ 4)
______________</li>
</ul>
<p><strong>5. Innatismo y ambientalismo.</strong> Explica en el cuaderno
✍ en qué consiste el debate entre <strong>innatismo</strong> y
<strong>ambientalismo</strong>, y qué respuesta da la «dialéctica
naturaleza-cultura» (por qué nacemos biológicamente “inacabados”).</p>
<hr />
<h2 id="bloque-c-cultura-identidad-y-diversidad">Bloque C · Cultura,
identidad y diversidad</h2>
<p><strong>6. Actitudes ante la diversidad.</strong> Une cada actitud
con su definición escribiendo la letra en la casilla central:</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Actitud</th>
<th></th>
<th>Definición</th>
</tr>
</thead>
<tbody>
<tr>
<td>1. Etnocentrismo</td>
<td></td>
<td>a) Defiende el diálogo y el enriquecimiento mutuo sobre unos mínimos
comunes (derechos humanos, dignidad).</td>
</tr>
<tr>
<td>2. Relativismo cultural</td>
<td></td>
<td>b) Juzga las demás culturas desde la propia, tomándola como el único
modelo válido y superior.</td>
</tr>
<tr>
<td>3. Interculturalidad</td>
<td></td>
<td>c) Cada cultura solo puede entenderse y valorarse según sus propios
criterios; ninguna es mejor que otra.</td>
</tr>
</tbody>
</table>
<p>Respuestas: 1-<strong><em>, 2-</em></strong>, 3-___.</p>
<p><strong>7. Socialización.</strong> Define qué es la
<strong>socialización</strong> y cita al menos tres agentes que la
llevan a cabo:</p>
<hr />
<hr />
<h2 id="bloque-d-el-cuerpo-y-la-mente-dualismo-y-monismo">Bloque D · El
cuerpo y la mente (dualismo y monismo)</h2>
<p><strong>8. Dualismo y monismo.</strong> Completa la tabla:</p>
<table>
<thead>
<tr>
<th></th>
<th><strong>Dualismo</strong></th>
<th><strong>Monismo / materialismo</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>¿De qué estamos hechos?</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Relación cuerpo-mente</td>
<td></td>
<td></td>
</tr>
<tr>
<td>El cuerpo es…</td>
<td></td>
<td></td>
</tr>
<tr>
<td>¿Hay algo tras la muerte?</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>9. Autores.</strong> Une cada autor con su postura sobre el
cuerpo y la mente:</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Autor</th>
<th></th>
<th>Postura</th>
</tr>
</thead>
<tbody>
<tr>
<td>1. Platón</td>
<td></td>
<td>a) El alma es la <strong>forma</strong> del cuerpo vivo; no puede
existir sin él.</td>
</tr>
<tr>
<td>2. Descartes</td>
<td></td>
<td>b) Solo hay <strong>una</strong> realidad: la mente es actividad del
cuerpo (del cerebro).</td>
</tr>
<tr>
<td>3. Aristóteles</td>
<td></td>
<td>c) Dos sustancias: <em>res cogitans</em> (mente) y <em>res
extensa</em> (cuerpo).</td>
</tr>
<tr>
<td>4. Hume / Marx</td>
<td></td>
<td>d) El cuerpo es la <strong>cárcel</strong> del alma inmortal.</td>
</tr>
</tbody>
</table>
<p>Respuestas: 1-<strong><em>, 2-</em></strong>, 3-<strong><em>,
4-</em></strong>.</p>
<hr />
<h2 id="bloque-e-concepciones-históricas-del-ser-humano">Bloque E ·
Concepciones históricas del ser humano</h2>
<p><strong>10. Une cada autor o época con su idea del ser
humano:</strong></p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Autor / época</th>
<th></th>
<th>Idea</th>
</tr>
</thead>
<tbody>
<tr>
<td>1. Aristóteles</td>
<td></td>
<td>a) Ser racional, libre y autónomo, con <strong>dignidad</strong>: un
fin en sí mismo.</td>
</tr>
<tr>
<td>2. S. Agustín / S. Tomás</td>
<td></td>
<td>b) Ser social que se produce a sí mismo mediante el
<strong>trabajo</strong> (y denuncia la alienación).</td>
</tr>
<tr>
<td>3. Descartes</td>
<td></td>
<td>c) Animal <strong>racional</strong> y <strong>social</strong>.</td>
</tr>
<tr>
<td>4. Kant</td>
<td></td>
<td>d) Ser que debe superarse y crear sus propios valores
(<strong>superhombre</strong>).</td>
</tr>
<tr>
<td>5. Marx</td>
<td></td>
<td>e) Criatura a imagen de Dios; vida orientada a la salvación
(teocentrismo).</td>
</tr>
<tr>
<td>6. Nietzsche</td>
<td></td>
<td>f) Sujeto que <strong>piensa</strong>: la razón define al yo.</td>
</tr>
<tr>
<td>7. Sartre / Beauvoir</td>
<td></td>
<td>g) Ser libre y sin esencia previa: un <strong>proyecto</strong> que
se hace a sí mismo.</td>
</tr>
</tbody>
</table>
<p>Respuestas: 1-<strong><em>, 2-</em></strong>, 3-<strong><em>,
4-</em></strong>, 5-<strong><em>, 6-</em></strong>, 7-___.</p>
<hr />
<h2 id="bloque-f-conciencia-lenguaje-identidad-y-sentido">Bloque F ·
Conciencia, lenguaje, identidad y sentido</h2>
<p><strong>11. Conciencia y lenguaje.</strong> Completa:</p>
<ul>
<li>La <strong>conciencia</strong> es
__________________________________________________; la
<strong>autoconciencia</strong> es
__________________________________________________ (lo que se llama
<em>introspección</em>).</li>
<li>El lenguaje humano es <strong>articulado y simbólico</strong>, y sus
signos son <strong>convencionales</strong> y
<strong>arbitrarios</strong>. Explica con un ejemplo qué significa que
el signo sea <em>arbitrario</em>:</li>
</ul>
<hr />
<p><strong>12. Identidad personal.</strong> El <strong>barco de
Teseo</strong> plantea el problema de la identidad. Cita los tres
criterios que han propuesto los filósofos para explicar qué nos hace ser
“los mismos” a lo largo del tiempo:</p>
<ul>
<li><ol type="1">
<li>______________________________ (criterio de Locke)</li>
</ol></li>
<li><ol start="2" type="1">
<li><hr /></li>
</ol></li>
<li><ol start="3" type="1">
<li><hr /></li>
</ol></li>
</ul>
<p><strong>13. Sentido de la existencia.</strong> Resume las tres
grandes respuestas a la pregunta por el sentido de la vida:</p>
<ul>
<li><ol type="a">
<li>La vida <strong>no tiene sentido</strong> (es absurda):
________________________________</li>
</ol></li>
<li><ol start="2" type="a">
<li>La vida <strong>sí tiene sentido</strong>: trascendente / inmanente:
____________________</li>
</ol></li>
<li><ol start="3" type="a">
<li><strong>Cada persona</strong> construye su sentido:
__________________________________</li>
</ol></li>
</ul>
<p><strong>14. Mini-comentario.</strong> Elige uno de estos textos y
coméntalo en el cuaderno ✍: la cita de Kant («trata a la humanidad
siempre como un fin y nunca solo como un medio») o la de Sartre («la
existencia precede a la esencia»). Indica:</p>
<ul>
<li><strong>Tema</strong>: ¿de qué trata el texto en una frase?</li>
<li><strong>Tesis</strong>: ¿qué defiende el autor?</li>
<li><strong>Un argumento</strong> que da para defenderlo.</li>
<li><strong>Tu opinión</strong> con una razón (¿estás de acuerdo? ¿por
qué?).</li>
</ul>
<hr />
<h2 id="hoja-de-soluciones-orientativas-para-el-profesor">Hoja de
soluciones orientativas (para el profesor)</h2>
<ul>
<li><strong>1.</strong> <em>ánthropos</em> = ser humano; <em>logos</em>
= estudio/razón. La antropología filosófica busca, con conceptos y
argumentos, aquello que nos define y nos distingue del resto de los
seres vivos; la antropología científica o cultural describe los pueblos
y sus costumbres mediante la observación.</li>
<li><strong>2.</strong> Somos nosotros quienes valoramos, medimos e
interpretamos la realidad: el ser humano es el centro y el criterio de
la reflexión.</li>
<li><strong>3.</strong> Naturaleza: el cuerpo, el cerebro, los instintos
reducidos y las capacidades heredadas; se recibe por herencia genética;
proceso = hominización; es igual en toda la especie. Cultura:
conocimientos, valores, lengua, técnicas y costumbres; se recibe por
aprendizaje y socialización; proceso = humanización; varía de una
sociedad a otra.</li>
<li><strong>4.</strong> Hominización: proceso biológico que condujo de
los primeros primates al <em>Homo sapiens</em> (marcha bípeda,
encefalización, liberación de las manos con pulgar oponible, vida
social). Humanización: proceso por el que ese homínido llega a ser
plenamente humano gracias a la cultura. Factores: fuego, herramientas,
agricultura y ganadería, organización social.</li>
<li><strong>5.</strong> Innatismo: lo decisivo es lo heredado (“de
fábrica”). Ambientalismo: lo decisivo es lo aprendido del entorno. La
dialéctica naturaleza-cultura responde que somos las dos cosas
entrelazadas: nacemos biológicamente “inacabados” (instintos reducidos,
mundo abierto) y la cultura actúa como una “segunda matriz” en la que
terminamos de formarnos.</li>
<li><strong>6.</strong> 1-b, 2-c, 3-a.</li>
<li><strong>7.</strong> Socialización: proceso por el que aprendemos las
normas, valores y modelos de nuestra comunidad. Agentes: la familia, la
escuela, el grupo de amigos, los medios de comunicación, la lengua.</li>
<li><strong>8.</strong> Dualismo: dos realidades (cuerpo material + alma
o mente inmaterial); el alma es superior y puede existir sin el cuerpo;
el cuerpo es cárcel (Platón) o máquina (Descartes); el alma puede
sobrevivir (inmortalidad). Monismo: una sola realidad (somos cuerpo; la
mente es actividad suya); lo mental depende de lo físico; el cuerpo es
parte esencial de lo que somos; con la muerte del cuerpo se acaba
todo.</li>
<li><strong>9.</strong> 1-d, 2-c, 3-a, 4-b.</li>
<li><strong>10.</strong> 1-c, 2-e, 3-f, 4-a, 5-b, 6-d, 7-g.</li>
<li><strong>11.</strong> Conciencia: no solo percibimos el mundo, sino
que sabemos que lo percibimos. Autoconciencia: la capacidad de volvernos
sobre nosotros mismos y examinar nuestros propios pensamientos y
sentimientos (introspección). Signo arbitrario: no hay relación natural
entre la palabra y la cosa que nombra (p. ej. “árbol” no se parece al
árbol; es un acuerdo compartido por la comunidad).</li>
<li><strong>12.</strong> La memoria (Locke: la continuidad de la
conciencia y de los recuerdos); la continuidad corporal (el cuerpo
mantiene una continuidad en el espacio y el tiempo); el relato que hago
de mí mismo (la identidad como historia que enlaza lo que fui, soy y
quiero ser).</li>
<li><strong>13.</strong> a) Absurda: ciertos existencialistas (Camus, el
mito de Sísifo; el primer Sartre, “arrojado al mundo”). b) Trascendente
(religiones: el sentido está más allá, en Dios) o inmanente (en esta
misma vida: desarrollar capacidades, el trabajo, la relación con los
demás y la naturaleza). c) Cada persona da sentido a su vida con sus
decisiones y compromisos (libertad y proyecto; frente al “vacío
existencial”).</li>
<li><strong>14.</strong> Rúbrica rápida: tema (0,5) · tesis (1) ·
argumento (1) · opinión razonada (1,5) = 4 puntos.</li>
</ul>
<p><em>Nota: los ejercicios 5 y 14 (marcados con ✍) son los que mejor
entrenan la argumentación y el comentario de texto de cara al examen del
tema 2.</em></p>
` },
  "hf-paquete-t3t5":{ subject:"hf", tema:"Historia de la Filosofía · Temas 3-5", title:"Paquete de apoyo: mito, logos, presocráticos, sofistas", html:`
<p><strong>Materia:</strong> Historia de la Filosofía, 2.º de
Bachillerato (IES Martín de Bertendona, modelo A, castellano).</p>
<p><strong>Uso/sesión:</strong> Q2 (21 sep-2 oct, fechas estimadas;
temas 3 y 4) y Q3 (5-16 oct, estimada; tema 5). La sección (a) es
trabajo previo del profesor (corregir los apuntes antes de subirlos a
Classroom); (c) y (b) se usan, en ese orden, en la primera y la segunda
sesión del tema 3; (d) sirve para la sesión de arranque del tema 3 o
como tarea de casa con corrección en clase.</p>
<p><strong>Saberes:</strong> 3 (surgimiento de la filosofía; cosmovisión
mítica y teorización filosófica), 4 (el problema de la realidad en los
presocráticos) y 5 (sofistas y Sócrates; Aspasia y la mujer).
Transversalmente, 1 y 2.</p>
<p><strong>Criterios/CE:</strong> 1.1 (uso riguroso de fuentes: la fe de
erratas enseña a leer los apuntes con criterio), 4.1 y 4.2 (comprensión
de las propuestas filosóficas), 5.1 (oposición y complementariedad entre
concepciones: mito y logos, sofistas y Sócrates), 6.1 y 6.2 (los mismos
problemas en distintas épocas; el cuestionamiento), 7.1 (comparar textos
literarios, religiosos y científicos). La mini-tarea de (d) entrena el
Ejercicio 3 de la PAU (4.1, 4.2, 5.1, 6.1). Instrumento del 30 %:
“cuestionarios y otras actividades” (tabla de §2.4 del dosier).</p>
<p><strong>Duración:</strong> (a) 1 h de trabajo del profesor; (b) 35-45
min de aula; (c) 20 min de aula; (d) una sesión de 50 min (o 25 min de
aula + tarea de casa).</p>
<p><strong>Fuente de origen:</strong> (a)
<code>DPTO\\carpetas_drive_resultados\\apuntes_A03.pdf</code>,
<code>apuntes_A04.pdf</code>, <code>apuntes_A05.pdf</code> (apuntes del
departamento, 2025-26), comprobados con
<code>OBS\\01_proyectos\\ltfh\\Caracteristicas-cultura-griega.md</code>;
(b)
<code>DPTO\\carpeta_drive_hf\\01_Antigua\\A-1 Surgimiento de la filosofia, mito Vs logos.docx</code>
(tabla de seis filas) + creación propia; (c) traducción íntegra del
euskera de
<code>OBS\\01_proyectos\\ltfh\\Mitoa-vs-logosa-flashcards.md</code> (chat
de 13-9-2025); (d) adaptación al castellano de
<code>OBS\\01_proyectos\\ltfh\\Caracteristicas-cultura-griega.md</code>
(lista de 12 rasgos fijada por el profesor el 14-9-2025) + creación
propia (columna de relación con la filosofía, preguntas y mini-tarea).
<strong>Añadido de Jenófanes:</strong> apunte impreso del compañero
(Fran), fotografías en
<code>fuentes fijas\\fran_hf_primeros_temas\\hf_primeros_temas\\</code>.</p>
<hr />
<h2 id="índice">Índice</h2>
<ul>
<li><ol type="a">
<li>Fe de erratas y mejoras de los apuntes A03, A04 y A05</li>
</ol></li>
<li><ol start="2" type="a">
<li>Tabla mito/logos ampliada (10 criterios, tres filas-ejemplo, 6
preguntas de aplicación)</li>
</ol></li>
<li><ol start="3" type="a">
<li>Flashcards mito/logos (traducidas del euskera) con secuencia de 20
minutos</li>
</ol></li>
<li><ol start="4" type="a">
<li>Los 12 rasgos de la cultura griega: hoja del alumnado, preguntas y
mini-exposición argumentada</li>
</ol></li>
</ul>
<hr />
<h2
id="a-fe-de-erratas-y-mejoras-de-los-apuntes-del-departamento-a03-a04-a05">(a)
Fe de erratas y mejoras de los apuntes del departamento (A03, A04,
A05)</h2>
<h3 id="guion-para-el-profesor">Guion para el profesor</h3>
<p><strong>Cómo se ha hecho.</strong> Se han leído íntegros los tres
apuntes en su versión de texto extraído. La columna “Página” es la del
pie “Volver al índice N” del PDF conjunto del bloque A (A03 = pp. 8-16;
A04 = pp. 17-25; A05 = pp. 25-37). Los datos históricos se han
contrastado con el conocimiento general de referencia (cronologías
habituales de los manuales de bachillerato y de historia de la filosofía
antigua) y, para los rasgos de la cultura griega, con la lista de 12
rasgos de <code>Caracteristicas-cultura-griega.md</code>.</p>
<p><strong>Tipos.</strong> <em>errata</em> = falta ortográfica,
tipográfica o de puntuación; <em>dato</em> = fecha, nombre o hecho
incorrecto o impreciso; <em>redacción</em> = frase rota, ambigua o mal
construida; <em>afirmación dudosa</em> = simplificación que conviene
matizar; <em>mejora</em> = no es un error, pero conviene añadir algo;
<em>comprobar</em> = puede ser un defecto de la extracción del texto y
no del PDF: mirar el PDF antes de tocarlo.</p>
<p><strong>Valoración honesta.</strong> Los tres apuntes son buenos y se
pueden dar al alumnado con retoques. El A05 es el mejor del bloque
(cubre literalmente el saber básico 5, incluida la parte de género) y
sus errores son casi todos de puntuación. El A03 tiene el mejor “resumen
conceptual” del bloque (realidad/apariencia, uno/múltiple, arché) y sus
problemas están en la cronología de la colonización. El A04 está bien
planteado (physis, arché, tabla de etapas, hilozoísmo/mecanicismo) y
solo necesita unificar fechas y matizar tres afirmaciones. Cronologías
que están <strong>bien</strong> y no hay que tocar: Tales (h. 624-546),
Anaximandro (h. 610-546), Pitágoras (h. 570-490/495), Heráclito (h.
544-483), Empédocles (h. 495-435), Anaxágoras (h. 500-428), Demócrito
(h. 460-370), Protágoras (h. 485-411), Gorgias (h. 480-380), Sócrates
(470-399), Platón (427-347), Aristóteles (384-322), Guerra del
Peloponeso (431-404), Pericles al frente de Atenas (461-429), Solón
(594), Clístenes (508/507), destrucción de Mileto (494), Montesquieu
(1689-1755), Rosa Parks (1955). También están bien las citas de la
<em>Apología</em> (el oráculo de Delfos), del <em>Teeteto</em> (“tal
como me parecen las cosas, tales son para mí”) y de Aristóteles sobre
Sócrates (“los razonamientos inductivos y la definición de lo
universal”), la composición de la Boulé (500 miembros, 50 por tribu,
sorteo), la terna isonomía/isegoría/parresía, las dos partes del método
socrático y la explicación de la frase de Protágoras en sentido
individual y colectivo.</p>
<h3
id="a03.-el-surgimiento-de-la-filosofía-occidental-en-grecia-pp.-8-16">A03.
El surgimiento de la filosofía occidental en Grecia (pp. 8-16)</h3>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Página/ubicación</th>
<th>Texto erróneo</th>
<th>Corrección</th>
<th>Tipo</th>
</tr>
</thead>
<tbody>
<tr>
<td>p. 8, preguntas del caso “Lía”</td>
<td>“¿Crees que seguimos necesitando relatos de héroes o modelo?”</td>
<td>“…relatos de héroes o modelos?”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 9, primer párrafo</td>
<td>“los mitos frente a la explicación racional o logos Logos, que
defiende que la realidad sigue un orden necesario…”</td>
<td>“los mitos frente a la explicación racional o logos, que defiende
que la realidad sigue un orden necesario que puede conocerse mediante la
razón” (sobra el segundo “Logos”)</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 9, “¿Dónde y cuándo surgió la filosofía?”</td>
<td>“la más floreciente de las ciudades que se desarrollan como
resultado de las colonizaciones (siglos IX-VII), en siglo VI a. C. , que
marca el final del periodo arcaico”</td>
<td>“la más floreciente de las ciudades jonias, enriquecidas por las
colonizaciones (siglos VIII-VI a. C.), en el siglo VI a. C., al final
del periodo arcaico”. Tres cosas: falta “el” (“en el siglo VI”); sobra
el espacio antes de la coma; y la gran colonización griega se fecha
entre h. 750 y h. 550 a. C. (siglos VIII-VI), no IX-VII. En la p. 10 el
mismo apunte dice “siglos IX, VIII y VII”: unificar en VIII-VI</td>
<td>dato + errata</td>
</tr>
<tr>
<td>p. 9, “¿Por qué en Mileto y no en Atenas?”</td>
<td>“Para el filósofo inglés Bertrand Russell”</td>
<td>“británico” (Russell nació en Gales). Detalle menor; se puede
dejar</td>
<td>dato (menor)</td>
</tr>
<tr>
<td>p. 9</td>
<td>“las áreas griegas colonizadas de Jonia, y Magna Grecia, eran más
ricas”</td>
<td>“las áreas griegas de Jonia y de la Magna Grecia eran más ricas”
(comas sobrantes)</td>
<td>errata</td>
</tr>
<tr>
<td>p. 9</td>
<td>“época de Pericles (495-429 a. C)”</td>
<td>“(h. 495-429 a. C.)”: falta el punto; el año de nacimiento es
aproximado</td>
<td>errata</td>
</tr>
<tr>
<td>p. 10, tabla de periodos</td>
<td>En el texto extraído las columnas salen mezcladas (“SÓCRATES:
470-399 a. C 495- 429 a. C. Siglo de Pericles”)</td>
<td>En el PDF la tabla se ve bien (informe H3). Solo comprobar la fila
“HELENÍSTICO III-I a. C.”: el helenismo empieza en 323 a. C. (muerte de
Alejandro), es decir, a finales del siglo IV; “IV-I a. C.” o “323-31 a.
C.” es más exacto</td>
<td>comprobar + dato (menor)</td>
</tr>
<tr>
<td>p. 10, “Sociedad arcaica”</td>
<td>“se gana el respeto y el honor (timé) en los ojos de sus pares”</td>
<td>“a los ojos de sus pares”</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 10</td>
<td>“Los poemas homéricos ( la Ilíada y la Odisea)”</td>
<td>“(la Ilíada y la Odisea)”: espacio sobrante</td>
<td>errata</td>
</tr>
<tr>
<td>p. 10, “Colonización (siglos IX, VIII y VII)”</td>
<td>“A consecuencia de este movimiento colonizador surgen ciudades
prósperas como Éfeso, Samos y especialmente Mileto”</td>
<td>Éfeso, Samos y Mileto no nacen de la colonización de los siglos
VIII-VI: son fundaciones jonias muy anteriores (migración jonia, h.
siglos XI-X a. C.). Propuesta: “Gracias a este movimiento colonizador
prosperan las ciudades jonias, como Éfeso, Samos y especialmente Mileto,
que fundó a su vez decenas de colonias en el mar Negro y fue la cuna de
los primeros filósofos”. Título del epígrafe: “COLONIZACIÓN (SIGLOS
VIII-VI a. C.)”</td>
<td>dato</td>
</tr>
<tr>
<td>p. 11, “Entretanto, la aristocracia pierde terreno”</td>
<td>“Todos ellos- pretenden desposeer a la aristocracia”</td>
<td>“Todos ellos pretenden…” (guion sobrante)</td>
<td>errata</td>
</tr>
<tr>
<td>p. 11</td>
<td>“DRACÓN (624) y SOLÓN (594), y las tiranías de Pisistrato y sus
hijos (560-510), seguidas de las reformas de CLÍSTENES (510-507)”</td>
<td>“DRACÓN (h. 621 a. C.), SOLÓN (594 a. C.), las tiranías de
Pisístrato y sus hijos (561-510 a. C.) y las reformas de CLÍSTENES
(508-507 a. C.)”. Falta la tilde de Pisístrato y el “a. C.” de toda la
lista; las fechas del apunte están dentro del margen habitual (Dracón
624/621, Pisístrato 561/560, Clístenes 508/507), pero conviene añadir
“h.”</td>
<td>errata + dato (menor)</td>
</tr>
<tr>
<td>p. 11</td>
<td>“La destrucción de Mileto por los persas en el 494 a. C. marca el
inicio del periodo clásico”</td>
<td>Es una convención del propio apunte; la mayoría de manuales sitúan
el inicio del periodo clásico en el fin de las Guerras Médicas (480/479
a. C.). Propuesta: “…en el 494 a. C. anuncia el final del periodo
arcaico; el periodo clásico suele fecharse desde el fin de las Guerras
Médicas (480 a. C.)”. Así cuadra con la tabla de la p. 10 (“CLÁSICO V-IV
a. C.”) y con la p. 26 del A05</td>
<td>afirmación dudosa (convención)</td>
</tr>
<tr>
<td>p. 11, “El paso del mito al logos”</td>
<td>“ni un clero celoso de por mantenerla”</td>
<td>“ni un clero celoso de mantenerla”</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 12, “Factores culturales”</td>
<td>“aceleró el lenguaje escrito”</td>
<td>“impulsó la escritura”</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 13, tabla mito/logos, fila “Visión del mundo”</td>
<td>Logos: “Racional y mecanicista: el mundo funciona según leyes
naturales”</td>
<td>“Racional: el mundo funciona según leyes naturales (necesidad)”.
“Mecanicista” solo vale para los atomistas; los milesios y Heráclito son
hilozoístas, como explica el propio A04 (p. 18, nota 2)</td>
<td>afirmación dudosa</td>
</tr>
<tr>
<td>p. 13, tabla mito/logos, fila “Tiempo”</td>
<td>Mito: “Cíclico y predeterminado por el orden divino”; Logos: “Lineal
o transformador”</td>
<td>Matiz: el tiempo cíclico también es una idea filosófica griega
(Heráclito, estoicos). Propuesta: Mito: “Tiempo primordial, ‘en el
principio’, fuera de la historia”; Logos: “Tiempo natural, regular y
medible (los ciclos de los astros)”. Opcional</td>
<td>afirmación dudosa (matiz)</td>
</tr>
<tr>
<td>p. 14, “Características de la filosofía”</td>
<td>“las cosas suceden cuándo y cómo tienen que suceder”</td>
<td>“cuando y como tienen que suceder” (son adverbios relativos, sin
tilde)</td>
<td>errata</td>
</tr>
<tr>
<td>p. 14</td>
<td>“La idea de permanencia la idea de que las cosas suceden como tienen
que suceder se halla…”; “temperaturas determinadas-;”</td>
<td>“La idea de permanencia: la idea de que las cosas suceden como
tienen que suceder se halla…” (faltan los dos puntos); “temperaturas
determinadas;”</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 14</td>
<td>“esta manera de ser constante es lo que los griegos denominaron la
esencia (eidos)”</td>
<td>Matiz para el profesor: <em>eidos</em> significa “forma, aspecto” y
es el término de Platón para las Ideas; la palabra griega para esencia
es <em>ousía</em>. Para el alumnado basta “esencia”; si se mantiene el
griego: “esencia (ousía; Platón la llamará eidos o idea)”</td>
<td>afirmación dudosa (matiz)</td>
</tr>
<tr>
<td>p. 14</td>
<td>“REALIDAD APARIENCIA”; “UNO MÚLTIPLE”</td>
<td>“REALIDAD / APARIENCIA”; “UNO / MÚLTIPLE”: comprobar que en el PDF
no se haya perdido la barra o el “frente a”</td>
<td>comprobar</td>
</tr>
<tr>
<td>p. 14</td>
<td>“el término esencia se opone el de apariencia”; “pero siempre es
agua..”</td>
<td>“se opone al de apariencia”; “siempre es agua.”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 14, “La razón frente a los sentidos”</td>
<td>“para ir más allá de los que nos muestran nuestros sentidos”</td>
<td>“más allá de lo que nos muestran nuestros sentidos”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 15, nota final</td>
<td>“Se volverá a tratar esta diferencia en apartado El concepto de
Realidad”</td>
<td>“en el apartado…”</td>
<td>errata</td>
</tr>
<tr>
<td>pp. 9-16 (todo el tema) y A04</td>
<td>Alternan “arjé”, “arché”, “arkhé” y “arché, arkhé o arjé”</td>
<td>Elegir una grafía para el alumnado (recomendación: <em>arché</em>,
la que usan la tabla de A04 y el glosario) y citar las otras una sola
vez en el glosario</td>
<td>redacción (coherencia)</td>
</tr>
<tr>
<td>p. 16, glosario “Lo Uno”</td>
<td>“frente a las múltiple apariencia”</td>
<td>“frente a las múltiples apariencias”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 16, glosario</td>
<td>Los términos y las definiciones salen en columnas separadas en el
texto extraído</td>
<td>En el PDF se ve bien; nada que corregir</td>
<td>comprobar (correcto)</td>
</tr>
</tbody>
</table>
<h3
id="a04.-el-problema-de-la-realidad-en-los-presocráticos-pp.-17-25">A04.
El problema de la realidad en los presocráticos (pp. 17-25)</h3>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Página/ubicación</th>
<th>Texto erróneo</th>
<th>Corrección</th>
<th>Tipo</th>
</tr>
</thead>
<tbody>
<tr>
<td>p. 17, párrafo 2</td>
<td>“se centraron en explicar la Physis naturaleza fundamental de la
realidad y el cosmos:. «Physis» significa”</td>
<td>“se centraron en explicar la physis (naturaleza fundamental de la
realidad y del cosmos). «Physis» significa…” (faltan los paréntesis y
sobra “:.”)</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 17, “El concepto de Realidad”</td>
<td>“La Physis (naturaleza) es realidad que investigan los
presocráticos”</td>
<td>“es la realidad que investigan”</td>
<td>errata</td>
</tr>
<tr>
<td>pp. 17-18, nota 1</td>
<td>“actualmente la cifra se acerca a los 8400 millones” (con enlace “en
tiempo real”)</td>
<td>El dato es correcto como aproximación (2026: unos 8.300 millones
según la ONU). El enlace de la nota se pierde al imprimir: añadir la URL
o suprimir la nota</td>
<td>mejora</td>
</tr>
<tr>
<td>p. 18, “Dinamismo y necesidad”</td>
<td>“todos los seres que lo pueblan están en su sito”</td>
<td>“en su sitio”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 18, “El problema de la realidad: el cambio”</td>
<td>“Se sorprenden de que el universo no puro caos sino cosmos”</td>
<td>“de que el universo no sea puro caos, sino cosmos”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 18</td>
<td>“Es por eso que se conoce a este periodo como el periodo
cosmológico”</td>
<td>“Por eso se conoce este periodo como periodo cosmológico”
(galicismo). Opcional</td>
<td>redacción (opcional)</td>
</tr>
<tr>
<td>p. 18, nota 2</td>
<td>“Según el MECANICISMO, el dinamismo de la physis se explica a partir
de la composición y movimiento de elementos materiales (átomos) que
carecen de vida (pluralistas)”</td>
<td>El mecanicismo estricto es el de los atomistas (Leucipo y
Demócrito). Empédocles (Amor y Odio) y Anaxágoras (Nous) no son
mecanicistas puros. Propuesta: “(pluralistas, sobre todo los
atomistas)”. Sobre la p. 23 (“Creen en el azar, a diferencia de los
pensadores anteriores”), conviene presentar en clase las <strong>dos
lecturas</strong> (ejercicio de lectura crítica del apunte): (1) en
sentido amplio, “azar” = sin finalidad ni plan, nadie dirige los
choques, que es lo que dicen los apuntes; (2) en sentido estricto,
Demócrito es <strong>determinista</strong> (“nada ocurre al azar, sino
por necesidad”) y el azar como principio (el <em>clinamen</em>) lo
introduce <strong>Epicuro</strong>, más tarde. Las dos coinciden en el
mecanicismo (materia y movimiento sin fin) y en que Empédocles
(Amor/Odio) y Anaxágoras (Nous) no son mecanicistas puros</td>
<td>afirmación dudosa (matiz)</td>
</tr>
<tr>
<td>p. 18, nota 2 y p. 25, glosario</td>
<td>“HILOZOISMO (del griego hylé: materia, y zóé: vida)”; en el glosario
“HILOZOISMO (del griego hyl = materia y zo = vida)”</td>
<td>“HILOZOÍSMO” (la tilde se mantiene en mayúsculas); en el glosario
los términos griegos salen truncados: “hýle = materia y zoé = vida”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 19, tabla-resumen, columna “Periodo”</td>
<td>“VI a. C.” para la corriente metafísica (Heráclito y
Parménides)</td>
<td>“VI-V a. C.” (Heráclito h. 540-480; Parménides h. 515-450 o h.
540-470)</td>
<td>dato</td>
</tr>
<tr>
<td>p. 19, tabla-resumen, columna “Periodo”</td>
<td>“VI-V a. C.” para los pluralistas</td>
<td>“V a. C.” (Empédocles h. 495-435; Anaxágoras h. 500-428) o “V-IV a.
C.” si se cuenta a Demócrito (h. 460-370)</td>
<td>dato</td>
</tr>
<tr>
<td>p. 19, tabla-resumen, filas de Heráclito y Parménides</td>
<td>En el texto extraído “Todo fluye” aparece como arché de Heráclito y
“Logos (fuego): armonía en la lucha de contrarios” cae en la fila de
Parménides</td>
<td>Comprobar en el PDF que la celda “arché” de Heráclito diga “Fuego
(logos)” y que “Todo fluye” esté en “Características”, y que en
Parménides la celda “arché” sea “El ser es, el no ser no es”.
Probablemente es solo un defecto de extracción, pero es la fila más
importante del tema</td>
<td>comprobar</td>
</tr>
<tr>
<td>p. 19, tabla, y p. 23</td>
<td>“ANAXÁGORAS de Clazomene”</td>
<td>“de Clazómenas” (forma habitual en castellano). Opcional</td>
<td>redacción (opcional)</td>
</tr>
<tr>
<td>p. 20, Tales</td>
<td>“Llegó a ésta conclusión”</td>
<td>“Llegó a esta conclusión” (el demostrativo que acompaña a un nombre
nunca lleva tilde)</td>
<td>errata</td>
</tr>
<tr>
<td>p. 20, Anaximandro</td>
<td>“el apeiron, que· significa lo indefinido”</td>
<td>“que significa” (punto volado sobrante; comprobar en el PDF)</td>
<td>errata (comprobar)</td>
</tr>
<tr>
<td>p. 20, Anaxímenes</td>
<td>Título “ANAXÍMENES (585-525 A. C.)” y primera línea “Para Anaxímenes
(585-524 a. C.)”</td>
<td>Unificar: “ANAXÍMENES (h. 585-525 a. C.)”. Es la errata que ya
señala el dosier</td>
<td>dato (coherencia)</td>
</tr>
<tr>
<td>p. 20, Pitágoras</td>
<td>“Pitágoras (570-490 a. C)”</td>
<td>“(h. 570-495 a. C.)”: falta el punto; 490 y 495 son igual de
aproximados</td>
<td>errata</td>
</tr>
<tr>
<td>p. 21, “Los números son los principios”</td>
<td>“La descripción del mundo hecha por los pitagóricos anticipa las
doctrinas de Copérnico: el cosmos es una esfera en cuyo centro hay un
fuego originario”</td>
<td>Es el sistema de Filolao (siglo V a. C.): la Tierra gira alrededor
de un “fuego central” que no es el Sol. Lo que anticipa es que la Tierra
no está en el centro (Copérnico cita a Filolao como precedente), no el
heliocentrismo. Propuesta: “El pitagórico Filolao (s. V a. C.) fue el
primero en sacar a la Tierra del centro del cosmos: gira, como el Sol,
alrededor de un ‘fuego central’. Copérnico lo citará como
precedente”</td>
<td>afirmación dudosa</td>
</tr>
<tr>
<td>p. 21, Heráclito</td>
<td>“HERÁCLITO DE ÉFESO: TODO FLUYE (544-483 A. C.)”</td>
<td>Correcto como aproximación (h. 540-480). Basta añadir “h.”</td>
<td>correcto</td>
</tr>
<tr>
<td>p. 22, Parménides</td>
<td>“PARMÉNIDES DE ELEA: EL SER ES, EL NO SER NO ES (540-470 A.
C.)”</td>
<td>Hay dos dataciones tradicionales: la de Apolodoro (nacido h. 540, la
que usa el apunte) y la que se deduce del <em>Parménides</em> de Platón
(nacido h. 515, muerto h. 450), hoy más aceptada. No es un error; si se
cambia: “(h. 515-450 a. C.)”</td>
<td>dato (matiz)</td>
</tr>
<tr>
<td>p. 22, Parménides</td>
<td>“En su poema titulado Sobre la naturaleza. Parménides distingue la
Vía de la verdad, y Vía de la opinión”</td>
<td>“En su poema titulado <em>Sobre la naturaleza</em>, Parménides
distingue la Vía de la verdad y la Vía de la opinión”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 22</td>
<td>“garantiza la homogeneidad -es la única figura en la que…”</td>
<td>“garantiza la homogeneidad: es la única figura en la que…”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 22</td>
<td>“entre verdad y apariencia (u opinión}”; “por encima de la
apariencia sensibles”</td>
<td>“(u opinión)”; “por encima de las apariencias sensibles”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 23, “Características generales de los pluralistas”</td>
<td>“partículas eternas e inmutables(Parménides)”</td>
<td>“inmutables (Parménides)”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 23, Anaxágoras</td>
<td>“partículas cualitativamente distintas e indefinidamente
divisibles., que llamó spérmata”</td>
<td>“divisibles, que llamó spérmata”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 23, Demócrito</td>
<td>“chocan entre sí porque poseen movimiento propio (torbellino
cósmico) las lleva a unirse”</td>
<td>“chocan entre sí porque poseen movimiento propio; el torbellino
cósmico las lleva a unirse”</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 23, Demócrito</td>
<td>“Las ideas de Demócrito, junto con las de Platón y Aristóteles, son
uno de los tres grandes sistemas de la filosofía griega”</td>
<td>“El sistema de Demócrito es, junto con los de Platón y Aristóteles,
uno de los tres grandes sistemas de la filosofía griega”</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 23, Demócrito</td>
<td>No se menciona a Leucipo</td>
<td>Añadir al menos una vez “Leucipo (su maestro, h. 470 a. C.) y
Demócrito de Abdera”: los manuales y la PAU hablan de “los
atomistas”</td>
<td>mejora</td>
</tr>
<tr>
<td>p. 24, “Aportes”</td>
<td>“la importancia histórica de los filósofos presocráticos La pregunta
acerca del arjé”</td>
<td>“presocráticos. La pregunta…” (falta el punto)</td>
<td>errata</td>
</tr>
<tr>
<td>p. 25, glosario “Mecanicismo”</td>
<td>“choques y movimientos de átomos en el vacío, El universo no
obedece”</td>
<td>“en el vacío. El universo no obedece”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 25, glosario “Dualismo”</td>
<td>“Ejemplo: Pitágoras, que plantea la existencia de pares opuestos
(par/impar, limitado/ilimitado)”</td>
<td>Correcto en lo esencial. Matiz: el “dualismo” pitagórico que importa
en el tema es el antropológico (alma/cuerpo); los pares de opuestos son
otra cosa. Se puede dejar</td>
<td>correcto (matiz)</td>
</tr>
</tbody>
</table>
<h3 id="añadido-jenófanes-de-colofón-del-apunte-de-fran">Añadido:
Jenófanes de Colofón (del apunte de Fran)</h3>
<p>El apunte del compañero (Fran) incluye a <strong>Jenófanes de
Colofón</strong> (datación insegura: nacido h. 580-570 y muerto h.
475-466 a. C.; vivió muchos años. El apunte de Fran da «570-540», que
parece corresponder solo a su época de madurez), que no está en los
apuntes A03-A05 ni en el libro MDLTFH. Encaja entre Pitágoras y
Heráclito. Contenido para el alumnado:</p>
<ul>
<li><strong>Crítica de la religión antropomórfica (su aportación
principal):</strong> denuncia que Homero y Hesíodo atribuyen a los
dioses las peores acciones humanas (robos, engaños). Los dioses son una
<strong>proyección</strong> del ser humano: «si los bueyes, los caballos
o los leones pudieran pintar, representarían a los dioses con forma de
buey, de caballo o de león». Frente a eso defiende un <strong>dios
único</strong>, «el mayor entre dioses y hombres, ni en figura ni en
pensamiento semejante a los mortales»: un principio racional, no un
personaje mítico. Es una de las críticas racionales del mito que abren
el paso al logos.</li>
<li><strong>Sobre el arché:</strong> a veces se le atribuyen el agua y
la tierra como principios (así en el apunte de Fran), pero su aportación
decisiva no es cosmológica, sino la crítica de la religión.</li>
<li><strong>Importancia:</strong> se le considera <strong>precursor de
la escuela eleática</strong> (Parménides): la idea de un ser divino uno
e inmóvil prepara la noción eleática del ser único.</li>
</ul>
<p>Se recoge también en el ítem adicional del cuestionario del tema 4 y
en la tabla de datación de tres fuentes de
<code>cuestionarios_T3-T5_forms.md</code>.</p>
<h3
id="a05.-filosofía-y-ciudadanía-en-la-ilustración-griega-pp.-25-37">A05.
Filosofía y ciudadanía en la Ilustración griega (pp. 25-37)</h3>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Página/ubicación</th>
<th>Texto erróneo</th>
<th>Corrección</th>
<th>Tipo</th>
</tr>
</thead>
<tbody>
<tr>
<td>p. 25, pie de foto</td>
<td>“Pnyx, Atenas, Lugar en donde se celebraba la asamblea”</td>
<td>“La Pnix (Atenas), lugar donde se celebraba la asamblea”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 25, caso Rosa Parks</td>
<td>“¿Deberías cumplir una la ley (política) que consideras
injusta”</td>
<td>“¿Deberías cumplir una ley (política) que consideras injusta”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 26, cita en mayúsculas</td>
<td>“‘UNA COSA NO ES JUSTA POR EL HECHO DE SER LEY. DEBE SER LEY PORQUE
ES JUSTA.’ Esta afirmación de Montesquieu (1689-1755)”</td>
<td>La frase circula por internet atribuida a Montesquieu, pero no se
localiza en sus obras (no está en <em>El espíritu de las leyes</em> ni
en las <em>Cartas persas</em>). Escribir “frase atribuida a Montesquieu”
o sustituirla por una fuente segura: la propia Antígona (p. 25) o
Sócrates en el <em>Critón</em>. Las fechas de Montesquieu son
correctas</td>
<td>dato (atribución no verificada)</td>
</tr>
<tr>
<td>p. 26 y p. 29</td>
<td>“Sin embargo, ¿Es eso posible?”; “o ¿Es posible que los valores
morales…”; p. 29: “¿Eso eso cierto?”</td>
<td>“Sin embargo, ¿es eso posible?”; “o ¿es posible…” (tras coma u “o”
la pregunta va en minúscula); “¿Es eso cierto?” (“Eso eso” está
duplicado)</td>
<td>errata</td>
</tr>
<tr>
<td>p. 26</td>
<td>“Puede que estas cuestiones, te resulten más atractivas”</td>
<td>Sin coma: “Puede que estas cuestiones te resulten…”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 26 y siguientes</td>
<td>“la ilustración griega” (minúscula) y “la Ilustración griega”
(mayúscula) alternan</td>
<td>Unificar en “Ilustración griega”: es el nombre del periodo y así
aparece en el saber básico 5</td>
<td>redacción (coherencia)</td>
</tr>
<tr>
<td>p. 26, “¿Cómo se produjo el enriquecimiento de Atenas?”</td>
<td>“Las Guerras Médicas (490-446 a. C.)”</td>
<td>“(499-449 a. C.)” o, si se cuenta solo desde la primera invasión,
“(490-479 a. C.)”. El 446 no es una fecha de las Guerras Médicas: es la
Paz de los Treinta Años entre Atenas y Esparta; la paz con Persia (Paz
de Calias) es del 449 a. C.</td>
<td>dato</td>
</tr>
<tr>
<td>p. 26</td>
<td>“derrotar a la segunda invasión persa (480-478 a. C.). El mismo año
de la victoria, Esparta abandonó la Liga Panhelénica… Atenas aprovechó
su retirada para fundar la Liga de Delos”</td>
<td>“la segunda invasión persa (480-479 a. C.). Al año siguiente de la
victoria (478-477 a. C.), Esparta abandonó la Liga Helénica… la Liga de
Delos”. La victoria decisiva es Platea (479); la Liga de Delos se funda
en 478/477; el nombre habitual de la alianza del 481 es “Liga
Helénica”</td>
<td>dato</td>
</tr>
<tr>
<td>p. 27, Pericles</td>
<td>“Pericles - ejerció el gobierno de Atenas desde el 461 hasta su
muerte en 429 a. C.”</td>
<td>Correcto como simplificación (Pericles no tuvo un cargo de
“gobernante”: fue reelegido estratego casi cada año, sobre todo desde
443). Opcional: “dirigió de hecho la política ateniense desde el
461…”</td>
<td>correcto (matiz)</td>
</tr>
<tr>
<td>p. 27, Pericles</td>
<td>“Pericles -el gran magistrado, general, político y oradora ciudad
vivió con él una época de gran esplendor”</td>
<td>“Pericles fue el gran magistrado, general, político y orador de
Atenas: la ciudad vivió con él una época de gran esplendor”. Es la
errata que ya señala el dosier. Además, el párrafo repite lo dicho
arriba (Partenón, democracia): se puede fundir con el anterior o
suprimir</td>
<td>errata + redacción</td>
</tr>
<tr>
<td>p. 27, “Ciudadanía y democracia”</td>
<td>“afianzar el proceso democratlzador”</td>
<td>“democratizador” (comprobar en el PDF: puede ser un error de
extracción)</td>
<td>errata (comprobar)</td>
</tr>
<tr>
<td>p. 27</td>
<td>“la asamblea, compuesta por todos los varones libres de más de 21
años”</td>
<td>“por todos los ciudadanos varones mayores de 18 años (inscritos en
su demo; en la práctica, a partir de los 20, tras el servicio militar de
la efebía)”. El dato “21 años” no aparece en los manuales; y no bastaba
ser “varón libre”: había que ser ciudadano, hijo de padre y madre
atenienses (ley de Pericles, 451 a. C.), como se dice bien en la
p. 34</td>
<td>dato</td>
</tr>
<tr>
<td>p. 27 y p. 34</td>
<td>“los tribunales de justicia ( Heliea)”; p. 34: “(heliea)”</td>
<td>Unificar: “(Heliea)”, con mayúscula y sin espacio</td>
<td>errata</td>
</tr>
<tr>
<td>p. 27</td>
<td>“Haz clic en las imágenes para ver los vídeos”</td>
<td>Frase de la versión digital: en la copia impresa, sustituir por las
URL o suprimir</td>
<td>mejora</td>
</tr>
<tr>
<td>p. 28, “Los sofistas”</td>
<td>“Los sofistas son extranjeros, enormemente cultos que conocen-a
través de sus numerosos viajes- diversas formas de vivir”</td>
<td>“Los sofistas son, en su mayoría, extranjeros enormemente cultos que
conocen —a través de sus numerosos viajes— diversas formas de vivir”.
Antifonte era ateniense; los demás grandes sofistas (Protágoras de
Abdera, Gorgias de Leontinos, Hipias de Élide, Pródico de Ceos) sí eran
extranjeros. Los guiones deben ser rayas</td>
<td>errata + dato (menor)</td>
</tr>
<tr>
<td>p. 28</td>
<td>“de cara su participación en la estructura política”</td>
<td>“de cara a su participación”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 28</td>
<td>“culpable o Inocente”</td>
<td>“culpable o inocente”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 28</td>
<td>“solo se puede subir o bajar por la escala social de Atenas de la
época hablando o bien o mal”</td>
<td>“…hablando bien o mal”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 28</td>
<td>“Es el origen de la imagen peyorativa del sofista como charlatán
peligroso, perverso relativista y promotor de injusticias que apoyaron
Sócrates y especialmente, Platón”</td>
<td>“…imagen peyorativa del sofista (charlatán peligroso, relativista
perverso y promotor de injusticias) que difundieron Sócrates y,
especialmente, Platón”. Tal como está, parece que Sócrates y Platón
“apoyaron injusticias”</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 29, “La oposición entre physis y nomos”</td>
<td>“physis naturaleza es aquello que no varía”; “nomos convención es lo
no-natural”</td>
<td>“physis (naturaleza) es aquello…”; “nomos (convención) es lo no
natural…”: comprobar si en el PDF hay paréntesis o cursiva que se hayan
perdido</td>
<td>comprobar</td>
</tr>
<tr>
<td>p. 29</td>
<td>“lo que no es ‘Physis’ (naturaleza) y ni es producto de ella”</td>
<td>“ni es producto de ella”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 29, “Las razones que justifican…”</td>
<td>“El mecanicismo de la filosofía atomista, dominante en esa época,
afirma que no existe una finalidad en la naturaleza”</td>
<td>“El mecanicismo de los filósofos pluralistas y atomistas, influyente
en esa época…”. El atomismo no fue “dominante” en la Atenas del siglo V
(Demócrito es contemporáneo de Sócrates); en Atenas pesaba más
Anaxágoras, amigo de Pericles</td>
<td>afirmación dudosa</td>
</tr>
<tr>
<td>p. 29</td>
<td>“Los sofistas, introducen la idea de que la ley es
convencional”</td>
<td>“Los sofistas introducen la idea…”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 30, “Relativismo moral”</td>
<td>“De hecho, en el Protágoras, afirma que algunas leyes producen
mejores resultados que otras”</td>
<td>La idea de que hay opiniones o leyes “mejores” aunque no “más
verdaderas” está en el <em>Teeteto</em> (166d-167d, la llamada “defensa
de Protágoras”), no en el <em>Protágoras</em>. Corregir: “De hecho,
según el <em>Teeteto</em> de Platón, afirma que…”</td>
<td>dato</td>
</tr>
<tr>
<td>p. 30</td>
<td>“PROTÁGORAS DE ABDERA (485-411 A. C.)”</td>
<td>Correcto como aproximación (otras fuentes dan h. 490-420). Añadir
“h.”</td>
<td>correcto</td>
</tr>
<tr>
<td>p. 31</td>
<td>“ESCEPTICISMO: GORGIAS (480-380 A. C.)”</td>
<td>Añadir la procedencia, como con los demás: “Gorgias de Leontinos
(Sicilia)”. Fechas correctas como aproximación (h. 485-380)</td>
<td>mejora</td>
</tr>
<tr>
<td>p. 31, tabla Gorgias/Protágoras, fila “Democracia”</td>
<td>“Aunque aunque Gorgias no reflexiona sobre la igualdad
política”</td>
<td>“aunque Gorgias no reflexiona…”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 31</td>
<td>“Los planteamientos sofistas está en franca oposición”</td>
<td>“están en franca oposición”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 31</td>
<td>“se convertirán en los grandes detractores de la retórica y de la
filosofía que oculta”</td>
<td>Frase confusa. Propuesta: “los grandes detractores de la retórica y
de la sofística que se esconde tras ella”</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 32, “Sócrates”</td>
<td>“Sócrates (470-399 a. C)”; “el tribunal popular que lo juzgo por
introducir nuevos dioses y corromper con sus enseñanzas a la
juventud”</td>
<td>“(470-399 a. C.)”; “que lo juzgó”. Mejora: la acusación literal
(<em>Apología</em> 24b) era “no reconocer a los dioses de la ciudad,
introducir nuevas divinidades y corromper a los jóvenes”</td>
<td>errata + mejora</td>
</tr>
<tr>
<td>p. 32</td>
<td>“Su inconformismo lo impulsó a oponerse a la ignorancia popular y al
conocimiento de los que se decían sabios”</td>
<td>“…y al falso saber de los que se decían sabios”</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 32, cita de la <em>Apología</em></td>
<td>“preguntar al oráculo si habla alguien más sabio que yo”; “refutaría
el vaticinio y demostrarla al oráculo”</td>
<td>“si había alguien más sabio que yo”; “demostraría al oráculo”.
Comprobar en el PDF: pueden ser errores de extracción, pero si están en
el PDF hay que corregirlos porque es un texto de autor</td>
<td>errata (comprobar)</td>
</tr>
<tr>
<td>p. 32, tras la cita</td>
<td>“Filósofos, políticos, poetas y artistas, todos creían tener una
gran sabiduría”</td>
<td>“Políticos, poetas y artesanos: todos creían tener una gran
sabiduría”. En la <em>Apología</em> (21c-22e) Sócrates examina a
políticos, poetas y artesanos; no menciona a filósofos</td>
<td>dato</td>
</tr>
<tr>
<td>p. 33, “El método socrático”</td>
<td>Ironía (parte destructiva) y mayéutica (parte constructiva); aporía;
“arte de la comadrona, por alusión al oficio de su madre”</td>
<td>Correcto. Nada que cambiar</td>
<td>correcto</td>
</tr>
<tr>
<td>p. 34, “Definiciones universales”</td>
<td>“Según Aristóteles, «dos cosas se pueden atribuir a Sócrates: los
razonamientos inductivos y la definición de lo universal»”</td>
<td>Correcto; añadir la referencia: Aristóteles, <em>Metafísica</em>
XIII 4, 1078b 27-29</td>
<td>mejora</td>
</tr>
<tr>
<td>p. 34</td>
<td>“del análisis de las características de ejemplos particulares se
extrae las que todos tienen en común”</td>
<td>“se extraen las que todos tienen en común”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 34, “Ciudadanía en la Ilustración griega”</td>
<td>“el derecho a la palabra (isegoría), a la igualdad ante la ley
(isonomía) y al acceso a los cargos ,”</td>
<td>Quitar el espacio antes de la coma</td>
<td>errata</td>
</tr>
<tr>
<td>p. 34</td>
<td>“Solo podían ser ciudadanos los varones libres, nacidos de padre y
madre atenienses”</td>
<td>Correcto; añadir “(ley de ciudadanía de Pericles, 451 a. C.)”</td>
<td>mejora</td>
</tr>
<tr>
<td>p. 35</td>
<td>“Por tanto, la polis es el espacio donde el individuo alcanzaba su
plenitud”</td>
<td>“la polis era el espacio donde el individuo alcanzaba su plenitud”
(concordancia de tiempos)</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 35</td>
<td>“La educación, debía inculcar el respeto a las leyes”</td>
<td>“La educación debía inculcar…”</td>
<td>errata</td>
</tr>
<tr>
<td>p. 35, “sombras” de la democracia</td>
<td>“–la exclusión de la mayoría de la población y la dependencia del
trabajo esclavo– por un lado, y –la explotación imperialista de las
polis aliadas con que Atenas consiguió ser el modelo…– por otro
lado”</td>
<td>Usar rayas y corregir el relativo: “—la exclusión de la mayoría de
la población y la dependencia del trabajo esclavo— por un lado y —la
explotación imperialista de las polis aliadas, con la que Atenas
consiguió ser el modelo…— por otro”</td>
<td>redacción</td>
</tr>
<tr>
<td>p. 36, Aspasia</td>
<td>“Migró a Atenas a los 18 años”</td>
<td>La edad no consta en las fuentes antiguas; se suele decir “hacia el
450 a. C.”. Propuesta: “Llegó a Atenas hacia el 450 a. C.”. Añadir las
fechas aproximadas de Aspasia (h. 470-h. 400 a. C.), que no aparecen en
el tema</td>
<td>dato (no verificable)</td>
</tr>
<tr>
<td>p. 36</td>
<td>“Se dice que escribió discursos políticos, incluyendo el famoso
Discurso Fúnebre atribuido a Pericles”</td>
<td>Correcto como “se dice”: la atribución la hace Sócrates, con ironía,
en el <em>Menéxeno</em> (236b). Añadir la referencia</td>
<td>mejora</td>
</tr>
<tr>
<td>p. 36</td>
<td>“Fue acusada de impiedad y llevada a juicio, aunque se salvó gracias
a la defensa de Pericles”</td>
<td>Añadir “según cuenta Plutarco (<em>Vida de Pericles</em>, 32)”;
muchos historiadores dudan de que el juicio existiera</td>
<td>mejora</td>
</tr>
<tr>
<td>p. 36</td>
<td>“Aspasia pertenecía al grupo social de las hetairas”</td>
<td>Es la versión tradicional, que procede sobre todo de la comedia, que
la ridiculizaba. Escribir “Según la tradición, Aspasia pertenecía…”</td>
<td>afirmación dudosa (matiz)</td>
</tr>
<tr>
<td>p. 36</td>
<td>“Praxágora (protagonista de las asambleistas)”</td>
<td>“Praxágora (protagonista de <em>La asamblea de las mujeres</em> o
<em>Las asambleístas</em>, de Aristófanes)”</td>
<td>errata + mejora</td>
</tr>
<tr>
<td>p. 36</td>
<td>“Incluso se insinúa que influyó en ciertos pasajes igualitarios de
Platón, pese a su conocida misoginia”</td>
<td>“pese a los pasajes misóginos de sus diálogos”. La “misoginia” de
Platón es discutida: en <em>República</em> V admite mujeres guardianas y
gobernantes (se verá en el tema 9)</td>
<td>afirmación dudosa (matiz)</td>
</tr>
<tr>
<td>p. 36</td>
<td>“Tras la muerte de Pericles y su segundo esposo, Aspasia desaparece
de las fuentes”</td>
<td>“Tras la muerte de Pericles (429 a. C.) y, después, de Lisicles, su
segunda pareja…”. Aspasia, como extranjera, no pudo casarse legalmente
con Pericles</td>
<td>dato (matiz)</td>
</tr>
<tr>
<td>p. 36, cita de Umberto Eco</td>
<td>Sin referencia</td>
<td>Añadir: Umberto Eco, “Filosofar en femenino”, en <em>A paso de
cangrejo</em> (2006; artículo de 2003)</td>
<td>mejora</td>
</tr>
<tr>
<td>p. 37, glosario “Relativismo”</td>
<td>“Protágoras (‘el hombre es la medida de todas las cosas’), lo que es
justo para una sociedad puede no serlo para otra.”</td>
<td>“Protágoras (‘el hombre es la medida de todas las cosas’): lo que es
justo para una sociedad puede no serlo para otra.”</td>
<td>redacción</td>
</tr>
</tbody>
</table>
<h3 id="prioridad-de-corrección-si-solo-hay-media-hora">Prioridad de
corrección (si solo hay media hora)</h3>
<ol type="1">
<li>A05 p. 27 “oradora ciudad” y p. 26 fechas de las Guerras Médicas;
A05 p. 27 “21 años”; A05 p. 30 <em>Protágoras</em> por <em>Teeteto</em>;
A05 p. 32 “filósofos” por “artesanos”.</li>
<li>A04 p. 20 fechas de Anaxímenes; A04 p. 19 periodos de la tabla; A04
p. 21 Filolao/Copérnico.</li>
<li>A03 p. 9-10 colonización (siglos y ciudades jonias); A03 p. 13
“mecanicista”.</li>
<li>El resto son erratas de puntuación que se corrigen en una sola
pasada con el documento abierto.</li>
</ol>
<hr />
<h2 id="b-tabla-mitologos-ampliada">(b) Tabla mito/logos ampliada</h2>
<h3 id="guion-para-el-profesor-1">Guion para el profesor</h3>
<p><strong>Origen.</strong> El documento
<code>A-1 Surgimiento de la filosofia, mito Vs logos.docx</code>
(versión corta y anterior del tema 3, curso 2024-25) contiene una tabla
de seis filas: carácter, enfoque, explicación, protagonistas, fuente de
autoridad, tiempo y espacio. La tabla de A03 (p. 13) tiene otras seis:
naturaleza de la explicación, origen del conocimiento, verificación,
finalidad, visión del mundo, concepción del tiempo. Las dos se solapan y
ninguna trae ejemplos. La tabla de abajo funde las dos en diez criterios
formulados como preguntas (más fáciles de recordar para alumnado con
castellano medio-bajo) y añade tres filas-ejemplo con casos reales (el
rayo, la enfermedad, el eclipse), que es lo que la PAU pide en el
ejercicio 1.2-A: comparar dos formas de explicar lo mismo.</p>
<p><strong>Notas sobre la fuente A-1 (para no arrastrar
errores).</strong> (1) La periodización final dice “PERIODO HELENÍSTICO:
reflexión sobre la ética (V-II a. C.)”: debe ser “finales del IV-I a.
C.” (323-31 a. C.). (2) “PERIODO DE LOS GRANDES SISTEMA” debe ser
“SISTEMAS”. (3) “Juegos Olímpico” debe ser “Olímpicos”. (4)
“Protagonis-tas” es un guion de partición que se coló. (5) La frase
“surge la filosofía con la finalidad de sustituir las explicaciones
míticas” atribuye a los primeros filósofos una intención que no tenían:
mejor “la filosofía surge cuando algunos griegos empiezan a sustituir…”.
Las seis filas de contenido de A-1 son correctas y se han conservado
(reformuladas) en los criterios 1, 2, 3, 4, 5 y 10.</p>
<p><strong>Uso propuesto (35-45 min, segunda sesión del tema 3, después
de las flashcards de la sección c).</strong></p>
<ol type="1">
<li>(5 min) Proyectar la tabla con las columnas “Mito” y “Logos”
tapadas; leer solo las diez preguntas de la columna “Criterio” y pedir
que, en parejas, adivinen la respuesta de dos o tres criterios.</li>
<li>(10 min) Destapar y leer la tabla completa; en cada fila, un alumno
o alumna la explica con sus palabras.</li>
<li>(10 min) Leer las tres filas-ejemplo. Preguntar en cada una: “¿qué
criterios de la tabla se ven aquí?”.</li>
<li>(15 min) Preguntas de aplicación 1-4 en parejas, por escrito, con la
tabla delante; puesta en común de dos preguntas. Las preguntas 5 y 6
quedan para casa (la 6 puede corregirse con la rúbrica de la mini-tarea
de la sección d).</li>
</ol>
<p><strong>Enlace con la PAU.</strong> La pregunta 5 (Heráclito) entrena
el resumen del Ej. 1.1 (localizar tesis en un texto breve). La pregunta
6 es el germen del Ej. 2 (reflexión con actualidad). Recordar la norma
de ortografía del departamento y de la PAU: −0,1 por falta hasta 1
punto.</p>
<h3
id="hoja-para-el-alumnado-mito-y-logos-dos-formas-de-explicar-la-realidad">Hoja
para el alumnado: mito y logos, dos formas de explicar la realidad</h3>
<p>Un <strong>mito</strong> es un relato tradicional sobre dioses y
héroes que explica el origen de algo (el mundo, el fuego, una
costumbre). El <strong>logos</strong> (palabra griega que significa
“razón” y “discurso”) es la explicación racional: da razones que
cualquiera puede examinar. La filosofía nace en Grecia, en el siglo VI
a. C., cuando el logos empieza a sustituir al mito. Compara las dos
columnas.</p>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>N.º</th>
<th>Criterio (pregunta)</th>
<th>Mito</th>
<th>Logos</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>¿Qué tipo de discurso es?</td>
<td>Un relato: cuenta una historia con personajes, en un tiempo remoto.
Es simbólico, a veces ambiguo o contradictorio, y cambia según la
región</td>
<td>Una explicación: expone razones, define conceptos y saca
conclusiones. Busca ser coherente y valer para todos</td>
</tr>
<tr>
<td>2</td>
<td>¿Quién actúa? (protagonistas)</td>
<td>Dioses, héroes y seres sobrenaturales que tienen voluntad y pasiones
(Zeus, Poseidón, Prometeo)</td>
<td>Elementos y fuerzas de la naturaleza que no tienen voluntad: agua,
aire, fuego, átomos, tensión entre contrarios</td>
</tr>
<tr>
<td>3</td>
<td>¿Cómo explica lo que ocurre?</td>
<td>Por la intervención de los dioses: capricho, castigo o favor. Lo que
pasa podría no haber pasado (arbitrariedad)</td>
<td>Por causas naturales y leyes constantes: lo mismo produce siempre lo
mismo (necesidad)</td>
</tr>
<tr>
<td>4</td>
<td>¿Qué busca? (finalidad)</td>
<td>Dar sentido y cohesión al grupo, crear adhesión emocional,
justificar el orden social y moral y ofrecer modelos de conducta (los
héroes)</td>
<td>Comprender y explicar la realidad: saber qué es y por qué ocurre.
Busca la verdad</td>
</tr>
<tr>
<td>5</td>
<td>¿En qué se apoya su autoridad?</td>
<td>En la tradición, en lo sagrado y en el poeta inspirado por las Musas
(Homero, Hesíodo)</td>
<td>En la razón, la observación y la argumentación: no importa quién lo
dice, sino las razones que da</td>
</tr>
<tr>
<td>6</td>
<td>¿Se puede discutir o comprobar?</td>
<td>No: se acepta o se rechaza, no admite pruebas ni preguntas. Las
distintas versiones se contradicen sin que eso sea un problema</td>
<td>Sí: se puede criticar, corregir y mejorar; exige justificación y
coherencia y, cuando es posible, prueba</td>
</tr>
<tr>
<td>7</td>
<td>¿Cómo se transmite?</td>
<td>De forma oral, en verso y con música, de generación en generación;
se aprende de memoria</td>
<td>Por escrito y en prosa, en la discusión entre iguales (las
escuelas); se puede releer y comparar</td>
</tr>
<tr>
<td>8</td>
<td>¿Qué lenguaje utiliza?</td>
<td>Imágenes, símbolos y personificaciones: el mar es Poseidón; el rayo
es el arma de Zeus</td>
<td>Conceptos abstractos: arché, physis, necesidad, elemento, causa,
ley</td>
</tr>
<tr>
<td>9</td>
<td>¿Cómo ve la naturaleza?</td>
<td>Como un escenario de voluntades divinas: puede pasar cualquier cosa
si un dios lo quiere</td>
<td>Como un cosmos: un todo ordenado que sigue leyes y que puede
conocerse</td>
</tr>
<tr>
<td>10</td>
<td>¿Dónde y cuándo sitúa lo que cuenta?</td>
<td>En un tiempo primordial (“en el principio…”) y en lugares
legendarios (el Olimpo, el Tártaro)</td>
<td>En el mundo que tenemos delante, aquí y ahora; sus explicaciones
valen en cualquier lugar (universalidad)</td>
</tr>
</tbody>
</table>
<p><strong>Tres ejemplos: el mismo fenómeno, dos
explicaciones</strong></p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Fenómeno</th>
<th>Explicación mítica</th>
<th>Explicación por el logos</th>
</tr>
</thead>
<tbody>
<tr>
<td>El rayo y el trueno</td>
<td>Zeus lanza los rayos que le forjaron los Cíclopes para castigar a
los hombres o mostrar su poder (Hesíodo, <em>Teogonía</em>)</td>
<td>Anaximandro y Anaxímenes (siglo VI a. C.): el viento encerrado en
una nube densa la desgarra al salir; el desgarro produce el resplandor y
el choque, el ruido</td>
</tr>
<tr>
<td>La enfermedad</td>
<td>En la <em>Ilíada</em> (canto I), la peste que mata a los griegos es
un castigo de Apolo, que dispara sus flechas porque Agamenón ha ofendido
a su sacerdote</td>
<td>Hipócrates (siglo V a. C.), <em>Sobre la enfermedad sagrada</em>: la
epilepsia “no es más divina que las demás enfermedades”; tiene causas
naturales (el cerebro) y se puede tratar</td>
</tr>
<tr>
<td>El eclipse de sol</td>
<td>Es una señal de los dioses, un presagio de desgracia: Heródoto
cuenta que lidios y medos dejaron de luchar aterrados cuando el día se
hizo noche</td>
<td>Tales predijo el eclipse del 585 a. C.; Anaxágoras explicó que la
Luna se interpone entre el Sol y la Tierra y nos tapa su luz</td>
</tr>
</tbody>
</table>
<p><strong>Preguntas de aplicación</strong> (contesta con la tabla
delante; en cada respuesta cita el número de los criterios que
usas).</p>
<ol type="1">
<li>Vuelve a leer el relato de Lía, la <em>influencer</em> (apuntes del
tema 3, p. 8). Sus seguidores la tratan “como si fuera casi divina” y
repiten sus frases “como si fuera un oráculo”. ¿Qué dos criterios de la
tabla muestran que esos seguidores funcionan con una mentalidad mítica?
Explícalo en cuatro líneas.</li>
<li>Después de un terremoto, un vecino dice: “Es un castigo por cómo
vivimos”. Su hija responde: “Dos placas de la corteza terrestre se han
movido y han liberado energía”. Clasifica cada explicación como mito o
logos usando los criterios 2, 3 y 6.</li>
<li>Un horóscopo afirma: “Esta semana, los Leo tendrán problemas de
dinero por la posición de Marte”. Utiliza palabras que parecen
científicas (planetas, posiciones). ¿Es mito o logos? ¿Qué criterio de
la tabla decide la cuestión?</li>
<li>Hesíodo cuenta que “en el principio existió el Caos, y después Gea,
la Tierra”. Tales afirma que “todo procede del agua”. Los dos hablan del
origen de todo. ¿Por qué decimos que Tales hace filosofía y Hesíodo no?
Usa al menos los criterios 2, 5 y 8.</li>
<li>Heráclito escribió: “Este mundo, el mismo para todos, no lo hizo
ningún dios ni ningún hombre, sino que siempre fue, es y será fuego
eternamente vivo, que se enciende según medida y se apaga según medida”
(fragmento 30). Señala en esta frase tres rasgos del logos y di a qué
criterio corresponde cada uno.</li>
<li>¿Ha desaparecido el mito? Pon un ejemplo actual de relato que cumpla
al menos tres rasgos de la columna “Mito” (una saga de superhéroes, una
teoría de la conspiración, la historia de un club de fútbol, la
biografía de un famoso) y un ejemplo de explicación que cumpla tres
rasgos de la columna “Logos”. ¿Pueden convivir las dos formas de pensar
en la misma persona? Razónalo en cinco líneas.</li>
</ol>
<h3 id="soluciones-orientativas-para-el-profesor">Soluciones
orientativas (para el profesor)</h3>
<ol type="1">
<li>Criterio 5 (autoridad: se acepta lo que dice Lía por quién es, no
por sus razones) y criterio 8 (lenguaje simbólico: un cambio de peinado
“significa” una transformación; las frases se leen como oráculos).
También el 6 (no se comprueba nada) y el 4 (adhesión emocional, modelo
de conducta). Vale cualquier par bien justificado.</li>
<li>Vecino: mito. Criterio 2 (actúa una voluntad que castiga), 3
(explicación por castigo, arbitraria: podría no haber ocurrido), 6 (no
se puede comprobar ni refutar). Hija: logos. Criterio 2 (fuerzas sin
voluntad: placas, energía), 3 (causa natural que siempre produce el
mismo efecto), 6 (se puede medir y comprobar con sismógrafos).</li>
<li>Mito, aunque disfrazado. El vocabulario no decide; decide el
criterio 6: la afirmación no se puede comprobar ni refutar (si un Leo no
tiene problemas de dinero, el horóscopo no se corrige) y no da una causa
que conecte la posición de Marte con la cuenta corriente (criterio 3).
Buen momento para introducir la idea de que “usar palabras científicas”
no es lo mismo que “dar razones”.</li>
<li>Hesíodo: protagonistas divinos (Gea es una diosa: criterio 2),
autoridad del poeta inspirado por las Musas (criterio 5), lenguaje
simbólico y narrativo (criterio 8), tiempo primordial (criterio 10).
Tales: un elemento natural sin voluntad (criterio 2), razones
observables (todo lo vivo es húmedo, las semillas necesitan humedad:
criterio 5), un concepto, el arché (criterio 8), y una explicación que
se puede discutir, como hicieron Anaximandro y Anaxímenes (criterio
6).</li>
<li>“No lo hizo ningún dios ni ningún hombre”: criterio 2 (no hay
protagonistas divinos) y 3 (no hay creación arbitraria). “Fuego
eternamente vivo”: criterio 8 (concepto de arché, aunque con imagen).
“Según medida”: criterio 3 y 9 (necesidad, ley, cosmos). “El mismo para
todos”: criterio 10 (universalidad). Con tres bien identificados es
suficiente.</li>
<li>Respuesta abierta. Se valora que el ejemplo cumpla de verdad tres
rasgos (por ejemplo, teoría de la conspiración: autoridad de “quien
sabe”, no se puede refutar, explica todo por una voluntad oculta) y que
la conclusión sea matizada: sí conviven; el propio A03 (p. 13) dice que
la transición fue gradual y que en los primeros filósofos quedan restos
de pensamiento mítico; y Platón usará mitos (la caverna, tema 6) para
explicar ideas racionales.</li>
</ol>
<hr />
<h2 id="c-flashcards-mitologos-traducidas-del-euskera">(c) Flashcards
mito/logos (traducidas del euskera)</h2>
<h3 id="guion-para-el-profesor-2">Guion para el profesor</h3>
<p><strong>Origen y fidelidad.</strong> El material procede del chat
“Mitoa vs logosa flashcards” (13-9-2025), en el que el profesor pidió,
para 20 minutos de una sesión de Filosofía, unas <em>flashcards</em>
sobre “el cambio de paradigma del pensamiento”, después una tabla
comparativa para la pizarra con ítems que el alumnado debía colocar, y
por último una secuencia con minutos. Se traduce <strong>todo</strong>
el contenido útil del chat: el texto de presentación escrito por el
profesor, las 10 tarjetas de pregunta-respuesta, la tabla completa para
la pizarra, la ficha del alumnado con huecos, los 10 ítems para recortar
y la secuencia de 20 minutos. Se omiten solo las frases de cortesía del
chat y los enlaces a PDF que ya no existen
(<code>sandbox:/mnt/data/…</code>).</p>
<p><strong>Correcciones a la fuente (indicadas también en las
tarjetas).</strong> (1) El ejemplo “el conflicto entre los dioses Urano
y Gea” es impreciso: en la <em>Teogonía</em> de Hesíodo (vv. 154-210) el
conflicto es entre Urano (el Cielo) y su hijo Cronos, que lo castra con
la hoz que le da Gea (la Tierra). Se ha reformulado como “el mito de
Urano, Gea y Cronos”. (2) En la sesión original la tarjeta de ejemplo
del logos eran “las explicaciones causales de Aristóteles: materia,
movimiento, causa, fin”, porque aquel día se había trabajado un texto de
Aristóteles. En este curso el tema 3 va antes que Aristóteles (Q5), así
que se añade una versión con Tales y Anaximandro, marcada [adaptación];
la original se conserva para quien prefiera usarla en el tema 6. (3) La
versión en euskera dice que el logos “no se basa en una autoridad, sino
en la reflexión personal”: conviene precisar “personal y compartida”,
porque la filosofía griega nace en la discusión entre iguales; se deja
la traducción literal y se apunta el matiz aquí.</p>
<p><strong>Cuándo.</strong> Primera sesión del tema 3, tras leer el caso
de Lía (A03, p. 8). Antes de la tabla ampliada de la sección (b), que
sirve de consolidación en la sesión siguiente.</p>
<p><strong>Materiales.</strong> Tarjetas de la tabla 1 (impresas y
recortadas por la línea de puntos, o cargadas en Quizlet/Anki), un juego
de los 10 ítems de la tabla 2 por grupo (recortados) y una ficha con la
tabla vacía por alumno.</p>
<h3 id="texto-de-presentación-traducción-del-texto-del-profesor">Texto
de presentación (traducción del texto del profesor)</h3>
<p>La expresión “el salto del mito al logos” designa el cambio profundo
entre el pensamiento mítico y el pensamiento racional. No es solo un
cambio de contenidos, sino una transformación del modo de entender y de
explicar la realidad.</p>
<p>Rasgos del mito:</p>
<ul>
<li>Explica la realidad mediante relatos sagrados, contando las acciones
de los dioses, de los héroes míticos o de seres sobrenaturales.</li>
<li>No se pone en duda: se transmite de generación en generación por
medio de la autoridad de la tradición.</li>
<li>Su objetivo no es explicar, sino justificar: ¿por qué las cosas son
así? ¿Qué normas debemos cumplir?</li>
<li>Está lleno de simbolismo: por ejemplo, el mito de Urano, Gea y
Cronos no es solo una historia, sino que expresa el equilibrio entre las
fuerzas de la naturaleza. [Nota: la fuente decía “el conflicto entre los
dioses Urano y Gea”; véase la corrección en el guion.]</li>
</ul>
<p>Rasgos del logos:</p>
<ul>
<li>Utiliza la razón para dar explicaciones, no la creencia.</li>
<li>Busca las causas de los hechos, no la voluntad de los dioses.</li>
<li>Utiliza conceptos, no símbolos: “materia”, “cambio”, “causa”,
“lógica”…</li>
<li>No se basa en una autoridad, sino en la reflexión personal y en la
argumentación lógica.</li>
</ul>
<h3
id="tabla-1.-diez-tarjetas-de-pregunta-y-respuesta-anverso-reverso">Tabla
1. Diez tarjetas de pregunta y respuesta (anverso / reverso)</h3>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>N.º</th>
<th>Anverso (pregunta)</th>
<th>Reverso (respuesta)</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>¿Qué significa la expresión “el salto del mito al logos”?</td>
<td>El cambio profundo entre el pensamiento mítico y el racional: una
transformación del modo de entender la realidad</td>
</tr>
<tr>
<td>2</td>
<td>¿Cómo explica la realidad el pensamiento mítico?</td>
<td>Mediante relatos sagrados, contando las acciones de los dioses, de
los héroes míticos y de seres sobrenaturales</td>
</tr>
<tr>
<td>3</td>
<td>¿Cómo explica la realidad el pensamiento del logos?</td>
<td>Usando la razón, buscando las causas y apoyándose en conceptos
lógicos</td>
</tr>
<tr>
<td>4</td>
<td>¿Cuál es uno de los rasgos principales del mito a la hora de
transmitir la verdad?</td>
<td>No se pone en duda; se transmite por la autoridad de la
tradición</td>
</tr>
<tr>
<td>5</td>
<td>¿Cuál es uno de los rasgos principales del logos a la hora de buscar
la verdad?</td>
<td>Utiliza la reflexión personal y la argumentación lógica</td>
</tr>
<tr>
<td>6</td>
<td>¿Qué objetivo principal tiene el mito en sus explicaciones?</td>
<td>Justificar y mantener el orden social y moral</td>
</tr>
<tr>
<td>7</td>
<td>¿Qué objetivo tiene el logos en sus explicaciones?</td>
<td>Comprender la realidad y buscar una explicación</td>
</tr>
<tr>
<td>8</td>
<td>¿Qué simbolizan las historias de los mitos (por ejemplo, la de
Urano, Gea y Cronos)?</td>
<td>El equilibrio entre las fuerzas de la naturaleza u otras estructuras
de la realidad</td>
</tr>
<tr>
<td>9</td>
<td>¿Qué recursos utiliza el discurso del mito?</td>
<td>Imágenes, símbolos y narraciones</td>
</tr>
<tr>
<td>10</td>
<td>¿Qué recursos utiliza el discurso del logos?</td>
<td>Conceptos y explicaciones sistemáticas</td>
</tr>
</tbody>
</table>
<h3
id="tabla-2.-diez-ítems-para-clasificar-anverso-el-ítem-reverso-la-solución">Tabla
2. Diez ítems para clasificar (anverso: el ítem; reverso: la
solución)</h3>
<p>Los diez ítems se entregan mezclados, sin decir a qué columna
pertenecen. El alumnado debe colocar cada uno en la columna “Mito” o
“Logos” y en la fila (aspecto) que le corresponde.</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>N.º</th>
<th>Anverso (ítem)</th>
<th>Reverso (columna y aspecto)</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Tradición, transmisión oral</td>
<td>Mito. Origen del conocimiento</td>
</tr>
<tr>
<td>2</td>
<td>Razón, experiencia</td>
<td>Logos. Origen del conocimiento</td>
</tr>
<tr>
<td>3</td>
<td>Obedeciendo a la autoridad</td>
<td>Mito. Modo de alcanzar la verdad</td>
</tr>
<tr>
<td>4</td>
<td>Poniendo en duda y preguntando</td>
<td>Logos. Modo de alcanzar la verdad</td>
</tr>
<tr>
<td>5</td>
<td>Sagrada, divinizada</td>
<td>Mito. Naturaleza de la realidad</td>
</tr>
<tr>
<td>6</td>
<td>Natural y racional</td>
<td>Logos. Naturaleza de la realidad</td>
</tr>
<tr>
<td>7</td>
<td>Lleno de imágenes y narraciones</td>
<td>Mito. Tipo de discurso</td>
</tr>
<tr>
<td>8</td>
<td>Conceptual y sistemático</td>
<td>Logos. Tipo de discurso</td>
</tr>
<tr>
<td>9</td>
<td>Justificar el orden social y moral</td>
<td>Mito. Finalidad de la explicación</td>
</tr>
<tr>
<td>10</td>
<td>Comprender la realidad y buscar una explicación</td>
<td>Logos. Finalidad de la explicación</td>
</tr>
</tbody>
</table>
<h3
id="tabla-3.-tabla-completa-para-la-pizarra-solución-que-se-proyecta-al-final">Tabla
3. Tabla completa para la pizarra (solución que se proyecta al
final)</h3>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Aspecto</th>
<th>Mito</th>
<th>Logos</th>
</tr>
</thead>
<tbody>
<tr>
<td>Origen del conocimiento</td>
<td>Tradición, transmisión oral</td>
<td>Razón, experiencia</td>
</tr>
<tr>
<td>Modo de alcanzar la verdad</td>
<td>Obedeciendo a la autoridad</td>
<td>Poniendo en duda y preguntando</td>
</tr>
<tr>
<td>Naturaleza de la realidad</td>
<td>Sagrada, divinizada</td>
<td>Natural y racional</td>
</tr>
<tr>
<td>Tipo de discurso</td>
<td>Lleno de imágenes y narraciones</td>
<td>Conceptual y sistemático</td>
</tr>
<tr>
<td>Finalidad de la explicación</td>
<td>Justificar el orden social y moral, mantener la tradición</td>
<td>Comprender la realidad y buscar una explicación</td>
</tr>
<tr>
<td>Ejemplo (original de la fuente)</td>
<td>Urano, Gea y Cronos: conflicto simbólico entre fuerzas</td>
<td>Las explicaciones causales de Aristóteles: materia, movimiento,
causa, fin</td>
</tr>
<tr>
<td>Ejemplo [adaptación para el tema 3]</td>
<td>Zeus lanza el rayo para castigar</td>
<td>Anaximandro: el viento desgarra la nube y produce el rayo; Tales:
todo procede del agua</td>
</tr>
</tbody>
</table>
<h3 id="ficha-del-alumnado-tabla-para-completar">Ficha del alumnado
(tabla para completar)</h3>
<p><strong>El salto del mito al logos: tabla comparativa.</strong>
Completa la tabla colocando los diez ítems que te ha dado el profesor.
Después añade un ejemplo en la última fila.</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Aspecto</th>
<th>Mito</th>
<th>Logos</th>
</tr>
</thead>
<tbody>
<tr>
<td>Origen del conocimiento</td>
<td>____________________</td>
<td>____________________</td>
</tr>
<tr>
<td>Modo de alcanzar la verdad</td>
<td>____________________</td>
<td>____________________</td>
</tr>
<tr>
<td>Naturaleza de la realidad</td>
<td>____________________</td>
<td>____________________</td>
</tr>
<tr>
<td>Tipo de discurso</td>
<td>____________________</td>
<td>____________________</td>
</tr>
<tr>
<td>Finalidad de la explicación</td>
<td>____________________</td>
<td>____________________</td>
</tr>
<tr>
<td>Ejemplo</td>
<td>____________________</td>
<td>____________________</td>
</tr>
</tbody>
</table>
<h3 id="secuencia-de-la-sesión-20-minutos">Secuencia de la sesión (20
minutos)</h3>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Fase</th>
<th>Minutos</th>
<th>Qué se hace</th>
</tr>
</thead>
<tbody>
<tr>
<td>1. Introducción</td>
<td>3</td>
<td>El profesor explica brevemente “el salto del mito al logos” como
cambio de paradigma del pensamiento y lo enlaza con el texto leído en
clase (en la sesión original, un texto de Aristóteles como ejemplo de
logos; en este curso, el caso de Lía de A03 como ejemplo de mentalidad
mítica)</td>
</tr>
<tr>
<td>2. Reparto</td>
<td>2</td>
<td>Se entrega a cada grupo la tabla vacía (Mito / Logos) y los 10 ítems
mezclados. Objetivo: colocar cada ítem en su sitio</td>
</tr>
<tr>
<td>3. Trabajo en grupos</td>
<td>7</td>
<td>En grupos pequeños colocan los ítems en la columna “Mito” o “Logos”
y en su fila. Surge una pequeña discusión dentro del grupo: “¿cuál es la
correcta? ¿Por qué aquí y no en la otra?”</td>
</tr>
<tr>
<td>4. Puesta en común</td>
<td>5</td>
<td>El profesor muestra la tabla completa en la pizarra. Los grupos
contrastan sus respuestas. Preguntas: “¿Por qué ‘sagrada’ es del mito y
no del logos?” “¿Qué ejemplo de mito actual podemos poner?”</td>
</tr>
<tr>
<td>5. Conclusión</td>
<td>3</td>
<td>El profesor resume las diferencias principales entre mito y logos y
lanza el enlace con los temas siguientes: “¿qué significa hacer un
razonamiento filosófico?”</td>
</tr>
</tbody>
</table>
<p>Total: 20 minutos (3 + 2 + 7 + 5 + 3). Las tarjetas de la tabla 1
pueden usarse, además, en la fase 3 como juego de pregunta-respuesta por
parejas (una lee el anverso, la otra responde y comprueba con el
reverso) o como repaso de cinco minutos al empezar la sesión
siguiente.</p>
<h3 id="formato-para-importar-a-quizlet-o-anki">Formato para importar a
Quizlet o Anki</h3>
<p>Copia las líneas siguientes en la opción “Importar” de Quizlet
(separador entre término y definición: punto y coma; entre tarjetas:
salto de línea) o en Anki (importar archivo de texto con separador
“;”).</p>
<pre><code>¿Qué significa la expresión &quot;el salto del mito al logos&quot;?;El cambio profundo entre el pensamiento mítico y el racional: una transformación del modo de entender la realidad
¿Cómo explica la realidad el pensamiento mítico?;Mediante relatos sagrados, contando las acciones de los dioses, de los héroes míticos y de seres sobrenaturales
¿Cómo explica la realidad el pensamiento del logos?;Usando la razón, buscando las causas y apoyándose en conceptos lógicos
¿Cuál es uno de los rasgos principales del mito a la hora de transmitir la verdad?;No se pone en duda: se transmite por la autoridad de la tradición
¿Cuál es uno de los rasgos principales del logos a la hora de buscar la verdad?;Utiliza la reflexión personal y la argumentación lógica
¿Qué objetivo principal tiene el mito en sus explicaciones?;Justificar y mantener el orden social y moral
¿Qué objetivo tiene el logos en sus explicaciones?;Comprender la realidad y buscar una explicación
¿Qué simbolizan las historias de los mitos (por ejemplo, la de Urano, Gea y Cronos)?;El equilibrio entre las fuerzas de la naturaleza u otras estructuras de la realidad
¿Qué recursos utiliza el discurso del mito?;Imágenes, símbolos y narraciones
¿Qué recursos utiliza el discurso del logos?;Conceptos y explicaciones sistemáticas
Tradición, transmisión oral;Mito (origen del conocimiento)
Razón, experiencia;Logos (origen del conocimiento)
Obedeciendo a la autoridad;Mito (modo de alcanzar la verdad)
Poniendo en duda y preguntando;Logos (modo de alcanzar la verdad)
Sagrada, divinizada;Mito (naturaleza de la realidad)
Natural y racional;Logos (naturaleza de la realidad)
Lleno de imágenes y narraciones;Mito (tipo de discurso)
Conceptual y sistemático;Logos (tipo de discurso)
Justificar el orden social y moral;Mito (finalidad de la explicación)
Comprender la realidad y buscar una explicación;Logos (finalidad de la explicación)</code></pre>
<hr />
<h2
id="d-los-12-rasgos-de-la-cultura-griega-y-el-nacimiento-de-la-filosofía">(d)
Los 12 rasgos de la cultura griega y el nacimiento de la filosofía</h2>
<h3 id="guion-para-el-profesor-3">Guion para el profesor</h3>
<p><strong>Origen.</strong> La lista de 12 rasgos la fijó el profesor el
14-9-2025 (chat “Características cultura griega”): partió de una lista
de nueve, sustituyó “nacimiento de la filosofía” por “uso de la palabra
y la retórica”, y añadió la transmisión oral y musical de los mitos, el
comercio y la navegación, la virtud guerrera de la <em>Ilíada</em> y la
admiración del cuerpo sano y la juventud. La versión en castellano que
aquí se usa es la de ese chat; la columna “Y la filosofía…” es nueva y
está pensada para que la hoja responda a la pregunta del saber básico 3
(“¿por qué nació la filosofía en Grecia?”), enlazando con los factores
socioeconómicos y culturales de A03 (pp. 12-13). En el mismo chat el
profesor descartó la actividad de comparar cada rasgo con la cultura
actual (“no estoy seguro de que sea muy buena idea”): no se incluye. Se
han hecho dos ajustes de nivel: en el rasgo 3 se explicitan las
exclusiones de la democracia ateniense (para no contradecir A05, p. 34)
y el rasgo 12 se formula en términos de gimnasio, desnudo atlético y
armonía, adecuados a 2.º de Bachillerato.</p>
<p><strong>Uso (una sesión de 50 minutos o 25 min + tarea).</strong> (1)
10 min: lectura en voz alta de la tabla, un rasgo por alumno; después de
cada fila, preguntar “¿esto ayuda o estorba para que nazca la
filosofía?”. (2) 15 min: preguntas de comprensión 1-4 en parejas, puesta
en común de la 2 y la 4. (3) 5 min: explicar la mini-tarea y leer los
requisitos. (4) 20 min (o en casa): escribir las 100 palabras; recoger y
corregir con la mini-rúbrica. Si se hace en casa, dedicar 10 min de la
sesión siguiente a leer dos respuestas buenas y una mejorable (sin
nombres) y compararlas con la respuesta modelo.</p>
<p><strong>Por qué “en miniatura”.</strong> El Ejercicio 3 de la PAU
2026 es una exposición argumentada de 3 puntos, con opción A/B y 200-300
palabras. A finales de septiembre el alumnado no está preparado para 300
palabras; 100 palabras con tres exigencias claras (tres rasgos, un dato
preciso, un conector de causa) entrenan justo lo que la rúbrica oficial
valora en su tramo alto: situar en la época, usar conceptos
significativos y dar argumentos con ejemplos. En el tema 5 se subirá a
150 palabras y en el tema 6, a 200-300.</p>
<h3
id="hoja-para-el-alumnado-doce-rasgos-de-la-cultura-griega-antigua-y-por-qué-en-grecia-nació-la-filosofía">Hoja
para el alumnado: doce rasgos de la cultura griega antigua (y por qué en
Grecia nació la filosofía)</h3>
<p>La filosofía nació en Grecia en el siglo VI a. C., en la ciudad de
Mileto. No fue casualidad: la cultura griega tenía rasgos que la
hicieron posible. Aquí tienes doce. La tercera columna explica qué tiene
que ver cada rasgo con el nacimiento de la filosofía.</p>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>N.º</th>
<th>Rasgo</th>
<th>En dos líneas</th>
<th>Y la filosofía…</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Antropocentrismo</td>
<td>El ser humano, su razón, su belleza y su destino son el centro de la
cultura; hasta los dioses tienen forma y pasiones humanas</td>
<td>Si el ser humano es la medida, su razón puede atreverse a explicar
el mundo sin esperar a que lo expliquen los dioses</td>
</tr>
<tr>
<td>2</td>
<td>La polis como núcleo</td>
<td>Cada ciudad-estado es independiente, con leyes, gobierno y ejército
propios; uno se siente ateniense o milesio antes que “griego”</td>
<td>Ciudades pequeñas y autónomas, sin un imperio ni una casta de
sacerdotes que impongan una doctrina única: hay espacio para pensar
distinto</td>
</tr>
<tr>
<td>3</td>
<td>Democracia y participación política</td>
<td>Sobre todo en Atenas, los ciudadanos (varones libres hijos de
atenienses; quedan fuera mujeres, esclavos y extranjeros) deciden en la
asamblea</td>
<td>Las leyes se discuten y se cambian por votación: si las normas son
obra humana y se pueden discutir, también se pueden discutir las
explicaciones del mundo</td>
</tr>
<tr>
<td>4</td>
<td>El uso de la palabra y la retórica</td>
<td>En la asamblea y en los tribunales gana quien mejor argumenta;
hablar bien en público es poder</td>
<td>La filosofía es hija del debate público: dar razones, refutar al
otro y definir bien las palabras (sofistas y Sócrates)</td>
</tr>
<tr>
<td>5</td>
<td>Mitología y religión politeísta</td>
<td>Muchos dioses, sin libro sagrado, sin dogma y sin clero organizado;
de cada mito hay versiones distintas y contradictorias</td>
<td>Una religión sin ortodoxia no persigue a quien busca otra
explicación: los mitos se pueden criticar sin salir de la ciudad</td>
</tr>
<tr>
<td>6</td>
<td>Transmisión oral y musical de los mitos</td>
<td>Aedos y rapsodas cantan la <em>Ilíada</em> y la <em>Odisea</em>
acompañados de la lira; Homero y Hesíodo son la “escuela” de toda
Grecia</td>
<td>Con el alfabeto (siglo VIII a. C.) la escritura permite fijar,
comparar y criticar los relatos; los filósofos sustituyen a los poetas
como educadores</td>
</tr>
<tr>
<td>7</td>
<td>Arte y arquitectura clásicos</td>
<td>Búsqueda de proporción, medida y armonía en templos, esculturas y
cerámica</td>
<td>La misma idea de medida y orden (cosmos) guía a los pitagóricos: el
universo es número y armonía</td>
</tr>
<tr>
<td>8</td>
<td>Teatro, literatura y poesía</td>
<td>Tragedia y comedia son fiestas cívicas en las que la ciudad entera
se ve a sí misma y discute sus conflictos (<em>Antígona</em>)</td>
<td>El teatro pone en escena preguntas filosóficas: ley y justicia,
destino y libertad, los límites de lo humano</td>
</tr>
<tr>
<td>9</td>
<td>Deporte y espíritu agonístico</td>
<td>La competición (agón) es un ideal educativo y religioso: Juegos
Olímpicos, gimnasio, lucha</td>
<td>También el pensamiento es un agón: cada filósofo compite con el
anterior y trata de superarlo con mejores razones (Anaximandro corrige a
Tales)</td>
</tr>
<tr>
<td>10</td>
<td>Comercio y navegación</td>
<td>Colonias por todo el Mediterráneo, moneda acuñada, contacto con
Egipto, Fenicia y Babilonia</td>
<td>Conocer otros pueblos relativiza las propias costumbres; se importan
matemáticas y astronomía; los comerciantes ricos tienen tiempo libre
para pensar. Los primeros filósofos son de una ciudad comercial:
Mileto</td>
</tr>
<tr>
<td>11</td>
<td>Virtud guerrera (areté)</td>
<td>Modelo heroico de valor, fuerza y honor: Aquiles en la
<em>Ilíada</em>, la educación espartana</td>
<td>Cuando el hoplita y el remero sustituyen al noble a caballo, la
aristocracia pierde el monopolio de la excelencia: la areté se convierte
en pregunta (“¿se puede enseñar la virtud?”, sofistas y Sócrates)</td>
</tr>
<tr>
<td>12</td>
<td>Admiración del cuerpo sano y de la juventud</td>
<td>Ideal de belleza y vigor físico: gimnasio, desnudo atlético, culto
al cuerpo y a la armonía vital</td>
<td>Un ideal de armonía y medida en el propio cuerpo prepara la idea de
que también el alma y la ciudad deben tener orden y equilibrio (Platón,
Aristóteles)</td>
</tr>
</tbody>
</table>
<p><strong>Preguntas de comprensión</strong> (responde en tu cuaderno,
en dos o tres líneas cada una).</p>
<ol type="1">
<li>¿Qué tres rasgos tienen que ver con la palabra, el debate o la
transmisión de relatos? Explica por qué son importantes para que exista
la filosofía.</li>
<li>¿Por qué se dice que la religión griega “no tenía libro sagrado ni
clero organizado”? ¿Qué consecuencia tuvo eso para el paso del mito al
logos?</li>
<li>Relaciona el rasgo 10 (comercio y navegación) con el lugar donde
nació la filosofía. ¿Qué explicación da Bertrand Russell en los apuntes
del tema 3?</li>
<li>¿Qué rasgos muestran también las “sombras” de la cultura griega
(exclusiones, guerra, esclavitud)? ¿Afectan esas sombras al nacimiento
de la filosofía?</li>
<li>Elige el rasgo que te parece más decisivo y el que te parece menos
decisivo para el nacimiento de la filosofía. Justifica las dos
elecciones.</li>
</ol>
<p><strong>Mini-tarea: exposición argumentada en miniatura (100
palabras)</strong></p>
<p>Pregunta: <strong>¿Por qué nació la filosofía en Grecia y no en otro
sitio?</strong></p>
<p>Requisitos (escribe entre 90 y 110 palabras y cuéntalas):</p>
<ul>
<li>Menciona al menos <strong>tres rasgos</strong> de la tabla y explica
cómo ayudó cada uno.</li>
<li>Da al menos <strong>un dato preciso</strong>: un siglo, una ciudad o
un filósofo.</li>
<li>Usa al menos <strong>un conector de causa</strong> (porque, ya que,
por eso, gracias a, de modo que).</li>
<li>Redacta en párrafo, sin listas. Ortografía: se descuenta 0,1 por
falta, hasta 1 punto, como en la PAU.</li>
</ul>
<p>Mini-rúbrica (sobre 3 puntos, como el Ejercicio 3 de la PAU):</p>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Criterio</th>
<th>1 punto</th>
<th>0,5 puntos</th>
<th>0 puntos</th>
</tr>
</thead>
<tbody>
<tr>
<td>Contenido</td>
<td>Tres rasgos bien elegidos y relacionados con el nacimiento de la
filosofía</td>
<td>Tres rasgos nombrados, pero solo enumerados o mal relacionados</td>
<td>Menos de tres rasgos o rasgos inventados</td>
</tr>
<tr>
<td>Precisión</td>
<td>Un dato correcto (siglo VI a. C., Mileto, Tales…) y vocabulario del
tema (mito, logos, polis, arché)</td>
<td>Dato impreciso o sin vocabulario del tema</td>
<td>Sin datos ni vocabulario</td>
</tr>
<tr>
<td>Redacción</td>
<td>Un párrafo coherente, conector de causa, extensión correcta, sin
faltas</td>
<td>Falta el conector o se sale de la extensión; alguna falta</td>
<td>Frases sueltas, sin conexión, fuera de extensión</td>
</tr>
</tbody>
</table>
<h3 id="respuesta-modelo-para-el-profesor-104-palabras">Respuesta modelo
(para el profesor; 104 palabras)</h3>
<p>La filosofía nació en Grecia en el siglo VI a. C., en Mileto, porque
coincidieron varios factores. Primero, el comercio y la navegación
pusieron a los griegos en contacto con Egipto y Babilonia, de donde
tomaron las matemáticas y la astronomía, y dieron tiempo libre a una
nueva clase de comerciantes. Segundo, la polis y la democracia exigían
argumentar en público: las leyes se discutían y se votaban, y con ellas
podían discutirse las explicaciones del mundo. Tercero, la religión
griega no tenía libro sagrado ni clero que impusiera una doctrina, de
modo que los mitos podían criticarse. En Egipto o Persia, en cambio, el
saber estaba en manos de sacerdotes y reyes.</p>
<h3
id="soluciones-orientativas-de-las-preguntas-de-comprensión">Soluciones
orientativas de las preguntas de comprensión</h3>
<ol type="1">
<li>Rasgos 4 (retórica), 6 (transmisión oral y escritura) y 8 (teatro);
también el 3 (asamblea). Sin debate público no hay costumbre de dar y
pedir razones; sin escritura no se pueden comparar y criticar los
relatos; el teatro acostumbra a la ciudad a ver un mismo conflicto desde
dos lados.</li>
<li>La religión griega se transmitía por los poetas (Homero, Hesíodo),
no por un texto revelado ni por una jerarquía de sacerdotes con poder
para castigar la herejía; las versiones de los mitos se contradecían.
Consecuencia (A03, p. 11): fue posible criticar los mitos y buscar una
causa física sin ser perseguido, lo que abrió el camino al logos.</li>
<li>Mileto era una ciudad comercial y colonizadora de Jonia. Russell
(A03, p. 9): las zonas colonizadas de Jonia y la Magna Grecia eran más
ricas que la Grecia continental; la riqueza creó clases (navieros,
comerciantes) con tiempo libre para el estudio, a las que los mitos
aristocráticos no decían nada; cuando Atenas fue la ciudad más rica, la
filosofía se trasladó allí.</li>
<li>Rasgo 3 (exclusión de mujeres, esclavos y extranjeros), rasgo 11
(guerra, honor militar) y, en el 10, el trabajo esclavo que da tiempo
libre a los ciudadanos. Sí afectan: el ocio de los filósofos descansa en
el trabajo de otros (A03, p. 12: “los esclavos ofrecían a los ciudadanos
tiempo libre”), y la filosofía nace excluyendo voces (Aspasia, tema 5).
Se valora que se vea la doble cara.</li>
<li>Abierta. Respuestas fuertes suelen elegir el 10 (comercio) o el 5
(religión sin dogma) como más decisivos y el 12 o el 7 como menos
decisivos; lo que se corrige es la justificación, no la elección.</li>
</ol>
<hr />
<p><em>Fin del paquete. Todas las fechas de sesión son las estimadas del
dosier (§3.3) y se ajustarán al calendario real del centro cuando se
conozca.</em></p>
` },
  "hf-debate":{ subject:"hf", tema:"Historia de la Filosofía · Tema 5", title:"Debate: ¿convencer o buscar la verdad?", html:`
<p><strong>Materia:</strong> Historia de la Filosofía, 2.º de
Bachillerato (modelo A, castellano). <strong>Uso/sesión:</strong> Q3
(5-16 de octubre, fechas estimadas; 12 de octubre festivo), tema 5,
sesión 4 de las 5 de la quincena, después de haber trabajado los
sofistas, Sócrates y Aspasia con <code>apuntes_A05.pdf</code> y
<code>Diapositivas_A05.pptx</code>. La hoja de preparación se rellena al
final de la sesión anterior o en casa. La composición posterior se
entrega en la sesión 5 o en la primera de Q4. <strong>Saberes:</strong>
5 (Filosofía y ciudadanía en la Ilustración griega: los sofistas y
Sócrates; Aspasia de Mileto y el papel de la mujer en la cultura y la
filosofía griega); 2 (el diálogo argumentativo y la disertación).
<strong>Criterios/CE:</strong> debate: 3.2, 3.3, 5.2, 9.1 (instrumento
“debate, diálogo, coevaluación”, 15 % de la evaluación según el dosier
§2.4); preparación y contenidos: 4.1, 5.1, 6.1; composición posterior
(entrenamiento del ejercicio 2 de la PAU): 2.1, 2.2, 3.1, 8.1, 9.2.
<strong>Duración:</strong> 50 min de debate (una sesión) + 15 min de
preparación previa (hoja del alumno) + composición de una página en casa
(unos 45 min) + 10 min de devolución en clase. <strong>Fuente de
origen:</strong>
<code>DPTO\\carpetas_drive_resultados\\apuntes_A05.pdf</code> (pp. 25-37:
contexto, sofistas, Protágoras, Gorgias, Sócrates, ciudadanía, la mujer,
Aspasia, glosario; citas literales con página);
<code>DPTO\\carpetas_drive_borradores\\Diapositivas_asociadas a apuntes\\Diapositivas_A05.pptx</code>
(diap. 2 “Pregúntate”: “¿Qué es para ti más importante: convencer a los
demás o buscar la verdad?”; diap. 26, tabla comparativa
sofistas/Sócrates);
<code>OBS\\01_proyectos\\ltfh\\Filosofia-griega-y-desigualdad.md</code>
(perspectiva de género: justificaciones antiguas y actuales de la
desigualdad; es una conversación con IA de mayo de 2025, aquí revisada y
reducida a lo comprobable);
<code>DPTO\\carpeta_drive_hf\\01_Antigua\\A-3 Filosofía y ciudadanía en la ilustración griega..docx</code>
(consigna literal de la “composición de una página”);
<code>DPTO\\carpetas_drive_disertaciones\\disertaciones\\metodologia_disertacion.pdf</code>
(p. 3: indicaciones del departamento para una disertación con esta misma
pregunta); rúbrica oficial del ejercicio 2 de
<code>DPTO\\carpetas_drive_PAU\\PAU_2026\\rubrica_PAU-2026.docx</code> y
<code>Estructura de la prueba de historia de la filosofía.docx.pdf</code>;
protocolo de tarjetas de
<code>hf\\00_curso\\normas_de_dialogo_y_actividad_inicial.md</code>.
Guion, dosieres de posición, casos, hojas y modelo de composición:
creación propia.</p>
<hr />
<h2 id="ficha-rápida">0. Ficha rápida</h2>
<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>Elemento</th>
<th>Detalle</th>
</tr>
</thead>
<tbody>
<tr>
<td>Pregunta del debate</td>
<td>¿Qué es más importante: convencer a los demás o buscar la
verdad?</td>
</tr>
<tr>
<td>Posiciones</td>
<td>A. Sofista (convencer) / B. Socrática (buscar la verdad). Tercera
voz: Aspasia (apartado 4).</td>
</tr>
<tr>
<td>Formato</td>
<td>Protocolo de tarjetas del curso: tres rondas, portavoz rotativo,
tarjetas del alumnado (verde, azul, naranja, blanca, morada) y del
profesor (amarilla, roja, tiempo).</td>
</tr>
<tr>
<td>Roles</td>
<td>2 equipos sofistas y 2 equipos socráticos de 3-4 personas; 2-6
observadores-coevaluadores. Las posiciones se asignan por sorteo, no se
eligen.</td>
</tr>
<tr>
<td>Materiales que hay que fotocopiar</td>
<td>Dosier A (uno por equipo sofista), dosier B (uno por equipo
socrático), los 6 casos recortados (uno o dos por equipo), hoja de
preparación (una por alumno), hoja de coevaluación (una por observador),
lista de control del profesor (en <code>00_curso</code>).</td>
</tr>
<tr>
<td>Qué se evalúa</td>
<td>Debate: lista de control de 6 ítems (3.2, 3.3, 5.2, 9.1) +
coevaluación. Composición posterior: rúbrica oficial del ejercicio 2
(0-3 puntos) como entrenamiento.</td>
</tr>
<tr>
<td>Idea clave que debe quedar</td>
<td>Los sofistas y Sócrates comparten el giro antropológico y la
confianza en la palabra; se separan en para qué sirve la palabra:
persuadir (retórica) o buscar definiciones universales (mayéutica). Y en
Atenas solo unos pocos tenían la palabra: Aspasia obliga a preguntar
quién puede convencer y quién puede buscar la verdad.</td>
</tr>
</tbody>
</table>
<p>Aviso para el alumnado (se dice en voz alta): defender la posición
que te ha tocado no significa creer en ella. Los propios sofistas
entrenaban con “discursos dobles” (dissoi logoi): defender una tesis y
luego la contraria. Al final del debate cada uno escribirá su posición
personal.</p>
<hr />
<h1 id="guion-para-el-profesor">Guion para el profesor</h1>
<h2 id="sesión-de-50-minutos-con-el-protocolo-de-tarjetas">1. Sesión de
50 minutos con el protocolo de tarjetas</h2>
<p>Preparación previa (sesión anterior, últimos 15 minutos, o en casa):
sorteo de posiciones por equipos; entrega del dosier de posición; cada
alumno rellena la hoja de preparación (apartado 6). El profesor elige a
los 6-8 alumnos que registrará en la lista de control y a los
observadores.</p>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Minutos</th>
<th>Fase</th>
<th>Qué hace el profesor</th>
<th>Qué hace el alumnado</th>
</tr>
</thead>
<tbody>
<tr>
<td>0-5</td>
<td>Arranque</td>
<td>Proyecta la diapositiva 2 de A05: “¿Qué es para ti más importante:
convencer a los demás o buscar la verdad?” y “¿Eres tonto si puedes
copiar en un examen y no lo haces?”. Votación rápida a mano alzada de la
primera (se anota el resultado en la pizarra para compararlo al final).
Proyecta las normas del grupo y recuerda las tarjetas y su prioridad
(blanca &gt; naranja por alusión &gt; azul &gt; naranja &gt; verde;
morada siempre). Nombra observadores y reparte las hojas de
coevaluación.</td>
<td>Vota; saca las tarjetas del sobre.</td>
</tr>
<tr>
<td>5-10</td>
<td>Preparación final</td>
<td>Da 5 minutos para que cada equipo compare las hojas de preparación,
elija portavoz de la primera ronda y lea el caso que le ha tocado
(apartado 5). Recuerda: en la ronda 1 no se lee, se habla.</td>
<td>Acuerda tesis, mejor razón y quién habla.</td>
</tr>
<tr>
<td>10-18</td>
<td>Ronda 1: tesis</td>
<td>Da la palabra por orden: sofista 1, socrático 1, sofista 2,
socrático 2. Un minuto cada uno: “Nuestra tesis es… y nuestra mejor
razón es…”. Solo se admite la tarjeta azul (aclaraciones). Anota en la
pizarra las cuatro razones principales en dos columnas.</td>
<td>Portavoz de cada equipo expone; los demás escuchan y anotan.</td>
</tr>
<tr>
<td>18-30</td>
<td>Ronda 2: casos</td>
<td>Lee en voz alta dos de los seis casos (los que han tocado a los
equipos; recomendados para empezar: influencers y redes sociales). Cada
equipo tiene 1 minuto para aplicar su posición al caso. Después se abren
todas las tarjetas durante 6-8 minutos. El profesor usa la azul si nadie
pide definir “verdad”, “convencer” o “manipular”.</td>
<td>Nuevo portavoz. Aplican la posición al caso; objeciones (naranja),
aclaraciones (azul), falacias (blanca).</td>
</tr>
<tr>
<td>30-40</td>
<td>Ronda 3: réplicas y moradas</td>
<td>Da 1 minuto de preparación en equipo para respuestas por alusiones.
Abre la ronda con la pregunta de rescate si hace falta: “¿Qué tendría
que pasar para que cambiarais de posición?”. Da prioridad a las moradas.
Introduce la tercera voz (apartado 4) con una pregunta: “En Atenas,
¿quién podía convencer y quién podía buscar la verdad? ¿Y
Aspasia?”.</td>
<td>Tercer portavoz. Réplicas; concesiones (morada).</td>
</tr>
<tr>
<td>40-47</td>
<td>Cierre socrático</td>
<td>Pide a un observador que resuma el mejor argumento de cada lado.
Pregunta a quienes han levantado la morada qué les ha hecho dudar.
Repite la votación inicial y compara. Cierra con la norma 10 del curso y
con una frase para la composición: “¿Y si convencer y buscar la verdad
no fueran incompatibles? Protágoras enseñaba retórica para formar
ciudadanos; Aspasia enseñó a hablar a Sócrates y a Pericles”.</td>
<td>Escritura individual de una frase en la hoja de preparación: “Mi
posición ahora es… porque…”. Los observadores terminan la
coevaluación.</td>
</tr>
<tr>
<td>47-50</td>
<td>Tarea</td>
<td>Explica la composición de una página (apartado 8): 200-300 palabras,
a mano, título, dos autores, actualidad, rúbrica. Recoge hojas de
preparación y de coevaluación.</td>
<td>Anota la tarea y la fecha de entrega: ________.</td>
</tr>
</tbody>
</table>
<p>Gestión del tiempo: si la ronda 2 se alarga, se suprime el segundo
caso y se pasa a la ronda 3 a los 30 minutos; el cierre socrático no se
recorta nunca, porque es donde se produce el aprendizaje que evalúa el
criterio 5.2.</p>
<p>Preguntas de rescate (si el debate se apaga):</p>
<ul>
<li>“¿Qué diría Gorgias del vídeo que se ha hecho viral?” / “¿Qué le
preguntaría Sócrates al influencer?”</li>
<li>“¿Alguien del equipo socrático puede resumir la posición sofista
mejor que los sofistas?” (y al revés).</li>
<li>“¿Convencer y manipular son lo mismo? ¿Dónde está la
diferencia?”</li>
<li>“Si no existe la verdad, ¿existe la mentira?”</li>
<li>“¿Qué pasa en una asamblea donde todos saben convencer y nadie sabe
qué es lo justo?”</li>
</ul>
<p>Errores que conviene corregir en el momento (con la azul o al
cierre):</p>
<ul>
<li>Confundir “relativismo” con “todo vale”: los apuntes recuerdan que
para Protágoras “que no haya una verdad absoluta válida para todos no
implica que todas las opiniones o leyes sean igualmente válidas” (A05,
p. 30).</li>
<li>Presentar a Sócrates como alguien que “tenía la verdad”: no la
poseía, la buscaba con los demás (A05, p. 33).</li>
<li>Decir que los sofistas eran “malos”: la imagen peyorativa viene de
Platón; los apuntes explican que al principio “sofista” era sinónimo de
“sabio” (A05, p. 28).</li>
</ul>
<h2 id="dosier-de-posición-a-la-posición-sofista-convencer">2. Dosier de
posición A: la posición sofista (convencer)</h2>
<p><strong>Tesis del equipo:</strong> Lo más importante es convencer,
porque en una comunidad humana no hay otra forma de decidir lo justo que
el acuerdo, y el acuerdo se construye persuadiendo.</p>
<p><strong>Cinco argumentos:</strong></p>
<ol type="1">
<li><strong>No hay una verdad absoluta a nuestro alcance.</strong>
Gorgias niega que podamos conocer la realidad y, aunque la conociéramos,
que podamos comunicarla con palabras. Si es así, lo único que existe
entre las personas son opiniones, y en la asamblea decide la opinión que
más convence. Buscar “la verdad” es perseguir algo que nadie puede
mostrar.</li>
<li><strong>Las leyes son nomos, convención humana.</strong> Todos los
sofistas distinguen physis (lo que es por naturaleza, igual en todas
partes) y nomos (lo que acordamos, distinto en cada ciudad). Lo justo es
lo que la comunidad acuerda; y convencer a la comunidad de que una ley
es mejor que otra es, exactamente, hacer justicia. Antifonte llegó a
decir que por naturaleza todos somos iguales y que las desigualdades
vienen del nomos: cambiar un nomos injusto exige convencer.</li>
<li><strong>La democracia funciona con la persuasión.</strong> En Atenas
todos los ciudadanos tenían igual derecho a hablar (isegoría), pero
quien no sabía convencer no contaba. Los sofistas enseñaron retórica a
quien no era noble: dieron a más gente la posibilidad de participar. Sin
retórica, la democracia es de los que nacieron sabiendo hablar.</li>
<li><strong>La virtud se puede enseñar, y convencer bien es una
virtud.</strong> Protágoras se presenta como maestro de “virtud
política”, las cualidades que necesita el ciudadano para participar en
la vida pública y administrar su vida privada (A05, p. 30). Según el
mito de Prometeo que cuenta en el diálogo de Platón, Zeus repartió la
justicia y la vergüenza a todos los humanos: la convivencia se aprende y
se construye con la palabra.</li>
<li><strong>Quien dice tener “la verdad” suele imponer la de su
grupo.</strong> El relativismo cultural nace de viajar y conocer otras
costumbres: cada ciudad tiene sus leyes. Presentar la propia opinión
como verdad universal es una forma de dominio. La humildad sofista es
aceptar la pluralidad y competir con argumentos; además, algunas leyes
producen mejores resultados que otras para la convivencia, y de eso
también se puede convencer.</li>
</ol>
<p><strong>Dos citas de los apuntes (A05):</strong></p>
<ul>
<li>Protágoras: «El hombre es la medida de todas las cosas» (p. 30).
Interpretación que da el apunte: no hay una verdad, sino múltiples
verdades, y una manera de considerar la justicia en cada comunidad.</li>
<li>Gorgias: «Nada hay o es; si lo hubiera, no podría ser conocido por
el hombre; y si fuera conocido, no podría ser comunicado su conocimiento
a los demás por medio del lenguaje» (p. 31).</li>
</ul>
<p><strong>La objeción que esperamos y nuestra respuesta:</strong> “Sin
verdad, convencer es manipular”. Respuesta: manipular es convencer con
mentiras o con miedo; nosotros defendemos convencer con razones que la
comunidad puede examinar. Y quien acusa de manipulación también intenta
convencernos: nadie escapa a la retórica.</p>
<h2 id="dosier-de-posición-b-la-posición-socrática-buscar-la-verdad">3.
Dosier de posición B: la posición socrática (buscar la verdad)</h2>
<p><strong>Tesis del equipo:</strong> Lo más importante es buscar la
verdad, porque sin verdad no hay diferencia entre convencer y engañar, y
una ciudad de gente que solo sabe convencer acaba decidiendo mal.</p>
<p><strong>Cinco argumentos:</strong></p>
<ol type="1">
<li><strong>Sin verdad, la retórica es manipulación.</strong> Platón
acusa a los sofistas de enseñar a “hacer parecer justo lo injusto” (A05,
p. 28). Si lo único que cuenta es convencer, el mejor orador gana aunque
defienda una injusticia; el criterio de calidad de un discurso ya no es
si es verdadero, sino si funciona. Eso es lo que hoy llamamos
propaganda.</li>
<li><strong>Reconocer la ignorancia es el primer paso; convencer siempre
es el modo de no aprender nunca.</strong> Sócrates se presentaba como
alguien que no sabía y examinaba a los que creían saber (Apología).
Quien solo quiere convencer nunca se deja examinar ni cambia de opinión;
quien busca la verdad pregunta “¿qué es la justicia?” y acepta que su
primera respuesta sea refutada.</li>
<li><strong>Conocer el bien lleva a obrar bien (intelectualismo
moral).</strong> Para Sócrates, nadie hace el mal a sabiendas; el mal
nace de la ignorancia. Por eso una asamblea que vota convencida pero sin
saber qué es lo justo puede decidir una guerra o una condena injusta (la
propia condena de Sócrates en 399 a. C. fue votada por un tribunal
convencido). Antes de convencer hay que saber.</li>
<li><strong>La convivencia necesita criterios comunes.</strong> Si cada
uno tiene su verdad, “el conocimiento es imposible” (escepticismo) y “no
hay forma de distinguir entre lo justo y lo injusto” (caos moral): son
las dos consecuencias que Platón saca del relativismo (A05, p. 30).
Sócrates busca definiciones universales de la Justicia, el Bien o la
Virtud para asentar sobre ellas la convivencia (A05, p. 33).</li>
<li><strong>El método socrático es cooperativo, no competitivo.</strong>
La ironía y la mayéutica no sirven para vencer al otro, sino para que el
otro descubra por sí mismo lo que lleva dentro: “cada persona posee
dentro de sí una parte de la verdad, pero debe descubrirla con ayuda de
los otros” (A05, p. 33). Sócrates no cobra, no escribe discursos, no
presume de saber: su coherencia hasta la muerte es la prueba de que
buscaba la verdad y no el éxito.</li>
</ol>
<p><strong>Dos citas de los apuntes (A05):</strong></p>
<ul>
<li>Platón, Apología de Sócrates: «Es posible que uno ni otro sepamos
nada que tenga valor, pero este hombre cree saber algo, y no lo sabe; en
cambio, yo, así como, en efecto, no sé, tampoco creo saber»
(p. 32).</li>
<li>«Para Sócrates, el uso de la palabra debe dirigirse a encontrar la
verdad, y ésta debe ser única y universal, de lo contrario no sería
verdad» (p. 31).</li>
</ul>
<p><strong>La objeción que esperamos y nuestra respuesta:</strong> “La
verdad no sirve de nada si no sabes comunicarla; Sócrates perdió su
juicio”. Respuesta: Sócrates perdió el juicio y ganó la historia: 2.400
años después seguimos discutiendo con su método y nadie recuerda a los
que le condenaron. Y buscar la verdad no excluye hablar bien: excluye
hablar bien de lo que no se sabe.</p>
<h2 id="tercera-voz-aspasia-y-la-perspectiva-de-género">4. Tercera voz:
Aspasia y la perspectiva de género</h2>
<p>Se introduce en la ronda 3 o en el cierre. No es un tercer equipo,
sino una pregunta que cualquier equipo puede usar y que el profesor
lanza si nadie la usa: <strong>el debate “convencer o buscar la verdad”
da por supuesto que uno tiene la palabra. En Atenas, la mayoría no la
tenía.</strong></p>
<ul>
<li>Solo los varones libres nacidos de padre y madre atenienses eran
ciudadanos: entre el 10 % y el 15 % de la población. Las mujeres no
tenían isegoría ni parresía: “no tenían derecho a la palabra. Fueron
silenciadas en la vida cotidiana y en la política, y por ello su voz no
nos ha llegado” (A05, p. 35).</li>
<li>Aspasia de Mileto rompe la dicotomía del debate: fue maestra de
retórica, considerada una sofista, enseñaba a hombres y a mujeres, y
Sócrates la llama “mi maestra” en el Menéxeno de Platón (A05, p. 36). Es
decir: la persona que enseñó a hablar a Pericles y a Sócrates era
extranjera, mujer y sin derechos de ciudadanía. Fue acusada de impiedad
y juzgada, y se salvó por la defensa de Pericles: convencer, en su caso,
era la única forma de sobrevivir.</li>
<li>Umberto Eco, citado en los apuntes (p. 36): los filósofos “han
preferido olvidarlas, quizás después de haberse apropiado de sus ideas”.
Pregunta para el debate: ¿quién decide qué cuenta como “verdad” cuando
solo un grupo tiene la palabra?</li>
</ul>
<p>Las justificaciones de la desigualdad, ayer y hoy (tabla adaptada y
reducida de la nota <code>Filosofia-griega-y-desigualdad.md</code>; se
conservan solo las afirmaciones comprobables en las fuentes
clásicas):</p>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Tipo de justificación</th>
<th>En Grecia</th>
<th>Eco actual</th>
<th>Pregunta para el equipo</th>
</tr>
</thead>
<tbody>
<tr>
<td>Orden natural (physis)</td>
<td>Aristóteles, Política I: el varón es por naturaleza superior y la
mujer inferior; unos son esclavos por naturaleza.</td>
<td>“Las mujeres son por naturaleza más emocionales”; “ciertas culturas
no están preparadas para la democracia”.</td>
<td>¿Es un argumento o una convención (nomos) disfrazada de
naturaleza?</td>
</tr>
<tr>
<td>Costumbre (nomos)</td>
<td>Las leyes de la ciudad excluyen a mujeres, esclavos y metecos;
“siempre ha sido así”.</td>
<td>“Nuestra cultura es así”; “la igualdad forzada es antinatural”.</td>
<td>Si el nomos es humano, como dicen los sofistas, ¿puede cambiarse
convenciendo?</td>
</tr>
<tr>
<td>Biologicismo</td>
<td>Tratados hipocráticos: el cuerpo femenino, más húmedo y frío, sería
menos estable y menos racional.</td>
<td>Discursos que apelan al cerebro o a la genética para justificar
desigualdades.</td>
<td>¿Buscan la verdad o buscan convencer de lo que ya se quería
creer?</td>
</tr>
<tr>
<td>Refuerzo simbólico</td>
<td>Tragedia y comedia representan a la mujer que habla en público como
peligro o burla; Aristóteles cita con aprobación un verso de Sófocles:
“el silencio es un adorno de la mujer” (Política I).</td>
<td>Series, memes y noticias que presentan a la mujer con poder como
amenaza o al inmigrante como delincuente.</td>
<td>¿Quién convence aquí y con qué medios?</td>
</tr>
<tr>
<td>Excepción que abre camino</td>
<td>Platón, República V: muchas mujeres son mejores que muchos hombres
en muchas cosas; deben recibir la misma educación. Antifonte: por
naturaleza, griegos y bárbaros son iguales.</td>
<td>Movimientos que reclaman la palabra para quien no la tenía.</td>
<td>¿Se ganó ese cambio convenciendo, buscando la verdad o las dos
cosas?</td>
</tr>
</tbody>
</table>
<p>Uso en la composición posterior: esta tabla permite la “actualidad” y
una tercera vía (integración o superación) en la conclusión: convencer y
buscar la verdad no son incompatibles, pero ninguna de las dos sirve si
no se garantiza primero quién tiene la palabra.</p>
<h2 id="seis-casos-actuales-para-aplicar">5. Seis casos actuales para
aplicar</h2>
<p>Se recortan y se reparten (uno o dos por equipo). En la ronda 2, cada
equipo aplica su posición al caso; los demás objetan. No se usan nombres
reales de personas ni de marcas.</p>
<p><strong>Caso 1. Publicidad.</strong> Una marca de bebidas energéticas
lanza una campaña con deportistas jóvenes, música épica y el lema “Tú
decides quién eres”. En letra pequeña admite que la bebida no mejora el
rendimiento. La campaña funciona: las ventas suben un 30 %. Nadie ha
mentido con palabras; se ha convencido con emociones e imágenes.
Preguntas: ¿Es legítimo convencer con emociones si no se dice nada
falso? ¿Dónde acaba la persuasión y empieza la manipulación? Concepto
que se aplica: Gorgias y la palabra como “un mago que sugestiona a los
espectadores” (A05, p. 31); Sócrates: solo se debe convencer de lo que
se sabe que es verdad.</p>
<p><strong>Caso 2. Influencers.</strong> Un creador de contenido con
medio millón de seguidores de entre 16 y 22 años recomienda invertir en
una criptomoneda nueva. Cobra por la recomendación, pero no lo dice.
Cuando la moneda pierde el 90 % de su valor, responde: “Yo solo doy mi
opinión; cada uno decide”. Dos mil seguidores han perdido sus ahorros.
Preguntas: ¿Basta con “dar mi opinión” para no ser responsable de lo que
se convence? ¿Es lo mismo cobrar por enseñar (sofistas) que cobrar por
recomendar? Concepto que se aplica: los sofistas cobraban por enseñar
retórica y por eso Platón desconfiaba de ellos (A05, p. 28); Protágoras:
“el hombre es la medida”, pero no todas las opiniones tienen los mismos
resultados (p. 30).</p>
<p><strong>Caso 3. Política.</strong> En campaña electoral, un candidato
dice en cada barrio lo que ese barrio quiere oír: promete bajar
impuestos en uno y aumentar el gasto en otro. Su equipo de comunicación
(los “sofistas” modernos) mide cada frase con encuestas. Gana. Un
periodista le pregunta si mintió; responde: “Convencí, que es de lo que
se trata en democracia”. Preguntas: ¿Debe un político decir la verdad
aunque pierda votos? ¿Es la democracia el gobierno de los que mejor
convencen? Concepto que se aplica: la asamblea ateniense y la isegoría
(A05, p. 27); el juicio a Sócrates como decisión de una mayoría
convencida (p. 32); Protágoras: la virtud política se enseña para que la
ciudadanía tenga “capacidad de juicio político” (p. 30).</p>
<p><strong>Caso 4. Inteligencia artificial.</strong> Un alumno pide a un
chatbot: “Escribe un texto que defienda que copiar en un examen está
bien”. Obtiene un texto convincente. Luego pide: “Ahora defiende lo
contrario”. Obtiene otro igual de convincente. El sistema no duda nunca,
no dice “no lo sé” y no le importa cuál de los dos es verdad. Preguntas:
¿Busca la verdad una máquina que puede defender cualquier tesis con la
misma seguridad? ¿En qué se parece a un sofista y en qué se diferencia
de Sócrates? ¿Qué significa aquí “aprender con IA, examen sin IA” (Guía
de uso de la IA en educación, Euskadi, 2025)? Concepto que se aplica:
los “discursos dobles” de los sofistas; “solo sé que no sé nada” como
condición del saber (A05, p. 32); la rúbrica de la PAU penaliza los
“indicios de copia o de uso recurrente de herramientas como la
inteligencia artificial”.</p>
<p><strong>Caso 5. Redes sociales.</strong> Un vídeo falso en el que un
político parece insultar a un colectivo se hace viral: dos millones de
visualizaciones en seis horas. La corrección (“es un montaje”) llega dos
días después y la ven cien mil personas. El algoritmo premia lo que
engancha, no lo que es cierto. Muchos usuarios dicen: “A mí me pareció
real, así que para mí lo es”. Preguntas: ¿Es la cantidad de “me gusta”
una medida de la verdad? ¿Qué diría Protágoras de “para mí lo es”? ¿Es
posible buscar la verdad en un sistema diseñado para convencer? Concepto
que se aplica: la interpretación individual de la frase de Protágoras
(“tal como me parecen las cosas, tales son para mí”, Platón, Teeteto,
citado en A05, p. 30) y sus consecuencias: escepticismo y caos moral;
Sócrates: la verdad es única o no es verdad (p. 31).</p>
<p><strong>Caso 6. Tribunales.</strong> Una abogada sabe que su cliente
es culpable. Aun así, construye la mejor defensa posible, señala los
fallos de las pruebas y consigue la absolución. La ley se lo exige: todo
acusado tiene derecho a una defensa. En Atenas, los sofistas enseñaban
precisamente a hablar ante los tribunales populares (Heliea), formados
por cientos de jurados elegidos por sorteo. Preguntas: ¿Busca la verdad
un tribunal o decide quién convence mejor? ¿Es injusto un sistema que
protege al culpable para no condenar a un inocente? ¿Qué habría pasado
si Sócrates hubiera contratado a un sofista para su defensa? ¿Y por qué
Aspasia necesitó que Pericles la defendiera? Concepto que se aplica:
retórica judicial (A05, p. 28: “conseguir que el tribunal considere que
es culpable o inocente quien nosotros estamos planteando”); juicio a
Sócrates (p. 32) y a Aspasia (p. 36).</p>
<hr />
<h1 id="hojas-para-el-alumnado">Hojas para el alumnado</h1>
<h2 id="hoja-de-preparación-del-debate-una-por-alumno">6. Hoja de
preparación del debate (una por alumno)</h2>
<p><strong>Debate: ¿Convencer o buscar la verdad? — Nombre:
______________ Equipo: ____ Posición asignada: [ ] Sofista [ ] Socrática
— Caso que nos ha tocado: n.º ____</strong></p>
<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>Apartado</th>
<th>Escribe aquí (frases completas)</th>
</tr>
</thead>
<tbody>
<tr>
<td>1. Mi tesis (una frase: “Lo más importante es… porque…”)</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>2. Mis tres razones (cada una con “porque” y, si puedes, con un
ejemplo)</td>
<td>Razón 1: ________________________________ Razón 2:
________________________________ Razón 3:
________________________________</td>
</tr>
<tr>
<td>3. Un concepto del tema que voy a usar y su definición (nomos,
retórica, relativismo, escepticismo, mayéutica, intelectualismo moral,
isegoría, parresía…)</td>
<td>Concepto: ____________ Definición: ______________________</td>
</tr>
<tr>
<td>4. La cita de los apuntes que voy a usar</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>5. La mejor objeción que espero del otro equipo</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>6. Mi respuesta a esa objeción</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>7. Cómo aplico mi posición al caso que nos ha tocado (3 líneas)</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>8. Mi frase de arranque (la que diré primero, aunque me ponga
nervioso)</td>
<td>“Nuestra tesis es que…” / “Mi objeción es que…” / “¿Qué quieres
decir con…?”</td>
</tr>
<tr>
<td>9. Después del debate: mi posición ahora es… porque… (¿ha cambiado
algo? ¿qué?)</td>
<td>________________________________________________</td>
</tr>
</tbody>
</table>
<p>Recuerda: no leas el papel; mira a quien te habla; si te pierdes,
levanta la tarjeta azul y pregunta.</p>
<h2 id="hoja-de-coevaluación-de-una-línea-para-observadores">7. Hoja de
coevaluación de una línea (para observadores)</h2>
<p><strong>Observador/a: ______________ Grupo: 2.º ___ Fecha:
________</strong> (una línea por cada persona observada; 0 = no, 1 = a
veces, 2 = sí, claramente)</p>
<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th>Persona observada (nombre de pila)</th>
<th>Da razones, no solo opiniones (0-2)</th>
<th>Escucha y responde a lo que se ha dicho (0-2)</th>
<th>Respeta turno, tarjetas y tono (0-2)</th>
<th>Lo mejor que ha dicho (una frase)</th>
</tr>
</thead>
<tbody>
<tr>
<td>________________</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>________________</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>________________</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>________________</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>________________</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>________________</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>Última línea del observador: “El argumento que más me ha hecho pensar
ha sido ______________________ (de ______________), porque
______________________”.</p>
<p>Correspondencia con la lista de control del profesor: columna 2 =
ítems 1 y 2 (3.2); columna 3 = ítem 3 (3.3); columna 4 = ítem 5 (9.1).
La hoja entregada es la evidencia del ítem 6 del observador.</p>
<hr />
<h1
id="tarea-posterior-composición-de-una-página-entrenamiento-del-ejercicio-2-de-la-pau">8.
Tarea posterior: composición de una página (entrenamiento del ejercicio
2 de la PAU)</h1>
<h2 id="la-consigna-original-del-departamento">8.1 La consigna original
del departamento</h2>
<p>En el documento
<code>A-3 Filosofía y ciudadanía en la ilustración griega..docx</code>
(versión anterior del tema 5) la única tarea explícita es esta, que se
reproduce literalmente:</p>
<blockquote>
<p>“TAREA INDIVIDUAL: Realiza a mano una composición escrita de este
apartado que tenga la extensión máxima de una página y contenga lo
esencial.”</p>
</blockquote>
<p>Se mantiene el espíritu (a mano, una página, lo esencial del tema) y
se reformula como un ejercicio 2 de la PAU: en vez de resumir el
apartado, el alumnado usa lo esencial del tema para responder a una
pregunta filosófica con su propia opinión. La pregunta es la misma que
el departamento propone en <code>metodologia_disertacion.pdf</code>
(p. 3): “¿Qué es más importante hoy; convencer a los demás o buscar la
verdad?”.</p>
<h2 id="enunciado-para-el-alumnado">8.2 Enunciado para el alumnado</h2>
<p><strong>Reflexión filosófica (3 puntos). Desarrolla una disertación.
Da argumentos a favor y en contra. Para ello, utiliza los diferentes
enfoques filosóficos que han existido a lo largo de la historia. Por
último, redondea la disertación con tu opinión personal, una
actualización y una conclusión (200-300 palabras).</strong></p>
<p><strong>Pregunta: ¿Qué es más importante hoy: convencer a los demás o
buscar la verdad?</strong></p>
<p>Condiciones de esta entrega:</p>
<ol type="1">
<li>A mano, en una cara de un folio, con el número de palabras escrito
al final (entre 200 y 300; se cuentan).</li>
<li>Título propio, sugestivo, que anticipe tu reflexión (no vale repetir
la pregunta).</li>
<li>Introducción que presente el problema y formule la pregunta.</li>
<li>Al menos dos autores o corrientes con sus argumentos explicados, no
solo nombrados: los sofistas (Protágoras y/o Gorgias) y Sócrates. Se
valora añadir a Aspasia como tercera voz.</li>
<li>Un párrafo claramente identificable de opinión personal (“en mi
opinión”, “creo que…”) con al menos un ejemplo.</li>
<li>Un vínculo claro con una situación actual: usa uno de los seis casos
del debate o uno propio.</li>
<li>Una cita filosófica integrada (de los apuntes: Protágoras, Gorgias,
Sócrates, Umberto Eco) y una pregunta provocadora al lector.</li>
<li>Conclusión que sintetice las posturas y tu opinión; elige una de las
tres salidas del canvas del departamento: toma de partido (A y no B),
integración (parte de A y parte de B) o superación (una nueva
pregunta).</li>
<li>Ortografía: se aplica el criterio de la PAU (−0,1 por falta hasta un
máximo de 1 punto).</li>
<li>Sin IA: es una creación original; la rúbrica penaliza los “indicios
de copia o de uso recurrente de herramientas como la inteligencia
artificial”. Puedes usar IA para pedir que te explique un concepto; no
para redactar.</li>
</ol>
<p>Fecha de entrega: ________ (sesión 5 de Q3 o primera sesión de
Q4).</p>
<h2 id="andamio-de-redacción-para-quien-no-arranca">8.3 Andamio de
redacción (para quien no arranca)</h2>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Parte</th>
<th>Palabras aprox.</th>
<th>Frases de arranque</th>
</tr>
</thead>
<tbody>
<tr>
<td>Título</td>
<td>—</td>
<td>Una imagen o una contradicción: “Likes o razones”, “El arte de tener
razón sin tenerla”, “La palabra de Aspasia”.</td>
</tr>
<tr>
<td>Introducción</td>
<td>40-50</td>
<td>“Vivimos rodeados de mensajes que quieren convencernos… Pocos se
preguntan si… ¿Qué es más importante hoy: …?”</td>
</tr>
<tr>
<td>Postura A (sofistas)</td>
<td>60-70</td>
<td>“Para los sofistas del siglo V a. C., convencer era… Protágoras
sostenía que… Gorgias fue más lejos: …”</td>
</tr>
<tr>
<td>Postura B (Sócrates)</td>
<td>60-70</td>
<td>“Sócrates, en cambio, defendía que… Su método, la mayéutica, …
Reconocer la propia ignorancia…”</td>
</tr>
<tr>
<td>Opinión personal + actualidad</td>
<td>60-70</td>
<td>“En mi opinión, … Un ejemplo actual: … Por eso creo que…”</td>
</tr>
<tr>
<td>Conclusión + pregunta provocadora</td>
<td>30-40</td>
<td>“En definitiva, … ¿De qué sirve tener razón si nadie escucha?”</td>
</tr>
</tbody>
</table>
<h2
id="rúbrica-resumida-datos-exactos-de-la-rúbrica-oficial-del-ejercicio-2-pau-2026">8.4
Rúbrica resumida (datos exactos de la rúbrica oficial del ejercicio 2,
PAU 2026)</h2>
<p>Competencias específicas evaluadas: 2, 3, 8 y 9. Puntuación máxima: 3
puntos.</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Competencia (intervalo)</th>
<th>Criterio</th>
<th>Puntos</th>
</tr>
</thead>
<tbody>
<tr>
<td>CE 2. Expresión clara, relevante y adecuada (0 - 0,5)</td>
<td>Empleo del lenguaje claro y preciso.</td>
<td>0,15</td>
</tr>
<tr>
<td>CE 2</td>
<td>Registro formal y apropiado al género filosófico, evitando
expresiones vulgares o coloquiales.</td>
<td>0,15</td>
</tr>
<tr>
<td>CE 2</td>
<td>Excelente y preciso uso de terminología filosófica.</td>
<td>0,2</td>
</tr>
<tr>
<td>CE 3. Estructura adecuada (0 - 0,5)</td>
<td>Respeto de la estructura indicada en el ejercicio (introducción,
argumentación, opinión personal y conclusión).</td>
<td>0,1</td>
</tr>
<tr>
<td>CE 3</td>
<td>Introducción clara: se presenta el tema o pregunta.</td>
<td>0,1</td>
</tr>
<tr>
<td>CE 3</td>
<td>En el desarrollo se identifican claramente los párrafos relativos a
los argumentos a favor y en contra. Uso adecuado y coherente de
conectores.</td>
<td>0,1</td>
</tr>
<tr>
<td>CE 3</td>
<td>Hay un apartado centrado en la opinión personal del alumno/a,
formulado con expresiones acordes a tal fin (en mi opinión, creo
que…).</td>
<td>0,1</td>
</tr>
<tr>
<td>CE 3</td>
<td>Hay conclusión que actúa a modo de cierre efectivo. En ella se
sintetizan los argumentos principales y la opinión personal.</td>
<td>0,1</td>
</tr>
<tr>
<td>CE 9. Calidad de la argumentación (0 - 1,5)</td>
<td>Reflexión centrada en la temática propuesta de manera coherente, sin
desviaciones ni contradicciones.</td>
<td>0,15</td>
</tr>
<tr>
<td>CE 9</td>
<td>Los argumentos se corresponden con al menos dos autor/as relevantes
en la historia del pensamiento. No se limita a citar nombres propios o
corrientes filosóficas: los argumentos son relevantes y sólidos.</td>
<td>0,5</td>
</tr>
<tr>
<td>CE 9</td>
<td>Es evidente el esfuerzo por ser crítico y objetivo, sin dejarse
llevar por prejuicios y/o ideas preconcebidas.</td>
<td>0,1</td>
</tr>
<tr>
<td>CE 9</td>
<td>La opinión personal está muy bien argumentada, con empleo de
ejemplos eficaces, ilustrativos y pertinentes.</td>
<td>0,5</td>
</tr>
<tr>
<td>CE 9</td>
<td>Se vincula la temática con una situación actual con claridad.</td>
<td>0,25</td>
</tr>
<tr>
<td>CE 8. Originalidad en el planteamiento de ideas (0 - 0,5)</td>
<td>Propone un título sugestivo y creativo que despierta el interés y
anticipa la reflexión central.</td>
<td>0,2</td>
</tr>
<tr>
<td>CE 8</td>
<td>Integra alguna cita filosófica de forma original, usándola para
desarrollar y/o cerrar ideas propias.</td>
<td>0,1</td>
</tr>
<tr>
<td>CE 8</td>
<td>Formula preguntas provocadoras que interpelan al lector/a a
cuestionar sus supuestos o abrir nuevas líneas de pensamiento.</td>
<td>0,1</td>
</tr>
<tr>
<td>CE 8</td>
<td>Resulta claro que se trata de una creación original, sin indicios de
copia o de uso recurrente de herramientas como la inteligencia
artificial.</td>
<td>0,1</td>
</tr>
<tr>
<td><strong>Total</strong></td>
<td></td>
<td><strong>3</strong></td>
</tr>
</tbody>
</table>
<p>Ortografía (documento oficial “Estructura de la prueba”, PAU 2026):
“Cada fallo ortográfico se penalizará con -0,1 hasta sumar un máximo de
1 punto.”</p>
<p>Criterios de contenido añadidos por el profesor (no puntúan aparte;
sirven para decidir dentro de cada tramo): las dos posturas están bien
explicadas y diferenciadas (retórica/persuasión frente a
mayéutica/definición universal; nomos frente a verdad universal); la
opinión no es copia de un autor; no hay “síntesis vacía” (“los dos
tienen razón” sin decir en qué).</p>
<h2 id="lista-de-comprobación-antes-de-entregar-para-el-alumnado">8.5
Lista de comprobación antes de entregar (para el alumnado)</h2>
<ul class="task-list">
<li><label><input type="checkbox" />Tengo título propio.</label></li>
<li><label><input type="checkbox" />La introducción termina con la
pregunta.</label></li>
<li><label><input type="checkbox" />He explicado qué defendían los
sofistas (al menos un argumento con “porque”).</label></li>
<li><label><input type="checkbox" />He explicado qué defendía Sócrates
(al menos un argumento con “porque”).</label></li>
<li><label><input type="checkbox" />Hay un párrafo que empieza por “En
mi opinión” o “Creo que”.</label></li>
<li><label><input type="checkbox" />Hay un ejemplo actual
concreto.</label></li>
<li><label><input type="checkbox" />Hay una cita entre comillas con el
nombre de quien la dijo.</label></li>
<li><label><input type="checkbox" />Hay una pregunta dirigida al
lector.</label></li>
<li><label><input type="checkbox" />La conclusión resume y toma postura
(partido, integración o superación).</label></li>
<li><label><input type="checkbox" />He contado las palabras (200-300) y
he revisado la ortografía (cada falta, −0,1).</label></li>
</ul>
<h2 id="cómo-se-califica-y-dónde-cuenta">8.6 Cómo se califica y dónde
cuenta</h2>
<ul>
<li>Se corrige con la rúbrica oficial (0-3) y se devuelve con la nota
por competencias (CE 2, CE 3, CE 9, CE 8) para que el alumnado vea dónde
pierde puntos.</li>
<li>Es un entrenamiento del ejercicio 2 antes de la Disertación 1 de Q5
(“¿Puede el ser humano ser feliz?”). Según el dosier §2.4 puede contar
en el apartado “Disertación entregada (con actualización y título) o
mini-reto de actualidad” (criterio 8.1, 10 %) si el profesor decide
calificarla, o quedarse como calificación formativa. En cualquier caso,
la frase 9 de la hoja de preparación (“mi posición ahora es…”) y esta
composición son la evidencia del criterio 9.2 (capacidad crítica y
reflexiva).</li>
<li>Devolución en clase (10 min, Q4): se leen en voz alta dos títulos
buenos, una introducción buena y un párrafo de opinión bien argumentado
(sin decir de quién son) y se comentan tres errores frecuentes: nombrar
sin explicar, opinión sin ejemplo, más de 300 palabras.</li>
</ul>
<h2
id="modelo-de-referencia-para-el-profesor-no-repartir-antes-de-la-entrega">8.7
Modelo de referencia para el profesor (no repartir antes de la
entrega)</h2>
<p>Sirve para calibrar la corrección; tiene unas 270 palabras (272 según
el contador de un procesador de textos) y cumpliría los 17 criterios de
la rúbrica.</p>
<p><strong>Likes o razones</strong></p>
<p>Vivimos rodeados de mensajes que quieren convencernos: anuncios,
vídeos, campañas. Pocos nos preguntan si lo que dicen es verdad. ¿Qué es
más importante hoy: convencer a los demás o buscar la verdad?</p>
<p>Para los sofistas del siglo V a. C., convencer era la clave de la
ciudadanía. En una democracia directa, quien no sabía hablar en la
asamblea no contaba. Protágoras enseñaba retórica porque, si «el hombre
es la medida de todas las cosas», no hay una verdad absoluta que
descubrir: lo justo es lo que la comunidad acuerda, y acordar exige
persuadir. Gorgias fue más lejos: si la verdad no puede conocerse ni
comunicarse, la palabra solo sirve para influir.</p>
<p>Sócrates, en cambio, sostenía que sin verdad la persuasión se
convierte en manipulación. Su método, la mayéutica, no buscaba vencer al
interlocutor, sino ayudarle a descubrir con preguntas lo que ya sabía.
Reconocer la propia ignorancia («solo sé que no sé nada») es el primer
paso; y conocer el bien, decía, lleva a obrar bien.</p>
<p>En mi opinión, Sócrates tiene razón en lo esencial, pero los sofistas
señalan algo real: sin capacidad de convencer, la verdad no llega a
nadie. Un ejemplo actual: un vídeo falso sobre un político se hace viral
en horas; la corrección, días después, la ven pocos. El algoritmo premia
lo que engancha, no lo que es cierto. Por eso creo que hoy necesitamos
las dos cosas: buscar la verdad y saber comunicarla, como hizo Aspasia,
que enseñó a hablar a Sócrates sin tener derecho a la palabra.</p>
<p>¿De qué sirve tener razón si nadie escucha? Y ¿de qué sirve que te
escuchen si no tienes razón?</p>
<p>Puntuación orientativa con la rúbrica: CE 2: 0,5; CE 3: 0,5; CE 9:
1,4 (la opinión personal podría desarrollar más el ejemplo); CE 8: 0,5.
Total: 2,9.</p>
<hr />
<h2 id="notas-para-el-profesor">Notas para el profesor</h2>
<ul>
<li>Errata conocida de la fuente: en <code>apuntes_A05.pdf</code>,
p. 27, la frase “Pericles -el gran magistrado, general, político y
oradora ciudad vivió con él…” tiene un corte de edición; debe leerse
“…político y orador-. La ciudad vivió con él…” (así aparece en el
documento A-3). Si se reparte la página, corregirla.</li>
<li>En el documento A-3 se atribuye a Sócrates un “utilitarismo moral”
(“lo bueno es lo útil”); es una lectura discutible y el
<code>apuntes_A05.pdf</code> definitivo no la recoge. En el debate se
usa la formulación del A05 (intelectualismo moral).</li>
<li>La nota de Obsidian sobre desigualdad es una conversación con IA; de
ella se han tomado solo las referencias comprobables (Aristóteles,
Política I; Platón, República V; tratados hipocráticos; Antifonte) y se
han eliminado los nombres de personas actuales.</li>
<li>Este debate es el primer uso completo del protocolo de tarjetas:
conviene reservar 5 minutos más de lo previsto la primera vez y aceptar
que la ronda 3 sea corta. En Q6 (juego o debate político, tema 9) el
protocolo ya rodará solo.</li>
<li>Las fechas son las estimadas en el dosier §3 (Q3: 5-16 de octubre);
ajustar cuando se conozca el calendario real.</li>
</ul>
` },

  "hf-zenon":{ subject:"hf", tema:"Historia de la Filosofía · Tema 4", title:"Ficha de Zenón: aporías (PAU Ej. 2)", html:`
<ul>
<li><strong>Materia</strong>: Historia de la Filosofía, 2.º de
Bachillerato (IES Martín de Bertendona, modelo A, castellano).</li>
<li><strong>Uso/sesión</strong>: tema 4 (el problema de la realidad en
los presocráticos), al cerrar Parménides. Doble uso: contenido del tema
y <strong>primer entrenamiento del Ejercicio 2 de la PAU</strong>
(reflexión). Se relee antes de cada examen con reflexión. Q2-Q3 (fechas
estimadas del dosier).</li>
<li><strong>Saberes</strong>: 4 (el problema de la realidad en los
presocráticos: ser y devenir, razón y sentidos) y 2 (el diálogo
argumentativo y la disertación). Transversal: 1.</li>
<li><strong>Criterios/CE</strong>: los del Ejercicio 2 de la PAU
(reflexión): CE 2, 3, 8 y 9 (pensar de forma autónoma un problema,
argumentar con rigor, relacionar la filosofía con la propia vida y con
problemas actuales, y valorar el diálogo racional). Instrumento del 30
%: “disertaciones y otras actividades” (tabla de §2.4 del dosier).</li>
<li><strong>Duración</strong>: una sesión de 50 minutos (explicación 15
+ modelo comentado 10 + escritura de una reflexión 20 + puesta en común
5) y una reflexión de casa para entregar.</li>
<li><strong>Material</strong>: esta ficha fotocopiada (4 páginas).
Opcional: proyector para el modelo y para el vídeo de una de las
paradojas.</li>
<li><strong>Fuente de origen</strong>: contenido del tema 4 (Parménides
y la escuela de Elea; Zenón de Elea y sus argumentos contra el
movimiento y la pluralidad; el problema del ser y el devenir), apoyado
en <code>DPTO\\carpetas_drive_resultados\\apuntes_A04.pdf</code>
(Parménides, pp. 22-23) y en la bibliografía habitual de bachillerato.
Formato y criterios del examen:
<code>hf\\PAU\\guia_PAU_en_2_paginas.md</code> y
<code>DPTO\\carpetas_drive_PAU\\PAU_2026\\rubrica_PAU-2026.docx</code>.
Guion, aporías seleccionadas, modelo resuelto y rúbrica de aula:
creación propia.</li>
</ul>
<hr />
<h2 id="qué-te-piden-en-el-ejercicio-2-la-reflexión">1. Qué te piden en
el Ejercicio 2 (la reflexión)</h2>
<p>En la PAU de Historia de la Filosofía (formato 2026), el
<strong>Ejercicio 2 vale 3 puntos</strong> y consiste en una
<strong>reflexión personal argumentada</strong> de <strong>200 a 300
palabras</strong> sobre un problema filosófico relacionado con el texto
o el tema.</p>
<p>No es un resumen ni una lección memorizada. Es <strong>tu posición
razonada</strong> sobre un problema. Se te evalúa por cómo
<strong>piensas y argumentas</strong>, no por acertar una “respuesta
correcta”. Por eso este tema es ideal para entrenarla: los presocráticos
dejaron el problema del cambio abierto, y las paradojas de Zenón son un
caso perfecto para tomar postura.</p>
<p>Una buena reflexión:</p>
<ul>
<li><strong>plantea el problema</strong> con claridad y toma una
<strong>tesis</strong> (tu posición);</li>
<li>la <strong>defiende con argumentos</strong> que usan conceptos
filosóficos del tema;</li>
<li><strong>considera una objeción</strong> y responde a ella (esto es
lo que más sube la nota);</li>
<li><strong>concluye</strong> sin limitarse a repetir la
introducción.</li>
</ul>
<hr />
<h2 id="el-material-filosófico">2. El material filosófico</h2>
<h3 id="de-parménides-a-zenón">2.1 De Parménides a Zenón</h3>
<p>Recuerda la tesis de <strong>Parménides de Elea</strong>: solo el Ser
es; el Ser es uno, eterno e <strong>inmóvil</strong>, y el
<strong>cambio y el movimiento son una ilusión de los sentidos</strong>.
La razón (vía de la verdad) nos dice que el ser no puede cambiar; los
sentidos (vía de la opinión) nos muestran movimiento y pluralidad. Hay,
pues, un <strong>conflicto entre la razón y los sentidos</strong>.</p>
<p><strong>Zenón de Elea</strong> (siglo V a. C.), discípulo de
Parménides, defiende a su maestro con un método genial: la
<strong>reducción al absurdo</strong>. No demuestra directamente que el
ser sea inmóvil; muestra que <strong>si aceptamos el movimiento y la
pluralidad, caemos en contradicciones</strong>. Si lo que ven los
sentidos lleva a contradicción, entonces la razón (Parménides) tiene
razón.</p>
<h3 id="las-paradojas-de-zenón-contra-el-movimiento">2.2 Las paradojas
de Zenón contra el movimiento</h3>
<p><strong>a) La dicotomía.</strong> Para recorrer una distancia,
primero hay que recorrer su mitad; pero antes, la mitad de esa mitad; y
antes, la mitad de esa… Como hay infinitas divisiones, nunca se llega a
empezar (ni a terminar) el recorrido. Luego el movimiento es imposible.
<em>(Versión de clase: para comerte un bocadillo tendrías que comer
antes su mitad, y antes la mitad de la mitad… nunca darías el primer
bocado.)</em></p>
<p><strong>b) Aquiles y la tortuga.</strong> El veloz Aquiles da ventaja
a la tortuga. Cuando Aquiles llega al punto donde estaba la tortuga,
esta ya ha avanzado un poco; cuando llega a ese nuevo punto, la tortuga
ha avanzado otro poco… El más rápido <strong>nunca alcanza</strong> al
más lento. Luego el movimiento es una contradicción.</p>
<p><strong>c) La flecha.</strong> En cada <strong>instante</strong>, la
flecha ocupa un espacio igual a su tamaño, es decir, está en
<strong>reposo</strong>. Si en cada instante está en reposo, y el tiempo
es una suma de instantes, la flecha <strong>no se mueve
nunca</strong>.</p>
<h3 id="qué-está-en-juego">2.3 Qué está en juego</h3>
<p>Las paradojas no son un juego: plantean problemas que la filosofía y
la ciencia han seguido pensando 2.500 años.</p>
<ul>
<li><strong>¿Razón o sentidos?</strong> Vemos movimiento, pero la razón
parece demostrar que es imposible. ¿A cuál creemos?</li>
<li><strong>El infinito y el continuo.</strong> ¿Se puede dividir el
espacio (o el tiempo) infinitas veces? ¿Una suma de infinitas partes
puede dar algo finito?</li>
<li><strong>Ser y devenir.</strong> El problema que abren Heráclito
(“todo fluye”) y Parménides (“el ser es inmóvil”): ¿qué es lo real, el
cambio o lo permanente?</li>
</ul>
<hr />
<h2 id="las-aporías-dudas-que-obligan-a-pensar">3. Las aporías: dudas
que obligan a pensar</h2>
<p>Una <strong>aporía</strong> es una dificultad racional sin salida
inmediata que <strong>obliga a seguir pensando</strong>. No es un
fracaso: es el motor de la filosofía. Estas aporías del tema 4 sirven
como disparadores de reflexión (elige una para tu Ejercicio 2):</p>
<ol type="1">
<li><strong>El cambio y la identidad.</strong> Si todo cambia, nada
permanece y nada puede conocerse; si nada cambia, el movimiento es una
ilusión. ¿Cómo puede algo cambiar y <strong>seguir siendo lo que
es</strong>?</li>
<li><strong>La foto de hace diez años.</strong> Compara una foto tuya de
hace diez años con una de hoy. Si has cambiado tanto, ¿por qué dices que
<strong>sigues siendo tú</strong>? ¿Qué es ese “yo”? Es el mismo enigma
que el <strong>barco de Teseo</strong>: si a un barco se le cambian
todas las tablas, una a una, ¿sigue siendo el mismo barco?</li>
<li><strong>La causa primera.</strong> Si todo efecto tiene una causa,
¿hay una <strong>primera causa</strong> o un regreso infinito? Y si todo
ocurre por necesidad, ¿queda lugar para el <strong>azar o la
libertad</strong>?</li>
<li><strong>El orden del cosmos (Jenófanes).</strong> Si el orden que
vemos en el universo se parece tanto a nuestro modo humano de ordenar,
¿es un orden <strong>real</strong> o una <strong>proyección</strong>
nuestra, un antropomorfismo disfrazado?</li>
<li><strong>Movimiento real vs. razón (Zenón).</strong> Vemos que
Aquiles adelanta a la tortuga, pero la razón parece demostrar que no
puede. ¿Nos engañan los sentidos, o le falta algo a ese
razonamiento?</li>
</ol>
<hr />
<h3 id="una-imagen-para-cada-aporía-perchas-para-recordar-y-repasar">Una
imagen para cada aporía (perchas para recordar y repasar)</h3>
<p>Cada aporía se recuerda mejor con una imagen. Esta tabla sirve como
tarjetas de repaso o para trabajo en grupos.</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Aporía</th>
<th>Imagen</th>
<th>Por qué encaja</th>
</tr>
</thead>
<tbody>
<tr>
<td>Antropomorfismo: ¿el orden del cosmos es real o una proyección
nuestra?</td>
<td>🪞 Un espejo</td>
<td>El caballo de Jenófanes que pinta un dios con forma de caballo:
miramos “fuera” y vemos nuestro reflejo.</td>
</tr>
<tr>
<td>Regreso infinito de causas: ¿hasta dónde?</td>
<td>⛓️ Una cadena sin primer eslabón</td>
<td>Cada causa cuelga de otra; la cadena se pierde hacia atrás sin que
se vea dónde empieza.</td>
</tr>
<tr>
<td>Lo uno y lo múltiple (el arché)</td>
<td>💧 Una gota que se vuelve río</td>
<td>Una sola fuente que se abre en mil corrientes: ¿explica la gota al
río, o el río desmiente a la gota?</td>
</tr>
<tr>
<td>Lo general y lo singular (concepto frente a nombre propio)</td>
<td>🏷️ Una etiqueta sobre cosas distintas</td>
<td>La misma etiqueta (“fuego”, “silla”) sobre cosas que nunca son
idénticas entre sí.</td>
</tr>
<tr>
<td>Naturaleza y convención (del cosmos a la polis)</td>
<td>⚖️ Una balanza</td>
<td>Diké como “cada cosa en su sitio”: equilibrio, pero también ¿quién
lo ajusta?</td>
</tr>
<tr>
<td>El cambio y la permanencia</td>
<td>🌊 El río de Heráclito</td>
<td>“No te bañas dos veces en el mismo río”: la imagen misma de la
aporía.</td>
</tr>
<tr>
<td>El movimiento (Zenón)</td>
<td>🏹 Una flecha congelada en el aire</td>
<td>El fotograma que niega la película.</td>
</tr>
<tr>
<td>Purificación del alma (herencia pitagórica)</td>
<td>🔒 Una jaula</td>
<td>El cuerpo como cárcel del alma.</td>
</tr>
<tr>
<td>Sentidos y razón (aletheia)</td>
<td>🕯️ Una vela en un cuarto oscuro</td>
<td>La verdad como desvelamiento: lo que hay que alumbrar para
descubrir.</td>
</tr>
<tr>
<td>La identidad personal (el “yo”)</td>
<td>⛵ El barco de Teseo</td>
<td>Cambian todas sus tablas y seguimos llamándolo “el mismo
barco”.</td>
</tr>
<tr>
<td>Las preguntas como motor (aporía final)</td>
<td>🚪 Una puerta a un pasillo con más puertas</td>
<td>Cada respuesta no cierra el problema: abre otro.</td>
</tr>
</tbody>
</table>
<h2 id="cómo-se-escribe-estructura-en-cuatro-pasos">4. Cómo se escribe
(estructura en cuatro pasos)</h2>
<p>Escribe <strong>200-300 palabras</strong>. Una estructura que
funciona:</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Parte</th>
<th>Qué haces</th>
<th>Extensión orientativa</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Planteamiento</strong></td>
<td>Formula el problema en una pregunta y enuncia tu
<strong>tesis</strong> (tu respuesta).</td>
<td>2-3 frases</td>
</tr>
<tr>
<td><strong>Argumento 1</strong></td>
<td>Una razón a favor de tu tesis, apoyada en un concepto del tema
(ser/devenir, razón/sentidos, infinito).</td>
<td>3-4 frases</td>
</tr>
<tr>
<td><strong>Argumento 2</strong></td>
<td>Otra razón distinta, o un ejemplo actual (un vídeo a cámara lenta,
un GPS, un límite matemático).</td>
<td>3-4 frases</td>
</tr>
<tr>
<td><strong>Objeción y respuesta</strong></td>
<td>“Alguien podría objetar que…”; y respondes. Aquí demuestras que
piensas de verdad.</td>
<td>2-3 frases</td>
</tr>
<tr>
<td><strong>Conclusión</strong></td>
<td>Recapitula tu postura con un matiz nuevo; no repitas la
introducción.</td>
<td>1-2 frases</td>
</tr>
</tbody>
</table>
<p><strong>Conectores útiles</strong>: <em>en primer lugar; sin embargo;
por el contrario; se podría objetar que; ahora bien; en conclusión.</em>
<strong>Vocabulario del tema</strong> que conviene usar: ser, devenir,
physis, logos, razón, sentidos, apariencia, necesidad, infinito,
continuo, aporía.</p>
<hr />
<h2 id="modelo-resuelto-reflexión-de-226-palabras">5. Modelo resuelto
(reflexión de 226 palabras)</h2>
<p><strong>Pregunta:</strong> ¿Es real el movimiento o es una ilusión de
los sentidos, como sugieren Parménides y Zenón?</p>
<blockquote>
<p>El movimiento parece lo más evidente del mundo: veo pasar los coches
y sé que me muevo al andar. Sin embargo, Zenón, discípulo de Parménides,
sostiene que el movimiento es imposible, porque para recorrer cualquier
distancia habría que atravesar antes infinitas mitades. Yo defenderé que
el movimiento es real, pero que la paradoja no es una simple trampa:
señala un problema verdadero sobre el infinito.</p>
<p>En primer lugar, negar el movimiento por un argumento choca con toda
mi experiencia; y Parménides mismo tiene que explicar por qué, si el ser
es inmóvil, los sentidos nos muestran cambio por todas partes. Que la
razón y los sentidos entren en conflicto no significa que los sentidos
siempre mientan.</p>
<p>En segundo lugar, la paradoja supone que sumar infinitos pasos exige
un tiempo infinito; pero infinitas mitades cada vez más pequeñas pueden
recorrerse en un tiempo finito. Aquiles alcanza a la tortuga porque la
suma de sus avances, aunque infinita en pasos, tiene un límite.</p>
<p>Se podría objetar que sigue sin explicarse cómo se “completa” un
infinito. Es cierto: por eso la aporía obliga a distinguir entre dividir
infinitamente en teoría y moverse de hecho.</p>
<p>En conclusión, el movimiento es real, pero Zenón no se equivoca del
todo: al defender a Parménides, descubre que nuestra idea intuitiva de
espacio, tiempo e infinito era mucho menos clara de lo que creíamos.</p>
</blockquote>
<p><em>(Comentario para el profesor: plantea el problema y una tesis, da
dos argumentos con vocabulario del tema, incluye una objeción con
respuesta y concluye con un matiz. Entra en el rango 200-300.)</em></p>
<hr />
<h2 id="para-practicar-elige-una-y-escribe-200-300-palabras">6. Para
practicar (elige una y escribe 200-300 palabras)</h2>
<ol type="1">
<li>¿Es real el movimiento o una contradicción para la razón? (paradojas
de Zenón)</li>
<li>¿Debemos fiarnos más de la razón o de los sentidos cuando se
contradicen?</li>
<li>Si todo cambia, ¿sigues siendo la misma persona que hace diez años?
¿Qué es el “yo”?</li>
<li>¿El orden que vemos en el universo está realmente ahí o lo ponemos
nosotros? (Jenófanes)</li>
<li>¿Sirve de algo una paradoja que no tiene solución? ¿Para qué piensa
la filosofía problemas sin respuesta?</li>
</ol>
<hr />
<h2 id="rúbrica-de-la-reflexión-sobre-3-puntos">7. Rúbrica de la
reflexión (sobre 3 puntos)</h2>
<p>Alineada con los criterios del Ejercicio 2 de la PAU 2026 (ver
<code>hf\\PAU\\guia_PAU_en_2_paginas.md</code>). La penalización por
faltas de ortografía (−0,1 por falta, hasta 1 punto) se aplica sobre el
conjunto del examen, según el acuerdo del departamento.</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Criterio</th>
<th>Qué se valora</th>
<th>Puntos</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Planteamiento del problema</strong></td>
<td>Identifica y formula con claridad el problema filosófico y enuncia
una tesis propia.</td>
<td>0,75</td>
</tr>
<tr>
<td><strong>Reflexión argumentada</strong></td>
<td>Defiende la tesis con al menos dos argumentos y <strong>considera
una objeción</strong> con su respuesta.</td>
<td>1,00</td>
</tr>
<tr>
<td><strong>Vocabulario y contenido del tema</strong></td>
<td>Usa con precisión conceptos y autores del tema (ser/devenir,
razón/sentidos, infinito, Parménides, Zenón).</td>
<td>0,75</td>
</tr>
<tr>
<td><strong>Estructura y expresión</strong></td>
<td>Texto coherente y bien ordenado
(introducción-desarrollo-conclusión), extensión 200-300 palabras,
corrección lingüística.</td>
<td>0,50</td>
</tr>
</tbody>
</table>
<p><strong>Descriptores rápidos (para corregir en voz
alta):</strong></p>
<ul>
<li><strong>3 – 2,5</strong>: plantea bien el problema, argumenta con
solidez, incluye objeción y usa el vocabulario con precisión.</li>
<li><strong>2,5 – 1,5</strong>: hay tesis y algún argumento, pero falta
la objeción o el vocabulario es impreciso.</li>
<li><strong>1,5 – 0,5</strong>: resume el tema o da una opinión sin
argumentar; poca estructura.</li>
<li><strong>0,5 – 0</strong>: no plantea el problema, no argumenta o se
sale del tema.</li>
</ul>
<hr />
<h2 id="notas-para-el-profesor">8. Notas para el profesor</h2>
<ul>
<li><strong>Encaje en la sesión (50 min):</strong> 15 min de explicación
(2.1-2.3 con una de las paradojas en la pizarra o en vídeo), 10 min
comentando el modelo del apartado 5 con la rúbrica en la mano, 20 min
escribiendo una reflexión sobre una de las preguntas del apartado 6, y 5
min de puesta en común. La segunda reflexión se manda de casa y se
corrige con la rúbrica.</li>
<li><strong>Error más frecuente:</strong> el alumnado
<strong>resume</strong> el tema en vez de <strong>reflexionar</strong>.
Insiste en que sin <strong>tesis</strong> y sin
<strong>objeción</strong> no se pasa de la mitad de la nota. Un truco:
obligar a que en la primera frase aparezca “Yo defiendo que…” o
“Sostengo que…”.</li>
<li><strong>Conexión con el tema:</strong> la ficha da por vista la
oposición Heráclito/Parménides y la vía de la razón frente a la de los
sentidos. Zenón se presenta como el discípulo que “defiende” a
Parménides; es un buen momento para introducir la <strong>reducción al
absurdo</strong> como forma de argumentar.</li>
<li><strong>Vínculo con la actualidad (sube la nota en el argumento
2):</strong> la cámara lenta, el GPS que “predice” posiciones, o la idea
matemática de límite y de suma infinita con resultado finito. Sirve para
el criterio 8 (relacionar la filosofía con problemas actuales).</li>
<li><strong>DUA / diversidad:</strong> para quien lo necesite, ofrecer
un <strong>guion con huecos</strong> (Planteamiento: “El problema es si…
Yo defiendo que…”; Argumento 1: “En primer lugar…”; Objeción: “Se podría
objetar que… pero…”; Conclusión: “En conclusión…”) y permitir 150
palabras en lugar de 200 en la primera práctica.</li>
<li><strong>Rigor histórico:</strong> las tres paradojas (dicotomía,
Aquiles, flecha) se atribuyen a Zenón de Elea y se conocen por
Aristóteles (<em>Física</em> VI); no hace falta citar las fuentes
antiguas en clase, pero conviene saber que la “solución” moderna (series
convergentes) resuelve el cálculo, no el problema filosófico de fondo
(qué es el continuo y cómo se “completa” un infinito).</li>
<li><strong>Para profundizar (nivel alto):</strong> la premisa oculta de
Zenón es que sumar infinitos pasos exige un tiempo infinito; el cálculo
la refuta (una serie decreciente puede converger a algo finito), pero
solo traslada el problema. Aristóteles ya distinguía <strong>infinito
potencial</strong> (siempre se puede dividir más) de <strong>infinito
actual</strong> (la división ya completada); el cálculo resuelve el
primero, no el segundo. La paradoja de la <strong>flecha</strong> es la
más resistente: no suma nada, sino que cuestiona qué es un
<em>instante</em> y si el <strong>reposo</strong> es una propiedad real
o una <strong>ficción del lenguaje</strong> (nada en el universo está en
reposo absoluto: el movimiento siempre es relativo a un marco de
referencia).</li>
<li><strong>Ejemplo con gancho (el huevo o la gallina):</strong> si
preguntan si es una paradoja, no lo es en sentido estricto (tiene
respuesta: la evolución es gradual), pero <strong>sí es
filosófica</strong> por lo mismo que el arché: busca un <strong>primer
eslabón discreto</strong> en un proceso <strong>continuo</strong>.
Conecta con la identidad (el barco de Teseo) y con el concepto frente a
lo singular: por qué el lenguaje nos obliga a categorías cerradas
(gallina / no-gallina) cuando la realidad que describe es un
continuo.</li>
</ul>
` },
  "hf-guia-pau":{ subject:"hf", tema:"Historia de la Filosofía · PAU", title:"Guía PAU en 2 páginas", html:`
<p><strong>Materia:</strong> Historia de la Filosofía, 2.º de
Bachillerato (modelo A, castellano), IES Martín de Bertendona BHI.
<strong>Uso/sesión:</strong> Q1 (segunda o tercera sesión: presentación
del formato de examen, 50 minutos). Se relee antes de cada examen de
evaluación (Q6, Q11, Q17) y en el repaso de mayo.
<strong>Saberes:</strong> 2 (métodos y herramientas del filósofo:
comprensión de textos, argumentación, disertación); se aplica a los
temas 1-27. <strong>Criterios/CE:</strong> 1.1, 1.2 y 7.1 (ejercicio 1);
2.1, 2.2, 3.1, 8.1, 9.1 y 9.2 (ejercicio 2); 4.1, 4.2, 5.1 y 6.1
(ejercicio 3). <strong>Duración:</strong> 1 sesión de presentación +
consulta permanente. <strong>Fuente de origen:</strong> datos copiados
de los documentos oficiales de la UPV/EHU para 2026:
carpetas_drive_PAU_2026-y-modeloExamen-rubrica.pdf,
rubrica_PAU-2026.docx y “Estructura de la prueba de historia de la
filosofía.docx.pdf”; consejos de la guía del departamento
metodologia_PAU-comprensionTexto.pdf y del dosier de arranque (§3.5).
Redacción propia.</p>
<p><strong>Nota inicial: formato de 2026; la PAU 2027 aún no se ha
publicado: se actualizará cuando llegue la coordinación (hacia finales
de octubre).</strong></p>
<h2 id="guion-para-el-profesor">Guion para el profesor</h2>
<ul>
<li>Sesión de 50 minutos: 10 minutos para la estructura (apartado 1) con
el modelo de examen oficial proyectado; 20 minutos para la rúbrica del
ejercicio 2 (apartado 3.3), que es la más “mecánica” y la que más puntos
regala si se conoce; 10 minutos para el guion de tiempos y los errores
(apartados 6 y 7); 10 minutos para que cada alumno/a marque en la lista
del apartado 8 lo que ya sabe hacer.</li>
<li>Cuando llegue la coordinación de la PAU 2027, revisar los apartados
1, 4 y 5 y cambiar el título del documento.</li>
<li>Nota sobre las fuentes: el documento de estructura llama al
ejercicio 3 “Repensando la historia de la filosofía”; la rúbrica y los
modelos de examen lo llaman “Revisando la historia de la filosofía”; la
rúbrica del .docx llama al ejercicio 2 “Disertación filosófica” y la
estructura, “Reflexión filosófica”. Son el mismo ejercicio. En la
versión PDF de la rúbrica de la pregunta 1.2-A el tercer intervalo
aparece como “05 - 1”; es una errata por “0,5 - 1”, como figura en el
.docx. En la descripción oficial del ejercicio 2 figura “justificar
porqué se sostiene” (errata por “por qué”); en la hoja del alumnado se
ha parafraseado ese fragmento para no reproducirla. Los documentos de
2026 no indican la duración de la prueba; los 90 minutos son la duración
de los exámenes de la USaP y la que usamos en los exámenes de
evaluación.</li>
</ul>
<hr />
<h2 id="hoja-para-el-alumnado">Hoja para el alumnado</h2>
<h3 id="estructura-de-la-prueba">1. Estructura de la prueba</h3>
<p>Indicaciones generales oficiales: “Habrá una sola prueba, es decir,
no habrá dos modelos de prueba a escoger uno. Sí podrá incluir preguntas
con dos opciones, A o B”. Y una advertencia: “El examen no ofrecerá
opciones tal que una estudiante o un estudiante tenga alguna garantía de
poder obtener la máxima calificación sin haber preparado un Bloque de
los saberes básicos”. Es decir, hay que preparar los tres bloques (A, B
y C).</p>
<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th>Ejercicio</th>
<th>Puntos</th>
<th>Opciones</th>
<th>Extensión</th>
<th>Competencias</th>
</tr>
</thead>
<tbody>
<tr>
<td>1. Comprensión del texto (texto de unas 200 a 400 palabras)</td>
<td>4 (1.1 resumen: 1 · 1.2: 3)</td>
<td>1.2: A o B</td>
<td>1.2: máximo 250 palabras</td>
<td>1 y 7</td>
</tr>
<tr>
<td>2. Reflexión filosófica (disertación)</td>
<td>3</td>
<td>opción única</td>
<td>aproximada: entre 200 y 300 palabras</td>
<td>2, 3, 8 y 9</td>
</tr>
<tr>
<td>3. Revisando la historia de la filosofía (exposición
argumentada)</td>
<td>3</td>
<td>A o B</td>
<td>aproximada: entre 200 y 300 palabras</td>
<td>4, 5 y 6</td>
</tr>
</tbody>
</table>
<p>Total: 10 puntos. Tiempo: 90 minutos (duración general de la prueba
de acceso; es también la de los exámenes de evaluación). Ortografía:
“Cada fallo ortográfico se penalizará con -0,1 hasta sumar un máximo de
1 punto”.</p>
<h3 id="qué-se-pide-en-cada-ejercicio-con-las-palabras-oficiales">2. Qué
se pide en cada ejercicio (con las palabras oficiales)</h3>
<p><strong>Ejercicio 1.</strong> Se evalúa “la competencia de la o el
estudiante para comprender las ideas y la estructura argumental de un
texto y relacionar distintos conceptos y cuestiones de la Historia de la
Filosofía a partir de este texto”.</p>
<ul>
<li>1.1 (1 punto): “Resumen del texto, respetando las ideas y la
estructura argumental del mismo”. En el examen: “Elabore un resumen de
las ideas principales y la estructura argumental del texto”.</li>
<li>1.2 (3 puntos, máximo 250 palabras). Opción A: “Elaboración de una
comparación crítica de un aspecto del texto con una cuestión de la
Historia de la Filosofía” (en el examen: “Elabore una comparación
crítica del asunto principal del texto y las ideas de…”). Opción B:
“Explicación de por qué la autora o autor afirma algo en el texto” (en
el examen: “Justifique argumentativamente por qué afirma [el autor o la
autora] en el texto que: ‘…’”).</li>
</ul>
<p><strong>Ejercicio 2.</strong> Puede formularse “mediante una pregunta
directa, una afirmación, una argumentación o una situación hipotética”.
Hay que “reflexionar sobre dos o más posiciones que propicien la
argumentación filosófica”: sostener una de las posiciones, una frente a
la otra, contemplar ambas y justificar por qué se sostiene una de ellas,
defender un punto intermedio o “dejar abierta la cuestión de modo
retórico”. Enunciado del modelo oficial: “Desarrolle una disertación. Dé
argumentos a favor y en contra. Para ello, utilice los diferentes
enfoques filosóficos que han existido a lo largo de la historia. Por
último, redondee la disertación con su opinión personal, una
actualización y una conclusión (200-300 palabras)”. Ejemplos oficiales:
“¿Puede el ser humano alcanzar la felicidad?”; “El ser humano es un
proyecto abierto, no tiene una esencia inmutable”.</p>
<p><strong>Ejercicio 3.</strong> “El desarrollo de una exposición
argumentada de alguna cuestión de la Historia de la Filosofía”,
“relacionada con los saberes básicos seleccionados del currículum”.
Aclaración oficial: “No se pide que el o la estudiante exponga de
memoria el pensamiento de ningún autor o autora en concreto, sino que
elabore una exposición argumentada sobre una cuestión relevante de la
historia de la filosofía que habrá trabajado en su curso”. Ejemplos
oficiales: “el concepto de ciudadanía en la Ilustración griega”; “el
debate platónico-aristotélico sobre la política”; “la crisis de la polis
(ciudad-estado) y la propuesta ética helenística”; “las aportaciones y
las críticas de los Maestros de la Sospecha”.</p>
<h3 id="rúbrica-oficial-resumida">3. Rúbrica oficial resumida</h3>
<p><strong>3.1 Pregunta 1.1, resumen (1 punto; cinco
tramos)</strong></p>
<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>Tramo</th>
<th>Qué exige</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>“Si la/el alumn@ escribe una explicación más larga que el texto, no
se aceptará como resumen”</td>
</tr>
<tr>
<td>0 - 0,25</td>
<td>No se mencionan ideas importantes o solo secundarias · estructura
inadecuada · comprensión escasa · redacción muy deficiente</td>
</tr>
<tr>
<td>0,25 - 0,5</td>
<td>Algunas ideas importantes, poco claras · estructura básica con
pequeños defectos · comprensión suficiente · gramática y expresión
escasas</td>
</tr>
<tr>
<td>0,5 - 0,75</td>
<td>La mayoría de las ideas claras · comprensión adecuada · gramática
correcta, frases sencillas · falta precisión en algunos detalles</td>
</tr>
<tr>
<td>0,75 - 1</td>
<td>Todas las ideas importantes con claridad · comprensión exacta ·
escritura excelente, frases estructuradas, riqueza sintáctica y
semántica</td>
</tr>
</tbody>
</table>
<p><strong>3.2 Pregunta 1.2, opción A (comparación) u opción B
(explicación) (3 puntos; siete tramos).</strong> El corrector mira cinco
cosas: comprensión, calidad de la comparación (A) o de la explicación de
la frase (B), vocabulario filosófico, estructura argumentativa y
gramática.</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Tramo</th>
<th>Opción A: comparación</th>
<th>Opción B: explicación de la frase</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>Sin comprensión ni comparación · texto sin coherencia, estructura ni
desarrollo</td>
<td>Comprensión y explicación insuficientes · texto sin coherencia,
estructura ni desarrollo</td>
</tr>
<tr>
<td>0 - 0,5</td>
<td>Comprensión muy deficitaria · comparación casi inexistente o muy
errónea · lenguaje filosófico banal</td>
<td>Comprensión muy débil · explicación casi inexistente o muy errónea ·
lenguaje filosófico banal</td>
</tr>
<tr>
<td>0,5 - 1</td>
<td>Comprensión insuficiente, errores importantes · comparación
inadecuada o incoherente · apenas hay estructura</td>
<td>Escasa comprensión, errores importantes · explicación inadecuada o
incoherente · apenas hay estructura</td>
</tr>
<tr>
<td>1 - 1,5</td>
<td>Comprensión parcial · comparación superficial, sin críticas
profundas · vocabulario reducido · estructura débil</td>
<td>Comprensión parcial · explicación superficial, sin desarrollo
argumentativo profundo · vocabulario reducido</td>
</tr>
<tr>
<td>1,5 - 2</td>
<td>Comprensión suficiente pero limitada · comparación parcial y poco
desarrollada · vocabulario inexacto · argumentación básica</td>
<td>Comprensión suficiente pero limitada · explicación parcial y poco
desarrollada · inexactitudes de vocabulario</td>
</tr>
<tr>
<td>2 - 2,5</td>
<td>Buena comprensión · comparación acertada aunque falten matices ·
vocabulario adecuado con pequeños errores · frases simples</td>
<td>Buena comprensión · buena explicación aunque falten matices ·
vocabulario adecuado con pequeños errores · frases simples</td>
</tr>
<tr>
<td>2,5 - 3</td>
<td>Comprensión profunda y precisa · comparación crítica, matizada y
filosóficamente significativa · vocabulario preciso · argumentos
estructurados · excelente gramática</td>
<td>Comprensión profunda y precisa · explicación crítica, matizada y
filosóficamente significativa · vocabulario preciso · argumentación
estructurada · excelente gramática</td>
</tr>
</tbody>
</table>
<p><strong>3.3 Ejercicio 2, reflexión filosófica (3 puntos; rúbrica
analítica, ítem por ítem).</strong> Cada ítem se puntúa por separado:
conviene tenerlos todos.</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Competencia</th>
<th>Ítem que puntúa</th>
<th>Puntos</th>
</tr>
</thead>
<tbody>
<tr>
<td>CE 2. Expresión clara, relevante y adecuada (0 - 0,5)</td>
<td>Empleo del lenguaje claro y preciso</td>
<td>0,15</td>
</tr>
<tr>
<td></td>
<td>Registro formal y apropiado al género filosófico, sin expresiones
vulgares o coloquiales</td>
<td>0,15</td>
</tr>
<tr>
<td></td>
<td>Excelente y preciso uso de terminología filosófica</td>
<td>0,2</td>
</tr>
<tr>
<td>CE 3. Estructura adecuada (0 - 0,5)</td>
<td>Respeto de la estructura indicada: introducción, argumentación,
opinión personal y conclusión</td>
<td>0,1</td>
</tr>
<tr>
<td></td>
<td>Introducción clara: se presenta el tema o pregunta</td>
<td>0,1</td>
</tr>
<tr>
<td></td>
<td>En el desarrollo se identifican claramente los párrafos de
argumentos a favor y en contra; conectores adecuados y coherentes</td>
<td>0,1</td>
</tr>
<tr>
<td></td>
<td>Apartado centrado en la opinión personal, formulado con expresiones
como “en mi opinión, creo que…”</td>
<td>0,1</td>
</tr>
<tr>
<td></td>
<td>Conclusión que actúa como cierre efectivo: sintetiza los argumentos
principales y la opinión personal</td>
<td>0,1</td>
</tr>
<tr>
<td>CE 9. Calidad de la argumentación (0 - 1,5)</td>
<td>Reflexión centrada en la temática propuesta, sin desviaciones ni
contradicciones</td>
<td>0,15</td>
</tr>
<tr>
<td></td>
<td>Argumentos que se corresponden con al menos dos autores/as
relevantes; no se limita a citar nombres o corrientes: argumentos
relevantes y sólidos</td>
<td>0,5</td>
</tr>
<tr>
<td></td>
<td>Esfuerzo evidente por ser crítico y objetivo, sin prejuicios ni
ideas preconcebidas</td>
<td>0,1</td>
</tr>
<tr>
<td></td>
<td>Opinión personal muy bien argumentada, con ejemplos eficaces,
ilustrativos y pertinentes</td>
<td>0,5</td>
</tr>
<tr>
<td></td>
<td>Se vincula la temática con una situación actual con claridad</td>
<td>0,25</td>
</tr>
<tr>
<td>CE 8. Originalidad en el planteamiento de ideas (0 - 0,5)</td>
<td>Título sugestivo y creativo que despierta el interés y anticipa la
reflexión central</td>
<td>0,2</td>
</tr>
<tr>
<td></td>
<td>Integra alguna cita filosófica de forma original, para desarrollar o
cerrar ideas propias</td>
<td>0,1</td>
</tr>
<tr>
<td></td>
<td>Formula preguntas provocadoras que interpelan al lector/a</td>
<td>0,1</td>
</tr>
<tr>
<td></td>
<td>“Resulta claro que se trata de una creación original, sin indicios
de copia o de uso recurrente de herramientas como la inteligencia
artificial”</td>
<td>0,1</td>
</tr>
</tbody>
</table>
<p><strong>3.4 Ejercicio 3, exposición argumentada (3 puntos; siete
tramos)</strong></p>
<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>Tramo</th>
<th>Qué exige</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>Contenido insuficiente · sin referencias, argumentos ni estructura ·
texto banal o incomprensible</td>
</tr>
<tr>
<td>0 - 0,5</td>
<td>El contenido no tiene que ver con el tema · texto desordenado y
contradictorio · sin lenguaje filosófico</td>
</tr>
<tr>
<td>0,5 - 1</td>
<td>Sin referencias importantes · solo opiniones personales sin base
filosófica · sin estructura argumental</td>
</tr>
<tr>
<td>1 - 1,5</td>
<td>Pocas referencias filosóficas, no suficientemente explicadas ·
opiniones sin argumentos · no se desarrolla una postura razonada</td>
</tr>
<tr>
<td>1,5 - 2</td>
<td>Aparecen referencias, pero no se explican bien ni se contextualizan
· argumentos débiles · sin análisis crítico · vocabulario adecuado pero
limitado</td>
</tr>
<tr>
<td>2 - 2,5</td>
<td>Introduce correctamente al autor/a mencionando su corriente · usa
algunos conceptos significativos · referencias adecuadas con algunas
inexactitudes o digresiones · argumentos no siempre acertados · frases
simples</td>
</tr>
<tr>
<td>2,5 - 3</td>
<td>Introduce al autor/a con su corriente, el siglo o época y el título
de su obra principal · conceptos significativos · referencias precisas y
bien relacionadas con el tema · argumentos sólidos y conclusiones
razonadas · ejemplos adecuados · sintaxis compleja y estilo
elaborado</td>
</tr>
</tbody>
</table>
<p>Receta del tramo alto: corriente + siglo o época + obra principal +
conceptos clave + argumentos + ejemplo + conclusión.</p>
<h3 id="penalizaciones">4. Penalizaciones</h3>
<ul>
<li>Ortografía: cada error resta 0,1 puntos, hasta un máximo de 1 punto
sobre el total del examen. Cuentan las tildes.</li>
<li>Resumen (1.1) más largo que el texto: 0 puntos en esa pregunta.</li>
<li>Extensión: en 1.2 el máximo son 250 palabras (no pasarse). En los
ejercicios 2 y 3 la extensión es “aproximada” (200-300 palabras):
pasarse no tiene una penalización fija, pero quita tiempo y precisión;
quedarse muy corto impide llegar a los tramos altos.</li>
<li>Copia o inteligencia artificial: en el ejercicio 2 se pierde el ítem
“creación original” (0,1) si hay “indicios de copia o de uso recurrente”
de IA.</li>
<li>Opciones A/B: responder a las dos o cambiar de opción a mitad de
respuesta no suma puntos y resta tiempo. Elegir al principio y no
cambiar. Un ejercicio en blanco vale 0: escribir siempre algo con la
estructura pedida.</li>
<li>En clase se aplica el mismo criterio de ortografía en toda entrega
evaluable, desde la primera (criterio de calificación del departamento:
hasta un 10 % de la nota “de acuerdo al criterio de corrección de la
PAU”).</li>
</ul>
<h3 id="los-cinco-textos-orientativos-curso-2025-26">5. Los cinco textos
orientativos (curso 2025-26)</h3>
<p>Documento oficial: “Para cada prueba habrá una selección de entre 4 y
8 grupos de textos. Estos textos pueden variar de año en año y deben
servir de material de trabajo orientativo para la prueba, no como
contenido cerrado del examen”.</p>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Autor/a</th>
<th>Obra y parte</th>
<th>Trimestre</th>
<th>Traducción de referencia</th>
</tr>
</thead>
<tbody>
<tr>
<td>Platón</td>
<td><em>La República</em>, libro VII (por acuerdo de coordinación del
28-10-2025: capítulos 1-5, 13 y 14)</td>
<td>1.º</td>
<td>Pabón y Fernández-Galiano</td>
</tr>
<tr>
<td>René Descartes</td>
<td><em>Discurso del método</em>, partes II, III y IV</td>
<td>2.º</td>
<td>García Morente (la del modelo oficial)</td>
</tr>
<tr>
<td>Immanuel Kant</td>
<td><em>Respuesta a la pregunta: ¿Qué es la Ilustración?</em></td>
<td>3.º</td>
<td>Ímaz</td>
</tr>
<tr>
<td>Friedrich Nietzsche</td>
<td><em>Ecce Homo</em>, “Por qué soy un destino”</td>
<td>3.º</td>
<td>Sánchez Pascual</td>
</tr>
<tr>
<td>Simone de Beauvoir</td>
<td><em>El segundo sexo</em>, “Conclusión”</td>
<td>3.º</td>
<td>Martorell</td>
</tr>
</tbody>
</table>
<h3 id="guion-de-tiempos-para-los-90-minutos">6. Guion de tiempos para
los 90 minutos</h3>
<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>Minutos</th>
<th>Tarea</th>
</tr>
</thead>
<tbody>
<tr>
<td>0 - 5</td>
<td>Leer todo el examen. Elegir ya la opción de 1.2 y la del ejercicio
3. Apuntar dos palabras clave por ejercicio</td>
</tr>
<tr>
<td>5 - 20</td>
<td>1.1 Resumen (máximo 15 minutos): problema que plantea el texto,
tesis, ideas que la sostienen. Más corto que el texto</td>
</tr>
<tr>
<td>20 - 40</td>
<td>1.2 A o B: esquema de 2 minutos, redacción, recuento (no más de 250
palabras)</td>
</tr>
<tr>
<td>40 - 62</td>
<td>Ejercicio 2: título, introducción con la pregunta, párrafo a favor y
párrafo en contra con dos autores, opinión personal con ejemplo,
situación actual, cita, pregunta provocadora, conclusión</td>
</tr>
<tr>
<td>62 - 84</td>
<td>Ejercicio 3: autor/a con corriente, época y obra; conceptos clave;
argumentos; ejemplo; conclusión</td>
</tr>
<tr>
<td>84 - 90</td>
<td>Relectura: tildes y ortografía, palabras contadas, nada en
blanco</td>
</tr>
</tbody>
</table>
<p>Si falta tiempo: los ejercicios 2 y 3 valen 3 puntos cada uno; el
resumen vale 1. No dejar ninguno en blanco: la estructura del ejercicio
2 puntúa por sí sola.</p>
<h3 id="diez-errores-frecuentes-y-cómo-evitarlos">7. Diez errores
frecuentes y cómo evitarlos</h3>
<ol type="1">
<li>Resumen más largo que el texto (vale 0). Un párrafo, o dos cortos,
siempre más breve que el original.</li>
<li>Copiar frases del texto en el resumen. Reformular con la plantilla:
“El texto plantea el problema de… La tesis principal es que… Para
sostenerla, en primer lugar afirma que… Además, señala que…”.</li>
<li>En 1.2-B, repetir el resumen en lugar de explicar por qué el autor
afirma la frase. Reconstruir el argumento con los conceptos del sistema
del autor (qué tendría que ser verdad para que la frase lo sea).</li>
<li>En 1.2-A, poner dos posturas una junto a otra sin compararlas.
Seguir el orden: tesis del texto, tesis de la otra posición, punto de
choque, valoración crítica.</li>
<li>Disertación sin autores, o con nombres sueltos (“como dijo Platón”).
Explicar qué defiende cada uno de los dos autores y por qué sirve para
la pregunta: ese ítem vale 0,5.</li>
<li>Olvidar título, apartado “en mi opinión”, situación actual, cita y
pregunta provocadora. Repasar la lista del apartado 3.3 antes de pasar
al ejercicio 3: esos cinco ítems suman 0,75 puntos, y la opinión
personal bien argumentada con ejemplos, otro 0,5.</li>
<li>Convertir la exposición argumentada en una biografía o en “todo lo
que sé del autor”. Responder a la cuestión planteada: corriente, época,
obra, conceptos y argumentos relacionados con la pregunta.</li>
<li>Texto sin estructura ni conectores. Un párrafo por idea; usar
conectores (en primer lugar, sin embargo, por tanto, en
conclusión).</li>
<li>Faltas de ortografía y tildes. Reservar los últimos cinco minutos
para releer: cada falta cuesta 0,1 hasta 1 punto.</li>
<li>Escribir por escribir, o rendirse y dejar en blanco. Mejor pocas
ideas bien explicadas que muchas mal; y, si no se domina el tema,
cumplir al menos la estructura, que también puntúa.</li>
</ol>
<h3 id="lo-que-hay-que-llevar-hecho-antes-de-mayo">8. Lo que hay que
llevar hecho antes de mayo</h3>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Qué</th>
<th>Cuántas</th>
<th>Cuándo (estimado)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Exámenes de evaluación con el formato PAU completo (4 + 3 + 3, 90
minutos)</td>
<td>3</td>
<td>noviembre, febrero y mayo</td>
</tr>
<tr>
<td>Comprensiones de texto (1.1 + 1.2 A o B) entregadas y corregidas con
la rúbrica oficial</td>
<td>5: Platón, Descartes, Kant, Nietzsche, Beauvoir</td>
<td>finales de octubre (Platón), enero (Descartes), marzo (Kant), abril
(Nietzsche y Beauvoir)</td>
</tr>
<tr>
<td>Disertaciones (ejercicio 2) entregadas y corregidas con la rúbrica
analítica</td>
<td>3-4 (al menos una por evaluación)</td>
<td>noviembre, enero-febrero, marzo y, opcional, abril</td>
</tr>
<tr>
<td>Exposiciones argumentadas modelo leídas y comentadas; práctica de
los temas con asterisco</td>
<td>6 del departamento + 4 del bloque A + 4 del bloque C</td>
<td>octubre-noviembre (A), diciembre-febrero (B), marzo-mayo (C)</td>
</tr>
<tr>
<td>Cuestionarios de cada tema (Google Forms)</td>
<td>27</td>
<td>cada semana</td>
</tr>
<tr>
<td>Simulacro completo cronometrado (repaso de mayo)</td>
<td>1</td>
<td>después del tercer examen</td>
</tr>
</tbody>
</table>
<p>Temas prioritarios para el ejercicio 3 (marcados con asterisco en el
temario): 3, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
22, 23, 25, 26 y 27; el 9 también ha aparecido en el modelo oficial.</p>
` },
  "ipc-contrato":{ subject:"ipc", tema:"Pensamiento crítico · Gestión de aula", title:"Contrato de aula", html:`
<p><strong>Materia</strong>: Desarrollo del pensamiento autónomo y
crítico (optativa de 2.º ESO; en el centro, “Pensamiento crítico”). IES
Martín de Bertendona BHI, curso 2026-27. <strong>Sesión/uso</strong>: S1
(Presentación y contrato). Se lee y comenta en clase; se firma en casa y
se devuelve como muy tarde en S3. La hoja firmada se pega en la última
página del cuaderno (diario de aprendizaje); las dos primeras páginas
quedan para la portada del diario y la hoja de evidencias.
<strong>Saberes</strong>: A5 (La comunicación y sus elementos: las
normas en la comunicación y en el diálogo); D1 (El diálogo filosófico:
la argumentación racional y otras formas de argumentar).
<strong>Criterios</strong>: 2.1 y 2.2 (base de todo el curso); informa
también 4.3 (pautas de autorregulación en el diálogo).
<strong>Duración</strong>: 15-20 minutos de S1 (lectura comentada) +
firma en casa. <strong>Material necesario</strong>: una fotocopia de la
“Hoja para el alumnado” por alumno/a (una cara, A4); bolígrafo; una
copia extra por cada alumno/a que se incorpore después de S1.
<strong>Fuente de origen</strong>: creación propia a partir del dosier
de arranque (<code>EDIT\\01_dosier_pensamiento_critico_2eso.md</code>,
secciones 3.3, 3.5 y S1), de la memoria 23-24 del departamento
(“Insistir desde el primer día en la importancia del RESPETO”) y de la
Guía de uso de IA en educación de Euskadi 2025
(<code>DRIVE\\Guia-uso-de-IA-en-educacion_Euskadi.pdf</code>).</p>
<hr />
<h2 id="guion-para-el-profesor">Guion para el profesor</h2>
<h3 id="para-qué-sirve">Para qué sirve</h3>
<p>Es el único documento que ven las familias desde el primer día. Tiene
tres funciones: (1) explicar qué es la materia y que <strong>no hay
examen</strong>, para que el alumnado que “ha caído” en la optativa por
cupo no la viva como una hora perdida; (2) fijar las normas de la
comunidad de investigación <strong>antes</strong> de que empiecen los
diálogos (S4); (3) dejar por escrito cómo se califica, con los mismos
números que irán a la programación 26-27.</p>
<h3 id="cómo-se-presenta-en-s1-15-20-min">Cómo se presenta en S1 (15-20
min)</h3>
<ol type="1">
<li>Después de la actividad “qué es pensar críticamente” (3 ejemplos de
la vida del aula), reparte la hoja. Se lee <strong>en voz alta y por
turnos</strong>: cada apartado lo lee un alumno o alumna distinto. Así
ya se practica el turno de palabra sin nombrarlo.</li>
<li>Para en el apartado 3 (normas). Pide un ejemplo de cada norma:
“¿Cómo se nota que alguien escucha hasta el final?”, “¿Qué es atacar a
la persona en vez de a la idea?”. Pregunta “¿cuál os parece la más
difícil?” y anota la respuesta en la pizarra: se vuelve a leer en S4
cuando el grupo construya sus normas del diálogo.</li>
<li>El apartado 4 (lo que no se hace) no se negocia. La norma sobre IA
no es una decisión del profesor: es la guía oficial de Euskadi para 1.º
y 2.º ESO. Lee en voz alta la norma del móvil que hayas rellenado según
el centro.</li>
<li>En el apartado 5 (nota), pon un ejemplo con números: “Si tu diario
está bien y participas, tienes ya 3 puntos de 10 sin hacer ningún
trabajo. Los otros 7 se hacen en clase; nada depende de deberes de
casa.”</li>
<li>Cierra con el apartado 6 y el plazo: hoja firmada por la familia en
S3. Se pega en la última página del cuaderno. En tu registro anota solo
“firmado sí/no” y la fecha.</li>
</ol>
<h3 id="casos-habituales">Casos habituales</h3>
<ul>
<li><strong>Alumnado que se incorpora después de S1</strong> (en 24-25
se pasó de 11 a 25 alumnos a lo largo del curso): entrega la hoja,
asigna un compañero o compañera que le explique las tres rutinas en 5
minutos y pide la firma para la sesión siguiente.</li>
<li><strong>Familias con poco castellano</strong>: en S1 explica
oralmente los apartados 2 y 5, y di al alumno/a que puede explicarlo en
casa en su lengua. Si el centro dispone de traducciones o de mediación
lingüística, pídelas; no consta en las fuentes.</li>
<li><strong>Sin firma de la familia en S3</strong>: no penaliza la nota.
Se anota y se comunica al tutor/a en la preevaluación de octubre (ver
<code>04_hoja_preevaluacion_tutores.md</code>).</li>
</ul>
<h3 id="notas">Notas</h3>
<ul>
<li>El apartado 5 es el único que depende de decisiones del departamento
(pesos 30/70 y productos de la 1.ª evaluación, sección 3.5 del dosier).
Si el departamento cambia los pesos en la reunión de septiembre, corrige
solo ese apartado antes de fotocopiar.</li>
<li>La norma del móvil se ha dejado con hueco porque no consta en las
fuentes la normativa del centro para 26-27: rellenar antes de
fotocopiar.</li>
<li>El nombre que aparece en boletines (“Pensamiento crítico” /
“Iniciación” / nombre oficial) es la pregunta abierta 8 del dosier; la
hoja usa el oficial y el de uso común.</li>
</ul>
<hr />
<h2 id="hoja-para-el-alumnado">Hoja para el alumnado</h2>
<h1
id="contrato-de-aula-pensamiento-crítico-2.º-eso-curso-2026-27">Contrato
de aula — Pensamiento crítico (2.º ESO) — Curso 2026-27</h1>
<p><strong>Nombre y apellidos</strong>: ______________________________
<strong>Clase</strong>: 2.º ____</p>
<h3 id="qué-es-esta-materia">1. ¿Qué es esta materia?</h3>
<p>Su nombre oficial es <strong>“Desarrollo del pensamiento autónomo y
crítico”</strong>. Todo el mundo la llama “Pensamiento crítico”. Es una
optativa de 2.º ESO con dos sesiones a la semana.</p>
<p>¿Por qué “crítico”? Criticar no es meterse con nadie. La palabra
viene del griego y significa “separar, distinguir”. Pensar críticamente
es <strong>separar las buenas razones de los trucos</strong>: los de un
anuncio, los de un vídeo, los de un amigo que te presiona o los tuyos
propios. ¿Y “autónomo”? Que decides tú, después de pensar, y no el
grupo, el algoritmo ni la costumbre.</p>
<h3 id="cómo-trabajamos">2. ¿Cómo trabajamos?</h3>
<p>Sin libro de texto y <strong>sin examen</strong>. Trabajamos
hablando, escuchando y escribiendo en clase. Tres rutinas fijas:</p>
<ul>
<li><strong>Dilema del día</strong> (una vez a la semana, 10-15
minutos): un caso de la vida cotidiana, votamos, damos razones,
escuchamos, volvemos a votar.</li>
<li><strong>Diario de aprendizaje</strong> (últimos 5-8 minutos de cada
clase): en tu cuaderno, tres preguntas fijas sobre lo que has pensado y
cómo te has sentido.</li>
<li><strong>Noticia quincenal</strong> (20 minutos cada dos semanas):
una noticia de actualidad, resumen y opinión con razones.</li>
</ul>
<p>Lo que vas a producir este curso, todo hecho en clase:</p>
<ul>
<li><strong>1.ª evaluación</strong>: una noticia falsa con tres falacias
escondidas (individual); una exposición en pareja sobre identidades de
grupo; el decálogo de convivencia de la clase (en grupo).</li>
<li><strong>2.ª evaluación</strong>: un cómic sobre una situación de
consumo y la felicidad (individual); un cortometraje (en grupo).</li>
<li><strong>3.ª evaluación</strong>: un relato “¿De dónde venimos?”
(individual); una campaña de carteles contra las exclusiones (en grupo);
un plan “Huella Cero” (en pareja); tu portfolio final con una
presentación oral.</li>
</ul>
<h3 id="normas-de-nuestra-comunidad-de-investigación">3. Normas de
nuestra comunidad de investigación</h3>
<p>En esta clase somos una <strong>comunidad de investigación</strong>:
un grupo que piensa junto. Para que funcione:</p>
<ol type="1">
<li><strong>Escucho hasta el final.</strong> No interrumpo, aunque no
esté de acuerdo.</li>
<li><strong>Pido el turno de palabra</strong> y respeto el de los
demás.</li>
<li><strong>Doy razones.</strong> “Porque sí”, “porque lo dice todo el
mundo” o “porque lo he visto en TikTok” no valen como razón.</li>
<li><strong>Discuto las ideas, no ataco a la persona.</strong> Se puede
decir “no estoy de acuerdo con eso”; no se puede decir “eso es una
tontería” ni reírse de nadie.</li>
<li><strong>Puedo cambiar de opinión.</strong> Decir “me has convencido”
no es perder: es la prueba de que estoy pensando.</li>
<li><strong>Respeto</strong>, desde el primer día y hasta el último: a
cada persona, a su acento y a su forma de hablar castellano, a su
origen, a su cuerpo, a sus creencias y a lo que cuenta de su vida.</li>
</ol>
<h3 id="lo-que-no-se-hace">4. Lo que NO se hace</h3>
<ul>
<li><strong>Usar IA</strong> (ChatGPT o similares) para hacer los
trabajos. La guía oficial de Euskadi no permite chatbots en 1.º y 2.º
ESO. Los trabajos se hacen en clase, a mano o con el ordenador del
centro.</li>
<li><strong>Grabar, fotografiar o subir a redes</strong> a compañeros,
compañeras o al profesor sin permiso.</li>
<li><strong>Burlarse</strong> de lo que alguien dice, de cómo lo dice o
de cómo lo escribe.</li>
<li><strong>Móvil</strong>: según las normas del centro:
______________________________.</li>
</ul>
<h3 id="cómo-se-pone-la-nota">5. ¿Cómo se pone la nota?</h3>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Parte</th>
<th>Peso</th>
<th>Qué incluye</th>
</tr>
</thead>
<tbody>
<tr>
<td>Trabajo diario</td>
<td>30 %</td>
<td>Diario de aprendizaje (20 %) + participación y actitud en los
diálogos (10 %)</td>
</tr>
<tr>
<td>Trabajos hechos en clase</td>
<td>70 %</td>
<td>1.ª evaluación: noticia falsa 25 %, exposición sobre identidades 20
%, decálogo 15 %, fichas y test 10 %</td>
</tr>
</tbody>
</table>
<p>No hay examen. Si faltas a un trabajo en grupo, lo entregas en
<strong>versión individual reducida</strong>. Cada trimestre eliges 2-3
entradas de tu diario para tu portfolio.</p>
<h3 id="firmas">6. Firmas</h3>
<p>He leído este contrato, lo he entendido y me comprometo a
cumplirlo.</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th></th>
<th>Nombre</th>
<th>Firma</th>
</tr>
</thead>
<tbody>
<tr>
<td>Alumno/a</td>
<td>______________________</td>
<td>______________</td>
</tr>
<tr>
<td>Familia (madre, padre o tutor/a legal)</td>
<td>______________________</td>
<td>______________</td>
</tr>
<tr>
<td>Profesor/a</td>
<td>______________________</td>
<td>______________</td>
</tr>
</tbody>
</table>
<p>Bilbao, ____ de ______________ de 2026</p>
` },
  "ipc-diario":{ subject:"ipc", tema:"Pensamiento crítico · Gestión de aula", title:"Diario de aprendizaje", html:`
<p><strong>Materia</strong>: Desarrollo del pensamiento autónomo y
crítico (optativa de 2.º ESO; “Pensamiento crítico”). IES Martín de
Bertendona BHI, curso 2026-27. <strong>Sesión/uso</strong>: se presenta
en S1 y se usa en los últimos 5-8 minutos de <strong>todas</strong> las
sesiones (S1-S68). La hoja “Mis evidencias para el portfolio” se rellena
en la sesión de cierre de cada trimestre (S22, S47, S68).
<strong>Saberes</strong>: transversal a todos los bloques; en particular
A1 (cómo nos sentimos y por qué), A5 (expresión y escucha) y D1 (la
reflexión, la argumentación racional). <strong>Criterios</strong>: 1.2
(dar razones y reflexionar sobre el proceso de razonamiento), 4.1
(reconocer las emociones propias en la comunicación dialógica), 4.3
(identificar pautas de autorregulación). <strong>Duración</strong>: 5-8
minutos por sesión; 15 minutos en S1 para presentar la portada y
escribir la primera entrada juntos. <strong>Material necesario</strong>:
un cuaderno pequeño (tamaño cuartilla o A5) por alumno/a, solo para esta
materia; fotocopia de la portada-instrucciones (1 cara) y de la hoja
“Mis evidencias” (1 cara) para pegar en las dos primeras páginas;
pegamento o grapadora. Versión digital solo si hay ordenador fijo
garantizado (no consta). <strong>Fuente de origen</strong>: creación
propia. Responde a la propuesta de mejora repetida en las memorias
23-24, 24-25 y en la programación 25-26 (“Trabajar un diario de
aprendizaje en un cuaderno, que pueda ser en papel o digital
(portfolio)”) y a la rutina 2 de la sección 3.3 del dosier
(<code>EDIT\\01_dosier_pensamiento_critico_2eso.md</code>), de donde se
toman literalmente las tres preguntas fijas.</p>
<hr />
<h2 id="guion-para-el-profesor">Guion para el profesor</h2>
<h3 id="qué-es-y-para-qué-sirve">Qué es y para qué sirve</h3>
<p>El diario es el hilo del curso: la única evidencia que existe de
<strong>todas</strong> las sesiones, también de las que no acaban en un
producto. Es el instrumento del 20 % (diario) dentro del 30 % de trabajo
diario, y la evidencia principal de los criterios 1.2, 4.1 y 4.3. Al
final de cada trimestre el alumnado elige 2-3 entradas: eso es el
portfolio (23-24 lo llamaba “cuaderno/portfolio de clase”). En junio, el
portfolio final con presentación oral es el último producto del curso
(S63-S68).</p>
<p>No es un resumen de la clase ni un cuaderno de apuntes. Si un alumno
copia lo de la pizarra, no ha hecho la entrada.</p>
<h3 id="rutina-de-cada-sesión">Rutina de cada sesión</h3>
<ol type="1">
<li><strong>Señal fija</strong> a falta de 5-8 minutos: “Diario”.
Siempre la misma palabra, siempre el mismo momento. Las tres preguntas
están escritas en un cartel fijo del aula o en una diapositiva que se
repite (la portada del cuaderno las tiene también).</li>
<li><strong>Silencio de escritura</strong>: 4-5 minutos. El profesor no
explica ni corrige durante ese tiempo; pasea y lee por encima del
hombro. Es el momento de detectar quién no escribe nada y sentarse a su
lado 30 segundos.</li>
<li><strong>Cierre</strong> (1-2 minutos): dos o tres alumnos leen su
“pregunta que me llevo” o su “razón que me ha convencido”. Voluntario.
Sirve para que vean qué es una entrada concreta.</li>
<li><strong>Ausencias</strong>: quien ha faltado escribe en la sesión
siguiente “S__: no he estado” y, si quiere, una línea con lo que le han
contado. No se penaliza la ausencia justificada; se penaliza no anotarla
(ítem 1 de la lista de control).</li>
</ol>
<h3 id="las-primeras-semanas">Las primeras semanas</h3>
<ul>
<li><strong>S1</strong>: repartir cuadernos o pedirlos para S2; pegar la
portada; leerla; escribir la primera entrada <strong>juntos en la
pizarra</strong> con el ejemplo bien hecho de esta hoja. Leer también el
ejemplo flojo y dejar claro que quien lo escribe no es “mal alumno”: el
problema es que esa entrada no le sirve para nada, ni hoy ni cuando
tenga que elegir evidencias para el portfolio.</li>
<li><strong>S2-S4</strong>: dejar las frases de ayuda (apartado “Si te
cuesta empezar”) a la vista. Muchos alumnos tienen el castellano como
segunda lengua: los inicios de frase son la adaptación DUA básica.</li>
<li><strong>Primera revisión</strong> al final de Q1 (S4) con la lista
de control (<code>03_lista_control_quincenal_diario.md</code>): la
mayoría sacará “A medias” en razones. Es normal; se comenta en S5 con
dos ejemplos anónimos de razones concretas.</li>
</ul>
<h3 id="adaptaciones-dua">Adaptaciones (DUA)</h3>
<ul>
<li>Escribir solo las preguntas 1 y 3 durante las dos primeras semanas
si escribir cuesta mucho; la 2 se dicta al profesor en voz baja y él la
anota en el cuaderno con “(dictado)”.</li>
<li>Responder con un dibujo más una frase.</li>
<li>Escribir una palabra en la lengua propia y su traducción al
castellano al lado (vale como “vocabulario del diario”; se anima a
hacerlo, no se penaliza).</li>
<li>Alumnado con ACI o NEE sin apoyo en la optativa: el mínimo exigible
es fecha, sesión y una frase por pregunta; la lista de control se aplica
igual pero el descriptor “Sí” se ajusta a ese mínimo. Anotar la decisión
en el registro del profesor, no en el cuaderno.</li>
</ul>
<h3 id="revisión-y-nota">Revisión y nota</h3>
<p>Cada dos semanas se pasa la lista de control de 4 ítems (Sí / A
medias / No) y se escribe en el cuaderno el código de la quincena y un
comentario de una línea. La regla para pasar a la nota del 20 % está en
<code>03_lista_control_quincenal_diario.md</code>. No se corrige la
ortografía en rojo: se subraya, como mucho, una palabra por entrada y se
escribe bien al margen.</p>
<h3 id="portfolio">Portfolio</h3>
<p>En la sesión de cierre de cada trimestre (S22 en la 1.ª evaluación)
el alumnado relee su diario, marca con una estrella o un adhesivo 2-3
entradas y rellena la hoja “Mis evidencias para el portfolio” (fecha y
sesión de la entrada, y por qué la elige). Los criterios para elegir se
leen en voz alta: “la que mejor explica una razón”, “la que muestra que
has cambiado de opinión”, “la que más te ha costado escribir”. El
profesor firma “visto” en la hoja. En junio esas 6-9 entradas son la
base de la presentación oral del portfolio.</p>
<hr />
<h2 id="hoja-para-el-alumnado">Hoja para el alumnado</h2>
<h1 id="mi-diario-de-aprendizaje-pensamiento-crítico-2.º-eso">Mi diario
de aprendizaje — Pensamiento crítico, 2.º ESO</h1>
<p><strong>Nombre</strong>: ______________________________ <strong>Clase
de origen</strong>: 2.º ____ <strong>Curso</strong>: 2026-27</p>
<h3 id="qué-es">¿Qué es?</h3>
<p>Un cuaderno donde, <strong>al final de cada clase</strong>, escribes
lo que has pensado. No es un resumen de la clase ni hay que copiar la
pizarra. No hay respuestas correctas ni incorrectas. Es tu voz: lo que
te ha convencido, lo que no, cómo te has sentido.</p>
<h3 id="cuándo-se-escribe">¿Cuándo se escribe?</h3>
<p>En los <strong>últimos 5-8 minutos de cada sesión</strong>, cuando el
profesor dice “Diario”. Se escribe en clase, nunca en casa. Si un día
faltas, en la siguiente clase escribes “S__: no he estado” y, si
quieres, una línea con lo que te han contado.</p>
<h3 id="qué-se-valora">¿Qué se valora?</h3>
<p>Cada dos semanas el profesor lee tu diario con esta lista:</p>
<ol type="1">
<li>Entradas <strong>completas y al día</strong> (todas las sesiones,
con fecha y número).</li>
<li><strong>Razones concretas</strong>, no vaguedades (“me ha convencido
lo de Nerea porque…”, no “todo bien”).</li>
<li>Una <strong>reflexión honesta</strong> sobre cómo te has sentido al
hablar o escuchar.</li>
<li><strong>Legibilidad y cuidado</strong>: que se pueda leer y que el
cuaderno esté entero.</li>
</ol>
<p>Lo que <strong>no</strong> se valora: la ortografía perfecta,
escribir mucho, estar de acuerdo con el profesor. El diario vale el 20 %
de la nota de cada evaluación.</p>
<h3 id="cómo-se-convierte-en-portfolio">¿Cómo se convierte en
portfolio?</h3>
<p>Al final de cada trimestre relees tu diario y <strong>eliges 2-3
entradas</strong>: las que mejor muestran cómo piensas o cómo has
cambiado. Las marcas con una estrella y las apuntas en la hoja “Mis
evidencias para el portfolio” (página siguiente). En junio, con esas
entradas, preparas tu presentación final.</p>
<h3 id="cada-entrada-lleva-esto">Cada entrada lleva esto</h3>
<p><strong>Fecha</strong>: ______________ <strong>Sesión n.º</strong>:
____</p>
<p><strong>1. Hoy hemos pensado sobre…</strong></p>
<hr />
<hr />
<p><strong>2. Una razón que me ha convencido / que no…</strong></p>
<hr />
<hr />
<p><strong>3. ¿Cómo me he sentido al hablar o escuchar?</strong></p>
<hr />
<hr />
<p><strong>(Opcional) Una pregunta que me llevo</strong>:
______________________________________</p>
<h3 id="si-te-cuesta-empezar-usa-estas-frases">Si te cuesta empezar, usa
estas frases</h3>
<ul>
<li>Hoy hemos hablado de si… / Hoy la pregunta era…</li>
<li>Me ha convencido que… porque…</li>
<li>No me ha convencido que… porque…</li>
<li>Me he sentido (tranquilo/a, nervioso/a, enfadado/a, aburrido/a,
sorprendido/a) cuando…</li>
<li>Me ha costado escuchar cuando… / Me ha costado hablar porque…</li>
<li>Me pregunto si…</li>
</ul>
<hr />
<h3 id="un-ejemplo-bien-hecho">Un ejemplo bien hecho</h3>
<p><strong>Fecha</strong>: 25 de septiembre. <strong>Sesión
n.º</strong>: 4.</p>
<p><strong>1. Hoy hemos pensado sobre…</strong> si es justo que todo el
grupo tenga la misma nota cuando uno no ha trabajado. Y sobre qué
significa “justo”.</p>
<p><strong>2. Una razón que me ha convencido / que no…</strong> Me ha
convencido lo que ha dicho Aimar: si avisas a la profe no eres un
chivato, porque el que no trabaja te está usando a ti. No me ha
convencido lo de “es que siempre pasa”: que algo pase mucho no lo hace
justo.</p>
<p><strong>3. ¿Cómo me he sentido al hablar o escuchar?</strong> Al
principio no quería hablar porque pensaba que iban a decir que soy una
pelota. Cuando Nerea ha dicho lo mismo que yo, me he atrevido. Escuchar
a Yassin me ha costado porque hablaba muy rápido y yo quería
contestarle.</p>
<p><strong>Una pregunta que me llevo</strong>: ¿se puede ser justo con
alguien que no es justo contigo?</p>
<p><strong>Por qué está bien</strong>: dice de qué se ha hablado con sus
propias palabras; nombra una razón, dice de quién es y <strong>por
qué</strong> le convence; separa lo que le convence de lo que no; cuenta
con sinceridad un miedo y una dificultad al escuchar; la pregunta final
sirve para la próxima clase. No es larga: ocho líneas.</p>
<h3 id="un-ejemplo-flojo">Un ejemplo flojo</h3>
<p><strong>Fecha</strong>: 25/9. <strong>Sesión n.º</strong>: 4.</p>
<p><strong>1. Hoy hemos pensado sobre…</strong> un dilema.</p>
<p><strong>2. Una razón que me ha convencido / que no…</strong> Todas.
Estoy de acuerdo con todos.</p>
<p><strong>3. ¿Cómo me he sentido al hablar o escuchar?</strong>
Bien.</p>
<p><strong>Una pregunta que me llevo</strong>: ninguna.</p>
<p><strong>Por qué está flojo</strong>: “un dilema” no dice cuál;
“todas” no es una razón (si estás de acuerdo con todos, no has escuchado
las diferencias); “bien” no cuenta nada; no sirve para el portfolio
porque dentro de dos meses no recordarás nada de esta clase.
<strong>Cómo arreglarlo en tres pasos</strong>: (1) escribe el tema en
una frase con tus palabras; (2) elige <strong>una</strong> razón que
hayas oído y añade “porque…”; (3) di <strong>cuándo</strong> te has
sentido así (“me he aburrido cuando…”, “me he puesto nervioso
cuando…”).</p>
<hr />
<h2 id="mis-evidencias-para-el-portfolio">Mis evidencias para el
portfolio</h2>
<p><strong>Nombre</strong>: ______________________________</p>
<p>Al final de cada evaluación elige 2-3 entradas de tu diario. Escribe
la fecha y el número de sesión, y explica en una línea por qué la eliges
(por ejemplo: “es la razón que mejor he explicado”, “aquí cambié de
opinión”, “fue la clase en la que más me costó hablar y lo hice”).</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Evaluación</th>
<th>Entrada elegida (fecha y sesión)</th>
<th>Por qué la elijo</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.ª</td>
<td>______________________</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>1.ª</td>
<td>______________________</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>1.ª</td>
<td>______________________</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>2.ª</td>
<td>______________________</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>2.ª</td>
<td>______________________</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>2.ª</td>
<td>______________________</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>3.ª</td>
<td>______________________</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>3.ª</td>
<td>______________________</td>
<td>________________________________________________</td>
</tr>
<tr>
<td>3.ª</td>
<td>______________________</td>
<td>________________________________________________</td>
</tr>
</tbody>
</table>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th></th>
<th>1.ª evaluación</th>
<th>2.ª evaluación</th>
<th>3.ª evaluación</th>
</tr>
</thead>
<tbody>
<tr>
<td>Visto por el profesor (fecha y firma)</td>
<td>______________</td>
<td>______________</td>
<td>______________</td>
</tr>
</tbody>
</table>
` },
  "ipc-eval-inicial":{ subject:"ipc", tema:"Pensamiento crítico · Sesión 2", title:"Evaluación inicial de argumentos", html:`
<p><strong>Materia:</strong> Desarrollo del pensamiento autónomo y
crítico (“Pensamiento crítico”), 2.º ESO, optativa, modelo A
(castellano).</p>
<p><strong>Sesión/uso:</strong> S2, SdA 0 “Arranque y evaluación
inicial” (1.er trimestre; semana del 14 de septiembre según la
estimación del dosier, ajustar al calendario real). Evaluación inicial
de lectura, escritura y razonamiento. <strong>No califica.</strong> Sus
resultados van a la hoja de preevaluación de octubre (tarea 10 del
dosier).</p>
<p><strong>Saberes:</strong> D1 (la pregunta y la reflexión; el diálogo
filosófico: la argumentación racional y otras formas de argumentar).</p>
<p><strong>Criterios:</strong> 1.1 y 1.2 (diagnóstico). Informa también
del punto de partida en 2.3 (estructuras argumentativas correctas e
incorrectas), que se trabaja en S5-S10.</p>
<p><strong>Duración:</strong> 50 minutos (presentación 5 + test 20 +
escrito 15 + recogida 2 + puesta en común de dos ítems 8).</p>
<p><strong>Material necesario:</strong> fotocopia de la “Hoja para el
alumnado” (2-3 caras por alumno, según la maquetación; llevar 5 copias
de reserva); bolígrafo; una copia de la “Hoja para el profesor” (clave,
guía de corrección y tabla de registro); pizarra o rotulador. No hace
falta pantalla, ordenador ni móvil.</p>
<p><strong>Fuente de origen:</strong> el test adapta
OBS-de-argumentos-correctos.md (C:\\000 NAGUSIA
OBS\\01_proyectos-de-argumentos-correctos.md; nota de chat del
10-10-2024). Todos los enunciados han sido reescritos con situaciones de
un adolescente de Bilbao; los ítems 1, 9 y 10 se han rehecho por
completo (ver “Notas sobre la fuente”). El escrito breve, el guion de
sesión, la clave comentada, la guía de corrección y la tabla de registro
son creación propia.</p>
<hr />
<h2 id="guion-para-el-profesor">Guion para el profesor</h2>
<h3 id="qué-busca-esta-sesión-y-qué-no">Qué busca esta sesión (y qué
no)</h3>
<ul>
<li><strong>Busca</strong> una foto de salida de cada alumno en tres
cosas: si lee un enunciado corto en castellano y lo entiende, si escribe
seis líneas con sentido y si distingue por intuición una buena razón de
un truco. Con eso se rellena la tabla de registro y se preparan las
conversaciones con tutores de la semana del 5 de octubre.</li>
<li><strong>No busca</strong> poner nota ni “suspender a nadie el
segundo día”. Se dice en voz alta al empezar y se repite al acabar:
<strong>hoy no hay nota</strong>. Un grupo que llega de cuatro clases
distintas, en parte con castellano como segunda lengua, necesita oírlo
claro.</li>
<li><strong>No es</strong> todavía la clase de falacias: no hace falta
explicar nombres (ad hominem, ad populum…). En la puesta en común se
usan palabras corrientes: “razón”, “truco”, “hablar de la persona en vez
del tema”.</li>
</ul>
<h3 id="antes-de-entrar">Antes de entrar</h3>
<ol type="1">
<li>Fotocopiar solo la sección <strong>“Hoja para el alumnado”</strong>
(dos caras: test y escrito). La clave y la tabla de registro se quedan
con el profesor.</li>
<li>Tener escrita en la pizarra la frase del día: <strong>“Una buena
razón es la que, si es verdad, apoya lo que queremos defender.”</strong>
Se tapa o se deja sin comentar hasta la puesta en común.</li>
<li>Si en S1 se repartió el diario de aprendizaje, hoy la entrada del
diario se sustituye por el escrito breve. Si sobran dos minutos, una
sola línea en el diario: “Una cosa que me ha sorprendido del test”.</li>
</ol>
<h3 id="minuto-a-minuto-50-min">Minuto a minuto (50 min)</h3>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Tiempo</th>
<th>Fase</th>
<th>Qué hace el profesor</th>
<th>Qué hace el alumnado</th>
</tr>
</thead>
<tbody>
<tr>
<td>0-5</td>
<td>Presentación</td>
<td>Explica que es una “foto de salida”, que no hay nota y que se hace
en silencio y de forma individual. Lee en voz alta el vocabulario de la
hoja y el ítem 1 completo como modelo.</td>
<td>Escribe nombre, clase de origen y fecha. Escucha.</td>
</tr>
<tr>
<td>5-25</td>
<td>Test (10 ítems)</td>
<td>Pasea, responde dudas de vocabulario (no de contenido), anota en la
columna “Lectura” quién pide que le lean o le expliquen un enunciado. A
los 15 min avisa: “Cinco minutos”.</td>
<td>Rodea una letra por ítem y la copia en la tabla de respuestas. Quien
acaba, pasa a la parte 2 sin esperar.</td>
</tr>
<tr>
<td>25-40</td>
<td>Escrito breve</td>
<td>Lee la consigna en voz alta y da un ejemplo de “ejemplo de tu vida”
que no sea del instituto (para no condicionar): “por qué te dejaron o no
te dejaron ir a un sitio”. Recuerda: 6-8 líneas, frases cortas.</td>
<td>Escribe “¿Qué es una buena razón? Explícalo con un ejemplo de tu
vida”. Quien termina, marca la casilla “¿Cómo te ha resultado?”.</td>
</tr>
<tr>
<td>40-42</td>
<td>Recogida</td>
<td>Recoge las hojas. Comprueba que llevan nombre.</td>
<td>Entrega.</td>
</tr>
<tr>
<td>42-50</td>
<td>Puesta en común</td>
<td>Comenta los ítems 1 y 4 (guion abajo). Cierra con la frase de la
pizarra y con “hoy no hay nota; en esta clase vamos a aprender a
distinguir razones de trucos”.</td>
<td>Levanta la mano por opción elegida, da razones, escucha.</td>
</tr>
</tbody>
</table>
<p>Si el grupo es lento leyendo, se cortan los ítems 9 y 10 (“quien no
llegue, no pasa nada”) antes que recortar el escrito: el escrito da más
información que dos ítems. En ese caso, en la tabla de registro se anota
“test sobre 8” y la lectura de aciertos se hace en proporción (6-8 alto,
4-5 medio, 0-3 bajo).</p>
<h3 id="puesta-en-común-de-dos-ítems-8-minutos">Puesta en común de dos
ítems (8 minutos)</h3>
<p><strong>Ítem 1 (deducción).</strong> Preguntar: “¿Quién ha puesto B?
¿Quién ha puesto D? ¿Por qué?”. Lo normal es que salgan las dos. Idea
clave para explicar: “Cuando el enunciado dice <em>imagina que estas
frases son verdad</em>, no discutimos si en la vida real estudiar
garantiza aprobar. Jugamos con esa regla. Si la regla es <em>estudia →
aprueba</em> y Ane no ha aprobado, solo hay una explicación posible
dentro de la regla: no ha estudiado. A y C son explicaciones de la vida
real, no salen de las frases. D es demasiado prudente: sí se puede
deducir algo”. Dibujar en la pizarra una flecha “Estudia → Aprueba” y
tachar “Aprueba”: ¿qué queda? Remate en 20 segundos, sin resolverlo: “Y
si os dijeran <em>Ane ha aprobado</em>, ¿podríais asegurar que ha
estudiado?”. Dejar que respondan; la respuesta es que no, y es
exactamente el ítem 10. No hace falta explicarlo hoy; se retoma en
S5.</p>
<p><strong>Ítem 4 (atacar a la persona).</strong> Preguntar: “¿Leire ha
dicho algo sobre TikTok y el sueño?”. No: ha hablado de Unai. Idea
clave: “Responder a un argumento es hablar del argumento. Que Unai no
cumpla lo que dice puede ser un problema de Unai, pero no hace falsa su
frase”. Preguntar: “¿Cómo podría responder bien Leire?” (pedirle
pruebas, poner un contraejemplo, decir que cinco horas es una
exageración o que depende de la hora a la que se use el móvil). Anunciar
que en S4 la clase va a pactar sus normas de diálogo y que una de ellas
será precisamente “no atacar a la persona”.</p>
<p>Si sobra tiempo, el ítem 9 (la pulsera de la suerte) funciona bien en
voz alta: “¿Qué otra cosa puede explicar tres victorias seguidas?”.</p>
<h3 id="adaptaciones-dua-y-castellano-como-segunda-lengua">Adaptaciones
(DUA y castellano como segunda lengua)</h3>
<ul>
<li>El vocabulario de la hoja (argumento, razón, conclusión, deducir,
demostrar, seguro/probable) se lee en voz alta antes de empezar. Se
permite preguntar cualquier palabra durante el test; se anota quién lo
necesita (columna “Lectura”), sin comentario delante del grupo.</li>
<li>Quien no pueda escribir seis líneas puede responder la parte 2
oralmente al profesor en los últimos minutos o en S3; se registra igual
con la guía de tres niveles.</li>
<li>Alumnado con NEE o con castellano inicial: se le puede leer cada
ítem al oído y dejar que responda señalando. Lo importante es que la
hoja no quede en blanco por no entender la consigna.</li>
<li>Nadie se lleva el test a casa: es diagnóstico de lo que hace solo en
el aula.</li>
</ul>
<h3 id="ausencias">Ausencias</h3>
<p>Quien falte a S2 hace el test en los primeros 20 minutos de S3
(mientras el resto trabaja con las tarjetas de preguntas) y el escrito
breve en los últimos 10 minutos de S3 o de S4, en el hueco del diario;
si no viene a S3, en la primera sesión a la que venga. No se envía a
casa. Si a lo largo del trimestre se incorpora alumnado nuevo (en 24-25
entraron 14 alumnos después de empezar), se le pasa la misma hoja: sirve
de punto de partida para hablar con su tutor o tutora.</p>
<h3 id="después-de-la-sesión-30-40-minutos-de-corrección">Después de la
sesión (30-40 minutos de corrección)</h3>
<ol type="1">
<li>Corregir el test con la clave (1 minuto por hoja: solo
aciertos).</li>
<li>Leer el escrito y asignar un nivel 0-3 con la guía.</li>
<li>Rellenar la tabla de registro: test, lectura, escritura,
razonamiento, observación de aula y si conviene hablar con el tutor o
tutora.</li>
<li>Guardar las hojas en la carpeta del grupo. Devolverlas al alumnado
en S22 (cierre del trimestre) para que comparen con lo que saben
entonces: es una evidencia sencilla para el portfolio.</li>
<li>Llevar la tabla a la preevaluación de octubre. Solo se comparte de
palabra lo que sea útil al tutor; no se escriben datos sensibles fuera
de Alexia.</li>
</ol>
<h3 id="notas-sobre-la-fuente">Notas sobre la fuente</h3>
<ul>
<li>El original es un test de 10 preguntas generado en un chat
(10-10-2024) y guardado en el vault. <strong>No traía clave de
respuestas</strong>; se ha construido aquí.</li>
<li><strong>Ítem 1 original</strong>: “Si Juan estudia, aprobará el
examen. Juan no aprobó. ¿Qué podemos deducir?”, con opciones “estudió
mucho / no estudió / se distrajo / no podemos deducir nada”. La
deducción válida es “no estudió” (si estudiar garantiza aprobar y no
aprobó, no estudió), pero el enunciado no aclaraba que había que dar las
dos frases por verdaderas, y “se distrajo” confundía. Reescrito con la
fórmula “imagina que estas dos frases son verdad” y distractores
nítidos.</li>
<li><strong>Ítem 10 original</strong>: “Todos los estudiantes que
aprobaron estudiaron. Si estudio, también aprobaré”, con dos opciones
“falaz” defendibles (“estudiar no garantiza aprobar” y “depende de otros
factores”). El error que mide es confundir “quien aprueba ha estudiado”
con “quien estudia aprueba” (afirmación del consecuente). Reescrito para
que la única respuesta correcta nombre ese error y para que el
distractor D contradiga la frase de partida.</li>
<li><strong>Ítems 2-7 originales</strong>: cada uno tenía dos opciones
“falaz porque X / falaz porque Y” ambas defendibles (por ejemplo, ítem
2: “lo que cree la mayoría no es necesariamente verdad” y “no hay
pruebas suficientes”). Se ha dejado una sola opción correcta y se ha
sustituido la segunda por un distractor claramente erróneo (una opinión
sobre el tema o una razón que acepta el truco).</li>
<li><strong>Ítem 9 original</strong>: “A Juan le va mal en matemáticas
porque no es inteligente”, con dos opciones “falaz” defendibles (“no
prueba que la inteligencia sea la causa” y “es una suposición sin
pruebas”). Además, ponía en boca del test un juicio sobre la
inteligencia de un alumno. Se ha sustituido por un caso de causa falsa
(la pulsera de la suerte), que mide el mismo error (atribuir una causa
sin pruebas) con una sola respuesta correcta.</li>
<li><strong>Ítem 8 original</strong>: dos opciones “correcto”
defendibles (“es un consejo saludable” y “está respaldado por la
ciencia”). Ahora hay una sola respuesta correcta y el enunciado incluye
las pruebas en las que se apoya.</li>
<li>Se han cambiado todos los nombres y situaciones (Juan, María,
extraterrestres, aire, videojuegos, frutas y verduras) por situaciones
de adolescentes de Bilbao: Athletic, Bilbao Basket, TikTok, wifi,
pulsera de la suerte, horas de sueño, exámenes de Matemáticas y Lengua.
El fantasma del ítem 6 se mantiene, pero en el sótano del
instituto.</li>
</ul>
<hr />
<h2 id="hoja-para-el-alumnado">Hoja para el alumnado</h2>
<h1 id="buena-razón-o-truco">¿Buena razón o truco?</h1>
<p><strong>Nombre y apellidos:</strong> ______________________________
<strong>Clase de origen:</strong> 2.º ____ <strong>Fecha:</strong>
____________</p>
<p><strong>Esto no es un examen y no tiene nota.</strong> Sirve para que
tu profesor sepa cómo piensas al empezar el curso. Trabaja en silencio y
sin copiar: si copias, la foto sale de otra persona.</p>
<h3 id="palabras-que-vas-a-necesitar">Palabras que vas a necesitar</h3>
<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th>Palabra</th>
<th>Qué significa aquí</th>
</tr>
</thead>
<tbody>
<tr>
<td>Argumento</td>
<td>Una o varias razones que se dan para defender una idea.</td>
</tr>
<tr>
<td>Razón</td>
<td>Lo que se dice para apoyar una idea. Suele ir después de
“porque”.</td>
</tr>
<tr>
<td>Conclusión</td>
<td>La idea que se quiere defender.</td>
</tr>
<tr>
<td>Deducir</td>
<td>Sacar una conclusión segura a partir de unas frases.</td>
</tr>
<tr>
<td>Demostrar</td>
<td>Dar pruebas de que algo es verdad.</td>
</tr>
<tr>
<td>Seguro / probable</td>
<td>Seguro: no puede ser de otra manera. Probable: puede ser, pero no es
seguro.</td>
</tr>
</tbody>
</table>
<h3 id="parte-1.-test-20-minutos">Parte 1. Test (20 minutos)</h3>
<p>Lee cada situación. Rodea la letra de la respuesta que te parezca
correcta. <strong>Solo hay una respuesta correcta en cada
pregunta.</strong> Si no entiendes una palabra, levanta la mano.</p>
<p><strong>1.</strong> Imagina que estas dos frases son verdad: (1) “Si
Ane estudia, aprueba el examen de Matemáticas.” (2) “Ane no ha aprobado
el examen.” ¿Qué podemos deducir con total seguridad?</p>
<ul>
<li><ol type="A">
<li>Ane ha estudiado, pero se ha puesto nerviosa.</li>
</ol></li>
<li><ol start="2" type="A">
<li>Ane no ha estudiado.</li>
</ol></li>
<li><ol start="3" type="A">
<li>El examen era demasiado difícil.</li>
</ol></li>
<li><ol start="4" type="A">
<li>Con esas dos frases no se puede deducir nada seguro.</li>
</ol></li>
</ul>
<p><strong>2.</strong> “En mi clase casi todo el mundo dice que el
Athletic va a ganar la Liga este año. Así que seguro que la gana.” ¿Es
un buen argumento?</p>
<ul>
<li><ol type="A">
<li>Sí: si lo dice casi toda la clase, por algo será.</li>
</ol></li>
<li><ol start="2" type="A">
<li>Sí, porque en Bilbao la gente sabe mucho de fútbol.</li>
</ol></li>
<li><ol start="3" type="A">
<li>No, porque el Athletic no va a ganar nada este año.</li>
</ol></li>
<li><ol start="4" type="A">
<li>No: que muchas personas crean algo no lo convierte en verdad.</li>
</ol></li>
</ul>
<p><strong>3.</strong> Kevin dice: “El baloncesto es el mejor deporte
porque no es fútbol.” ¿Qué te parece?</p>
<ul>
<li><ol type="A">
<li>Es un mal argumento: no da ninguna razón a favor del baloncesto;
solo dice lo que el baloncesto no es.</li>
</ol></li>
<li><ol start="2" type="A">
<li>Es un buen argumento, porque el fútbol y el baloncesto son deportes
muy distintos.</li>
</ol></li>
<li><ol start="3" type="A">
<li>Es un buen argumento, porque a mucha gente le gusta más el
baloncesto.</li>
</ol></li>
<li><ol start="4" type="A">
<li>Es un mal argumento, porque el fútbol es mejor que el
baloncesto.</li>
</ol></li>
</ul>
<p><strong>4.</strong> Unai dice: “Pasar cinco horas al día en TikTok es
malo para dormir bien.” Su hermana Leire le contesta: “Tú no puedes
decir eso: tú también te pasas la tarde con el móvil.” ¿Qué te parece la
respuesta de Leire?</p>
<ul>
<li><ol type="A">
<li>Es una buena respuesta, porque Unai no es coherente.</li>
</ol></li>
<li><ol start="2" type="A">
<li>Es una buena respuesta, porque solo puede opinar quien da
ejemplo.</li>
</ol></li>
<li><ol start="3" type="A">
<li>Es una mala respuesta: habla de Unai en vez de responder a lo que ha
dicho. Que Unai use mucho el móvil no hace falsa su frase.</li>
</ol></li>
<li><ol start="4" type="A">
<li>Es una mala respuesta, porque TikTok no es malo para dormir.</li>
</ol></li>
</ul>
<p><strong>5.</strong> “Maddi tiene que ser buenísima jugando al
baloncesto, porque su hermano mayor juega en el Bilbao Basket.” ¿Qué te
parece?</p>
<ul>
<li><ol type="A">
<li>Es un buen argumento, porque el talento se hereda en la
familia.</li>
</ol></li>
<li><ol start="2" type="A">
<li>Es un buen argumento, porque los hermanos suelen entrenar
juntos.</li>
</ol></li>
<li><ol start="3" type="A">
<li>Es un mal argumento: lo que sabe hacer una persona no nos dice lo
que sabe hacer otra, aunque sean hermanos.</li>
</ol></li>
<li><ol start="4" type="A">
<li>Es un mal argumento, porque el Bilbao Basket no es un equipo tan
bueno.</li>
</ol></li>
</ul>
<p><strong>6.</strong> Ibai dice: “En el sótano del instituto hay un
fantasma. Si no me crees, demuéstrame que no existe. Como no puedes,
tengo razón.” ¿Qué te parece?</p>
<ul>
<li><ol type="A">
<li>Ibai tiene razón: si nadie puede demostrar lo contrario, es que
existe.</li>
</ol></li>
<li><ol start="2" type="A">
<li>Ibai se equivoca: quien afirma algo tan raro es quien tiene que dar
pruebas. Que los demás no puedan demostrar lo contrario no prueba
nada.</li>
</ol></li>
<li><ol start="3" type="A">
<li>Ibai tiene razón, porque siempre queda una posibilidad de que
exista.</li>
</ol></li>
<li><ol start="4" type="A">
<li>Ibai se equivoca, porque los fantasmas solo salen en las
películas.</li>
</ol></li>
</ul>
<p><strong>7.</strong> Dayana dice: “El wifi no se ve y existe. Por lo
tanto, todo lo que no se ve existe.” ¿Qué te parece?</p>
<ul>
<li><ol type="A">
<li>Es un buen razonamiento, porque es verdad que el wifi no se ve y
existe.</li>
</ol></li>
<li><ol start="2" type="A">
<li>Es un buen razonamiento, porque hay muchas cosas invisibles que
existen.</li>
</ol></li>
<li><ol start="3" type="A">
<li>Es un mal razonamiento, porque el wifi sí se ve: sale el icono en el
móvil.</li>
</ol></li>
<li><ol start="4" type="A">
<li>Es un mal razonamiento: que UNA cosa invisible exista no significa
que TODAS las cosas invisibles existan.</li>
</ol></li>
</ul>
<p><strong>8.</strong> Samir dice: “Si duermes al menos ocho horas, te
concentras mejor en clase. Lo dicen los médicos y, además, lo he
comprobado: los días que duermo poco no me entero de nada.” ¿Es un buen
argumento?</p>
<ul>
<li><ol type="A">
<li>Sí: da razones que tienen que ver con la conclusión y se apoya en
pruebas (los médicos y su propia experiencia).</li>
</ol></li>
<li><ol start="2" type="A">
<li>Sí, porque Samir saca muy buenas notas.</li>
</ol></li>
<li><ol start="3" type="A">
<li>No, porque dormir no tiene nada que ver con concentrarse.</li>
</ol></li>
<li><ol start="4" type="A">
<li>No, porque cada persona es distinta y no se puede decir nada general
sobre el sueño.</li>
</ol></li>
</ul>
<p><strong>9.</strong> “Desde que Nerea lleva una pulsera de la suerte,
su equipo ha ganado tres partidos seguidos. Está claro: la pulsera hace
ganar al equipo.” ¿Qué te parece?</p>
<ul>
<li><ol type="A">
<li>Es un buen argumento, porque tres partidos seguidos no pueden ser
casualidad.</li>
</ol></li>
<li><ol start="2" type="A">
<li>Es un mal argumento: que una cosa pase después de otra no demuestra
que la primera sea la causa de la segunda.</li>
</ol></li>
<li><ol start="3" type="A">
<li>Es un buen argumento, porque muchos deportistas famosos usan
amuletos.</li>
</ol></li>
<li><ol start="4" type="A">
<li>Es un mal argumento, porque solo funcionaría si todo el equipo
llevara pulsera.</li>
</ol></li>
</ul>
<p><strong>10.</strong> En la clase de Markel, en el último examen de
Lengua, todos los que aprobaron habían estudiado. Antes del siguiente
examen, Markel piensa: “Yo he estudiado, así que seguro que apruebo.”
¿Qué te parece?</p>
<ul>
<li><ol type="A">
<li>Markel razona bien: si todos los que aprobaron habían estudiado,
estudiar asegura aprobar.</li>
</ol></li>
<li><ol start="2" type="A">
<li>Markel razona bien, porque estudiar es lo que más ayuda a
aprobar.</li>
</ol></li>
<li><ol start="3" type="A">
<li>Markel razona mal: la frase dice que quien aprobó había estudiado,
no que todo el que estudia apruebe. Se puede estudiar y suspender.</li>
</ol></li>
<li><ol start="4" type="A">
<li>Markel razona mal, porque en Lengua da igual estudiar o no
estudiar.</li>
</ol></li>
</ul>
<p><strong>Copia aquí tus respuestas</strong> (una letra por
casilla):</p>
<table>
<thead>
<tr>
<th>Pregunta</th>
<th>1</th>
<th>2</th>
<th>3</th>
<th>4</th>
<th>5</th>
<th>6</th>
<th>7</th>
<th>8</th>
<th>9</th>
<th>10</th>
</tr>
</thead>
<tbody>
<tr>
<td>Respuesta</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="parte-2.-escrito-breve-15-minutos">Parte 2. Escrito breve (15
minutos)</h3>
<p><strong>¿Qué es una buena razón? Explícalo con un ejemplo de tu
vida.</strong></p>
<p>Escribe entre 6 y 8 líneas. Frases cortas. Piensa en una vez en la
que alguien te dio (o tú diste) una razón para hacer o no hacer algo: en
casa, con amigos, en el equipo, en el instituto, en el barrio… Di por
qué esa razón era buena (o por qué no lo era).</p>
<table>
<colgroup>
<col style="width: 2%" />
<col style="width: 97%" />
</colgroup>
<thead>
<tr>
<th>Línea</th>
<th>Escribe aquí</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td></td>
</tr>
<tr>
<td>2</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td></td>
</tr>
<tr>
<td>4</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td></td>
</tr>
<tr>
<td>6</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td></td>
</tr>
<tr>
<td>8</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>¿Cómo te ha resultado esta hoja?</strong> Marca una: [ ]
Fácil [ ] Normal [ ] Difícil [ ] No he entendido algunas palabras</p>
<hr />
<h2 id="hoja-para-el-profesor-clave-corrección-y-registro">Hoja para el
profesor: clave, corrección y registro</h2>
<p><strong>Recordatorio: esta hoja no califica.</strong> Los datos se
usan para conocer al grupo, ajustar S3-S10 y preparar la preevaluación
de octubre. No se devuelve con nota ni se lee en voz alta ningún
resultado individual.</p>
<h3 id="clave-del-test">Clave del test</h3>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Ítem</th>
<th>Respuesta</th>
<th>Qué mide</th>
<th>Idea clave (para explicarlo en una frase)</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>B</td>
<td>Validez deductiva (si A entonces B; no B; luego no A)</td>
<td>Si damos las dos frases por verdaderas, lo único que encaja es que
Ane no ha estudiado.</td>
</tr>
<tr>
<td>2</td>
<td>D</td>
<td>Apelación a la mayoría (ad populum)</td>
<td>Que muchos crean algo no lo hace verdad.</td>
</tr>
<tr>
<td>3</td>
<td>A</td>
<td>Falta de razón</td>
<td>Decir lo que algo no es no es dar una razón a su favor.</td>
</tr>
<tr>
<td>4</td>
<td>C</td>
<td>Ataque a la persona (ad hominem, “tú también”)</td>
<td>Hablar de quien habla no responde a lo que ha dicho.</td>
</tr>
<tr>
<td>5</td>
<td>C</td>
<td>Razón irrelevante: asociación por parentesco (lo del hermano no
prueba nada de Maddi)</td>
<td>Lo que hace una persona no dice lo que hace otra, aunque sean
familia.</td>
</tr>
<tr>
<td>6</td>
<td>B</td>
<td>Carga de la prueba</td>
<td>Quien afirma algo extraordinario es quien debe demostrarlo.</td>
</tr>
<tr>
<td>7</td>
<td>D</td>
<td>Generalización precipitada (de un caso a todos)</td>
<td>Un ejemplo no prueba una regla para todos los casos.</td>
</tr>
<tr>
<td>8</td>
<td>A</td>
<td>Causa-efecto razonable (argumento correcto)</td>
<td>Razón relacionada con la conclusión y apoyada en pruebas.</td>
</tr>
<tr>
<td>9</td>
<td>B</td>
<td>Causa falsa (después de, luego a causa de)</td>
<td>Que algo pase después de otra cosa no prueba que sea su causa.</td>
</tr>
<tr>
<td>10</td>
<td>C</td>
<td>Afirmación del consecuente (confundir la regla con su
recíproca)</td>
<td>“Quien aprueba estudió” no es “quien estudia aprueba”.</td>
</tr>
</tbody>
</table>
<h3
id="por-qué-fallan-los-distractores-para-responder-dudas-en-la-puesta-en-común">Por
qué fallan los distractores (para responder dudas en la puesta en
común)</h3>
<ul>
<li><strong>Ítem 1.</strong> A y C son explicaciones posibles en la vida
real, pero no salen de las dos frases; D es exceso de prudencia: con “si
estudia, aprueba” y “no aprobó” sí se deduce algo. Error esperable: D
(muchos alumnos desconfían de deducir “algo malo” de Ane).</li>
<li><strong>Ítem 2.</strong> A y B aceptan que la cantidad de gente o su
fama de entendidos convierte una creencia en verdad; C es una opinión
sobre el tema (si el Athletic ganará o no), no sobre el argumento:
aunque el Athletic ganase al final, el argumento seguiría siendo
malo.</li>
<li><strong>Ítem 3.</strong> B y C dan razones que no aparecen en lo que
dice Kevin; D es una opinión sobre deportes, no sobre el argumento.</li>
<li><strong>Ítem 4.</strong> A y B convierten la incoherencia de Unai en
una prueba contra su frase; D discute el tema (si TikTok quita sueño) en
vez de valorar la respuesta de Leire.</li>
<li><strong>Ítem 5.</strong> A y B inventan razones (“se hereda”,
“entrenan juntos”) que no garantizan nada; D es una opinión sobre el
equipo. Error esperable: B, porque suena razonable; conviene señalar que
“tiene que ser buenísima” es una conclusión demasiado fuerte.</li>
<li><strong>Ítem 6.</strong> A y C aceptan que no poder demostrar lo
contrario vale como prueba; D niega la conclusión con una opinión, sin
decir qué falla en el argumento.</li>
<li><strong>Ítem 7.</strong> A y B confunden “hay casos” con “todos los
casos”; C se fija en un detalle (el icono) y no en el salto de uno a
todos.</li>
<li><strong>Ítem 8.</strong> B valora a Samir, no su razón; C afirma
algo falso (dormir sí influye en la concentración); D es el “todo
depende” que anula cualquier afirmación general. Error esperable: D, muy
frecuente a esta edad; conviene aclarar que “cada persona es distinta”
no impide que haya reglas generales razonables.</li>
<li><strong>Ítem 9.</strong> A y C aceptan la causa mágica (la
coincidencia y los amuletos famosos); D acepta que la pulsera funciona y
solo discute la dosis.</li>
<li><strong>Ítem 10.</strong> A y B creen que estudiar asegura aprobar
(B lo suaviza, pero sigue diciendo que Markel razona bien cuando dice
“seguro”); D es una opinión falsa que además choca con la frase de
partida (si todos los que aprobaron habían estudiado, estudiar no “da
igual”). Error esperable: B.</li>
</ul>
<h3 id="cómo-leer-los-aciertos-orientativo-no-es-una-nota">Cómo leer los
aciertos (orientativo, no es una nota)</h3>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Aciertos</th>
<th>Lectura provisional</th>
<th>Qué hacer</th>
</tr>
</thead>
<tbody>
<tr>
<td>8-10</td>
<td>Distingue razones de trucos por intuición; el problema, si lo hay,
será de expresión o de actitud.</td>
<td>Darle papel activo en los diálogos de S4-S7; pedirle que explique
sus razones a otros.</td>
</tr>
<tr>
<td>5-7</td>
<td>Nivel medio esperable en 2.º ESO.</td>
<td>Seguir la secuencia normal (S5 “dar razones”, S6-S7 falacias).</td>
</tr>
<tr>
<td>0-4</td>
<td>Puede ser razonamiento, pero muchas veces es lectura: comprobar la
columna “Lectura” y la casilla “No he entendido algunas palabras”.</td>
<td>Si es lectura: leer en voz alta las fichas de S5-S8 y ofrecer la
plantilla con huecos de la noticia falsa (S9). Si es razonamiento:
trabajar los ítems 1, 4 y 9 en pareja en S5.</td>
</tr>
</tbody>
</table>
<p>Tres cosas más que dice el test sin mirar los aciertos: quién deja
ítems en blanco (velocidad de lectura o inseguridad), quién elige
siempre la opción más larga (lee poco y busca la que “parece completa”)
y quién no copia las letras en la tabla (atención a las consignas).</p>
<h3 id="guía-de-corrección-del-escrito-qué-es-una-buena-razón">Guía de
corrección del escrito “¿Qué es una buena razón?”</h3>
<p>Se asigna <strong>un solo nivel</strong> al contenido. La forma
(letra, ortografía, sintaxis) se anota aparte en la columna “Escritura”
de la tabla de registro.</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>Nivel</th>
<th>Qué hace el alumno</th>
<th>Ejemplo de lo que suele escribir</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>No responde, copia la pregunta o escribe algo sin relación.</td>
<td>“Una buena razón es una razón buena.”</td>
</tr>
<tr>
<td>1</td>
<td><strong>Nombra una razón concreta</strong> de su vida, aunque no
explique por qué es buena.</td>
<td>“Mi madre no me dejó ir al parque porque era tarde.”</td>
</tr>
<tr>
<td>2</td>
<td><strong>La relaciona con la conclusión</strong>: explica que la
razón apoya o sirve para lo que se quiere defender; razón y conclusión
están claras y unidas.</td>
<td>“Era buena razón porque a las diez ya no hay nadie y es peligroso,
así que tiene sentido que no me dejara.”</td>
</tr>
<tr>
<td>3</td>
<td><strong>Distingue razón de opinión o gusto</strong>: dice que una
buena razón no es “porque yo lo digo” o “porque me apetece”, que tiene
que ser verdad o poder comprobarse y que otra persona podría aceptarla;
o compara una buena razón con una mala.</td>
<td>“Si me dice <em>porque lo digo yo</em> no es una razón, es una
orden. <em>Porque es tarde y es peligroso</em> sí, porque lo puede
comprobar cualquiera.”</td>
</tr>
</tbody>
</table>
<p>Indicaciones:</p>
<ul>
<li>Si el alumno da un ejemplo y una explicación, pero el ejemplo no es
“de su vida” (habla de un futbolista, de una serie), no se baja el
nivel: lo importante es la idea de razón.</li>
<li>Un escrito de dos líneas puede ser nivel 2 si la idea está; un
escrito de ocho líneas puede ser nivel 1 si solo cuenta una anécdota. Se
valora la idea, no la longitud.</li>
<li>Quien responde oralmente (adaptación) se registra con el mismo nivel
y la nota “oral” en observaciones.</li>
<li>Frases hechas por el alumnado que apuntan a nivel 3 y conviene
reconocer en la puesta en común de S5: “una razón que se puede
comprobar”, “que no sea porque sí”, “que convenza a alguien que no
piensa como tú”.</li>
</ul>
<h3 id="escalas-de-la-tabla-de-registro">Escalas de la tabla de
registro</h3>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Columna</th>
<th>1</th>
<th>2</th>
<th>3</th>
</tr>
</thead>
<tbody>
<tr>
<td>Lectura</td>
<td>Ha necesitado que le lean o le expliquen varios enunciados; deja
ítems en blanco.</td>
<td>Ha preguntado alguna palabra; ha terminado con el tiempo justo.</td>
<td>Ha leído solo y a tiempo.</td>
</tr>
<tr>
<td>Escritura</td>
<td>Frases sueltas o errores que dificultan entender el texto; menos de
3 líneas.</td>
<td>Se entiende con errores de ortografía o de construcción; 3-5
líneas.</td>
<td>Claro y ordenado; 6 líneas o más.</td>
</tr>
<tr>
<td>Razonamiento</td>
<td>0-4 aciertos o escrito de nivel 0-1.</td>
<td>5-7 aciertos o escrito de nivel 2.</td>
<td>8-10 aciertos o escrito de nivel 3.</td>
</tr>
<tr>
<td>Observación</td>
<td>Anotar en palabras: se bloquea / no termina / copia / pregunta mucho
/ acaba muy rápido / atento / pide ayuda con naturalidad.</td>
<td>(sin escala)</td>
<td>(sin escala)</td>
</tr>
</tbody>
</table>
<p>Si el test y el escrito dan niveles distintos de “Razonamiento” (por
ejemplo, 8 aciertos pero escrito de nivel 1), se anota el más alto de
los dos y se apunta la diferencia en “Observación”: suele indicar que la
dificultad está en escribir, no en pensar.</p>
<p>Si “Razonamiento” sale 1 y “Lectura” también sale 1, el problema
probable es de lengua, no de pensamiento: anotarlo así para el tutor o
tutora.</p>
<h3
id="tabla-de-registro-diagnóstico-se-lleva-a-la-preevaluación-de-octubre">Tabla
de registro diagnóstico (se lleva a la preevaluación de octubre)</h3>
<p>Rellenar a mano. La hoja se guarda en la carpeta del profesor; los
nombres no se copian a ningún otro documento ni herramienta.</p>
<table style="width:100%;">
<colgroup>
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
</colgroup>
<thead>
<tr>
<th>N.º</th>
<th>Alumno/a</th>
<th>Clase</th>
<th>Test /10</th>
<th>Lect.</th>
<th>Escr.</th>
<th>Razon.</th>
<th>Escrito (0-3)</th>
<th>Observación de aula</th>
<th>Tutor/a</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>2</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>3</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>4</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>5</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>6</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>7</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>8</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>9</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>10</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>11</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>12</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>13</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>14</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>15</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>16</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>17</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>18</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>19</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>20</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>21</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>22</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>23</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>24</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>25</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>26</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>27</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>28</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>Columna “Tutor/a”: marcar X si conviene comentar algo en la
preevaluación (lectura muy baja, hoja en blanco, escrito que revela una
situación que preocupa, alumno que no ha venido a S2 ni a S3).</p>
<p><strong>Resumen del grupo para la preevaluación</strong> (rellenar
después de corregir): alumnos con Lectura 1: ____ ; con Escritura 1:
____ ; con Razonamiento 1: ____ ; media de aciertos del grupo: ____ /10;
ítems más fallados: ____ ; alumnos que no han hecho la prueba: ____
.</p>
` },
  "ipc-lista-dialogo":{ subject:"ipc", tema:"Pensamiento crítico · Rúbricas", title:"Lista de control del diálogo filosófico", html:`
<p><strong>Materia:</strong> Desarrollo del pensamiento autónomo y
crítico (“Pensamiento crítico”), optativa de 2.º ESO. IES Martín de
Bertendona BHI, curso 2026-27.</p>
<p><strong>Sesión/uso:</strong> Se presenta en la S4 (normas del diálogo
y primer dilema). Se usa en todos los “dilemas del día” (rutina semanal
desde la S4), en los diálogos evaluados (S17 y S21 en el primer
trimestre) y en los debates de los trimestres siguientes. La hoja de
autoevaluación se usa tras un diálogo, dentro del tiempo del diario de
aprendizaje (S12 y S22 como mínimo).</p>
<p><strong>Saberes:</strong> A5 (La comunicación y sus elementos:
expresión y escucha. Comunicación verbal y no verbal. Elementos que
dificultan y favorecen la comunicación. Las normas en la comunicación y
en el diálogo). D1 (El diálogo filosófico: la argumentación racional y
otras formas de argumentar). De forma secundaria, A1 (la gestión
emocional).</p>
<p><strong>Criterios:</strong> 2.1, 2.2 y 4.2 (principales). De forma
secundaria, 1.1 (dimensión 4: identificar problemas filosóficos) y 2.3
(dimensión 2: estructuras argumentativas correctas).</p>
<p><strong>Duración:</strong> Presentación en la S4: 10 minutos.
Registro del profesor: durante el diálogo (10-15 minutos en el dilema
del día; 35 minutos en un diálogo evaluado). Autoevaluación: 5
minutos.</p>
<p><strong>Material necesario:</strong> Hoja 1 (versión del alumnado),
proyectada en la S4 y fotocopiada una vez por alumno para pegarla en la
contraportada del diario de aprendizaje. Hoja 2 (registro del profesor),
una fotocopia por sesión de diálogo. Hoja 3 (autoevaluación),
fotocopiada o copiada a mano en el diario.</p>
<p><strong>Fuente de origen:</strong> Traducción y adaptación del “2.
ERANSKINA. Elkarrizketa filosofikoa (BAI / ERDIZKA / EZ)” de la
programación de Pentsamendu Kritikoa eta Autonomoa de 3.º DBH 2024-25
(IES Gabriel Aresti; el dosier la cita como “Arruti 2024-25”):
<code>C:\\Users\\mikag\\Desktop\\ORDEZKAPENAK\\typstak_orokor\\000 versiones ltfh etc\\PKA\\DBH 3 PENTSAMENDU KRITIKOA ETA AUTONOMOA PROGRAMAZIOA 2024-25.docx</code>
(copia en texto consultada:
<code>...\\scratchpad\\txt_ltfh\\PKA\\DBH 3 PENTSAMENDU KRITIKOA ETA AUTONOMOA PROGRAMAZIOA 2024-25.docx.txt</code>,
líneas 709-751). La correspondencia con criterios, la conversión a nota,
la hoja de registro con rotación y la autoevaluación son creación
propia, coherentes con el dosier de arranque (secciones 3.3 y 3.5).</p>
<hr />
<h2 id="guion-para-el-profesor">Guion para el profesor</h2>
<h3 id="qué-es-y-para-qué-sirve">1. Qué es y para qué sirve</h3>
<p>La lista de control es el instrumento de observación de la “comunidad
de investigación” (metodología dialógica de Filosofía para Niños y
Niñas, la que el departamento declara querer en su SdA 23-24). Tiene
<strong>4 dimensiones y 15 ítems</strong>, y una escala de tres valores:
<strong>Sí / A medias / No</strong> (en el original, BAI / ERDIZKA /
EZ).</p>
<p>Tiene un doble uso:</p>
<ol type="1">
<li><strong>Para el alumnado</strong>: hace visible qué significa
dialogar bien. No se califica la opinión que cada uno defiende, sino
cómo dialoga. Por eso se presenta en la S4, el mismo día en que la clase
construye sus normas de diálogo, y se pega en el diario.</li>
<li><strong>Para el profesor</strong>: es el registro rápido de la
participación en los diálogos. Alimenta el 10 % de “participación en
diálogos y actitud” del 30 % de trabajo diario y los criterios 2.1, 2.2
y 4.2 (ver apartado 5).</li>
</ol>
<p>Relación con las cinco normas que el dosier prevé construir en la S4
(escucha, turno, dar razones, no atacar a la persona, poder cambiar de
opinión):</p>
<table>
<thead>
<tr>
<th>Norma construida en la S4</th>
<th>Dónde se observa en la lista</th>
</tr>
</thead>
<tbody>
<tr>
<td>Escuchar</td>
<td>Dimensión 1, ítems 1.2, 1.3 y 1.5</td>
</tr>
<tr>
<td>Respetar el turno</td>
<td>Dimensión 1, ítem 1.1</td>
</tr>
<tr>
<td>Dar razones</td>
<td>Dimensión 2, ítems 2.1, 2.2 y 2.3</td>
</tr>
<tr>
<td>No atacar a la persona</td>
<td>Dimensión 1, ítem 1.4</td>
</tr>
<tr>
<td>Poder cambiar de opinión</td>
<td>Dimensión 4, ítem 4.4</td>
</tr>
</tbody>
</table>
<h3 id="traducción-de-la-lista-original-texto-de-referencia">2.
Traducción de la lista original (texto de referencia)</h3>
<p>Traducción completa del anexo. La numeración del original vuelve a
empezar en cada dimensión (1-5, 1-3, 1-3, 1-4); aquí se numera 1.1 a 4.4
para poder citar cada ítem sin ambigüedad.</p>
<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr>
<th>N.º</th>
<th>Traducción</th>
<th>Original en euskera</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1</strong></td>
<td><strong>Actitud</strong></td>
<td>Jarrera</td>
</tr>
<tr>
<td>1.1</td>
<td>Respeto de los turnos de palabra</td>
<td>Hitz txandekiko errespetua</td>
</tr>
<tr>
<td>1.2</td>
<td>Escucha activa (capacidad de reformular lo que se ha dicho)</td>
<td>Entzule aktiboa (esandakoak birformulatzeko gaitasuna)</td>
</tr>
<tr>
<td>1.3</td>
<td>Mirar a la cara a quienes participan en el diálogo y dirigirse al
grupo al hablar</td>
<td>Solasaldian parte hartzen dutenei aurpegira begiratzea eta hitz
egitean taldeari zuzentzea</td>
</tr>
<tr>
<td>1.4</td>
<td>Cortesía con los demás</td>
<td>Besteekiko adeitasuna</td>
</tr>
<tr>
<td>1.5</td>
<td>Lenguaje corporal</td>
<td>Gorputz lengoaia</td>
</tr>
<tr>
<td><strong>2</strong></td>
<td><strong>Calidad de los argumentos</strong></td>
<td>Argudioen kalitatea</td>
</tr>
<tr>
<td>2.1</td>
<td>Coherencia (deducir lógicamente las conclusiones de las
premisas)</td>
<td>Koherentzia (ondorioak logikoki ondorioztatzea premisetatik)</td>
</tr>
<tr>
<td>2.2</td>
<td>Capacidad de apoyar los argumentos (uso de ejemplos y fuentes)</td>
<td>Argudioak sostengatzeko gaitasuna (adibideen eta iturrien
erabilpena)</td>
</tr>
<tr>
<td>2.3</td>
<td>Pertinencia de los argumentos respecto al tema (no alejarse del
tema; que las aportaciones ayuden a profundizar en él)</td>
<td>Argudioak gaiarekin bat etortzea (gaitik ez urruntzea, ekarpenak
gaian sakontzen laguntzea)</td>
</tr>
<tr>
<td><strong>3</strong></td>
<td><strong>Capacidad de participación / expresión</strong></td>
<td>Parte hartzeko gaitasuna / adierazpena</td>
</tr>
<tr>
<td>3.1</td>
<td>Calidad del lenguaje (conceptos precisos; precisión y corrección en
castellano)</td>
<td>Hizkuntzaren kalitatea (kontzeptu zehatzak, euskara maila)</td>
</tr>
<tr>
<td>3.2</td>
<td>Exponer el propio pensamiento con claridad</td>
<td>Norbere pentsamendua argitasunez azaltzea</td>
</tr>
<tr>
<td>3.3</td>
<td>Tono de voz</td>
<td>Ahots tonoa</td>
</tr>
<tr>
<td><strong>4</strong></td>
<td><strong>Mirada sobre el problema filosófico</strong></td>
<td>Arazo filosofikoarekiko ikuskera</td>
</tr>
<tr>
<td>4.1</td>
<td>Identificar los problemas filosóficos del diálogo</td>
<td>Solasaldiaren arazo filosofikoak identifikatzea</td>
</tr>
<tr>
<td>4.2</td>
<td>Problematizar y sacar a la luz problemas nuevos</td>
<td>Problematizatzea eta arazo berriak azaleratzea</td>
</tr>
<tr>
<td>4.3</td>
<td>Intentar resolver los problemas y sacar conclusiones</td>
<td>Arazoak konpontzen ahalegintzea eta ondorioak ateratzea</td>
</tr>
<tr>
<td>4.4</td>
<td>Capacidad de cambiar de opinión ante los problemas</td>
<td>Arazoen aurrean iritzia aldatzeko gaitasuna</td>
</tr>
</tbody>
</table>
<p>Escala: <strong>Sí</strong> (BAI) / <strong>A medias</strong>
(ERDIZKA) / <strong>No</strong> (EZ).</p>
<p>Única adaptación de contenido: el ítem 3.1 del original valora el
“nivel de euskera” porque la materia se impartía en modelo D. En el
Bertendona (modelo A, con muchos alumnos que tienen el castellano como
segunda lengua) se sustituye por “precisión y corrección en castellano”,
entendida como usar la palabra adecuada y preguntar cuando falta, no
como acento ni fluidez. Esta dimensión nunca debe penalizar a quien está
aprendiendo la lengua: ver el apartado 4.</p>
<h3 id="cómo-presentarla-en-la-s4-10-minutos">3. Cómo presentarla en la
S4 (10 minutos)</h3>
<ol type="1">
<li><strong>Proyectar la Hoja 1</strong> justo después de que la clase
haya escrito sus normas de diálogo en la pizarra. Leer en voz alta las
cuatro dimensiones y pedir, para cada una, un ejemplo concreto del
alumnado: “¿Cómo se nota que alguien escucha de verdad?”, “¿Qué es una
razón?”, “¿Qué es el problema de fondo?”.</li>
<li><strong>Conectar con sus normas</strong>: mostrar que cada norma que
han escrito está en la lista (tabla del apartado 1). Si han propuesto
alguna norma que no está (por ejemplo, “no usar el móvil”), añadirla a
mano en el ítem 1.5.</li>
<li><strong>Explicar la escala y el uso</strong>: “Cada vez que
dialogamos, yo anoto a 6-8 personas con Sí / A medias / No en las cuatro
dimensiones. No anoto qué opináis, sino cómo dialogáis. A lo largo del
trimestre todo el mundo queda anotado al menos tres veces. Nadie sabe
qué día le toca: así todos dialogamos siempre”.</li>
<li><strong>Ensayo de dos minutos</strong>: el profesor dice tres frases
y la clase señala qué ítem cumplen o incumplen. Sugerencias: “Eso es una
tontería, Ander” (1.4: No). “Yo creo que A porque, como ha dicho Nora,
si nadie lo cuenta nadie lo arregla” (1.2 y 2.1: Sí). “Es que a mí una
vez me pasó una cosa en el patio…” y sigue tres minutos con la anécdota
(2.3: A medias).</li>
<li><strong>Pegar la hoja</strong> en la contraportada del diario de
aprendizaje. Se vuelve a ella en cada autoevaluación.</li>
</ol>
<h3
id="cómo-registrar-en-el-dilema-del-día-6-8-alumnos-por-sesión-rotando">4.
Cómo registrar en el dilema del día (6-8 alumnos por sesión,
rotando)</h3>
<p><strong>Por qué rotar.</strong> Un dilema del día dura 10-15 minutos;
no es posible observar a 25 alumnos en cuatro dimensiones. Se registran
<strong>6-8 alumnos por sesión</strong> con la Hoja 2. Con un dilema
semanal, cada alumno queda registrado dos veces en el trimestre por esta
vía y una tercera en el diálogo evaluado (S17). Los alumnos saben que se
registra, pero no saben a quién le toca ese día.</p>
<p><strong>Plan de rotación del primer trimestre</strong> (orientativo;
ajustar a las sesiones reales y a la lista definitiva del grupo):</p>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Turno</th>
<th>Alumnos (n.º de lista)</th>
<th>Dilemas del día en que se registra</th>
<th>Diálogo evaluado (S17, 35 min)</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>1-7</td>
<td>S4 (tarjeta 1) y S12 (tarjeta 3)</td>
<td>Primera mitad (A y B dialogan; C y D observan)</td>
</tr>
<tr>
<td>B</td>
<td>8-13</td>
<td>S5 (tarjeta 2) y S14 (tarjeta 6)</td>
<td>Primera mitad</td>
</tr>
<tr>
<td>C</td>
<td>14-19</td>
<td>S7 (tarjeta 4) y S16 (tarjeta 9)</td>
<td>Segunda mitad (C y D dialogan; A y B observan)</td>
</tr>
<tr>
<td>D</td>
<td>20-25</td>
<td>S11 (tarjeta 7) y S21 (dilema del algoritmo)</td>
<td>Segunda mitad</td>
</tr>
</tbody>
</table>
<p>Las tarjetas 5, 8 y 10 no se usan en el primer trimestre: el dosier
las fija para la S34 (amistad, 2.º trimestre). Ver el calendario de
<code>ipc\\fichas\\dilema_del_dia_10_tarjetas.md</code>.</p>
<p>En la S17 (Confederación Galáctica, del cuadernillo Hedatze) la
técnica de la “pecera” permite registrar a todo el grupo: la mitad
dialoga en círculo interior 15 minutos mientras la otra mitad observa
desde fuera con la Hoja 1 y anota a un compañero asignado (coevaluación;
sirve al criterio 4.2); luego se cambian. Los 5 minutos finales son para
el “¿alguien ha cambiado de opinión?”.</p>
<p><strong>Qué se anota.</strong> Se anota <strong>una letra por
dimensión</strong>, no por ítem. Los 15 ítems son la guía para decidir
la letra. Códigos: <strong>S</strong> = Sí (2 puntos),
<strong>A</strong> = A medias (1 punto), <strong>N</strong> = No (0
puntos), <strong>—</strong> = sin evidencia (el alumno no ha intervenido
y no se le ha podido observar en esa dimensión).</p>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Dimensión</th>
<th>S (Sí)</th>
<th>A (A medias)</th>
<th>N (No)</th>
</tr>
</thead>
<tbody>
<tr>
<td>1 Actitud</td>
<td>Respeta los turnos, escucha (sabría reformular), mira al grupo, es
cortés y mantiene el cuerpo atento durante todo el diálogo</td>
<td>Casi siempre; alguna interrupción o distracción, o escucha pero no
sabría repetir lo dicho</td>
<td>Interrumpe, se distrae (móvil, charla), habla solo al profesor, se
burla o gesticula contra otros</td>
</tr>
<tr>
<td>2 Calidad de los argumentos</td>
<td>Da razones ligadas a su conclusión, con algún ejemplo o dato, y
sobre el tema</td>
<td>Da una razón, pero débil, sin ejemplo o algo alejada del tema</td>
<td>Solo opinión sin razón (“porque sí”, “porque lo digo yo”) o razones
que no tienen que ver con el tema</td>
</tr>
<tr>
<td>3 Participación / expresión</td>
<td>Interviene, se le entiende a la primera, con palabras precisas y un
tono adecuado</td>
<td>Interviene, pero cuesta entenderle, usa palabras vagas (“eso”, “la
cosa”) o el tono es muy bajo o muy alto</td>
<td>No interviene (a partir de su segundo registro; la primera vez se
anota “—”, ver reglas prácticas), o interviene y no se le entiende</td>
</tr>
<tr>
<td>4 Mirada sobre el problema</td>
<td>Nombra el problema de fondo, plantea alguna pregunta nueva o un “¿y
si…?”, intenta una conclusión y cambia de opinión si hay una buena razón
(o explica por qué no)</td>
<td>Sigue el problema, pero no lo formula; llega a alguna conclusión; no
aporta nada nuevo</td>
<td>Se queda en la anécdota, no ve el problema, se aferra a su opinión
sin escuchar razones</td>
</tr>
</tbody>
</table>
<p><strong>Reglas prácticas.</strong></p>
<ul>
<li>El moderador da prioridad en la ronda de razones a los alumnos del
turno del día (“Iker, tú has votado A: ¿por qué?”), sin decir que es su
turno.</li>
<li>Si un alumno del turno no interviene, se anota la dimensión 1 (se
puede observar aunque no hable) y “—” en las dimensiones 2, 3 y 4. La
primera vez, “—” no cuenta. Si se repite en su segundo registro, “—”
pasa a contar como N en la dimensión 3 (participación) y se habla con él
o ella aparte: a menudo la causa es el idioma o la vergüenza, no la
falta de interés.</li>
<li>Quien falta a la sesión de su turno se registra en el siguiente
dilema, hasta reunir al menos dos registros por trimestre.</li>
<li>Se anota <strong>durante</strong> el diálogo, con letras, sin
frases. La columna “Observación” es para una palabra (“reformuló a
Sofía”, “móvil”, “cambió de opinión”). Cinco minutos después de la
sesión se completa lo que falte; no dejarlo para el día siguiente.</li>
<li>El registro no se enseña en el momento, pero cualquier alumno puede
pedir ver sus letras acumuladas y el profesor las comenta con él en un
minuto. Es la retroalimentación que exige el criterio 2.1 (“de forma
autónoma, aunque supervisada”).</li>
</ul>
<h3
id="de-la-lista-a-la-nota-correspondencia-con-los-criterios-y-con-el-10">5.
De la lista a la nota: correspondencia con los criterios y con el 10
%</h3>
<p><strong>Con el 30 % de trabajo diario.</strong> El dosier (3.5)
reparte el 30 % de trabajo diario en diario de aprendizaje (20 puntos,
lista de control quincenal) y participación en diálogos y actitud (10
puntos, <strong>esta</strong> lista de control). Cálculo por
evaluación:</p>
<ol type="1">
<li>Cada registro suma 0-8 puntos (cuatro dimensiones × 0-2). Las
dimensiones con “—” no cuentan: se hace la media de las dimensiones
anotadas y se multiplica por 4.</li>
<li>Nota de participación y actitud = media de los registros del
trimestre × 1,25 (así 8 puntos = 10). Ejemplo: registros de 5, 6 y 7 →
media 6 → 7,5 sobre 10 → 0,75 puntos en la nota de la evaluación.</li>
<li>Nivel para la tabla de la programación (rúbrica de 4 niveles, como
los demás instrumentos del dosier):</li>
</ol>
<table>
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Media de los registros (0-8)</th>
<th>Nivel</th>
<th>Nota sobre 10</th>
<th>Escala de la programación de Aresti (para comparar)</th>
</tr>
</thead>
<tbody>
<tr>
<td>7,2-8</td>
<td>4</td>
<td>9-10</td>
<td>Bikaina</td>
</tr>
<tr>
<td>5,6-7,1</td>
<td>3</td>
<td>7-8,9</td>
<td>Aurreratua</td>
</tr>
<tr>
<td>4-5,5</td>
<td>2</td>
<td>5-6,9</td>
<td>Egokia</td>
</tr>
<tr>
<td>0-3,9</td>
<td>1</td>
<td>0-4,9</td>
<td>Hasierakoa</td>
</tr>
</tbody>
</table>
<p>(Los cortes de la primera columna son los que resultan de multiplicar
por 1,25: 4 × 1,25 = 5; 5,6 × 1,25 = 7; 7,2 × 1,25 = 9. Así la nota y el
nivel siempre coinciden.)</p>
<p><strong>Con los criterios de evaluación.</strong> En la tabla de
pesos del dosier, cada criterio se califica con la media de sus
evidencias. Esta lista aporta:</p>
<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th>Dimensión de la lista</th>
<th>Ítems</th>
<th>Criterio</th>
<th>Peso del criterio en la evaluación (dosier 3.5)</th>
<th>Qué evidencia</th>
</tr>
</thead>
<tbody>
<tr>
<td>1 Actitud</td>
<td>1.1 a 1.5</td>
<td><strong>2.1</strong></td>
<td>9 % (0,9 puntos)</td>
<td>“conductas activas de participación crítica basadas en el respeto,
la empatía y la escucha profunda”</td>
</tr>
<tr>
<td>1 Actitud (escucha y lectura de los demás)</td>
<td>1.2, 1.3, 1.4, 1.5</td>
<td><strong>4.2</strong></td>
<td>8 % (0,8 puntos)</td>
<td>“identificar las emociones y sentimientos ajenos… en la comunicación
dialógica”; se completa con la pregunta 1 de la autoevaluación y con la
coevaluación en pecera de la S17</td>
</tr>
<tr>
<td>2 Calidad de los argumentos</td>
<td>2.1, 2.2, 2.3</td>
<td><strong>2.2</strong></td>
<td>8 % (0,8 puntos)</td>
<td>“formular argumentos”</td>
</tr>
<tr>
<td>3 Participación / expresión</td>
<td>3.1, 3.2, 3.3</td>
<td><strong>2.2</strong></td>
<td>(mismo criterio)</td>
<td>“desarrollar la capacidad de expresarlos”</td>
</tr>
<tr>
<td>4 Mirada sobre el problema</td>
<td>4.1 a 4.4</td>
<td><strong>2.2</strong></td>
<td>(mismo criterio)</td>
<td>“recoger los de los demás, comprenderlos e integrarlos en la
construcción de los argumentos propios” (ítem 4.4)</td>
</tr>
<tr>
<td>4 Mirada sobre el problema</td>
<td>4.1, 4.2</td>
<td>1.1 (secundario)</td>
<td>8 % (0,8 puntos)</td>
<td>“identificar, elaborar y reelaborar preguntas filosóficas”;
evidencia complementaria a las preguntas del diario (S3)</td>
</tr>
<tr>
<td>2 Calidad de los argumentos</td>
<td>2.1</td>
<td>2.3 (secundario)</td>
<td>8 % (0,8 puntos)</td>
<td>“estructuras argumentativas correctas e incorrectas”; evidencia
complementaria al test y a la noticia falsa</td>
</tr>
</tbody>
</table>
<p>Cómo pasar las letras a nota de criterio: nota del criterio 2.1 =
media de la dimensión 1 (0-2) × 5; nota del criterio 2.2 = media de las
dimensiones 2, 3 y 4 (0-2) × 5; nota del criterio 4.2 = media de la
dimensión 1 × 5, promediada con la coevaluación de la pecera y con las
demás evidencias del criterio (role-playing, “¿por qué callamos?”). Los
criterios 1.1 y 2.3 solo se apoyan en la lista si hay al menos tres
registros; si no, se califican con sus instrumentos principales.</p>
<p><strong>Ausencias.</strong> No hay “versión individual reducida” de
un diálogo: quien falta se registra en las sesiones siguientes. Si un
alumno llega a la evaluación con un solo registro (incorporación tardía,
absentismo), se le da un diálogo breve en la sesión de cierre (S22), con
el profesor y dos compañeros, sobre una tarjeta que no haya dialogado
por ausencia (o, si las ha dialogado todas, sobre la tarjeta 10), y se
anota.</p>
<h3 id="notas-sobre-la-fuente-y-la-adaptación">6. Notas sobre la fuente
y la adaptación</h3>
<ol type="1">
<li>El original no da descriptores para BAI / ERDIZKA / EZ: cada
profesor decidía a ojo. Se han añadido los descriptores de la tabla del
apartado 4 para que la letra sea la misma en septiembre y en junio. Son
creación propia.</li>
<li>El original no dice cómo se convierte la lista en nota. En la
programación 2024-25 de Aresti la participación valía un 20 % con su
propia rúbrica (nivel de participación 1 punto + profundidad y
originalidad 1 punto) y esta lista era un anexo sin peso. La conversión
del apartado 5 es creación propia y sigue el dosier (10 puntos de
participación y actitud; 25 % por competencia).</li>
<li>La numeración del original reinicia en cada dimensión; se ha
cambiado a 1.1-4.4.</li>
<li>Ítem 3.1: “euskara maila” sustituido por “precisión y corrección en
castellano” (ver apartado 2). Es una adaptación, no una traducción.</li>
<li>Ítem 1.5, “Gorputz lengoaia”, es solo una etiqueta en el original;
en la versión del alumnado se concreta (postura, móvil, gestos) para que
sea observable.</li>
<li>Errata tipográfica del original en el ítem 2.2, “( adibideen”, sin
consecuencias.</li>
<li>Nombres de alumnos: ninguna hoja lleva nombres reales de las
fuentes. Los nombres de los ejemplos (Ander, Nora, Iker, Sofía) son
inventados; si coinciden con alumnos del grupo, cambiarlos.</li>
</ol>
<hr />
<h2 id="hoja-para-el-alumnado">Hoja para el alumnado</h2>
<h3 id="hoja-1.-cómo-dialogamos-en-esta-clase-versión-del-alumnado">Hoja
1. ¿Cómo dialogamos en esta clase? (versión del alumnado)</h3>
<p><strong>Nombre:</strong> ____________________ <strong>Grupo:</strong>
2.º ____</p>
<p>En esta clase dialogamos para pensar mejor, no para ganar. No se
califica lo que opinas: se mira <strong>cómo</strong> dialogas. Estas
son las 15 cosas que se miran. Léelas, pégalas en tu diario y vuelve a
ellas después de cada diálogo.</p>
<p>Las cinco normas de nuestra comunidad de investigación (las
completamos entre todos en la S4): <strong>escuchar, respetar el turno,
dar razones, no atacar a la persona, poder cambiar de
opinión.</strong></p>
<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr>
<th>N.º</th>
<th>En un buen diálogo yo…</th>
<th>Sí</th>
<th>A medias</th>
<th>No</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1</strong></td>
<td><strong>ACTITUD</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>1.1</td>
<td>Respeto el turno de palabra: no interrumpo y pido la palabra para
hablar.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>1.2</td>
<td>Escucho de verdad: puedo repetir con mis palabras lo que ha dicho
otra persona.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>1.3</td>
<td>Miro a quien habla y, cuando hablo, me dirijo a toda la clase, no
solo al profesor.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>1.4</td>
<td>Soy amable: no me río de nadie, no insulto, no pongo caras.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>1.5</td>
<td>Mi cuerpo también escucha: postura atenta, sin móvil, sin dar la
espalda, sin gestos de burla.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>2</strong></td>
<td><strong>CALIDAD DE LOS ARGUMENTOS</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>2.1</td>
<td>Mis conclusiones salen de mis razones: digo “porque” y la razón
tiene que ver con lo que concluyo.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>2.2</td>
<td>Apoyo lo que digo con ejemplos, datos o cosas que hemos leído o
visto.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>2.3</td>
<td>Hablo del tema: no me voy por las ramas, y lo que digo ayuda a
profundizar.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>3</strong></td>
<td><strong>PARTICIPACIÓN Y EXPRESIÓN</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>3.1</td>
<td>Uso palabras precisas y correctas en castellano: llamo a las cosas
por su nombre y pregunto si no sé una palabra.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>3.2</td>
<td>Explico lo que pienso con claridad: se me entiende a la
primera.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>3.3</td>
<td>Hablo con un tono de voz adecuado: se me oye, sin gritar.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>4</strong></td>
<td><strong>MIRADA SOBRE EL PROBLEMA</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>4.1</td>
<td>Sé decir cuál es el problema de fondo (la pregunta filosófica) que
hay detrás del dilema.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>4.2</td>
<td>Encuentro problemas nuevos: hago preguntas que nadie había planteado
o propongo un “¿y si…?”.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>4.3</td>
<td>Intento resolver el problema y sacar una conclusión, aunque sea
provisional.</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>4.4</td>
<td>Soy capaz de cambiar de opinión si me dan una buena razón, y lo digo
en voz alta.</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p>Frases que ayudan: “Yo elegiría A porque…”, “No estoy de acuerdo con
lo que ha dicho ____ porque…”, “Estoy de acuerdo con ____ y además…”,
“Si he entendido bien, ____ dice que…”, “¿Y si…?”, “He cambiado de
opinión porque…”.</p>
<hr />
<h3 id="hoja-2.-registro-del-profesor-una-sesión-de-diálogo">Hoja 2.
Registro del profesor (una sesión de diálogo)</h3>
<p><strong>Fecha:</strong> ____________ <strong>Sesión:</strong> S____
<strong>Tipo:</strong> dilema del día / diálogo evaluado / debate
<strong>Turno de observación:</strong> A / B / C / D</p>
<p><strong>Dilema o tema:</strong>
______________________________________________</p>
<p>Códigos: <strong>S</strong> = Sí (2) · <strong>A</strong> = A medias
(1) · <strong>N</strong> = No (0) · <strong>—</strong> = sin evidencia
(no ha intervenido). Una letra por dimensión. Total = suma de las cuatro
dimensiones (0-8); si hay “—”, media de las anotadas × 4.</p>
<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
<col style="width: 12%" />
</colgroup>
<thead>
<tr>
<th>N.º lista</th>
<th>Alumno/a</th>
<th>1 Actitud</th>
<th>2 Argumentos</th>
<th>3 Expresión</th>
<th>4 Mirada</th>
<th>Total (0-8)</th>
<th>Observación (una palabra)</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>Mejor intervención de la sesión (quién y qué):</strong>
______________________________________________</p>
<p><strong>Para la próxima sesión (alumnos a los que dar la palabra
primero):</strong> ______________________________</p>
<p>Recordatorio de los descriptores: <strong>Actitud</strong> S =
turnos, escucha, mirada al grupo, cortesía y cuerpo atento todo el rato;
A = casi siempre; N = interrumpe, móvil, burla.
<strong>Argumentos</strong> S = razón ligada a la conclusión, con
ejemplo, sobre el tema; A = razón débil o algo alejada; N = “porque sí”.
<strong>Expresión</strong> S = se le entiende a la primera, palabras
precisas, tono adecuado; A = cuesta entenderle o palabras vagas; N = no
interviene. <strong>Mirada</strong> S = nombra el problema, pregunta
nueva, conclusión, cambia si hay razón; A = sigue el problema sin
formularlo; N = anécdota, se aferra a su opinión.</p>
<hr />
<h3 id="hoja-3.-autoevaluación-después-de-un-diálogo-4-preguntas">Hoja
3. Autoevaluación después de un diálogo (4 preguntas)</h3>
<p><strong>Nombre:</strong> ____________________ <strong>Fecha:</strong>
____________ <strong>Dilema o tema:</strong> ______________________</p>
<p>Pega esta hoja en tu diario de aprendizaje o copia las respuestas
debajo de la entrada de hoy. Contesta con sinceridad: lo que respondas
aquí no sube ni baja la nota; sirve para que el próximo diálogo te salga
mejor.</p>
<p><strong>1. Actitud.</strong> ¿He escuchado sin interrumpir y he
respetado a todas las personas? <strong>Sí / A medias / No.</strong>
Escribe el nombre de alguien que pensaba distinto de ti y resume su idea
en una frase: ______________________________________________</p>
<p><strong>2. Argumentos.</strong> ¿He dado al menos una razón con un
“porque”? <strong>Sí / A medias / No.</strong> Escríbela:
______________________________________________ ¿Tenía que ver con el
tema? <strong>Sí / A medias / No.</strong></p>
<p><strong>3. Participación y expresión.</strong> ¿He hablado en el
diálogo? <strong>Sí / No.</strong> Si no, ¿qué me lo ha impedido?
(rodea) vergüenza · no sabía qué decir · no encontraba la palabra en
castellano · no me han dado el turno · otra: __________. Si sí, ¿se me
ha entendido a la primera? <strong>Sí / A medias / No.</strong></p>
<p><strong>4. Mirada sobre el problema.</strong> ¿Cuál era la pregunta
de fondo del dilema? ______________________________________________ ¿He
cambiado de opinión en algo? <strong>Sí / No.</strong> ¿Qué razón me ha
hecho cambiar, o cuál ha sido la mejor razón que he oído aunque no me
haya convencido? ______________________________________________</p>
<p><strong>Un objetivo para el próximo diálogo</strong> (elige un ítem
de la Hoja 1 y escribe su número): ______</p>
` },

};
