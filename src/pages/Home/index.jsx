import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import '../../util/addons/p5.sound';
import { Container } from './styles';
import Button from '../../elements/Button';
import FileInput from '../../elements/FileInput';
import { useApplicationContext } from '../../context/ApplicationContext';
import { useHistory } from 'react-router-dom';
import { NUMBER_OF_COLORS_IN_PALETTE, THIRTY_SECONDS } from '../../util/constants';

const Home = () => {
    const { song, preparePalette } = useApplicationContext();
    const history = useHistory();

  let fft;
  const frequencyArray = [];

  const sketch = (p5) => {
    p5.setup = () => {
      fft = new window.p5.FFT(0.9, 128);
    };

    p5.draw = () => {
      fft.analyze();
      if(song && song.isPlaying()) {
        frequencyArray.push(fft.getEnergy(0.3, 128));
      }
    }
  }

  function toggleSong() {
      song.play();
      setTimeout(() => {
        song.pause();
        preparePalette(frequencyArray.length/NUMBER_OF_COLORS_IN_PALETTE, frequencyArray);
        history.push("/palette");
      }, THIRTY_SECONDS);
  }

  return (
    <Container>
      <P5Wrapper sketch={sketch} />
      <FileInput />
      <Button toggleSong={toggleSong}>gerar paleta</Button>
    </Container>
  
  );
}

export default Home;