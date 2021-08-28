import styled from 'styled-components';

export const Container = styled.button`
    padding: 20px 40px;
    margin: 40px 0;

    border: none;
    border-radius: 8px;
    box-shadow: 1px 1px 4px 3px #333333;

    background-color: #FF70A6;

    color: white;
    font-size: 1.625rem;
    font-weight: 600;

    cursor: pointer;
    z-index: 99;

    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #F49097;
        box-shadow: 1px 1px 10px 3px #FF70A680;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;

        &:hover {
            background-color: #FF70A6;
            box-shadow: none;
        }
    }
`;