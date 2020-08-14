import React from 'react';
import Main from './pages/Main';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateRoom from './pages/CreateRoom';
import ChattingRoom from './pages/ChattingRoom';
import PasswordFst from './pages/PasswordFst';
import PasswordSnd from './pages/PasswordSnd';
import PasswordTrd from './pages/PasswordTrd';
import RoomList from './pages/RoomList';
import { Switch, Route } from 'react-router-dom';

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
              render={() => <RoomList />}
            />
            <Route
              exact
              path="/createroom"
              render={() => <CreateRoom />}
            />
            <Route
              exact
              path="/chattingroom"
              render={() => <ChattingRoom />}
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
