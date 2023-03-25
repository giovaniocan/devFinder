import { SearchContainer, MagnifyingGlassButton, SearchButton } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export function SearchProfile() {
  return (
    <SearchContainer>
      <MagnifyingGlassButton>
        <MagnifyingGlass size={40} color="#0d71ff" />
      </MagnifyingGlassButton>

      <input type="text" placeholder="Search GitHub Username" />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  )
}
