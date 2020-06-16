import React, {useContext} from 'react';

import {GlobalContext} from './context/global.state';

import Header from './components/header/header.component';

import LandingPage from './pages/landing-page';
import ProfilePage from './pages/profile-page';

import './App.css';

function App() {
  const {currentUser} = useContext(GlobalContext);

  return (
    <div className="App">
      <Header />
      {
        currentUser ? (
          <ProfilePage />
        ) : (
          <LandingPage />
        )
      }
    </div>
  );
}

export default App;
