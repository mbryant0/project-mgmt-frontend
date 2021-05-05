import React from 'react';
import './Login.css';
import { Form, FormGroup, FormControl, ControlLabel } from 'rsuite';
import { Button } from 'rsuite';
import { Icon } from 'rsuite';

const Login = () => {
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
        <h2>AquaSolutions Project Managment System ©</h2>
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
            <Button>Sign in</Button>
          </Form>
        </div>
        <div className='sign-in-card'>
          <p>Sign in with a demo account</p>
          <p>Please select a role:</p>
          <div className='demo-card'>
            <div className='demo-roles'>
              <div className='demo'>
                <p>Admin</p>
              </div>
              <div className='demo'>
                <p>Developer</p>
              </div>
              <div className='demo'>
                <Icon icon='search' size='5x' />
                <p>Quality Assurance Analyst</p>
              </div>
              <div className='demo'>
                <Icon icon='user-secret' size='5x' />
                <p>Inactive (before Admin approval)</p>
              </div>
            </div>
          </div>
          <Button>Sign in</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
