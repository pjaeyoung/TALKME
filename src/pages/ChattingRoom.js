import React from 'react'
import QuestionAnswerPair from "../component/QuestionAnswerPair";
import { withRouter } from 'react-router-dom';

class ChattingRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.location.title,
      questions_answers: [this.props.location.questions[0]],
      answer: "",
      idx: 0
    }
    this.handlingQuestionsAnswers = this.handlingQuestionsAnswers.bind(this)
    this.handlingInputValue = this.handlingInputValue.bind(this)
  }

  handlingInputValue(e) {
    this.setState({ answer: e.target.value })
  }

  handlingQuestionsAnswers() {
    const { idx, answer, questions_answers } = this.state

    //state의 questions_answers를 복사
    let newQuestions_answers = Object.create(questions_answers)

    //questions_answers 배열의 현재 인덱스에 입력받은 값을 answer 프로퍼티의 value로 입력
    newQuestions_answers[idx].answer = answer

    //questions_answers 배열에 question 인덱스를 바탕으로 요소 추가
    //만약 인덱스가 주어진 데이터배열의 길이-1 보다 작으면 인덱스 +1에 해당하는 데이터객체를 추가
    if (idx < this.props.location.questions.length - 1) {
      newQuestions_answers.push(this.props.location.questions[idx + 1])
    }
    //작으면 빈값으로 이루어진 더미데이터 객체를 questions_answers 배열에 추가
    //(더미 데이터가 없으면 아래에서 map이 안되고 + 질문과 답변의 순서 인덱스가 1 차이가 나기때문에 이렇게 해결해보았음 )
    else {
      newQuestions_answers.push({ text: "", answer: "" })
    }

    //인덱스를 상승시키고, 새롭게 만들어진 배열을 업데이트
    this.setState({
      idx: idx + 1,
      questions_answers: newQuestions_answers
    })
  }

  render() {
    const { title, questions_answers } = this.state
    return (
      <>
        {/*뒤로가기 버튼을 누르면 질문작성화면으로 이동*/}
        <button onClick={() => {
          this.props.history.push('/createRoom');
        }}>
          뒤로가기
        </button>
        {/*Room의 title 뿌려주기*/}
        <div>{title}</div>

        {/*Questions_Answers 뿌려주기*/}
        <div>
          {questions_answers.map(el =>
            <QuestionAnswerPair
              key={el.id}
              data={el}
            />
          )}
        </div>

        {/*입력받은 값을을 state에 저장하고 보내기버튼 클릭시 메시지 생성*/}
        <div>
          <input onChange={(e) => this.handlingInputValue(e)} type="text"></input>
          <button onClick={() => { this.handlingQuestionsAnswers() }}>보내기</button>
        </div>
      </>
    )
  }
}

export default withRouter(ChattingRoom);
