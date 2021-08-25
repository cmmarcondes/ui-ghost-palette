/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import P5Wrapper from 'react-p5-wrapper';
import React from 'react';
import './util/addons/p5.sound';
import { Container } from './styles';
import Button from './elements/Button';
import FileInput from './elements/FileInput';
import { useApplicationContext } from './context/ApplicationContext';

function App() {
  const { song } = useApplicationContext();

  const sketch = (p5) => {
    p5.setup = () => {
      new window.p5.FFT(0.9, 128);
    };
  }

  function toggleSong() {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }

  return (
    <Container>
      <P5Wrapper sketch={sketch} />
      <FileInput />
      <Button toggleSong={toggleSong}>gerar paleta</Button>
    </Container>
  
  );
}

export default App;
