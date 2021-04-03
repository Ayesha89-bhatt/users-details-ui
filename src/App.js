import React from 'react';

import Login from './Login/Login.js';
import Register from './Register/Register.js';

//import Data from './Data/Data.js'; //tukka mar rha ab main mera asar ahahahahah

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './styles/App.scss';
import UsersData from './Users/UsersData.js';



function App() {

  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1"><b>PHOTO APP</b></span>
    
      <button className="btn btn-warning" type="submit">Search</button>
  </div>
</nav>
    {/*
    kya ho rha yar ye smjh hi naa aarha ?m pgl hori tbse 
    baaki tym 200 aa rha es data file ke tym 304 aa rha hahahhaha
    kya krre ho yr????

    ye ???200 dera ab br br hahhahahah but jb register pe diya wo page to kaam kiya haa ye ptani ku nii krra mtlb route dikkat kr rha sayad ho skta h
    ek new banaun starting se ?rehne do aj sirf banaunga baaki kuch nhin ek trf wo
    chalta rhega ek trf ese dekhte hain ooooooookk
    esi m
    */}
  <Router>
    <Switch>
      <Route exact path ="/Login" component={Login}/>
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/UsersData" component={UsersData}/>
     
    </Switch>
  </Router>
  </div>   
  );
}

export default App;
