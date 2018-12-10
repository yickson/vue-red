<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import axios from 'axios'

export default {
  page: {
    title: 'Mandatos',
    meta: [{ name: 'description', content: 'Mandatos' }],
  },
  components: { Layout },
  data() {
    return {
      contratos: [],
      proyecto: 0,
      gettedproyect: [],
    }
  },
  mounted() {
    this.getMandatos()
  },
  methods: {
    getMandatos() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get(
          'http://52.67.70.146/api/inversiones/' +
            this.currentUser.data.usuario.id +
            '/mandatos',
          {
            headers: headers,
          }
        )
        .then(response => {
          this.contratos = response.data.data.contratos
          this.proyecto = response.data.data.contratos[0].proyecto_id
          this.getDetalleProyecto()
        })
        .catch(error => {
          console.log(error)
        })
    },
    getDetalleProyecto() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get('http://52.67.70.146/api/proyecto/' + this.proyecto, {
          headers: headers,
        })
        .then(response => {
          console.log(response)
          this.gettedproyect = response.data.data
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
            <h1>Inversiones - mandatos</h1>
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
                        <th scope="col">ID Proyecto</th>
                        <th scope="col">Nombre Proyecto</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Descargar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="contrato in contratos">
                        <td>{{ contrato.contrato.nombre }}</td>
                        <td>{{ gettedproyect.id }}</td>
                        <td>{{ gettedproyect.nombre }}</td>
                        <td>{{ contrato.fecha }}</td>
                        <td>{{ contrato.estado.descripcion }}</td>
                        <td class="text-center">
                          <i class="far fa-file-pdf"/>
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


<style>
.fa-file-pdf {
  font-size: 20px;
}
</style>
