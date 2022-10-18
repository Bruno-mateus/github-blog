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
        font-size:1rem ;
    }
    body,textarea,input,button{
        font-family: 'Nunito', sans-serif;
        }
h1,h2,h3,h4,h5,h6{
    color:${({ theme }) => theme.title}
}
`
