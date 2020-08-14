import React from 'react';
import Room from '../component/Room';
import { withRouter } from 'react-router-dom';

let rooms = [
  { id: 1, title: "hello" },
  { id: 2, title: "world" }
]

class RoomList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: rooms
    }
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  backBtn() {
    this.props.history.push('/login');
  }

  redirectCreateRoom() {
    this.props.history.push('/createroom');
  }

  deleteRoom(id) {
    let rooms = this.state.rooms.filter(room => {
      if (room.id !== id) {
        return room;
      }
    })
    this.setState({
      rooms: rooms
    })
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.backBtn()}>뒤로가기</button>
          <span>Chat List</span>
        </div>
        <ul>
          {this.state.rooms.map(room =>
            <Room
              key={room.id}
              id={room.id}
              title={room.title}
              deleteRoom={this.deleteRoom}
            />)}
          <li onClick={() => this.redirectCreateRoom()}>+</li>
        </ul>
      </div>
    )
  }
}

export default withRouter(RoomList);