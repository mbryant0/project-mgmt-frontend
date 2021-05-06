/*
Create 5 Graphs:

Tickets by Priority (None, Low, Medium/Standard, High) (bar graph)
Tickets by Type (Bug/Error, Feature Request, Client Support) (bar graph)
Tickets by Status (Open, In Progress, Additional Info Required, Ready for Review, Closed) (bar graph)
Tickets by Project (pie chart)
Tickets by User (pie chart)
Average Time to Close Ticket (line graph)


*/

import React from 'react';
import TicketStatus from '../../components/TicketStatus/TicketStatus';
import LineGraph from '../../components/LineGraph/LineGraph';
import PieChart from '../../components/PieChart/PieChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <div className='dashboard'>
        <div classname='graph1' style={{ gridArea: 'graph1' }}>
          <TicketStatus />
        </div>
        <div classname='graph2' style={{ gridArea: 'graph2' }}>
          <LineGraph />
        </div>
        <div classname='graph3' style={{ gridArea: 'graph3' }}>
          <TicketStatus />
        </div>
        <div classname='graph4' style={{ gridArea: 'graph4' }}>
          <PieChart />
        </div>
        <div classname='graph5' style={{ gridArea: 'graph5' }}>
          <PieChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
