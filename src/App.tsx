import { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { Globalstyle } from '../src/styles/global'
import { DevCard } from './components/devCard'
import { Header } from './components/header'
import { SearchProfile } from './components/searchProfile'
import { AppContainer } from './homeStyled'
import { api } from './lib/axios'
import dark from './types/themes/dark'
import light from './types/themes/light'
import { usePersistedState } from './utils/usePersistedState'

export interface User {
  name: string
  username: string
  avatar_url: string
  html_url: string
  bio: string
  followers: number
  following: number
  company: string
  location: string
  public_repos: number
  created_at: string
  twitter_username: string
  blog: string
}

export function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'theme',
    dark,
  ) /** esse <DefaultTheme esta ai para adicionar tipagem> */

  const [username, SetUsername] = useState('')
  const [userData, setUserData] = useState<User>({} as User)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  function handleChangeUsername(data: string) {
    SetUsername(data)
  }

  async function handleFindUser() {
    const response = await api.get<User>(`${username}`)
    response.data.username = username
    setUserData(response.data)
  }

  return (
    <ThemeProvider theme={theme}>
      <Globalstyle />
      <AppContainer>
        <Header toggleTheme={toggleTheme} />
        <SearchProfile
          handleFindUser={handleFindUser}
          handleChangeUsername={handleChangeUsername}
        />
        <DevCard user={userData} />
      </AppContainer>
    </ThemeProvider>
  )
}
