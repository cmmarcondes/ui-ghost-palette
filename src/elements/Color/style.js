import styled from "styled-components";

export const ColorHex = styled.p`
  color: whitesmoke;
  letter-spacing: 1.8px;
  font-size: 0.675rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  opacity: 0;
  text-transform: uppercase;
  width: ${({ desactiveHover }) => (desactiveHover ? "30px" : 'auto')};
`;

export const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 100%;
  width: 8%;

  background-color: ${({ color }) => `#${color}`};
  border-radius: 40px 0px 40px 0px;
  box-shadow: 0 0 8px #00000029;

  &:hover > p {
    opacity: 1;
    transform: scale(1.5);
  }
`;
