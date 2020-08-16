import React from 'react'
import { withRouter } from 'react-router-dom';

class PasswordTrd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newPassword: "",
      confirmPassword: ""
    }
  }

  backBtn() {
    this.props.history.push('/passwordsnd');
  }

  changePassword(key, value) {
    this.setState({
      [key]: value
    })
  }

  saveBtn() {
    let { newPassword, confirmPassword } = this.state;
    if (newPassword === confirmPassword) {
      // fetch
      // fetch("/auth/pwinquiry/newpassword", {
      //   method: "patch",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     password: newPassword
      //   }),
      //   credentials: "include"
      // })
      //   .then(res => {
      //     if (res.ok) {
      //       alert("비밀번호가 정상적으로 변경되었습니다.")
      //       this.props.history.push('/login');
      //     } else {
      //       alert("Secret Key가 일치하지 않습니다.")
      //     }
      //   })
      //   .catch(err => console.log(err))

      alert("비밀번호가 정상적으로 변경되었습니다.")
    } else {
      alert("비밀번호가 일지하지 않습니다.")
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.backBtn() }}>뒤로가기</button>
        <div>별똥별 애니메이션</div>
        <input
          type="password"
          placeholder="new password"
          value={this.state.newPassword}
          onChange={e => this.changePassword("newPassword", e.target.value)}>
        </input>
        <input
          type="password"
          placeholder="confirm password"
          value={this.state.confirmPassword}
          onChange={e => this.changePassword("confirmPassword", e.target.value)}>
        </input>
        <button
          onClick={() => {
            this.saveBtn();
            this.changePassword("newPassword", "");
            this.changePassword("confirmPassword", "");
          }}>save</button>
      </div>
    )
  }
}

export default withRouter(PasswordTrd);