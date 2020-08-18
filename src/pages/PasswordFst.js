import React from "react";
import { withRouter } from "react-router-dom";

class PasswordFst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  // 뒤로가기 버튼 클릭 시 login page로 이동
  backBtn() {
    this.props.history.push("/login");
  }
  // state의 email을 입력받은 email로 변경
  changeEmail(email) {
    this.setState({
      email: email
    });
  }
  // send 버튼 클릭 시 secret key 발급 API 요청 후 passwordsnd page로 이동
  sendEmail() {
    fetch("/auth/pwinquiry/askkey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email
      }),
      credentials: "include"
    })
      .then(res => {
        if (res.ok) {
          alert("Secret key가 정상적으로 발송되었습니다. email을 확인해 주세요");
          this.props.history.push("/passwordsnd");
        } else {
          alert("해당 email을 찾을 수 없습니다.");
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.backBtn()}>뒤로가기</button>
        <div>별똥별 애니메이션</div>
        <div>Enter your email for new password</div>
        <input type="email" onChange={e => this.changeEmail(e.target.value)}></input>
        <button onClick={() => this.sendEmail()}>send</button>
      </div>
    );
  }
}

export default withRouter(PasswordFst);
