import React from 'react';
import Main from './pages/Main';
import Intro from './pages/Intro';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateRoom from './pages/CreateRoom';
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
              path="/createRoom"
              render={() => <CreateRoom />}
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
