<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Auditoría en el proceso de la poscosecha 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-8(data-aos="fade-right")
        p.mb-4 Las auditorías de procesos permiten conocer el comportamiento real de cada uno de los diferentes procesos durante la cosecha, poscosecha, racimos y distribuidores, para identificar dónde se necesita la mejora y evitar el riesgo de inconsistencias de calidad.
        .cajon.color-primario(style='background-color: #F8F9EA').p-4.mb-4
          p.mb-0 La auditoría técnica de procesos consiste en identificar, cuantificar y valorar los costos y beneficios en un determinado periodo de tiempo, siendo la correcta identificación de beneficios la parte más importante, ya que a partir de esta se basa el análisis para tomar una adecuada decisión. De esta manera, establecer las actividades y puntos críticos que necesitan una intervención para mejorar los procesos.
      .col-md-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.jpg', alt='')
    p.mb-4(data-aos="fade-right") En el video que se muestra enseguida, obsérvelo y profundice en las generalidades y aspectos clave de la evaluación de parámetros técnicos; procure llevar registro de lo más destacado en su libreta personal de apuntes:
    figure.mb-5(data-aos="fade")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/p2VTS3rXo7c" title="Costos del rendimiento en el proceso de poscosecha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-4(data-aos="fade")
      .col-md-10
        .tarjeta.color3.p-4
          .row.align-items-center.justify-content-center
            .col-lg-1.col-md-2.col-5
              figure.mb-3
                img(src='@/assets/curso/tema2/1.png', alt='')
            .col-md-11
              p.mb-0 Los parámetros técnicos contienen información que primero se define y después se clasifica en varias categorías de elementos para un proyecto. Los parámetros de cada sistema son específicos de ese sistema y no se pueden compartir con otro proyecto.
    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1	Requisitos 

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-md-10.col-12
        .bloque-texto-g1.color-amarillo.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.jpg')})`}"
          )
          .bloque-texto-g1__texto.p-4
            p Las auditorías se basan en una serie de principios cuya intención es hacer que esta autoevaluación se convierta en una herramienta efectiva y confiable. Para ello, sus resultados deben respaldar las políticas de gestión de la calidad de la empresa, al tiempo que proporcionen información objetiva adecuada que permita obtener la mejora continua del sistema.
            span Para la implementación de una auditoría en la etapa de poscosecha los encargados de ejecutarla deben tener en cuenta los principios básicos que rigen una auditoría, estos son: 

    .row.align-items-center.mb-5(data-aos="fade")
      .col-md-8
        .row.justify-content-center   
          .col-lg-12
            LineaTiempoD.color-linea
              .row.align-items-center(numero="1" titulo="Conducta ética") 
                .col-md-12
                  p La confianza, la integridad, la confidencialidad y la discreción son esenciales para realizar una buena tarea.

              .row.align-items-center(numero="2" titulo="Imparcialidad")
                .col-md-12
                  p Los hallazgos, conclusiones e informes deben ser veraces, precisos y reflejar la verdad sobre lo observado en la auditoría.

              .row.align-items-center(numero="3" titulo="Profesional")
                .col-md-12
                  p Los auditores deben poner al servicio de la organización todos sus conocimientos, capacidades, competencias y habilidades.

              .row.align-items-center(numero="4" titulo="Independencia") 
                .col-md-12
                  p Los auditores son independientes de la actividad auditada, son objetivos.

              .row.align-items-center(numero="5" titulo="Basarse en la evidencia")
                .col-md-12
                  p La evidencia debe ser verificable y estar soportada en muestras de información disponible.
      .col-md-4
        figure
          img.p-2(src='@/assets/curso/tema2/img3.jpg' alt='')
    p.mb-5(data-aos="fade-right") Teniendo en cuenta estos principios básicos se da paso al cumplimiento de los requisitos mínimos para la correcta implementación de una auditoría en la etapa de poscosecha. Conozca y analice en el esquema que se muestra enseguida tales requisitos:

    .bg_grad-02
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
        .col-md-8
          ImagenInfografica.color-secundario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/vec1.svg', alt='Texto que describa la imagen')

            .tarjeta.clr-paleYellow4.p-4(x="49.4%" y="2.4%" numero="")
              .h5.mb-4 Planificar, establecer, implementar y mantener programa de auditoría
              p La auditoría en ISO 9001 es un requisito de la norma, como tal, requiere programar auditorías periódicas, asignar recursos, delegar responsabilidades, asegurar la disponibilidad de auditores y de la información relativa a las auditorías anteriores. <b> <FONT COLOR="#A3314F"> Todo ello, en su conjunto, conforma un programa de auditoría. </FONT> </b>

            .tarjeta.clr-paleYellow4.p-3(x="89%" y="21.5%" numero="")
              .h5.mb-4 Definir el alcance de la auditoría
              p No todas las auditorías pretenden evaluar el sistema en general. Algunas se restringen a un área o a un proceso en particular; así, definir el alcance resulta esencial. Los criterios, por otra parte, garantizan la uniformidad cuando la tarea la lleva a cabo un equipo de auditores.

            .tarjeta.clr-paleYellow4.p-3(x="95%" y="68.5%" numero="")
              .h5.mb-4 Nombrar los auditores adecuados
              p Una de las primeras decisiones en la práctica es la elección del auditor y su equipo. Deben ser personas <b> <FONT COLOR="#A3314F"> confiables, experimentadas y, en lo posible, con conocimiento específico. </FONT> </b>
            
            .tarjeta.clr-paleYellow4.p-3(x="49%" y="96%" numero="")
              .h5.mb-4 Redactar y comunicar los informes a la gerencia 
              p El objetivo final no es plasmar los hallazgos y las conclusiones en un papel. La auditoría debe <b> <FONT COLOR="#A3314F"> producir información valiosa para la implementación de acciones correctivas y la toma de decisiones.  </FONT> </b>

            .tarjeta.clr-paleYellow4.p-3(x="4.5%" y="69.5%" numero="")
              .h5.mb-2 Recomendaciones y acciones correctivas
              p La labor del auditor no termina con la recolección de evidencias y la entrega de los informes. La efectividad de una auditoría está determinada en gran medida por la celeridad con la que se diseñen e implementen las acciones correctivas.

            .tarjeta.clr-paleYellow4.p-3(x="8.5%" y="21.5%" numero="")
              .h5.mb-2 Conservar la documentación como evidencia de la implementación
              p Garantiza <b> <FONT COLOR="#A3314F"> que las personas sepan lo que tienen que hacer con vistas a la siguiente auditoría.  </FONT> </b> Igualmente, asegura la disposición de la información requerida antes del inicio de la nueva auditoría programada. Esto incluye completar y verificar resultados de las acciones correctivas y resolver hallazgos.
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2	Formatos 

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-12.position-relative
        .crd.crd--avatarHorizontal4.py-2
          .row.align-items-center
            .col-lg-4.col-md-12.col-12
              figure.mb-4
                img(src='@/assets/curso/tema2/img4.jpg' alt='AvatarTop')
            .col-lg-8.col-md-12.col-12
              .row.align-items-center 
                .col-md-12
                  p.mb-4 Un formato es un documento empleado para el registro de información necesaria para un proceso o actividad.
                  p.mb-0 Para la elaboración de los formatos que hacen parte del Sistema Integrado de Gestión Institucional se deben considerar aspectos como:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-md-12(data-aos="fade-right")
        .tarjeta.color4.p-4.mb-3
          .row.justify-content-center
            .col-lg-2.col-md-3.col-5
              figure
                img(src='@/assets/curso/tema2/2.png' alt='AvatarTop')
            .col-md-10
              h5 Análisis del formato
              p Analizar si el formato es una herramienta conveniente para el área que lo solicita. 
      .col-lg-6.col-md-12(data-aos="fade-left")
        .tarjeta.color4.p-4.mb-2
          .row.justify-content-center
            .col-lg-2.col-md-3.col-5
              figure
                img(src='@/assets/curso/tema2/3.png' alt='AvatarTop')
            .col-md-10
              h5 Definición de campos
              p.mb-0 Definir los campos necesarios para que la información registrada proporcione evidencia de la realización de una actividad. 
   
    .row.justify-content-center.align-items-center.mb-4
      .col-md-7(data-aos="fade-right")
        p.mb-2 Un formato, generalmente, contiene información precisa y concreta; no hay necesidad de plasmar párrafos muy extensos, solo la información necesaria para el análisis de los resultados. Las partes que conforman un formato son: 
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Encabezado.
          li 
            i.fas.fa-angle-right
            | Cuerpo.
          li 
            i.fas.fa-angle-right
            | Identificación. 
        .tarjeta.color5.p-3.mb-4
          p.mb-0 Uno de los tipos de formatos, ampliamente utilizado en los procesos de producción, son las listas de chequeo, las cuales permiten la identificación de las actividades de cada proceso.
      .col-md-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img5.jpg' alt='AvatarTop')

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-12.position-relative
        .crd.crd--avatarHorizontal5.py-4
          .row.align-items-center
            .col-lg-3.col-md-4
              figure.mb-2
                img(src='@/assets/curso/tema1/4.png' alt='AvatarTop').img3
            .col-lg-9.col-md-8
              .row.justify-content-center.align-items-center
                .col-md-10
                  p.mb-4 El uso de herramientas no adecuadas, la recolección incorrecta, la manipulación de los productos, el tiempo de almacenamiento, empaquetado y el transporte a sitio final también son situaciones que generan pérdidas, por tal razón se deben extremar las medidas en la poscosecha ya que no solo es en la etapa de crecimiento del producto sino en todo el ciclo productivo.
                .col-lg-2.col-md-5.col-6
                  figure
                    img(src='@/assets/curso/tema2/4.png' alt='AvatarTop').img4
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    ////datos
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
