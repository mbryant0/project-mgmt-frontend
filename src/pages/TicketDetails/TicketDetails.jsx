/*

Details for Ticket # null
Edit Ticket, View All Tickets
Ticket Title,
Ticket Description
Assigned User,
Ticket Owner
Ticket Priority
Ticket Status
Ticket Type
Created
Updated

Then a separate section for comments
Perhaps implement a different system for comments

Ticket History
Date/Time : (Name {changed the description, etc etc})

Then a separate section for attachments (upload a file) w/ description

*/
import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const TicketDetails = (props) => {
  const { ticketId } = useParams();
  const { tickets } = props;
  const thisTicket = tickets.find((ticket) => ticket.ticketid == ticketId);
  return (
    <>
      <h2>
        Ticket #{thisTicket.ticketid}: {thisTicket.subject}
      </h2>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  };
};
export default connect(mapStateToProps)(TicketDetails);
