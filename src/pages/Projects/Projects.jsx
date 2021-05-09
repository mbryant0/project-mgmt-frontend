/*
Create a New Project Button

Create a table with the following headers:
Manage Users/Details (empty header)


*/

import React from 'react';
import Table from '../../components/Table/Table';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Projects = (props) => {
  const { projects } = props;
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
  const rows = projects.map((project) => {
    return {
      check: <input type='checkbox' id='defaultUnchecked' />,
      projectname: project.projectname,
      description: project.description,
      client: project.client,
      details: <Link to={`/projects/${project.projectid}`}>View details</Link>,
    };
  });

  return (
    <div className='main'>
      <h2>Projects</h2> <Table rows={rows} columns={columns} />
      <button>Create New Project</button>
      <button>Delete Selected Project(s)</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(Projects);
