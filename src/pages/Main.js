import React from "react";
import { withRouter } from "react-router-dom";
import "../css/Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="loadingAnimationBox">
          <div className="loadingStick"></div>
          <div className="loadingStick"></div>
          <div className="loadingStick"></div>
          <div className="loadingStick"></div>
          <div className="loadingStick"></div>
        </div>
        <div id="startBtn" onClick={() => {
          this.props.history.push("/intro");
        }}>
          <div id="startText">start</div>
        </div>
      </>
    );
  }
}

export default withRouter(Main);

