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
import moon from "./img/moon.png"
import "./css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      isLogin: false,
      isGuest: false
    };
    this.handlingIsLogin = this.handlingIsLogin.bind(this);
  }

  handlingIsLogin(key) {
    this.setState({ [key]: true });
  }

  componentDidMount() {
    fetch("/auth/isLogin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => {
        if (res.ok) {
          this.handlingIsLogin("isLogin");
        }
        this.handlingIsLogin("isReady");
      })
      .catch(err => console.log(err));
  }

  render() {
    const { isLogin, isGuest, isReady } = this.state;

    return (
      <div id="main">
        <div id="leftMain">
          <div id="starL"></div>
          <div id="title">TALK ME</div>
          <div id="circle">
            <div id="moon">
              <img id="moonImg" src={moon} />
            </div>
            <div id="satellite"></div>
          </div>
          <div id="description">
            Wasn't it difficult to tell other people your concerns? <br />
            But don't you wait for someone to ask? <br />
            Write down your concerns here. <br />
            We will ask you about your concerns instead. <br />
            <br />
            <br />
            Please write down your concerns in the question list. <br />
            Try to answer the questions in order. <br />
            This site helps you face yourself and organize your thoughts!
          </div>
        </div>

        <div id="rightMain">
          <div id="rightHeader">
            <div id="contactBtn">
              <div id="contactText">contact</div>
              <div id="contactLine"></div>
            </div>
          </div>

          <div id="mobileBox">
            <div id="mobile">
              <div id="mobileTop"></div>
              {isReady ?
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
                :
                <div>
                  로딩 중...
                </div>}
            </div>
          </div>

          <div id="rightBottom">
            <div id="teamName">
              © 2020 Sensual people
          </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
