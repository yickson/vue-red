<script>
import RangeSlider from 'vue-range-slider'

export default {
  components: { RangeSlider },
  data() {
    return {
      min: 8,
      max: 24,
      step: 1,
      proyectos: '',
      facturas: '',
      creditos: '',
      rentabilidad: 10,
      plazo: 10,
    }
  },
}
</script>

<template>
  <div
    id="filter-container"
    class="row">
    <div class="col-xs-12 col-sm-12">
      <label>
        <div class="active-projects">
          <input 
            v-model="proyectos" 
            type="checkbox">Proyectos activos
        </div>
      </label>
      <label>
        <input 
          v-model="facturas" 
          type="checkbox"> Facturas
      </label>
      <label>
        <input 
          v-model="creditos" 
          type="checkbox"> Créditos (Pagaré)
      </label>
      <!-- range -->
      <p class="label-range">Rentabilidad mínima</p>
      <range-slider
        v-model="rentabilidad"
        :min="min"
        :max="max"
        :step="step"
        class="slider"/>
      <p class="chip-value-filter">{{ rentabilidad }}</p>

      <p class="label-range">Plazo máximo en meses</p>
      <range-slider
        v-model="plazo"
        :min="min"
        :max="max"
        :step="step"
        class="slider"/>
      <p class="chip-value-filter">{{ plazo }}</p>
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
  border-radius: 2px;
  height: 40px;
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
  font-size: 14px;
  margin-bottom: 4;
  margin-top: 15px;
}
.chip-value-filter {
  background-color: brown;
  padding: 5px;
  color: #ffffff;
  display: inline;
  border-radius: 2px;
  position: relative;
  left: 13px;
  top: -5px;
}
.chip-value-filter:after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  top: 9px;
  left: -3px;
  background: brown;
  transform: rotate(45deg);
}
</style>

<style lang="scss">
$slider-height: 20px !default;
$slider-width: 130px !default;
$rail-height: 4px !default;
$knob-size: 20px !default;
$rail-color: #e2e2e2 !default;
$rail-fill-color: #21fb92 !default;
$knob-color: #fff !default;
$knob-border: 1px solid #f5f5f5 !default;
$knob-shadow: 1px 1px rgba(0, 0, 0, 0.2) !default;
.range-slider {
  display: inline-block;
  padding: 0 0 0 0;
  height: $slider-height;
  width: $slider-width;
}
.range-slider.disabled {
  opacity: 0.5;
}
.range-slider-inner {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
}
.range-slider-rail,
.range-slider-fill {
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  height: $rail-height;
  border-radius: $rail-height / 2;
  transform: translateY(-50%);
}
.range-slider-rail {
  width: 100%;
  background-color: $rail-color;
}
.range-slider-fill {
  background-color: $rail-fill-color;
}
.range-slider-knob {
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  box-sizing: border-box;
  height: $knob-size;
  width: $knob-size;
  border: $knob-border;
  border-radius: 50%;
  background-color: $knob-color;
  box-shadow: $knob-shadow;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.range-slider-hidden {
  display: none;
}
</style>
