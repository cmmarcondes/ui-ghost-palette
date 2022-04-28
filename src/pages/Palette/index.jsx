import React from "react";
import { useApplicationContext } from "../../context/ApplicationContext";
import { Body, Color, NavBar, Palette } from "../../elements";

const Palettes = () => {
  const { paletteArray } = useApplicationContext();

  return (
    <NavBar>
      <Body>
        <Palette>
          {paletteArray.map((hex) => {
            return <Color hex={hex}>#</Color>;
          })}
        </Palette>
      </Body>
    </NavBar>
  );
};

export default Palettes;
