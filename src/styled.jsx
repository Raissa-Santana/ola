import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;]
    }
`

export const Body =styled.body`
    background-color: yellowgreen;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`