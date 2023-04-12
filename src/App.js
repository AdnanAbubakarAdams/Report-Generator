import './App.css';
// import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AccountingDailyDepositData } from "./AccountingDailyDepositData";

import Navbar from './components/Navbar';
import BarChat from './components/BarChat';
// import LineChart from './components/LineChart';
// import PieChart from "./components/PieChart"

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
      <Routes>
      <Route path="/" element={<BarChat />} />
      {/* <Route path="/linechart" element={<LineChart chartData={chartData}/>} />
      <Route path="/piechart" element={<PieChart chartData={chartData}/>} /> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
