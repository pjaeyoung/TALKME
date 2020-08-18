import React from "react";
import { withRouter } from "react-router-dom";
import "../css/Intro.css";

class Intro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="shootingStarAnimationBox">
          <div className="shootingStarAnimation">
            <div className="star"></div>
          </div>
        </div>
        <div id="btnBox">
          <div id="guestBtn" onClick={() => {
            this.props.handlingIsLogin("isGuest");
            this.props.history.push("/createroom");
          }}>
            <div id="guestText">GUEST</div>
          </div>
          <div id="loginBtn" onClick={() => {
            this.props.history.push("/login");
          }}>
            <div id="loginText">LOGIN</div>
          </div>
          <div id="signupBtn" onClick={() => {
            this.props.history.push("/signup");
          }}>
            <div id="signupText">signup</div>
            <div id="signupLine"></div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Intro);
