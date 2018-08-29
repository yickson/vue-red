<template>
  <div class="col-xs-12 col-md-6">
    <canvas id="chart"/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.charts()
  },
  methods: {
    charts: function() {
      var ctx = document.getElementById('chart').getContext('2d')
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['< 0', '1-15', '16-30', '31-60', '61-90', '91-180', '>180'],
          datasets: [
            {
              label: 'Créditos',
              data: [12, 19, 3, 5, 2, 3, 4, 6],
              backgroundColor: [
                'rgba(255, 153, 0, 0.7)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255,93, 0, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      })
    },
  },
}
</script>

<style>
#chart {
  margin-top: 75px;
}
</style>
