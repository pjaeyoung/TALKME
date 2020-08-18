import React from "react";
import { withRouter } from "react-router-dom";

class SocialLogin extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //리다이렉트되어서 왔을 때 쿼리를 받아서 있으면 post요청
    const query = this.props.location.search;
    if (query) {
      const split = query.split("?code=")[1];
      const code = split.slice(0, split.indexOf("&"));
      fetch("/auth/social", {
        method: "post",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(code),
        credentials: 'include'
      })
        .then(res => {
          if (res.status === 200 || 201 || 304) {
            this.props.history.push("/roomlist")
          } else {
            alert("인증 실패 다시 시도해주세요")
            this.props.history.push("/intro")
          }
        })
    }
  }

  render() {
    return (
      <div>
        소셜로그인
      </div>
    );
  }

}

export default withRouter(SocialLogin);
