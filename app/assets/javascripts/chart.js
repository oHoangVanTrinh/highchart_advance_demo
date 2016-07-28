$(function () {

  $('#chart').highcharts({

    chart: {
      polar: true,
      type: 'line'
    },

    title: {
      text: 'Student Points',
      x: -80
    },

    pane: {
      size: '80%'
    },

    xAxis: {
      categories: ['Math', 'Literary', 'Chemistry', 'Physical', 'Biological', 'Foreign Language',
              'Information Technology', 'History'],
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

    series: [{
      name: $("#chart").data("name"),
      data: $("#chart").data("point"),
      pointPlacement: 'on'
    }]
  });
});
