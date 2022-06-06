import React from "react";
import { Spinner } from "..";
import { Container } from "./styles";

function Button({ children, toggleSong, ...props }) {
  return props.disabled ? (
    <Spinner />
  ) : (
    <Container onClick={toggleSong} {...props}>
      {children}
    </Container>
  );
}

export default Button;
