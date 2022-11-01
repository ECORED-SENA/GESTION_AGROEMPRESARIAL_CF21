<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción  
    
    p.mb-4(data-aos="fade-right") El SENA da la bienvenida al estudio del componente formativo <b> <FONT COLOR="#A3314F"> “Monitoreo de programas de alimentación, sanidad y reproducción animal”, </FONT> </b> se espera que todos los participantes tengan una buena experiencia de aprendizaje. Comience con la observación del video que se muestra enseguida. 
    p.mb-4(data-aos="fade-right") <b> <FONT COLOR="#A3314F"> ¡Adelante! </FONT> </b>

    figure.mb-5(data-aos="fade")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/wbjL0tk2aQ8" title="Monitoreo de programas de alimentación, sanidad y reproducción animal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
