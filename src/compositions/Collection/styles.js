import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  height: 100vh;
  justify-content: space-evenly;

  .palette-window {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    height: 25%;
    background-color: white;
    border-radius: 6px;
    padding: 20px;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      gap: 15px;

      font-size: 1.375rem;
      font-weight: 500;

      div {
          display: flex;
          gap: 2px;
          width:100%;
          height: 100%;
      }
    }
  }
`;
