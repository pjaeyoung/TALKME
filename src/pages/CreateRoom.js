import React from 'react';
import Question from '../component/Question';
import { withRouter } from 'react-router-dom';

class CreateRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      questions: [],
      questionCount: 1
    }
  }
  // intro page로 이동
  backBtn() {
    this.props.history.push('/intro');
  }
  // state의 key와 value를 입력받아 변경
  changeState(key, value) {
    this.setState({
      [key]: value
    })
  }
  // state.questions 배열에 {id: ,question: } 추가
  addQuestion(value) {
    let question = {
      id: this.state.questionCount,
      text: value
    };

    let questions = this.state.questions;
    questions.push(question);

    this.setState({
      questions: questions,
      questionCount: this.state.questionCount + 1
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
  // 질문의 id값을 순서대로 재할당 후 chttingroom에 title과 questions를 보내고 이동
  startBtn() {
    let count = 1;
    let questions = this.state.questions.map(question => {
      question.id = count;
      count++;
      return question;
    })

    this.props.history.push({
      pathname: "/chattingroom",
      title: this.state.title,
      questions: questions
    });
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
          <input type="text" onChange={(e) => { this.changeState("title", e.target.value) }}></input>
        </div>
        <div>
          <div>description: </div>
          <input type="text" onChange={(e) => { this.changeState("description", e.target.value) }}></input>
        </div>
        <div>
          <ul >
            {this.state.questions.map(question =>
              <Question
                key={question.id}
                question={question}
                deleteQuestion={this.deleteQuestion.bind(this)}
              />)}
          </ul>
          <input type="text" placeholder="+ add question"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.addQuestion(e.target.value);
                e.target.value = "";
              }
            }}></input>
        </div>
        <button onClick={() => this.startBtn()}>start</button>
      </div>
    )
  }
}

export default withRouter(CreateRoom);