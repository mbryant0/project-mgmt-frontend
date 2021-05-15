import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'rsuite';
import { connect } from 'react-redux';
import { loginWithEmailAndPassword } from '../../redux/actions/actions';
import { useHistory } from 'react-router-dom';

const EmailAndPassword = (props) => {
  const history = useHistory();
  const { loginWithEmailAndPassword, handleClick } = props;
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(
      loginCredentials.email,
      loginCredentials.password
    );
    history.push('/dashboard');
    setLoginCredentials({ email: '', password: '' });
  };

  return (
    <div className='sign-in-card '>
      <p>Sign in with email and password</p>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            name='email'
            type='text'
            value={loginCredentials.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            type='password'
            value={loginCredentials.password}
            onChange={handleChange}
          />
        </Form.Group>
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
  );
};

export default connect(null, { loginWithEmailAndPassword })(EmailAndPassword);
