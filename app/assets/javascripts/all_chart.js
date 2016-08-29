$(function () {
  var data = $("#all_chart").data("all-user");
  $('#all_chart').highcharts({
    chart: {
      polar: true,
      type: 'line'
    },

    title: {
      text: 'All Student Points',
      x: -80
    },

    pane: {
      size: '80%'
    },

    xAxis: {
      categories: ['Math', 'Literary', 'Chemistry', 'Physical', 'Biological', 'Foreign Language', 'Information Technology', 'History'],
      tickmarkPlacement: 'on',
      lineWidth: 0
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0
    },

    tooltip: {
      shared: true,
      pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
    },

    legend: {
      align: 'right',
      verticalAlign: 'top',
      y: 70,
      layout: 'vertical'
    },

    series: []
  });

  var chart = $('#all_chart').highcharts();
  for (var i=0; i < data.length/10; i++){
    var arr = [];
    for (var j=2; j<10; j++){
      arr.push(data[i*10+j]);
    }

    chart.addSeries({
      name: data[i*10+1],
      data: arr,
    });
  }
});

