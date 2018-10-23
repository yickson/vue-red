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
    credito_garantia_id: 1,
    credito_necesidad_id: 1,
    credito_objetivo_id: 2,
    credito_venta_id: 1,
    propiedad: null,
    propiedad_deuda: null,
  }),
  beforeMount() {
    this.cantidadSolicitar()
  },
  methods: {
    cantidadSolicitar() {
      axios
        .get('http://52.67.70.146/api/credito')
        .then(response => (this.options = response.data))
    },
    enviarSolicitud() {
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
          console.log(response)
          alert(response)
        })
        .catch(error => {
          console.log(error)
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
      action=""
      @submit.prevent="enviarSolicitud">
      <div class="container-credit">

        <div class="row">
          <!-- NOMBRE EMPRESA -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for="">Nombre Empresa (*)</label>
            <BaseInput
              v-model="empresa"
              placeholder="Ingrese nombre empresa"
              name="empresa"
            />
          </div>
          <!-- NOMBRE RUT -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for="">RUT Empresa (*)</label>
            <BaseInput
              v-model="rut"
              placeholder="Ingrese rut empresa"
              name="rut"
            />
          </div>
        </div>
        <div class="row">
          <!-- NOMBRE CONTACTO -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for="">Fono Contacto(*)</label>
            <BaseInput
              v-model="telefono"
              placeholder="+569"
              name="telefono"
            />
          </div>
          <!-- NOMBRE EMAIL -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for="">Mail Contacto (*)</label>
            <BaseInput
              v-model="email"
              placeholder="mail@mail.cl"
              name="email"
            />
          </div>
        </div>
        <div class="row">
          <!-- MONTO NECESITADO PARA FINANCIACION -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for="">¿Cuánto Necesitas? (en millones) (*)</label>
            <select
              v-model="credito_necesidad_id"
              class="form-control" >
              <option selected>Selecciona</option>
              <option
                v-for="(option,index) in options.data.necesidad"
                :value="option.id">
                {{ option.descripcion }}
              </option>
            </select>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <!-- A QUIENES VENDE -->
            <label for="">A Quiénes Vendes (*)</label>
            <select
              v-model=" credito_objetivo_id"
              class="form-control" >
              <option selected>Selecciona</option>
              <option
                v-for="(option,index) in options.data.objetivo"
                :value="option.id">
                {{ option.descripcion }}
              </option>
            </select>
          </div>
        </div>
        <div class="row">

          <!-- VENTA PROMEDIO MENSUAL -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for="">Cuánto Vendes promedio al mes (*)</label>
            <select
              v-model="credito_venta_id"
              class="form-control" >
              <option
                selected
                disabled>Selecciona</option>
              <option
                v-for="(option,index) in options.data.ventas"
                :value="option.id">
                {{ option.descripcion }}
              </option>
            </select>
          </div>

          <!-- DEUDA EMPRESA -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for="">Cuánta deuda tiene la empresa (En millones)</label>
            <BaseInput
              v-model="deuda"
              placeholder="$0"
              name="deuda"
            />
          </div>
        </div>
        <div class="row">
          <!-- VALOR PROPIEDAD EN GARANTÍA -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for="">Si puedes dejar una propiedad en garantía, cuánto estímas que vale? (En millones)</label>
            <input
              v-model="propiedad"
              type="text"
              class="form-control">
          </div>

          <!-- GARANTIA INMOBILIARIA PARA OPERACION -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for="">Qué tipo de Garantías inmobiliarias ofreces para la operación?</label>
            <select
              v-model="credito_garantia_id"
              class="form-control" >
              <option
                selected
                disabled>Choose</option>
              <option
                v-for="(option,index) in options.data.garantia"
                :value="option.id">
                {{ option.descripcion }}
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <!-- DEUDA PROPIEDAD  -->
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for="">Cuánta deuda tiene la propiedad?(Millones)</label>
            <input
              v-model="propiedad_deuda"
              type="text"
              class="form-control">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <label for=""/>
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
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.credit h2 {
  text-align: center;
  margin-bottom: 50px;
}
.container-credit {
  display: block;
  margin: 20px auto 0 auto;
  background-color: #ffffff;
  max-width: 760px;
  padding: 60px 60px 60px 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}
.credit-title {
  color: #ffffff;
  margin-top: 40px;
  font-weight: bold;
}
.credit label {
  height: 40px;
}
.credit .form-control {
  border: 1px solid #bac9d8;
  box-shadow: none;
  height: 40px;
  border-radius: 0.25em;
  margin-bottom: 15px;
}
.credit .btn {
  background: #f47828;
  color: #ffffff;
  width: 100%;
  border-radius: 2px;
  height: 40px;
  margin-top: 45px;
}

@media only screen and (max-width: 768px) {
  .container-credit {
    padding: 10px;
  }
}
</style>
