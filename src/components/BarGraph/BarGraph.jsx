import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import './BarGraph.css';
// REVIEW THIS VIDEO IF YOU HAVE ISSUES: https://www.youtube.com/watch?v=mlSKLmG80Us
const BarGraph = () => {
  const [xaxis, setXaxis] = useState([]);
  const [yaxis, setYaxis] = useState([]);
  let xvalues = [];
  let yvalues = [];
  const data = {
    // put this in state (chartData, setChartData)
    labels: [
      'Open',
      'In Progress',
      'Additional Info Required',
      'Ready for Review',
      'Closed',
    ], // change to xvalues
    datasets: [
      {
        label: '# of Tickets',
        data: [12, 19, 3, 5, 2], //change to yvalues
        backgroundColor: [
          'rgba(22, 117, 224, 0.2)',
          'rgba(22, 117, 224, 0.2)',
          'rgba(22, 117, 224, 0.2)',
          'rgba(22, 117, 224, 0.2)',
          'rgba(22, 117, 224, 0.2)',
        ],
        borderColor: [
          'rgba(22, 117, 224, 1)',
          'rgba(22, 117, 224, 1)',
          'rgba(22, 117, 224, 1)',
          'rgba(22, 117, 224, 1)',
          'rgba(22, 117, 224, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  /* For Dynamic Rendering, please put this function in actions of redux when you get the backend complete
  axios.get('BAR GRAPH DATA ENDPOINT')
  .then((res) => {
      console.log(res);
      for(const dataObj) of res.TARGETDATA{
          xvalues.push(parseInt(dataObj.TARGETXVALUE));
        yvalues.push(parseInt(dataObj.TARGETYVALUE));
      }
      setChartData();
  })
  */
  return (
    <>
      <div className='graph'>
        <h2>Tickets By Status</h2>
        <p>Example</p>
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default BarGraph;
