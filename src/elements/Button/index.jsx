
import React from 'react';
import { useApplicationContext } from '../../context/ApplicationContext';
import { Container } from './styles';

function Button({ children, toggleSong }) {
  const { song } = useApplicationContext();

  return (
    <Container onClick={toggleSong} disabled={!song} >
        {children}
    </Container>
  );
}

export default Button;
