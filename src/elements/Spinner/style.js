import styled from "styled-components";

export const Spin = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 4px solid rgba(46,46,46, 0.6);
  border-top: 4px solid #fb2ba7;

  animation: spin .8s infinite linear;

  @keyframes spin{
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
`

