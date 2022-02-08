import React from "react";

import {
  ColorHex,
  Frame
} from "./style"

const Color = ({children, hex}) => {
  return (
    <Frame color={hex}>
      <ColorHex>
        {children+hex}
      </ColorHex>
    </Frame>
  )
}

export default Color;