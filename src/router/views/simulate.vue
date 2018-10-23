<script>
import axios from 'axios'
import { authComputed } from '@state/helpers'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import Card from '@components/home-card'

export default {
  components: { Layout, Card },
  props: {
    proyecto: {
      type: Object,
    },
  },
  page: {
    title: 'Simular',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return {
      montoARecibir: '0',
      simulateData: [],
    }
  },

  mounted() {},
  computed: {
    ...authComputed,
  },
  methods: {
    simulate() {
      axios
        .post('http://52.67.70.146/api/simular', {
          proyecto_id: this.proyecto.id,
          monto: 40000000,
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiMTdmM2U3MzE5YWM2ZTkyYzE3NDJiOWE0OTYwNWZkOGU1NDAxOTMwMDIyMzhiNTMyMjJmZDk2Yzc5YTQwYTQyZDZlNGFkNTkzMWI0NzQ5In0.eyJhdWQiOiIzIiwianRpIjoiZGIxN2YzZTczMTlhYzZlOTJjMTc0MmI5YTQ5NjA1ZmQ4ZTU0MDE5MzAwMjIzOGI1MzIyMmZkOTZjNzlhNDBhNDJkNmU0YWQ1OTMxYjQ3NDkiLCJpYXQiOjE1MzkzNjA0OTEsIm5iZiI6MTUzOTM2MDQ5MSwiZXhwIjoxNTcwODk2NDkxLCJzdWIiOiI2MyIsInNjb3BlcyI6W119.NZn0Omh6CyNbiNiv3T7-GLaPCaaN1F221Qj5mI5AGbpIEiK3esZH9M-2ppTDiA5wpkd_jMNTfcR6EMjfpi1I877RvEE0HGElDvjhiCr2CgD6zR7bnvHKGAPSfiOBTc5aG7lGNcIdM8ZuK_uKlwqEIxB0l8eG1OXzDb25Re0O0vyOmThUUfbWBpqMy2m6KSkuUM0Z8TUUjxJOAAMnGKfsOIZS8QnPE8QzpbwKZPNa5K2wW9f-jWy4oolJGfQ5gk41XpUKUPmnmrFLNN4O2Vmpv3BC4y37aCQre_i2Albh9wpBrrKUP--ZopPG52qcEXrKPomQluhwYX3X1t_2zQRjYMj0_IaBEnUTT20oKvM7wjUEfI6VvjlTwQaSV2HuTsiiTit0MgMDqK5CpHy_pjheqaMbdmjRM-qSVJT7bcoI1SSPuMvwfb8Yz6JCZGUXaZpMqN6wgEldFlIKL5y8Bt8uCwqzc4YIU0YBBU2y6HPh9ki6MVYEfJtftAS-psukePcSXHjRtxj0tPZftqsLWKogEW6wcsvvbN8nwP3jBxpTpaI-aWKz7ECsOrL65UNiNXlzhBKXtiyuZEaHCTvM20yaHYZ9Vx8zM48psssXzwxWmO-8Gg8NLHTIZEBIk_3sgunjaoyubbN-vRg3DYDTuCmtwMz2aCdEAR7la151tvP14ls',
        })
        .then(response => (this.simulateData = response.data.data))
        .catch(function(error) {
          console.log(error)
        })
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
  },
}
</script>

<template>
  <Layout>
    <div class="container">
      <div class="row">

        <!-- PROJECT PICTURE -->
        <div class="col-xs-12 col-sm-12 col-md-4">
          <h2 class="project-title">{{ proyecto.id }}</h2>
          <h2 class="project-title">{{ proyecto.nombre }}</h2>
          <img
            :src="proyecto.foto_proyecto"
            alt=""
            class="img-responsive img-thumbnail">
        </div>

        <!-- SIMULATOR -->
        <div class="col-xs-12 col-sm-12 col-md-8">
          <div class="container-simulate">
            <!--PROGRESS BAR -->
            <label
              for="progress"
              class="progress-label">Finanaciado al 0% - Reservado 0%</label>
            <progress-bar
              type="success"
              class="progress"/>
            <!-- INFO  -->
            <div class="row info-project">
              <div class="col-xs-3">
                <p>$ 0 de </p>
                <p>{{ proyecto.monto }}</p>
              </div>
              <div class="col-xs-3">
                <p>{{ proyecto.monto }}</p>
                <p>faltan para completarlo</p>
              </div>
              <div class="col-xs-3">
                <p>{{ proyecto.desc_derechos }}</p>
                <p>Rentabilidad anualizada</p>
              </div>
              <div class="col-xs-3">
                <p>{{ proyecto.cierre }}</p>
                <p>Plazo para completarlo</p>
              </div>
            </div>
            <!-- HEADER INPUT AND BUTTONS -->
            <div class="simulate-header">
              <p class="text-center title-simulate">Ingrese monto a invertir</p>
              <div class="row simulate-input-result">
                <div class="col-xs-12 col-sm-6">
                  <form
                    class="form-inline text-center"
                    @submit.prevent="simulate">
                    <div class="form-group">
                      <label
                        class="sr-only"
                        for="exampleInputAmount">Ingresa monto a invertir</label>
                      <div class="input-group">
                        <input
                          id="exampleInputAmount"
                          v-model="$route.params.simulatevalue"
                          type="text"
                          class="form-control"
                          placeholder="Amount"
                        >
                      </div>
                    </div>
                    <button class="btn">SIMULAR</button>
                  </form>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <p class="text-center monto-recibir">monto a recibir : {{ formatPrice(simulateData.montoARecibir) }}</p>
                </div>
              </div>



              <div
                v-if="!loggedIn"
                class="text-center">
                <p>Debes iniciar sesion para poder invertir.</p>
                <button class="btn">INGRESAR</button>
              </div>

              <div
                v-if="loggedIn"
                class="userLogged text-center">
                <button class="btn total">INVERTIR EL TOTAL AHORA</button>
                <p>Reservaremos tu cupo. El beneficio es que no tendrás que volver para transferir.
                Si aún no es la fecha de inicio del proyecto: Tu rentabilidad real bajará por unos días.
                </p>
                <button class="btn derechos">INVERTIR SOLO LOS DERECHOS</button>
                <p class="invest-rights-txt">Al transferir reservaremos tu cupo. Te avisaremos cuando debes transferir el saldo de tu inversión.
                Desde ahí tienes 1 día para hacerlo, si no, pierdes los derechos.
                </p>
              </div>
            </div>
            <!-- HEADER INPUT AND BUTTONS -->

            <!-- TABS -->
            <vue-tabs
              type="pills"
              centered>
              <v-tab title="Simulaciones">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-6">
                    <p class="table-title">Detalle de la inversión</p>
                    <!-- tabla 1-->
                    <table class="table table-striped">
                      <tr>
                        <td>Tipo de credito</td>
                        <td>Factura</td>
                      </tr>
                      <tr>
                        <td>Tiempo de prestamo</td>
                        <td>62 Días</td>
                      </tr>
                      <tr>
                        <td>Fecha inicio del proyecto</td>
                        <td>27-09-2018</td>
                      </tr>
                      <tr>
                        <td>Fecha estimada de pago</td>
                        <td>27-09-2018</td>
                      </tr>
                    </table>
                    <!-- tabla 1-->
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6">
                    <p class="table-title">Costo de la inversión</p>
                    <!-- tabla 2-->
                    <table class="table table-striped">
                      <tr>
                        <td>Tipo de credito</td>
                        <td>Factura</td>
                      </tr>
                      <tr>
                        <td>Tiempo de prestamo</td>
                        <td>62 Días</td>
                      </tr>
                      <tr>
                        <td>Fecha inicio del proyecto</td>
                        <td>27-09-2018</td>
                      </tr>
                      <tr>
                        <td>Fecha estimada de pago</td>
                        <td>27-09-2018</td>
                      </tr>
                    </table>
                    <!-- tabla 2-->
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-12">
                    <p class="table-title">Cuotas</p>
                    <!-- tabla 3-->
                    <table class="table table-striped">
                      <tr>
                        <td>Mes</td>
                        <td>Cuota</td>
                        <td>Fecha</td>
                      </tr>
                      <tr v-for="cuota in simulateData.cuotas">
                        <td>{{ cuota.mes }}</td>
                        <td>{{ formatPrice(cuota.cuota) }}</td>
                        <td>{{ cuota.fecha }}</td>
                      </tr>
                    </table>
                    <!-- tabla 3-->
                  </div>
                </div>
              </v-tab>

              <v-tab title="Detalle operacion">
                Detalle operacion
              </v-tab>

              <v-tab title="Estadísticas">
                Estadísticas
              </v-tab>
              <v-tab title="Garantía"/>
            </vue-tabs>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<style>
.project-title {
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 15px;
}
.container-simulate {
  background-color: #ffffff;
  max-width: 700px;
  padding: 40px;
  margin: 40px auto;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
}

.simulate-input-result {
  background-color: #eee;
  padding: 20px 0;
  margin-bottom: 20px;
}
.simulate-header {
  margin-bottom: 40px;
}
.container .progress {
  height: 13px;
}
.container-simulate .form-control {
  height: 40px;
  box-shadow: none;
  border-radius: 2px;
}
.container-simulate .title-simulate {
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
.container-simulate .progress-label {
  font-weight: lighter;
  font-size: 12px;
}
.container-simulate .btn {
  height: 40px;
  border-radius: 2px;
  background-color: #ff9302;
  color: #ffffff;
}
.container-simulate .table-title {
  font-weight: bold;
}
.container-simulate .table-striped tr:nth-child(odd) {
  background-color: #eee;
}
.container-simulate .table-striped tr td {
  padding: 5px 3px;
}
.container-simulate .nav-pills > li.active > a,
.nav-pills > li.active > a:focus,
.nav-pills > li.active > a:hover {
  color: #ff9302;
  border-radius: 2px;
  background-color: #ffffff;
  border: ;
}
/* info project */
.info-project {
  text-align: center;
  margin-bottom: 30px;
}
.info-project p:first-child {
  font-weight: bold;
  font-size: 16px;
}
.monto-recibir {
  font-size: 20px;
}
/* usuario loggeado */
.userLogged .derechos {
  background-color: #d22743;
  color: #ffffff;
  margin-left: 0;
}
.userLogged .invest-rights-txt {
}
</style>
