import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 16px;

  input {
    width: auto;

    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  label {
    font-size: 46px;
    font-weight: 500;
    color: white;
    cursor: pointer;

    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }
`;
