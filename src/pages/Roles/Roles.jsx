/* 
UPDATE ROLES FOR USERS
ADD POPUP THAT SAYS ARE YOU SURE YOU WANT TO DISABLE THE FOLLOWING USER ACCOUNTS?

*/
import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table/Table';
import {
  handleLogin,
  loadOrganizationUsers,
} from '../../redux/actions/actions';
import useCheckboxes from '../../hooks/useCheckboxes';

const Roles = props => {
  const { users, loadOrganizationUsers, currentUser } = props;

  useEffect(() => {
    loadOrganizationUsers();
  }, []);

  const { value: checkboxState, bind: bindCheckboxValues } = useCheckboxes({});

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

  const rows = users.map((user, index) => {
    return {
      check: (
        <input
          type='checkbox'
          id='defaultUnchecked'
          value={user.userid}
          {...bindCheckboxValues}
          name={`checkbox${index}`}
        />
      ),
      name: `${user.firstname}  ${user.lastname}`,
      email: user.emailaddress,
      role: user.roles.map(role => {
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
      <select>
        <option value='ADMIN'>Admin</option>
        <option value='PROJECT_MANAGER'>Project Manager</option>
        <option value='DEVELOPER'>Developer</option>
        <option value='QA_ANALYST'>QA Analyst</option>
        <option value='INACTIVE'>Inactive</option>
        <option value='DATA'>Data</option>
      </select>
      <button>Update Selected User Role(s)</button>
      <p>{`To add new users to your organization, you must provide this access code: ${currentUser.organization.organizationid}`}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users,
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, {
  loadOrganizationUsers,
})(Roles);
