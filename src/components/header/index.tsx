import { HeaderContainer, ThemeMode } from './styles'
import { Moon, Sun } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

interface HeaderProps {
  toggleTheme(): void
}

export function Header({ toggleTheme }: HeaderProps) {
  const { title } = useContext(ThemeContext)
  return (
    <HeaderContainer>
      <h1>Devfinder</h1>
      <ThemeMode onClick={toggleTheme}>
        <h2>{title === 'dark' ? 'light' : 'dark'}</h2>
        <button>
          {title === 'dark' ? (
            <Sun size={27} weight="fill" color="#fff" />
          ) : (
            <Moon size={27} weight="fill" />
          )}
        </button>
      </ThemeMode>
    </HeaderContainer>
  )
}
