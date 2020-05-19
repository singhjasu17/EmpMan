import React, { Component } from "react";
import {
  Stitch,
  UserPasswordAuthProviderClient,
  UserPasswordCredential,
} from "mongodb-stitch-browser-sdk";
import {withRouter,Redirect} from 'react-router-dom'
import { withUserContext } from "../UserContext";
import { withStitch } from "../Stitch";
import {UserContext} from '../UserContext'
import profile from '../Profile'

class SignUp extends Component {
  constructor(props)
  {
    super(props);
    this.inputfields=this.inputfields.bind(this)
    this.profile=this.profile.bind(this)
  }
  inputfields=()=>
  {
    console.log('red inp')
    this.props.history.push('/InputFields') 

  }
  profile()
  {
    console.log('red pro')
    this.props.history.push('/Profile')

  }
  static contextType = UserContext

  state = { email: "", password: "" };
  static stitchVar=null;
  inputChangeHandler = (event, input) => {
    this.setState({ [input]: event.target.value });
  };
//   checkdata= async ()=>{
//     const client = Stitch.defaultAppClient;
// await client.callFunction("CheckUserData").then(result => 
//  console.log(result))
// }
  SignInHandler = async () => {
    let authData = { email: this.state.email, password: this.state.password };
    if (authData.email.trim() === "" || authData.password.trim() === "") {
      return;

    }
    let user = await this.props.stitch
      .SignInEmailPassword(authData)
      .then((user) => {
        console.log(user.customData);
        console.log(this.props.stitch);
        const {updateUser} = this.context
        console.log(user)
        updateUser(user.customData)
         
});
const client = Stitch.defaultAppClient;
        await client.callFunction("CheckUserData").then(result => 
        {
          const userData=result.doc;
          
          if(userData.reqFields == true)
          {
                this.profile();
          }
          else{
            const y=0;
                this.inputfields();

          }
        })
         


}
      


  render() 
  {
    return (
      <main className="d-flex m-5 justify-content-center">
        <div className="row col-sm-12 col-md-9 justify-content-center bg-light shadow p-5">
          <div className="col-12 text-center display-4">Sign In</div>
          <input
            className="col-12 m-1 form-control shadow"
            label="E-Mail"
            config={{ type: "email" }}
            onChange={(event) => this.inputChangeHandler(event, "email")}
          />
          <input
            className="col-12 mt-1 form-control shadow"
            label="Password"
            config={{ type: "password" }}
            onChange={(event) => this.inputChangeHandler(event, "password")}
          />
          <button
            className="btn btn-dark m-1 col-6 shadow"
            onClick={() => this.SignInHandler()}
          >
            Sign In
          </button>
        </div>
      </main>
    );
  }
}

export default withRouter(withStitch(withUserContext(SignUp)));
