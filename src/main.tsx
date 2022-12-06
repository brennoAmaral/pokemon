import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'
import PokemonSetupContext from './context/PokemonSetupProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PokemonSetupContext>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </PokemonSetupContext>
  </React.StrictMode>
)
