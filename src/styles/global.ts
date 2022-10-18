import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background-color:${({ theme }) => theme.backgroundColor} ;
        color:${({ theme }) => theme.textColor};
        -webkit-font-smoothing:antialiased;
    }
    body,textarea,input,button{
        font-family: 'Nunito', sans-serif;
        }
`
