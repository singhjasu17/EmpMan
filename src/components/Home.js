import React, { Component } from "react";
import { withUserContext } from "./UserContext";
import { withStitch } from "./Stitch";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div
        className="row m-0 justify-content-center"
        style={{ width: "100vw" }}
      >
        <div
          className="d-flex col-12 py-5 px-0 justify-content-center"
          style={{ height: "100vh" }}
        >
          <div
            className="d-flex row btn shadow my-auto  justify-content-center px-0"
            style={{
              height: "50vh",
              width: "100vw",
              backgroundColor: "rgba(50,50,50,0.5)",
            }}
          >
            <div
              className="col-12 px-0 display-4 text-light"
              style={{
                fontSize: "6vw",
              }}
            >
              EMPLOYEE MANAGEMENT SYSTEM
            </div>
            <div
              className="col-12 display-5"
              style={{ fontSize: "3vw", color: "darkgray" }}
            >
              Performance Reviews, Real-Time Feedback, Goals, SCRUM,
              Communication
            </div>
            <Link
              className="btn px-0 btn-dark text-light"
              style={{ height: "7vw", width: "40vw" }}
            >
              <div style={{ fontSize: "4vw" }}>Click Here for Demo</div>
            </Link>
          </div>
        </div>
        <div
          className="d-flex col-12 py-5 px-0 justify-content-center"
          style={{ height: "100vh" }}
        >
          <div
            className="d-flex bg-light row btn shadow my-auto  justify-content-center px-0"
            style={{
              height: "100vh",
              width: "100vw",
            }}
          ></div>
        </div>
      </div>
    );
  }
}
let HomeWithUser = withUserContext(Home);
export default withStitch(HomeWithUser);
