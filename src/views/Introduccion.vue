<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción  
    
    p.mb-4 El SENA da la bienvenida al estudio del componente formativo <b> <FONT COLOR="#A3314F"> “Monitoreo y evaluación del proceso de poscosecha en la producción agrícola”, </FONT> </b> se espera que todos los participantes tengan una buena experiencia de aprendizaje. Comience con la observación del video que se muestra enseguida. 
    p.mb-4 <b> <FONT COLOR="#A3314F"> ¡Adelante! </FONT> </b>

    figure.mb-5
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/WOGUq8Nz2kY" title="Monitoreo y evaluación del proceso de poscosecha en la producción agrícola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
