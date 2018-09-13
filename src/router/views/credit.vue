<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Solicitar Crédito',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout class="credit">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
         <h2 class="credit-title">SOLICITA TU FINANCIAMIENTO</h2>
      </div>
    </div>
    <div class="container-credit">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">Nombre Empresa (*)</label>
          <input
            type="text"
            class="form-control">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">RUT Empresa (*)</label>
          <input
            type="text"
            class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">Fono Contacto(*)</label>
          <input
            type="text"
            class="form-control">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">Mail Contacto (*)</label>
          <input
            type="text"
            class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">¿Cuánto Necesitas? (en millones) (*)</label>
          <select
            id=""
            name=""
            class="form-control">
            <option value=""/>
          </select>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">A Quiénes Vendes (*)</label>
          <input
            type="text"
            class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">Cuánto Vendes promedio al mes (*)</label>
          <input
            type="text"
            class="form-control">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">Cuánta deuda tiene la empresa (En millones)</label>
          <input
            type="text"
            class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">Si puedes dejar una propiedad en garantía, cuánto estímas que vale? (En millones)</label>
          <input
            type="text"
            class="form-control">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">Qué tipo de Garantías inmobiliarias ofreces para la operación?</label>
          <input
            type="text"
            class="form-control">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for="">Cuánta deuda tiene la propiedad?(Millones)</label>
          <input
            type="text"
            class="form-control">
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <label for=""/>
          <button class="btn">INSCRIBETE AHORA</button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style>
.credit {
  background-image: url(../../../src/assets/images/banner_bg.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.credit h2 {
  text-align: center;
  margin-bottom: 50px;
}
.container-credit {
  display: block;
  margin: 20px auto;
  background-color: #ffffff;
  max-width: 760px;
  padding: 60px 60px 0px 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}
.credit-title {
  color: #ffffff;
  margin-top: 40px;
  font-weight: bold;
}
.credit label {
  height: 40px;
}
.credit .form-control {
  border: 1px solid #ddd;
  box-shadow: none;
  height: 40px;
  border-radius: 2px;
  margin-bottom: 15px;
}
.credit .btn {
  background: #f47828;
  color: #ffffff;
  width: 100%;
  border-radius: 2px;
  height: 40px;
  margin-top: 45px;
}

@media only screen and (max-width: 768px) {
  .container-credit {
    padding: 10px;
  }
}
</style>
