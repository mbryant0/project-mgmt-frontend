/*  
and then Description at the top

Assigned Personnel Table
Name, Email, Role

Tickets for Project Table
Subject, Ticket Owner, Assigned User, Status, Created, More Details (empty header)


*/

import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
const ProjectDetails = (props) => {
  const { projectId } = useParams();
  const { projects } = props;
  const thisProject = projects.find(
    (project) => project.projectid == projectId
  );
  return (
    <>
      <h2>Details for "{thisProject.projectname}"</h2>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};
export default connect(mapStateToProps)(ProjectDetails);
