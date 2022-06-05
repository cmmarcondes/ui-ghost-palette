import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 300px;
  gap: 25px;

  .MuiFormHelperText-root {
    position: absolute;
    bottom: -23px;
  }
  
  .error-handler {
    color: red;
  }

  .separator {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;

    &:before {
      content: "";
      position: absolute;
      border-bottom: 1px solid #99999950;
      width: 100%;
      top: 50%;
      bottom: 50%;
      translate: calc(50%, 50%);
      z-index: 1;
    }

    h4 {
      font-size: 0.875rem;
      padding: 0 7px;
      background-color: white;
      z-index: 2;
      color: #999999;
    }
  }

  .already-registered {
    text-align: center;
    width: 100%;

    a {
      font-size: 0.975rem;
      color: #575757;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
