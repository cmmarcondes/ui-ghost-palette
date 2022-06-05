import React from "react";
import { Color } from "../../elements";
import { Container } from "./styles";

const Collection = ({ palettes }) => {
  return (
    <Container>
      {palettes &&
        palettes.map((palette) => (
          <div className="palette-window">
            {palette.hex.map((hex) => (
              <Color key={hex} hex={hex} desactiveHover>
                #
              </Color>
            ))}
          </div>
        ))}
    </Container>
  );
};

export default Collection;
