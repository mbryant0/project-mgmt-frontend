/*
Format page properly
*/

import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const ClientDetails = (props) => {
  const { clientId } = useParams();
  const { clients } = props;
  const thisClient = clients.find((client) => client.clientid == clientId);

  return (
    <>
      <h2>Client Details Page</h2>
      <h3>{thisClient.name}</h3>
      <p>{thisClient.description}</p>
      <p>Phone Number:</p>
      <a href={thisClient.phoneNumber}>{thisClient.phoneNumber}</a>
      <br />
      <a href='#'>{thisClient.website}</a>
      <address>
        <p>{thisClient.street}</p>
        <p>
          {thisClient.city}, {thisClient.state} {thisClient.zip}
        </p>
      </address>
      <p>Notes:</p> {/*Add favicon to edit notes & then add popup to do so*/}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    clients: state.clients,
  };
};
export default connect(mapStateToProps)(ClientDetails);
