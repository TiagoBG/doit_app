import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

 const App = ()=>{
     return (
         <Router>
             <Switch>
                 <Route exact path='/' component={Home}/>
                 <Route exact path='/signup' component={SignUp}/>
                 <Route exact path='/dashboard' component={Dashboard}/>
             </Switch>
         </Router>
     )
 }

export default App;