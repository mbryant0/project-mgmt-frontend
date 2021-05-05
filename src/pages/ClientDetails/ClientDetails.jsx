/*
Format page properly
*/

import React from 'react';

const ClientDetails = () => {
  return (
    <>
      <h2>Client Details Page</h2>
      <h3>CoffeeRoasters</h3>
      <p>This is a mid-sized company that sells various brands of coffee.</p>
      <p>Phone Number:</p>
      <a href='1(888)-345-9304'>1(888)-345-9304</a>
      <br />
      <a href='#'>www.coffeeroasters.com</a>
      <address>
        <p>123 Sunshine St</p>
        <p>San Francisco, CA, 91215</p>
      </address>
      <p>Notes:</p> {/*Add favicon to edit notes & then add popup to do so*/}
    </>
  );
};

export default ClientDetails;
