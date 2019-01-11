<script>
export default {
  props: {
    proyecto: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      btnSimulateCliked: false,
      dataEmpty: false,
      amount: 0,
      porcentajeFinanciado: 0,
    }
  },
  mounted() {
    this.porcentajeProyecto()
  },
  methods: {
    success() {
      this.$swal(
        '¡Bien!',
        'Tu solicitud se ha procesado correctamente',
        'success',
        {
          button: false,
        }
      )
    },
    warning() {
      this.$swal(
        'Lo sentimos',
        'El monto a simular debe ser mayor a 1.000.000',
        'warning',
        {
          button: false,
        }
      )
    },
    simulate() {
      this.btnSimulateCliked = true
    },
    submitAmount() {
      if (
        this.amount === null ||
        this.amount === '' ||
        this.amount === undefined
      ) {
        console.log('ingresa monto a simular')
        this.dataEmpty = true
      } else {
        if (this.amount > 100000 || this.proyecto.monto < 800000) {
          this.dataEmpty = false
          this.$router.push({
            name: 'simulate',
            params: {
              proyecto: this.proyecto,
              simulatevalue: this.amount,
            },
          })
        } else {
          this.warning()
        }
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace('.', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    porcentajeProyecto() {
      var porcentajeFinanciado =
        this.proyecto.get_monto_proyecto[0].monto / this.proyecto.monto
      var result = (porcentajeFinanciado * 100).toFixed(2)
      this.porcentajeFinanciado = parseInt(result)
    },
  },
}
</script>

<template>
  <div>
    <div class="card-proyect">
      <div class="card-header">
        <!-- header-->
        <div class="row">
          <div class="col-xs-12 col-sm-12">
            <img 
              :src="proyecto.foto_proyecto" 
              alt 
              class="img-responsive avatar">
          </div>
        </div>
      </div>
      <!-- header-->
      <!-- body -->
      <div class="card-body">
        <div class="card-title">
          <p>{{ proyecto.nombre }}</p>
        </div>
        <p class="card-price">$ {{ formatPrice(proyecto.monto) }}</p>
        <label for="progress">Financiado {{ porcentajeFinanciado + '%' }}</label>
        <progress-bar>
          <progress-bar-stack
            v-if="porcentajeFinanciado == 100 "
            v-model="porcentajeFinanciado"
            class="Fullfinanced"
            type="success"
          />
          <progress-bar-stack 
            v-else 
            v-model=" porcentajeFinanciado" 
            type="warning"/>
        </progress-bar>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6">
            <p>Respaldo</p>
            <p>Taza de Retorno</p>
            <p>Plazo</p>
            <p>ID</p>
          </div>
          <div class="col-xs-6 col-sm-6 col-md-6">
            <p>Factura</p>
            <p class="card-value">{{ proyecto.desc_derechos }}</p>
            <p class="card-value">{{ proyecto.empresa_id }}</p>
            <p class="card-value">{{ proyecto.monto_a_financiar }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 text-center">
            <span 
              v-tooltip="'Dias Restantes'" 
              class="glyphicon glyphicon-calendar"/>
            <span>0</span>
            <span 
              v-tooltip="'Cantidad de visitas'" 
              class="glyphicon glyphicon-eye-open"/>
            <span>{{ proyecto.get_cant_inversionista[0].inversionistas }}</span>
            <span 
              v-tooltip="'Cantidad de Inversionistas'" 
              class="glyphicon glyphicon-user"/>
            <span>{{ proyecto.get_cant_inversionista[0].inversionistas }}</span>
          </div>
        </div>
      </div>
      <div class="row card-footer">
        <div 
          v-show="!btnSimulateCliked" 
          class="col-xs-12 col-sm-12">
          <button 
            v-if="porcentajeFinanciado == 100" 
            class="btn card-button Fullfinanced">
            financiado
            <i class="fas fa-check-circle"/>
          </button>
          <button 
            v-else 
            class="btn card-button" 
            @click="simulate()">Simular</button>
        </div>
        <div 
          v-show="btnSimulateCliked" 
          class="col-xs-12 col-sm-12 text-center">
          <form 
            class="form-inline footer-input" 
            @submit.prevent="submitAmount">
            <div class="form-group">
              <div class="input-group">
                <input
                  v-model="amount"
                  type="text"
                  class="form-control form-footer"
                  placeholder="Cantidad"
                  @keyup="formatPrice"
                >
              </div>
            </div>
            <button class="btn btn-submit-simulate">
              <i class="fas fa-arrow-circle-right"/>
            </button>
          </form>
          <span v-show="dataEmpty">ingrese monto a calcular</span>
        </div>
      </div>
    </div>
  </div>
</template>





<style>
.card-proyect {
  margin-top: 40px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  max-width: 250px;
  min-height: 190px;
  font-size: 1em;
  text-align: left;
  background: #fff;
  border: none;
  border-radius: 6px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.1s ease, transform 0.1s ease,
    -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
}
.card-proyect:hover {
  transform: translateY(-5px);
  -webkit-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.btn-submit-simulate {
  width: 40px;
  height: 40px;
  background: #fc4a1a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f78433,
    #fc4a1a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f78433,
    #fc4a1a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  border-radius: 2px;
}
.card-body {
  padding: 10px;
}
.card-proyect p {
  margin-bottom: 3px;
}
.card-proyect .avatar {
  height: auto;
}
.card-footer {
  font-size: 1em;
  color: rgba(0, 0, 0, 0.4);
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
}
.footer-input {
  padding: 6px;
}
.form-footer {
  height: 40px;
  box-shadow: none;
  border-right: none;
}
.card-proyect .btn > .Fullfinanced {
  background-color: green !important;
}
.card-proyect .card-button {
  width: 100%;
  color: #fff;
  /*background-color: #ea5b2b;*/
  background: #fc4a1a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f78433,
    #fc4a1a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f78433,
    #fc4a1a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border: none;
  border-radius: 2px;
}

.card-price {
  margin-bottom: 0;
  font-size: 1.2em;
  font-weight: bold;
  color: #ea5b2b;
}
.card-title {
  padding: 0;
  height: 40px;
  margin-top: 5px;
  font-weight: bold;
  text-transform: uppercase;
}
.card-value {
  font-weight: bold;
}
.card-proyect .progress {
  height: 7px;
  border-radius: 0;
}

.card-proyect .glyphicon {
  margin: 0 15px 0 15px;
}
</style>
