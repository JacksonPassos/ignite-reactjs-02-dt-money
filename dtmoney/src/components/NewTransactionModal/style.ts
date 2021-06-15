import styled from "styled-components";
import { darken } from 'polished'

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

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin: 1rem 0;

`

interface RadioBoxProps {
    isActive: boolean;
}

export const RadioBox = styled.button<RadioBoxProps>`
    background: ${(props)=> props.isActive ? '#12A454' : 'transparent' };
    width: 14.75rem;
    height: 4rem;
    border: 1.5px solid #969CB3;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.5, '#969CB3')};
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title)
    }

`