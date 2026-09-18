"use strict";
/* ===== Disertaciones filosóficas (PAU) =====
   Añadir una disertación: clave -> { tipo, subject, kick, title, html }.
   tipo: "guia" | "modelo" | "comparativa".  El html se pega tal cual.
   Fuentes: carpetas_drive_disertaciones\\disertaciones\\ (metodología y
   modelos traducidos por el departamento a partir de los exámenes EHU/PAU);
   modelo medieval a partir de la bóveda (01_proyectos\\ltfh). */

const DISERTACIONES = {

  "metodologia":{ tipo:"guia", subject:"hf", kick:"Metodología", title:"Cómo se hace una disertación", html:`
<blockquote class="src">
<p>La disertación filosófica <strong>vale 3 puntos</strong> en la PAU (Ejercicio de opción, competencias específicas CE2, CE3, CE8 y CE9). No mide cuánto sabes, sino cómo <strong>piensas</strong>: cómo planteas un problema, cómo enfrentas posturas y cómo defiendes la tuya. Esta guía resume qué es, cómo se estructura y con qué rúbrica se corrige.</p> </blockquote>

<h2>1. Qué es una disertación</h2>
<p>Es un <strong>texto personal</strong> en el que expones con claridad un <strong>problema filosófico</strong>, discutes las posturas enfrentadas que se han mantenido a lo largo de la historia de la filosofía, muestras que la cuestión <strong>sigue vigente hoy</strong> y expresas tu <strong>propio pensamiento</strong>.</p>
<p>Buscas una reflexión clara, rigurosa y coherente que convenza al lector por medio de la <strong>argumentación lógica</strong>. Para lograrlo es muy útil formular <strong>preguntas provocadoras</strong> que interpelen a quien lee y le hagan cuestionar sus supuestos: al fin y al cabo, es lo que hacía Sócrates.</p>
<blockquote class="src">
<p>«Realizar un trabajo filosófico […] es ejercitar el pensamiento, dominarlo y al mismo tiempo cambiarse uno mismo […], la capacidad de quien reflexiona para instalarse en el corazón de los problemas y convivir con ellos, hasta que se haga la luz.» — J. Russ, <em>Los métodos en filosofía</em> (2001)</p> </blockquote>

<h2>2. Qué NO es una disertación</h2>
<ul>
<li><strong>No es un ejercicio de erudición</strong>: no se trata de exponer muchas ideas de otros, sino de reflexionar con las propias.</li>
<li><strong>No es un desfile de conocimientos</strong>: no destaca por cuántos autores se citan, sino por cómo se usan sus argumentos (compararlos, analizarlos, ir al fondo de la cuestión).</li>
<li><strong>No es un ejercicio literario</strong>: el objetivo es la reflexión, aunque la corrección, la coherencia y la cohesión importen.</li>
<li><strong>No es una demostración matemática</strong>: no hay soluciones cerradas; a menudo se abren nuevos interrogantes.</li>
<li><strong>No es un comentario de texto</strong>: se puede partir de una frase célebre, pero lo importante es lo que <strong>tú</strong> aportas.</li>
</ul>

<h2>3. Estructura y extensión</h2>
<p>El tema se presenta como una pregunta, una afirmación, una breve argumentación o una situación hipotética. A partir de ella debes reflexionar <strong>al menos dos posiciones</strong>, ya sea para contemplar ambas, justificar por qué sostienes una, proponer un punto intermedio o dejar la cuestión abierta. El modelo más extendido tiene <strong>tres partes</strong>:</p>
<table>
<thead><tr><th>Parte</th><th>Qué haces</th></tr></thead>
<tbody>
<tr><td><strong>0. Título</strong></td><td>Descriptivo (anticipa la reflexión central) y, mejor aún, <strong>sugestivo</strong>: que despierte interés.</td></tr>
<tr><td><strong>I. Introducción</strong></td><td>Presentas el problema y planteas con nitidez la <strong>cuestión filosófica</strong>.</td></tr>
<tr><td><strong>II. Desarrollo</strong></td><td>Expones los <strong>argumentos a favor y en contra</strong> apoyándote en al menos dos autores/as, y lo <strong>relacionas con el presente</strong>.</td></tr>
<tr><td><strong>III. Conclusión</strong></td><td>Sintetizas y das tu <strong>postura personal</strong>, bien argumentada, a modo de cierre.</td></tr>
</tbody>
</table>
<p>Extensión aproximada: <strong>entre 200 y 300 palabras</strong>. Pero preocúpate del <strong>contenido</strong> más que de la extensión.</p>

<h2>4. Ejemplo guiado</h2>
<p><strong>Pregunta:</strong> ¿qué es más importante hoy, convencer a los demás o buscar la verdad?</p>
<ul>
<li><strong>0. Título</strong> — p. ej. «Likes o razones».</li>
<li><strong>I. Introducción</strong> — vivimos en una sociedad donde la comunicación, las redes y la política dependen mucho de la capacidad de convencer. ¿Vale más persuadir aunque no se tenga razón, o esforzarse por hallar la verdad?</li>
<li><strong>II. Desarrollo</strong> — <em>Los sofistas</em> defendían saber argumentar y convencer a la asamblea, aunque la verdad fuera relativa. <em>Sócrates</em> creía que lo esencial era buscar la verdad mediante el diálogo, porque conocer el bien lleva a obrar bien. Y en el presente: ¿se valora en política más la retórica que la verdad?; en redes, ¿importan más los likes que los argumentos?; en tu vida diaria, ¿pesa más quedar bien o ser sincero?</li>
<li><strong>III. Conclusión</strong> — ¿prefieres ser quien «convence» o quien «busca la verdad»? La filosofía enseña que no basta con hablar bien: hay que pensar bien.</li>
</ul>

<h2>5. Rúbrica PAU</h2>
<p>Así se puntúa (cada competencia con su intervalo de puntos):</p>
<table>
<thead><tr><th>Competencia</th><th>Qué valora</th><th>Puntos</th></tr></thead>
<tbody>
<tr><td><strong>CE2</strong> · Expresión</td><td>Lenguaje claro y preciso; registro formal; buen uso de la terminología filosófica.</td><td>0 – 0,5</td></tr>
<tr><td><strong>CE3</strong> · Estructura</td><td>Respeta la estructura (introducción, argumentos a favor/en contra con conectores, opinión personal y conclusión de cierre).</td><td>0 – 0,5</td></tr>
<tr><td><strong>CE9</strong> · Argumentación</td><td>Reflexión coherente y centrada; argumentos de al menos <strong>dos autores/as</strong> relevantes; opinión personal bien argumentada con ejemplos; vínculo con la actualidad.</td><td>0 – 1,5</td></tr>
<tr><td><strong>CE8</strong> · Originalidad</td><td>Título sugestivo; cita integrada con originalidad; preguntas provocadoras; creación propia (sin copia ni uso de IA).</td><td>0 – 0,5</td></tr>
</tbody>
</table>

<h2>6. Un ejemplo real, premiado</h2>
<p>Como referencia de excelencia existe <strong>«Libertad vs Seguridad»</strong>, disertación ganadora de la Olimpiada Filosófica de Madrid (autora: María Teresa Tormo Centeno; Colegio Fomento Montealto). Merece la pena verla por su método: <strong>define primero los términos</strong> («necesario», «seguridad», «libertad», apoyándose incluso en la RAE), enfrenta a <strong>San Agustín, Aristóteles, Maslow, Ortega y Kant</strong>, y cierra con una tesis propia matizada («libertad gracias a la seguridad»). Es un trabajo de otra autora y otro centro: se cita como modelo, no se reproduce aquí.</p>

<blockquote class="src">
<p><strong>Fuente</strong>: departamento de Filosofía — <code>carpetas_drive_disertaciones\\disertaciones\\metodologia_disertacion.pdf</code> (guía y rúbrica PAU) y <code>disertación_ganadora.pdf</code> (referencia externa citada con atribución).</p> </blockquote>
`},

  "modelo-platon":{ tipo:"modelo", subject:"hf", kick:"Modelo · Platón", title:"El Estado justo (Platón)", html:`
<blockquote class="src">
<p><strong>Enunciado</strong>: «A juicio de Platón, el Estado justo es aquel en que cada una de las clases sociales cumple con el cometido que le corresponde. Expón al menos un argumento a favor de esta tesis platónica y al menos una objeción; expón finalmente tu reflexión personal.» <em>(593 palabras · Bloque A)</em></p> </blockquote>

<h2>Explicación de la tesis</h2>
<p>Según Platón debemos alcanzar un Estado justo, y para ello a cada clase social le corresponde una actividad concreta. Esa actividad se ajusta a la <strong>capacidad propia</strong> de los individuos que la integran: es aquello que saben hacer bien lo que deben poner en marcha. En el Estado ideal cada ciudadano será feliz porque se dedica —gracias a sus aptitudes— a las tareas que mejor sabe hacer.</p>

<h2>Argumentos a favor</h2>
<p>Fomentar las capacidades de cada persona es beneficioso a nivel personal y estatal, y exige un <strong>proceso educativo</strong>: Platón subraya una y otra vez la importancia de la educación. Un sistema que promueva descubrir y desarrollar las competencias propias sería muy positivo. Hay otros aspectos valiosos: la división del trabajo, anteponer el interés general al particular y superar los propios intereses como vía para enseñar la <strong>solidaridad</strong>. La <strong>cooperación</strong> resulta imprescindible hoy para resolver problemas ecológicos o económicos.</p>

<h2>Objeción</h2>
<p>Sin embargo, este Estado ideal no puede lograrse a cualquier precio, sobre todo a costa de lo que nos hace personas: la <strong>libertad</strong>. Platón restringe la libertad y la intervención estatal no tiene límites: la vida privada queda perfectamente organizada. Así, el desarrollo de las capacidades no sería el desarrollo completo de la persona, porque su capacidad de elección está limitada. El Estado puede <em>ofrecernos</em> formas de ser felices, pero no <em>imponerlas</em>.</p>

<h2>Reflexión personal</h2>
<p>Coincido con Platón en que la felicidad individual no puede lograrse a cualquier costa: aquí la ley debe poner límites infranqueables. Pero la educación moral que busca, aun siendo un buen fin, solo se consigue en libertad. Al determinar el bien común hay que evitar el peligro del <strong>totalitarismo</strong>, y para ello el camino es la <strong>democracia activa</strong> y la educación cívica. El Estado de Platón es rígido y pone en jaque el desarrollo individual: la felicidad de la sociedad prevalece sobre la del individuo. Por eso K. Popper, en <em>La sociedad abierta y sus enemigos</em>, denunció el Estado ideal platónico por no ser democrático.</p>

<blockquote class="src">
<p><strong>Fuente</strong>: departamento de Filosofía — traducción al castellano del modelo del documento <em>Unibertsitatera sartzeko hautaprobak. Filosofia</em> (EHU/PAU). <code>carpetas_drive_disertaciones\\disertaciones\\disertacionPlaton.pdf</code>.</p> </blockquote>
`},

  "modelo-kant":{ tipo:"modelo", subject:"hf", kick:"Modelo · Kant", title:"La autonomía moral (Kant)", html:`
<blockquote class="src">
<p><strong>Enunciado</strong>: «A juicio de Kant, el ser humano debe valerse de su propia razón al construir su conciencia moral. Esta tesis no la comparten todos los filósofos estudiados. Desarrolla una breve disertación con al menos una idea a favor y una objeción, y expón tu reflexión personal.» <em>(Bloque C)</em></p> </blockquote>

<h2>Explicación de la tesis</h2>
<p>Kant considera que es el propio sujeto quien debe orientar su acción sin someter la razón a nada externo. La ley moral no puede derivarse de elementos superiores al individuo, sino de la <strong>autonomía de la razón</strong>. Por eso nada —ni la autoridad, ni la tradición, ni el rey, ni el sacerdote, ni el maestro— tiene autoridad moral para imponerle imperativos: cuando eso ocurre, el ser humano actúa como si fuera <strong>menor de edad</strong>. Cada sujeto debe imponerse a sí mismo la ley moral: el imperativo no es heterónomo, sino <strong>autónomo</strong>.</p>

<h2>Argumentos a favor</h2>
<p>El argumento más relevante es que la ética se fundamenta en la <strong>autonomía o libertad de la voluntad</strong>, esto es, en la capacidad de la razón para autolegislarse. Ni la naturaleza ni Dios nos imponen la ley moral: es el sujeto quien se la da. De ahí la distinción kantiana entre <strong>moralidad</strong> y <strong>legalidad</strong>: cumplir las leyes jurídicas no es sin más ser moral, porque ahí seguimos un imperativo impuesto desde fuera y no el que nace de la conciencia. Kant llama a cada uno a pensar por sí mismo: la Ilustración es salir de una minoría de edad causada por «pereza y cobardía». Por eso su lema: <strong>«¡Sapere aude! ¡Atrévete a pensar por ti mismo!»</strong>.</p>

<h2>Objeción</h2>
<p>Ahora bien, la libertad que proclama Kant es solo <strong>individual</strong>. Fiel a la Ilustración, no percibe la influencia de los hechos históricos y sociales sobre las personas. <strong>Hegel</strong> mostró que las mentalidades se desarrollan a través de la costumbre a lo largo de la historia; <strong>Marx</strong> dejó claro que las condiciones sociales determinan la libertad real: ¿acaso una sociedad alienada permite ser libre? En la medida en que la propuesta kantiana es ideal, queda situada fuera de la realidad, y sus proposiciones éticas responderían a un espíritu <strong>burgués</strong> en el que solo quien cubre sus necesidades materiales puede gozar de esa libertad.</p>

<h2>Reflexión personal</h2>
<p>Tras los argumentos a favor y en contra, considero que cada persona debe decidir por sí misma lo que le conviene para desarrollar su existencia, teniendo en cuenta los valores acumulados en la historia (tradición, autoridad, sociedad). Las costumbres pueden ser buenas, pero también cabe ir contra ellas si una parte significativa de la sociedad lo considera en un contexto dado (por ejemplo, #MeToo o #BlackLivesMatter). A favor de Kant, la libertad es —junto con la razón— un rasgo que define al ser humano; pero, con Hegel y sobre todo Marx, cabe decir que el ser humano no es solo racional y libre, sino un <strong>ser histórico</strong> que se desarrolla en la historia y la moldea. El sujeto trascendental de Kant no es del todo el sujeto que conocemos en la realidad.</p>

<blockquote class="src">
<p><strong>Fuente</strong>: departamento de Filosofía — traducción al castellano del modelo del documento <em>Unibertsitatera sartzeko hautaprobak. Filosofia</em> (EHU/PAU). <code>carpetas_drive_disertaciones\\disertaciones\\disertacionKant.pdf</code>.</p> </blockquote>
`},

  "modelo-nietzsche":{ tipo:"modelo", subject:"hf", kick:"Modelo · Nietzsche", title:"Dios como concepto antivital (Nietzsche)", html:`
<blockquote class="src">
<p><strong>Enunciado</strong>: «Desarrolla una breve disertación a partir de la tesis "el concepto de Dios ha sido inventado como concepto antitético de la vida". Presenta al menos una idea a favor y una objeción, y desarrolla tu reflexión personal.» <em>(792 palabras · Bloque C)</em></p> </blockquote>

<h2>Explicación de la tesis</h2>
<p>Cuando Nietzsche habla de «Dios» habla de aquello que, para el individuo, supuso <strong>renunciar a la vida</strong>. Proclamar la existencia de Dios no significa sino la negación de la vida terrenal que corresponde a cada ser humano. Tener a Dios como sentido de la vida convierte al individuo en <strong>esclavo</strong>: los valores dejan de referirse a la vida —individual, corpórea, cambiante, mortal— para referirse a Dios.</p>

<h2>Argumentos a favor</h2>
<p>El origen de la decadencia de la cultura occidental sería esa negación de la vida que produce la religión: en nombre de una supuesta vida futura se excluye la vida real. Nietzsche (como Freud) acusa a la religión —y al cristianismo— de haber rechazado las pasiones, los impulsos y todo lo que gusta al cuerpo. Por eso la <strong>«muerte de Dios»</strong> abre las puertas al pleno desarrollo del ser humano y a la liberación de su fuerza creadora. Como la realidad fundamental es la <strong>vida</strong>, Nietzsche subraya sus aspectos afectivos y niega a la razón capacidad para captarlos. La destrucción de los valores vigentes impone el <strong>nihilismo</strong>, que anuncia al superhombre y la <strong>transmutación de los valores</strong>: pasar de la moral de esclavos (humildad, sacrificio, compasión) a una moral que dice «sí» a la vida, tras los tres pasos del camello, el león y el niño.</p>

<h2>Objeción</h2>
<p>Este pensamiento entraña riesgos: no controlar la arrogancia, la violencia o la pasión puede tener consecuencias negativas para la sociedad y el individuo, y no hay que olvidar los <strong>vínculos que algunos atribuyeron a esta mentalidad con el nazismo y el fascismo</strong>.</p>

<h2>Reflexión personal</h2>
<p>Creo que este pensamiento puede tener aspectos valiosos —por ejemplo, para una persona bien situada, como afirmación vital frente al conformismo—. Pero, al basarse en el ateísmo y en la exaltación de la fuerza, quizá no sea lo más adecuado para quien está enfermo, hambriento o abatido. La afirmación de la vida no debería convertirse en desprecio del débil.</p>

<blockquote class="src">
<p><strong>Fuente</strong>: departamento de Filosofía — traducción al castellano del modelo del documento <em>Unibertsitatera sartzeko hautaprobak. Filosofia</em> (EHU/PAU). <code>carpetas_drive_disertaciones\\disertaciones\\disertacionNietzsche.pdf</code>.</p> </blockquote>
`},

  "modelo-medieval":{ tipo:"modelo", subject:"hf", kick:"Modelo · Medieval", title:"¿Puede la razón conocer a Dios? (escolástica)", html:`
<blockquote class="src">
<p>Modelo de <strong>disertación medieval</strong> según el método escolástico de la <em>quaestio disputata</em> (ss. XII-XIV, Universidad de París; Tomás de Aquino, Pedro Abelardo). Sirve para ver una <strong>estructura distinta</strong> de la moderna: cuestión → objeciones → <em>sed contra</em> → <em>respondeo</em> → réplicas.</p> </blockquote>

<h2>Cuestión</h2>
<p>¿Es posible que la razón humana alcance el conocimiento de Dios?</p>

<h2>Objeciones</h2>
<ul>
<li><strong>Objeción 1.</strong> Parece que no: Dios es infinito y el intelecto humano es finito; lo finito no puede abarcar lo infinito.</li>
<li><strong>Objeción 2.</strong> Dice el <em>Eclesiastés</em>: «nadie puede comprender las obras de Dios desde el principio hasta el fin». Luego el conocimiento humano no puede alcanzar a Dios.</li>
<li><strong>Objeción 3.</strong> Todo conocimiento parte de los sentidos, pero Dios no es sensible. Luego la razón no puede conocerlo.</li>
</ul>

<h2>Sed contra</h2>
<p>Dice <em>Romanos</em> (1,20): «lo invisible de Dios se deja ver a través de las cosas creadas». Luego el hombre puede conocer a Dios mediante la razón natural.</p>

<h2>Respondeo</h2>
<p>Digo que el intelecto humano no puede conocer la <strong>esencia</strong> divina en esta vida, porque excede toda capacidad de la criatura. Sin embargo, sí puede <strong>conocer que Dios existe</strong> y algunos de sus atributos —eternidad, bondad, unidad— a partir de los efectos creados, por vía de causalidad, eminencia y negación. Como por la huella conocemos al caminante, por las criaturas llegamos a un conocimiento imperfecto del Creador.</p>

<h2>Réplicas a las objeciones</h2>
<ul>
<li><strong>A la 1.</strong> No abarcamos lo infinito, pero sí conocemos que existe, como se sabe que el mar es inmenso sin abarcarlo entero.</li>
<li><strong>A la 2.</strong> La Escritura habla de la comprensión <em>total</em>, imposible en esta vida, pero no niega un conocimiento parcial.</li>
<li><strong>A la 3.</strong> Aunque Dios no es sensible, las cosas sensibles son efectos suyos, y por los efectos se alcanza un conocimiento causal de la causa.</li>
</ul>

<blockquote class="src">
<p><strong>Fuente</strong>: elaboración a partir de la bóveda del profesor (<code>000 NAGUSIA OBS\\01_proyectos\\ltfh\\Ejemplo-disertacion-medieval.md</code>).</p> </blockquote>
`},

  "comparativas":{ tipo:"comparativa", subject:"hf", kick:"Comparativas por parejas", title:"Modelos comparativos (por parejas)", html:`
<blockquote class="src">
<p>Seis modelos breves que <strong>enfrentan a dos autores</strong> ante una misma cuestión —el formato habitual del examen—. Cada uno termina en «En mi opinión…»: la <strong>conclusión personal la escribes tú</strong>. Úsalos como plantilla de argumentación.</p> </blockquote>

<h2>Marx ↔ San Agustín — ¿qué papel juega la religión?</h2>
<p>Para <strong>Marx</strong> la religión es el «opio del pueblo»: consuela ante el sufrimiento y las desigualdades del capitalismo prometiendo recompensas en el más allá, y así mantiene a las masas pasivas y el orden establecido. Para <strong>San Agustín</strong>, en cambio, la religión es un camino hacia Dios, la verdad absoluta y la auténtica felicidad. Hoy funciones parecidas las cumplen el consumismo, las redes o el deporte de masas. <em>En mi opinión…</em></p>

<h2>Kant ↔ San Agustín — ¿se puede conocer la verdad?</h2>
<p>Para <strong>Kant</strong> solo conocemos la verdad científica (unión de experiencia y razón) y únicamente los <strong>fenómenos</strong>: el <em>noúmeno</em> queda inaccesible (como la imagen filtrada de un <em>youtuber</em>, vemos lo publicado, no lo real). Para <strong>San Agustín</strong> la verdad última reside en Dios y se alcanza por la fe y la iluminación divina, sin los límites de la razón humana. <em>En mi opinión…</em></p>

<h2>Kant ↔ Platón — los límites del conocimiento</h2>
<p><strong>Kant</strong> sostiene que conocemos la verdad científica, limitada por las condiciones de nuestra experiencia. <strong>Platón</strong> defiende que el conocimiento verdadero es <strong>reminiscencia de las Ideas</strong>, realidades eternas a las que se accede por la razón y no por los sentidos: el mundo sensible es copia imperfecta del inteligible. <em>En mi opinión…</em></p>

<h2>Arendt ↔ Marx — ¿cuál es el valor del pensamiento crítico?</h2>
<p><strong>Arendt</strong>, ante el caso Eichmann, mostró que no pensar desde el punto de vista del otro conduce a la <strong>banalidad del mal</strong>: el pensamiento crítico permite juzgar y evitar la obediencia ciega (hoy, frente a los bulos y la manipulación). <strong>Marx</strong> advierte que en una sociedad alienada la ideología guía el pensamiento y hace el pensamiento crítico casi imposible. <em>En mi opinión…</em></p>

<h2>Arendt ↔ San Agustín — pensar por uno mismo</h2>
<p>Frente a la necesidad del pensamiento crítico que defiende <strong>Arendt</strong>, <strong>San Agustín</strong> sostiene que solo Dios guía hacia la verdad: la reflexión individual desligada de Él llevaría al relativismo y al escepticismo. Se enfrentan así la <strong>autonomía del juicio</strong> y la <strong>verdad revelada</strong>. <em>En mi opinión…</em></p>

<h2>San Agustín ↔ Epicuro — ¿es posible la felicidad?</h2>
<p>Para <strong>San Agustín</strong> la felicidad verdadera solo se alcanza en el encuentro con Dios, único bien imperecedero: cuanto menos apego a lo material, más felices. Para <strong>Epicuro</strong> la felicidad es placer moderado y ausencia de dolor: liberarse del miedo a la muerte y a los dioses y satisfacer solo los deseos naturales y necesarios. <em>En mi opinión…</em></p>

<blockquote class="src">
<p><strong>Fuente</strong>: departamento de Filosofía — <code>carpetas_drive_disertaciones\\disertaciones\\DISERTACIONES HECHAS.docx</code> (modelos comparativos; la conclusión personal queda abierta a propósito).</p> </blockquote>
`},

};
