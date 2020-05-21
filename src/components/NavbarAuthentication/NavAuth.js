import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavAuth extends Component {
  render() {
    return (
      <div className="d-flex">
        <Link className="btn btn-dark" to="/Profile">
          {this.props.user.customData.userId}
        </Link>
        <button className="btn btn-dark">Log Out</button>
      </div>
    );
  }
}
export default NavAuth;
