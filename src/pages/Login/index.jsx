import React, { useCallback } from 'react'
import ReactFacebookLogin from 'react-facebook-login'
import { LoginService } from '../../service/LoginService';
import { Container } from './styles'

const Login = () => {
    const facebookResponse = useCallback(async(res) => {
        const loginService = new LoginService();
        console.log(res);
        //await loginService.logar(res.name, res.email);

    }, []);

    return (
        <Container>
            <ReactFacebookLogin
                appId="3006086256296516"
                fields="name, email, picture"
                callback={facebookResponse}
            />
        </Container>
    )
}

export default Login
