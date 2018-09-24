<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Registrate',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
  data() {
    return {
      data: {
        nombre: '',
        app_pat: '',
        app_mat: 'Cuevas',
        genero: 'M',
        fec_nac: '1988-08-17',
        email: '',
        password: '',
        c_password: '',
        rut: '',
        pais_id: 1,
        e_civil: 1,
        t_fijo: 22354481,
        t_trabajo: 22388459,
        t_movil: 56995422554,
        direccion: 'Avenida Siempre Viva 742',
        c_dom: 1,
        nickname: 'NickName',
        profesion: 'profesion',
        region_id: 1,
        comuna_id: 1,
        confirmado: 0,
        estado: 0,
        user_tipo_id: 1,
      },
    }
  },
  methods: {
    submitRegister() {
      fetch('http://127.0.0.1:8000/api/register', {
        method: 'post',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.data),
      }).then(res => console.log(res))
    },
  },
}
</script>

<template>
  <Layout class="registrarse">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <h2 class="text-center register-title">REGISTRATE</h2>
      </div>
    </div>
    <div class="container-form">
      <form @submit.prevent="submitRegister">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">

            <!-- nombre-->
            <div class="form-group">
              <label for="">Nombre</label>
              <label
                class="sr-only"
                for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-user"/>
                </div>
                <input
                  id="exampleInputAmount"
                  v-model="data.nombre"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su nombre">
              </div>
            </div>

            <!-- apellido-->
            <div class="form-group">
              <label for="">Apellido</label>
              <label
                class="sr-only"
                for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-user"/>
                </div>
                <input
                  id="exampleInputAmount"
                  v-model="data.app_pat"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su apellido">
              </div>
            </div>

            <!-- email-->
            <div class="form-group">
              <label for="">E-mail</label>
              <label
                class="sr-only"
                for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-envelope fa"/>
                </div>
                <input
                  id="exampleInputAmount"
                  v-model="data.email"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su Email">
              </div>
            </div>

            <!-- contraseña -->
            <div class="form-group">
              <label for="">RUT</label>
              <label
                class="sr-only"
                for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-users fa"/>
                </div>
                <input
                  id="exampleInputAmount"
                  v-model="data.rut"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su RUT sin puntos ni guión">
              </div>
            </div>

            <!-- contraseña -->
            <div class="form-group">
              <label for="">Contraseña</label>
              <label
                class="sr-only"
                for="exampleInputAmount">Amount (in dollars)</label>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-lock fa"/>
                </div>
                <input
                  id="exampleInputAmount"
                  v-model="data.password"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su contraseña">
              </div>
            </div>

            <!-- contraseña nueva -->
            <div class="form-group">
              <label for="">Repetir contraseña</label>
              <label
                class="sr-only"
                for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  <i class="fas fa-lock fa"/>
                </div>
                <input
                  id="exampleInputAmount"
                  v-model="data.c_password"
                  type="text"
                  class="form-control"
                  placeholder="Repita su contraseña">
              </div>
            </div>

            <!-- contraseña nueva -->
            <div class="form-group">
              <label for="">Telefono (Opcional)</label>
              <label
                class="sr-only"
                for="exampleInputAmount"/>
              <div class="input-group">
                <div class="input-group-addon">
                  +569
                </div>
                <input
                  id="exampleInputAmount"
                  v-model="data.t_fijo"
                  type="text"
                  class="form-control"
                  placeholder="Ingrese su contraseña">
              </div>
            </div>

            <button class="btn">REGISTRARSE</button>
            <span class="terms-conditions">Al presionar registrar está aceptando nuestros <a
              href=""
              class="link">terminos y condiciones</a></span>

          </div>


        </div>
      </form>
    </div>
  </Layout>
</template>

<style>
.registrarse {
  background-image: url(../../../src/assets/images/banner_bg.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
.register-title {
  text-align: center;
  margin-bottom: 50px;
  color: #ffffff;
  margin-top: 40px;
  font-weight: bold;
}

.container-form {
  display: block;
  margin: 0px auto;
  background-color: #ffffff;
  max-width: 600px;
  padding: 60px 60px 60px 60px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}
.container-form .input-group-addon {
  background: #ffffff;
}
.container-form .fas {
  color: #f47828;
}
.registrarse .form-control {
  border: 1px solid #ddd;
  border-radius: 2px;
  box-shadow: none;
  height: 40px;
}
.registrarse .form-control .input-group-addon {
  color: #f47828;
}
.container-form .btn {
  background-color: #f47828;
  color: #ffffff;
  display: block;
  height: 40px;
  width: 100%;
  margin-top: 30px;
  border-radius: 2px;
}

.terms-conditions {
  font-size: 10px;
  text-align: center;
}
.terms-conditions .link {
  color: #f47828;
}
.container-form h2 {
  margin-bottom: 20px;
}
@media screen and (max-width: 560px) {
  .container-form {
    padding: 30px;
  }
}
</style>
