import React from 'react'
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handlingInputValue(key, e) {
    this.setState({ [key]: e.target.value })
  }

  isCorrectInformation() {
    const { email, password } = this.state
    const { handlingIsLogin } = this.props
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password }),
      credentials: "include",
    })
      .then(res => {
        if (res.status === 200) {
          handlingIsLogin()

        } else {
          alert("잘못된 로그인 정보입니다.")
        }
      })
  }

  render() {
    const { email, password } = this.state
    const { handlingIsLogin } = this.props
    return (
      <div>
        <button onClick={() => this.props.history.push("/intro")}>뒤로가기</button >
        <div>애니메이션</div>
        <div>
          <input onChange={(e) => this.handlingInputValue("email", e)} type="text"></input>
          <input onChange={(e) => this.handlingInputValue("password", e)} type="text"></input>
        </div>
        <div>
          <button onClick={() => this.props.history.push("/passwordfst")}>forgot password</button>
          <button onClick={() => {
            //입력받은 값을 바탕으로 포스트 요청
            fetch("/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ email: email, password: password }),
              credentials: "include",
            })
              //response의 상태코드가 200이면 App의 state변경 메소드 실행
              .then(res => {
                if (res.status === 200) {
                  console.log(res.status)
                  handlingIsLogin("isLogin")
                  this.props.history.push("/roomlist")
                } else {
                  alert("잘못된 로그인 정보입니다.")
                }
              })
          }}>
            Login
          </button>
          <button>Continue with Google</button>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);