import './App.css';
import { useState } from 'react';
import { AccountingDailyDepositData } from "./components/AccountingDailyDepositData";
import BarChat from './components/BarChat';
import LineChart from './components/LineChart';

function App() {

  const [accountData, setAccounData] = useState({
    labels: AccountingDailyDepositData.map((data) => data.id),
    datasets: [
      {
        label: "ACCOUNTING DAILY DEPOSIT",
        data: AccountingDailyDepositData.map((data) => data.totalDeposit),
        backgroundColor: ["red", "gold", "green" ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="App">
      <BarChat />
      <LineChart chartData={accountData}/>

    </div>
  );
}

export default App;
