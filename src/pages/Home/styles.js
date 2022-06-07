import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: calc(100vh - var(--navbar-height));
    overflow: hidden;
`;

export const HowToUse = styled.p`
    color: white;
`
