import React from "react";

import {
  ColorHex,
  Frame
} from "./style"

const Color = ({children}) => {
  return (
    <Frame color={children}>
      <ColorHex>
        {children}
      </ColorHex>
    </Frame>
  )
}

export default Color;