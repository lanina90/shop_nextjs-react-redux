import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {setIsAuth} from "../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch()
  const {isAuth} = useSelector(state => state.user)
  const navigate = useNavigate()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Online Shop</Navbar.Brand>
          {isAuth ?  <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              className={'m-1'}
              onClick={() => navigate(`/admin`)}
            >Admin Panel</Button>
            <Button
              variant={"outline-light"}
              onClick={() => navigate(`/login`)}
              className={'m-1'}>Logout</Button>
          </Nav> :
            <Nav className="ml-auto">
              <Button
                variant={"outline-light"}
                onClick={() => dispatch(setIsAuth(true))}
              >Authorization</Button>
            </Nav>}

        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavBar;