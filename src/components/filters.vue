<template>
  <div
    id="filter-container"
    class="row">
    <div class="col-xs-12 col-sm-12">
      <label>
        <div class="active-projects">
          <input type="checkbox">Proyectos activos
        </div>
      </label>
      <label>
        <input type="checkbox"> Facturas
      </label>
      <label>
        <input type="checkbox"> Créditos (Pagaré)
      </label>
      <!-- range -->
      <p class="label-range">Rentabilidad mínima</p>
      <rangeSlider 
        v-model="value"
        class="slider"
        min="10"
        max="1000"
        step="10"/>
      <p v-text="total"/>
      <p class="label-range">Plazo máximo en meses</p>
      <rangeSlider/>
      <!-- range -->
      <button class="btn">Aplicar filtros</button>
      <div class="box-details">
        <span class="glyphicon glyphicon-flag"/>
        <p>Revisa los riesgos y garantías Aquí</p>
      </div>
      <div class="box-details">
        <span class="glyphicon glyphicon-info-sign"/>
        <p>Revisa los riesgos y garantías Aquí</p>
      </div>
      <div class="box-details">
        <span class="glyphicon glyphicon-signal"/>
        <p>Revisa tu Perfil de Inversión</p>
      </div>
    </div>
  </div>
</template>

<script>
import rangeSlider from './_base-range.vue'
export default {
  components: { rangeSlider },
  data() {
    return {
      value: 0,
    }
  },
  computed: {
    total: function() {
      return this.value
    },
  },
}
</script>

<style scoped>
#filter-container {
  padding: 20px;
}
label {
  display: block;
  font-weight: normal;
}
#filter-container .btn {
  background-color: #f47828;
  color: #ffffff;
}
.active-projects {
  border: 1px solid #f47828;
  border-radius: 50px;
  padding: 10px;
  position: relative;
  left: -12px;
}

.box-details {
  border: 1px solid #eee;
  min-height: 50px;
  max-width: 100%;
  padding: 20px;
  margin-top: 30px;
  border-bottom: 5px solid #f47828;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  border-radius: 2px;
}
.box-details .glyphicon {
  text-align: center;
  font-size: 20px;
}
.range-slider {
  margin: 0px 0 15px 0;
}
.label-range {
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 15px;
}
</style>
