import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { TaskProvider } from './components/TaskContext';
import TaskDashboard from './components/TaskDashboard';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm';
import AuthPage from './components/Auth';
import { useAuth0 } from '@auth0/auth0-react';

const App: React.FC = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Auth0Provider
      domain="your-auth0-domain"
      clientId="your-auth0-client-id"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <TaskProvider>
        <Router>
          <div>
            {!isAuthenticated ? (
              <AuthPage />
            ) : (
              <Switch>
                <Route path="/" exact component={TaskDashboard} />
                <Route path="/task/:taskId" component={TaskDetails} />
                <Route path="/create-task" component={TaskForm} />
                <Route path="/edit-task/:taskId" component={TaskForm} />
              </Switch>
            )}
          </div>
        </Router>
      </TaskProvider>
    </Auth0Provider>
  );
};

export default App;