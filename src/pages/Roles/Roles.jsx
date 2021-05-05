/* 
UPDATE ROLES FOR USERS
ADD POPUP THAT SAYS ARE YOU SURE YOU WANT TO DISABLE THE FOLLOWING USER ACCOUNTS?

*/
import React from 'react';
import Table from '../../components/Table/Table';

const Roles = () => {
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
  const rows = [
    {
      check: <input type='checkbox' id='defaultUnchecked' />,
      name: 'Lloyd Castillo',
      email: 'lcastillo@fakeemail.com',
      role: 'Admin',
    },
    {
      check: <input type='checkbox' id='defaultUnchecked' />,
      name: 'Alberta Stewart',
      email: 'astewart@fakeemail.com',
      role: 'Developer',
    },
  ];

  return (
    <div className='main'>
      <h2>Role Assignment</h2>
      <Table rows={rows} columns={columns} />
      <button>Update Selected User Role(s)</button>
    </div>
  );
};
export default Roles;
