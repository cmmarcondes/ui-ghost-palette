import React, { useCallback } from "react";
import ReactFacebookLogin from "react-facebook-login";
import { useHistory } from "react-router";
import { useFacebookContext } from "../../context/FacebookContext";
import { LoginService } from "../../service/LoginService";
import { Container } from "./styles";

const Login = () => {
  const { handleSetPicture } = useFacebookContext();
  const history = useHistory();

  const facebookResponse = useCallback(async (res) => {
    handleSetPicture(res.picture.data.url);
    const loginService = new LoginService();
    await loginService
      .logar({
        name: res.name,
        email: res.email,
        userID: res.userID,
      })
      .then(() => {
        history.push("/home");
      });
  }, []);

  return (
    <Container>
      <ReactFacebookLogin
        appId="3006086256296516"
        fields="name, email, picture"
        callback={facebookResponse}
      />
    </Container>
  );
};

export default Login;
