import React from 'react';
import LineChart from '../components/analytic/LineChart';
import MyltitypeChart from '../components/analytic/MyltitypeChart';
import PieChart from '../components/analytic/PieChart';
import RadarChart from '../components/analytic/RadarChart';
import StackedBarChart from '../components/analytic/StackedBarChart';
import VerticalBarChart from '../components/analytic/VerticalBarChart';

const AnalyticPage = () => {
  return (
    <div className="analytic">
      <LineChart />
      <PieChart />
      <VerticalBarChart />
      <StackedBarChart />
      <RadarChart />
      <MyltitypeChart />
    </div>
  );
};

export default AnalyticPage;
