import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Signup.css';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../redux/actions/actions';
import { connect } from 'react-redux';
const Signup = (props) => {
  const history = useHistory();
  const { signUp } = props;
  const [display, setDisplay] = useState({
    create: false,
    buttons: true,
    join: false,
    userInfo: false,
    createBack: false,
    joinBack: false,
  });

  const [signUpState, setSignUpState] = useState({
    firstname: '',
    lastname: '',
    emailaddress: '',
    password: '',
    confirmPassword: '',
  });

  const handleCreate = () => {
    setDisplay({
      create: true,
      buttons: false,
      join: false,
      userInfo: false,
      createBack: true,
    });
  };

  const handleJoin = () => {
    setDisplay({
      create: false,
      buttons: false,
      join: true,
      userInfo: false,
      joinBack: true,
    });
  };

  const handleReturn = () => {
    setDisplay({
      ...display,
      create: false,
      buttons: true,
      join: false,
      userInfo: false,
    });
  };

  const handleUserInfo = () => {
    setDisplay({
      ...display,
      create: false,
      buttons: false,
      join: false,
      userInfo: true,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpState({ ...signUpState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked');
    signUp(signUpState);
  };
  return (
    <div className='signup'>
      <h1
        onClick={() => {
          history.push('/');
        }}
      >
        AquaSolutions Project Management System
      </h1>
      {display.buttons && (
        <div className='signup-main'>
          <h2>Create a New Account</h2>
          <p>Welcome! First, please choose an option to proceed.</p>
          <button onClick={handleCreate}>Create a New Organization</button>
          <button onClick={handleJoin}>Join an Existing Organization</button>
        </div>
      )}
      {display.create && (
        <Form className='signup-main'>
          <p>What would you like to name your organization?</p>
          <Form.Group>
            <Form.Control type='text' />
          </Form.Group>
          <Button onClick={handleReturn}>Go Back</Button>
          <Button onClick={handleUserInfo}>Next</Button>
        </Form>
      )}
      {display.join && (
        <div className='signup-main'>
          <p>Enter your organization's identification code</p>
          <Form>
            <Form.Group>
              <Form.Control type='text' />
            </Form.Group>
            <Button onClick={handleReturn}>Go Back</Button>
            <Button onClick={handleUserInfo}>Next</Button>
          </Form>
        </div>
      )}
      {display.userInfo && (
        <div className='signup-main'>
          <p>
            Almost done! Please fill out the form below to finish registration.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                name='firstname'
                value={signUpState.firstname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                name='lastname'
                value={signUpState.lastname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='emailaddress'
                value={signUpState.emailaddress}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={signUpState.password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control
                type='password'
                name='confirmPassword'
                value={signUpState.confirmPassword}
                onChange={handleChange}
              />
            </Form.Group>
            {display.createBack && (
              <Button onClick={handleCreate}>Go Back</Button>
            )}
            {display.joinBack && <Button onClick={handleJoin}>Go Back</Button>}
            <Button type='submit'>Complete Registration</Button>
          </Form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { signUp })(Signup);
