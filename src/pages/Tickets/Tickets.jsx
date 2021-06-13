/*
Add hyperlinks to ticket details

*/
import React, { useEffect } from 'react';
import Table from '../../components/Table/Table';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadOrganizationTickets } from '../../redux/actions/actions';
import useCheckboxes from '../../hooks/useCheckboxes';

const Tickets = props => {
  const { tickets, loadOrganizationTickets } = props;
  useEffect(() => {
    loadOrganizationTickets();
  }, []);

  const { value: checkboxState, bind: bindCheckboxValues } = useCheckboxes({});
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
      label: 'Ticket Type',
      field: 'type',
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
    /*{
      label: 'Date Created',
      field: 'created',
      sort: 'asc',
    },*/
    {
      label: '',
      field: 'details',
      sort: 'asc',
    },
  ];
  const rows = tickets.map((ticket, index) => {
    return {
      check: (
        <input
          type='checkbox'
          id='defaultUnchecked'
          value={ticket.ticketid}
          name={`checkbox${index}`}
          {...bindCheckboxValues}
        />
      ),
      subject: ticket.subject,
      projectname: ticket.project.projectname,
      priority: ticket.priority,
      //created: ticket.created,
      owner: ticket.owner,
      type: ticket.type,
      assignee: `${ticket.assignee.firstname} ${ticket.assignee.lastname}`,
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
const mapStateToProps = state => {
  return {
    tickets: state.tickets,
  };
};
export default connect(mapStateToProps, { loadOrganizationTickets })(Tickets);
