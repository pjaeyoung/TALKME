import React from 'react'

class QuestionAnswerPair extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      //props로 질문과 답변이 모두 오면
      this.props.data.answer && this.props.data.text ?
        <>
          <div>{this.props.data.text}</div>
          <div>{this.props.data.answer}</div>
        </>
        :
        //둘 중 하나만 오면
        this.props.data.text ?
          <div>{this.props.data.text}</div>
          :
          <div>{this.props.data.answer}</div>



    )
  }
}

export default QuestionAnswerPair;