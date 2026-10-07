import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body{
    font-family: Arial. Helvetica, sans-serif;
    background-color: #FFF8F2;
    }

    button {
    border: none;
    cursor: pointer;
    }
`;
