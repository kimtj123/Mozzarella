import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import Main from './Main';
import Login from './Login';
import SignUp from './SignUp';
import SelectedBoard from './SelectedBoard';
import Boards from './Boards';



import './App.css';

export default function App() {  

  return (
    <Router>
      <Route exact path = '/' component = {Main} />
      <Route path = '/Login' component = {Login} />
      <Route path = '/SignUp' component = {SignUp} />
      <Route path = '/Boards' component = {Boards} />
      <Route path = '/SelectedBoard' component = {SelectedBoard} />      
    </Router>
  );
}