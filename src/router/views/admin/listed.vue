<script>
import Layout from '@layouts/admin'

export default {
  page: {
    title: 'listed',
    meta: [{ name: 'description', content: 'listed' }],
  },
  components: { Layout },
  data() {
    return {
      items: [
        {
          id: 1,
          avatar:
            'https://icdn2.digitaltrends.com/image/artifox-desk-02-720x720.jpg?ver=1.jpg',
          name: 'FACTURA A LOGISFA',
          amount: '1111111',
          tazaRetorno: '11%',
          plazo: '70 dias',
          identificador: '3D4CV',
          progress: 10,
          financiado: '10%',
          rentabilidad: '20%',
          iconedit: 'far fa-edit',
          iconchat: 'far fa-comment-alt',
        },
        {
          id: 2,
          avatar:
            'https://media.forfattarcentrum.se/2017/06/forfattares-arbetsplats.jpg',
          name: 'FACTURA A TECNOLOGIA A',
          amount: '2222222',
          tazaRetorno: '11%',
          plazo: '70 dias',
          identificador: '3D4CV',
          progress: 40,
          financiado: '10%',
          rentabilidad: '20%',
          iconedit: 'far fa-edit',
          iconchat: 'far fa-comment-alt',
        },
        {
          id: 3,
          avatar:
            'https://icdn2.digitaltrends.com/image/artifox-desk-02-720x720.jpg?ver=1.jpg',
          name: 'FACTURA PROMET SERCIOS',
          amount: '3333333',
          tazaRetorno: '11%',
          plazo: '70 dias',
          identificador: '3D4CV',
          progress: 30,
          financiado: '10%',
          rentabilidad: '20%',
          iconedit: 'far fa-edit',
          iconchat: 'far fa-comment-alt',
        },
        {
          id: 4,
          avatar:
            'https://icdn2.digitaltrends.com/image/artifox-desk-02-720x720.jpg?ver=1.jpg',
          name: 'FACTURA PROMET SERCIOS',
          amount: '3333333',
          tazaRetorno: '11%',
          plazo: '70 dias',
          identificador: '3D4CV',
          progress: 60,
          financiado: '10%',
          rentabilidad: '20%',
          iconedit: 'far fa-edit',
          iconchat: 'far fa-comment-alt',
        },
      ],
    }
  },
}
</script>

<template>
  <Layout>
    <div class="breadcrumbs">
      <div class="col-sm-8">
        <div class="page-header float-left">
          <div class="page-title">
            <h1>Inversiones - Inversiones</h1>
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
                  <div class="col-md-5">
                    <div class="col-md-4">
                      <div class="button-group">
                        <dropdown ref="dropdown">
                          <btn
                            type="primary"
                            class="dropdown-toggle">Dropdown <span class="caret"/></btn>
                          <template slot="dropdown">
                            <li><a role="button">Action</a></li>
                            <li><a role="button">Another action</a></li>
                            <li><a role="button">Something else here</a></li>
                            <li
                              role="separator"
                              class="divider"/>
                            <li><a role="button">Separated link</a></li>
                          </template>
                        </dropdown>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="button-group">
                        <dropdown ref="dropdown">
                          <btn
                            type="primary"
                            class="dropdown-toggle">Dropdown <span class="caret"/></btn>
                          <template slot="dropdown">
                            <li><a role="button">Action</a></li>
                            <li><a role="button">Another action</a></li>
                            <li><a role="button">Something else here</a></li>
                            <li
                              role="separator"
                              class="divider"/>
                            <li><a role="button">Separated link</a></li>
                          </template>
                        </dropdown>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="button-group">
                        <dropdown ref="dropdown">
                          <btn
                            type="primary"
                            class="dropdown-toggle">Dropdown <span class="caret"/></btn>
                          <template slot="dropdown">
                            <li><a role="button">Action</a></li>
                            <li><a role="button">Another action</a></li>
                            <li><a role="button">Something else here</a></li>
                            <li
                              role="separator"
                              class="divider"/>
                            <li><a role="button">Separated link</a></li>
                          </template>
                        </dropdown>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 text-right">
                    <div class="col-md-4">
                      <a
                        href="#"
                        class="btn btn-success btn-block"><i class="fa fa-file-excel-o"/> Consolidado</a>
                    </div>
                    <div class="col-md-4">
                      <a
                        href="#"
                        class="btn btn-success btn-block"><i class="fa fa-file-excel-o"/>Detalle de pagos</a>
                    </div>
                    <div class="col-md-4">
                      <a
                        href="#"
                        class="btn btn-success btn-block"><i class="fa fa-file-excel-o"/>Detalle de pagos</a>
                    </div>
                  </div>
                  <div class="table-responsive-sm col-padding-up">
                    <table class="table table-small verysmal table-hover">
                      <thead class="thead-light">
                        <tr>
                          <th
                            scope="col"
                            width="5%">Id</th>
                          <th
                            scope="col"
                            width="15%">Proyecto</th>
                          <th
                            scope="col"
                            width="10%">N# doc</th>
                          <th
                            scope="col"
                            width="7%">TIR ppto %</th>
                          <th
                            scope="col"
                            width="7%">TIR mes %</th>
                          <th
                            scope="col"
                            width="7%">TIR real %</th>
                          <th
                            scope="col"
                            width="7%">Fecha inv.</th>
                          <th
                            scope="col"
                            width="12%">Inversión</th>
                          <th
                            scope="col"
                            width="12%">Derechos</th>
                          <th
                            scope="col"
                            width="12%">Monto recibido a la fecha</th>
                          <th
                            scope="col"
                            width="12%">Monto a recibir</th>
                          <th
                            scope="col"
                            width="5%">E </th>
                          <th
                            scope="col"
                            width="7%">Otro</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in items"
                          :key="item">
                          <th>{{ item.id }}</th>
                          <td>{{ item.name }}</td>
                          <td>123123</td>
                          <td>{{ item.financiado }}</td>
                          <td>{{ item.financiado }}</td>
                          <td>{{ item.financiado }}</td>
                          <td>{{ item.financiado }}</td>
                          <td>{{ item.financiado }}</td>
                          <td>{{ item.financiado }}</td>
                          <td>{{ item.financiado }}</td>
                          <td>{{ item.financiado }}</td>
                          <td><i :class="item.iconedit"/></td>
                          <td><i :class="item.iconchat"/></td>
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
    </div>
  </Layout>
</template>


<style lang="scss" module>
.btn-success {
  color: #fff !important;
}
.dropdown-menu > li > .dropdown-menu-item {
  display: block;
  width: 100%;
  padding: 3px 20px;
  margin: 5px 0;
  clear: both;
  color: #333;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  -moz-user-select: none;
  user-select: none;
  outline: none;
}
.dropdown-menu > li:hover .dropdown-menu-item,
.dropdown-menu > li:focus .dropdown-menu-item {
  color: #262625;
  background-color: #f5f5f5;
}
.dropdown-menu > li > .dropdown-menu-item.checkbox {
  margin: 0;
  font-weight: normal;
}
.dropdown-menu > li > .dropdown-menu-item.checkbox input {
  display: none;
}
.col-padding-up {
  margin-top: 10px;
}
.btn-block {
  margin-bottom: 5px;
}
</style>
