import React from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table/Table';

const Clients = (props) => {
  const { clients } = props;
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
  const rows = clients.map((client) => {
    return {
      check: <input type='checkbox' id='defaultUnchecked' />,
      name: client.name,
      city: client.city,
      state: client.state,
      country: client.country,
      phoneNumber: client.phoneNumber,
      details: 'Edit details',
    };
  });

  return (
    <div className='main'>
      <h2>Clients</h2>
      <Table rows={rows} columns={columns} />
      <button>Add New Client</button>
      <button>Delete Selected Client(s)</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    clients: state.clients,
  };
};
export default connect(mapStateToProps)(Clients);
