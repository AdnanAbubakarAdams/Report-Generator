import React from 'react';
import AccountingDailyDeposit from "./AccountingDailyDeposit.csv";
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS } from "chart.js/auto";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)


const BarChat = () => {

    const [chartData, setChartData] = useState({
        datasets: []
      });
      const [chartOptions, setChartOptions] = useState({})
    
      useEffect(() => {
        Papa.parse(AccountingDailyDeposit, {
          download: true,
          header: true,
          dynamicTyping: true,
          delimiter: "",
          complete: ((result) => {
            console.log(result)
            setChartData({
              labels: result.data.map((item, index) => [item[' "Date"']]).filter( String ),
              datasets: [
                {
                  label: "ACCOUNTING DAILY DEPOSIT",
                  data: result.data.map((item, index) => [item[' "TotalDeposit"']]).filter( Number ),
                  borderColor: "black",
                //   borderWidth: 2,
                  backgroundColor: ["red", "gold", "green"]
                }
              ]
            });
            setChartOptions({
              responsive: true,
              plugins: {
                legend: {
                  position: 'top'
                },
                title: {
                  display: true,
                  text: "DAILY DEPOSIT FOR 2023"
                }
              }
            })
          })
        })
      }, [])
  return (
    <div>
        <h1>BarChart</h1>
        {
        chartData.datasets.length > 0 ? (
          <div className='barChart'>
            <Bar options={chartOptions} data={chartData}/>
            </div>
        ) : (
          <div>
            Loading...
            </div>
        )
      }
        </div>
  )
}

export default BarChat