import React from 'react';
import { withRouter } from 'react-router-dom';

class Room extends React.Component {
  constructor(props) {
    super(props)

  }

  redirectUpdateRoom() {
    this.props.history.push('/updateroom');
  }

  redirectChattingRoom() {
    this.props.history.push('/chattingroom');

    // fetch 요청 후 데이터도 보내야한다.
  }

  render() {
    return (
      <li >
        <span onClick={() => this.redirectChattingRoom()}>
          {this.props.title}
        </span>
        <button onClick={() => this.redirectUpdateRoom()}>편집</button>
        <button onClick={() => this.props.deleteRoom(this.props.id)}>삭제</button>
      </li>
    )
  }
}

export default withRouter(Room);