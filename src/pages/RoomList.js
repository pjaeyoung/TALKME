import React from 'react';
import Room from '../component/Room';
import { withRouter } from 'react-router-dom';

class RoomList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rooms: []
    }
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  backBtn() {
    //
    // 로그아웃 구현
    //
    // fetch("/auth/logout", {
    //   method: "get",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   credentials: "include"
    // })
    //   .then(res => {
    //     if (res.ok) {
    //       this.props.history.push('/login');
    //     }
    //   })
    //   .catch(err => console.log(err))
  }

  redirectCreateRoom() {
    this.props.history.push('/createroom');
  }

  deleteRoom(id) {
    fetch("/room", {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        roomId: id
      }),
      credentials: "include"
    })
      .then(res => {
        if (res.ok) {
          let rooms = this.state.rooms.filter(room => {
            if (room.id !== id) {
              return room;
            }
          })
          this.setState({
            rooms: rooms
          })
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    fetch("/roomList", {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          rooms: data.rooms
        })
      })
      .catch(err => console.log(err))
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
              room={room}
              deleteRoom={this.deleteRoom}
            />)}
          <li onClick={() => this.redirectCreateRoom()}>+</li>
        </ul>
      </div>
    )
  }
}

export default withRouter(RoomList);