import {createGlobalStyle} from 'styled-components'

<style>@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');</style> 

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: 0;
        font-size: 16px;
        text-decoration: none;
        border: none;
        outline: none;
        box-sizing: border-box;
        font-family: 'Roboto Mono', monospace;
    }
`; 