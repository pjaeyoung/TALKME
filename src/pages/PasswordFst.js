import React from 'react'
import { withRouter } from 'react-router-dom';

class PasswordFst extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ""
    }
  }

  back() {
    this.props.history.push('/login');
  }

  changeEmail(email) {
    this.setState({
      email: email
    })
  }

  sendEmail() {
    // fetch
    let em = "inho";
    if (this.state.email === em) {
      this.props.history.push('/passwordsnd');
    } else {
      alert("email을 찾을 수 없습니다.");
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.back() }}>뒤로가기</button>
        <div>별똥별 애니메이션</div>
        <div>Enter your email for new password</div>
        <input type="email" onChange={(e) => { this.changeEmail(e.target.value) }}></input>
        <button onClick={() => { this.sendEmail() }}>send</button>
      </div>
    )
  }
}

export default withRouter(PasswordFst);
