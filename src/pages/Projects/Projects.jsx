/*
Create a New Project Button

Create a table with the following headers:
Manage Users/Details (empty header)


*/

import React from 'react';
import Table from '../../components/Table/Table';

const Projects = () => {
  const columns = [
    { label: '', field: 'check', sort: 'asc', width: 150 },
    {
      label: 'Project Name',
      field: 'projectname',
      sort: 'asc',
      width: 20,
    },
    {
      label: 'Description',
      field: 'description',
      sort: 'asc',
      width: 270,
    },
    {
      label: 'Client',
      field: 'client',
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
      projectname: 'Coffeeroasters Website',
      description: 'A landing page for Coffeeroasters',
      client: 'Coffeeroasters',
      details: 'Edit details',
    },
    {
      check: <input type='checkbox' id='defaultUnchecked' />,
      projectname: 'Invoice Tracker',
      description: 'Invoice tracker for Citi Bank',
      client: 'Citi Bank',
      details: 'Edit details',
    },
  ];
  return (
    <div className='main'>
      <h2>Projects</h2> <Table rows={rows} columns={columns} />
      <button>Create New Project</button>
      <button>Delete Selected Project(s)</button>
    </div>
  );
};

export default Projects;
