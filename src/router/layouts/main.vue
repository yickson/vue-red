<script>
import NavBar from '@components/nav-bar'
import Footer from '@components/footer'

export default {
  components: { NavBar, Footer },
}
</script>

<template>
  <div>
    <NavBar/>
    <slot/>
    <Footer/>
  </div>
</template>

<style lang="scss" module>
body {
  overflow-x: hidden;
}
</style>
