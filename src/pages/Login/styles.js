import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  padding: 20px;

  text-align: center;
  backdrop-filter: blur(5px);

  .MuiFormHelperText-root {
    position: absolute;
    bottom: -23px;
  }

  a {
    text-decoration: none;
  }

  .error-handler {
    color: red;
  }

  .login-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 300px;
    padding: 30px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0px 0px 8px #00000022;

    h2 {
      font-family: "Satisfy", cursive;
      font-size: 3.5rem;
      transform: rotate(-6deg);
    }

    button[type="submit"] {
      font-size: 1rem;
    }

    .separator {
      display: flex;
      position: relative;
      justify-content: center;
      width: 100%;
      padding: 20px 0;

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
  }

  button {
    position: relative;
    padding: 10px 15px;
    outline: none;
    border-radius: 6px;
    border: none;
    color: white;
    font-size: 1.375rem;
    width: 300px;
    text-align: center;
    cursor: pointer;

    i {
      position: absolute;
      left: 15px;
    }

    .fa-google {
      background: conic-gradient(
          from -45deg,
          #ea4335 110deg,
          #4285f4 90deg 180deg,
          #34a853 180deg 270deg,
          #fbbc05 270deg
        )
        73% 55%/150% 150% no-repeat;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
    }

    &.facebook {
      background-color: #4267b2;
      box-shadow: 0px 0px 8px #00000022;
    }

    &.google {
      background-color: #ffffff;
      color: #272727;
      box-shadow: 0px 0px 8px #00000022;
    }
  }
`;
