<script>
import Layout from '@layouts/admin'
import { authComputed } from '@state/helpers'
import axios from 'axios'

export default {
  page: {
    title: 'Invest',
    meta: [{ name: 'description', content: 'Invest' }],
  },
  data() {
    return {
      model: 1,
      carpeta_sii: 0,
      solicitar_crear: 0,
      targets: [],
      empresa: {
        nombre: 'System Ipsum',
        razon_social: 'System Ipsum',
        rut: 777777777,
        descripcion: 'Empresa de productos termicos',
        telefono: 212345678,
        direccion: 'Coimbra 110, Las Condes',
        carpeta: [],
        clavesii: '',
        pagina_web: 'www.paginaweb.com',
        deuda: 0,
      },
      solicitud: {
        monto: 7000000,
        valor_garantia: 200000000,
        deuda_garantia: 10000000,
        motivo: 'Liquidez para pagar sueldos',
        plazo: 3,
        tipo: 3,
      },
    }
  },
  components: { Layout },
  mounted() {
    this.getTarget()
  },
  methods: {
    crearEmpresa() {
      axios
        .post('http://52.67.70.146/api/empresa', {
          user_id: 1,
          nombre: this.empresa.nombre,
          razon_social: this.empresa.razon_social,
          rut: this.empresa.rut,
          descripcion: this.empresa.descripcion,
          telefono: this.empresa.telefono,
          direccion: this.empresa.direccion,
          carpeta: this.empresa.carpeta,
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getTarget() {
      var headers = {
        Authorization: `Bearer ${this.currentUser.data.token}`,
      }
      axios
        .get('http://52.67.70.146/api/target', { headers: headers })
        .then(response => {
          this.targets = response.data.data
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },

    solicitarCredito() {
      axios
        .post('http://52.67.70.146/api/solicitud', {
          user_id: 1,
          monto: this.solicitud.monto,
          valor_garantia: this.solicitud.valor_garantia,
          deuda_garantia: this.solicitud.deuda_garantia,
          motivo: this.solicitud.motivo,
          plazo: this.solicitud.plazo,
          tipo: this.solicitud.tipo,
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
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
            <h1>Invertir</h1>
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
          <div class="col-md-8 col-md-offset-2">
            <div class="card">
              <div class="card-body" id="crearEmpresa">
                <div class="col-xs-12">
                  <btn-group class="crear-solicitar">
                    <btn input-type="radio" input-value="1" v-model="solicitar_crear">
                      <p>CREAR EMPRESA</p>
                    </btn>
                    <btn input-type="radio" input-value="2" v-model="solicitar_crear">
                      <p>SOLICITAR CREDITO</p>
                    </btn>
                  </btn-group>
                </div>
                <!-- form crear empresa-->
                <form action v-if="this.solicitar_crear == 1">
                  <div class="col-md-6 col-xs-12">
                    <label for>Nombre de la empresa</label>
                    <input
                      v-validate="'required'"
                      :class="{'input': true, 'is-danger': errors.has('nombre_empresa') }"
                      v-model="empresa.nombre"
                      type="text"
                      class="form-control"
                      name="nombre_empresa"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('nombre_empresa') }}</span>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <label for>Rut de la empresa</label>
                    <input
                      v-validate="'required'"
                      :class="{'input': true, 'is-danger': errors.has('rut_empresa') }"
                      v-model="empresa.rut"
                      type="text"
                      class="form-control"
                      name="rut_empresa"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('rut_empresa') }}</span>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <label for>Telefono de la empresa</label>
                    <input
                      v-validate="'required'"
                      :class="{'input': true, 'is-danger': errors.has('telefono_empresa') }"
                      v-model="empresa.telefono"
                      type="text"
                      class="form-control"
                      name="telefono_empresa"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('telefono_empresa') }}</span>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <label for>Dirección completa</label>
                    <input
                      v-validate="'required'"
                      :class="{'input': true, 'is-danger': errors.has('direccion_empresa') }"
                      v-model="empresa.direccion"
                      type="text"
                      class="form-control"
                      name="direccion_empresa"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('direccion_empresa') }}</span>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <label for>¿ A quienes vendes ?</label>
                    <select class="form-control">
                      <option value v-for="target in targets">{{target.valor}}</option>
                    </select>
                    <span class="error">{{ errors.first('a quienes vendes') }}</span>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <label for>¿ Cuanta deuda tiene la empresa ?</label>
                    <input
                      v-validate="'required'"
                      :class="{'input': true, 'is-danger': errors.has('deuda empresa') }"
                      v-model="empresa.deuda"
                      type="text"
                      class="form-control"
                      name="deuda empresa"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('deuda empresa') }}</span>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <label for>Pagina web</label>
                    <input
                      v-validate="'required'"
                      :class="{'input': true, 'is-danger': errors.has('pagina_web') }"
                      v-model="empresa.pagina_web"
                      type="text"
                      class="form-control"
                      name="pagina_web"
                      data-vv-validate-on="blur"
                    >
                    <span class="error">{{ errors.first('pagina_web') }}</span>
                  </div>

                  <div class="col-md-6 col-xs-12">
                    <label for>Seleccione información a proporcionar</label>
                    <btn-group class="crear-solicitar">
                      <btn input-type="radio" input-value="1" v-model="carpeta_sii">
                        <p>Clave SII</p>
                      </btn>
                      <btn input-type="radio" input-value="2" v-model="carpeta_sii">
                        <p>Carpeta tributaria</p>
                      </btn>
                    </btn-group>
                  </div>
                  <div class="col-md-12 col-xs-12" v-if="this.carpeta_sii =='1'">
                    <label for>Descripción de la empresa</label>
                    <textarea
                      v-validate="'required'"
                      :class="{'input': true, 'is-danger': errors.has('descripcion_empresa') }"
                      v-model="empresa.descripcion"
                      type="text"
                      class="form-control"
                      name="descripcion_empresa"
                      data-vv-validate-on="blur"
                    ></textarea>
                    <span class="error">{{ errors.first('descripcion_empresa') }}</span>
                  </div>
                  <div class="col-md-12 col-xs-12" v-else>
                    <div class="form-group">
                      <label for="exampleFormControlFile1">Cargar Carpeta tributaria</label>
                      <input type="file" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button class="form-button-empresa btn">CREAR EMPRESA</button>
                  </div>
                </form>
                <!-- form solicitar credito -->
                <form v-else>
                  <div class="col-xs-12 col-md-12">
                    <label for>Selecciona un tipo de proyecto</label>
                    <select class="form-control">
                      <option value="factoring">Factoring</option>
                      <option value="credito">Crédito</option>
                      <option value="leasing">Leasing/Leaseback</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style>
.crear-solicitar {
  width: 100%;
}
.crear-solicitar .btn {
  width: 50%;
}
#crearEmpresa .form-button-empresa {
  width: 140px;
  height: 40px;
  font-size: 14px;
  color: #ffffff;
  background-color: #f47828;
  border-radius: 2px;
  margin: 30px auto;
}
.crear-solicitar {
  margin: 0 auto;
}

.crear-solicitar .btn {
  height: 40px;
  width: 180px;
  margin-bottom: 10px;
}
.crear-solicitar p {
  margin-top: 6px;
  font-size: 14px;
}
.crear-solicitar .btn {
  border: 1px solid #141c3a;
  margin-top: 0;
}

.crear-solicitar .btn:not(:disabled):not(.disabled).active,
.btn:not(:disabled):not(.disabled):active {
  background-color: #141c3a;
  color: #ffffff;
}
</style>
