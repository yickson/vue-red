<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import axios from 'axios'

export default {
  page: {
    title: 'Contactanos',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  data() {
    return {
      nombre: '',
      mail: '',
      mensaje: '',
    }
  },
  methods: {
    success() {
      this.$swal(
        '¡Bien!',
        'Tu mensaje ha sido correctamente enviado.',
        'success',
        {
          button: false,
        }
      )
    },
    warning() {
      this.$swal(
        'Lo sentimos',
        'Hubo un error con tu solicitud, porfavor verifica los datos e intenta nuevamente',
        'error',
        {
          button: false,
        }
      )
    },
    handleSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          axios
            .post('http://52.67.70.146/api/contacto', {
              nombre: this.nombre,
              mail: this.mail,
              mensaje: this.mensaje,
            })
            .then(response => {
              this.success()
            })
        } else {
          this.warning()
        }
      })
    },
  },
}
</script>

<template>
  <Layout class="contact">
    <div class="row">
      <div class="col-xs-12 col-md-12 col-md-12">
        <h2 class="text-center title-contact">CONTACTO</h2>
      </div>
    </div>
    <div class="container-contact">
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <label for>Nombre</label>
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              name="nombre"
              placeholder="Ingrese su nombre"
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('nombre') }"
              data-vv-validate-on="blur"
            >
            <span class="error">{{ errors.first('nombre') }}</span>
            <label for>Email</label>
            <input
              v-model="mail"
              type="text"
              class="form-control"
              name="email"
              placeholder="Ingrese su Email"
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('email') }"
              data-vv-validate-on="blur"
            >
            <span class="error">{{ errors.first('email') }}</span>
            <label for>Mensaje</label>
            <textarea
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('mensaje') }"
              v-model="mensaje"
              type="text"
              name="mensaje"
              class="form-control txtarea"
              placeholder="Mensaje.."
              maxlength="140"
              rows="7"
              data-vv-validate-on="blur"
            />
            <span class="error">{{ errors.first('mensaje') }}</span>
            <button class="btn">ENVIAR MENSAJE</button>
          </div>
        </div>
      </form>
    </div>
  </Layout>
</template>

<style>
.title-contact {
  color: #ffffff;
  margin-top: 40px;
  font-weight: bold;
}
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
  padding: 40px 60px 60px 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  margin: 60px auto 60px auto;
  min-height: 350px;
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
  border: 1px solid #bac9d8;
  box-shadow: none;
  height: 40px;
  border-radius: 2px;
  margin-bottom: 15px;
}
.container-contact .txtarea {
  height: 160px;
}
.error {
  display: block;
}
.is-danger {
  border: 1px solid #d4000069 !important;
  background-color: #f798982b;
}
.error {
  background-color: #d40000c9;
  position: relative;
  top: -16px;
  color: #ffffff;
  z-index: 99999;
  font-size: 13px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  padding-left: 2px;
  z-index: 0;
}
</style>
