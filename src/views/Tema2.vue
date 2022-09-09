<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Auditoría en el proceso de la poscosecha 

   
    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido
      .h4 2.1	Requisitos 

   
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h4 2.2	Formatos 

   
    
    
    
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
