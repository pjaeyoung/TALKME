import React from 'react'
import { withRouter } from 'react-router-dom';

class PasswordSnd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secretKey: ""
    }
  }

  back() {
    this.props.history.push('/passwordfst');
  }

  changeSecretKey(key) {
    this.setState({
      secretKey: key
    })
  }

  submitSecretKey() {
    // fetch
    let sk = "asdf";
    if (this.state.secretKey === sk) {
      this.props.history.push('/passwordtrd');
    } else {
      alert("Secret Key가 틀립니다.")
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.back() }}>뒤로가기</button>
        <div>별똥별 애니메이션</div>
        <div>Enter the secret key written in the email received</div>
        <input type="text" onChange={(e) => { this.changeSecretKey(e.target.value) }}></input>
        <button onClick={() => { this.submitSecretKey() }}>submit</button>
      </div>
    )
  }
}

export default withRouter(PasswordSnd);
