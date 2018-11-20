<script>
export default {
  props: {
    proyecto: {
      type: Object,
      required: false,
      value: '',
    },
  },
  data() {
    return {
      btnSimulateCliked: false,
      dataEmpty: false,
      data: {
        amount: null,
      },
    }
  },
  methods: {
    simulate() {
      this.btnSimulateCliked = true
    },
    submitAmount() {
      if (
        this.data.amount === null ||
        this.data.amount === '' ||
        this.data.amount === undefined
      ) {
        console.log('ingresa monto a simular')
        this.dataEmpty = true
      } else {
        this.dataEmpty = false
        this.$router.push({
          name: 'simulate',
          params: {
            proyecto: this.proyecto,
            simulatevalue: this.data.amount,
          },
        })
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
  },
}
</script>

<template>
  <div>
    <div
      class="card">
      <div class="card-header">
        <!-- header-->
        <div class="row">
          <div class="col-xs-12 col-sm-12">
            <img
              :src="proyecto.foto_proyecto"
              alt=""
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
        <label for="progress">Financiado {{ proyecto.cuotas }}</label>
        <progress-bar
          type="success"
          class="progress"/>
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
            <span>0</span>
            <span
              v-tooltip="'Cantidad de Inversionistas'"
              class="glyphicon glyphicon-user"/>
            <span>0</span>
          </div>
        </div>
      </div>
      <div class="row card-footer">
        <div
          v-show="!btnSimulateCliked"
          class="col-xs-12 col-sm-12">
          <button
            class="btn card-button"
            @click="simulate()"
          >Simular</button>
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
                  v-model="data.amount"
                  type="text"
                  class="form-control form-footer"
                  placeholder="Cantidad">
              </div>
            </div>
            <button
              class="btn btn-submit-simulate"><i class="fas fa-arrow-circle-right"/></button>
          </form>
          <span v-show="dataEmpty">ingrese monto a calcular</span>
        </div>
      </div>
    </div>
  </div>
</template>





<style>
.card {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  max-width: 240px;
  min-height: 210px;
  font-size: 1em;
  text-align: left;
  background: #fff;
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  transition: box-shadow 0.1s ease, transform 0.1s ease,
    -webkit-box-shadow 0.1s ease, -webkit-transform 0.1s ease;
}
.card:hover {
  transform: translateY(-3px);
}
.btn-submit-simulate {
  width: 40px;
  height: 40px;
  background-color: #ea5b2b;
  color: #fff;
  border-radius: 2px;
}
.card-body {
  padding: 10px;
}
.card p {
  margin-bottom: 3px;
}
.card .avatar {
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
.card .card-button {
  width: 100%;
  color: #fff;
  background-color: #ea5b2b;
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
.progress {
  height: 7px;
  border-radius: 0;
}
.card .progress-bar-success {
  background-color: #ea5b2b;
  height: 100%;
}
.card .glyphicon {
  margin: 0 15px 0 15px;
}
</style>
