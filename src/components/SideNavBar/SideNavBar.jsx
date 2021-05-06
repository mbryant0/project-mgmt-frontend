import React, { useState } from 'react';
import { Icon } from 'rsuite';
import { Sidenav } from 'rsuite';
import { Nav } from 'rsuite';
import { Dropdown } from 'rsuite';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const SideNavBar = ({ ...props }) => {
  const styles = {
    width: 250,
    display: 'inline-table',
    marginRight: 10,
  };
  const headerStyles = {
    padding: 20,
    fontSize: 18,
    color: '#fff',
  };
  const history = useHistory();
  return (
    <div style={styles}>
      <Sidenav {...props}>
        <Sidenav.Header style={headerStyles}>
          Welcome Back, DemoA!
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            <Link to='/dashboard'>
              <Nav.Item eventKey='2' active icon={<Icon icon='dashboard' />}>
                Dashboard
              </Nav.Item>
            </Link>
            <Link to='/roles'>
              <Nav.Item eventKey='2' icon={<Icon icon='unlock-alt' />}>
                Manage Role Assignment
              </Nav.Item>
            </Link>
            <Link to='/clients'>
              <Nav.Item eventKey='3' icon={<Icon icon='address-book' />}>
                Manage Clients
              </Nav.Item>
            </Link>
            <Link to='/projects'>
              <Nav.Item eventKey='4' icon={<Icon icon='folder' />}>
                My Projects
              </Nav.Item>
            </Link>
            <Link to='/tickets'>
              <Nav.Item eventKey='5' icon={<Icon icon='tasks' />}>
                My Tickets
              </Nav.Item>
            </Link>
            <Link to='/inbox'>
              <Nav.Item eventKey='2' icon={<Icon icon='envelope' />}>
                View Inbox
              </Nav.Item>
            </Link>

            <Dropdown
              eventKey='6'
              title='Settings'
              icon={<Icon icon='gear-circle' />}
            >
              <Dropdown.Item>User Profile</Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  history.push('/');
                }}
                icon={<Icon icon='sign-out' />}
              >
                Logout
              </Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNavBar;
