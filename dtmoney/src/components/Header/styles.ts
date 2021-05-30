import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 8.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        padding: 0rem 2rem;
        background: var(--blue-light);
        color: var(--shape);
        border: 0;
        border-radius: 0.3125rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`;