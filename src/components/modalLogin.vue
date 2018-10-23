<template>
  <section>
    <modal 
      v-model="open1" 
      title="Modal Title" 
      size="lg">
      <p>This is a large modal.</p>
    </modal>
    <modal 
      v-model="open2" 
      title="Modal Title" 
      size="sm">
      <p>This is a small modal.</p>
    </modal>
  </section>
</template>
<script>
export default {
  data() {
    return {
      open1: true,
      open2: true,
    }
  },
}
</script>
