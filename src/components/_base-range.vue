<template>
  <range-slider
    class="slider"
    min="10"
    max="1000"
    step="10"
  />
</template>

<script>
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  components: {
    RangeSlider,
  },
  data() {
    return {
      name: null,
      value: 0,
      min: 0,
      max: 100,
      step: 1,
      disabled: false,
    }
  },
}
</script>

<style>
.slider {
  /* overwrite slider styles */
  width: 167px;
}
.range-slider {
  padding-left: 0;
}
/*.range-slider-hidden {
  display: block;
  background-color: #ad063c;
  width: 29px;
  position: relative;
  right: -163px;
  border: none;
  color: white;
  border-radius: 2px;
  text-align: center;
  height: 24px;
}
.range-slider-hidden::after {
  position: absolute;
  top: 6px;
  left: -5px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-right: 7px solid #ad063c;
  border-bottom: 7px solid transparent;
  content: '';
}*/
.range-slider-fill {
  background-color: #f47828;
}
.range-slider-knob {
  background-color: #f90;
  border: none;
}
</style>
