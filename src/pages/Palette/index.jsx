import React, { useCallback, useEffect } from "react";
import { useApplicationContext } from "../../context/ApplicationContext";
import { Body, Color, NavBar, Palette } from "../../elements";
import { persistPalette } from "../../firebase-config/config";

const Palettes = () => {
  const { paletteArray } = useApplicationContext();

  const persistPaletteInFirestore = useCallback(async () => {
    await persistPalette(paletteArray);
  }, [paletteArray]);

  useEffect(() => persistPaletteInFirestore(), [persistPaletteInFirestore]);

  return (
    <NavBar>
      <Body>
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
    </NavBar>
  );
};

export default Palettes;
