<template lang="pug">
.curso-main-container.pb-3
  BannerInterno 
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Estrategias didácticas
    .row.mt-5
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-1.svg', alt='Texto que describa la imagen').px-3.px-xl-0.floating
      .col-12.col-lg-10
        p En el proceso de la formación, las estrategias didácticas se conciben como los procedimientos, métodos, técnicas, actividades, secuencias y recursos que desarrollan los instructores y los aprendices para organizar las acciones del proceso formativo de manera consciente, con el fin de construir y lograr metas previstas e imprevistas en el proceso de enseñanza-aprendizaje, adaptando a los participantes de manera colaborativa y significativa #[strong (Vilchez, 2021).]
      .col-10.offset-1.mt-4
        .titulo-sexto.color-primario
          h5 Figura 1
          p.mt-2.text-small Estrategias didácticas
    .row.mt-4
      .col-10.col-md-8.col-lg-6.offset-1.offset-md-2.offset-lg-3
        figure
          img(src='@/assets/template/tema-1-2.png', alt='Texto que describa la imagen')
    
    .titulo-segundo.mt-5.color-primario
      #t_1_1.h2 1.1  Métodos didácticos
    .row.mt-5.zoom-in(data-aos="flip-up")
      .col-12.col-lg-7
        .cajon.color-secundario.p-3.mb-4
          .bloque-texto-b.color-acento-botones.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h3.mb-0 La tarea del profesor es la enseñanza, desempeñada en un marco institucional, filtrada siempre por algún tipo de teoría explícita o implícita, desarrollada en el marco de un currículo, dirigida al mayor crecimiento educativo de los sujetos. Esa es la meta a la que debe orientarse la formación del profesorado.
              i.fas.fa-quote-right
        p.mt-4 Son aplicados por el instructor en el proceso de formación y responden a la pregunta ¿Cómo organizar e impartir la instrucción?, para lograr el aprendizaje. A continuación, se presentan los principales métodos de enseñanza que se utilizan; pero es importante aclarar que existen muchos más de acuerdo con las disciplinas y campos de conocimiento:
      .col-6.col-lg-5.offset-3.offset-lg-0.align-self-center.mb-5
        figure
          img(src='@/assets/template/tema-1-3.png', alt='Texto que describa la imagen')
      .col-10.offset-1.mt-4
        .titulo-sexto.color-primario
          h5 Figura 2
          p.mt-2.text-small Métodos de enseñanza
    .row.mt-5.translate-hover.d-none.d-lg-flex
      .col-2.rounded-15.px-4.py-1.border-naranja.text-center.text-small.d-flex.align-items-center.mx-1.w-15-7.position-relative
        p Por el proceso de #[strong RAZONAMIENTO]
        .position-absolute.img-position.translate-down
          figure
            img(src='@/assets/template/tema-1-4.svg', alt='Texto que describa la imagen')
        .position-absolute.px-2.py-3.bg-naranja.w-100.translate-up-text.up
          .rounded-15.bg-blanco.px-3.py-2.text-center
            p #[strong Mixto (I+D)]
          .rounded-15.bg-blanco.px-3.py-2.text-center.mt-2
            p #[strong Deductivo]
          .rounded-15.bg-blanco.px-3.py-2.text-center.mt-2
            p #[strong Inductivo]

      .col-2.rounded-15.px-4.py-1.border-naranja.text-center.text-small.d-flex.align-items-center.mx-1.w-15-7.position-relative
        p Por el proceso de asimilar #[strong CONOCIMIENTO]
        .position-absolute.img-position.translate-up
          figure
            img(src='@/assets/template/tema-1-5.svg', alt='Texto que describa la imagen')
        .position-absolute.px-2.py-3.bg-naranja.w-100.translate-up-text.down
          .rounded-15.bg-blanco.px-3.py-2.text-center
            p #[strong Analítico]
          .rounded-15.bg-blanco.px-3.py-2.text-center.mt-2
            p #[strong Sintético]
          .rounded-15.bg-blanco.px-3.py-2.text-center.mt-2
            p #[strong Mixto(I+D)]

      .col-2.rounded-15.px-4.py-1.border-naranja.text-center.text-small.d-flex.align-items-center.mx-1.w-15-7.position-relative
        p Por la participación en #[strong CONOCIMIENTO]
        .position-absolute.img-position.translate-down
          figure
            img(src='@/assets/template/tema-1-6.svg', alt='Texto que describa la imagen')
        .position-absolute.px-2.py-3.bg-naranja.w-100.translate-up-text.up
          .rounded-15.bg-blanco.px-3.py-3.text-center
            p #[strong Heurístico]
          .rounded-15.bg-blanco.px-3.py-3.text-center.mt-2
            p #[strong Dogmático]

      .col-2.rounded-15.px-4.py-1.border-naranja.text-center.text-small.d-flex.align-items-center.mx-1.w-15-7.position-relative
        p Por la conexión #[strong SABER]
        .position-absolute.img-position.translate-up
          figure
            img(src='@/assets/template/tema-1-7.svg', alt='Texto que describa la imagen')
        .position-absolute.px-2.py-3.bg-naranja.w-100.translate-up-text.down
          .rounded-15.bg-blanco.px-3.py-3.text-center
            p #[strong Intuitivo]
          .rounded-15.bg-blanco.px-3.py-3.text-center.mt-2
            p #[strong Simbólico]
          
      .col-2.rounded-15.px-4.py-1.border-naranja.text-center.text-small.d-flex.align-items-center.mx-1.w-15-7.position-relative
        p Por la actitud del #[strong APRENDIZ]
        .position-absolute.img-position.translate-down
          figure
            img(src='@/assets/template/tema-1-8.svg', alt='Texto que describa la imagen')
        .position-absolute.px-2.py-3.bg-naranja.w-100.translate-up-text.up
          .rounded-15.bg-blanco.px-3.py-3.text-center
            p #[strong Pasivo]
          .rounded-15.bg-blanco.px-3.py-3.text-center.mt-2
            p #[strong Activo]

      .col-2.rounded-15.px-4.py-1.border-naranja.text-center.text-small.d-flex.align-items-center.mx-1.w-15-7.position-relative
        p Por la integración #[strong CURRICULAR]
        .position-absolute.img-position.translate-up
          figure
            img(src='@/assets/template/tema-1-9.svg', alt='Texto que describa la imagen')
        .position-absolute.px-2.py-3.bg-naranja.w-100.translate-up-text.down
          .rounded-15.bg-blanco.px-3.py-5.text-center
            p #[strong Globalizados]

    TabsA.color-primario.mb-5.d-flex.d-lg-none
      .tarjeta.color-primario--borde.p-4(titulo="Por el proceso de RAZONAMIENTO")
        h5 Por el proceso de RAZONAMIENTO
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Mixto (I+D)
          li 
            i.fas.fa-angle-right
            | Deductivo
          li 
            i.fas.fa-angle-right
            | Inductivo
      .tarjeta.color-primario--borde.p-4(titulo="Por el proceso de asimilar CONOCIMIENTO")
        h5 Por el proceso de asimilar CONOCIMIENTO
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Analítico
          li 
            i.fas.fa-angle-right
            | Sintético
          li 
            i.fas.fa-angle-right
            | Mixto(I+D)
      .tarjeta.color-primario--borde.p-4(titulo="Por la participación en CONOCIMIENTO")
        h5 Por la participación en CONOCIMIENTO
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Heurístico
          li 
            i.fas.fa-angle-right
            | Dogmático
      .tarjeta.color-primario--borde.p-4(titulo="Por la conexión SABER")
        h5 Por la conexión SABER
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Intuitivo
          li 
            i.fas.fa-angle-right
            | Simbólico
      .tarjeta.color-primario--borde.p-4(titulo="Por la actitud del APRENDIZ")
        h5 Por la actitud del APRENDIZ
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Pasivo
          li 
            i.fas.fa-angle-right
            | Activo
      .tarjeta.color-primario--borde.p-4(titulo="Por la integración CURRICULAR")
        h5 Por la integración CURRICULAR
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Globalizados

        
    .titulo-segundo.color-primario.no-mt-md
      #t_1_2.h2 1.2  Métodos didácticos
    figure(data-aos="zoom-in")
      img(src='@/assets/template/tema-1-10.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-11.svg', alt='Texto que describa la imagen').px-3.px-xl-0.floating
      .col-12.col-lg-10
        p Son aplicados por el instructor en el proceso de formación y responden a la pregunta ¿Cómo organizar e impartir la instrucción?, para lograr el aprendizaje. A continuación, se presentan los principales métodos de enseñanza que se utilizan; pero es importante aclarar que existen muchos más de acuerdo con las disciplinas y campos de conocimiento:
    .row.mt-5
      .col-10.col-lg-6
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/template/tema-1-12.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3.mt-5 Aprendizaje Basado en Lecciones o Retos
              p.mt-5 Planeado con actividades cortas, que pueden durar entre una y tres horas, integran varios conocimientos y contribuyen a fijar los nuevos con actividades relevantes, con experiencias de tipo manos a la obra.
              p.text-center.mt-4 Este aprendizaje es más profundo para los aprendices y aporta conceptos, experiencias y habilidades necesarios para incorporar nuevos temas durante el proceso de aprendizaje o niveles superiores formación.
      .col-10.col-lg-6
        .nav-holder.align-items-center.color2(data-aos="flip-up")
          img(src="@/assets/template/tema-1-13.png", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3.mt-5 Aprendizaje Basado en Problemas o Proyectos 
              p.mt-5 Diseñado bajo una planificación educativa, son de más larga duración, entre cuarenta y sesenta horas, el seguimiento y la evaluación de los aprendices resulta de los resultados de desempeño a lo largo de la resolución del ABP.
              p.text-center.mt-4 Este aprendizaje busca evaluar el desempeño interdisciplinario de los aprendices en las habilidades comunicativas, el trabajo colaborativo, el liderazgo social, el pensamiento crítico, entre otros, para resolver problemas de su vida cotidiana y laboral.
    p.mt-5 Para comprender muy bien las técnicas didácticas utilizadas en el SENA en el proceso, es importante recordar su propuesta antropológica, axiológica, pedagógica y epistemológica en el desarrollo de su modelo pedagógico, como se muestra en la siguiente figura:
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-primario
          h5 Figura 3
          p.mt-2.text-small Modelo pedagógico SENA
      .col-10.offset-1(data-aos="flip-up")
        figure
          img(src='@/assets/template/tema-1-14.png', alt='Texto que describa la imagen')
    p.mt-5 En el gráfico, se puede observar claramente cómo el concepto de formación profesional integral consiste en el equilibrio o armonización entre los componentes #[strong técnico o tecnológico] y el componente social; que busca comprender el obrar tecnológico en armonía con el entendimiento de la realidad social, económica, política, cultural, estética, ambiental, y del actuar práctico moral #[strong (Acuerdo 08 de 1997)], en otras palabras, se plasma el principio de multidisciplinariedad para que los aprendices integren de manera diversa las diferentes formas de su desarrollo en el siglo XXI.
    separador.mt-3

    .titulo-segundo.color-primario
      #t_1_3.h2 1.3  Actividades didácticas 
    .row.mt-5
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-15.svg', alt='Texto que describa la imagen').px-3.px-xl-0.floating
      .col-12.col-lg-10
        p En el siguiente esquema, se presenta el concepto y algunas características de las actividades didácticas en respuesta al cómo del aprendizaje:
    .row.mt-5
      .col-10.offset-1(data-aos="flip-up")
        figure
          img(src='@/assets/template/tema-1-16.png', alt='Texto que describa la imagen')
    separador.mt-3

    .titulo-segundo.color-primario
      #t_1_4.h2 1.4  Secuencias didácticas
    .row.mt-5
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-17.svg', alt='Texto que describa la imagen').px-3.px-xl-0.floating
      .col-12.col-lg-10
        p Corresponden a la estructuración de los momentos del proceso lógico de las actividades y buscan responder a la pregunta ¿Cómo proceder en cada momento instruccional?, para alcanzar el desarrollo de las habilidades. A continuación, se presenta un ejemplo con algunas de las actividades que se pueden realizar en cada fase de la secuencia didáctica:
      .col-10.offset-1.mt-5
        .titulo-sexto.color-primario
          h5 Tabla
          span Clasificación de la FPI  
    .tabla-a.color-primario.mt-5(data-aos="fade") 
      table
        caption.mt-3 Nota: Tomada de SENA (2019)
        thead
          tr.bg-naranja.text-white
            th(style="width: 17%") Fases
            th(colspan="2") Finalidad de la actividad
            th Competencias
            th Tipos de actividades
        tbody
          tr.bg-gris-claro
            th INICIAL Anticipar y Sensibilizar
            td Diagnóstico
            td Averiguar los conocimientos previos
            td 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Reconocimiento de los conocimientos previos
                li 
                  i.fas.fa-angle-right
                  | Enfoque a desarrollar
            td 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Ejercicios de diagnóstico
                li 
                  i.fas.fa-angle-right
                  | Pruebas de conocimientos previos
          tr 
            th(rowspan="4") CENTRALES
            td Reconocer y contextualizar
            td Adquirir nuevo aprendizaje
            td 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Capacidad de organizar
                li 
                  i.fas.fa-angle-right
                  | Capacidad de análisis
                li 
                  i.fas.fa-angle-right
                  | Capacidad de comparación
                li 
                  i.fas.fa-angle-right
                  | Capacidad de generación de sus propios aprendizajes a través de la experiencia
            td(rowspan="4")
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Encuestas y debates
                li 
                  i.fas.fa-angle-right
                  | Visita/Itinerario
                li 
                  i.fas.fa-angle-right
                  | Cine/Video
                li 
                  i.fas.fa-angle-right
                  | Explicación del Instructor
                li 
                  i.fas.fa-angle-right
                  | Elaborar periódicos, crucigramas, mapas mentales, murales, informes.
                li 
                  i.fas.fa-angle-right
                  | Analizar documentación escrita, mapas, planos.
                li 
                  i.fas.fa-angle-right
                  | Informes personales o grupales.
                li 
                  i.fas.fa-angle-right
                  | Juegos de simulación.
                li 
                  i.fas.fa-angle-right
                  | Trabajos o dinámicas de grupos o individuales
          tr
            td(rowspan="3") Investigar, evaluar y transformar
            td Reforzar las habilidades aprendidas
            td 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Incidir en las experiencias
                li 
                  i.fas.fa-angle-right
                  | Reforzar las habilidades para generar recordación.
          tr
            td Ampliación de experiencias
            td 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Desarrollar e incrementar las prácticas
                li 
                  i.fas.fa-angle-right
                  | Generar nuevas habilidades en los aprendices
          tr
            td Resumen
            td 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Aplicar habilidades y competencias adquiridas
                li 
                  i.fas.fa-angle-right
                  | Explicar de manera resumida y estructurada el aprendizaje adquirido
          tr.bg-gris-claro
            th FINAL
            td Analizar y socializar
            td Evaluación y autoevaluación
            td *Evaluar y medir las competencias alcanzadas de manera individual y colaborativa.
            td 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Exámenes escritos, orales.
                li 
                  i.fas.fa-angle-right
                  | Pruebas objetivas.
                li 
                  i.fas.fa-angle-right
                  | Ejercicios de llenado o resueltos.
    separador.mt-3

    .titulo-segundo.color-primario
      #t_1_5.h2 1.5  Recursos didácticos
    .row.mt-5.bg-amarillo-claro.p-5(data-aos="zoom-in")
      .col-12.col-lg-8.align-self-center
        p Son todos los documentos impresos y manuscritos: libros y folletos, revistas, periódicos, fascículos, atlas, mapas, planos, cartas, libros de actas y otros documentos de archivo histórico, entre otros materiales impresos; los documentos digitales: redes bibliográficas, redes sociales, cloud, videos, podcasts, recursos electrónicos, fotografías, pinturas y otros materiales digitales; materiales manipulativos: globos terráqueos, tableros interactivos, módulos didácticos, módulos de laboratorio, juegos, colchonetas, pelotas, raquetas, instrumentos musicales. Incluyen piezas artesanales, reliquias, tejidos, minerales, etc. Equipos: proyector multimedia, retroproyector, televisor, pizarra electrónica, fotocopiadora, u otros que sirven para responder a la pregunta ¿Qué herramientas apoyan el aprendizaje? 
      .col-4.offset-4.offset-lg-0.px-4
        figure
          img(src='@/assets/template/tema-1-18.svg', alt='Texto que describa la imagen').floating






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
.nav-holder
  display: inline-block;
  margin: 10px 5px;
  overflow: hidden;
  position: relative;
  width: 100%;
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)
.nav-holder *, .nav-holder *:before, .nav-holder *:after
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.45s ease;
  -moz-transition: all 0.45s ease;
  transition: all 0.45s ease;
.nav-holder:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #fff
  border: 5px solid #5A189A
  z-index: 888
  opacity: 1
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease
  border-radius: 15px

.color2:before
  border: 5px solid #5A189A!important
.nav-holder:before
  -webkit-transform: translateY(100%)
  -moz-transform: translateY(100%)
  transform: translateY(100%)

.nav-holder:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 1
  bottom: 0px
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s

.nav-holder
  .text
    position: absolute
    top: 0px
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
  img
    backface-visibility: hidden
    vertical-align: top
    z-index: 0
  p, i
    opacity: 0
    text-align: center
  li
    margin-bottom: 0
    padding-bottom: 0
    font-size: .9em
.nav-holder .h3
    margin: 10px 0px
    color: #000
.nav-holder:hover
  p, i
    opacity: 1
    -webkit-transition-delay: 0.2s
    -moz-transition-delay: 0.2s
    transition-delay: 0.2s
.nav-holder i
  color: #E01650
.nav-holder *
  color: #000
.no-mt-md
  margin-top: 17rem
@media (max-width: 992px)
  .no-mt-md
    margin-top: 3rem

.position-absolute.img-position
  left: 24%
.position-absolute.bg-naranja
  left: 0rem
.up
  top: -10.6rem
.up::before
  content: " "
  display: block
  position: absolute
  background-color: #FF6B00
  top: 100%
  left: 40%
  width: 20px
  height: 20px
  transform: translate(5px,-50%) rotate(45deg)
.down
  top: 5rem
.down::before
  content: " "
  display: block
  position: absolute
  background-color: #FF6B00
  top: 0%
  left: 40%
  width: 20px
  height: 20px
  transform: translate(5px,-50%) rotate(45deg)
.position-absolute.bg-naranja
  left: 0rem
.translate-hover
  translate: 0 4rem
  transition: all 800ms
.translate-hover:hover
  translate: 0 6rem
  transition: all 800ms
.translate-down figure
  transform: scale(0,0)
  transition: all 800ms
.col-2:hover .translate-down figure
  transform: scale(1,1)
  translate: 0 7.5rem
  transition: all 800ms
.col-2:hover .translate-up
  transform: scale(1,1)
  translate: 0 -7.5rem
  transition: all 800ms
.translate-up
  transform: scale(0,0)
  transition: all 800ms
.translate-up-text
  transform: scale(0,0)
  transition: all 800ms
.col-2:hover .translate-up-text
  transform: scale(1,1)
  transition: all 800ms


.bg-naranja.translate-up.w-100
  left: 0
</style>
