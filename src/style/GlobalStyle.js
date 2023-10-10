import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    overflow: hidden;
    user-select: none;
    box-sizing: border-box;
    border: none;
    transition: all ease 0.25s;
  }
  body {
    height: 100vh;
    width: 100vw;
  }
`