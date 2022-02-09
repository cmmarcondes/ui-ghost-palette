/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import ReactFacebookLogin from "react-facebook-login";
import { useHistory } from "react-router";
import { useFacebookContext } from "../../context/FacebookContext";
import { LoginService } from "../../service/LoginService";
import { APP_ID } from "../../util/constants";
import { Container } from "./styles";

const Login = () => {
  const { handleSetPicture } = useFacebookContext();
  const history = useHistory();

  const facebookResponse = useCallback(async (res) => {
    handleSetPicture(res.picture.data.url);
    const loginService = new LoginService();
    await loginService
      .logar({
        email: res.email,
        id: res.userID,
      })
      .then(() => {
        history.push("/home");
      });
  }, []);

  return (
    <Container>
      <ReactFacebookLogin
        appId={APP_ID}
        fields="name, email, picture"
        callback={facebookResponse}
      />
    </Container>
  );
};

export default Login;
