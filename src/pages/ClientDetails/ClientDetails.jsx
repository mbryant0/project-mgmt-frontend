/*
Format page properly
*/

import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ClientDetails.css';

const ClientDetails = props => {
  const { clientId } = useParams();
  const { clients } = props;
  const thisClient = clients.find(client => client.clientid == clientId);

  return (
    <div className='client-details-container'>
      <input type='text' value={thisClient.name} disabled />
      <p>{thisClient.description}</p>
      <p>Phone Number:</p>
      <a href={thisClient.phonenumber}>{thisClient.phonenumber}</a>
      <br />
      <a href='#'>{thisClient.website}</a>
      <address>
        <p>{thisClient.street}</p>
        <p>
          {thisClient.city}, {thisClient.state} {thisClient.zip}
        </p>
      </address>
      <p>Notes:</p> {/*Add favicon to edit notes & then add popup to do so*/}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    clients: state.clients,
  };
};
export default connect(mapStateToProps)(ClientDetails);
