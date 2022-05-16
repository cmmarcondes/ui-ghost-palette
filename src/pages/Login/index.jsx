/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import ReactFacebookLogin from "react-facebook-login";
import { useHistory } from "react-router";
import { useFacebookContext } from "../../context/FacebookContext";
import { LoginService } from "../../service/LoginService";
import { APP_ID } from "../../util/constants";
import { Container } from "./styles";

const Login = () => {
  const { handleSetPicture, isFacebookButtonLoading, toggleFacebookButton } =
    useFacebookContext();

  const history = useHistory();

  const facebookResponse = useCallback(async (res) => {
    toggleFacebookButton(true);
    const loginService = new LoginService();

    try {
      await loginService.logar({
        email: res.email,
        id: res.userID,
      });

      history.push("/home");
      handleSetPicture(res.picture.data.url);
      toggleFacebookButton(false);
    } catch {
      toggleFacebookButton(false);
    }
  }, []);

  return (
    <Container>
      <ReactFacebookLogin
        appId={APP_ID}
        fields="name, email, picture"
        callback={facebookResponse}
        isDisabled={isFacebookButtonLoading}
        buttonStyle={{ borderRadius: '6px' }}
      />
    </Container>
  );
};

export default Login;
