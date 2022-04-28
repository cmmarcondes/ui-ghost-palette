import styled from 'styled-components';

export const Container = styled.div`
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
    }

    margin-bottom: 16px;
`;