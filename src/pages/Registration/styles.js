import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(5px);

  width: 100%;
  height: 100vh;
  
  .form-wrapper {
    padding: 30px;
    background-color: white;
    border-radius: 6px;
  }
`;
