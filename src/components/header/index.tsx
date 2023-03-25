import { HeaderContainer, ThemeMode } from './styles'
import { Moon } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <h1>Devfinder</h1>
      <ThemeMode>
        <h2>dark</h2>
        <button>
          <Moon size={27} color="#fff" />
        </button>
      </ThemeMode>
    </HeaderContainer>
  )
}
