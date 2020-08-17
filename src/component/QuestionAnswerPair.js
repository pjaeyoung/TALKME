import React from "react";

class QuestionAnswerPair extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      //props로 답변이 오면
      this.props.data.answer ?
        <div>{this.props.data.answer}</div>
        :
        //질문만 오면
        <div>{this.props.data.text}</div>
    );
  }
}

export default QuestionAnswerPair;
