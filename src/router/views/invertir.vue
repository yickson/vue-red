<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import HomeCard from '@components/home-card'
import Filters from '@components/filters'
import axios from 'axios'

export default {
  page: {
    title: 'Invertir',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, HomeCard, Filters },
  proyecto: {
    type: Array,
    required: false,
  },
  data() {
    return {
      proyectos: [],
    }
  },
  mounted() {
    this.getProyects()
  },
  methods: {
    getProyects() {
      axios
        .get('http://52.67.70.146/api/filtro')
        .then(response => (this.proyectos = response.data.data.data))
    },
  },
}
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-2 filtros">
        <Filters/>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-10">
        <div
          v-for="(proyecto, index) in proyectos"
          :key="proyecto.id"
          class="col-xs-12 col-md-3">
          <HomeCard
            :key="proyecto.id"
            :index="index"
            :proyecto="proyecto"
          />
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 text-center">
            <nav aria-label="Page navigation">
              <ul class="pagination invest-pagination " >
                <li>
                  <a
                    href="#"
                    aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                  <a
                    href="#"
                    aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="row sponsors-cont">
      <div class="col-xs-12 col-sm-12 col-md-12">
        <img
          src="../../../src/assets/images/sponsors.png"
          alt=""
          class="img-esponsors img-responsive">
      </div>
    </div>
  </Layout>
</template>

<style>
.filtros {
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  height: 1200px;
  background-color: #ffffff;
}
.sponsors-cont {
  background: #ffffff;
  margin-top: 50px;
}
.img-esponsors {
  display: block;
  margin: 0px auto 0 auto;
}
</style>
