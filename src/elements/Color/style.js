import styled  from "styled-components";

export const ColorHex = styled.p`
  color: whitesmoke;
  letter-spacing: 2px;
  font-size: 0.775rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  opacity: 0;
  text-transform: uppercase;
`

export const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 500px;
  min-width: 125px;

  background-color: ${({color}) => `#${color}`};
  border-radius: 40px 0px 40px 0px;
  box-shadow: #000000 5px 5px 10px;

  & + & {
    margin-left: 32px;
  }

  &:hover > p{
    opacity: 1;
    transform: scale(1.5);
  }
`