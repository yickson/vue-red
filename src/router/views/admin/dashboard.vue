<script>
import { authComputed } from '@state/helpers'
import Layout from '@layouts/admin'

export default {
  page: {
    title: 'Dashboard',
    meta: [{ name: 'description', content: 'Dashboard' }],
  },
  components: { Layout },
  data() {
    return {
      show: true,
    }
  },
  computed: {
    ...authComputed,
  },
}
</script>

<template>
  <Layout>
    <div class="breadcrumbs">
      <div class="col-sm-12">
        <div class="page-header float-left">
          <div class="page-title">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="content mt-3">
      <div class="col-sm-12">
        <alert 
          type="success" 
          dismissible 
          @dismissed="show = false">
          <b>¡Bienvenido!</b>
          <br>
          {{ currentUser.data.usuario.nombre }} {{ currentUser.data.usuario.app_pat }}, Aquí podras ver toda la información relevante para ti.
        </alert>
      </div>
      <div class="col-sm-6 col-lg-3">
        <div class="card text-white bg-flat-color-1 boxresumen">
          <div class="card-body pb-0">
            <div class="dropdown float-right"/>
            <h3 class="mb-0">
              <span>180.000</span>
            </h3>
            <p class="text-light">Monto recibido</p>

            <h4 class="mb-0">
              <span>18.000.000</span>
            </h4>
            <p class="text-light">Total Invertido</p>

            <div 
              class="chart-wrapper px-0" 
              style="height:70px;" 
              height="70">
              <!--CHART-->
            </div>
          </div>
        </div>
      </div>
      <!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <div class="card text-white bg-flat-color-2 boxresumen">
          <div class="card-body pb-0">
            <div class="dropdown float-right"/>
            <h3 class="mb-0">
              <span class="count">9</span>
              <span>%</span>
            </h3>
            <p class="text-light">Mora promedio</p>
            <h4 class="mb-0">
              <span class="count">4</span>
              <span>%</span>
            </h4>
            <p class="text-light">Mora promedio gnral.</p>
            <div 
              class="chart-wrapper px-0" 
              style="height:70px;" 
              height="70">
              <!--CHART-->
            </div>
          </div>
        </div>
      </div>
      <!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <div class="card text-white bg-flat-color-3 boxresumen">
          <div class="card-body pb-0">
            <div class="dropdown float-right"/>
            <h3 class="mb-0">
              <span class="count">10</span>
              <span>%</span>
            </h3>
            <p class="text-light">Rentabilidad prom.</p>
            <h4 class="mb-0">
              <span class="count">15</span>
              <span>%</span>
            </h4>
            <p class="text-light">Rentabilidad prom. devengado</p>
          </div>

          <div 
            class="chart-wrapper px-0" 
            style="height:70px;" 
            height="70">
            <!--CHART-->
          </div>
        </div>
      </div>
      <!--/.col-->
      <div class="col-sm-6 col-lg-3">
        <div class="card text-white bg-flat-color-4 boxresumen">
          <div class="card-body pb-0">
            <h4 class="mb-0">
              <span>$50.000</span>
            </h4>
            <p class="text-light">Vencimiento en 30 días</p>
            <h4 class="mb-0">
              <span>$50.000.000</span>
            </h4>
            <p class="text-light">Vencimiento en 90 días</p>
            <div 
              class="chart-wrapper px-3" 
              style="height:70px;" 
              height="70"/>
          </div>
        </div>
      </div>
      <!--/.col-->
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="stat-widget-one">
              <div class="stat-icon dib">
                <i class="fas fa-dollar-sign"/>
              </div>
              <div class="stat-content dib">
                <div class="stat-text">Ganancia total</div>
                <div class="stat-digit">1.000.000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="stat-widget-one">
              <div class="stat-icon dib">
                <i class="fas fa-dollar-sign"/>
              </div>
              <div class="stat-content dib">
                <div class="stat-text">Mora promedio</div>
                <div class="stat-digit">9%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="stat-widget-one">
              <div class="stat-icon dib">
                <i class="fas fa-dollar-sign"/>
              </div>
              <div class="stat-content dib">
                <div class="stat-text">Total Proyectos</div>
                <div class="stat-digit">10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="stat-widget-one">
              <div class="stat-icon dib">
                <i class="fas fa-dollar-sign"/>
              </div>
              <div class="stat-content dib">
                <div class="stat-text">Otro indicador</div>
                <div class="stat-digit">70</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                <h4 class="card-title mb-0">Gráfico</h4>
                <div class="small text-muted">Historico</div>
              </div>
            </div>
            <div class="chart-wrapper mt-4">
              <!--chart-->
              <area-chart
                :colors="['#63c2de', '#b1e0eebd']"
                :data="{'2017-01-01 00:00:00 -0800': 1, '2017-02-01 00:00:00 -0800': 2, '2017-03-01 00:01:00 -0800': 5, '2017-04-01 00:01:00 -0800': 7, '2016-03-01 00:01:00 -0800': 4, '2016-02-01 00:01:00 -0800': 7}"
              />
            </div>
            <div class="col-sm-8 hidden-sm-down">
              <div
                class="btn-toolbar float-right"
                role="toolbar"
                aria-label="Toolbar with button groups"
              />
            </div>
          </div>
          <div class="card-footer">
            <ul>
              <li>
                <div class="text-muted">Indicador</div>
                <strong>29.703</strong>
                <div 
                  class="progress progress-xs mt-2" 
                  style="height: 5px;">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style="width: 40%;"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </li>
              <li class="hidden-sm-down">
                <div class="text-muted">Unique</div>
                <strong>20%</strong>
                <div 
                  class="progress progress-xs mt-2" 
                  style="height: 5px;">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    style="width: 20%;"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </li>
              <li>
                <div class="text-muted">Indicador</div>
                <strong>78.706</strong>
                <div 
                  class="progress progress-xs mt-2" 
                  style="height: 5px;">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style="width: 60%;"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </li>
              <li class="hidden-sm-down">
                <div class="text-muted">Indicador</div>
                <strong>22.123</strong>
                <div 
                  class="progress progress-xs mt-2" 
                  style="height: 5px;">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style="width: 80%;"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </li>
              <li class="hidden-sm-down">
                <div class="text-muted">Indicador</div>
                <strong>40.15%</strong>
                <div 
                  class="progress progress-xs mt-2" 
                  style="height: 5px;">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 40%;"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<style >
.boxresumen {
  height: 220px;
}

.card {
  margin-bottom: 1.5rem;
  border-radius: 6px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1); */
  border: 1px solid transparent;
}
.card:hover {
  -webkit-box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  opacity: 1;
}
.stat-widget-one .stat-text {
  font-size: 14px;
  color: #868e96;
}
.stat-widget-one .stat-digit {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}
.card .card-footer ul li {
  display: table-cell;
  padding: 0 1rem;
  text-align: center;
}

.card .card-footer ul,
ol {
  padding-left: 0;
}
.bg-flat-color-1 {
  background: #00c6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0072ff,
    #00c6ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0072ff,
    #00c6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.bg-flat-color-2 {
  background: #56ccf2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2f80ed,
    #56ccf2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.bg-flat-color-3 {
  background: #f7971e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ffd200,
    #f7971e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ffd200,
    #f7971e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.bg-flat-color-4 {
  background: #ff512f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #f09819,
    #ff512f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #f09819,
    #ff512f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.bg-flat-color-5 {
  background: #4dbd74;
}
</style>
