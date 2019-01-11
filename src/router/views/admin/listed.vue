<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import axios from 'axios'

export default {
  page: {
    title: 'listed',
    meta: [{ name: 'description', content: 'listed' }],
  },
  components: { Layout },
  data() {
    return {
      inversiones: [],
    }
  },
  mounted() {
    this.getInversiones()
  },
  methods: {
    getInversiones() {
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
          this.inversiones = response.data.data
          console.log(response)
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
            <h1>Inversiones - Inversiones</h1>
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
                  <div class="table-responsive-sm col-padding-up">
                    <table class="table table-hover">
                      <thead class="thead-light">
                        <tr>
                          <th>Id</th>
                          <th>Proyecto</th>
                          <th>N° Doc</th>
                          <th>TIR ppto %</th>
                          <th>TIR mes %</th>
                          <th>Fecha inv.</th>
                          <th>Inversión</th>
                          <th>Derechos</th>
                          <th>Monto recibido a la fecha</th>
                          <th>Monto a recibir</th>
                          <th>Cuota por pagar</th>
                          <th>Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr 
                          v-for="inversion in inversiones" 
                          :key="inversion.id">
                          <td :key="inversion.id">{{ inversion.id }}</td>
                          <td>{{ inversion.proyecto.nombre }}</td>
                          <td>{{ inversion.cod }}</td>
                          <td>{{ inversion.proyecto.tir }} %</td>
                          <td>--</td>
                          <td>{{ inversion.created_at }}</td>
                          <td>{{ formatPrice(inversion.monto) }}</td>
                          <td>{{ formatPrice(inversion.derechos) }}</td>
                          <td>--</td>
                          <td>{{ formatPrice(inversion.monto - inversion.derechos) }}</td>
                          <td>--</td>
                          <td v-if="inversion.proyecto.verificado == 1">Transferido</td>
                          <td v-else="inversion.proyecto.verificado == 0">Pendiente</td>
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
.btn-success {
  color: #fff !important;
}
.dropdown-menu > li > .dropdown-menu-item {
  display: block;
  width: 100%;
  padding: 3px 20px;
  margin: 5px 0;
  clear: both;
  color: #333;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  -moz-user-select: none;
  user-select: none;
  outline: none;
}
.dropdown-menu > li:hover .dropdown-menu-item,
.dropdown-menu > li:focus .dropdown-menu-item {
  color: #262625;
  background-color: #f5f5f5;
}
.dropdown-menu > li > .dropdown-menu-item.checkbox {
  margin: 0;
  font-weight: normal;
}
.dropdown-menu > li > .dropdown-menu-item.checkbox input {
  display: none;
}
.col-padding-up {
  margin-top: 10px;
}
.btn-block {
  margin-bottom: 5px;
}
</style>
