import React from "react";
import { withRouter } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

class SocialLogin extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //리다이렉트되어서 왔을 때 쿼리를 받아서 있으면 post요청
    const query = this.props.location.search;
    console.log(query);
    if (query) {
      const split = query.split("?code=")[1];
      const code = split.slice(0, split.indexOf("&"));
      fetch(`https://oauth2.googleapis.com/token?code=${code}&client_id=192549111246-ji6meo3haqck4p6nq3l10hmhvkso45qb.apps.googleusercontent.com&client_secret=${process.env.REACT_APP_CLIENT_PASSWORD}&redirect_uri=http://localhost:3000/sociallogin&grant_type=authorization_code`, {
        method: "post"
      })
        .then(res => res.json())
        .then(({ id_token }) => {
          if (id_token) {
            console.log("post성공")
            return fetch('/auth/social', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify({ id_token }),
            })
              .then(res => {
                console.log(res.status)
                if (res.status === 200 || 201 || 304) {
                  console.log("here")
                  this.props.history.push("/roomlist")
                } else {
                  alert("인증 실패 다시 시도해주세요")
                  this.props.history.push("/intro")
                }
              })
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
