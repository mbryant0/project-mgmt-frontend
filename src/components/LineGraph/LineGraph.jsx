import React from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph = () => {
  const data = {
    labels: [
      'Day 1',
      'Day 2',
      'Day 3',
      'Day 4',
      'Day 5',
      'Day 6',
      'Day 7',
      'Day 8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
    ],
    datasets: [
      {
        label: '# of Hours',
        data: [
          16,
          14,
          17,
          11,
          11,
          12,
          10,
          15,
          15,
          15,
          15,
          15,
          20,
          18,
          15,
          12,
          13,
          14,
          12,
          12,
          14,
          13,
          12,
          13,
          14,
          14,
          14,
          14,
        ],
        fill: false,
        backgroundColor: 'rgba(22, 117, 224, 0.8)',
        borderColor: 'rgba(22, 117, 224, 0.8)',
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
          gridLines: {
            display: 'none',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: 'none',
          },
        },
      ],
    },
  };

  return (
    <>
      <div className='graph'>
        <h2>Average Ticket Resolution Time</h2>
        <p>Monthly (Last 28 days)</p>
        <Line data={data} options={options} />
      </div>
    </>
  );
};

export default LineGraph;
