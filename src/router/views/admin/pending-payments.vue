<script>
import Layout from '@layouts/admin'

export default {
  page: {
    title: 'PendingPayments',
    meta: [{ name: 'description', content: 'PendingPayments' }],
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
            <h1>Inversiones - Pagos pendientes</h1>
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
              <div class="card-body">
                <div class="col-md-12">
                  <div class="table-responsive-sm">
                    <table class="table table-small table-hover">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Proyecto</th>
                          <th scope="col">Fecha Inv.</th>
                          <th scope="col">Fecha límite Tir</th>
                          <th scope="col">Derechos </th>
                          <th scope="col">Préstamos</th>
                          <th scope="col">Inversión</th>
                          <th scope="col">Transferir ahora</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">11</th>
                          <td>Nombre proyecto</td>
                          <td>0000-00-0</td>
                          <td>0000-00-0</td>
                          <td> ---- </td>
                          <td> ---- </td>
                          <td>3.0000.000</td>
                          <td><a href="#">Transferir</a></td>
                        </tr>
                        <tr>
                          <th scope="row">11</th>
                          <td>Nombre proyecto</td>
                          <td>0000-00-0</td>
                          <td>0000-00-0</td>
                          <td> ---- </td>
                          <td> ---- </td>
                          <td>3.0000.000</td>
                          <td><a href="#">Transferir</a></td>
                        </tr>
                        <tr>
                          <th scope="row">11</th>
                          <td>Nombre proyecto</td>
                          <td>0000-00-0</td>
                          <td>0000-00-0</td>
                          <td> ---- </td>
                          <td> ---- </td>
                          <td>3.0000.000</td>
                          <td><a href="#">Transferir</a></td>
                        </tr>
                        <tr>
                          <th scope="row">11</th>
                          <td>Nombre proyecto</td>
                          <td>0000-00-0</td>
                          <td>0000-00-0</td>
                          <td> ---- </td>
                          <td> ---- </td>
                          <td>3.0000.000</td>
                          <td><a href="#">Transferir</a></td>
                        </tr>
                        <tr>
                          <th scope="row">11</th>
                          <td>Nombre proyecto</td>
                          <td>0000-00-0</td>
                          <td>0000-00-0</td>
                          <td> ---- </td>
                          <td> ---- </td>
                          <td>3.0000.000</td>
                          <td><a href="#">Transferir</a></td>
                        </tr>
                        <tr>
                          <th scope="row">11</th>
                          <td>Nombre proyecto</td>
                          <td>0000-00-0</td>
                          <td>0000-00-0</td>
                          <td> ---- </td>
                          <td> ---- </td>
                          <td>3.0000.000</td>
                          <td><a href="#">Transferir</a></td>
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
    </div>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';
</style>
