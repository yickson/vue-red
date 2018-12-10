<script>
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Successproyect',
    meta: [{ name: 'description', content: 'Successproyect' }],
  },
  components: { Layout },
  methods:{
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace('.', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
  }
}
</script>

<template>
  <Layout>
    <div class="container Success-page">

      <div class="row">
        <div class="col-xs-12 col-md-12 text-center">
          <h3>¡FELICITACIONES!</h3>
          <img
            src="../../../src/assets/images/successicon.png"
            alt="pago listo"
            class="img-responsive icon-success"
          >
          <p>
            Apenas se valide la transferencia, estarás participando en este proyecto. </br>
            Recuerde que puede ver tus inversiones en " Mi panel "
          </p>
        </div>
      </div>

      <div class="row table-container">
        <h2>{{ $route.params.proyecto.id }}</h2>
        <h2>{{ $route.params.proyecto.nombre }}</h2>
        <div class="col-xs-12 col-sm-2 col-md-4">
          <p>Datos proyecto</p>
          <table class="table table-striped">
            <tr>
              <td>Tipo de credito</td>
              <td>Factura</td>
            </tr>
            <tr>
              <td>Tiempo del préstamo</td>
              <td>40 Días</td>
            </tr>
            <tr>
              <td>Fecha inicio proyecto</td>
              <td>20/11/2018</td>
            </tr>
            <tr>
              <td>Fecha termino proyecto</td>
              <td>30/11/2018</td>
            </tr>
          </table>
        </div>
        <div class="col-xs-12 col-sm-2 col-md-4">
          <p>Costo de la inversión</p>
          <table class="table table-striped">
            <tr>
              <td>Derechos por participar</td>
              <td>{{ formatPrice($route.params.proyectoData.cobroDerechos) }}</td>
            </tr>
            <tr>
              <td>Préstamo </td>
              <td>40 Días</td>
            </tr>
            <tr>
              <td>Fecha inicio proyecto</td>
              <td>20/11/2018</td>
            </tr>
            <tr>
              <td>Fecha termino proyecto</td>
              <td>30/11/2018</td>
            </tr>
          </table>
        </div>
        <div class="col-xs-12 col-sm-2 col-md-4">
          <p>Cuotas</p>
          <table class="table table-striped">
            <tr>
              <td>Mes</td>
              <td>Cuota</td>
              <td>Fecha</td>
            </tr>
            <tr v-for="cuota in $route.params.proyectoData.cuotas">
              <td>{{ cuota.mes }}</td>
              <td>{{ formatPrice(cuota.cuota) }}</td>
              <td>{{ cuota.fecha }}</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="row  table-container">
        <div class="col-xs-12 col-sm-12 col-md-8">
          <p>Datos para depósito / Transferencia</p>
          <table class="table table-striped">
            <tr>
              <td>Cuenta Corriente</td>
              <td>30247918</td>
            </tr>
            <tr>
              <td>Banco</td>
              <td>Banco BCI</td>
            </tr>
            <tr>
              <td>Rut</td>
              <td>76.400.275-­K</td>
            </tr>
            <tr>
              <td>Razón social</td>
              <td>REDPYME SA</td>
            </tr>
            <tr>
              <td>Mail</td>
              <td>contacto@redcapital.cl</td>
            </tr>
            <tr>
              <td>Cod Transferencia</td>
              <td>95904679</td>
            </tr>
            <tr>
              <td>Monto</td>
              <td>$ 5.000.000</td>
            </tr>
          </table>
        </div>
      </div>

    </div>
  </Layout>
</template>

<style>
.Success-page{
  padding:50px 0;
}
.Success-page h3{
  font-size:30px;
}
.Success-page p {
  font-size: 18px;
  font-weight: bold;
}
.icon-success {
  display: block;
  margin: 40px auto;
  width: 110px;
  height: auto;
}
.table-container{
  margin-top: 30px;
}
.table-container .table-striped tr > td:first-child{
  background-color:#ff9302;
  color:#ffffff;
  padding:5px 5px;
}
.table-container .table-striped tr > td:last-child{
  border:1px solid #eee;
  text-align: right;
}
</style>
