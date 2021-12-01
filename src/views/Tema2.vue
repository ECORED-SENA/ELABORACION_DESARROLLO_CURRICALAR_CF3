<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Habilidades en el siglo XXI
    .row.mt-5
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-1.svg', alt='Texto que describa la imagen').px-3.px-xl-0.floating
      .col-12.col-lg-10
        p Actualmente, las instituciones educativas están convocadas a desarrollar competencias relacionadas con el pensamiento crítico, la creatividad, el trabajo en equipo, la ciudadanía, el mundo digital y la metacognición, entre otras, que se requieren para vivir exitosamente en este siglo. Profundice al respecto en el recurso que se presenta a continuación:
    TabsB.color-acento-botones.mt-5
      .py-4.py-md-5(titulo="Habilidades del pensamiento y el aprendizaje" :icono="require('@/assets/template/tema-2-2.svg')")
        .row
          .col-12.col-lg-7
            .h3 Habilidades del pensamiento y el aprendizaje
            p.mt-3 De acuerdo con Sternberg (1982), las habilidades del pensamiento y el aprendizaje se refieren al conjunto de habilidades que nos sirven para solucionar problemas del contexto cotidiano y académico, que pueden analizarse por separado.
          .col-5.d-none.d-lg-flex.px-5
            figure  
              img(src='@/assets/template/tema-2-9.svg', alt='Texto que describa la imagen').px-3            
      .py-4.py-md-5(titulo="Teoría triárquica de la inteligencia" :icono="require('@/assets/template/tema-2-3.svg')")
        .row
          .col-12.col-lg-7
            .h3 Teoría triárquica de la inteligencia
            p.mt-3 Su teoría triárquica de la inteligencia ésta integrada por tres dimensiones: la componencial, que hace referencia a los mecanismos cognitivos que nos permiten aprender y desarrollar tareas inteligentes; la experiencial, que nos permite abordar una nueva tarea o situación dándole una respuesta adecuada; y la contextual, de tipo práctico o social, que explica la adaptación al ambiente y es útil para resolver problemas cotidianos.
          .col-5.d-none.d-lg-flex.px-5
            figure  
              img(src='@/assets/template/tema-2-10.svg', alt='Texto que describa la imagen').px-3            
      .py-4.py-md-5(titulo="Teoría de inteligencias múltiples " :icono="require('@/assets/template/tema-2-4.svg')")
        .row
          .col-12.col-lg-7
            .h3 Teoría de inteligencias múltiples 
            p.mt-3 A partir de la teoría de las inteligencias múltiples de Gardner (1995), se invita a entender la mente humana con muchas facetas, así los individuos tendrán potenciales diferentes para resolver situaciones y relacionarse con los retos de la vida.
            p.mt-3 Además, el desarrollo de estas inteligencias posibilita diferentes maneras de aprender y la necesidad de configurar escenarios docente-educativos centrados en el sujeto que aprende.  
          .col-5.d-none.d-lg-flex.px-5
            figure  
              img(src='@/assets/template/tema-2-11.svg', alt='Texto que describa la imagen').px-3            
      .py-4.py-md-5(titulo="Inteligencias múltiples" :icono="require('@/assets/template/tema-2-5.svg')")
        .row
          .col-12.col-lg-7
            .h3 Inteligencias múltiples
            p.mt-3 A continuación, se mencionan las más desarrolladas y estudiadas:
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                | Inteligencia lógico-matemática.
              li 
                i.fas.fa-angle-right
                | Inteligencia lingüística.
              li 
                i.fas.fa-angle-right
                | Inteligencia viso-espacial (Capacidad de poder percibir el mundo y poder crear imágenes).
              li 
                i.fas.fa-angle-right
                | Inteligencia musical.
              li 
                i.fas.fa-angle-right
                | Inteligencia kinestésico-corporal (Capacidad de desarrollar habilidades físicas-deportistas).
              li 
                i.fas.fa-angle-right
                | Inteligencia intrapersonal (Capacidad de gestionar sus propias emociones).
              li 
                i.fas.fa-angle-right
                | Inteligencia interpersonal (Capacidad de comprender a los demás).
              li 
                i.fas.fa-angle-right
                | Inteligencia naturalista (Capacidad de interpretar su entorno).
          .col-5.d-none.d-lg-flex.px-5
            figure  
              img(src='@/assets/template/tema-2-12.svg', alt='Texto que describa la imagen').px-3            
      .py-4.py-md-5(titulo="Habilidades duras y Habilidades blandas" :icono="require('@/assets/template/tema-2-6.svg')")
        .row
          .col-12.col-lg-7
            .h3 Habilidades duras y Habilidades blandas
            .row.mt-3
              .col-6
                .h4 Habilidades duras
                ul.lista-ul.mt-3
                  li 
                    i.fas.fa-angle-right
                    | Lectoescritura
                  li 
                    i.fas.fa-angle-right
                    | Habilidad numérica
                  li 
                    i.fas.fa-angle-right
                    | Conocimiento científico
                  li 
                    i.fas.fa-angle-right
                    | TIC
                  li 
                    i.fas.fa-angle-right
                    | Conocimiento financiero
                  li 
                    i.fas.fa-angle-right
                    | Cultura y cívica
                  li 
                    i.fas.fa-angle-right
                    | Pensamiento crítico
                  li 
                    i.fas.fa-angle-right
                    | Solución de problemas
              .col-6
                .h4 Habilidades blandas
                ul.lista-ul.mt-3
                  li 
                    i.fas.fa-angle-right
                    | Curiosidad 
                  li 
                    i.fas.fa-angle-right
                    | Liderazgo
                  li 
                    i.fas.fa-angle-right
                    | Persistencia
                  li 
                    i.fas.fa-angle-right
                    | Adaptabilidad
                  li 
                    i.fas.fa-angle-right
                    | Persistencia
                  li 
                    i.fas.fa-angle-right
                    | Conciencia social y cultural
                  li 
                    i.fas.fa-angle-right
                    | Colaboración
                  li 
                    i.fas.fa-angle-right
                    | Creatividad
          .col-5.d-none.d-lg-flex.px-5
            figure  
              img(src='@/assets/template/tema-2-13.svg', alt='Texto que describa la imagen').px-3            
      .py-4.py-md-5(titulo="Habilidades del siglo XXI" :icono="require('@/assets/template/tema-2-7.svg')")
        .row
          .col-12.col-lg-7
            .h3 Habilidades del siglo XXI
            p.mt-3 De acuerdo con Villanueva (2010), los estudiantes del siglo XXI deben formarse en habilidades para vivir en una sociedad cada vez más alfabetizada en el uso de las tecnologías y sobresalir en un mercado laboral cada vez más saturado. 
            p.mt-3 Actualmente, la demanda de instructores y aprendices que desarrollen una serie de habilidades y competencias es necesaria para lograr la transformación efectiva de la sociedad a desarrollos económicos sostenibles y amigables con el planeta.
          .col-5.d-none.d-lg-flex.px-5
            figure  
              img(src='@/assets/template/tema-2-14.svg', alt='Texto que describa la imagen').px-3            
      .py-4.py-md-5(titulo="Acciones mediadas por principios y valores" :icono="require('@/assets/template/tema-2-8.svg')")
        .row
          .col-12.col-lg-7
            .h3 Acciones mediadas por principios y valores
            p.mt-3 Estas nuevas habilidades requieren que las formas en que se ha venido entendiendo la educación cambien, incorporando acciones mediadas por los principios y valores, pero también con los nuevos sistemas de comunicación e información, que permitan la adaptación basada en las condiciones que manifiesta la sociedad actualmente.
          .col-5.d-none.d-lg-flex.px-5
            figure  
              img(src='@/assets/template/tema-2-15.svg', alt='Texto que describa la imagen').px-3            
    .row.mt-5(data-aos="zoom-in")
      .col-10.offset-1
        .bloque-texto-g.color-primario.p-3.p-sm-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-2-16.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Desde esta mirada, los equipos de desarrollo curricular del SENA deben garantizar que los diseños curriculares incluyan el desarrollo de los resultados de aprendizaje de acuerdo con las competencias que establece la Clasificación Nacional de Ocupaciones y el Marco Nacional de Ocupaciones, garantizando egresados con competencias que les permitan resolver problemas de su vida cotidiana y su entorno laboral, con postura crítica, con el dominio de una segunda lengua de manera técnica, que logre generar mayor competitividad al país para la incursión en mercados internacionales, como lo puede observar en el siguiente mapa:
    figure.mt-5
      img(src='@/assets/template/tema-2-17.png', alt='Texto que describa la imagen').px-3            
      
    .titulo-segundo.mt-5.color-primario
      #t_2_1.h2 2.1  Metodologías activas 
    .row.mt-5.zoom-in(data-aos="fade")
      .col-12.col-lg-7
        p.mb-3 Las metodologías activas, aunque resuenan con mucha fuerza ahora en el siglo XXI, la verdad es que surgieron en el siglo XIX, con la aparición del movimiento de renovación educativa 
        .cajon.color-secundario.p-3
          .bloque-texto-b.color-acento-botones.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h3.mb-0 Escuela Nueva’ o ‘Nueva Educación’, creado por el pedagogo suizo Adolphe Ferrière, quien propuso un cambio en la escuela tradicional y planteó la enseñanza en una escuela para la vida, es decir, que los aprendices son el centro del proceso de enseñanza-aprendizaje, los convierte en sujetos activos del proceso, buscando que adquieran los conocimientos de manera autónoma y significativa y garantizando su vinculación a la vida laboral activa.
              i.fas.fa-quote-right
      .col-6.col-lg-5.offset-3.offset-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-2-18.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-5.d-none.d-lg-flex.align-self-center
        figure  
          img(src='@/assets/template/tema-2-19.png', alt='Texto que describa la imagen').px-2.floating
      .col-12.col-lg-7
        p Durante el siglo XX y el XXI, se ha venido profundizando en esta propuesta (Guerra et al., 2019) por un aprendizaje basado en competencias, que busca que el estudiante tenga más participación activa en sus procesos formativos, haciéndolo partícipe de su evolución formativa y que su aprendizaje sea continuo en todas las actividades que desarrolle. Estos cambios que se proponen en la manera de enseñar han impulsado a los instructores a la adaptación y al cambio en las metodologías tradicionales por otras más atractivas a las necesidades e inquietudes de los aprendices.
        p.mt-3 De acuerdo con Baro (2011), cuando los aprendices usan metodologías activas para el aprendizaje, llegan a experimentar un aprendizaje significativo, a partir de cualquier contenido facilitado por el instructor y al que pueda dotar de significado. Revise, en la siguiente figura, las principales características de las metodologías activas:
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 4
          p.mt-2.text-small Características de las metodologías activas
    .row.mt-5(data-aos="zoom-out")
      .col-10.offset-1.position-relative.d-none.d-lg-flex
        figure
          img(src='@/assets/template/tema-2-20.png', alt='Texto que describa la imagen')
        .col-3.position-absolute.bg-naranja.right.text-white(style='left:70%; top:-5%').p-3
          .h4 ¿Cómo enseñar?
          p.text-small.mt-2 Facilitar y presentar los materiales de manera que se fomente el aprendizaje por descubrimiento.
        .col-3.position-absolute.bg-naranja.right.text-white(style='left:70%; top:60%').p-3
          .h4 ¿Dónde enseñar?
          p.text-small.mt-2 Cualquier espacio con estímulos que fomenten el aprendizaje Espacios que ayuden a conseguir los objetivos propuestos de manera satisfactoria.
        .col-3.position-absolute.bg-naranja.left.text-white(style='left:3%; top:60%').p-3
          .h4 ¿Cuándo enseñar?
          p.text-small.mt-2 Apostar por la flexibilidad de tiempos de aprendizaje.
          p.text-small.mt-2 Se deben tener en cuenta los ritmos de aprendizaje de los aprendices.
        .col-3.position-absolute.bg-naranja.left.text-white(style='left:3%; top:-5%').p-3
          .h4 ¿Qué enseñar?
          p.text-small.mt-2 Contenidos basados en aprendizajes significativos.
          p.text-small.mt-2 Presentar contenidos de forma variada y atractiva. 
      .col-10.offset-1.d-flex.d-lg-none
        .h3 METODOLOGÍAS ACTIVAS
        .h4.mt-3 ¿Cómo enseñar?
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | Facilitar y presentar los materiales de manera que se fomente el aprendizaje por descubrimiento
          li 
            i.fas.fa-angle-right
            p Cualquier espacio con estímulos que fomenten el aprendizaje Espacios que ayuden a conseguir los objetivos propuestos de manera satisfactoria
            p Espacios que ayuden a conseguir los objetivos propuestos de manera satisfactoria
          li 
            i.fas.fa-angle-right
            p Apostar por la flexibilidad de tiempos de aprendizaje
            p.mt-2 Se deben tener en cuenta los ritmos de aprendizaje de los aprendices
          li 
            i.fas.fa-angle-right
            p #[strong Contenidos] Basados en aprendizajes significativos
            p.mt-2 #[strong Presentar] Contenidos de forma variada y atractiva
    p.mt-5 Existen diferentes tipos de metodologías activas, entre las que se pueden encontrar el Aprendizaje Basado en Problemas o Proyectos (ABP), el Aprendizaje Basado en Lecciones (ABL) o Retos, entre otros.
    .h3.mt-3 Aprendizajes ABP, ABL, ABC, ABR
    .row.mt-4
      .col-5.d-none.d-lg-flex.align-self-center
        figure  
          img(src='@/assets/template/tema-2-21.png', alt='Texto que describa la imagen').px-2.floating
      .col-12.col-lg-7
        p El enfoque por competencias exige, a quienes median el proceso aprendizaje, ser innovadores en el diseño y la operacionalización de situaciones didácticas. Es decir, se deben establecer metodologías que garanticen el protagonismo del aprendiz en el aprendizaje; haciendo que este sea más autónomo y participativo. En ese sentido, se debe considerar el fomento del trabajo en equipo e incentivar procesos competenciales de nivel superior, como el sentido crítico e innovador, dejando a un lado los procesos memorísticos o de repetición de los contenidos.
        p.mt-3 Entre las principales metodologías de este tipo, se encuentran el aprendizaje basado en proyectos, el aprendizaje basado en la resolución de problemas y el aprendizaje a través de la técnica de casos.
    .h3 Aprendizaje Basado en Proyectos (ABP)
    .row.mt-5
      .col-12.col-lg-7
        p El aprendizaje basado en proyectos ha sido influenciado por la teoría del aprendizaje constructivista, mirada filosófica del conocimiento como una construcción individual a través de la interacción con el ambiente y se desarrolla socialmente. 
        .cajon.color-secundario.p-3.mt-3 
          p Es una metodología sistemática, que compromete a los aprendices en el aprendizaje de conocimientos y habilidades a través de un proceso de investigación estructurada sobre preguntas complejas, reales y tareas y productos diseñados (Martí et al., 2010; Villar, 2013). 
        p.mt-3 En el siguiente mapa, puede revisar la implicación de tareas que sugiere la metodología del aprendizaje basado en proyectos, tanto para el aprendiz como para el instructor:
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-22.png', alt='Texto que describa la imagen').floating
      .col-10.offset-1.mt-5
        .titulo-sexto.color-secundario
          h5 Figura 5
          p.mt-2.text-small.italic Aprendizaje Basado en Proyectos
    figure.mt-4(data-aos="zoom-in")
      img(src='@/assets/template/tema-2-23.png', alt='Texto que describa la imagen')
    .row.mt-5(data-aos="slide-right")
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5.bg-amarillo-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/tema-2-24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-rojo Documento GFPI-AN-006
                  p.text-small.text-sistema En el #[strong.text-sistema Anexo Guia sobre estrategia aprendizaje basado en proyectos], puede ampliar la información sobre esta estrategia. Revíselo.  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Guia_sobre_estrategia_aprendizaje_basado_en_proyectos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .row.mt-5.bg-amarillo-claro.p-5
      .col-12.col-lg-8.align-self-center        
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | Definición de un proyecto central.
          li 
            i.fas.fa-angle-right
            | Focalización en habilidades y conocimientos importantes a partir del constructivismo.
          li 
            i.fas.fa-angle-right
            | Actividades dirigidas por preguntas, problemas o retos.
        p.mt-4 Cabe precisar que el proyecto está fundamentado en un auténtico problema de la vida real o del sector productivo #[strong (Barron y Darling-Hammond, 2008)] y promueve el conflicto cognitivo como un  estímulo para alcanzar las metas de aprendizaje. El estímulo provee la activación de sus experiencias personales, razón a través de la cual el aprendiz se compromete en el ambiente de aprendizaje y en la comprensión, y así eventualmente el aprendiz adquiere y fortalece competencias #[strong (Villar, 2013).]
      .col-4.offset-4.offset-lg-0.px-4.align-self-center
        figure
          img(src='@/assets/template/tema-2-25.svg', alt='Texto que describa la imagen').floating
    p.mt-5 Siendo así, en el siguiente recurso se describen las fases o etapas de implementación de la estrategia:
    .row.mt-5(data-aos="flip-left")
      .col-12.col-md-10.col-lg-8.offset-0.offset-md-1.offset-lg-2
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-2-26.png', alt='Texto que describa la imagen')

          .tarjeta.p-3(x="20%" y="18%" numero="").bg-gris-claro
            .h5.mb-2 Retroalimentación y evaluación
            p La retroalimentación y la evaluación del proceso son constantes a lo largo del desarrollo del proyecto.  

          .tarjeta.p-3(x="50%" y="5%" numero="").bg-gris-claro
            .h5.mb-2 Motivación: resultados de aprendizaje
            p Inicia con la motivación hacia el contenido de aprendizaje, enunciando de forma explícita qué se espera de los estudiantes durante el proceso.
            
          .tarjeta.p-3(x="78%" y="17%" numero="").bg-gris-claro
            .h5.mb-2 Formulación de la (s) pregunta (s) 
            p El segundo momento será la formulación de preguntas que activen la curiosidad y el deseo de los estudiantes por resolverlas a través de un proyecto.
          
          .tarjeta.p-3(x="90%" y="45%" numero="").bg-gris-claro
            .h5.mb-2 Propósito (s) y diseño del plan
            p El tercer momento es la definición conjunta de los propósitos del proyecto, que permitan responder las preguntas, y el diseño de plan.

          .tarjeta.p-3(x="78.5%" y="74%" numero="").bg-gris-claro
            .h5.mb-2 Mapa del proceso
            p Seguidamente, con la orientación del instructor, los aprendices elaboran una visualización gráfica, que sirve de mapa del proceso que llevarán a cabo para dar respuesta a las preguntas que originaron el proyecto. En esta etapa, las tecnologías son una herramienta útil para ilustrar la globalidad del proyecto, dado la diversidad de formatos que tiene.
          .tarjeta.p-3(x="50%" y="86%" numero="").bg-gris-claro
            .h5.mb-2 Ejecución de actividades
            p Después, se lleva a cabo la etapa de la ejecución de las actividades, precisando las tareas que abordarán los aprendices para el desarrollo del proyecto.

          .tarjeta.p-3(x="21.5%" y="74%" numero="").bg-gris-claro
            .h5.mb-2 Análisis de resultados
            p Una vez recopilada la información y desarrollado los objetivos, los aprendices deben realizar el tratamiento de la misma, a través de técnicas que permitan extraer conclusiones.

          .tarjeta.p-3(x="10%" y="45%" numero="").bg-gris-claro
            .h5.mb-2 Conclusiones
            p   Por último, la descripción de las conclusiones para la solución de las preguntas inicialmente formuladas.


    .row.mt-5.bg-amarillo-claro.p-5
      .col-4.offset-4.offset-lg-0.px-4.align-self-center
        figure
          img(src='@/assets/template/tema-2-27.svg', alt='Texto que describa la imagen').floating
      .col-12.col-lg-8.align-self-center
        p Por otra parte, de acuerdo con Martí et al. (2010), se precisa que el Aprendizaje Basado en Proyectos promueve:
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | Mejorar la habilidad para resolver problemas y desarrollar tareas complejas.
          li 
            i.fas.fa-angle-right
            | Mejorar la capacidad de trabajar en equipo.
          li 
            i.fas.fa-angle-right
            | Desarrollar las capacidades mentales de orden superior.
          li 
            i.fas.fa-angle-right
            | Aumentar el conocimiento y habilidad en el uso de las TIC en un ambiente de proyectos.
          li 
            i.fas.fa-angle-right
            | Promover una mayor responsabilidad en el aprendizaje propio.
        p.mt-4 En conclusión, con la estrategia metodológica del Aprendizaje Basado en Proyectos, los aprendices responden a una pregunta y son guiados a través de un proceso de investigación bajo la supervisión del instructor (Bell, 2010). Es una estrategia que privilegia en los aprendices:
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | La independencia y motivación hacia el aprendizaje.
          li 
            i.fas.fa-angle-right
            | La resolución de problemas del mundo real a través de sus propias investigaciones.
          li 
            i.fas.fa-angle-right
            | La planeación, organización e implementación de estrategias para el desarrollo de los objetivos.
          li 
            i.fas.fa-angle-right
            | La mejora de habilidades metacognitivas como la responsabilidad y la disciplina.
          li 
            i.fas.fa-angle-right
            | El fortalecimiento de la autoevaluación y el automonitoreo, a través de la revisión diaria de la agenda de trabajo.
          li 
            i.fas.fa-angle-right
            | El uso efectivo del tiempo de trabajo enfocado en sus propias tareas, para el alcance de las metas de aprendizaje.
          li 
            i.fas.fa-angle-right
            | El trabajo colaborativo, contribuyendo de forma equitativa a las metas del proyecto (Martí et al., 2010; Villar, 2013).
          li 
            i.fas.fa-angle-right
            | La motivación intrínseca por el contenido de aprendizaje.
          li 
            i.fas.fa-angle-right
            | El uso de la tecnología para mejorar la creatividad con parámetros, usando esta en el proceso investigativo que se debe desarrollar.
          li 
            i.fas.fa-angle-right
            | La generación de ideas con otros, resolver problemas de manera colectiva, la negociación, la creatividad, el éxito de su interacción social; habilidades que se autoevalúan al final del proyecto y que son necesarias en el siglo XXI.
    .row.mt-5(data-aos="fade")
      .col-10.offset-1
        .bloque-texto-g.color-primario.p-3.p-sm-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-2-28.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los estudiantes desarrollan habilidades para el siglo XXI: llegan a ser miembros productivos de la sociedad global; muchas de las habilidades son medibles a través de pruebas estandarizadas. Hay que transformar la manera de pensar con respecto a las evaluaciones para medir las competencias del siglo XXI, por ejemplo, a través de rúbricas (Martí et al., 2010).
    .row.mt-5
      .col-5.d-none.d-lg-flex.align-self-center
        figure  
          img(src='@/assets/template/tema-2-29.png', alt='Texto que describa la imagen').px-2.floating
      .col-12.col-lg-7
        p A continuación, se presenta como ejemplo una plantilla para desarrollar el aprendizaje basado en proyectos con el instrumento llamado CANVAS, que fue diseñado por Osterwalder en la administración de negocios y adaptada por la empresa Conecta13, una empresa basada en el conocimiento, que nace como spin-off de la Universidad de Granada, en España. Esta metodología, utilizada en el mundo de la planeación de negocios, ha sido adaptada al ambiente educativo, buscando brindar herramientas técnico-administrativas al desarrollo didáctico en el desarrollo de proyectos educativos.
        p.mt-3 La herramienta CANVAS permite que los participantes se acerquen a una sesión donde todos aportan desde sus ideas. El resultado de esto es un prototipo de proyecto de aula:
      .col-10.offset-1.mt-5
        .titulo-sexto.color-secundario
          h5 Figura 6
          p.mt-2.text-small.italic Matriz Canvas para la implementación de la estrategia de proyectos de aula
    .row.justify-content-center.circle-flip(data-aos="zoom-in")
      .col-lg-12
        .row.text-white
          .col-10.col-md-6.col-lg-4.offset-1.offset-md-0
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-45.png' alt='AvatarTop').img2.mt-5.mt-md-0
              img(src='@/assets/template/tema-2-36.svg' alt='AvatarTop').img1.mt-5.mt-md-0
              .row.tarjeta.color-naranja3.w-100.position-absolute.bg-blanco.pt-1.align-items-center.d-flex.mt-lg-3
                .text-center
                  h3.text-center.mb-0 COMPETENCIAS 
                  h3.text-center.mb-0 CLAVE
              .tarjeta.color-naranja.w-100.position-absolute.pt-0.align-items-center.d-flex
                .row.text-center.px-3
                  p ¿Qué competencias claves desarrollas con tus estudiantes?
          .col-10.col-md-6.col-lg-4.offset-1.offset-md-0.mt-5.mt-md-0
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative.mt-5.mt-md-0
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-46.png' alt='AvatarTop').img2.mt-5.mt-md-0
              img(src='@/assets/template/tema-2-37.svg' alt='AvatarTop').img1.mt-5.mt-md-0
              .row.tarjeta.color-naranja3.w-100.position-absolute.bg-blanco.pt-1.align-items-center.d-flex.mt-lg-3
                .text-center
                  h3.text-center.mb-0 ESTÁNDARES 
                  h3.text-center.mb-0 DE APRENDIZAJE
              .tarjeta.color-naranja.w-100.position-absolute.pt-0.align-items-center.d-flex
                .row.text-center.px-3
                  p ¿Con qué estándares de aprendizaje evaluables del currículo oficial podemos relacionar los aprendizajes adquiridos?
          .col-10.col-md-6.col-lg-4.offset-1.offset-md-0.mt-5.mt-md-5.mt-lg-0
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative.mt-5.mt-lg-0
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-47.png' alt='AvatarTop').img2.mt-5.mt-md-0
              img(src='@/assets/template/tema-2-38.svg' alt='AvatarTop').img1.mt-5.mt-md-0
              .row.tarjeta.color-naranja3.w-100.position-absolute.bg-blanco.pt-1.align-items-center.d-flex.mt-lg-3
                .text-center
                  h3.text-center.mb-0 MÉTODOS
                  h3.text-center.mb-0 DE EVALUACIÓN
              .tarjeta.color-naranja.w-100.position-absolute.pt-0.align-items-center.d-flex
                .row.text-center.px-3
                  p ¿Qué herramientas y estrategias innovadoras de evaluación vamos a aplicar?
          .col-10.col-md-6.col-lg-4.offset-1.offset-md-0.mt-5.mt-lg-5
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative.mt-5.mt-lg-5
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-48.png' alt='AvatarTop').img2.mt-5.mt-md-0
              img(src='@/assets/template/tema-2-39.svg' alt='AvatarTop').img1.mt-5.mt-md-0
              .row.tarjeta.color-naranja3.w-100.position-absolute.bg-blanco.pt-1.align-items-center.d-flex
                .text-center
                  h3.text-center.mb-0 PRODUCTO 
                  h3.text-center.mb-0 FINAL
              .tarjeta.color-naranja.w-100.position-absolute.pt-0.align-items-center.d-flex
                .row.text-center.px-3
                  p ¿Qué queremos conseguir?
                  p ¿Qué reto queremos resolver?
                  p ¿A qué problema queremos dar solución?

          .col-10.col-md-6.col-lg-4.offset-1.offset-md-0.mt-5.mt-lg-5
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative.mt-5.mt-lg-5
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-49.png' alt='AvatarTop').img2.mt-5.mt-md-0
              img(src='@/assets/template/tema-2-40.svg' alt='AvatarTop').img1.mt-5.mt-md-0
              .row.tarjeta.color-naranja3.w-100.position-absolute.bg-blanco.pt-1.align-items-center.d-flex
                .text-center
                  h3.text-center.mb-0 TAREAS
              .tarjeta.color-naranja.w-100.position-absolute.pt-0.align-items-center.d-flex
                .row.text-center.px-3
                  p ¿Qué tenemos que hacer para alcanzar el producto final?
          .col-10.col-md-6.col-lg-4.offset-1.offset-md-0.mt-5.mt-lg-5
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative.mt-5.mt-lg-5
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-50.png' alt='AvatarTop').img2.mt-5.mt-md-0
              img(src='@/assets/template/tema-2-41.svg' alt='AvatarTop').img1.mt-5.mt-md-0
              .row.tarjeta.color-naranja3.w-100.position-absolute.bg-blanco.pt-1.align-items-center.d-flex
                .text-center
                  h3.text-center.mb-0 DIFUSIÓN
              .tarjeta.color-naranja.w-100.position-absolute.pt-0.align-items-center.d-flex
                .row.text-center.px-3
                  p ¿Cómo vamos a difundir nuestro proyecto?
          .col-10.col-md-6.col-lg-4.offset-1.offset-md-0.mt-5.mt-lg-5.last
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative.mt-5.mt-lg-5
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-51.png' alt='AvatarTop').img2.mt-5.mt-md-0.mt-lg-3
              img(src='@/assets/template/tema-2-42.svg' alt='AvatarTop').img1.mt-5.mt-md-0.mt-lg-3
              .row.tarjeta.color-naranja3.w-100.position-absolute.bg-blanco.pt-1.align-items-center.d-flex
                .text-center
                  h3.text-center.mb-0 RECURSOS
              .tarjeta.color-naranja.w-100.position-absolute.pt-0.align-items-center.d-flex
                .row.text-center.px-3
                  p ¿Qué personas deben implicarse: docentes, padres de familia, otros agentes educativos?
                  p ¿Qué otros materiales son necesarios?
                  p  ¿Es necesario algún tipo de instalación especial?
          .col-10.col-md-6.col-lg-4.offset-1.offset-md-0.mt-5.mt-lg-5.last
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative.mt-5.mt-lg-5
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-52.png' alt='AvatarTop').img2.mt-5.mt-md-0.mt-lg-3
              img(src='@/assets/template/tema-2-43.svg' alt='AvatarTop').img1.mt-5.mt-md-0.mt-lg-3
              .row.tarjeta.color-naranja3.w-100.position-absolute.bg-blanco.pt-1.align-items-center.d-flex
                .text-center
                  h3.text-center.mb-0 HERRAMIENTAS 
                  h3.text-center.mb-0 TIC
              .tarjeta.color-naranja.w-100.position-absolute.pt-0.align-items-center.d-flex
                .row.text-center.px-3
                  p ¿Qué apps y herramientas TIC necesitamos?
                  p ¿Qué servicios web vamos a usar?
                  p ¿Podemos vincularnos con las tareas?

          .col-10.col-md-6.col-lg-4.offset-1.offset-md-0.mt-5.mt-lg-5.last
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative.mt-5.mt-lg-5
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-53.png' alt='AvatarTop').img2.mt-5.mt-md-0.mt-lg-3
              img(src='@/assets/template/tema-2-44.svg' alt='AvatarTop').img1.mt-5.mt-md-0.mt-lg-3
              .row.tarjeta.color-naranja3.w-100.position-absolute.bg-blanco.pt-1.align-items-center.d-flex
                .text-center
                  h3.text-center.mb-0 AGRUPAMIENTOS / 
                  h3.text-center.mb-0 ORGANIZACIÓN
              .tarjeta.color-naranja.w-100.position-absolute.pt-0.align-items-center.d-flex
                .row.text-center.px-3
                  p ¿Cómo se van a agrupar los estudiantes?
                  p ¿Cómo vamos a organizar el aula?

    figcaption Referencia Nota. Tomada de Conecta13
    .row.mt-5
      .col-5.d-none.d-lg-flex.align-self-center
        figure  
          img(src='@/assets/template/tema-2-54.png', alt='Texto que describa la imagen').px-2.floating
      .col-12.col-lg-7
        p Como se puede observar en la figura anterior, el CANVAS está organizado en tres columnas. En el centro, se define la base del proyecto: el producto final, las tareas que permiten llegar a ese producto y cómo se realizará la difusión del mismo. A partir de aquí, en la columna izquierda, recogemos la relación entre el proyecto de aprendizaje y el currículo, a través de las competencias claves y los estándares de aprendizaje, además de definir uno de los pilares fundamentales de un buen proyecto, la evaluación, entendida siempre como un proceso constante de toma de datos para poder regular el aprendizaje. Finalmente, en la columna de la derecha definimos con precisión la estructura del proyecto, a través de los recursos necesarios, el uso de las TIC, los agrupamientos y la gestión del aula que contemplamos en el diseño del proyecto de aprendizaje. 
    .row.mt-5(data-aos="slide-right")
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5.bg-amarillo-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/tema-2-24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-rojo Documento GFPI-AN-006
                  p.text-small.text-sistema En el #[strong.text-sistema anexo ejemplo de implementacion aprendizaje basado en proyectos], puede ampliar la información sobre esta estrategia. Revíselo.  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Ejemplo_de_implementacion_Aprendizaje_Basado_en_Proyectos.pdf')" target="_blank")
                    span Descargar
    .h3 Aprendizaje Basado en Problemas
    .row.mt-5
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-55.svg', alt='Texto que describa la imagen').px-3.px-xl-0.floating
      .col-12.col-lg-10
        p El Aprendizaje Basado en Problemas es una aproximación pedagógica que presenta a los aprendices un problema no estructurado que se debe resolver; por lo general, se presenta a través de un estudio de caso. Sus mayores desarrollos han sido en el campo de la enseñanza en el área de la salud #[strong (Castillo, 2003)]. A continuación, se puede revisar un ejemplo de cómo organizarlo.
    .row.mt-5
      .col-12.col-lg-7
        p Un pequeño grupo de apéndices trabaja con el instructor sobre problemas, por periodos cortos de tiempo, alrededor de tres sesiones de clase. En la primera semana, revisan los casos nuevos y analizan los datos con la guía del instructor, toman decisiones sobre qué problema trabajar y distribuyen las tareas para proponer la solución. En la siguiente semana, comparten sus análisis, reciben información adicional del instructor y continúan su investigación. En la última semana, los aprendices traen la conclusión del caso, reúne los análisis colectivos y preparan el informe final. 
        p.mt-3 La diferencia con el Aprendizaje Basado en Proyectos es que, en el basado en problemas, se formulan situaciones problema para ser resueltas en periodos cortos de tiempo y se implementa con pequeños grupos dirigidos por el profesor; en tanto que el ABP se desarrolla en periodos más largos, como semestres, responde a problemas más complejos, no tiene una única solución y usa diversas herramientas digitales y analógicas para desarrollar las alternativas de solución #[strong (Martínez et al., 2017).]
      .col-5.d-none.d-lg-flex.align-self-center
        figure  
          img(src='@/assets/template/tema-2-56.png', alt='Texto que describa la imagen').px-2.floating
    p.mt-5 En la siguiente figura, se muestran las fases que estructuran la estrategia de aprendizaje basado en problemas:
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 7
          p.mt-2.text-small Esquema Aprendizaje Basado en Problemas       
    figure.mt-5(data-aos="zoom-in")
      img(src='@/assets/template/tema-2-57.png', alt='Texto que describa la imagen')
    figcaption.mt-3  Esquema Aprendizaje Basado en Problemas
    .row.mt-5(data-aos="slide-left")
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5.bg-amarillo-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/tema-2-24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-rojo Documento GFPI-AN-006
                  p.text-small.text-sistema En el #[strong.text-sistema Anexo Guia sobre estrategia aprendizaje basado en problemas], puede ampliar la información sobre esta estrategia. Revíselo.  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Guia_sobre_estrategia_aprendizaje_basado_en_problemas.pdf')" target="_blank")
                    span Descargar
    .row.mt-5
      .col-5.d-none.d-lg-flex.align-self-center
        figure  
          img(src='@/assets/template/tema-2-58.png', alt='Texto que describa la imagen').px-2.floating
      .col-12.col-lg-7
        p Con el Aprendizaje Basado en Problemas, los aprendices se enfrentan a problemas complejos, generalmente, de la vida real; para su solución, disponen de una serie de recursos. Es una estrategia para adquirir e integrar conocimiento (Rodríguez et al., 2010). Sus características son:
        ul.lista-ul.mt-4
          li 
            i.fas.fa-angle-right
            | El trabajo se organiza en pequeños grupos colaborativos.
          li 
            i.fas.fa-angle-right
            | El instructor es guía en el proceso.
          li 
            i.fas.fa-angle-right
            | Es necesario la conceptualización previa, que permita la formulación de hipótesis y contextualizar los problemas.
          li 
            i.fas.fa-angle-right
            | El Aprendizaje Basado en Problemas no está condicionado a un proyecto en particular, más bien a problemas asociados a casos prácticos.
          li 
            i.fas.fa-angle-right
            | Los problemas promueven habilidades como la formulación de hipótesis que explican los problemas, identificar qué se necesita aprender, hacer transferencia a la solución de otros problemas.
    .row.mt-5
      .col-12.col-lg-7
        p Existen diferencias significativas en el rendimiento académico al implementar la estrategia de Aprendizaje Basado en Problemas, en relación con el método magistral. Es efectivo el periodo de aplicación en grupos pequeños, es eficaz y eficiente. El Aprendizaje Basado en Problemas mejora:
        ul.lista-ul.mt-4
          li 
            i.fas.fa-angle-right
            | El desempeño académico.
          li 
            i.fas.fa-angle-right
            | Evidencia la adquisición de competencias específicas, como plantear el problema, el orden, la limpieza de los textos en los que se reportan los resultados.
          li 
            i.fas.fa-angle-right
            | Mejora el razonamiento lógico, el pensamiento crítico, las habilidades de colaboración, el compromiso.
          li 
            i.fas.fa-angle-right
            | Integra las tecnologías de manera significativa.
          li 
            i.fas.fa-angle-right
            | Además, mejora el dominio de conocimientos teóricos. Los estudiantes aplican lo que saben a una serie de tareas del mundo real y mejoran las habilidades investigativas. (Bradley-Levine et al., 2010; Martínez et al., 2017; Fernández y Rodríguez-Martín, 2017).
      .col-5.d-none.d-lg-flex.align-self-center
        figure  
          img(src='@/assets/template/tema-2-59.png', alt='Texto que describa la imagen').px-2.floating
    p.mt-5 En el siguiente mapa, puede revisar las características que representa la estrategia, tanto para aprendices como instructor:        
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 8
          p.mt-2.text-small Aprendizaje basado en problemas
    figure.mt-5(data-aos="zoom-in")
      img(src='@/assets/template/tema-2-60.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-61.svg', alt='Texto que describa la imagen').px-3.px-xl-0.floating
      .col-12.col-lg-10
        p Como barreras para implementar el Aprendizaje Basado en Problemas, se registra el consumo de tiempo, el desorden en el salón de clase, los instructores no pueden controlar el flujo de información, cómo equilibrar el apoyo y la promoción de independencia; adicionalmente, cómo incorporar la tecnología como una herramienta cognitiva que favorezca el aprendizaje, así también, el registro de auténticas valoraciones al evaluar el desarrollo del trabajo.
    figure.mt-5
      img(src='@/assets/template/tema-2-62.png', alt='Texto que describa la imagen')
    .h4.mt-5 Aprendizaje Basado en Casos
    p.mt-5 Otra de las metodologías que facilitan el aprendizaje activo es el Aprendizaje Basado en Lecciones o Casos; el cual es una manera de aplicar el Aprendizaje Basado en Problemas. Se fundamenta en la formulación de situaciones-problema específicas de la vida real o del sector productivo, que proporcionan experiencias auténticas de aprendizaje. 
    .row.mt-5
      .col-5.d-none.d-lg-flex.align-self-center.px-5
        figure  
          img(src='@/assets/template/tema-2-63.svg', alt='Texto que describa la imagen').px-2.floating
      .col-12.col-lg-7(data-aos="fade")
        p Esta estrategia se caracteriza por:
        ul.lista-ul.mt-4
          li 
            i.fas.fa-angle-right
            | Las situaciones se abordan a partir de preguntas que formula el profesor, con el objetivo de que el estudiante adquiera conocimiento, habilidades y actitudes. 
          li 
            i.fas.fa-angle-right
            | El instructor, al describir el caso como problema, le proporciona al aprendiz antecedentes, información documental, evidencias fácticas de la existencia del problema, para que los estudiantes lo analicen, discutan y resuelvan.
          li 
            i.fas.fa-angle-right
            | Esta estrategia de aprendizaje activo fomenta la colaboración del aprendiz, la generación de hipótesis, la integración de las actividades de aprendizaje.
          li 
            i.fas.fa-angle-right
            | Motiva el aprendizaje por el contenido de la competencia, la autoevaluación y la reflexión crítica; de esta manera, se individualiza el proceso de acuerdo con los estilos de aprendizaje.
          li 
            i.fas.fa-angle-right
            | Promueve las competencias de investigación al seguir el método científico de indagación de aprendizaje, integra la teoría y la práctica y promueve el desarrollo de habilidades de autoaprendizaje (Williams, 2005).
    p.mt-5 En la siguiente figura, puede revisar los pasos para la implementación del aprendizaje basado en casos, revísela:
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 9
          p.mt-2.text-small Esquema Aprendizaje Basado en Casos 
    .row.justify-content-center(data-aos="fade-down").mt-5.text-white
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-2-64.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-md-4.pt-md-0.mt-lg-3.mt-xl-4
                .h4.small-text.mt-4.mt-lg-0 Paso 1
                ul.lista-ul.mt-4
                  li 
                    i.fas.fa-angle-right
                    | Proceso de elaboración.
                  li 
                    i.fas.fa-angle-right
                    | Especificar objetivos.
                  li 
                    i.fas.fa-angle-right
                    | Búsqueda de información.
                  li 
                    i.fas.fa-angle-right
                    |  Elaboración de preguntas.
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-2-65.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-4.mt-lg-0 Paso 2 
                ul.lista-ul.mt-4
                  li 
                    i.fas.fa-angle-right
                    | Presentación de objetivos.
                  li 
                    i.fas.fa-angle-right
                    | Conformación de Grupos.
                  li 
                    i.fas.fa-angle-right
                    | Presentación del caso.
                  li 
                    i.fas.fa-angle-right
                    | Espacio para inquietudes y guía de análisis.
      .col-10.col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-2-66.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-1.pt-1.mt-1.mt-md-4.mt-lg-3.mt-xl-4.pt-md-0
                .h4.small-text.mt-5.mt-lg-0 Paso 3 
                ul.lista-ul.mt-4
                  li 
                    i.fas.fa-angle-right
                    | Discusión del caso.
                  li 
                    i.fas.fa-angle-right
                    | Debate general guiado por el docente.
                  li 
                    i.fas.fa-angle-right
                    | Adaptación de una solución por consenso y síntesis de las aportaciones realizadas.
    figcaption.mt-3 Referencia Nota. Esta imagen de autor desconocido está bajo licencia CC BY
    p.mt-5 A continuación, puede analizar un ejemplo de implementación de esta técnica.
    p.mt-5 Actividad, paso a paso, de diseño de una actividad Basada en Casos o Lecciones:
    .row.mt-5
      .col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-2-67.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Contexto:
            .h4.mt-3 “Manejo de residuos domésticos”
            p.mt-3 El ciudadano urbano que habita en las grandes ciudades ha perdido la noción y la sensibilidad de saber hacia dónde se van todos los residuos que genera, de manera constante, en el desarrollo de sus actividades cotidianas. Tanto adultos como niños viven aislados del origen, producción y distribución de los productos de uso diario y, asimismo, de su destino final al término de su vida útil o al momento de desecharlos; a esto se le llama analfabetismo tecnológico. Esta actividad busca alfabetizar al ciudadano del común en estos aspectos vitales para su supervivencia y la de las próximas generaciones. Desde la educación STEM, se recomienda trabajar el proyecto con las áreas de ciencias y tecnología.
    p.mt-5 A partir del contexto, se presenta la actividad que se implementó a partir de la pregunta orientadora o problema:
    .row.mt-5.overflow-y-hidden(data-aos="flip-up")
      .col-10.offset-1
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Pregunta esencial ")
            .col-2.px-xl-4.d-none.d-lg-flex
              figure
                img(src='@/assets/template/tema-2-68.svg', alt='Texto que describa la imagen')
            .col-12.col-lg-9
              p ¿Qué pasa con los desechos que pongo en el bote de la basura?z
          .row(numero="2" titulo="Objetivos de aprendizaje")
            .col-2.px-xl-4.d-none.d-lg-flex
              figure
                img(src='@/assets/template/tema-2-69.svg', alt='Texto que describa la imagen')
            .col-12.col-lg-9
              p Conocer el destino final de los productos perecederos y no perecederos y comprender que el reciclaje es un problema de orden mundial, ya que el hombre sigue produciendo muchos artefactos que tienen periodos de durabilidad demasiado largos para su descomposición, afectando a los habitantes de una ciudad o región. Conocer los procesos químicos que ocurren con la descomposición de los materiales; en el caso de los artefactos tecnológicos, son construidos con un tiempo demasiado largo para su descomposición, lo que genera grandes volúmenes de desechos tecnológicos, sin que las industrias productoras tomen responsabilidad con el medio ambiente. Conocer el destino final de la basura, lugares de acopio y sus mantenimientos; diferenciación entre los residuos caseros, industriales, hospitalarios y de construcción, ya que cada uno tiene exigencias muy diferentes para su destino final.
          .row(numero="3" titulo="Conceptos previos")
            .col-2.px-xl-4.d-none.d-lg-flex
              figure
                img(src='@/assets/template/tema-2-70.svg', alt='Texto que describa la imagen')
            .col-12.col-lg-9
              p Es importante que los estudiantes puedan establecer las diferencias entre un producto perecedero y no perecedero, y conocer por qué y cómo se descomponen, o no, los diferentes materiales de que están hechos.
          .row(numero="4" titulo="Nuevos conceptos fundamentales")
            .col-2.px-xl-4.d-none.d-lg-flex
              figure
                img(src='@/assets/template/tema-2-71.svg', alt='Texto que describa la imagen')
            .col-12.col-lg-9
              p Conocer que los problemas medioambientales son los de mayor importancia para el planeta; los estudiantes deben conocer las problemáticas que existen a nivel mundial, regional y local sobre la disposición final de los residuos de todo tipo.
          .row(numero="5" titulo="Resultados")
            .col-2.px-xl-4.d-none.d-lg-flex
              figure
                img(src='@/assets/template/tema-2-72.svg', alt='Texto que describa la imagen')
            .col-12.col-lg-9
              p Son muchos los resultados que puede generar este proyecto, por ejemplo, una presentación o esquema, un video interactivo o un escrito tipo monografía; pero podrían ser presentaciones de soluciones reales para ser presentadas a la alcaldía o la gobernación; o podría ser una solución conjunta presentada por estudiantes de diferentes grados para ser presentada, por ejemplo, al sector privado que observa en la solución propuesta una nueva unidad de emprendimiento.
          .row(numero="6" titulo="Asignaturas integradas")
            .col-2.px-xl-4.d-none.d-lg-flex
              figure
                img(src='@/assets/template/tema-2-73.svg', alt='Texto que describa la imagen')
            .col-12.col-lg-9
              p Ciencias, Tecnología, Ingeniería, Matemáticas, Humanidades - Lenguaje, Artes.
    .row.mt-5(data-aos="slide-right")
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5.bg-amarillo-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/template/tema-2-24.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-sistema Estrategia aprendizaje basado en casos
                  p.text-small.text-sistema Finalmente, en el #[strong.text-sistema Anexo Guia sobre estrategia aprendizaje basado en casos], puede ampliar la información sobre esta estrategia. Revíselo.  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Anexo_Guia_sobre_estrategia_aprendizaje_basado_en_casos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .row.mt-5.bg-amarillo-claro.p-5
      .col-12.col-lg-7.align-self-center
        p.mt-3 También se cuenta como una metodología de aprendizaje activo, la cual se caracteriza por:
        ul.lista-ul.mt-4
          li 
            i.fas.fa-angle-right
            | Generar motivación en los aprendices para usar la tecnología para resolver problemas de la vida real y comprometerse en aproximaciones multidisciplinarias para enseñar y aprender en un amplio periodo de tiempo.
          li 
            i.fas.fa-angle-right
            | Enfocarse en desafíos globales con soluciones locales. Para la solución de problemas reales, es necesario integrar conocimientos de diversas áreas.
          li 
            i.fas.fa-angle-right
            | Proveer a los aprendices de diferentes herramientas necesarias para resolver el reto. La misión aumenta el nivel de dificultad a medida que el tiempo avanza (Villar, 2013).
          li 
            i.fas.fa-angle-right
            | Usar las tecnologías para el planteamiento del reto, aumentando el nivel de complejidad a medida que avanzan en la solución.
          li 
            i.fas.fa-angle-right
            | Diseñar los retos con el objetivo de que los aprendices adquirieran conocimientos y competencias profesionales.
          li 
            i.fas.fa-angle-right
            | La participación de los estudiantes en torno al análisis del reto, la planeación de las actividades y el esquema de acciones a desarrollar, y lograr la posibilidad de interactuar en escenarios reales de desempeño laboral.
          li 
            i.fas.fa-angle-right
            | Realizar innovaciones a las acciones y, por último, comparar sus resultados con otros grupos.
      .col-4.col-lg-5.offset-4.offset-lg-0.px-4.align-self-center
        figure
          img(src='@/assets/template/tema-2-74.svg', alt='Texto que describa la imagen').floating
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-g.color-primario.p-3.p-sm-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-2-75.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El Aprendizaje Basado en Retos es una estrategia apropiada para la enseñanza en el área de ingeniería y afines; en particular, en situaciones de impacto global, como el desarrollo sostenible o el cambio climático, permite a los estudiantes proponer soluciones innovadoras y hacer transferencia de conocimiento a contextos reales. A partir de esta estrategia, los aprendices desarrollan habilidades y competencias profesionales, enfrentándose a situaciones reales #[strong (Membrillo-Hernández et al., 2018; Olivares et al., 2018).]
    
    








</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.left, .right
  opacity: 0
  transition: all 800ms
.col-10.offset-1.position-relative:hover .left, .col-10.offset-1.position-relative:hover .right
  opacity: 1
  transition: all 800ms
.col-10.offset-1.position-relative:hover .right
  transform: translatex(40%)
.col-10.offset-1.position-relative:hover .left
  transform: translatex(-40%)
.left
  top: -10.6rem
.left::before
  content: " "
  display: block
  position: absolute
  background-color: #FF6B00
  top: 50%
  left: 93%
  width: 20px
  height: 20px
  transform: translate(5px,-50%) rotate(45deg)
.right
  top: 5rem
.right::before
  content: " "
  display: block
  position: absolute
  background-color: #FF6B00
  top: 50%
  left: -6%
  width: 20px
  height: 20px
  transform: translate(5px,-50%) rotate(45deg)

.tarjeta-avatar
  padding-top: 180px
.tarjeta-avatar .tarjeta
  padding-top: 20px !important
.tarjeta-avatar .color-naranja3
  background-color: #592198 !important
  height: 80%
  opacity: 1
  transition: opacity (0.5s)
.tarjeta-avatar .color-naranja
  opacity: 0
  height: 80%
  background-color: #592198
  transition: opacity (0.5s)
  transition: transform (0.5s)
.tarjeta-avatar:hover .color-naranja
  opacity: 1
  transition: opacity (0.5s)
  transition: transform (0.5s)
.tarjeta-avatar .img1
  opacity: 1
  transition: opacity (0.5s)
.tarjeta-avatar:hover .img1
    opacity: 0
.tarjeta-avatar:hover .img2
    opacity: 1
.tarjeta-avatar:hover .color-naranja3
  background-color: #E8E8E8
  opacity:
  transition: opacity (0.5s)
  transition: transform (0.5s)
.tarjeta-avatar .img2
  transition: opacity (0.5s)
  transition: transform (0.5s)
  opacity: 0
.tarjeta-avatar:hover .img2
  opacity: 1
.color-naranja2
  background-color: #fff1db
.color-naranja3
  background-color: #FFD494
.color-naranja4
  background-color: #FFE9CB
.color-naranja5
  background-color: #FFB74D
.redondeado
  border-radius: 15px
.bloque-texto-b .comilla-inicial i
  color: $color-sistema-texto
  display: flex
  justify-content: center
  align-content: flex-start
  position: absolute
  margin-top: -10px
.bloque-texto-b .comilla-final i
  color: $color-sistema-texto
  display: flex
  align-content: flex-end
  flex-wrap: wrap
  justify-content: center
  position: absolute
  bottom: -10px
.bloque-texto-b i
  font-size: 2.0em
.tarjeta-avatar img
  z-index: 2
  width: 65%
  top: 10%
  left: 47%
@media (max-width: 768px)
  .tarjeta-avatar img
    width: 45% !important
  .circle-flip
    height: 2600px !important
@media (min-width: 768px) and (max-width: 992px)
  .circle-flip
    height: 1450px !important
  .img2, .img1
    margin-top: 2rem !important
@media (min-width: 1200px)
  .tarjeta-avatar img
    width: 45% !important
    margin-top: 3rem !important
  .last
    margin-top: 4rem !important
  .circle-flip
    height: 950px !important
@media (min-width: 992px) and (max-width: 1200px)
  .tarjeta-avatar img
    width: 50% !important
    margin-top: 6rem !important
  .circle-flip
    height: 900px !important

.overflow-y-hidden
  overflow-y: hidden !important
</style>
