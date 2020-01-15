import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import Button from './components/Button';
import Form from './components/Form';
import Start from './components/pages/Start';
import Weather from './components/pages/Weather';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/'>
          <Weather />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
