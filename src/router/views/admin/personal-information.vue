<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import axios from 'axios'

export default {
  page: {
    title: 'Datos Personales',
    meta: [{ name: 'description', content: 'Datos Personales' }],
  },
  components: { Layout },
  data: () => ({
    genero: '',
    paises: [],
    regiones: [],
    comunas: [],
    usernoteditin: true,
    userInfo: [],
    nickname: '',
    nombre: '',
    app_pat: '',
    app_mat: '',
    email: '',
    rut: '',
    genero: '',
    fec_nac: '',
    pais_id: '',
    e_civil: '',
    telefono: '',
    direccion: '',
    profesion: '',
    region_id: '',
    comuna_id: '',
  }),
  mounted() {
    this.getRegiones()
  },
  beforeMount() {
    this.getPaises()
    this.getUserInfo()
  },

  methods: {
    editfields() {
      this.usernoteditin = false
    },
    success() {
      this.$swal(
        '¡Bien!',
        'Tus datos han sido actualizados exitosamente',
        'success',
        {
          button: false,
        }
      )
    },
    warning() {
      this.$swal(
        'Lo sentimos',
        'Hubo un error con la actualización de tus datos.',
        'error',
        {
          button: false,
        }
      )
    },
    getUserInfo() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get(
          'http://52.67.70.146/api/usuario/' + this.currentUser.data.usuario.id,
          {
            headers: headers,
          }
        )
        .then(response => {
          this.userInfo = response.data.data
          this.nickname = this.userInfo.nickname
          this.nombre = this.userInfo.nombre
          this.app_pat = this.userInfo.app_pat
          this.app_mat = this.userInfo.app_mat
          this.email = this.userInfo.email
          this.rut = this.userInfo.rut
          this.genero = this.userInfo.genero
          this.fec_nac = this.userInfo.fec_nac
          this.pais_id = this.userInfo.pais_id
          this.e_civil = this.userInfo.e_civil
          this.telefono = this.userInfo.telefono
          this.direccion = this.userInfo.direccion
          this.profesion = this.userInfo.profesion
          this.region_id = this.userInfo.region_id
          this.comuna_id = this.userInfo.comuna_id
        })
        .catch(error => {
          console.log(error)
        })
    },
    getRegiones() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get('http://52.67.70.146/api/region', { headers: headers })
        .then(response => {
          this.regiones = response.data.data
          this.getComunas()
        })
        .catch(error => {
          console.log(error)
        })
    },
    getComunas() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get('http://52.67.70.146/api/comuna/' + this.region_id, {
          headers: headers,
        })
        .then(response => {
          this.comunas = response.data
          console.log(this.comunas)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getPaises() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get('http://52.67.70.146/api/pais', { headers: headers })
        .then(response => {
          this.paises = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    editUser() {
      this.$validator.validateAll().then(result => {
        if (result) {
          var headers = {
            Authorization: `Bearer ${this.currentUser.data.token}`,
          }
          var dataUser = {
            nickname: this.nickname,
            nombre: this.nombre,
            app_pat: this.app_pat,
            app_mat: this.app_mat,
            email: this.email,
            rut: this.rut,
            genero: this.genero,
            fec_nac: this.fec_nac,
            pais_id: this.pais_id,
            e_civil: this.e_civil,
            telefono: this.telefono,
            direccion: this.direccion,
            profesion: this.profesion,
            region_id: this.region_id,
            comuna_id: this.comuna_id,
          }
          axios
            .put(
              'http://52.67.70.146/api/usuario/' +
                this.currentUser.data.usuario.id,
              dataUser,
              { headers: headers }
            )
            .then(response => {
              console.log(response)
              this.responseMessage = 'Usuario editado exitosamente'
              this.success()
              this.getUserInfo()
            })
            .catch(error => {
              console.log('error', error)
              this.responseMessage =
                'Hubo un error, porfavor vuelve a intentarlo.'
              this.warning()
            })
        } else {
          this.$swal(
            'Lo sentimos',
            'Completa los campos requeridos e intenta nuevamente.',
            'error',
            {
              button: false,
            }
          )
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
            <h1>Datos Personales</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="page-header float-right">
          <div class="page-title">
            <h1 @click="editfields">
              <i class="far fa-edit"/>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="content mt-3">
      <div class="animated fadeIn">
        <!-- DATOS -->
        <div v-if="usernoteditin == true">
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <div class="col-md-12">
                    <!-- FORM -->
                    <label for>Nickname</label>
                    <p>{{ userInfo.nickname }}</p>
                    <label for>Nombres</label>
                    <p>{{ userInfo.nombre }}</p>
                    <label for>Apellido Paterno</label>
                    <p>{{ userInfo.app_pat }}</p>
                    <label for>Apellido Materno</label>
                    <p>{{ userInfo.app_mat }}</p>
                    <label for>RUT</label>
                    <p>{{ userInfo.rut }}</p>
                    <label for>Género</label>
                    <p>{{ userInfo.genero }}</p>
                    <label for>Fecha de Nacimiento</label>
                    <p>{{ userInfo.fec_nac }}</p>
                    <label for>Nacionalidad</label>
                    <p>{{ userInfo.pais_id }}</p>
                    <!-- FORM -->
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <div class="col-md-12">
                    <!-- FORM -->
                    <label for>E-mail</label>
                    <p>{{ userInfo.email }}</p>
                    <label for>Teléfono</label>
                    <p>{{ userInfo.telefono }}</p>
                    <label for>Dirección</label>
                    <p>{{ userInfo.direccion }}</p>
                    <label for>Región</label>
                    <p>{{ userInfo.region_id }}</p>
                    <label for>Comuna</label>
                    <p>{{ userInfo.comuna_id }}</p>
                    <label for>Estado civil</label>
                    <p>{{ userInfo.e_civil }}</p>
                    <label for>Profesión/Oficio</label>
                    <p>{{ userInfo.profesion }}</p>
                    <!-- DATOS -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- DATOS -->
        <!-- FORM -->
        <form
          v-else
          action
          @submit.prevent="editUser">
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="col-md-12">
                    <!-- FORM -->
                    <label for>Nickname</label>
                    <input
                      v-model="nickname"
                      class="form-control"
                      name="nickname">
                    <label for>Nombre</label>
                    <input
                      v-validate="'required'"
                      v-model="nombre"
                      :class="{'input': true, 'is-danger': errors.has('nombre') }"
                      class="form-control"
                      name="nombre"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('nombre') }}</span>

                    <label for>Apellido Paterno</label>
                    <input
                      v-validate="'required'"
                      v-model="app_pat"
                      :class="{'input': true, 'is-danger': errors.has('app_pat') }"
                      class="form-control"
                      name="app_pat"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('app_pat') }}</span>
                    <label for>Apellido Materno</label>
                    <input
                      v-validate="'required'"
                      v-model="app_mat"
                      :class="{'input': true, 'is-danger': errors.has('app_mat') }"
                      class="form-control"
                      name="app_mat"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('app_mat') }}</span>

                    <label for>RUT (*)</label>
                    <input
                      v-model="rut"
                      class="form-control"
                      name="rut"
                      disabled>

                      <!-- FORM -->
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="col-md-12">
                    <!-- FORM -->
                    <label for>E-mail</label>
                    <input
                      v-validate="'required|email'"
                      v-model="email"
                      :class="{'input': true, 'is-danger': errors.has('email') }"
                      class="form-control"
                      name="email"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('email') }}</span>

                    <label for>Teléfono</label>
                    <input
                      v-validate="'required'"
                      v-model="telefono"
                      :class="{'input': true, 'is-danger': errors.has('telefono') }"
                      class="form-control"
                      name="telefono"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('telefono') }}</span>

                    <label for>Dirección</label>
                    <input
                      v-validate="'required'"
                      v-model="direccion"
                      :class="{'input': true, 'is-danger': errors.has('direccion') }"
                      class="form-control"
                      name="direccion"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('direccion') }}</span>

                    <label for>Región</label>
                    <select
                      v-model="region_id"
                      class="form-control"
                      name="region_id"
                      @change="getComunas"
                    >
                      <option
                        v-for="(region,index) in regiones"
                        :value="region.id"
                      >{{ region.name }}</option>
                    </select>
                    <label for>Comuna</label>
                    <select
                      v-model="comuna_id"
                      class="form-control"
                      name="comunas_id">
                      <option
                        v-for="(comuna,index) in comunas"
                        :value="comuna.id">{{ comuna.name }}</option>
                    </select>

                    <!-- FORM -->
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <label for>Estado civil</label>
                  <input
                    v-model="e_civil"
                    class="form-control"
                    name="e_civil">
                  <label for>Profesión/Oficio</label>
                  <input
                    v-model="profesion"
                    class="form-control"
                    name="profesion">
                  <label for>Fecha de Nacimiento</label>
                  <date-picker
                  <input
                    v-validate="'required'"
                    v-model="fec_nac"
                    :class="{'input': true, 'is-danger': errors.has('newpassword') }"
                    class="form-control"
                    type="date"
                    name="fec_nac"
                    data-vv-validate-on="blur"
                  >
                  <span class="error">{{ errors.first('fec_nac') }}</span>

                  <label for>Nacionalidad</label>
                  <select
                    v-model="pais_id"
                    class="form-control"
                    name="pais_id">
                    <option
                      v-for="(pais,index) in paises"
                      :value="pais.id">{{ pais.name }}</option>
                  </select>
                  <label for>Género</label>
                  <btn-group class="select-genero">
                    <btn
                      v-model="genero"
                      class="btn"
                      input-type="radio"
                      input-value="f"
                      name="genero"
                    >
                      <p>FEMENINO</p>
                    </btn>
                    <btn
                      v-model="genero"
                      class="btn"
                      input-type="radio"
                      input-value="m"
                      name="genero"
                    >
                      <p>MASCULINO</p>
                    </btn>
                  </btn-group>
                  <BaseButton class="btn save-edit">GUARDAR CAMBIOS</BaseButton>
                </div>
              </div>
            </div>
          </div>
        </form>
        <!-- FORM-->
      </div>
      <!-- .animated -->
    </div>
  </Layout>
</template>


<style>
.select-genero {
  margin-bottom: 52px;
  display: block;
}
.select-genero .btn {
  height: 40px;
  width: 120px;
  margin-bottom: 10px;
}
.select-genero p {
  margin-top: 6px;
  font-size: 14px;
}
.select-genero .btn:first-child {
  border: 1px solid palevioletred;
}

.select-genero .btn:last-child {
  border: 1px solid #17a2b8;
}
.select-genero .btn:first-child:not(:disabled):not(.disabled).active,
.btn:not(:disabled):not(.disabled):active {
  background-color: palevioletred;
  color: #ffffff;
}
.select-genero .btn:last-child:not(:disabled):not(.disabled).active,
.btn:not(:disabled):not(.disabled):active {
  background-color: #17a2b8;
  color: #ffffff;
}
.save-edit {
  height: 40px;
  width: 200px;
  background-color: orangered;
  color: #ffffff;
  font-size: 12px;
  margin-top: 25px;
}
label {
  margin-top: 13px;
  display: block;
}
span {
  display: block;
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
  padding-left: 2px;
}
</style>
