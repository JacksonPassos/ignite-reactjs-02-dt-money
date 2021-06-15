import styled from "styled-components";

export const Container = styled.form`
    h2 {
        font-size: 1.5rem;
        color: var(--text-title);
        height: 2.25rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border: 1px solid #D7D7D7;
        background: var(--input-background);
        border-radius: 0.3125rem;
        font-size: 1rem;
        font-weight: 400;

        &::placeholder{
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }

    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }


    }

`;