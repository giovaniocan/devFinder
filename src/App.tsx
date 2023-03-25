import { ThemeProvider } from 'styled-components'
import { Globalstyle } from '../src/styles/global'
import { Header } from './components/header'
import { SearchProfile } from './components/searchProfile'
import { AppContainer } from './homeStyled'
import dark from './types/themes/dark'
/* import light from './types/themes/light' */

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Globalstyle />
      <AppContainer>
        <Header />
        <SearchProfile />
      </AppContainer>
    </ThemeProvider>
  )
}
