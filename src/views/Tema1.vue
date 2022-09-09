<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 1
      h1 Registro de actividades en la poscosecha

    

    Separador 

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2 1.1	Registros de volúmenes de producción y calidad 

    

    Separador 

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2 1.2	Registros de seguimiento de actividades 

    

    Separador 

    #t_1_3.titulo-segundo.color-acento-contenido
      .h2 1.3	Registros de pérdida de la cosecha 




  
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

<style lang="sass"></style>
