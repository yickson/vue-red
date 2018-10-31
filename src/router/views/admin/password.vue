<script>
import Layout from '@layouts/admin'

export default {
  page: {
    title: 'Password',
    meta: [{ name: 'description', content: 'Password' }],
  },
  components: { Layout },
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
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                 <div class="row">
                    <div class="col-xs-12 col-md-8 col-md-offset-2">
                        <form id="CuentaBancaria">
                  <label for="">Contraseña</label>
                  <input type="text" class="form-control">

                  <label for="">Contraseña nueva</label>
                  <input type="text" class="form-control">

                  <label for="">Repetir contraseña</label>
                  <input type="text" class="form-control">
                    <button class="button btn form-button-bank">Guardar</button>
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
#CuentaBancaria .form-control {
  box-shadow: none;
  height: 40px;
}
#CuentaBancaria .form-button-bank {
  width: 120px;
  height: 40px;
  color: #ffffff;
  background-color: #f47828;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 10px;
}
#CuentaBancaria label {
  margin-top: 15px;
}
</style>
