import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cards from '../pages/Cards';
import Report from '../pages/Report';
import Logout from '../pages/Logout'

const Hero = ({handleLogout}) => {
    return(
        <section>
                    <nav>
                        <h2>Welcome!</h2>
                        <button onClick={handleLogout}>Logout</button> {/*to be re-checked. */}
                    </nav>
        
                    <Router>
                        <Navbar props = {handleLogout}/>
                        <Switch>
                              <Route path='/' exact component={Home} />
                              <Route path='/cards' exact component = {Cards} />
                              <Route path='/reports' exact component = {Report} />
                              <Route path='/logout' exact component = {Logout} handleLogout={handleLogout}/>
                        </Switch>
                        </Router>
        
        </section>
        
    )
};

export default Hero;