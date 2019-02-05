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
    this.getInversionData()
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
    getInversionData() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get(
          'http://52.67.70.146/api/inversiones/' +
            this.currentUser.data.usuario.id,
          { headers: headers }
        )
        .then(response => {
          console.log(response)
          this.proyectopendiente = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace('.', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
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
                          <th scope="col">Derechos</th>
                          <th scope="col">Saldo pendiente</th>
                          <th scope="col">Transferir ahora</th>
                        </tr>
                      </thead>
                      <tbody v-if="inversionespendientes.length > 0">
                        <tr v-for="inversion in inversionespendientes">
                          <td>{{ inversion.empresa_id }}</td>
                          <td>{{ inversion.nombre }}</td>
                          <td>27/12/2018</td>
                          <td>$ {{formatPrice(inversion.inversionista_proyectos[0].derechos)}}</td>
                          <td>$ {{formatPrice(inversion.inversionista_proyectos[0].saldo_pendiente)}}</td>
                          <td>Transferir</td>
                        </tr>
                      </tbody>
                      <tbody v-if="inversionespendientes.length === 0">
                        <tr>
                          <td>Solo aparecen transferencias pendientes de proyectos que aún esten abiertos</td>
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
