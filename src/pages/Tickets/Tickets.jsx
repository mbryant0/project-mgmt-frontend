/*
Add hyperlinks to ticket details

*/
import React from 'react';
import Table from '../../components/Table/Table';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Tickets = (props) => {
  const { tickets } = props;
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
      label: 'Ticket Status',
      field: 'status',
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
  const rows = tickets.map((ticket) => {
    return {
      check: <input type='checkbox' id='defaultUnchecked' />,
      subject: ticket.subject,
      projectname: ticket.projectname,
      priority: ticket.priority,
      created: ticket.created,
      owner: ticket.owner,
      assignee: ticket.assignee,
      status: ticket.status,
      details: <Link to={`/tickets/${ticket.ticketid}`}>View details</Link>,
    };
  });

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
const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  };
};
export default connect(mapStateToProps)(Tickets);
