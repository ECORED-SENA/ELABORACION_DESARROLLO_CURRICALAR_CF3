export default {
  global: {
    componenteFormativo: 'Estrategias didácticas',
    descripcionCurso:
      'A través del desarrollo de este componente, los aprendices adquieren elementos conceptuales y prácticos que les permitirán implementar estrategias didácticas en el procedimiento de desarrollo curricular.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estrategias didácticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Métodos didácticos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas didácticas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Actividades didácticas',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Secuencias didácticas',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Recursos didácticos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Habilidades en el siglo XXI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Metodologías activas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aprendizajes ABP, ABL, ABC',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acuerdo 08 de 1997. [Consejo Directivo Nacional del Servicio Nacional de Aprendizaje]. Por medio del cual se adopta el Estatuto de la Formación Profesional del Servicio Nacional de Aprendizaje. Marzo 20 de 1997.',
      link:
        'http://centrodeserviciosygestionempresarial.blogspot.com/2016/08/acuerdo-08-de-1997-estatuto-de.html',
    },
    {
      referencia:
        'Baro, A. (2011). Metodologías activas y aprendizaje por descubrimiento. Revista Digital Innovación y Experiencias Educativas, 7(40), p. 1-11.',
      link:
        'https://archivos.csif.es/archivos/andalucia/ensenanza/revistas/csicsif/revista/pdf/Numero_40/ALEJANDRA_BARO_1.pdf',
    },
    {
      referencia:
        'Barron, B., y Darling-Hammond, L. (2008). Teaching for Meaningful Learning. A Review of Research on Inquiry-Based and Cooperative Learning. The George Lucas Educational Foundation.',
      link: '',
    },
    {
      referencia:
        'Bell, S. (2010). Project-Based Learning for the 21st Century: Skills for the Future. The Clearing House, 83(2), p. 39-43.',
      link: 'https://doi.org/10.1080/00098650903505415',
    },
    {
      referencia:
        'Bradley-Levine, J., Berghoff, B., Seybold, J., Sever, R., Blackwell, S. y Smiley, A. (2010). What teachers and administrators “need to know” about project-based learning implementation. Annual Meeting of the American Educational Research Association.',
      link:
        'https://www.dr-hatfield.com/science_rules/articles/WHAT%20TEACHERS%20AND%20ADMINISTRATORS%20NEED%20TO%20KNOW%20ABOUT.pdf',
    },
    {
      referencia:
        'Castillo, S. (2003). Aprendizaje basado en Problemas. Universidad de Chile.',
      link:
        'http://www.rlillo.educsalud.cl/Capacitacion_ABP/Anexo%203-Aprendizaje%20basado%20en%20problemas.pdf',
    },
    {
      referencia:
        'Fernández, J. y Rodríguez-Martín, A. (2017). TIC y diversidad funcional: conocimiento del profesorado. European Journal of investigation in health, psychology and education, 7(3), p. 157-175.',
      link: 'https://doi.org/10.30552/ejihpe.v7i3.204',
    },
    {
      referencia:
        'Guerra, M., Rodríguez, J. y Artiles, J. (2019). Aprendizaje colaborativo: experiencia innovadora en el alumnado universitario. Revista de estudios y experiencias en educación, 18(36), p. 269-281.',
      link: 'http://dx.doi.org/10.21703/rexe.20191836guerra5',
    },
    {
      referencia:
        'Martí, J., Heydrich, M., Rojas, M. y Hernández, A. (2010). Aprendizaje basado en proyectos: Una experiencia de innovación docente. Revista Universidad EAFIT, 46(158), p. 11-21.',
      link: 'https://www.redalyc.org/pdf/215/21520993002.pdf',
    },
    {
      referencia:
        'Martínez, L., García, A. y Linares, E. (2017). Proyectos basados en ABP como formas de evaluación e indicadores de aprendizaje de estudiantes de Ingeniería Biomédica. Revista electrónica sobre tecnología, educación y sociedad, 4(7), 12.',
      link: 'https://www.ctes.org.mx/index.php/ctes/article/view/627',
    },
    {
      referencia:
        'Membrillo-Hernández, J., Ramírez-Cadena, M., Caballero-Valdés, C., Ganem-Corvera, R., Bustamante-Bello, R., Ordoñez-Díaz, J. y Elizalde, H. (2018). Challenge-based Learning: The Case of Sustainable Development Engineering at the Tecnológico de Monterrey, Mexico City Campus. International Journal of Engineering Pedagogy, 8(3), p. 137-144.',
      link:
        'https://www.researchgate.net/publication/320271430_Challenge_base_learning_The_case_of_Sustainable_Development_Engineering_at_the_Monterrey_Institute_of_Technology_and_Higher_Education_Mexico_City_Campus',
    },
    {
      referencia:
        'Montero, M. y Gewerc, A. (2010). De la innovación deseada a la innovación posible. Escuelas alteradas por las TIC. Profesorado. Revista de Currículum y Formación del Profesorado, 14(1), p. 303-318.',
      link: 'https://www.redalyc.org/articulo.oa?id=56714113017',
    },
    {
      referencia:
        'Olivares, S., López, M. y Valdez-García, J. (2018). Aprendizaje basado en retos: una experiencia de innovación para enfrentar problemas de salud pública. Educación Médica, 19(3), p. 230-237.',
      link:
        'https://www.sciencedirect.com/science/article/pii/S157518131730178X',
    },
    {
      referencia:
        'Rodríguez, E., Vargas, É. y Luna, J. (2010). Evaluación de la estrategia aprendizaje basado en proyectos. Educación y educadores, 13(1).',
      link:
        'http://educacionyeducadores.unisabana.edu.co/index.php/eye/article/view/1618',
    },
    {
      referencia:
        'Vilchez, K. (2021). Estrategia de perfeccionamiento docente para la práctica pedagógica en educación primaria de la Institución Educativa N° 11517 Santa Ana Tumán. Universidad Señor de Sipán.',
      link: 'https://hdl.handle.net/20.500.12802/8470',
    },
    {
      referencia:
        'Villar, S. (2013). Aprendizaje Basado en Proyectos. Universidad de Zaragoza.',
      link: '',
    },
    {
      referencia:
        'Williams, B. (2005). Case based learning—a review of the literature: Is there scope for this educational paradigm in prehospital education? Emergency Medicine Journal, 22(8), 577-581.',
      link: 'https://doi.org/10.1136/emj.2004.022707',
    },
  ],
  glosario: [
    {
      termino: 'Competencias',
      significado:
        'Habilidades, capacidades y conocimientos que una persona tiene para cumplir eficientemente determinada tarea.',
    },
    {
      termino: 'Desarrollo curricular',
      significado:
        'Procedimiento mediante el cual se planea, diseña y ejecuta la ruta de aprendizaje de cada aprendiz, mediante proyectos formativos y planeación pedagógica; contiene actividades de aprendizaje y aplicación de técnicas didácticas activas que permiten desarrollar las competencias con ritmos de aprendizaje personalizados.',
    },
    {
      termino: 'Habilidades cognitivas ',
      significado:
        'Aptitudes del ser humano relacionadas con el procesamiento de la información, es decir, que implican el uso de la memoria, la atención, la percepción, la creatividad y el pensamiento abstracto o analógico.',
    },
    {
      termino: 'Teorías del aprendizaje',
      significado:
        'Describen aquellos procesos mediante los cuales tanto los seres humanos como los animales aprenden. Numerosos psicólogos y pedagogos han aportado amplias teorías en la materia.',
    },
    {
      termino: 'Metodologías didácticas',
      significado:
        'Procedimientos (métodos, técnicas y actividades). Los profesores y los estudiantes organizan las acciones del proceso formativo de manera consciente.',
    },
  ],
  complementario: [
    {
      texto: 'SENA. (2020, julio). Guía de desarrollo curricular.',
      tipo: 'Documento',
      link:
        'https://compromiso.sena.edu.co/documentos/vista/descarga.php?id=2825',
    },
    {
      texto: 'OIT. (s. f.). Marcos de cualificaciones. OIT/Cinterfor.',
      tipo: 'Página web',
      link: 'https://www.oitcinterfor.org/recursos/mnc',
    },
    {
      texto:
        'SENA. (2020). Clasificación Nacional de Ocupaciones. Observatorio Laboral y Ocupacional.',
      tipo: 'Página web',
      link: 'https://observatorio.sena.edu.co/Clasificacion/Cno',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Alexandra Hoyos Figueroa',
        cargo: 'Profesional de diseño y desarrollo curricular',
        centro:
          'Centro para el Desarrollo de Hábitat y la Construcción -Regional Antioquia',
      },
      {
        nombre: 'Hernán Darío Córdoba Escobar',
        cargo: 'Instructor experto en pedagogía',
        centro:
          'Centro para el Desarrollo de Hábitat y la Construcción - Regional Antioquia',
      },
      {
        nombre: 'María Cristina Hurtado Zúñiga',
        cargo: 'Instructora experta temática',
        centro: 'Centro de Desarrollo Tecnológico Industrial - Regional Valle',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Sarmiento Betancourth',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },

      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Lizeth Karina Manchego Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
