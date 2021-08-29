import './App.css';
import NavBar from './Components/NavBar';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
