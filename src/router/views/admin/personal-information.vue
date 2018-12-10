<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import appConfig from '@src/app.config'
import axios from 'axios'

export default {
  page: {
    title: 'Datos Personales',
    meta: [{ name: 'description', content: 'Datos Personales' }],
  },
  components: { Layout },
  data: () => ({
    paises: [],
    usernoteditin: false,
    userInfo: [],
  }),

  beforeMount() {
    this.getPaises()
    this.getUserInfo()
  },

  methods: {
    editfields() {
      this.usernoteditin = true
    },
    success() {
      this.$notify({
        type: 'success',
        title: 'Well done!',
        content: this.responseMessage,
      })
    },
    warning() {
      this.$notify({
        type: 'warning',
        title: 'Warning!',
        content: this.responseMessage,
      })
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
          console.log(response)
          this.userInfo = response.data.data
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
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      var dataedit = {
        nombre: this.nombreuser,
        app_pat: this.app_paternouser,
        app_mat: this.app_maternouser,
        email: this.emailuser,
        rut: this.rutuser,
        genero: this.generouser,
        fec_nac: this.fecha_nacimientouser,
        pais_id: this.paisuser,
        e_civil: this.estado_civiluser,
        telefono: this.telefonouser,
        direccion: this.direccionuser,
        nickname: this.nicknameuser,
        profesion: this.profesionuser,
        region_id: this.regionuser,
        comuna_id: this.comunauser,
      }
      axios
        .put(
          'http://52.67.70.146/api/usuario/' + this.currentUser.data.usuario.id,
          dataedit,
          { headers: headers }
        )
        .then(response => {
          console.log(response)
          this.responseMessage = response.data.data.message
          this.success()
        })
        .catch(error => {
          console.log(error)
          this.responseMessage = 'Hubo un error, porfavor vuelve a intentarlo.'
          this.info()
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
                    <label for>Nombres (*)</label>
                    <p>{{userInfo.nombre }}</p>
                    <label for>Apellido Paterno</label>
                    <p>{{ userInfo.app_pat }}</p>
                    <label for>Apellido Materno</label>
                    <p>{{ userInfo.app_mat}}</p>
                    <label for>RUT (*)</label>
                    <p>{{ userInfo.rut }}</p>
                    <label for>Género</label>
                    <p>{{ userInfo.genero }}</p>
                    <label for>Fecha de Nacimiento</label>
                    <p>{{ userInfo.fec_nac }}</p>
                    <label for>Nacionalidad</label>
                    <p>{{ userInfo.pais_id}}</p>
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
                    <label for>E-mail(*)</label>
                    <p>{{ userInfo.email }}</p>
                    <label for>Teléfono(*)</label>
                    <p>{{ userInfo.telefono }}</p>
                    <label for>Dirección (*)</label>
                    <p>{{ userInfo.direccion }}</p>
                    <label for>Región(*)</label>
                    <p>{{ userInfo.region_id }}</p>
                    <label for>Comuna(*)</label>
                    <p>{{userInfo.comuna_id }}</p>
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
        <form v-else action @submit.prevent="editUser">
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <div class="col-md-12">
                    <!-- FORM -->
                    <label for>Nickname</label>
                    <BaseInput :value="userInfo.nickname" name="empresa"/>
                    <label for>Nombres (*)</label>
                    <BaseInput :value="userInfo.nombre" name="empresa"/>
                    <label for>Apellido Paterno</label>
                    <BaseInput :value="userInfo.app_pat" name="empresa"/>
                    <label for>Apellido Materno</label>
                    <BaseInput :value="userInfo.app_mat" name="empresa"/>
                    <label for>RUT (*)</label>
                    <BaseInput :value="userInfo.rut" name="empresa" disabled/>
                    <label for>Género</label>
                    <btn-group class="select-genero">
                      <btn class="btn" input-type="radio" input-value="1">
                        <p>FEMENINO</p>
                      </btn>
                      <btn class="btn" input-type="radio" input-value="2">
                        <p>MASCULINO</p>
                      </btn>
                    </btn-group>
                    <label for>Fecha de Nacimiento</label>
                    <BaseInput name="empresa"/>
                    <label for>Nacionalidad</label>
                    <select class="form-control">
                      <option v-for="pais in paises">{{ pais.name }}</option>
                    </select>
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
                    <label for>E-mail(*)</label>
                    <BaseInput name="empresa"/>
                    <label for>Teléfono(*)</label>
                    <BaseInput name="empresa"/>
                    <label for>Dirección (*)</label>
                    <BaseInput name="empresa"/>
                    <label for>Región(*)</label>
                    <BaseInput name="empresa"/>
                    <label for>Comuna(*)</label>
                    <BaseInput name="empresa"/>
                    <label for>Estado civil</label>
                    <BaseInput name="empresa"/>
                    <label for>Profesión/Oficio</label>
                    <BaseInput name="empresa"/>
                    <BaseButton class="btn save-edit">GUARDAR CAMBIOS</BaseButton>
                    <!-- FORM -->
                  </div>
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


<style >
.select-genero {
  margin-bottom: 20px;
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
</style>
