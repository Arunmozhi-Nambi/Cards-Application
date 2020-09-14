import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cards from './pages/Cards';
import Report from './pages/Report';

function App() {
  return (
    <>

    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cards' exact component = {Cards} />
        <Route path='/reports' exact component = {Report} />
      </Switch>
    </Router>
      
    </>
  );
}
 
export default App;
