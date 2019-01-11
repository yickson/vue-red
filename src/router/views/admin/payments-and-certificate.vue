<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import axios from 'axios'

export default {
  page: {
    title: 'Pagos y certificados',
    meta: [{ name: 'description', content: 'Pagos y certificados' }],
  },
  components: { Layout },
  data() {
    return {
      pagares: [],
    }
  },
  mounted() {
    this.getPagares()
  },
  methods: {
    getPagares() {
      var headers = {
        'Content-type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get(
          'http://52.67.70.146/api/inversiones/' +
            this.currentUser.data.usuario.id +
            '/pagares',
          { headers: headers }
        )
        .then(response => {
          console.log('respuesta' + response)
          this.pagares = response.data.data.contratos
        })
        .catch(error => {
          console.log('error' + error)
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
              <div class="card-body">
                <div class="col-md-12">
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Nombre contrato</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Ver en Google Drive</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="pagare in pagares">
                        <td>
                          <strong>{{ pagare.contrato.nombre }}</strong>
                        </td>
                        <td>{{ pagare.fecha }}</td>
                        <td>
                          <a :href="pagare.documento">Ver en google drive</a>
                        </td>
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
