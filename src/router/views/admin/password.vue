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
      this.$swal(
        '¡Bien!',
        'Tu contraseña sido exitosamente actualizada',
        'success',
        {
          button: false,
        }
      )
    },
    warning() {
      this.$swal(
        'Lo sentimos',
        'Hubo un error con la actualización de tu contraseña',
        'error',
        {
          button: false,
        }
      )
    },
    editPassword() {
      this.$validator.validateAll().then(result => {
        if (result) {
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
        } else {
        }
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
                      <input
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('password') }"
                        v-model="password"
                        type="password"
                        class="form-control"
                        name="password"
                        data-vv-validate-on="blur"
                      >
                      <span class="error">{{ errors.first('password') }}</span>
                      
                      <label for>Contraseña nueva</label>
                      <input
                        v-validate="'required'"
                        ref="password"
                        v-model="newpasword"
                        :class="{'input': true, 'is-danger': errors.has('newpassword') }"
                        type="password"
                        name="newpassword"
                        class="form-control"
                        data-vv-validate-on="blur"
                      >
                      <span class="error">{{ errors.first('newpassword') }}</span>
                      
                      <label for>Repetir contraseña</label>
                      <input
                        v-validate="'required|confirmed:password'"
                        v-model="newpassrepeat"
                        :class="{'input': true, 'is-danger': errors.has('newpassrepeat') }"
                        type="password"
                        class="form-control"
                        name="newpassrepeat"
                        data-vv-validate-on="blur"
                        data-vv-as="newpassword"
                      >
                      <span class="error">{{ errors.first('newpassrepeat') }}</span>
                      
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
#Password span {
  display: block;
}
#Password .is-danger {
  border: 1px solid #d4000069 !important;
  background-color: #f798982b;
}
#Password .error {
  background-color: #d40000c9;
  position: relative;
  top: -1px;
  color: #ffffff;
  z-index: 99999;
  font-size: 13px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  padding-left: 2px;
}
</style>
