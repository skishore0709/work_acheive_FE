<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="computedChartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      total_leave: 24,
      taken_leave: 15,
      available_leave:0,
      approval_pending:0,
      chartOptions: {
        responsive: true
      }
    }
  },
  computed:{
    computedChartData(){
      return{
        labels: [ 'Total', 'Taken', 'Available', 'Approval'],
        datasets: [
          {
            label: 'Leave',
            backgroundColor: 'rgb(125,125,211)',
            data: [this.total_leave, this.taken_leave, this.total_leave - this.taken_leave, this.approval_pending]
          }
        ]
      };
    }
  }
}
</script>