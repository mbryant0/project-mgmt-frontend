import React, { useState } from 'react';
import './Login.css';
import { Form, FormGroup, FormControl, ControlLabel } from 'rsuite';
import { Button } from 'rsuite';
import { Icon } from 'rsuite';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginWithEmailAndPassword } from '../../redux/actions/actions';

const Login = (props) => {
  const history = useHistory();
  const { loginWithEmailAndPassword } = props;

  const [displayEmail, setDisplayEmail] = useState(true);
  const [displayDemo, setDisplayDemo] = useState(false);
  const [demoRole, setDemoRole] = useState('');
  const [active, setActive] = useState({
    admin: false,
    developer: false,
    projectmanager: false,
    inactiveacct: false,
  });

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword('test@email.com', 'password');
    //history.push('/dashboard');
  };

  /* Place in Redux Actions when you get a chance */
  const handleClick = () => {
    setDisplayDemo(!displayDemo);
    setDisplayEmail(!displayEmail);
  };

  const handleAdmin = (e) => {
    setDemoRole('Demo Admin');
    console.log(demoRole);
    setActive({
      admin: true,
      developer: false,
      projectmanager: false,
      inactiveacct: false,
    });
  };
  const handleDeveloper = (e) => {
    setDemoRole('Demo Developer');
    console.log(demoRole);
    setActive({
      admin: false,
      developer: true,
      projectmanager: false,
      inactiveacct: false,
    });
  };
  const handleProjectManager = (e) => {
    setDemoRole('Demo Project Manager');
    console.log(demoRole);
    setActive({
      admin: false,
      developer: false,
      projectmanager: true,
      inactiveacct: false,
    });
  };
  const handleInactive = (e) => {
    setDemoRole('Demo Inactive');
    console.log(demoRole);
    setActive({
      admin: false,
      developer: false,
      projectmanager: false,
      inactiveacct: true,
    });
  };
  return (
    <div className='login-page'>
      <div className='hero'>
        <div className='hero-text'>
          <h1>
            Meet all of your deadlines with the ultimate all-in-one package
          </h1>
          <h2>
            It's our mission to unite simplicity and efficiency to help small
            development teams thrive.
          </h2>
          <p>Ready to innovate?</p>
          <button
            onClick={() => {
              history.push('/signup');
            }}
            style={{
              backgroundColor: '#1b85e2',
              padding: '8px',
              fontWeight: 'bolder',
            }}
          >
            Sign Up for a Free Account
          </button>
        </div>
      </div>
      <div className='sign-in'>
        <h2>AquaSolutions Project Management System ©</h2>
        {displayEmail && (
          <div className='sign-in-card '>
            <p>Sign in with email and password</p>
            <Form>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl name='email' type='text' />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl name='password' type='text' />
              </FormGroup>
              <div className='buttons'>
                <Button onClick={handleLoginWithEmail}>Sign in</Button>
                <Button
                  appearance='primary'
                  className='alt-btn'
                  onClick={handleClick}
                >
                  Sign in with Demo
                </Button>
              </div>
            </Form>
          </div>
        )}
        <div className='sign-in-card demo-toggle'>
          <p>Sign in with a demo account</p>
          <p>Please select a role:</p>
          <div className='demo-card'>
            <div className='demo-roles'>
              <div
                onClick={handleAdmin}
                className={`demo ${active.admin ? 'activeslct' : ''}`}
              >
                <Icon icon='briefcase' size='5x' />
                <p>Admin</p>
              </div>
              <div
                onClick={handleDeveloper}
                className={`demo ${active.developer ? 'activeslct' : ''}`}
              >
                <Icon icon='code' size='5x' />
                <p>Developer</p>
              </div>
              <div
                onClick={handleProjectManager}
                className={`demo ${active.projectmanager ? 'activeslct' : ''}`}
              >
                <Icon icon='search' size='5x' />
                <p>Project Manager</p>
              </div>
              <div
                onClick={handleInactive}
                className={`demo ${active.inactiveacct ? 'activeslct' : ''}`}
              >
                <Icon icon='user-secret' size='5x' />
                <p>Inactive (before Admin approval)</p>
              </div>
            </div>
          </div>
          <div className='buttons'>
            <Button
              onClick={() => {
                history.push('/dashboard');
              }}
            >
              Sign in
            </Button>
            <Button
              appearance='primary'
              className='alt-btn'
              onClick={handleClick}
            >
              Sign in with email
            </Button>
          </div>
        </div>
        {displayDemo && (
          <div className='sign-in-card'>
            <p>Sign in with a demo account</p>
            <p>Please select a role:</p>
            <div className='demo-card'>
              <div className='demo-roles'>
                <div
                  onClick={handleAdmin}
                  className={`demo ${active.admin ? 'activeslct' : ''}`}
                >
                  <Icon icon='briefcase' size='5x' />
                  <p>Admin</p>
                </div>
                <div
                  onClick={handleDeveloper}
                  className={`demo ${active.developer ? 'activeslct' : ''}`}
                >
                  <Icon icon='code' size='5x' />
                  <p>Developer</p>
                </div>
                <div
                  onClick={handleProjectManager}
                  className={`demo ${
                    active.projectmanager ? 'activeslct' : ''
                  }`}
                >
                  <Icon icon='search' size='5x' />
                  <p>Project Manager</p>
                </div>
                <div
                  onClick={handleInactive}
                  className={`demo ${active.inactiveacct ? 'activeslct' : ''}`}
                >
                  <Icon icon='user-secret' size='5x' />
                  <p>Inactive (before Admin approval)</p>
                </div>
              </div>
            </div>
            <div className='buttons'>
              <Button
                onClick={() => {
                  history.push('/dashboard');
                }}
              >
                Sign in
              </Button>
              <Button
                appearance='primary'
                className='alt-btn'
                onClick={handleClick}
              >
                Sign in with email
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { loginWithEmailAndPassword })(Login);
