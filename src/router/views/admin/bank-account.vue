<script>
import Layout from '@layouts/admin'

export default {
  page: {
    title: 'BankAccount',
    meta: [{ name: 'description', content: 'BankAccount' }],
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
            <h1>Datos Bancarios</h1>
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
          <div class="col col-md-12">
            <div class="card">
              <div class="card-body">
                <form id="CuentaBancaria">
                  <label for="">Banco</label>
                  <select
                    id="bancoDestino"
                    name="bancoDestino"
                    tabindex="6"
                    class="form-control"
                    required>
                    <option value="">Seleccione</option><option
                      selected=""
                      value="1">BANCO DE CHILE - EDWARDS</option>
                    <option value="9">BANCO INTERNACIONAL</option>
                    <option value="12">BANCO ESTADO </option>
                    <option value="14">SCOTIABANK (Y EX DESARROLLO)</option>
                    <option value="16">BCI / TBANC(BCO DE CREDITO E I</option>
                    <option value="17">BANCO DO BRASIL S.A</option>
                    <option value="27">CORPBANCA</option>
                    <option value="28">BANCO BICE</option>
                    <option value="31">HSBC BANK</option>
                    <option value="37">BANCO SANTANDER</option>
                    <option value="39">BANCO ITAU CHILE</option>
                    <option value="49">BANCO SECURITY</option>
                    <option value="51">BANCO FALABELLA</option>
                    <option value="53">BANCO RIPLEY</option>
                    <option value="54">RABOBANK</option>
                    <option value="55">BANCO CONSORCIO</option>
                    <option value="57">BANCO PARIS</option>
                    <option value="504">BBVA</option>
                  </select>

                  <label for="">Tipo de cuenta</label>
                  <select
                    id="tipo_cuenta"
                    name="cuenta_cr"
                    class="form-control">
                    4<option value="1">Cuenta de Ahorro</option>4<option value="2">Cuenta Vista</option>4<option
                      selected=""
                      value="4">Cuenta Corriente</option>
                  </select>

                  <label for="">Nro de cuenta</label>
                  <input
                    id="cuenta_banco"
                    class="form-control"
                    required="required"
                    type="text"
                    name="cuenta_banco">
                      </input>
                  <button class="button btn form-button-bank">Guardar</button>
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
</style>
