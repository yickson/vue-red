<script>
import Layout from '@layouts/main'

export default {
  page() {
    return {
      title: this.user.name,
      meta: [
        {
          name: 'description',
          content: `The user profile for ${this.user.data.usuario.nombre}.`,
        },
      ],
    }
  },
  components: { Layout },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <Layout>
    <h1>
      <BaseIcon name="user"/>
      {{ user.data.usuario.nombre }}
      Profile
    </h1>
    {{ user.data.usuario }}
  </Layout>
</template>
