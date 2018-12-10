<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import axios from 'axios'

export default {
  page: {
    title: 'Pagos pendientes',
    meta: [{ name: 'description', content: 'PendingPayments' }],
  },
  components: { Layout },
  data() {
    return {
      inversionespendientes: [],
    }
  },
  mounted() {
    this.getPendingInversiones()
  },
  methods: {
    getPendingInversiones() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get(
          'http://52.67.70.146/api/inversiones/' +
            this.currentUser.data.usuario.id +
            '/pendiente',
          { headers: headers }
        )
        .then(response => {
          this.inversionespendientes = response.data.data
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  computed: {
    ...authComputed,
  },
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
                          <th scope="col">Derechos</th>
                          <th scope="col">Préstamos</th>
                          <th scope="col">Inversión</th>
                          <th scope="col">Transferir ahora</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="inversion in inversionespendientes">
                          <td>{{ inversion.nombre }}</td>
                          <td/>
                          <td/>
                          <td/>
                          <td/>
                          <td/>
                          <td/>
                          <td/>
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
