import { ThemeProvider } from 'styled-components'
import { Globalstyle } from '../src/styles/global'
import dark from './types/themes/dark'
/* import light from './types/themes/light' */

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Globalstyle />
      hello bb
      <h1>teste</h1>
    </ThemeProvider>
  )
}
