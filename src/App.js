import React from "react";
import Main from "./pages/Main";
import Intro from "./pages/Intro";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RoomList from "./pages/RoomList";
import CreateRoom from "./pages/CreateRoom";
import UpdateRoom from "./pages/UpdateRoom";
import ChattingRoom from "./pages/ChattingRoom";
import SocialLogin from "./pages/SocialLogin";
import PasswordFst from "./pages/PasswordFst";
import PasswordSnd from "./pages/PasswordSnd";
import PasswordTrd from "./pages/PasswordTrd";
import { Switch, Route, Redirect } from "react-router-dom";
import "./css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      isGuest: false
    };
    this.handlingIsLogin = this.handlingIsLogin.bind(this);
  }

  handlingIsLogin(key) {
    this.setState({ [key]: true });
  }

  render() {
    const { isLogin, isGuest } = this.state;
    return (
      <div id="main">

        <div id="leftMain">
          왼쪽 div 내용 채우기
        </div>

        <div id="rightMain">
          <button id="contactBtn">contact</button>

          <div id="mobile">
            <Switch>
              <Route
                exact
                path="/intro"
                render={() => <Intro
                  handlingIsLogin={this.handlingIsLogin} />}
              />
              <Route
                exact
                path="/login"
                render={() => <Login
                  handlingIsLogin={this.handlingIsLogin} />}
              />
              <Route
                exact
                path="/signup"
                render={() => <Signup />}
              />
              <Route
                exact
                path="/sociallogin"
                render={() => <SocialLogin />}
              />
              <Route
                exact
                path="/passwordfst"
                render={() => <PasswordFst />}
              />
              <Route
                exact
                path="/passwordsnd"
                render={() => <PasswordSnd />}
              />
              <Route
                exact
                path="/passwordtrd"
                render={() => <PasswordTrd />}
              />
              <Route
                exact
                path="/roomlist"
                render={() => this.state.isLogin ?
                  <RoomList /> :
                  <Redirect to="/intro" />}
              />
              <Route
                exact
                path="/createroom"
                render={() => this.state.isLogin || this.state.isGuest ?
                  <CreateRoom
                    isLogin={isLogin} /> :
                  <Redirect to="/intro" />}
              />
              <Route
                exact
                path="/updateroom/:roomId"
                render={() => this.state.isLogin ?
                  <UpdateRoom /> :
                  <Redirect to="/intro" />}
              />
              <Route
                exact
                path="/chattingroom"
                render={() => this.state.isLogin || this.state.isGuest ?
                  <ChattingRoom isLogin={isLogin} isGuest={isGuest} /> :
                  <Redirect to="/intro" />}
              />
              <Route
                path="/"
                render={() => <Main />}
              />
            </Switch>
          </div>

          <div id="teamName">
            2020 Sensual people
          </div>

        </div>
      </div>
    );
  }
}

export default App;
