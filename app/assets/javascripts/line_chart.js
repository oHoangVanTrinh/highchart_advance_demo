$(function () {
  $('#temp_chart').highcharts({
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'Temperatures',
      align: 'left',
      margin: 60,
      x: 20
    },
    plotOptions: {
      series: {
        pointPadding: 0,
        groupPadding: 0.15
      },
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    scrollbar: {
      barBackgroundColor: 'gray',
      barBorderRadius: 7,
      barBorderWidth: 0,
      buttonBackgroundColor: 'gray',
      buttonBorderWidth: 0,
      buttonBorderRadius: 7,
      trackBackgroundColor: 'none',
      trackBorderWidth: 1,
      trackBorderRadius: 8,
      trackBorderColor: '#CCC',
      enabled: true
    },
    xAxis: {
      categories: $("#temp_chart").data("date"),
      min: 0,
      max: 7
    },
    yAxis: {
      labels: {
        format: '{value}',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      title: {
        text: 'Temp',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    },
    legend: {
      align: 'top',
      x: 20,
      verticalAlign: 'top',
      y: 30,
      floating: true,
    },

    series: [{
      type: 'line',
      name: 'TP. HCM',
      data: $("#temp_chart").data("hcm"),
      color: '#3366CC'
    }, {
      type: 'line',
      name: 'Tokyo',
      yAxis: 1,
      data: $("#temp_chart").data("tokyo"),
      color: '#109618',
      marker: {
        enabled: false
      }
    }]
  });
});


$(function () {
    $('#container').highcharts({
        rangeSelector: {
                selected: 1
        },
        title: {
            text: 'Biểu đồ thể hiện nhiệt độ và lượng mưa theo từng tháng của Hà Nội và TP.HCM',
            align: 'left',
            margin: 60,
            x: 20
        },
        plotOptions: {
            series: {
                pointPadding: 0, // Defaults to 0.1
                groupPadding: 0.2 // Defaults to 0.2
            }
        },
        scrollbar: {
                barBackgroundColor: 'gray',
                barBorderRadius: 7,
                barBorderWidth: 0,
                buttonBackgroundColor: 'gray',
                buttonBorderWidth: 0,
                buttonBorderRadius: 7,
                trackBackgroundColor: 'none',
                trackBorderWidth: 1,
                trackBorderRadius: 8,
                trackBorderColor: '#CCC',
                enabled: true
        },
        xAxis: {
            categories: $('#container').data("date"),
            min: 0,
            max: 8
        },
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Lượng mưa',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Nhiệt độ',
                style: {
                    color: Highcharts.getOptions().colors['red']
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors['red']
                }
            },
            opposite: true
        }],
        legend: {
            align: 'top',
            x: 20,
            verticalAlign: 'top',
            y: 30,
            floating: true,
        },

        series: [{
            type: 'line',
            name: 'Nhiệt độ Hà Nội',
            yAxis: 1,
            data: $('#container').data("hcm"),
            color: '#109618',
            marker: {
              enabled: false
            }
        }, {
            type: 'line',
            name: 'Nhiệt độ TP.HCM',
            yAxis: 1,
            data: $('#container').data("tokyo"),
            color:  '#e6e600',
            marker: {
              enabled: false
            }
        }]
    });
});

