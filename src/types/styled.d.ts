import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    importantText: string
    baseBackgroundComponent: string
    anotherText: string
  }
}
