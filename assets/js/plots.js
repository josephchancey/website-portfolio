// var trace1 = {
//     x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
//     y: [219, 146, 112, 127, 124, 180, 236, 207, 236, 263, 350, 430, 474, 526, 488, 537, 500, 439],
//     name: 'Rest of world',
//     marker: {color: 'rgb(105, 55, 109)'},
//     type: 'bar'
//   };
  
//   var trace2 = {
//     x: [1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
//     y: [16, 13, 10, 11, 28, 37, 43, 55, 56, 88, 105, 156, 270, 299, 340, 403, 549, 499],
//     name: 'China',
//     marker: {color: 'rgb(62, 101, 83)'},
//     type: 'bar'
//   };
  
//   var data = [trace1, trace2];
  
//   var layout = {
//     title: 'US Export of Plastic Scrap',
//     xaxis: {tickfont: {
//         size: 14,
//         color: 'rgb(107, 107, 107)'
//       }},
//     yaxis: {
//       title: 'USD (millions)',
//       titlefont: {
//         size: 16,
//         color: 'rgb(107, 107, 107)'
//       },
//       tickfont: {
//         size: 14,
//         color: 'rgb(107, 107, 107)'
//       }
//     },
//     legend: {
//       x: 0,
//       y: 1.0,
//       bgcolor: 'rgba(255, 255, 255, 0)',
//       bordercolor: 'rgba(255, 255, 255, 0)'
//     },
//     barmode: 'group',
//     bargap: 0.15,
//     bargroupgap: 0.1
//   };
  
//   Plotly.newPlot('pltDiv', data, layout,  {staticPlot: true});


// var trace1 = {
  
//     x: ['2017-01-17', '2017-01-18', '2017-01-19', '2017-01-20', '2017-01-23', '2017-01-24', '2017-01-25', '2017-01-26', '2017-01-27', '2017-01-30', '2017-01-31', '2017-02-01', '2017-02-02', '2017-02-03', '2017-02-06', '2017-02-07', '2017-02-08', '2017-02-09', '2017-02-10'], 
    
//     close: [120, 119.989998, 119.779999, 120, 120.080002, 119.970001, 121.879997, 121.940002, 121.949997, 121.629997, 121.349998, 128.75, 128.529999, 129.080002, 130.289993, 131.529999, 132.039993, 132.419998, 132.119995], 
    
//     decreasing: {line: {color: 'red'}}, 
    
//     high: [120.239998, 120.5, 120.089996, 120.449997, 120.809998, 120.099998, 122.099998, 122.440002, 122.349998, 121.629997, 121.389999, 130.490005, 129.389999, 129.190002, 130.5, 132.089996, 132.220001, 132.449997, 132.940002], 
    
//     increasing: {line: {color: 'blue'}}, 
    
//     line: {color: 'rgba(31,119,180,1)'}, 
    
//     low: [118.220001, 119.709999, 119.370003, 119.730003, 119.769997, 119.5, 120.279999, 121.599998, 121.599998, 120.660004, 120.620003, 127.010002, 127.779999, 128.160004, 128.899994, 130.449997, 131.220001, 131.119995, 132.050003], 
    
//     open: [118.339996, 120, 119.400002, 120.449997, 120, 119.550003, 120.419998, 121.669998, 122.139999, 120.93, 121.150002, 127.029999, 127.980003, 128.309998, 129.130005, 130.539993, 131.350006, 131.649994, 132.460007], 
    
//     type: 'candlestick', 
//     xaxis: 'x', 
//     yaxis: 'y'
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     dragmode: 'zoom', 
//     margin: {
//       r: 10, 
//       t: 25, 
//       b: 40, 
//       l: 60
//     }, 
//     showlegend: false, 
//     xaxis: {
//       autorange: true, 
//       rangeslider: {visible: false}, 
//       title: 'Date', 
//       type: 'date'
//     }, 
//     yaxis: {
//       autorange: true, 
//       type: 'linear'
//     },
    
//     annotations: [
//       {
//         x: '2017-01-31',
//         y: 0.9,
//         xref: 'x',
//         yref: 'paper',
//         text: 'largest movement',
//         font: {color: 'purple'},
//         showarrow: true,
//         xanchor: 'right',
//         ax: -20,
//         ay: 0
//       }
//     ],
    
//     shapes: [
//         {
//             type: 'rect',
//             xref: 'x',
//             yref: 'paper',
//             x0: '2017-01-31',
//             y0: 0,
//             x1: '2017-02-01',
//             y1: 1,
//             fillcolor: '#d3d3d3',
//             opacity: 0.2,
//             line: {
//                 width: 0
//             }
//         }
//       ]
//   };
  
//   Plotly.newPlot('pltDiv', data, layout, {staticPlot: true});



var data = [
  {
      name: "profit/loss",
      type: "waterfall",
      orientation: "v",
      measure: [
          "relative",
          "relative",
          "total",
          "relative",
          "relative",
          "total"
      ],
      x: [
          "Sales",
          "Consulting",
          "Net revenue",
          "Purchases",
          "Other expenses",
          "Profit before tax"
      ],
      textposition: "outside",
      text: [
          "+60",
          "+80",
          "",
          "-40",
          "-20",
          "Total"
      ],          
      y: [
          60,
          80,
          0,
          -40,
          -20,
          0
      ],
      connector: {
        line: {
          color: "rgb(63, 63, 63)"
        }
      },
  }
];
layout = {
  // paper_bgcolor: "#3E6553",
  // plot_bgcolor: "#3E6553",
  title: {
      text: "Profit and Loss Statement"
  },
  xaxis: {
      type: "category"
  },
  yaxis: {
      type: "linear"
  },
  autosize: true,
  showlegend: true
};
Plotly.newPlot('pltDiv', data, layout);