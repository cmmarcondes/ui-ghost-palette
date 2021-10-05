import React from 'react'
import ReactFacebookLogin from 'react-facebook-login'
import { Container } from './styles'

const Login = () => {
    function facebookResponse(res) {
        console.log(res);
    }
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
