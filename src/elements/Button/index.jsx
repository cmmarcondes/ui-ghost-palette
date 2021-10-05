
import React from 'react';
import { useApplicationContext } from '../../context/ApplicationContext';
import { Container } from './styles';

function Button({ children, toggleSong }) {
  const { song } = useApplicationContext();

  return (
    <Container onClick={toggleSong} disabled={!song || song.isPlaying()} >
        {children}
    </Container>
  );
}

export default Button;
