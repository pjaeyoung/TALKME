import React from "react";
import { withRouter } from "react-router-dom";
// import jwtDecode from "jwt-decode";

function SocialLogin(props) {
  //리다이렉트되어서 왔을 때 쿼리를 받아서 있으면 post요청
  const query = props.location.search;
  console.log(window.location.search);
  if (query) {
    const split = query.split("?code=")[1];
    const code = split.slice(0, split.indexOf("&"));
    console.log(code);
    fetch(`https://oauth2.googleapis.com/token?code=${code}&client_id=192549111246-ji6meo3haqck4p6nq3l10hmhvkso45qb.apps.googleusercontent.com&client_secret=pEMK4G7kYYZlPIZj4M9IxYhq&redirect_uri=http://localhost:3000/sociallogin&grant_type=authorization_code`, {
      method: "post"
    })
      .then(res => res.json());
    // .then(data => {
    // console.log(jwtDecode(data.id_token));
    // const { email, name } = jwtDecode(data.id_token);
    // console.log(email, name);
    // })

    return (
      <div>
        소셜로그인
      </div>
    );
  }
}

export default withRouter(SocialLogin);
