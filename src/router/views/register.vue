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
    info() {
      this.$notify({
        type: 'info',
        title: 'Heads up!',
        content: this.apimessage,
      })
    },
    success() {
      this.$notify({
        type: 'success',
        title: 'Well done!',
        content: this.apimessage,
      })
    },
    submitRegister() {
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
            this.apimessage = response.data.message

            console.log(this.apimessage)
          } else if (response.status === 401) {
            this.info()
            this.apimessage = response.data.message
            console.log(this.apimessage)
          }
        })
        .catch(error => {
          console.log(error)
          this.info()
          this.apimessage = error.message
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
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <h2 class="text-center register-title">REGISTRATE</h2>
      </div>
    </div>
    <div class="container-form">
      <form @submit.prevent="submitRegister">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <!-- nombre-->
            <div class="form-group">
              <label for>Nombre</label>
              <label class="sr-only" for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-user"/>
                </div>
                <input
                  v-model="nombre"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su nombre"
                >
              </div>
            </div>

            <!-- apellido-->
            <div class="form-group">
              <label for>Apellido</label>
              <label class="sr-only" for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-user"/>
                </div>
                <input
                  v-model="app_pat"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su apellido"
                >
              </div>
            </div>

            <!-- email-->
            <div class="form-group">
              <label for>E-mail</label>
              <label class="sr-only" for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-envelope fa"/>
                </div>
                <input
                  v-model="email"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su Email"
                >
              </div>
            </div>

            <!-- contraseña -->
            <div class="form-group">
              <label for>RUT</label>
              <label class="sr-only" for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-users fa"/>
                </div>
                <input
                  v-model="rut"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su RUT sin puntos ni guión"
                >
              </div>
            </div>

            <!-- contraseña -->
            <div class="form-group">
              <label for>Contraseña</label>
              <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-lock fa"/>
                </div>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  placeholder="Ingrese su contraseña"
                >
              </div>
            </div>

            <!-- contraseña nueva -->
            <div class="form-group">
              <label for>Repetir contraseña</label>
              <label class="sr-only" for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-lock fa"/>
                </div>
                <input
                  v-model="c_password"
                  type="password"
                  class="form-control"
                  placeholder="Repita su contraseña"
                >
              </div>
            </div>

            <!-- contraseña nueva -->
            <div class="form-group">
              <label for>Telefono (Opcional)</label>
              <label class="sr-only" for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">+569</div>
                <input
                  v-model="telefono"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su contraseña"
                >
              </div>
            </div>

            <!-- que desea hacer -->
            <div class="form-group">
              <label for>¿Que desea hacer en la plataforma?</label>
              <label class="sr-only" for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-user fa"/>
                </div>
                <select v-model="valor" class="form-control">
                  <option
                    v-for="proposito in propositos"
                    :value="proposito.id"
                  >{{ proposito.valor }}</option>
                </select>
              </div>
            </div>

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

<style>
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

.container-form {
  display: block;
  margin: 0px auto;
  background-color: #ffffff;
  max-width: 600px;
  padding: 60px 60px 60px 60px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-bottom: 40px;
}

.container-form .input-group-addon {
  background: #ffffff;
}
.container-form .fas {
  color: #f47828;
}
.registrarse .form-control {
  border: 1px solid #bac9d8;
  border-radius: 2px;
  box-shadow: none;
  height: 40px;
}
.registrarse .form-control .input-group-addon {
  color: #f47828;
}
.container-form .btn {
  background-color: #f47828;
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
</style>
