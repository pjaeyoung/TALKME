import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: this.props.question,
      deleteDisplay: false
    }
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleButtonRelease = this.handleButtonRelease.bind(this);
    this.handleButtonLeave = this.handleButtonLeave.bind(this);
  }
  // 마우스를 누를 시 deleteDisplay의 값에 따라 시간을 달리하여 deleteDisplay의 값을 변경
  handleButtonPress() {
    this.buttonPressTimer = setTimeout(() => {
      this.setState({
        deleteDisplay: !this.state.deleteDisplay
      })
    }, this.state.deleteDisplay ? 0 : 1000);
  }
  // 마우스를 해제 할 시 buttonPressTimer의 타이머 해제
  handleButtonRelease() {
    clearTimeout(this.buttonPressTimer);
  }
  // 마우스가 태그에서 벗어날 시 deleteDisplay를 false로 변경
  handleButtonLeave() {
    this.setState({
      deleteDisplay: false
    })
  }

  render() {
    return (
      <div
        onMouseLeave={this.handleButtonLeave}>
        <li
          onMouseDown={this.handleButtonPress}
          onMouseUp={this.handleButtonRelease}>
          {this.state.question.text}
        </li>
        <button style={{ display: this.state.deleteDisplay ? 'none' : 'block' }}>
          삼선
        </button>
        <button onClick={() => this.props.deleteQuestion(this.state.question.id)}
          style={{ display: this.state.deleteDisplay ? 'block' : 'none' }}>
          삭제
        </button>
      </div>
    )
  }
}

export default Question;