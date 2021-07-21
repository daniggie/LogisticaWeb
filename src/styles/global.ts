import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background: linear-gradient(180deg, #251C36 5.89%, rgba(65, 41, 117, 0.71) 36.3%, #251C36 99.73%), #352549;
        color: #fff;
        -webit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6{
        font-weight: 500;
    }

    burron {
        cursor: pointer;
    }

`;
