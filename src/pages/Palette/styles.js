import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100%;
    height: 100vh;

    @media only screen and (max-width: 652px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Colors = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    color: transparent;

    width: 10%;
    height: 100vh;

    background-color: ${({ hex }) => `#${hex}`};
    
    transition: all 0.2s ease-in-out;

    cursor: pointer;

/*     color: white;
    font-weight: 500;
    font-size: 1.425rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
    letter-spacing: 0.8px; */

    &:hover {
        color: white;
        font-weight: 500;
        font-size: 1.425rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-shadow: 0px 0px 3px rgba(0, 0, 0, 1);
        letter-spacing: 0.8px;
    }

    @media only screen and (max-width: 652px) {
        width: 100%;
    }
`;