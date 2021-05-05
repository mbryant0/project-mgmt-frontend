/*
Add hyperlinks to ticket details

*/
import React from 'react';
import Table from '../../components/Table/Table';

const Tickets = () => {
  const columns = [
    { label: '', field: 'check', sort: 'asc', width: 150 },
    {
      label: 'Subject',
      field: 'subject',
      sort: 'asc',
    },
    {
      label: 'Project Name',
      field: 'projectname',
      sort: 'asc',
    },
    {
      label: 'Ticket Priority',
      field: 'priority',
      sort: 'asc',
    },
    {
      label: 'Ticket Owner',
      field: 'owner',
      sort: 'asc',
    },
    {
      label: 'Assigned User',
      field: 'assignee',
      sort: 'asc',
    },
    {
      label: 'Date Created',
      field: 'created',
      sort: 'asc',
    },
    {
      label: '',
      field: 'details',
      sort: 'asc',
    },
  ];
  const rows = [
    {
      check: <input type='checkbox' id='defaultUnchecked' />,
      subject: 'Broken social media links',
      projectname: 'Coffeeroasters Website',
      priority: 'Standard',
      created: '05/01/21 11:19PM',
      owner: 'Lloyd Castillo',
      assignee: 'Alberta Stewart',
      details: 'Edit details',
    },
    {
      check: <input type='checkbox' id='defaultUnchecked' />,
      subject: 'Servers have latency issues',
      projectname: 'Invoice Tracker',
      created: '04/14/21 9:53AM',
      priority: 'High',
      owner: 'Lloyd Castillo',
      assignee: 'Johnnie Miles',
      details: 'Edit details',
    },
  ];

  return (
    <div className='main'>
      <h2>Tickets</h2>
      <Table rows={rows} columns={columns} />
      <button>Create New Ticket</button>
      <button>Update Priority of Selected Ticket(s)</button>
      <button>Delete Selected Ticket(s)</button>
    </div>
  );
};

export default Tickets;
