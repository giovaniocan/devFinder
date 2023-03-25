import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      background: string
      importantText: string
      baseBackgroundComponent: string
      anotherText: string
      searchComponent: string
      textinput: string
    }
  }
}
