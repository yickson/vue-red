<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Contactanos',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  data() {
    return {
      data: {
        nombre: '',
        mail: '',
        mensaje: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      fetch('http://127.0.0.1:8000/api/contacto', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: 'hola',
          mail: 'hola',
          mensaje: 'mensaje',
        }),
      }).then(res => console.log(res))
    },
  },
}
</script>

<template>
  <Layout class="contact">
    <div class="container-contact">
      <h2>Contacto</h2>
      <form @submit.prevent="handleSubmit">
        <div class="col-xs-12 col-sm-12 col-md-12">
          <label for="">Nombre</label>
          <input
            v-model="data.nombre"
            type="text"
            class="form-control"
            placeholder="Ingrese su nombre">
          <label for="">Email</label>
          <input
            v-model="data.mail"
            type="text"
            class="form-control"
            placeholder="Ingrese su Email">
          <label for="">Mensaje</label>
          <textarea
            v-model="data.mensaje"
            type="text"
            class="form-control"
            placeholder="Mensaje.."/>
          <button class="btn">ENVIAR MENSAJE</button>
        </div>
      </form>
    </div>
  </Layout>
</template>

<style>
.contact {
  background-image: url(../../../src/assets/images/banner_bg.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.container-contact {
  display: block;
  background-color: #ffffff;
  max-width: 600px;
  padding: 20px 60px 60px 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  margin: 60px auto 60px auto;
  min-height: 500px;
}
.container-contact .btn {
  margin: 40px auto auto auto;
  display: block;
  width: 100%;
  background-color: #f47828;
  color: #ffffff;
  border-radius: 2px;
  height: 40px;
}

.container-contact .form-control {
  border: 1px solid #f47828;
  box-shadow: none;
  height: 40px;
  border-radius: 2px;
  margin-bottom: 15px;
}
</style>
