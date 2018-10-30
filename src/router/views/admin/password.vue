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
            <h1>DCambiar Contraseña</h1>
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
                      <tr>
                        <td>Contraseña actual</td>
                        <td>
                          <input 
                            style="margin-bottom: 2px;" 
                            required="required" 
                            type="password" 
                            name="passr" >
                        </td>
                      </tr>
                      <tr>
                        <td>Nueva contraseña</td>
                        <td>
                          <input 
                            style="margin-bottom: 2px;" 
                            required="required" 
                            type="password" 
                            name="passr" >
                        </td>
                      </tr>
                      <tr>
                        <td>Repetir contraseña</td>
                        <td><input 
                          style="margin-bottom: 2px;" 
                          required="required" 
                          type="password" 
                          name="passr" ></td>
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
