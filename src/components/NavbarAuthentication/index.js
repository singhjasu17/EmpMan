import React, { Component } from "react";
import Navbar from "../Navbar";
import { withUserContext, UserContext } from "../UserContext";
import { withStitch } from "../Stitch";
import NavNonAuth from "./NavNonAuth";
import NavAuth from "./NavAuth";

class NavbarAuthentication extends Component {
  render() {
    const stitchUser = this.props.stitch.client.auth.currentUser;
    if (stitchUser)
      return (
        <div>
          <NavAuth user={stitchUser} />
        </div>
      );
    else
      return (
        <div>
          <NavNonAuth />
        </div>
      );
  }
}

export default withStitch(NavbarAuthentication);
