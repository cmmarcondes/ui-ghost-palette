import React, { useCallback, useEffect, useState } from "react";
import "../../util/addons/p5.sound";
import Button from "../../elements/Button";
import FileInput from "../../elements/FileInput";
import p5 from "p5";
import { useApplicationContext } from "../../context/ApplicationContext";
import { useHistory } from "react-router-dom";
import {
  NUMBER_OF_COLORS_IN_PALETTE,
  THIRTY_SECONDS,
} from "../../util/constants";
import { Body, Color, Palette, ProgressBar } from "../../elements";
import { HowToUse } from "./styles";

const Home = () => {
  const { song, songName, preparePalette } = useApplicationContext();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [p5Prototypes, setP5Prototypes] = useState();
  const [preparingPalette, setPreparingPalette] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const frequencyArray = [];

  const sketch = useCallback(
    (p) => {
      let fft;
      p.setup = () => {
        fft = new p5.FFT(0.9, 128);
        setP5Prototypes(p.__proto__);
      };

      p.draw = () => {
        fft.analyze();
        if (song && song.isPlaying()) {
          frequencyArray.push(fft.getEnergy(0.3, 128));
        }
      };
    },
    [frequencyArray, song]
  );

  const [toColors, setToColors] = useState([]);

  function toggleSong() {
    song.play();
    p5Prototypes.getAudioContext().resume();
    setPreparingPalette(true);
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

  useEffect(() => {
    if (song) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }
  }, [song]);

  useEffect(() => new p5(sketch), [sketch]);

  return (
    <Body>
      {!preparingPalette && (
        <>
          <FileInput loadSound={p5Prototypes} />
          <HowToUse>
            Clique no texto acima e selecione a música que você quer transformar
            em paleta!
          </HowToUse>
        </>
      )}
      {preparingPalette && (
        <HowToUse>
          Estamos analisando a música {songName}, por favor aguarde
        </HowToUse>
      )}
      <br />
      {song && !preparingPalette && (
        <Button toggleSong={toggleSong} disabled={loading}>
          GERAR PALETA
        </Button>
      )}

      {preparingPalette && <ProgressBar />}

      <Palette>
        {toColors.map((hex) => {
          return (
            <Color key={hex} hex={hex}>
              #{hex}
            </Color>
          );
        })}
      </Palette>
    </Body>
  );
};

export default Home;
