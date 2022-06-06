import React from "react";
import { Color } from "../../elements";
import { Container } from "./styles";

const Collection = ({ palettes }) => {
  return (
    <Container>
      {palettes &&
        palettes.map((palette) => (
          <div className="palette-window">
            <span>
              {palette.song}
              <div>
                {palette.hex.map((hex) => (
                  <Color key={hex} hex={hex} desactiveHover>
                    #
                  </Color>
                ))}
              </div>
            </span>
          </div>
        ))}
    </Container>
  );
};

export default Collection;
