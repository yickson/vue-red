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
@import '@design';
html,
body {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
.container {
  min-width: $size-content-width-min;
  max-width: $size-content-width-max;
  margin: 0 auto;
}
</style>
