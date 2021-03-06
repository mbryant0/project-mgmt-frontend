/*
Create a New Project Button

*/

import React, { useEffect } from 'react';
import Table from '../../components/Table/Table';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadOrganizationProjects } from '../../redux/actions/actions';
import useCheckboxes from '../../hooks/useCheckboxes';

const Projects = props => {
  const { projects, loadOrganizationProjects } = props;

  useEffect(() => {
    loadOrganizationProjects();
  }, []);

  const { value: checkboxState, bind: bindCheckboxValues } = useCheckboxes({});

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
  const rows = projects.map((project, index) => {
    return {
      check: (
        <input
          type='checkbox'
          id='defaultUnchecked'
          value={project.projectid}
          name={`checkbox${index}`}
          {...bindCheckboxValues}
        />
      ),
      projectname: project.projectname,
      description: project.description,
      client: project.client.name,
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
const mapStateToProps = state => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps, { loadOrganizationProjects })(Projects);
