import React from 'react';
import Question from '../component/Question';
import { withRouter } from 'react-router-dom';

class UpdateRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      title: "",
      description: "",
      questions: [],
    }
  }
  // 뒤로가기 클릭 시 roomlist로 이동
  backBtn() {
    this.props.history.push('/roomlist');
  }
  // state의 key와 value를 입력받아 변경
  changeState(key, value) {
    this.setState({
      [key]: value
    })
  }
  // state.questions 배열에 {id: ,question: } 추가
  addQuestion(value) {
    let { questions } = this.state;

    let question = {
      id: questions.length ? questions[questions.length - 1].id + 1 : 0,
      text: value
    };

    questions.push(question);

    this.setState({
      questions: questions
    })
  }
  // id를 입력받아 해당 id를 key로 가지는 질문 삭제
  deleteQuestion(id) {
    let questions = this.state.questions.filter(question => {
      if (question.id !== id) {
        return question;
      }
    })
    this.setState({
      questions: questions
    })
  }

  saveBtn() {
    if (this.state.title) {
      // room patch 요청
      let questionsText = this.state.questions.map(question => question.text);

      console.log(JSON.stringify({
        roomId: this.state.id,
        title: this.state.title,
        description: this.state.description,
        questions: questionsText
      }))

      fetch("/room", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          roomId: this.state.id,
          title: this.state.title,
          description: this.state.description,
          questions: questionsText
        }),
        credentials: "include"
      })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

      this.props.history.push({
        pathname: "/roomlist"
      });
    } else {
      alert("title을 입력해 주세요.")
    }
  }

  componentDidMount() {
    fetch(`/room/${this.props.match.params.roomId}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(room => {
        this.setState({
          id: room.id,
          title: room.title,
          description: room.description,
          questions: room.questions
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.backBtn()}>뒤로가기</button>
          <span>Questions</span>
        </div>
        <div>
          <span>title: </span>
          <input
            type="text"
            value={this.state.title}
            onChange={(e) => { this.changeState("title", e.target.value) }}></input>
        </div>
        <div>
          <div>description: </div>
          <input
            type="text"
            value={this.state.description}
            onChange={(e) => { this.changeState("description", e.target.value) }}></input>
        </div>
        <div>
          <ul >
            {this.state.questions.map(question => {
              return <Question
                key={question.id}
                question={question}
                deleteQuestion={this.deleteQuestion.bind(this)}
              />
            })}
          </ul>
          <input type="text" placeholder="+ add question"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.addQuestion(e.target.value);
                e.target.value = "";
              }
            }}></input>
        </div>
        <button onClick={() => this.saveBtn()}>save</button>
      </div>
    )
  }
}

export default withRouter(UpdateRoom);