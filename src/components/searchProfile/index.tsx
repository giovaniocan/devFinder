import { SearchContainer, MagnifyingGlassButton, SearchButton } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

interface Props {
  handleFindUser: () => void
  handleChangeUsername: (data: string) => void
}

export function SearchProfile({ handleFindUser, handleChangeUsername }: Props) {
  return (
    <SearchContainer>
      <MagnifyingGlassButton onClick={handleFindUser}>
        <MagnifyingGlass size={40} color="#0d71ff" />
      </MagnifyingGlassButton>

      <input
        type="text"
        placeholder="Search GitHub Username"
        onChange={(data) => handleChangeUsername(data.currentTarget.value)}
      />
      <SearchButton onClick={handleFindUser}>Search</SearchButton>
    </SearchContainer>
  )
}
