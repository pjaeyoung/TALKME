import React from "react";
import { withRouter } from "react-router-dom";

class PasswordSnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretKey: ""
    };
  }
  // 뒤로가기 버튼 클릭 시 passwordfst page로 이동
  backBtn() {
    this.props.history.push("/passwordfst");
  }
  // state의 secretkey를 입력받은 secretkey로 변경
  changeSecretKey(key) {
    this.setState({
      secretKey: key
    });
  }
  // submit 버튼 클릭 시 입력한 secret key가 일치하는지 확인하는 API 요청 후 passwordtrd page로 이동
  submitSecretKey() {
    // fetch
    // fetch("/auth/pwinquiry/comparekey", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     secretKey: this.state.secretKey
    //   }),
    //   credentials: "include"
    // })
    //   .then(res => {
    //     if (res.ok) {
    //       this.props.history.push('/passwordtrd');
    //     } else {
    //       alert("Secret Key가 일치하지 않습니다.");
    //     }
    //   })
    //   .catch(err => console.log(err));


    let sk = "asdf";
    if (this.state.secretKey === sk) {
      this.props.history.push("/passwordtrd");
    } else {
      alert("Secret Key가 일치하지 않습니다.");
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.backBtn()}>뒤로가기</button>
        <div>별똥별 애니메이션</div>
        <div>Enter the secret key written in the email received</div>
        <input type="text" onChange={e => this.changeSecretKey(e.target.value)}></input>
        <button onClick={() => this.submitSecretKey()}>submit</button>
      </div>
    );
  }
}

export default withRouter(PasswordSnd);
