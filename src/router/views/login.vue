<script>
import Layout from '@layouts/main'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'
import Axios from 'axios'

export default {
  page: {
    title: 'Log in',
    meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
  },
  components: { Layout },
  data() {
    return {
      email: '',
      password: '',
      provider: 'users',
      authError: null,
      tryingToLogIn: false,
      Password: false,
      emailRetrievePassword: '',
      apimessage: '',
    }
  },
  methods: {
    info() {
      this.$swal('Lo sentimos', 'Credenciales incorrectas.', 'error', {
        button: false,
      })
    },
    ...authMethods,
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.$validator.validateAll().then(result => {
        if (result) {
          /* llama al servicio de auth */
          this.tryingToLogIn = true
          // Reset the authError if it existed.
          this.authError = null
          return this.logIn({
            email: this.email,
            password: this.password,
            provider: this.provider,
          })
            .then(token => {
              this.tryingToLogIn = false
              // Redirect to the originally requested page, or to the home page
              this.$router.push(
                this.$route.query.redirectFrom || { name: 'home' }
              )
            })
            .catch(error => {
              this.tryingToLogIn = false
              this.authError = error
              this.apimessage = 'Hubo un error, porfavor vuelve a intentarlo.'
              this.info()
            })
        } else {
          this.$swal(
            'Lo sentimos',
            'debes Completar los campos requeridos.',
            'error',
            {
              button: false,
            }
          )
        }
      })
    },
    LinkRecuperar() {
      this.Password = true
    },
    LinkLogin() {
      this.Password = false
    },
    nuevacontraseña() {
      this.$validator.validateAll().then(result => {
        if (result) {
          return Axios.post('http://52.67.70.146/api/password/create', {
            email: this.emailRetrievePassword,
          })
            .then(response => {
              this.apimessage = response.data.message
              this.success()
            })
            .catch(error => {
              this.apimessage = error.message
              console.log(error)
              this.info()
            })
        } else {
          this.$swal('Lo sentimos', this.apimessage, 'error', {
            button: false,
          })
        }
      })
    },
  },
}
</script>

<template>
  <Layout id="container-login">
    <div class="container">
      <div class="form-login animated fadeIn">
        <!--FORM LOGIN -->
        <form v-if="!Password" @submit.prevent="tryToLogIn">
          <label for>RUC</label>
          <input
            v-validate="'required'"
            :class="{'input': true, 'is-danger': errors.has('ruc') }"
            v-model="email"
            data-vv-validate-on="blur"
            name="ruc"
            class="form-control"
          >
          <span class="error">{{ errors.first('ruc') }}</span>
          <label for>Contraseña</label>
          <input
            v-validate="'required'"
            :class="{'input': true, 'is-danger': errors.has('password') }"
            v-model="password"
            data-vv-validate-on="blur"
            name="password"
            type="password"
            class="form-control"
          >
          <span class="error">{{ errors.first('password') }}</span>
          <button :disabled="tryingToLogIn" class="btn" type="submit">
            <BaseIcon v-if="tryingToLogIn" name="sync" spin/>
            <span v-else>Log in</span>
          </button>
        </form>

        <!-- FORM RECUPERAR CONTRASEÑA-->
        <form v-else @submit.prevent="nuevacontraseña()">
          <label for>Email Usuario</label>
          <input
            class="form-control"
            :class="{'input': true, 'is-danger': errors.has('email_user') }"
            v-model="emailRetrievePassword"
            name="email_user"
            v-validate="'required'"
            data-vv-validate-on="blur"
          >
          <span class="error">{{ errors.first('email_user') }}</span>
          <button class="btn" type="submit">
            <span>Recuperar</span>
          </button>
        </form>

        <a v-if="Password" class="link-login" @click="LinkLogin()">Ingresar</a>
        <a v-else class="link-login" @click="LinkRecuperar()">Recuperar contraseña</a> /
        <a href="/register">Crear cuenta</a>
      </div>
    </div>
  </Layout>
</template>

<style>
#container-login {
  background-image: url(../../../src/assets/images/banner_bg.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.form {
  text-align: center;
}
.form-login {
  background-color: #ffffff;
  max-width: 400px;
  padding: 40px;
  margin: 40px auto;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}
.form-login:hover {
  -webkit-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
.form-login .btn {
  width: 120px;
  height: 40px;
  color: #ffffff;
  background-color: #f47828;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.link-login {
  margin-top: 10px;
}
.form-login .link-login {
  cursor: pointer;
  color: #333;
}
.form-login .form-control {
  display: block;
  width: 100%;
  padding: 0.75em 1em;
  margin-bottom: 1.3rem;
  line-height: 1;
  height: 40px;
  border: 1px solid #bac9d8;
  border-radius: 2px;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.form-login span {
  display: block;
}
.form-login .is-danger {
  border: 1px solid #d4000069 !important;
  background-color: #f798982b;
}
.form-login .error {
  background-color: #d40000c9;
  position: relative;
  top: -13px;
  color: #ffffff;
  z-index: 1;
  font-size: 13px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  padding-left: 2px;
}
</style>
