
  var ctx = document.getElementById('diagrama').getContext('2d');
  var myChart = new Chart(ctx, {
      // Tipo de gráfico
      type: 'pie',
      // type: 'bar',
  
      //ingresar valores
      data: {
          labels: ['2020', '2019', '2018'],
          datasets: [{
              label: 'ingresos',
              data: [120, 100, 110],
              backgroundColor: ['rgb(50, 99, 132)',
              'rgb(80, 1, 50)',
              'rgb(255, 20, 60)']

          }]
      },
  
      // Configuration options go here
      options: {}
  });