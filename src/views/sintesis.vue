<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Se ha finalizado el estudio de los contenidos de este componente formativo. En este punto, haga un análisis de la estructura que se muestra a continuación. Registre esta síntesis en su libreta personal de apuntes. Además, realice un repaso de los puntos que considere necesario. ¡Adelante!


    

</template>

<script>
export default {
  name: 'Sintesis',
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
