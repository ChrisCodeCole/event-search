import React from 'react';
import './App.css';
import { EventSearchProvider } from './context/context';
import AppRouter from './router/Routes';


const App: React.FC = () => {
  return (
    <div className="App">
      <EventSearchProvider>
        <AppRouter />
      </EventSearchProvider>
    </div>
  );
}

export default App;
