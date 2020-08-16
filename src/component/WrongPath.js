import React from 'react';
import { withRouter } from 'react-router-dom';

class WrongPath extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    alert("잘못 된 요청입니다.");
    this.props.history.push('/intro');
  }

  render() {
    return <div></div>
  }
}

export default withRouter(WrongPath);