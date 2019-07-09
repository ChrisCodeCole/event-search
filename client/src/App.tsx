import React from 'react';
import './App.css';
import { EventSearchProvider } from './context/context';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <EventSearchProvider>
        <LoginPage />
      </EventSearchProvider>
    </div>
  );
}

export default App;
