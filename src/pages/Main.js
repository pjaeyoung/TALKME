import React from "react";
import { withRouter } from "react-router-dom";
import "../css/Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="mobile">
        <div id="mobileTop"></div>
        <div className="loadingAnimation">로딩 중 애니메이션</div>
        <div id="startBtn" onClick={() => {
          this.props.history.push("/intro");
        }}>
          <div id="startText">start</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);

