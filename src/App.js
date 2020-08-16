import React from 'react';
import Main from './pages/Main';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RoomList from './pages/RoomList';
import CreateRoom from './pages/CreateRoom';
import UpdateRoom from './pages/UpdateRoom';
import ChattingRoom from './pages/ChattingRoom';
import PasswordFst from './pages/PasswordFst';
import PasswordSnd from './pages/PasswordSnd';
import PasswordTrd from './pages/PasswordTrd';
import WrongPath from './component/WrongPath';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }

  render() {
    return (
      <>
        <div>
          왼쪽 div 내용 채우기
        </div>
        <div>
          <button>contact</button>

          <Switch>
            <Route
              exact
              path="/"
              render={() => <Main />}
            />
            <Route
              exact
              path="/intro"
              render={() => <Intro />}
            />
            <Route
              exact
              path="/login"
              render={() => <Login />}
            />
            <Route
              exact
              path="/signup"
              render={() => <Signup />}
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
              render={() => <RoomList isLogin={this.state.isLogin} />}
            />
            {/* <Route
              exact
              path="/roomlist"
              render={() => {
                if (this.state.isLogin) {
                  return <RoomList />
                } else {
                  return <Redirect to="/intro" />
                }
              }}
            /> */}
            <Route
              exact
              path="/createroom"
              render={() => <CreateRoom isLogin={this.state.isLogin} />}
            />
            <Route
              exact
              path="/updateroom/:roomId"
              render={() => <UpdateRoom />}
            />
            <Route
              exact
              path="/chattingroom"
              render={() => <ChattingRoom />}
            />
            <Route
              path="/"
              render={() => <WrongPath />}
            />
          </Switch>

          <div>
            2020 Sensual people
          </div>
        </div>
      </>
    );
  }
}

export default App;
