import React from 'react'
import { withRouter } from 'react-router-dom';

class PasswordFst extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ""
    }
  }

  backBtn() {
    this.props.history.push('/login');
  }

  changeEmail(email) {
    this.setState({
      email: email
    })
  }

  sendEmail() {
    // fetch

    // fetch("/auth/pwinquiry/askkey", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     email: this.state.email
    //   }),
    //   credentials: "include"
    // })
    //   .then(res => {
    //     if (res.ok) {
    //       alert("Secret key가 정상적으로 발송되었습니다. email을 확인해 주세요");
    //       this.props.history.push("/passwordsnd");
    //     } else {
    //       alert("해당 email을 찾을 수 없습니다.")
    //     }
    //   })
    //   .catch(err => console.log(err))


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
        <button onClick={() => { this.backBtn() }}>뒤로가기</button>
        <div>별똥별 애니메이션</div>
        <div>Enter your email for new password</div>
        <input type="email" onChange={(e) => { this.changeEmail(e.target.value) }}></input>
        <button onClick={() => { this.sendEmail() }}>send</button>
      </div>
    )
  }
}

export default withRouter(PasswordFst);
