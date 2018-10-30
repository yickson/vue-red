<script>
import Layout from '@layouts/admin'

export default {
  page: {
    title: 'Mandates',
    meta: [{ name: 'description', content: 'Mandates' }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <div class="breadcrumbs">
      <div class="col-sm-8">
        <div class="page-header float-left">
          <div class="page-title">
            <h1>Inversiones - mandatos</h1>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
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
                <div class="col-md-12">
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Nombre contrato</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Descargar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Definiciones y Antecedentes previos al uso</th>
                        <td>Aprobado</td>
                        <td>Mandato Especial Inversionista</td>
                        <td><a href="#"><i class="fa fa-file-pdf-o"/></a></td>
                      </tr>
                      <tr>
                        <th scope="row">Mandato Especial Inversionista</th>
                        <td>Aprobado</td>
                        <td>Mandato Especial Inversionista</td>
                        <td><a href="#"><i class="fa fa-file-pdf-o"/></a></td>
                      </tr>
                      <tr>
                        <th scope="row">Mandato Especial Inversionista</th>
                        <td>Aprobado</td>
                        <td>Mandato Especial Inversionista</td>
                        <td><a href="#"><i class="fa fa-file-pdf-o"/></a></td>
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
