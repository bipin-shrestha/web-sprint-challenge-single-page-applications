import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} 
from 'react-router-dom';
import Confirmation from "./components/Confirmation";
import Form from "./components/Form";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component ={Home}/>
        <Route exact path='/pizza' component ={Form}/>
        <Route exact path='/confirmation' component ={Confirmation}/>
      </Switch>
    </Router>
 
  );
};
export default App;
