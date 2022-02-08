import styled from 'styled-components';

export const Container = styled.button`
    padding: 15px 30px;
    margin: 40px 0;

    border: none;
    border-radius: 8px;
    outline: none;

    background-color: #fb2ba7;
    color: whitesmoke;

    font-size: 1.225rem;
    font-weight: 600;

    cursor: pointer;
    z-index: 99;

    transition: all 0.2s ease-in-out;

    &:disabled {
        cursor: not-allowed;
    }


    &:hover{
        animation: blink .8s infinite ease-in-out;
    }

    @keyframes blink{
        0%{
            box-shadow: 1px 1px 5px 3px #000080;
            text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
        }

        33%{
            box-shadow: 1px 1px 30px 3px #000080;
            text-shadow: 0px 0px 5px rgba(255, 255, 255, 1);
        }

        100%{
            box-shadow: 1px 1px 5px 3px #000080;
            text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
        }
    }
`;