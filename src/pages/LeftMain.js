import React from 'react';
import moon from "../img/moon.png"
import "../css/LeftMain.css"

class LeftMain extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div id="starL"></div>
        <div id="title">Talk Me</div>
        <div id="circle">
          <div id="moon">
            <img id="moonImg" src={moon} />
          </div>
          <div id="satellite"></div>
        </div>
        <div id="description">
          Wasn't it difficult to tell other people your concerns? <br />
          But don't you wait for someone to ask? <br />
          Write down your concerns here. <br />
          We will ask you about your concerns instead. <br />
          <br />
          <br />
          Please write down your concerns in the question list. <br />
          Try to answer the questions in order. <br />
          This site helps you face yourself and organize your thoughts!
        </div>
      </>
    )
  }
}

export default LeftMain;