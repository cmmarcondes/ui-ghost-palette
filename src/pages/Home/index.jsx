import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import Button from "../../elements/Button";
import FileInput from "../../elements/FileInput";
import { useApplicationContext } from "../../context/ApplicationContext";
import { useHistory } from "react-router-dom";
import {
  NUMBER_OF_COLORS_IN_PALETTE,
  THIRTY_SECONDS,
} from "../../util/constants";
import { Body, Color, NavBar, Palette, Spinner } from "../../elements";
import { HowUse } from "./styles";

const Home = () => {
  const { song, preparePalette } = useApplicationContext();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  let fft;
  const frequencyArray = [];

  const sketch = (p5) => {
    p5.setup = () => {
      fft = new window.p5.FFT(0.9, 128);
    };

    p5.draw = () => {
      fft.analyze();
      if (song && song.isPlaying()) {
        frequencyArray.push(fft.getEnergy(0.3, 128));
      }
    };
  };
  const [toColors, setToColors] = useState([]);

  function toggleSong() {
    song.play();
    setLoading(true);
    setTimeout(() => {
      song.pause();
      preparePalette(
        frequencyArray.length / NUMBER_OF_COLORS_IN_PALETTE,
        frequencyArray
      );
      setToColors(frequencyArray);
      history.push("/palette");
    }, THIRTY_SECONDS);
  }

  return (
    <NavBar>
      <Body>
        <FileInput />

        {!loading ? (
          <>
            <HowUse>
              Clique no texto acima e selecione a música que você quer
              transformar em paleta!
            </HowUse>
            {song && <Button toggleSong={toggleSong}>GERAR PALETA</Button>}
          </>
        ) : (
          <Spinner />
        )}
        <Palette>
          {toColors.map((hex) => {
            return <Color hex={hex}>#{hex}</Color>;
          })}
        </Palette>
        <P5Wrapper sketch={sketch} />
      </Body>
    </NavBar>
  );
};

export default Home;
