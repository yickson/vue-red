<script>
import { authComputed } from '@state/helpers'
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import Card from '@components/home-card'

export default {
  components: { Layout, Card },
  props: {
    item: {
      type: Object,
    },
  },
  page: {
    title: 'Simular',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return {}
  },
  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <Layout>
    <div class="container">
      <div class="row">

        <!-- PROJECT PICTURE -->
        <div class="col-xs-12 col-sm-12 col-md-4">
          <h2 class="project-title">{{ item.identificador }}</h2>
          <h2 class="project-title">{{ item.name }}</h2>
          <img
            :src="item.avatar"
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
              v-model="item.progress"
              type="success"
              class="progress"/>
            <!-- INFO  -->
            <div class="row info-project">
              <div class="col-xs-3">
                <p>$ 0 de </p>
                <p>{{ item.amount }}</p>
              </div>
              <div class="col-xs-3">
                <p>{{ item.amount }}</p>
                <p>faltan para completarlo</p>
              </div>
              <div class="col-xs-3">
                <p>{{ item.rentabilidad }}</p>
                <p>Rentabilidad anualizada</p>
              </div>
              <div class="col-xs-3">
                <p>{{ item.plazo }}</p>
                <p>Plazo para completarlo</p>
              </div>
            </div>
            <!-- HEADER INPUT AND BUTTONS -->
            <div class="simulate-header">
              <p class="text-center title-simulate">Ingrese monto a invertir</p>
              <form class="form-inline text-center">
                <div class="form-group">
                  <label
                    class="sr-only"
                    for="exampleInputAmount">Ingresa monto a invertir</label>
                  <div class="input-group">
                    <input
                      id="exampleInputAmount"
                      :value="$route.params.simulatevalue"
                      type="text"
                      class="form-control"
                      placeholder="Amount"
                    >
                  </div>
                </div>
                <button class="btn">SIMULAR</button>
              </form>
              <p class="text-center">monto a recibir : </p>

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
  margin-bottom: 40px;
}
.container-simulate {
  background-color: #ffffff;
  max-width: 700px;
  padding: 40px;
  margin: 40px auto;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
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

/* usuario loggeado */
.userLogged .derechos {
  background-color: #d22743;
  color: #ffffff;
  margin-left: 0;
}
.userLogged .invest-rights-txt {
}
</style>
