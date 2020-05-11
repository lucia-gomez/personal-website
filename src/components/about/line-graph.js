import React from "react";
import { Line } from "react-chartjs-2"

function dataset(data, label, color) {
  return {
    label: label,
    data: data,
    borderColor: color,
    borderWidth: 5,
    fill: false,
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointRadius: 1,
    pointHitRadius: 10,
    borderJoinStyle: 'miter',
    clip: { left: 0, top: 10, right: 0, bottom: 0 }
  };
}

const data = {
  labels: Array.from(Array(10).keys()),
  datasets: [
    dataset([90, 90, 50, 0, 0, 0, 0, 0, 0, 0], 'Jogging', '#a8dadc'),
    dataset([20, 20, 20, 20, 20, 20, 20, 20, 20, 20], 'Anxiously refreshing NYTimes', '#457b9d'),
    dataset([0, 0, 0, 0, 0, 0, 0, 0, 60, 70], 'Re-reading Harry Potter', '#1d3557'),
    dataset([30, 30, 40, 50, 80, 90, 100, 100, 80, 100], 'Building this website', '#e63946'),
    dataset([60, 60, 50, 50, 50, 50, 60, 60, 50, 40], 'Pokemon Go', '#f7868e'),
  ]
};

const LineGraph = () => (<Line
  data={data}
  options={{
    // aspectRatio: 2,
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          display: false
        },
      }],
      yAxes: [{
        ticks: {
          display: false
        },
      }]
    },
    layout: {
      padding: {
        top: 5,
        bottom: 0,
      }
    },
  }}
  legend={{
    "display": true,
    "position": "bottom",
    "labels": {
      "fontColor": "#1d3557",
      "fontFamily": 'Roboto',
    }
  }} width={null}
  height={350}
/>);

export default LineGraph
