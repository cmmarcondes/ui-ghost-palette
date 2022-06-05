import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  width: 100%;
  height: 100vh;
  gap: 15px;

  .palette-window {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    max-width: 25%;
    height: 25%;
    background-color: white;
    border-radius: 6px;
    flex-wrap: wrap;
    padding: 20px;
  }
`;
