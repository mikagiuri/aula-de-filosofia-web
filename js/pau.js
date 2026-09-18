"use strict";
/* ===== Preparación PAU (Historia de la Filosofía) =====
   Añadir una entrada: clave -> { parte, subject, kick, title, html }.
   Fuente: departamento de Filosofía — carpetas_drive_PAU\\PAU_2026 (estructura,
   rúbricas y modelos oficiales EHU/PAU 2026) y \\metodologia. El Ejercicio 2
   (disertación) se desarrolla en la sección Disertaciones. */

const PAU = {

  "estructura":{ parte:"Estructura", subject:"hf", kick:"La prueba", title:"La prueba PAU 2026: estructura", html:`
<blockquote class="src">
<p>El examen de Historia de la Filosofía evalúa la <strong>madurez intelectual</strong>, el análisis y el razonamiento crítico, y la comprensión de los principales problemas y conceptos de la materia. Aquí tienes el mapa de la prueba; cada ejercicio tiene su guía propia en esta sección (y la disertación, en la pestaña <strong>Disertaciones</strong>).</p> </blockquote>

<h2>Indicaciones generales</h2>
<ul>
<li>Hay <strong>una sola prueba</strong> (no se elige entre dos modelos).</li>
<li>Puede incluir preguntas con <strong>dos opciones (A o B)</strong>.</li>
<li>Esa opcionalidad <strong>no garantiza</strong> sacar la máxima nota sin haber preparado alguno de los bloques de saberes básicos.</li>
</ul>

<h2>Los tres ejercicios</h2>
<table>
<thead><tr><th>Ejercicio</th><th>Qué pide</th><th>Puntos</th><th>Competencias</th></tr></thead>
<tbody>
<tr><td><strong>1 · Comprensión de texto</strong></td><td>Resumen (1.1) + comparación/explicación sobre el texto (1.2, A o B). Texto de 200-400 palabras.</td><td><strong>4</strong></td><td>CE1, CE7</td></tr>
<tr><td><strong>2 · Reflexión filosófica</strong></td><td>Una <strong>disertación</strong> argumentada (a favor/en contra + opinión). Opción única, 200-300 palabras.</td><td><strong>3</strong></td><td>CE2, CE3, CE8, CE9</td></tr>
<tr><td><strong>3 · Repensando la HF</strong></td><td>Exposición argumentada de una cuestión de la Historia de la Filosofía. Opción A o B, 200-300 palabras.</td><td><strong>3</strong></td><td>CE4, CE5, CE6</td></tr>
</tbody>
</table>
<p><strong>Ortografía</strong>: cada falta resta <strong>−0,1</strong>, hasta un máximo de −1 punto.</p>

<h2>Textos orientativos 2025-26 (Ejercicio 1)</h2>
<p>Para cada convocatoria se selecciona entre 4 y 8 grupos de textos; son orientativos, no cerrados. Los propuestos este curso —todos disponibles en la pestaña <strong>Lecturas</strong>—:</p>
<ul>
<li><strong>Platón</strong>: <em>La República</em>, Libro VII.</li>
<li><strong>Descartes</strong>: <em>Discurso del método</em>, partes II, III y IV.</li>
<li><strong>Kant</strong>: <em>Respuesta a la pregunta: ¿Qué es la Ilustración?</em></li>
<li><strong>Nietzsche</strong>: <em>Ecce Homo</em>, «¿Por qué soy un destino?».</li>
<li><strong>Beauvoir</strong>: <em>El segundo sexo</em>, Conclusión.</li>
</ul>

<h2>¿Y el Ejercicio 2?</h2>
<p>El Ejercicio 2 es la <strong>disertación filosófica</strong>. Tienes su método, la rúbrica y varios modelos resueltos en la pestaña <strong>Disertaciones</strong>.</p>

<blockquote class="src">
<p><strong>Fuente</strong>: departamento de Filosofía — <code>carpetas_drive_PAU\\PAU_2026\\estructura-y-modeloExamen-rubrica.pdf</code>.</p> </blockquote>
`},

  "ejercicio1":{ parte:"Ejercicio 1", subject:"hf", kick:"Ejercicio 1 · 4 puntos", title:"Comprensión de texto", html:`
<blockquote class="src">
<p>El Ejercicio 1 (4 puntos) mide si <strong>comprendes</strong> las ideas y la estructura argumental de un texto y sabes <strong>relacionarlas</strong> con la Historia de la Filosofía. Tiene dos preguntas: <strong>1.1 resumen</strong> (1 punto) y <strong>1.2</strong> una opción A o B (3 puntos, máximo 250 palabras).</p> </blockquote>

<h2>1.1 · El resumen (1 punto)</h2>
<p><strong>No</strong> es enumerar ideas (como en Lengua) ni copiar literalmente. <strong>Sí</strong> es: entender el <strong>problema filosófico</strong>, identificar la <strong>tesis</strong> del autor, explicar <strong>cómo</strong> la defiende (argumentos) y usar lenguaje filosófico claro. Si el resumen es más largo que el texto, <strong>0 puntos</strong>.</p>

<h2>El resumen en 5 pasos</h2>
<ol>
<li><strong>Primera lectura</strong>: entender «de qué va» (¿realidad, conocimiento, política, moral, ser humano…?; ¿critica o defiende?; ¿afirma o duda?).</li>
<li><strong>Detectar el problema</strong> filosófico de fondo (ver tabla).</li>
<li><strong>Localizar la tesis</strong>: lo que el autor sostiene, en una frase. Suele estar al inicio o al final, repetida con otras palabras.</li>
<li><strong>Ideas secundarias</strong>: cómo justifica la tesis (definiciones, distinciones, consecuencias, críticas). Normalmente 2-3.</li>
<li><strong>Redactar</strong>: de lo general a lo concreto (problema → tesis → ideas secundarias).</li>
</ol>
<table>
<thead><tr><th>Si el texto pregunta…</th><th>Rama</th><th>Gran pregunta</th></tr></thead>
<tbody>
<tr><td>¿Qué es la verdad? ¿Cómo conocemos? ¿Sentidos o razón?</td><td>Epistemología</td><td rowspan="2">¿Qué puedo saber? <em>(Fª teórica)</em></td></tr>
<tr><td>¿Qué es la realidad? ¿Es material o inmaterial?</td><td>Metafísica</td></tr>
<tr><td>¿Qué es el bien? ¿Las normas son relativas? ¿Qué es la felicidad?</td><td>Ética / Moral</td><td rowspan="2">¿Qué debo hacer? <em>(Fª práctica)</em></td></tr>
<tr><td>¿Qué es la justicia? ¿Debo obedecer la ley? ¿Quién debe gobernar?</td><td>Política</td></tr>
<tr><td>¿Qué es el ser humano? ¿Somos libres? ¿Existe Dios?</td><td>Antropología</td><td>Síntesis</td></tr>
</tbody>
</table>
<p><strong>Modelo de respuesta</strong>: «El texto plantea el problema de… La tesis principal del autor es que… Para sostenerla, en primer lugar afirma que… Además, señala que… En conjunto, defiende una concepción según la cual…».</p>
<p><strong>Consejo</strong>: 15 minutos máximo, un párrafo claro (o dos cortos), pocas ideas bien explicadas. <strong>Errores que penalizan</strong>: resumen más largo que el texto (0), poner «títulos», copiar frases literales, escribir por escribir o meter ideas que no están (la vida del autor, tu opinión).</p>

<h2>1.2 · Opción A o B (3 puntos, máx. 250 palabras)</h2>
<ul>
<li><strong>Opción A</strong>: <strong>comparación crítica</strong> de un aspecto del texto con una cuestión de la Historia de la Filosofía.</li>
<li><strong>Opción B</strong>: <strong>explicar</strong> por qué la autora o el autor afirma algo concreto del texto.</li>
</ul>

<h2>Rúbrica del Ejercicio 1</h2>
<p><strong>Pregunta 1.1 (1 punto)</strong>:</p>
<table>
<thead><tr><th>Puntos</th><th>Descripción</th></tr></thead>
<tbody>
<tr><td>0</td><td>El resumen es más largo que el texto: no se acepta.</td></tr>
<tr><td>0 – 0,25</td><td>No hay ideas importantes o solo secundarias; estructura inadecuada; comprensión y redacción muy deficientes.</td></tr>
<tr><td>0,25 – 0,5</td><td>Algunas ideas importantes pero poco claras; estructura básica con defectos; gramática escasa.</td></tr>
<tr><td>0,5 – 0,75</td><td>La mayoría de las ideas son claras; comprensión adecuada; gramática correcta pero frases sencillas; falta precisión.</td></tr>
<tr><td>0,75 – 1</td><td>Todas las ideas claras; comprensión exacta; excelente escritura y riqueza sintáctica.</td></tr>
</tbody>
</table>
<p><strong>Pregunta 1.2 (3 puntos)</strong> — se valora comprensión del texto, calidad de la comparación (A) o de la explicación (B), vocabulario filosófico, estructura argumentativa y gramática, en una escala continua:</p>
<table>
<thead><tr><th>Puntos</th><th>Descripción</th></tr></thead>
<tbody>
<tr><td>0 – 1</td><td>Comprensión deficiente; comparación/explicación casi inexistente o errónea; sin estructura; vocabulario filosófico inadecuado.</td></tr>
<tr><td>1 – 2</td><td>Comprensión parcial o suficiente pero limitada; comparación/explicación superficial; argumentación básica; vocabulario inexacto.</td></tr>
<tr><td>2 – 2,5</td><td>Buena comprensión; comparación/explicación acertada aunque falten matices; vocabulario adecuado; estructura lógica.</td></tr>
<tr><td>2,5 – 3</td><td>Comprensión profunda y precisa; comparación/explicación crítica y matizada; vocabulario preciso; argumentos claros; excelente redacción.</td></tr>
</tbody>
</table>

<blockquote class="src">
<p><strong>Fuente</strong>: departamento de Filosofía — <code>carpetas_drive_PAU\\PAU_2026\\metodologia\\met_PAU-comprensionTexto.pdf</code> y <code>estructura-y-modeloExamen-rubrica.pdf</code>.</p> </blockquote>
`},

  "ejercicio3":{ parte:"Ejercicio 3", subject:"hf", kick:"Ejercicio 3 · 3 puntos", title:"Repensando la Historia de la Filosofía", html:`
<blockquote class="src">
<p>El Ejercicio 3 (3 puntos) pide una <strong>exposición argumentada</strong> de una cuestión de la Historia de la Filosofía, elegida entre dos opciones (A o B), de 200-300 palabras. No se pide soltar de memoria a un autor, sino <strong>razonar</strong> una cuestión trabajada en clase.</p> </blockquote>

<h2>Qué se valora (la clave de la rúbrica)</h2>
<p>La diferencia entre aprobar justo y sacar nota alta está en <strong>situar bien al autor o la corriente</strong>. Para la máxima puntuación conviene:</p>
<ul>
<li><strong>Introducir al autor/a</strong>: su corriente filosófica, el <strong>siglo o época</strong> y el <strong>título de su obra principal</strong>.</li>
<li>Usar sus <strong>conceptos significativos</strong> con precisión.</li>
<li>Dar <strong>referencias filosóficas adecuadas y bien relacionadas</strong> con el tema, no una lista de nombres.</li>
<li><strong>Argumentos sólidos</strong> y conclusiones razonadas, con ejemplos pertinentes.</li>
</ul>
<p>Se penaliza quedarse en opiniones personales sin base, referencias sin explicar o descontextualizadas, y la falta de estructura. (Ortografía: −0,1 por falta, hasta −1.)</p>

<h2>Ejemplos de preguntas reales</h2>
<p>De los modelos oficiales, para que veas el tipo de cuestión:</p>
<ul>
<li>El concepto de <strong>ciudadanía en la Ilustración griega</strong>. <em>(Bloque A)</em></li>
<li>El <strong>debate platónico-aristotélico sobre la política</strong>. <em>(Bloque A)</em></li>
<li>La <strong>crisis de la polis</strong> y la propuesta ética <strong>helenística</strong>. <em>(Bloque A)</em></li>
<li>Aportaciones y críticas de los <strong>Maestros de la Sospecha</strong>. <em>(Bloque C)</em></li>
</ul>
<p>Para preparar cada cuestión tienes el desarrollo en <strong>Teoría</strong> y un vistazo rápido en <strong>Mapas</strong> e <strong>Infografías</strong>.</p>

<blockquote class="src">
<p><strong>Fuente</strong>: departamento de Filosofía — rúbrica del Ejercicio 3 en <code>carpetas_drive_PAU\\PAU_2026\\estructura-y-modeloExamen-rubrica.pdf</code>.</p> </blockquote>
`},

  "modelos":{ parte:"Modelos", subject:"hf", kick:"Modelos oficiales", title:"Modelos de examen (2026)", html:`
<blockquote class="src">
<p>Dos <strong>modelos oficiales</strong> completos publicados para la PAU 2026, con sus tres ejercicios. Practica cronometrando: comprensión ~40 min, disertación ~35 min, exposición ~35 min. Los textos completos de los ejercicios 1 están en la pestaña <strong>Lecturas</strong>.</p> </blockquote>

<h2>Modelo I</h2>
<p><strong>Ejercicio 1 — Comprensión (4 pts).</strong> Texto: <strong>Simone de Beauvoir, <em>El segundo sexo</em> (Conclusión)</strong> —tesis central: «en la sociedad humana nada es natural»— (texto completo en <strong>Lecturas · Beauvoir</strong>).</p>
<ul>
<li><strong>1.1.</strong> Resumen de las ideas principales y la estructura argumental (1 pto).</li>
<li><strong>1.2.A.</strong> Comparación crítica del asunto del texto con ideas de la Ilustración (Kant, Olympe de Gouges, Mary Wollstonecraft).</li>
<li><strong>1.2.B.</strong> Justificar por qué afirma Beauvoir que «en la sociedad humana nada es natural».</li>
</ul>
<p><strong>Ejercicio 2 — Disertación (3 pts).</strong> «En la Edad Media la felicidad cobra gran importancia… <strong>¿puede el ser humano alcanzar la felicidad?</strong>» (200-300 palabras).</p>
<p><strong>Ejercicio 3 — Exposición (3 pts).</strong> Opción A: la <strong>ciudadanía en la Ilustración griega</strong>. Opción B: el <strong>debate platónico-aristotélico sobre la política</strong>.</p>
<p><em>Bloques que se ponen en juego: Ej. 1 → Bloque C; Ej. 3 → Bloque A.</em></p>

<h2>Modelo II</h2>
<p><strong>Ejercicio 1 — Comprensión (4 pts).</strong> Texto: <strong>René Descartes, <em>Discurso del método</em> (cuarta parte)</strong>:</p>
<blockquote>
<p>«… deseando yo en esta ocasión ocuparme tan sólo de indagar la verdad, pensé que debía […] rechazar como absolutamente falso todo aquello en que pudiera imaginar la menor duda, con el fin de ver si […] no quedaría en mi creencia algo que fuera enteramente indudable. […] advertí luego que, queriendo yo pensar […] que todo es falso, era necesario que yo, que lo pensaba, fuese alguna cosa; y observando que esta verdad: <strong>“yo pienso, luego soy”</strong>, era tan firme y segura que las más extravagantes suposiciones de los escépticos no son capaces de conmoverla, juzgué que podía recibirla […] como el primer principio de la filosofía que andaba buscando.»</p> </blockquote>
<ul>
<li><strong>1.1.</strong> Resumen de las ideas principales y la estructura argumental (1 pto).</li>
<li><strong>1.2.A.</strong> Comparación crítica del asunto del texto con las ideas del <strong>racionalismo y el empirismo</strong>.</li>
<li><strong>1.2.B.</strong> Justificar por qué afirma Descartes «yo pienso, luego soy».</li>
</ul>
<p><strong>Ejercicio 2 — Disertación (3 pts).</strong> «<strong>El ser humano es un proyecto abierto, no tiene una esencia inmutable.</strong>» (200-300 palabras).</p>
<p><strong>Ejercicio 3 — Exposición (3 pts).</strong> Opción A: la <strong>crisis de la polis</strong> y la propuesta ética helenística. Opción B: aportaciones y críticas de los <strong>Maestros de la Sospecha</strong>.</p>
<p><em>Bloques: Ej. 1 → Bloque B; Ej. 3A → Bloque A, 3B → Bloque C.</em></p>

<blockquote class="src">
<p><strong>Fuente</strong>: departamento de Filosofía — <code>carpetas_drive_PAU\\PAU_2026\\MODELO EXAMEN PAU 2026 HISTORIA DE LA FILOSOFÍA.pdf</code>. El fragmento de Descartes es de dominio público; el de Beauvoir se cita brevemente y su texto completo está en Lecturas.</p> </blockquote>
`},

};
