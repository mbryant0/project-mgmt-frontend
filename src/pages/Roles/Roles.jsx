/* 
UPDATE ROLES FOR USERS
ADD POPUP THAT SAYS ARE YOU SURE YOU WANT TO DISABLE THE FOLLOWING USER ACCOUNTS?

*/
import React from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table/Table';

const Roles = (props) => {
  const { users } = props;
  const columns = [
    { label: '', field: 'check', sort: 'asc', width: 150 },
    {
      label: 'Name',
      field: 'name',
      sort: 'asc',
      width: 20,
    },
    {
      label: 'Email',
      field: 'email',
      sort: 'asc',
      width: 270,
    },
    {
      label: 'Role',
      field: 'role',
      sort: 'asc',
      width: 200,
    },
  ];
  const rows = users.map((user) => {
    return {
      check: <input type='checkbox' id='defaultUnchecked' />,
      name: `${user.firstname}  ${user.lastname}`,
      email: user.email,
      role: user.role,
    };
  });

  return (
    <div className='main'>
      <h2>Role Assignment</h2>
      <Table rows={rows} columns={columns} />
      <button>Update Selected User Role(s)</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps)(Roles);
