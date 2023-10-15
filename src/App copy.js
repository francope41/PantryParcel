import React, { useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css'; // import the styles
import 'bootstrap/dist/css/bootstrap.min.css'
import awsExports from './aws-exports';

import SiteNav from './components/Common/SiteNav';
import SiteFooter from './components/Common/SiteFooter';

import HomePage from './components/home/HomePage';


Amplify.configure(awsExports);

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);

  const handleAuthStateChange = (authState, authData) => {
    if (authState === 'signedIn') {
      setUser(authData);
      setShowAuth(false);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  if (user) {
    return (
      <>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </>
    );
  }

  return (
    <div className={`mainContent ${showAuth ? 'blurEffect' : ''}`}>
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => setShowAuth(true)}>Log in</button>
      
      {showAuth && (
        <div className="overlay">
          <Authenticator onStateChange={handleAuthStateChange} />
          <button className="backButton" onClick={() => setShowAuth(false)}>Go back to main page</button>
        </div>
      )}
    </div>
  );
}

export default App;
