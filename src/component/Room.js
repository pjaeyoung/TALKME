import React from "react";
import { withRouter } from "react-router-dom";

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.room.id,
      title: this.props.room.title,
      count: this.props.room.questionCount
    };
  }
  // 클릭 이벤트 발생 시 분기 후 처리
  clickList(e) {
    if (e === "편집") {
      this.props.history.push(`/updateroom/${this.state.id}`);
    } else if (e === "삭제") {
      this.props.deleteRoom(this.state.id);
    } else {
      this.props.history.push({
        pathname: "/chattingroom",
        id: this.state.id
      });
    }
  }

  render() {
    return (
      <li >
        <span onClick={(e) => this.clickList(e.target.textContent)}>
          {this.state.title}
          {this.state.count}
          <button >편집</button>
          <button >삭제</button>
        </span>
      </li>
    );
  }
}

export default withRouter(Room);
