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
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="col-md-2">
                  &nbsp;
                </div>
                <div class="col-md-8">
                  <table 
                    class="edit_form_table" 
                    border="0">
                    <tbody>
                      <tr><td> Banco</td>
                        <td>
                          <select 
                            id="bancoDestino" 
                            name="bancoDestino" 
                            tabindex="6" 
                            class="form-control selcls" 
                            style="margin-bottom: 2px;" 
                            required>
                            <option value="">Seleccione</option><option 
                              selected="" 
                              value="1">BANCO DE CHILE - EDWARDS</option><option value="9">BANCO INTERNACIONAL</option><option value="12">BANCO ESTADO </option><option value="14">SCOTIABANK (Y EX DESARROLLO)</option><option value="16">BCI / TBANC(BCO DE CREDITO E I</option><option value="17">BANCO DO BRASIL S.A</option><option value="27">CORPBANCA</option><option value="28">BANCO BICE</option><option value="31">HSBC BANK</option><option value="37">BANCO SANTANDER</option><option value="39">BANCO ITAU CHILE</option><option value="49">BANCO SECURITY</option><option value="51">BANCO FALABELLA</option><option value="53">BANCO RIPLEY</option><option value="54">RABOBANK</option><option value="55">BANCO CONSORCIO</option><option value="57">BANCO PARIS</option><option value="504">BBVA</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>Tipo Cuenta</td>
                        <td>
                          <select 
                            id="tipo_cuenta" 
                            name="cuenta_cr" 
                            class="form-control selcls">
                            4<option value="1">Cuenta de Ahorro</option>4<option value="2">Cuenta Vista</option>4<option 
                              selected="" 
                              value="4">Cuenta Corriente</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>Nro Cuenta</td>
                        <td><input 
                          id="cuenta_banco" 
                          style="margin-bottom: 2px;" 
                          required="required" 
                          type="text" 
                          name="cuenta_banco" 
                          class="numbersOnly form-control" 
                          value="123456789" 
                          onKeyPress="return isNumberKey(event)"></td>
                      </tr>
                      <tr/>
                      <tr>
                        <td 
                          colspan="2" 
                          align="center"><input 
                            id="next" 
                            type="button" 
                            value="Guardar" 
                            href="#" 
                            class="btn btn-block btn-rc"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<style lang="scss" module>
@import '@design';
</style>
