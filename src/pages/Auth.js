import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {login, registration} from "../http/userAPI";

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === '/login'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dfdfd = process.env.REACT_APP_API_URL
  console.log(dfdfd);
  const click = async () => {
    if (isLogin) {
      const response = await login(email, password)
    } else {
      const response = await registration(email, password)
      console.log(response);
    }

  }
  return (
    <Container
      className={'d-flex justify-content-center align-items-center'}
      style={{height: window.innerHeight - 54}}>
      <Card style={{width: 600}} className={'p-5'}>
        <h2 className={'m-auto'}>{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className={'d-flex flex-column'}>
          <Form.Control
            value={email}
            onChange={e => setEmail(e.target.value)}
            className={'mt-3'}
            placeholder="Enter your email..."/>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            className={'mt-3'}
            placeholder="Enter your password..."/>
          <Row className='mt-3 d-flex justify-content-between pl-3 pr-3'>
            {isLogin ?
              <div>
                Have no account? <NavLink to={'/registration'}>Register</NavLink>
              </div>
              :
              <div>
                Have an account? <NavLink to={'/login'}>Login</NavLink>
              </div>

            }
            <Button onClick={click} variant="outline-success">{isLogin ? 'Login' : 'Register'}</Button>
          </Row>

        </Form>
      </Card>


    </Container>
  );
};

export default Auth;