import React from "react";
import Room from "../component/Room";
import { withRouter } from "react-router-dom";
import "../css/RoomList.css";

class RoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
    this.deleteRoom = this.deleteRoom.bind(this);
  }
  // 뒤로가기 버튼 클릭 시 로그아웃 API 요청 후 login page로 이동
  backBtn() {
    fetch("/auth/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => {
        if (res.ok) {
          this.props.history.push('/login');
        }
      })
      .catch(err => console.log(err));
  }
  // 생성버튼 클릭 시 createroom page로 이동
  redirectCreateRoom() {
    this.props.history.push("/createroom");
  }
  // 삭제버튼 클릭 시 입력받은 room id의 해당하는 유저의 방을 삭제
  deleteRoom(id) {
    fetch("/room", {
      method: "DELETE",
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
          });
          this.setState({
            rooms: rooms
          });
        }
      })
      .catch(err => console.log(err));
  }
  // 로딩 시 유저의 roomlist를 가져오는 API 요청 
  componentDidMount() {
    fetch("/roomList", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          rooms: data.rooms
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <button id="roomListBack" onClick={() => this.backBtn()}>← </button>
        <div id="roomListTitle">
          <p>
            Chat List
          </p>
        </div>
        <ul id="roomListBottom">
          {this.state.rooms.map(room =>
            <Room
              key={room.id}
              room={room}
              deleteRoom={this.deleteRoom}
            />
          )}
          <li id="createRoomBtn" onClick={() => this.redirectCreateRoom()}>
            <p>
              +
            </p>
          </li>
        </ul>
      </>
    );
  }
}

export default withRouter(RoomList);
