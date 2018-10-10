<script>
import Layout from '@layouts/main'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'

export default {
  page: {
    title: 'Log in',
    meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
  },
  components: { Layout },
  data() {
    return {
      username: '',
      password: '',
      authError: null,
      tryingToLogIn: false,
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
        username: this.username,
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
  },
}
</script>

<template>
  <Layout>
      <div class="container">
          <div class="form-login">
            <form
              @submit.prevent="tryToLogIn"
            >
              <label for="">RUT Usuario</label>
              <BaseInput
                v-model="username"
                name="username"
              />
              <label for="">Contraseña</label>
              <BaseInput
                v-model="password"
                name="password"
                type="password"
              />
              <button
                class="btn"
                :disabled="tryingToLogIn"
                type="submit"
              >
                <BaseIcon
                  v-if="tryingToLogIn"
                  name="sync"
                  spin
                />
                <span v-else>Log in</span>
              </button>
              <p v-if="authError">
                Hubo un error, porfavor reintenta.
              </p>
            </form>
          </div>
      </div>
  </Layout>
</template>

<style>
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
</style>
