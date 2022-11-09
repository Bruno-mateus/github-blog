import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { HashRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Routes'
import { PostContextProvider } from './contexts/PostContext'

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={defaultTheme}>
        <PostContextProvider>
          <GlobalStyle />
          <Header />
          <Router />
        </PostContextProvider>
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
