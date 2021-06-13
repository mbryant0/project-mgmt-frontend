import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table/Table';
import { Link } from 'react-router-dom';
import { loadOrganizationClients } from '../../redux/actions/actions';
import useCheckboxes from '../../hooks/useCheckboxes';

const Clients = props => {
  const { clients, loadOrganizationClients } = props;

  useEffect(() => {
    loadOrganizationClients();
  }, []);

  const { value: checkboxState, bind: bindCheckboxValues } = useCheckboxes({});
  const columns = [
    { label: '', field: 'check', sort: 'disabled', width: 150 },
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 20,
    },
    {
      label: 'City',
      field: 'city',
      width: 270,
    },
    {
      label: 'State',
      field: 'state',
      width: 200,
    },
    {
      label: 'Country',
      field: 'country',
      width: 200,
    },
    {
      label: 'Phone Number',
      field: 'phoneNumber',
      width: 200,
    },
    {
      label: '',
      field: 'details',
      width: 100,
    },
  ];
  const rows = clients.map((client, index) => {
    return {
      check: (
        <input
          type='checkbox'
          id='defaultUnchecked'
          value={client.clientid}
          name={`checkbox${index}`}
          {...bindCheckboxValues}
        />
      ),
      name: client.name,
      city: client.city,
      state: client.state,
      country: client.country,
      phoneNumber: client.phonenumber,
      details: <Link to={`/clients/${client.clientid}`}>View Details</Link>,
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
const mapStateToProps = state => {
  return {
    clients: state.clients,
  };
};
export default connect(mapStateToProps, { loadOrganizationClients })(Clients);
