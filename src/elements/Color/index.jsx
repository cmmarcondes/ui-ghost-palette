import React from "react";

import { ColorHex, Frame } from "./style";

const Color = ({ children, hex, desactiveHover }) => {
  return (
    <Frame color={hex}>
      <ColorHex desactiveHover={desactiveHover}>
        {!desactiveHover && children + hex}
      </ColorHex>
    </Frame>
  );
};

export default Color;
