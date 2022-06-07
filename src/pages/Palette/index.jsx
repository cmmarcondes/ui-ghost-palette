import React, { useCallback, useEffect } from "react";
import { useApplicationContext } from "../../context/ApplicationContext";
import { Body, Color, Palette } from "../../elements";
import { persistPalette } from "../../firebase-config/config";

const Palettes = () => {
  const { paletteArray } = useApplicationContext();
  const { songName } = useApplicationContext();

  const persistPaletteInFirestore = useCallback(async () => {
    await persistPalette(paletteArray, songName);
  }, [paletteArray, songName]);

  useEffect(() => persistPaletteInFirestore(), [persistPaletteInFirestore]);

  return (
    <Body>
      <h2>Pronto! Aqui está a paleta de cores da música {songName}!</h2>
      <Palette>
        {paletteArray.map((hex) => {
          return (
            <Color key={hex} hex={hex}>
              #
            </Color>
          );
        })}
      </Palette>
    </Body>
  );
};

export default Palettes;
