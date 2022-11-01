import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Routes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
