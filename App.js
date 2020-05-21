import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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

import bg from "./ConfRoom.jpg";

import { UserContext } from "./UserContext";
import Profile from "./Profile";
import InputFields from "./InputFields";
let example = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    this.updateUserData();
  }
  updateUserData = async () => {
    if (this.props.stitch.client.auth.currentUser) {
      console.log("Refreshing user data on page refresh");
      let res = await this.props.stitch.client.auth.refreshCustomData();
      console.log("current User" + this.props.stitch.client.auth.currentUser);
      this.setState({
        user: this.props.stitch.client.auth.currentUser.customData,
      });
    } else {
      console.log("user not logged in ");
    }
  };
  updateValue = (val) => {
    this.setState({ user: val });
  };

  render() {
    example = this.state.user;
    console.log(this.state.user);
    return (
      <UserContext.Provider
        value={{ state: this.state, updateUser: this.updateValue }}
      >
        <Router basename="/">
          <div style={{ minHeight: "100vh" }}>
            <img
              src={bg}
              style={{
                height: "100vh",
                width: "100%",
                zIndex: -1,
                position: "fixed",

                objectFit: "cover",
              }}
            ></img>
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
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    );
  }
}
export { example };
export default withStitch(withUserContext(App));
