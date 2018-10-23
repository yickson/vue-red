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
    }
  },
  methods: {
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
          this.$router.push(this.$route.query.redirectFrom || { name: 'home' })
        })
        .catch(error => {
          this.tryingToLogIn = false
          this.authError = error
        })
    },
    LinkRecuperar() {
      this.Password = true
    },
    LinkLogin() {
      this.Password = false
    },
    nuevacontraseña() {
      return Axios.post('http://52.67.70.146/api/password/email', {
        email: this.emailRetrievePassword,
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
          console.log('hubo un error')
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
          v-else="Password"
          @submit.prevent="nuevacontraseña()">
          <label for="">Email Usuario</label>
          <BaseInput
            v-model="emailRetrievePassword"
            name="email-contraseña"
          />
          <alert type="success"><span>Se enviara la nueva clave al correo electronico ingresado,
          solo si esta coincide con el Email del usuario ya previamente registrado.
          </span></alert>

          <button
            class="btn"
            type="submit"
          >
            <span >Recuperar</span>
          </button>
        </form>
        <p v-if="authError">
          <alert type="danger">Hubo un error, porfavor vuelve a intentarlo.</alert>
        </p>
        <span
          v-if="Password"
          class="link-login"
          @click="LinkLogin()">Ingresar</span>
        <span
          v-else="!Password"
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
  margin-top: 20px;
}
.form-login .link-login {
  cursor: pointer;
  color: #b2b2b2;
}
</style>
