<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import axios from 'axios'

export default {
  page: {
    title: 'Solicitar Crédito',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  data: () => ({
    options: [],
    rut: '',
    empresa: '',
    telefono: '',
    email: '',
    deuda: '',
    credito_garantia_id: '',
    credito_necesidad_id: '',
    credito_objetivo_id: '',
    credito_venta_id: '',
    propiedad: '',
    propiedad_deuda: '',
    apimessage: '',
  }),
  beforeMount() {
    this.cantidadSolicitar()
  },
  methods: {
    success() {
      this.$swal(
        '¡Bien!',
        'Tu solicitud se ha procesado correctamente',
        'success',
        {
          button: false,
        }
      )
    },
    warning() {
      this.$swal(
        'Lo sentimos',
        'Hubo un error con tu solicitud, porfavor verifica los datos e intenta nuevamente',
        'error',
        {
          button: false,
        }
      )
    },
    cantidadSolicitar() {
      axios
        .get('http://52.67.70.146/api/credito')
        .then(response => (this.options = response.data.data))
    },
    enviarSolicitud() {
      this.$validator.validateAll().then(result => {
        if (result) {
          axios
            .post('http://52.67.70.146/api/credito/solicitar', {
              rut: this.rut,
              empresa: this.empresa,
              telefono: this.telefono,
              email: this.email,
              deuda: this.deuda,
              credito_garantia_id: this.credito_garantia_id,
              credito_necesidad_id: this.credito_necesidad_id,
              credito_objetivo_id: this.credito_objetivo_id,
              credito_venta_id: this.credito_venta_id,
              propiedad: this.propiedad,
              propiedad_deuda: this.propiedad_deuda,
            })
            .then(response => {
              this.response = response
              this.success()
            })
            .catch(error => {
              this.error = error
              this.warning()
            })
        } else {
          this.$swal(
            'Lo sentimos',
            'Debes completar todos los campos requeridos',
            'error',
            {
              button: false,
            }
          )
        }
      })
    },
  },
}
</script>

<template>
  <Layout class="credit">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <h2 class="credit-title">SOLICITA TU FINANCIAMIENTO</h2>
      </div>
    </div>
    <form 
      action 
      @submit.prevent="enviarSolicitud">
      <div class="container-credit">
        <div class="row">
          <!-- NOMBRE EMPRESA -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for>Nombre Empresa (*)</label>
            <input
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('nombre_empresa') }"
              v-model="empresa"
              class="form-control"
              placeholder="Ingrese nombre empresa"
              name="nombre_empresa"
              data-vv-validate-on="blur"
            >
            <span class="error">{{ errors.first('nombre_empresa') }}</span>
          </div>
          <!-- NOMBRE RUT -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for>RUT Empresa (*)</label>
            <input
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('rut_empresa') }"
              v-model="rut"
              class="form-control"
              placeholder="Ingrese rut empresa"
              name="rut_empresa"
              data-vv-validate-on="blur"
            >
            <span class="error">{{ errors.first('rut_empresa') }}</span>
          </div>
        </div>
        <div class="row">
          <!-- NOMBRE CONTACTO -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for>Fono Contacto(*)</label>
            <input
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('telefono contacto') }"
              v-model="telefono"
              class="form-control"
              placeholder="+569"
              name="telefono contacto"
              data-vv-validate-on="blur"
            >
            <span class="error">{{ errors.first('telefono contacto') }}</span>
          </div>
          <!-- NOMBRE EMAIL -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for>Mail Contacto (*)</label>
            <input
              v-validate="'required|email'"
              :class="{'input': true, 'is-danger': errors.has('email de contacto') }"
              v-model="email"
              class="form-control"
              placeholder="mail@mail.cl"
              name="email de contacto"
              data-vv-validate-on="blur"
            >
            <span class="error">{{ errors.first('email de contacto') }}</span>
          </div>
        </div>
        <div class="row">
          <!-- MONTO NECESITADO PARA FINANCIACION -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for>¿Cuánto Necesitas? (en millones) (*)</label>
            <select
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('cuanto necesitas') }"
              v-model="credito_necesidad_id"
              class="form-control"
              name="cuanto necesitas"
              data-vv-validate-on="blur"
            >
              <option 
                selected 
                value>Selecciona</option>
              <option
                v-for="option in options.necesidad"
                :value="option.id"
              >{{ option.descripcion }}</option>
            </select>
            <span class="error">{{ errors.first('cuanto necesitas') }}</span>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <!-- A QUIENES VENDE -->
            <label for>A Quiénes Vendes (*)</label>
            <select
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('a quienes vendes') }"
              v-model="credito_objetivo_id"
              class="form-control"
              name="a quienes vendes"
              data-vv-validate-on="blur"
            >
              <option 
                selected 
                value>Selecciona</option>
              <option 
                v-for="option in options.objetivo" 
                :value="option.id">{{ option.descripcion }}</option>
            </select>
            <span class="error">{{ errors.first('a quienes vendes') }}</span>
          </div>
        </div>
        <div class="row">
          <!-- VENTA PROMEDIO MENSUAL -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for>Cuánto Vendes promedio al mes (*)</label>
            <select
              v-validate="'required'"
              :class="{'input': true, 'is-danger': errors.has('venta promedio') }"
              v-model="credito_venta_id"
              class="form-control"
              name="venta promedio"
              data-vv-validate-on="blur"
            >
              <option 
                selected 
                value>Selecciona</option>
              <option 
                v-for="option in options.ventas" 
                :value="option.id">{{ option.descripcion }}</option>
            </select>
            <span class="error">{{ errors.first('venta promedio') }}</span>
          </div>

          <!-- DEUDA EMPRESA -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for>Cuánta deuda tiene la empresa (En millones)</label>
            <input
              v-validate="'required'"
              v-model="deuda"
              :class="{'input': true, 'is-danger': errors.has('deuda empresa') }"
              class="form-control"
              placeholder="$0"
              name="deuda empresa"
              data-vv-validate-on="blur"
            >
            <span class="error">{{ errors.first('deuda empresa') }}</span>
          </div>
        </div>
        <div class="row">
          <!-- VALOR PROPIEDAD EN GARANTÍA -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label
              for
            >Si puedes dejar una propiedad en garantía, cuánto estímas que vale? (En millones)</label>
            <input 
              v-model="propiedad" 
              type="text" 
              class="form-control">
          </div>

          <!-- GARANTIA INMOBILIARIA PARA OPERACION -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for>Qué tipo de Garantías inmobiliarias ofreces para la operación?</label>
            <select 
              v-model="credito_garantia_id" 
              class="form-control">
              <option 
                selected 
                disabled>Choose</option>
              <option 
                v-for="option in options.garantia" 
                :value="option.id">{{ option.descripcion }}</option>
            </select>
          </div>
        </div>
        <div class="row">
          <!-- DEUDA PROPIEDAD  -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for>Cuánta deuda tiene la propiedad?(Millones)</label>
            <input 
              v-model="propiedad_deuda" 
              type="text" 
              class="form-control">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for/>
            <button class="btn">INSCRIBETE AHORA</button>
          </div>
        </div>
      </div>
    </form>
  </Layout>
</template>

<style>
.credit {
  background-image: url(../../../src/assets/images/banner_bg.jpg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.credit h2 {
  margin-bottom: 50px;
  text-align: center;
}
.container-credit {
  display: block;
  max-width: 760px;
  padding: 60px 60px 60px 60px;
  margin: 20px auto 0 auto;
  background-color: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-bottom: 40px;
}
.credit-title {
  margin-top: 40px;
  font-weight: bold;
  color: #fff;
}
.credit label {
  height: 40px;
}
.credit .form-control {
  height: 40px;
  margin-bottom: 13px;
  border: 1px solid #bac9d8;
  border-radius: 2px;
  box-shadow: none;
}
.credit .btn {
  width: 100%;
  height: 40px;
  margin-top: 45px;
  color: #fff;
  background: #f47828;
  border-radius: 2px;
}

@media only screen and (max-width: 768px) {
  .container-credit {
    padding: 10px;
  }
}
.container-credit .error {
  display: block;
}
.container-credit .is-danger {
  border: 1px solid #d4000069 !important;
  background-color: #f798982b;
}
.container-credit .error {
  background-color: #d40000c9;
  position: relative;
  top: -13px;
  color: #ffffff;
  z-index: 99999;
  font-size: 13px;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  padding-left: 2px;
  z-index: 0;
}
</style>
