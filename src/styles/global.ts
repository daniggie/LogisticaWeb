import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: linear-gradient(180deg, #231E2E 3.95%, rgba(71, 61, 90, 0.77) 48.91%, #231E2E 92.27%), #000000;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;