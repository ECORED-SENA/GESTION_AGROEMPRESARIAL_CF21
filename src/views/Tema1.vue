<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Registro de actividades en la poscosecha

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8
        p.mb-4 La información de la finca es una herramienta muy poderosa para que el productor tome decisiones adecuadas con respecto a su negocio agrícola. En ello se basa la importancia del uso de registros en una finca. 
        .cajon.color-primario(style='background-color: #F8F9EA').p-4
          p.mb-0 El registro de las actividades deberá realizarse en formatos diseñados para tal fin, donde se permita plasmar la información necesaria de acuerdo con la actividad requerida, evitando casillas con información que no resulte útil para el análisis de la situación. 
      .col-md-4
        figure
          img(src='@/assets/curso/tema1/1.jpg', alt='')

    p.mb-4 Con relación al registro de actividades en la granja es clave tener en cuenta los siguientes aspectos:

    .row.justify-content-center.align-items-center.mb-4
      .col-md-4.col-12
        .tarjeta.color1.p-4
          figure.mb-0
            img(src='@/assets/curso/tema1/1.png', alt='')
          h5.text-center.mb-4 El poder de la información
          p.text-center La información de la finca es una herramienta muy poderosa para que el productor tome decisiones adecuadas con respecto a su negocio agrícola. Por eso, la importancia del uso de registros en una finca.
      .col-md-4.col-12
        .tarjeta.color1.p-4
          figure.mb-0
            img(src='@/assets/curso/tema1/2.png', alt='')
          h5.text-center.mb-4 Construcción de la información
          p.text-center La información se construye a través del procesamiento y análisis de los registros. 
      .col-md-4.col-12
        .tarjeta.color1.p-4
          figure.mb-0
            img(src='@/assets/curso/tema1/3.png', alt='')
          h5.text-center.mb-4 Acción a partir de la información
          p.text-center Permite conocer la situación actual, determinar volúmenes de producción, conocer limitantes y estimar el monto de las inversiones necesarias en la empresa.

    p.mb-4 La elección de los tipos de registros a implementar está relacionada con el tipo de información que se necesita registrar, esto es:

    SlyderB.mb-5(:datos="datosSlyder")

    Separador 

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2 1.1	Registros de volúmenes de producción y calidad 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8
        p.mb-4 El personal que realiza la supervisión de las actividades productivas deberá ser muy cauteloso con la información registrada de las cantidades finales de producción, debido a que una información mal diligenciada puede ocasionar indicadores negativos, o por el contrario, unas evaluaciones muy rentables alejadas de la realidad de la actividad agrícola.
        .tarjeta.color2.p-4
          p Por tal razón, la capacitación de los operarios y/o supervisores en las etapas de producción debe ser constante, para que el registro de los formatos se realice de forma adecuada y brinde información real y concisa de las etapas de producción. 
      .col-md-4
        figure
          img(src='@/assets/curso/tema1/img5.jpg', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.position-relative
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/4.png' alt='AvatarTop').img1
            .col
             .row.align-items-center 
                .col-md-10
                  p.mb-4 Existen otros registros que son de diligenciamiento diario o semanal de acuerdo al tipo de producción. En ellos se escriben los datos de uso de mano de obra, uso de insumos, costos, eventos del cultivo, producción, pérdidas, eventos climáticos, etc.
                  p.mb-4 Los registros deben ser sencillos, completos, mantenerse al día, útiles y confiables. Generalmente se escriben a mano y luego se transfiere la información a software especializados a producciones agrícolas.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema1/icon1.png' alt='AvatarTop')

    p.mb-4 En el proceso de poscosecha como en las demás fases de la producción agrícola los registros cumplen una secuencia lógica para ser elaborados, cumpliendo estos criterios, aplicar los registros será una acción más efectiva.
    p.mb-4 Identifique en la siguiente figura cómo se relacionan los registros en las actividades de poscosecha: 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Registros relacionados con actividades de poscosecha

    .row.justify-content-center.align-items-center.mb-4
      .col-md-12
        figure
          img(src='@/assets/curso/tema1/fig1.svg' alt='AvatarTop')
    Separador 

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2 1.2	Registros de seguimiento de actividades 

    .row.mb-5
      .col-md-12.col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/vec1.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p El seguimiento consiste en el análisis y recopilación sistemático de información a medida que avanza un proyecto. Su objetivo es mejorar la eficacia y efectividad de un proyecto y su organización. Se basa en metas establecidas y actividades planificadas durante las distintas fases del trabajo de planificación.

    p.mb-4 Sobre el registro de seguimiento de actividades tenga presente algunos aspectos clave como:

    .row.justify-content-center.mb-4
      .col-md-10
        figure
          img(src='@/assets/curso/tema1/vec2.svg' alt='AvatarTop')
    Separador 

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2 1.3	Registros de pérdida de la cosecha 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.position-relative
        .crd.crd--avatarHorizontal2.py-2
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/5.png' alt='AvatarTop')
            .col
             .row.align-items-center 
                .col-md-10
                  p.mb-4 Existen otros registros que son de diligenciamiento diario o semanal de acuerdo al tipo de producción. En ellos se escriben los datos de uso de mano de obra, uso de insumos, costos, eventos del cultivo, producción, pérdidas, eventos climáticos, etc.
                  p.mb-0 Los registros deben ser sencillos, completos, mantenerse al día, útiles y confiables. Generalmente se escriben a mano y luego se transfiere la información a software especializados a producciones agrícolas.

    p.mb-4 Las causas de la pérdida de estos alimentos, entre otras más son:

    SlyderB.mb-5(:datos="datosSlyder1")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12.position-relative
        .crd.crd--avatarHorizontal3.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/tema1/4.png' alt='AvatarTop').img3
            .col
             .row.align-items-center 
                .col-md-12
                  p.mb-4 El uso de herramientas no adecuadas, la recolección incorrecta, la manipulación de los productos, el tiempo de almacenamiento, empaquetado y el transporte a sitio final también son situaciones que generan pérdidas, por tal razón se deben extremar las medidas en la poscosecha ya que no solo es en la etapa de crecimiento del producto sino en todo el ciclo productivo.
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Representatividad',
        texto:
          'Se usan registros según la información relacionada con el cultivo, que sea representativa para el control de producción y que sea relevante para la toma de los indicadores de gestión. ',
        imagen: require('@/assets/curso/tema1/img1.jpg'),
      },
      {
        titulo: 'Periodicidad',
        texto:
          'Los registros de las actividades se deben llevar diariamente o con la periodicidad que la actividad agrícola demande, procurando largos periodos de tiempo.',
        imagen: require('@/assets/curso/tema1/img2.jpg'),
      },
      {
        titulo: 'En caso de ceses o periodos de inactividad',
        texto:
          'En caso de que la unidad productora se encuentre paralizada también deberá realizar el registro informando la causa y el tiempo que lleva sin operación.',
        imagen: require('@/assets/curso/tema1/img3.jpg'),
      },
      {
        titulo: 'Registros básicos',
        texto:
          'Los registros iniciales básicos de una finca son: descripción de la finca (ubicación, área total, área por producción, estado y descripción de cultivos, descripción de producciones pecuarias, áreas en bosques, etc.), inventario (infraestructura, herramientas y equipos, insumos, cultivos, maquinaria, etc.).',
        imagen: require('@/assets/curso/tema1/img4.jpg'),
      },
    ],
    datosSlyder1: [
      {
        titulo: 'Malos cálculos',
        texto:
          'Recolección en un momento inadecuado del proceso de maduración.',
        imagen: require('@/assets/curso/tema1/img6.jpg'),
      },
      {
        titulo: 'PCuidados deficientes',
        texto:
          'Posible exposición excesiva a la lluvia, la sequía o las temperaturas extremas.',
        imagen: require('@/assets/curso/tema1/img7.jpg'),
      },
      {
        titulo: 'Factores climáticos o ambientales',
        texto:
          'Contaminación por microorganismos, vientos u otros factores que ocasionan daños físicos que reducen el valor del producto.',
        imagen: require('@/assets/curso/tema1/img8.jpg'),
      },
      {
        titulo: 'Malos manejos',
        texto:
          'Pese a haber tenido una buena y exitosa cosecha, el manejo descuidado de los alimentos en su acopio, transporte, almacenamiento, etc., puede ocasionar pérdida de los mismos o disminución en su calidad y valor.',
        imagen: require('@/assets/curso/tema1/img9.jpg'),
      },
    ],
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

<style lang="sass"></style>
