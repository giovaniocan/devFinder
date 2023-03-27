import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Globalstyle } from '../src/styles/global'
import { DevCard } from './components/devCard'
import { Header } from './components/header'
import { SearchProfile } from './components/searchProfile'
import { AppContainer } from './homeStyled'
import dark from './types/themes/dark'
import light from './types/themes/light'

export function App() {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <AppContainer>
        <Header toggleTheme={toggleTheme} />
        <SearchProfile />
        <DevCard />
      </AppContainer>
    </ThemeProvider>
  )
}
