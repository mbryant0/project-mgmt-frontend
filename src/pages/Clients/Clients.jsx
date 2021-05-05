/*

Create a table that includes
Client Name
Client City
Client State
Client Country
Client Phone Number
*/
import React from 'react';
import Table from '../../components/Table/Table';

const Clients = () => {
  const columns = [
    { label: '', field: 'check', sort: 'asc', width: 150 },
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 20,
    },
    {
      label: 'City',
      field: 'city',
      sort: 'asc',
      width: 270,
    },
    {
      label: 'State',
      field: 'state',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Country',
      field: 'country',
      sort: 'asc',
      width: 200,
    },
    {
      label: 'Phone Number',
      field: 'phoneNumber',
      sort: 'asc',
      width: 200,
    },
    {
      label: '',
      field: 'details',
      sort: 'asc',
      width: 100,
    },
  ];
  const rows = [
    {
      check: <input type='checkbox' id='defaultUnchecked' />,
      name: 'Coffeeroasters',
      city: 'San Francisco',
      state: 'CA',
      country: 'United States of America',
      phoneNumber: '1(888)-345-9304',
      details: 'Edit details',
    },
    {
      check: <input type='checkbox' id='defaultUnchecked' />,
      name: 'Citi Bank',
      city: 'Memphis',
      state: 'TN',
      country: 'United States of America',
      phoneNumber: '1(888)-122-4587',
      details: 'Edit details',
    },
  ];
  return (
    <div className='main'>
      <h2>Clients</h2>
      <Table rows={rows} columns={columns} />
      <button>Add New Client</button>
      <button>Delete Selected Client(s)</button>
    </div>
  );
};

export default Clients;
