import React, { Component } from "react";
import {
  Stitch,
  UserPasswordAuthProviderClient,
  UserPasswordCredential,
} from "mongodb-stitch-browser-sdk";

import { withUserContext } from "../UserContext";
import { withStitch } from "../Stitch";

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = async (event) => {
    if (
      this.state.email.trim() === "" ||
      this.state.passwordOne.trim() === "" ||
      this.state.passwordTwo.trim() === ""
    ) {
      console.log("incomplete form");
      return;
    }
    if (this.state.passwordOne != this.state.passwordTwo) {
      console.log("paswords not same");
      return;
    }
    //console.log(authData);
    let user = await this.props.stitch
      .signUpEmailPassword({
        email: this.state.email,
        password: this.state.passwordOne,
      })
      .then((user) => {
        console.log(user);
        return user;
      });
    // let login = await this.props.stitch.SignInEmailPassword({
    //   email: this.state.email,
    //   password: this.state.passwordOne,
    // });
    console.log(user);
    // console.log(login);
    console.log("before");
    // this.props.stitch.addUserData(this.state.username);
    console.log("after");
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const {
      email,
      passwordOne,
      passwordTwo,

      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || email === "";

    return (
      <form
        className="d-flex py-5 align-items-center justify-content-center "
        onSubmit={(e) => {
          this.onSubmit();
          e.preventDefault();
        }}
      >
        <div className="row align-self-center my-auto col-sm-12 col-md-9 justify-content-center bg-light shadow p-5">
          <div className="col-12 text-center display-4">Sign Up</div>

          <input
            name="email"
            className="col-12 m-1 form-control shadow"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            className="col-12 m-1 form-control shadow"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            className="col-12 m-1 form-control shadow"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <button
            class="btn btn-dark col-6 my-1"
            disabled={isInvalid}
            type="submit"
          >
            Sign Up
          </button>
          {error && <p>{error.message}</p>}
        </div>
      </form>
    );
  }
}

export default withStitch(withUserContext(SignUp));
