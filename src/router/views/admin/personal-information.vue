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
    usernoteditin: false,
    userInfo: [],
  }),
  mounted() {
    this.getRegiones()
  },
  beforeMount() {
    this.getPaises()
    this.getUserInfo()
    this.nickname = this.currentUser.data.usuario.nickname
    this.nombre = this.currentUser.data.usuario.nombre
    this.app_pat = this.currentUser.data.usuario.app_pat
    this.app_mat = this.currentUser.data.usuario.app_mat
    this.email = this.currentUser.data.usuario.email
    this.rut = this.currentUser.data.usuario.rut
    this.genero = this.currentUser.data.usuario.genero
    this.fec_nac = this.currentUser.data.usuario.fec_nac
    this.pais_id = this.currentUser.data.usuario.pais_id
    this.e_civil = this.currentUser.data.usuario.e_civil
    this.telefono = this.currentUser.data.usuario.telefono
    this.direccion = this.currentUser.data.usuario.direccion
    this.profesion = this.currentUser.data.usuario.profesion
    this.region_id = this.currentUser.data.usuario.region_id
    this.comuna_id = this.currentUser.data.usuario.comuna_id
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
          'http://52.67.70.146/api/usuario/' + this.currentUser.data.usuario.id,
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
          this.responseMessage = 'Hubo un error, porfavor vuelve a intentarlo.'
          this.warning()
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
                    <p>{{ userInfo.nombre }}</p>
                    <label for>Apellido Paterno</label>
                    <p>{{ userInfo.app_pat }}</p>
                    <label for>Apellido Materno</label>
                    <p>{{ userInfo.app_mat }}</p>
                    <label for>RUT (*)</label>
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
                    <label for>E-mail(*)</label>
                    <p>{{ userInfo.email }}</p>
                    <label for>Teléfono(*)</label>
                    <p>{{ userInfo.telefono }}</p>
                    <label for>Dirección (*)</label>
                    <p>{{ userInfo.direccion }}</p>
                    <label for>Región(*)</label>
                    <p>{{ userInfo.region_id }}</p>
                    <label for>Comuna(*)</label>
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
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <div class="col-md-12">
                    <!-- FORM -->
                    <label for>Nickname</label>
                    <BaseInput 
                      v-model="nickname" 
                      name="nickname"/>
                    <label for>Nombres (*)</label>
                    <BaseInput 
                      v-model="nombre" 
                      name="nombre"/>
                    <label for>Apellido Paterno</label>
                    <BaseInput 
                      v-model="app_pat" 
                      name="app_pat"/>
                    <label for>Apellido Materno</label>
                    <BaseInput 
                      v-model="app_mat" 
                      name="app_mat"/>
                    <label for>RUT (*)</label>
                    <BaseInput 
                      v-model="rut" 
                      name="rut" 
                      disabled/>
                    <label for>Género</label>
                    <btn-group class="select-genero">
                      <btn
                        v-model="genero"
                        class="btn"
                        input-type="radio"
                        input-value="1"
                        name="genero"
                      >
                        <p>FEMENINO</p>
                      </btn>
                      <btn
                        v-model="genero"
                        class="btn"
                        input-type="radio"
                        input-value="2"
                        name="genero"
                      >
                        <p>MASCULINO</p>
                      </btn>
                    </btn-group>
                    <label for>Fecha de Nacimiento</label>
                    <BaseInput 
                      v-model="fec_nac" 
                      type="date" 
                      name="fec_nac"/>
                    <label for>Nacionalidad</label>
                    <select 
                      v-model="pais_id" 
                      class="form-control" 
                      name="pais_id">
                      <option 
                        v-for="(pais,index) in paises" 
                        :value="pais.id">{{ pais.name }}</option>
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
                    <BaseInput 
                      v-model="email" 
                      name="email"/>
                    <label for>Teléfono(*)</label>
                    <BaseInput 
                      v-model="telefono" 
                      name="telefono"/>
                    <label for>Dirección (*)</label>
                    <BaseInput 
                      v-model="direccion" 
                      name="direccion"/>
                    <label for>Región(*)</label>
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
                    <label for>Comuna(*)</label>
                    <select 
                      v-model="comuna_id" 
                      class="form-control" 
                      name="comunas_id">
                      <option 
                        v-for="(comuna,index) in comunas" 
                        :value="comuna.id">{{ comuna.name }}</option>
                    </select>
                    <label for>Estado civil</label>
                    <BaseInput 
                      v-model="e_civil" 
                      name="e_civil"/>
                    <label for>Profesión/Oficio</label>
                    <BaseInput 
                      v-model="profesion" 
                      name="profesion"/>
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
select {
  margin-bottom: 1.3rem;
}
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
</style>
