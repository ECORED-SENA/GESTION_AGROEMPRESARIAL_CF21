<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1 Calidad de la producción de la poscosecha

    
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h4 3.1	Rendimientos de la poscosecha 
    

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h4 3.2	Costos del rendimiento 
    
    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h4 3.3	Mermas de la poscosecha

   


</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>
