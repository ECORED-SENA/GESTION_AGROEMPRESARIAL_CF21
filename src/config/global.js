export default {
  global: {
    componenteFormativo:
      'Monitoreo de programas de alimentación, sanidad y reproducción animal',
    descripcionCurso:
      'Mediante este componente formativo el aprendiz se capacitará para el monitoreo continuo de las actividades productivas, como garantía de calidad en cada uno de los procesos. Asimismo, afianzará sus conocimientos y habilidades para la identificación de acciones y situaciones de mejora y aseguramiento de la competitividad, frente a los demás actores de la actividad productiva.',
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/portada/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
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
        titulo: 'Registro de actividades en la poscosecha',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Registros de volúmenes de producción y calidad ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Registros de seguimiento de actividades ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Registros de pérdida de la cosecha ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Auditoría en el proceso de la poscosecha ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Requisitos ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Formatos ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Calidad de la producción de la poscosecha',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Rendimientos de la poscosecha ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Costos del rendimiento ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Mermas de la poscosecha',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Acciones correctivas en el manejo de la poscosecha ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de acciones correctivas ',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Implementación de acciones correctivas en la poscosecha ',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Análisis de acciones correctivas ',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Generación de estrategias ',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
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
      referencia: 'Concepto.de. (2021). Cómo hacer un informe. Concepto.de',
      link: 'https://concepto.de/como-hacer-un-informe/',
    },
    {
      referencia:
        'Escalante, J. (2019). Registros de producción agrícola para el mejoramiento de la toma de decisión. Researchgate.',
      link:
        'https://www.researchgate.net/publication/330635315_REGISTROS_DE_PRODUCCION_AGRICOLA_PARA_EL_MEJORAMIENTO_DE_LA_TOMA_DE_DECISION',
    },
    {
      referencia:
        'Gómez, C. (2012). Identificación de oportunidades de mejora en procesos de neurorrehabilitación. UPM.',
      link: 'https://oa.upm.es/19986/1/INVE_MEM_2012_135123.pdf',
    },
    {
      referencia:
        'Universidad UNADE. (2019). Control de Calidad de alimentos.  UNADE.',
      link:
        'https://unade.edu.mx/control-de-calidad-de-alimentos/#:~:text=La%20calidad%20alimentaria%2C%20producto%20de,durante%20una%20cadena%20de%20calidad',
    },
  ],
  glosario: [
    {
      termino: 'Diagrama de flujo',
      significado:
        'Es la representación gráfica de las etapas de un proceso o procedimiento de acuerdo con unas convenciones universales.',
    },
    {
      termino: 'Formato',
      significado:
        'Documento empleado para el registro de información necesaria para realizar un proceso o actividad.',
    },
    {
      termino: 'Procesamiento',
      significado: 'Forma específica de llevar a cabo una actividad o proceso.',
    },
    {
      termino: 'Proceso',
      significado:
        'Conjunto de actividades mutuamente relacionadas o que interactúan, las cuales transforman elementos de entrada en resultados.',
    },
    {
      termino: 'Registro',
      significado:
        'Documento que presenta resultados o proporciona evidencia de actividades desempeñadas.',
    },
    {
      termino: 'Revisión',
      significado:
        'Actividad que consiste en verificar que el contenido de un documento corresponde a lo que se hace.',
    },
  ],
  complementario: [
    {
      tema: 'Registro de actividades en la poscosecha',
      referencia:
        'Jsilveragro. (2019). Registro de actividades agrícolas [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=W0I2JN40g1g',
    },
    {
      tema: 'Acciones correctivas del manejo de la poscosecha',
      referencia:
        'Instituto Profesional Los Leones (2020). Cómo construir un informe técnico. Taller de proyectos integrados [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uK9j9sjTNM0',
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
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Karly Cediel',
        cargo: 'Contratista Experta temática',
        centro: 'SENA Regional Tolima - Centro Agropecuario La Granja',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
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
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniel Mutis',
        cargo: 'Validación Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gómez Delgado',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Leonardo Correa Díaz',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de Maquetación',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de Gestión de Repositorio',
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
