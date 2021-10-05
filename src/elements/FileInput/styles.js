import styled from 'styled-components';

export const Container = styled.div`
    input {
        width: auto;
        
        opacity: 0;
        position: absolute;
        z-index: -1;
    }
    

    label {
        font-size: 1.625rem;
        font-weight: 500;
        color: white;

        cursor: pointer;
    }
`;