import React from "react";
import RegistrationForm from "../../compositions/RegistrationForm";
import { Container } from "./styles";

const Registration = () => {
  return (
    <Container>
      <div className="form-wrapper">
        <RegistrationForm></RegistrationForm>
      </div>
    </Container>
  );
};

export default Registration;
