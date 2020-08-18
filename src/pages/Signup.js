import React from "react";
import { withRouter } from "react-router-dom";


class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handlingInputValue(key, e) {
    this.setState({ [key]: e.target.value });
  }




  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push("/intro")}>뒤로가기</button >
        <div>애니메이션</div>
        <div>
          <input onChange={(e) => this.handlingInputValue("email", e)} type="text"></input>
          <input onChange={(e) => this.handlingInputValue("password", e)} type="text"></input>
        </div>
        <div>
          <button onClick={() => {
            const { email, password } = this.state;
            //입력받은 값을 바탕으로 포스트 요청
            fetch("/auth/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ email: email, password: password }),
              credentials: "include",
            })
              //response의 상태코드가 201이면 App의 state변경 메소드 실행
              .then(res => {
                if (res.status === 201) {
                  alert("회원가입이 완료되었습니다.");
                  this.props.history.push("/login");
                } else {
                  alert("이미 존재하는 email입니다.");
                }
              });
          }}>
            Sign up
          </button>
          <button onClick={() =>
            window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=573943257082-7st2e4102s4unen44o7794ooiimbm97u.apps.googleusercontent.com&scope=openid%20profile%20email&redirect_uri=http://localhost:4000/auth/social'
          }>
            소셜회원가입
          </button>
        </div>
      </div >
    );
  }
}

export default withRouter(Signup);
