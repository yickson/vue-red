<script>
import Layout from '@layouts/admin'

export default {
  page: {
    title: 'Dues',
    meta: [{ name: 'description', content: 'Dues' }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <div class="breadcrumbs">
      <div class="col-sm-4">
        <div class="page-header float-left">
          <div class="page-title">
            <h1>Cuotas</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="page-header float-right">
          <div class="page-title"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';
</style>
