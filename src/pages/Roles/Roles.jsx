/* 
UPDATE ROLES FOR USERS
ADD POPUP THAT SAYS ARE YOU SURE YOU WANT TO DISABLE THE FOLLOWING USER ACCOUNTS?

*/
import React, { Component, useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import Table from '../../components/Table/Table';
import { loadOrganizationUsers } from '../../redux/actions/actions';

const Roles = props => {
  const { users, loadOrganizationUsers, currentUser } = props;

  useEffect(() => {
    loadOrganizationUsers();
  }, [currentUser]);
  const [roleIds, setRoleIds] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(users.length).fill(false)
  );

  const handleClick = position => {
    // Updates checkbox state from true to false or from false to true when clicked based on index
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item;
    });
    setCheckedState(updatedCheckedState);

    // Maps through array. If checkbox state is true, return its corresponding user id. If not, return its current state (false).
    const listOfIds = updatedCheckedState.map((item, index) => {
      if (item === true) {
        return users[index].userid;
      }
      return item;
    });

    // Filters out all false checkboxes from array
    const filteredIds = listOfIds.filter(id => !id === false);
    setRoleIds(filteredIds);
    console.log(roleIds);
  };

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
          onChange={() => handleClick(index)}
          name='role'
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
