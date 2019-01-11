<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import axios from 'axios'

export default {
  page: {
    title: 'Registrate',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  data() {
    return {
      propositos: [],
      nombre: '',
      app_pat: '',
      email: '',
      password: '',
      c_password: '',
      rut: '',
      valor: 0,
      telefono: 0,
      apimessage: '',
    }
  },
  mounted() {
    this.getOptionstoDo()
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
        'Hubo un error con tu solicitud, porfavor verifica los datos e intenta nuevamente',
        'error',
        {
          button: false,
        }
      )
    },
    submitRegister() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!')
          axios
            .post('http://52.67.70.146/api/register', {
              nombre: this.nombre,
              app_pat: this.app_pat,
              email: this.email,
              password: this.password,
              c_password: this.c_password,
              rut: this.rut,
              valor: this.valor,
              telefono: this.telefono,
            })
            .then(response => {
              console.log(response)
              if (response.status === 200) {
                this.success()

                console.log(this.apimessage)
              } else if (response.status === 401) {
                this.warning()
              }
            })
            .catch(error => {
              console.log(error)
              this.warning()
            })
          return
        }

        alert('Correct them errors!')
      })
    },
    getOptionstoDo() {
      axios
        .get('http://52.67.70.146/api/tipo/usuario')
        .then(response => (this.propositos = response.data.data))
        .catch(error => {
          console.log(error)
        })
    },
  },
}
</script>

<template>
  <Layout class="registrarse">
    <div class="container-form">
      <form @submit.prevent="submitRegister">
        <div class="row">
          <div class="col-xs-12 col-sm-12">
            <h2 class="text-center register-title">REGISTRATE</h2>
          </div>
        </div>
        <div class="header"/>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 body">
            <!-- nombre-->
            <label for="nombre">Nombre</label>
            <input
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('nombre') }"
              v-model="nombre"
              data-vv-validate-on="blur"
              type="text"
              name="nombre"
              class="form-control"
              placeholder="Ingrese su nombre"
            >
            <span class="error">{{ errors.first('nombre') }}</span>

            <!-- apellido-->
            <label for>Apellido</label>
            <input
              v-validate="'required'"
              v-model="app_pat"
              :class="{'input': true, 'is-danger': errors.has('apellido') }"
              type="text"
              name="apellido"
              data-vv-validate-on="blur"
              class="form-control"
              placeholder="Ingrese su apellido"
            >
            <span class="error">{{ errors.first('apellido') }}</span>

            <!-- email-->
            <label for>E-mail</label>
            <input
              v-validate="'required|email'"
              :class="{'input': true, 'is-danger': errors.has('email') }"
              v-model="email"
              type="text"
              data-vv-validate-on="blur"
              name="email"
              class="form-control"
              placeholder="Ingrese su Email"
            >
            <span class="error">{{ errors.first('email') }}</span>

            <!-- contraseña -->
            <label for>RUT</label>
            <input
              v-validate="'required'"
              v-model="rut"
              :class="{'input': true, 'is-danger': errors.has('rut') }"
              type="text"
              name="rut"
              data-vv-validate-on="blur"
              class="form-control"
              placeholder="Ingrese su RUT sin puntos ni guión"
            >
            <span class="error">{{ errors.first('rut') }}</span>

            <!-- contraseña -->
            <label for>Contraseña</label>
            <input
              v-validate="'required'"
              ref="password"
              v-model="password"
              :class="{'input': true, 'is-danger': errors.has('password') }"
              name="password"
              type="password"
              class="form-control"
              placeholder="Ingrese su contraseña"
            >
            <span class="error">{{ errors.first('password') }}</span>

            <!-- contraseña nueva -->
            <label for>Repetir contraseña</label>
            <input
              v-validate="'required|confirmed:password'"
              :class="{'is-danger': errors.has('password_confirmation')}"
              v-model="c_password"
              type="password"
              name="rep_password"
              data-vv-as="password"
              data-vv-validate-on="blur"
              class="form-control"
              placeholder="Repita su contraseña"
            >
            <span class="error">{{ errors.first('rep_password') }}</span>

            <!-- contraseña nueva -->
            <label for>Telefono (Opcional)</label>
            <input
              v-model="telefono"
              type="text"
              class="form-control"
              placeholder="Ingrese su contraseña"
            >

            <!-- que desea hacer -->
            <label for>¿Que desea hacer en la plataforma?</label>
            <select 
              v-model="valor" 
              class="form-control">
              <option 
                v-for="proposito in propositos" 
                :value="proposito.id">{{ proposito.valor }}</option>
            </select>
            
            <button class="btn">REGISTRARSE</button>
            <span class="terms-conditions">
              Al presionar registrar está aceptando nuestros
              <a
                href
                class="link"
              >terminos y condiciones</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  </Layout>
</template>

<style scoped>
.registrarse {
  background-image: url(../../../src/assets/images/banner_bg.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.register-title {
  text-align: center;
  margin-bottom: 50px;
  color: #ffffff;
  margin-top: 40px;
  font-weight: bold;
}

.container-form h2 {
  color: #fc4a1a;
  letter-spacing: 0.2em;
}
.container-form .header {
  background: #fc4a1a;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#f78433),
    to(#fc4a1a)
  );
  background: linear-gradient(to right, #f78433, #fc4a1a);
  height: 2px;
}
.container-form .body {
  padding: 20px 60px 20px 60px;
}
.container-form {
  display: block;
  margin: 40px auto;
  background-color: #ffffff;
  max-width: 600px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-bottom: 40px;
}
.container-form label {
  margin-top: 13px;
}
.container-form label,
span {
  display: block;
}

.registrarse .form-control {
  border: 1px solid #bac9d8;
  border-radius: 2px;
  box-shadow: none;
  height: 40px;
}

.container-form .btn {
  /* background-color: #ea5b2b; */
  background: #fc4a1a;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#f78433),
    to(#fc4a1a)
  );
  background: linear-gradient(to right, #f78433, #fc4a1a);
  color: #ffffff;
  display: block;
  height: 40px;
  width: 100%;
  margin-top: 30px;
  border-radius: 2px;
}

.terms-conditions {
  font-size: 10px;
  text-align: center;
}
.terms-conditions .link {
  color: #f47828;
}
.container-form h2 {
  margin-bottom: 20px;
}
@media screen and (max-width: 560px) {
  .container-form {
    padding: 30px;
  }
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
  padding-left: 5px;
}
</style>
