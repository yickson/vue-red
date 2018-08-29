<template>
  <div class="col-xs-12 col-sm-12 col-md-3">
    <div class="card">
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <img
            :src="item.avatar"
            class="avatar img-responsive">
        </div>
      </div>
      <p class="card-title">{{ item.name }}</p>
      <p class="card-price">{{ item.amount }}</p>
      <label for="progress">Financiado {{ item.financiado }}</label>
      <progress-bar
        v-model="item.progress"
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
          <p class="card-value">{{ item.tazaRetorno }}</p>
          <p class="card-value">{{ item.plazo }}</p>
          <p class="card-value">{{ item.identificador }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <span
            data-toggle="tooltip-dias"
            data-placement="right"
            alt="Dias Restantes"
            title="Dias Restantes"
            class="glyphicon glyphicon-calendar"/>
          <span
            data-toggle="tooltip-visitas"
            data-placement="right"
            class="glyphicon glyphicon-eye-open"
            alt="Visitas"
            title="Cantidad de Visitas"/>
          <span
            data-toggle="tooltip-inv"
            data-placement="right"
            alt="Inversionistas"
            title="Cantidad de Inversionistas"
            class="glyphicon glyphicon-user"/>
        </div>
      </div>
      <div class="row card-footer">
        <div class="col-xs-12 col-sm-12">
          <button
            class="btn card-button"
            @click="hello()">Simular</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    simulate() {},
  },
}
</script>


<style>
.card {
  margin-top: 10px;
  padding: 10px 10px 0px 10px;
  overflow: hidden;
  font-size: 1em;
  text-align: left;
  background: #fff;
  border: none;
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 3px 0 #ddd, 0 0 10px 2px #ddd;
}
.card p {
  margin-bottom: 3px;
}
.card .avatar {
  height: 180px;
}
.card-footer {
  padding: 0.75em 1em;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.4);
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.05) !important;
}
.card .card-button {
  width: 100%;
  color: #fff;
  background-color: #f30;
  border: none;
  border-radius: 2px;
}
.card-price {
  margin-bottom: 0;
  font-size: 1.2em;
  font-weight: bold;
  color: #f30;
}
.card-title {
  display: inline;
  padding: 0;
  margin-top: 10px;
  font-weight: bold;
  line-height: 1.2857em;
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
  background-color: #f30;
  height: 100%;
}
.card .glyphicon {
  margin: 0 15px 0 15px;
}
</style>
