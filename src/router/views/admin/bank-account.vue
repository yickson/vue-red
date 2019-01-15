<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import axios from 'axios'

export default {
  page: {
    title: 'Cuenta Bancaria',
    meta: [{ name: 'description', content: 'Bank acount' }],
  },
  components: { Layout },
  data: () => ({
    bancos: [],
    responseMessage: '',
    newBank: '',
    acountnumber: '',
    accounttype: '',
    bancoTipo: [],
    userBanco: [],
  }),
  mounted() {
    this.getBancos()
  },
  beforeMount() {
    this.getTipoCuenta()
    this.getUserBanco()
  },
  methods: {
    success() {
      this.$swal(
        '¡Bien!',
        'Tus datos han sido exitosamente actualizados',
        'success',
        {
          button: false,
        }
      )
    },
    warning() {
      this.$swal(
        'Lo sentimos',
        'Hubo un error con la actualización de tu cuenta',
        'error',
        {
          button: false,
        }
      )
    },
    getUserBanco() {
      axios
        .get(
          'http://52.67.70.146/api/usuario/banco/' +
            this.currentUser.data.usuario.id
        )
        .then(
          response => (
            (this.userBanco = response.data.data.cuenta_bancaria),
            (this.newBank = this.userBanco.banco.id),
            (this.acountnumber = this.userBanco.numero),
            (this.accounttype = this.userBanco.tipo_cuenta_id)
          )
        )
    },
    getBancos() {
      axios
        .get('http://52.67.70.146/api/banco')
        .then(response => {
          console.log(response)
          this.bancos = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    getTipoCuenta() {
      axios.get('http://52.67.70.146/api/bancos/tipos').then(response => {
        this.bancoTipo = response.data.data
      })
    },
    editBank() {
      this.$validator.validateAll().then(result => {
        if (result) {
          var headers = {
            Authorization: `Bearer ${this.currentUser.data.token}`,
          }
          var databank = {
            user_id: this.currentUser.data.usuario.id,
            banco_id: this.newBank,
            tipo_cuenta_id: this.accounttype,
            numero: this.acountnumber,
          }
          axios
            .put(
              'http://52.67.70.146/api/usuario/banco/' +
                this.currentUser.data.usuario.id,
              databank,
              {
                headers: headers,
              }
            )
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
          console.log('no confiasd')
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
            <h1>Cambiar Cuenta Bancaria</h1>
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
                      @submit.prevent="editBank">
                      <label for>Número de cuenta</label>
                      <input
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('numero_cuenta') }"
                        v-model="acountnumber"
                        class="form-control"
                        data-vv-validate-on="blur"
                        name="numero_cuenta"
                      >
                      <span class="error">{{ errors.first('numero_cuenta') }}</span>
                      
                      <label for>Tipo de cuenta</label>
                      <select
                        v-validate="'required'"
                        :class="{'input': true, 'is-danger': errors.has('tipocuenta') }"
                        v-model="accounttype"
                        name="tipocuenta"
                        class="form-control"
                        data-vv-validate-on="blur"
                      >
                        <option value>Seleccione tipo de cuenta</option>
                        <option
                          v-for="bancoTipo in bancoTipo"
                          :value="bancoTipo.id"
                          value
                        >{{ bancoTipo.descripcion }}</option>
                      </select>
                      <span class="error">{{ errors.first('tipocuenta') }}</span>
                      
                      <label for>Seleccione Banco</label>
                      <select
                        v-validate="'required'"
                        v-model="newBank"
                        :class="{'input': true, 'is-danger': errors.has('banco') }"
                        class="form-control"
                        name="banco"
                        data-vv-validate-on="blur"
                      >
                        <option value>Seleccione su banco</option>
                        <option 
                          v-for="banco in bancos" 
                          :value="banco.id">{{ banco.nombre }}</option>
                      </select>
                      <span class="error">{{ errors.first('banco') }}</span>
                      <button class="button btn form-button-bank">GUARDAR CAMBIOS</button>
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
