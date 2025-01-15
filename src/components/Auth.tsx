import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthPage: React.FC = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <h1>Welcome, {user?.name}</h1>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Please Log In</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default AuthPage;