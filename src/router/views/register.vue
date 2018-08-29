<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Registrate',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout class="registrarse">
    <div class="container-form">
      <h2 class="text-center">REGISTRATE</h2>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <label for="">Nombre</label>
          <input
            type="text"
            class="form-control"
            placeholder="Ingrese su nombre">
          <label for="">Apellido</label>
          <input
            type="text"
            class="form-control"
            placeholder="Ingrese su apellido">
          <label for="">Email</label>
          <input
            type="text"
            class="form-control"
            placeholder="Ingrese su email">
          <label for="">RUT</label>
          <input
            type="text"
            class="form-control"
            placeholder="Ingrese su rut">
          <label for="">Contraseña</label>
          <input
            type="text"
            class="form-control"
            placeholder="Ingrese contraseña">
          <label for="">Repetir contraseña</label>
          <input
            type="text"
            class="form-control"
            placeholder="Repita su contraseña">
          <label for="">Teléfono Opcional</label>
          <input
            type="text"
            class="form-control"
            placeholder="12345678">
          <span>Al presionar registrar está aceptando nuestros terminos y condiciones</span>
          <button class="btn">Registrarse</button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style>
.registrarse {
  background-image: url(../../../src/assets/images/banner_bg.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.container-form {
  display: block;
  margin: 50px auto;
  background-color: #ffffff;
  max-width: 600px;
  padding: 20px 60px 60px 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}

.form-control {
  border: 1px solid #f47828;
  border-radius: 2px;
  box-shadow: none;
  height: 37px;
  margin-bottom: 10px;
}
.container-form .btn {
  background-color: #f47828;
  color: #ffffff;
  display: block;
  width: 100%;
  margin-top: 30px;
  border-radius: 2px;
}
.container-form .btn:hover {
  box-shadow: 0 1px 3px 0 #ddd, 0 0 10px 2px #ddd;
}
.container-form h2 {
  margin-bottom: 20px;
}
</style>
