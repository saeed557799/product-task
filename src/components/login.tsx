import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Dashboard from './dashboard.tsx';


const Login: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-around'>
          <Navbar.Brand></Navbar.Brand>
          {isAuthenticated ? (
            <>
            <Navbar.Brand>Welcome to Dashboard {user?.nickname}</Navbar.Brand>
            <Button variant="outline-light" onClick={() => logout({ returnTo: window.location.origin } as any)}>
              Logout
            </Button></>
          ) : (
            <>
            <Navbar.Brand>Please login to see the dashboard</Navbar.Brand>
            <Button variant="outline-light" onClick={handleLogin}>
              Login
            </Button>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
      {isAuthenticated && <Dashboard />}
    </div>
  );
};

export default Login;
