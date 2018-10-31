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
      authError: null,
      tryingToLogIn: false,
      Password: false,
      emailRetrievePassword: '',
      apimessage: '',
    }
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
    ...authMethods,
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.tryingToLogIn = true
      // Reset the authError if it existed.
      this.authError = null
      return this.logIn({
        email: this.email,
        password: this.password,
      })
        .then(token => {
          this.tryingToLogIn = false

          // Redirect to the originally requested page, or to the home page
          this.$router.push(
            this.$route.query.redirectFrom || { name: 'dashboard' }
          )
        })
        .catch(error => {
          this.tryingToLogIn = false
          this.authError = error
          this.apimessage = 'Hubo un error, porfavor vuelve a intentarlo.'
          this.info()
        })
    },
    LinkRecuperar() {
      this.Password = true
    },
    LinkLogin() {
      this.Password = false
    },
    nuevacontraseña() {
      return Axios.post('http://52.67.70.146/api/password/create', {
        email: this.emailRetrievePassword,
      })
        .then(response => {
          this.apimessage = response.data.message
          this.success()
        })
        .catch(error => {
          this.apimessage = error.response.data.message
          this.info()
        })
    },
  },
}
</script>

<template>
  <Layout id="container-login">
    <div class="container">
      <div class="form-login">
        <!--FORM LOGIN -->
        <form
          v-if="!Password"
          @submit.prevent="tryToLogIn"
        >
          <label for="">Email</label>
          <BaseInput
            v-model="email"
            name="email"
          />
          <label for="">Contraseña</label>
          <BaseInput
            v-model="password"
            name="password"
            type="password"
          />
          <button
            :disabled="tryingToLogIn"
            class="btn"
            type="submit"
          >
            <BaseIcon
              v-if="tryingToLogIn"
              name="sync"
              spin
            />
            <span v-else>Log in</span>
          </button>
        </form>

        <!-- FORM RECUPERAR CONTRASEÑA-->
        <form
          v-else
          @submit.prevent="nuevacontraseña()">
          <label for="">Email Usuario</label>
          <BaseInput
            v-model="emailRetrievePassword"
            name="email-contraseña"
          />

          <button
            class="btn"
            type="submit"
          >
            <span >Recuperar</span>
          </button>
        </form>

        <span
          v-if="Password"
          class="link-login"
          @click="LinkLogin()">Ingresar</span>
        <span
          v-else
          class="link-login"
          @click="LinkRecuperar()">Recuperar contraseña</span> / <a href="/register">Crear cuenta</a>
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
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
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
</style>
