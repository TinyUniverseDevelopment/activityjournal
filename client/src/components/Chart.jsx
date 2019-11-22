import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = () => {
  const data = {
    labels: ['Code', 'Exercise', 'Work', 'Cook', 'Game'],
    datasets: [
      {
        label: 'Activities Total',
        backgroundColor: 'rgba(12,15,70,.06)',
        borderColor: 'rgba(35,67,24,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,122,0.6)',
        hoverBorderColor: 'rgba(123,233,122,1)',
        data: [12, 12, 23, 34, 12]
      },
      {
        label: 'Activities added today',
        backgroundColor: 'rgba(12,15,70,.06)',
        borderColor: 'rgba(35,67,24,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,122,0.6)',
        hoverBorderColor: 'rgba(123,233,122,1)',
        data: [3, 2, 5, 7, 1]
      }
    ]
  };

  return (
    <div>
      <Bar
        data={data}
        width={100}
        height={100}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default Chart;
