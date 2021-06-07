/* 
UPDATE ROLES FOR USERS
ADD POPUP THAT SAYS ARE YOU SURE YOU WANT TO DISABLE THE FOLLOWING USER ACCOUNTS?

*/
import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table/Table';
import { loadOrganizationUsers } from '../../redux/actions/actions';

const Roles = (props) => {
  const { users, loadOrganizationUsers } = props;

  useEffect(() => {
    loadOrganizationUsers();
  }, []);

  console.log('RE-RENDERING!!');

  const columns = [
    { label: '', field: 'check', sort: 'disabled', width: 150 },
    {
      label: 'Name',
      field: 'name',
      width: 20,
      sort: 'asc',
    },
    {
      label: 'Email',
      field: 'email',
      width: 270,
    },
    {
      label: 'Role',
      field: 'role',
      width: 200,
    },
  ];

  const rows = users.map((user) => {
    return {
      check: (
        <input type='checkbox' id='defaultUnchecked' value={user.userid} />
      ),
      name: `${user.firstname}  ${user.lastname}`,
      email: user.emailaddress,
      role: user.roles.map((role) => {
        switch (role.role.name) {
          case 'OWNER':
            return 'Owner';
          case 'ADMIN':
            return 'Admin';
          case 'PROJECT_MANAGER':
            return 'Project Manager';
          case 'DEVELOPER':
            return 'Developer';
          case 'QA_ANALYST':
            return 'QA Analyst';
          case 'CLIENT':
            return 'Client';
          case 'INACTIVE':
            return 'Inactive';
          case 'DATA':
            return 'Data Analyst';
          default:
            return 'Unassigned';
        }
      }),
    };
  });

  return (
    <div className='main'>
      <h2>Role Assignment</h2>
      <Table rows={rows} columns={columns} bordered={true} striped={true} />
      <button>Update Selected User Role(s)</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps, {
  loadOrganizationUsers,
})(Roles);
