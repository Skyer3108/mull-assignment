import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import LineChartComponent from './components/LineChart';
import BarChartComponent from './components/BarChart';
import PieChartComponent from './components/PieChar';

import { CubeProvider } from '@cubejs-client/react';

import cubeApi from './cube';
function App() {
  return (

     <CubeProvider cubeApi={cubeApi}>

    <Router>
      <nav>
        <ul>
          <li><Link to="/line-chart">Line Chart</Link></li>
          <li><Link to="/bar-chart">Bar Chart</Link></li>
          <li><Link to="/pie-chart">Pie Chart</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/line-chart" element={<LineChartComponent />} />
        <Route path="/bar-chart" element={<BarChartComponent />} />
        <Route path="/pie-chart" element={<PieChartComponent />} />
      </Routes>
    </Router>
     </CubeProvider>
    
  );
}

export default App;
