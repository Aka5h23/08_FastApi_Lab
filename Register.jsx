import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/custom.css';
import registerImage from '../assets/images/register.jpg';
import userIcon from '../assets/images/user.png';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Your submission logic here
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='auth-container d-flex justify-content-between'>
              <div className='auth-image'>
                <img src={registerImage} alt='Register' />
              </div>
              <div className='auth-form'>
                <div className='user-icon'>
                  <img src={userIcon} alt='User' />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <input type='text' placeholder='Username' required id='username' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type='email' placeholder='Email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='Password' required id='password' onChange={handleChange} />
                  </FormGroup>
                  <Button className='auth-btn' type='submit'>Register</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
