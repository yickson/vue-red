<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import axios from 'axios'

export default {
  page: {
    title: 'Contraseña',
    meta: [{ name: 'description', content: 'Password' }],
  },
  components: { Layout },
  data: () => ({
    responseMessage: '',
    password: '',
    newpasword: '',
    newpassrepeat: '',
  }),
  methods: {
    success() {
      this.$notify({
        type: 'success',
        title: '¡Bien!',
        content: this.responseMessage,
      })
    },
    warning() {
      this.$notify({
        type: 'warning',
        title: '¡Atención!',
        content: this.responseMessage,
      })
    },
    editPassword() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      var dataPassword = {
        password: this.password,
        password_new: this.newpasword,
        password_c: this.newpassrepeat,
      }
      axios
        .post('http://52.67.70.146/api/usuario/password', dataPassword, {
          headers: headers,
        })
        .then(response => {
          console.log(response)
          this.responseMessage = response.data.message
          this.success()
          console.log(this.responseMessage)
        })
        .catch(error => {
          console.log(error)
          this.warning()
          this.responseMessage = 'Todos los campos son requeridos*'
        })
    },
  },
  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <Layout>
    <div class="breadcrumbs">
      <div class="col-sm-4">
        <div class="page-header float-left">
          <div class="page-title">
            <h1>Cambiar Contraseña</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="page-header float-right">
          <div class="page-title"/>
        </div>
      </div>
    </div>
    <div class="content mt-3">
      <div class="animated fadeIn">
        <div class="row">
          <div class="col-md-4 col-md-offset-4">
            <div class="card">
              <div class="card-body">
                <div 
                  id="Password" 
                  class="row">
                  <div class="col-xs-12 col-sm-12">
                    <form 
                      action 
                      @submit.prevent="editPassword">
                      <label for>Contraseña</label>
                      <BaseInput
                        :type="password"
                        v-model="password"
                        type="text"
                        class="form-control"
                      />

                      <label for>Contraseña nueva</label>
                      <BaseInput 
                        v-model="newpasword" 
                        type="text" 
                        class="form-control"/>

                      <label for>Repetir contraseña</label>
                      <BaseInput 
                        v-model="newpassrepeat" 
                        type="text" 
                        class="form-control"/>
                      <button class="button btn form-button-bank">GUARDAR NUEVA CONTRASEÑA</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style>
#Password.form-control {
  box-shadow: none;
  height: 40px;
}
#Password .form-button-bank {
  width: 100%;
  height: 40px;
  font-size: 14px;
  color: #ffffff;
  background-color: #f47828;
  border-radius: 2px;
  margin-top: 30px;
  margin-bottom: 10px;
}
#Password label {
  margin-top: 15px;
}
</style>
