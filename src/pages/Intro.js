import React from 'react';
import { withRouter } from 'react-router-dom';

class Intro extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>애니메이션</div>
        <div>
          <button onClick={() => {
            this.props.history.push('/createRoom');
          }}>
            GUEST
          </button>
          <button onClick={() => {
            this.props.history.push('/login');
          }}>
            LOGIN
            </button>
          <button onClick={() => {
            this.props.history.push('/signup');
          }}>
            signup
            </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Intro);