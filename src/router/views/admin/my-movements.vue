<script>
import Layout from '@layouts/admin'

export default {
  page: {
    title: 'MyMovements',
    meta: [{ name: 'description', content: 'MyMovements' }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <div class="breadcrumbs">
      <div class="col-sm-8">
        <div class="page-header float-left">
          <div class="page-title">
            <h1>Inversiones - Pagares y certificados</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="page-header float-right">
          <div class="page-title"/>
        </div>
      </div>
    </div>
    <div class="content mt-3">
      <div class="animated fadeIn">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body" >
                <div class="col-md-12">
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">N#</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Accion </td>
                        <td>0000-00-00 00:00:00</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Accion </td>
                        <td>0000-00-00 00:00:00</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Accion </td>
                        <td>0000-00-00 00:00:00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<style lang="scss" module>
@import '@design';
</style>
