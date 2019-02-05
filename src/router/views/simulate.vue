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
      default: () => [],
    },
  },
  page: {
    title: 'Simular',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  data() {
    return {
      simulateData: [],
      porcentajeFinanciado: 0,
      porcentajeReservado: 0,
      mountRest: 0,
      bancos: [],
      cuentatipo: [],
      numero: '',
      banco_id: '',
      tipo_cuenta_id: '',
      pasopago: 1,
      userBanco: [],
    }
  },
  computed: {
    ...authComputed,
  },
  mounted() {
    this.simulate()
    this.porcentajeProyecto()
  },
  beforeMount() {
    this.getUserBanco()
    this.getTipoCuenta()
  },
  methods: {
    porcentajeProyecto() {
      var porcentajeFinanciado =
        this.proyecto.get_monto_proyecto[0].monto / this.proyecto.monto
      var result = (porcentajeFinanciado * 100).toFixed(2)
      this.porcentajeFinanciado = parseInt(result)

      var mountrest =
        this.proyecto.monto - this.proyecto.get_monto_proyecto[0].monto
      this.mountRest = mountrest

      var porcentajeReservado =
        this.proyecto.get_monto_reserva[0].reserva / this.proyecto.monto
      var resultreserva = porcentajeReservado * 100
      console.log(resultreserva)
      this.porcentajeReservado = parseInt(resultreserva)
    },
    simulate() {
      axios
        .post('http://52.67.70.146/api/simular', {
          proyecto_id: this.proyecto.id,
          monto: this.$route.params.simulatevalue,
        })
        .then(
          response => (
            (this.simulateData = response.data.data),
            (this.proyectoCuotas = response.data.data.cuotas)
          )
        )
        .catch(function(error) {
          this.error = error
        })
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace('.', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    investamount() {
      this.getBancos()
      this.pasopago = 2
    },
    invest_rights() {
      var autentication = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      var body = {
        user_id: this.currentUser.data.usuario.id,
        proyecto_id: this.proyecto.id,
        monto: this.proyecto.monto,
        uso_plataforma: 0,
        derechos: this.simulateData.cobroDerechos,
      }
      axios
        .post('http://52.67.70.146/api/transferencias/reserva', body, {
          headers: autentication,
        })
        .then(response => {
          this.getBancos()
          this.pasopago = 2
        })
        .catch(function(error) {
          this.error = error
        })
    },
    // paso 2 //
    getUserBanco() {
      axios
        .get(
          'http://52.67.70.146/api/usuario/banco/' +
            this.currentUser.data.usuario.id
        )
        .then(
          response => (
            (this.userBanco = response.data.data.cuenta_bancaria),
            (this.banco_id = this.userBanco.banco.id),
            (this.numero = this.userBanco.numero),
            (this.tipo_cuenta_id = this.userBanco.tipo_cuenta_id)
          )
        )
    },
    getBancos() {
      axios
        .get('http://52.67.70.146/api/banco')
        .then(response => (this.bancos = response.data.data))
    },
    getTipoCuenta() {
      axios
        .get('http://52.67.70.146/api/bancos/tipos/')
        .then(response => (this.cuentatipo = response.data.data))
    },

    sendDataBank() {
      this.$validator.validateAll().then(result => {
        if (result) {
          /** llamada para enviar la data del banco que transferirá */
          axios
            .post('http://52.67.70.146/api/usuario/banco', {
              numero: this.numero,
              banco_id: this.banco_id,
              tipo_cuenta_id: 1,
              user_id: this.currentUser.data.usuario.id,
            })
            .then(response => {
              this.response = response
              console.log(response)
              this.pasopago = 3
            })
            .catch(error => {
              this.error = error
              console.log(error)
            })
        } else {
          console.log('errp')
        }
      })
    },
    // paso 3//
    sendMail() {
      var headersmail = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      var datamail = { user_id: this.currentUser.data.usuario.id }
      axios
        .post('http://52.67.70.146/api/transferir', datamail, {
          headers: headersmail,
        })
        .then(response => {
          this.response = response
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    transferBank() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      var data = {
        user_id: this.currentUser.data.usuario.id,
        proyecto_id: this.proyecto.id,
        monto: parseInt(this.$route.params.simulatevalue),
      }

      axios
        .post('http://52.67.70.146/api/transferencias', data, {
          headers: headers,
        })
        .then(response => {
          this.response = response
          console.log(response)
          this.sendMail()
          this.$router.push({
            name: 'successproyect',
            params: {
              proyecto: this.proyecto,
              proyectoData: this.simulateData,
            },
          })
        })
        .catch(error => {
          this.error = error
          console.log(error)
        })
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
          <img :src="proyecto.foto_proyecto" alt class="img-responsive img-thumbnail">
        </div>

        <!-- SIMULATOR -->
        <div class="col-xs-12 col-sm-12 col-md-8">
          <div class="row">
            <div class="col-xs-12 col-sm-12 info-project">
              <!--PROGRESS BAR -->
              <label
                for="progress"
                class="progress-label"
              >Financiado al {{ porcentajeFinanciado }}% - Reservado {{ porcentajeReservado }}%</label>
              <progress-bar>
                <progress-bar-stack v-model="porcentajeFinanciado" type="success"/>
                <progress-bar-stack
                  v-if="porcentajeFinanciado > 0"
                  v-model="porcentajeReservado"
                  type="warning"
                  striped
                />
              </progress-bar>
              <!-- INFO  -->
              <div class="row">
                <div class="col-xs-3">
                  <p>$ {{ formatPrice(proyecto.get_monto_proyecto[0].monto) }} de</p>
                  <p>$ {{ formatPrice(proyecto.monto) }}</p>
                </div>
                <div class="col-xs-3">
                  <p>$ {{ formatPrice(mountRest) }}</p>
                  <p>faltan para completarlo</p>
                </div>
                <div class="col-xs-3">
                  <p>{{ proyecto.tir }} %</p>
                  <p>Rentabilidad anualizada</p>
                </div>
                <div class="col-xs-3">
                  <p>
                    {{ proyecto.cuotas }}
                    <span v-if="proyecto.credito_tipo = 1">Días</span>
                    <span v-else>Cuotas</span>
                  </p>
                  <p>Plazo para completarlo</p>
                </div>
              </div>
            </div>
          </div>
          <!--PASO 1 -->
          <div v-if="pasopago == 1" class="container-simulate animated fadeIn">
            <!-- HEADER INPUT AND BUTTONS -->
            <div class="simulate-header">
              <p class="text-center title-simulate">Ingrese monto a invertir</p>
              <div class="row simulate-input-result">
                <div class="col-xs-12 col-sm-6">
                  <form class="form-inline text-center" @submit.prevent="simulate">
                    <div class="form-group">
                      <label class="sr-only" for="exampleInputAmount">Ingresa monto a invertir</label>
                      <div class="input-group">
                        <input
                          v-model="$route.params.simulatevalue"
                          type="text"
                          class="form-control"
                          placeholder="Amount"
                          @keyup="simulate"
                        >
                      </div>
                    </div>
                    <button class="btn">SIMULAR</button>
                  </form>
                </div>
                <div class="col-xs-12 col-sm-6">
                  <p
                    class="text-center monto-recibir"
                  >monto a recibir : $ {{ formatPrice(simulateData.montoARecibir) }}</p>
                </div>
              </div>

              <div v-if="!loggedIn" class="text-center">
                <p>Debes iniciar sesion para poder invertir.</p>
                <button class="btn">INGRESAR</button>
              </div>

              <div v-else="loggedIn" class="userLogged">
                <div class="row">
                  <div class="col-xs-12 col-md-6">
                    <button class="btn total" @click="investamount">INVERTIR EL TOTAL AHORA</button>
                    <p class="text-left">
                      Reservaremos tu cupo. El beneficio es que no tendrás que volver para transferir.
                      Si aún no es la fecha de inicio del proyecto: Tu rentabilidad real bajará por unos días.
                    </p>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <button class="btn derechos" @click="invest_rights">INVERTIR SOLO LOS DERECHOS</button>
                    <p class="text-left">
                      Al transferir reservaremos tu cupo. Te avisaremos cuando debes transferir el saldo de tu inversión.
                      Desde ahí tienes 1 día para hacerlo, si no, pierdes los derechos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- HEADER INPUT AND BUTTONS -->
            <!-- TABS -->
            <vue-tabs type="pills" centered>
              <v-tab title="Simulaciones">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-6">
                    <p class="table-title">Detalle de la inversión</p>
                    <!-- tabla 1-->
                    <table class="table table-striped">
                      <tr>
                        <td>Tipo de credito</td>
                        <td>{{ proyecto.credito_tipo.valor }}</td>
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
                        <td>Derechos por participar</td>
                        <td>Factura</td>
                      </tr>
                      <tr>
                        <td>Préstamo</td>
                        <td>62 Días</td>
                      </tr>
                      <tr>
                        <td>Monto total a invertir
                          <br>(Préstamos + Derechos)
                        </td>
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
                      <tr v-for="cuota in simulateData.cuotas" :key="cuota.id">
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
                {{ proyecto.motivo }}
              </v-tab>

              <v-tab title="Estadísticas">Estadísticas</v-tab>
              <v-tab title="Garantía"/>
            </vue-tabs>
          </div>
          <!--PASO 1 -->
          <!-- PASO 2 -->
          <div v-else-if="pasopago == 2" class="container-simulate paso2">
            <form class="animated fadeIn" @submit.prevent="sendDataBank">
              <h3 class="text-center">Cuenta donde pagaremos tu inversión</h3>
              <label for>Banco</label>
              <select
                v-validate="'required'"
                :class="{'input': true, 'is-danger': errors.has('banco') }"
                v-model="banco_id"
                name="banco"
                class="form-control"
                data-vv-validate-on="blur"
              >
                <option value>Selecciona una institución bancaria</option>
                <option v-for="banco in bancos" :value="banco.id">{{ banco.nombre }}</option>
              </select>
              <span class="error">{{ errors.first('banco') }}</span>

              <!--tipo de cuenta -->
              <label for>Tipo Cuenta</label>
              <select
                v-validate="'required'"
                :class="{'input': true, 'is-danger': errors.has('cuenta_tipo') }"
                v-model="tipo_cuenta_id"
                name="cuenta_tipo"
                class="form-control"
                data-vv-validate-on="blur"
              >
                <option value>Selecciona tipo de cuenta</option>
                <option
                  v-for="cuentatipo in cuentatipo"
                  :value="cuentatipo.id"
                >{{ cuentatipo.descripcion }}</option>
              </select>
              <span class="error">{{ errors.first('cuenta_tipo') }}</span>
              <!-- numero de cuenta -->
              <label for>Nro Cuenta</label>
              <input
                v-validate="'required'"
                :class="{'input': true, 'is-danger': errors.has('numero_cuenta') }"
                v-model="numero"
                data-vv-validate-on="blur"
                type="text"
                name="numero_cuenta"
                class="form-control"
                placeholder="Ingrese número de cuenta"
              >
              <span class="error">{{ errors.first('numero_cuenta') }}</span>
              <!-- rut -->
              <label for>Rut</label>
              <input
                v-model="this.currentUser.data.usuario.rut"
                type="text"
                class="form-control"
                disabled
                placeholder="Ingrese su RUT"
              >
              <!-- condiciones de uso -->
              <div class="text-center">
                <label>
                  <input
                    v-validate="'required'"
                    :class="{'input': true, 'is-danger': errors.has('terms') }"
                    type="checkbox"
                    data-vv-validate-on="blur"
                    name="terms"
                  >
                  Acepto Condiciones de uso
                </label>
                <span v-show="errors.has('terms')" class="error-terms">{{ errors.first('terms') }}</span>
                <a href>Ver Condiciones de Uso</a>
                <button class="btn">SIGUIENTE</button>
              </div>
            </form>
          </div>
          <!-- PASO 2 -->
          <!-- PASO 3 -->
          <div v-else-if="pasopago == 3" class="container-simulate paso3">
            <form action class="animated fadeIn">
              <h3 class="text-center">Detalle de la Inversión:</h3>
              <div class="row text-center">
                <div class="col-xs-12 col-sm-3">
                  <p>Préstamo</p>
                </div>
                <div class="col-xs-12 col-sm-3">
                  <p>Derechos Por Participar</p>
                </div>
                <div class="col-xs-12 col-sm-3">
                  <p>Monto Total a Invertir</p>
                  <p>{{ formatPrice($route.params.simulatevalue) }}</p>
                </div>
                <div class="col-xs-12 col-sm-3">
                  <p>Monto Total a Recibir</p>
                  <p>{{ formatPrice(simulateData.montoARecibir) }}</p>
                </div>
              </div>
              <div class="row">
                <h3 class="text-center">Métodos de Pago</h3>
                <div class="col-xs-12 col-sm-6">
                  <!--<div class="btn-pago khipu">
                    <img
                      src="../../../src/assets/images/khipu.png"
                      alt="pago khipu"
                      class="img-responsive"
                    >
                  </div>-->
                </div>
                <div class="col-xs-12 col-sm-12 text-center">
                  <div class="btn-pago bank" @click="transferBank()">
                    <img
                      src="../../../src/assets/images/transfer.jpg"
                      alt="pago con transferencia"
                      class="img-responsive"
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!-- PASO 3 -->
        </div>
      </div>
    </div>
  </Layout>
</template>


<style>
.project-title {
  margin-top: 40px;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
}
.container-simulate {
  max-width: 800px;
  padding: 20px 40px 20px 40px;
  margin: 10px auto 40px auto;
  background-color: #fff;
  border-radius: 6px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
}

.simulate-input-result {
  padding: 20px 0;
  margin-bottom: 20px;
  background-color: #eee;
}
.simulate-header {
  margin-bottom: 40px;
}
.container .progress {
  height: 13px;
}
.container-simulate .form-control {
  height: 40px;
  border-radius: 2px;
  box-shadow: none;
}
.container-simulate .title-simulate {
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}
.container-simulate .progress-label {
  font-size: 12px;
  font-weight: lighter;
}
.container-simulate .btn {
  height: 40px;
  color: #fff;
  background-color: #ff9302;
  border-radius: 2px;
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
  background-color: #fff;
  border-radius: 2px;
}
.tab-content {
  padding: 10px;
}

/* info project */
.info-project {
  margin: 20px auto;
}
.info-project p:first-child {
  font-size: 16px;
  font-weight: bold;
}
.monto-recibir {
  font-size: 20px;
}

/* usuario loggeado */
.userLogged .derechos {
  margin-left: 0;
  color: #fff;
  background-color: #d22743;
}
.userLogged .invest-rights-txt {
}

/* paso 2 */
.paso2 .btn,
a {
  display: block;
  margin: 5px auto;
}
.paso2 label {
  margin-top: 15px;
}

/* paso 3 */
.paso3 {
}
.btn-pago {
  height: 90px;
  width: 100%;
  border-radius: 2px;
  margin-top: 40px;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
}
.khipu {
  background: #483774;
}
.btn-pago img {
  height: 90px;
  margin: 0 auto;
  width: auto;
}

.bank {
  text-transform: uppercase;
  font-size: 16px;
  background: #fff;
}
.paso2 span {
  display: block;
}
.is-danger {
  border: 1px solid #d4000069 !important;
  background-color: #f798982b;
}
.error {
  background-color: #d40000c9;
  position: relative;
  top: -1px;
  color: #ffffff;
  z-index: 99999;
  font-size: 13px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  padding-left: 2px;
}

.error-terms {
  color: #d40000c9;
  font-size: 10px;
  position: relative;
  top: -2px;
}
</style>
