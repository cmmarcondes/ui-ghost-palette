import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  z-index: 2;

  .modal-holder {
    position: absolute;
    height: 25%;
    width: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    color: white;
    padding: 30px;
    background-color: red;
    border-radius: 6px;

    button {
      outline: none;
      border: none;
      background-color: white;
      color: red;
      padding: 10px 20px;
      border-radius: 6px;
    }
  }
`;
