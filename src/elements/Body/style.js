import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(12,12,12, 0.4);

    width: 100%;
    height: calc(100vh - var(--navbar-height));
    overflow: hidden;

    h2 {
        color: white;
        font-size: 2rem;
    }
`