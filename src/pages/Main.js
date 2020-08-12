import React from 'react'
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>로딩 중</div>
        <button onClick={() => {
          this.props.history.push('/intro');
        }}>start</button>
      </div>
    )
  }
}

export default withRouter(Main);
