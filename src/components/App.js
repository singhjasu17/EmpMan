import React, { Component } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withUserContext } from "./UserContext";
import { withStitch } from "./Stitch";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ConfirmEmail from "./ConfirmEmail";
import ResetPassword from "./ResetPassword";
import Navbar from "./Navbar";
import FirstLoginData from "./FirstLoginData";

import User, { UserContext } from "./UserContext";
import StitchClass, { StitchContext } from "./Stitch";
import Profile from './Profile'
import InputFields from './InputFields' 
let example=null;
const stitch=new StitchClass()
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:null,
     
    }
  }
  updateValue = (val) => {
    this.setState({user:val});
 }
  
  render() {
    example=this.state.user;
    console.log(this.state.user)
    return (
      <StitchContext.Provider value={stitch}>
    <UserContext.Provider value={{state:this.state,updateUser:this.updateValue}}>

      <Router basename="/">
        <div>
          <Navbar />
          <Switch>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/SignIn">
              <SignIn />
            </Route>
            <Route path="/FirstLoginData">
              <FirstLoginData />
            </Route>
            <Route path="/InputFields">
              <InputFields />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/ConfirmMail" component={ConfirmEmail} />
            <Route path="/ResetPassword">
              <ResetPassword />
            </Route>
          </Switch>
        </div>
      </Router>
 
    </UserContext.Provider>
  </StitchContext.Provider>
    );
  }
}
export {example}
export default withUserContext(App);
