import { SearchContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'

export function SearchProfile() {
  return (
    <SearchContainer>
      <MagnifyingGlass size={40} color="#0d71ff" />
      <input type="text" placeholder="Search GitHub Username" />
      <button>Search</button>
    </SearchContainer>
  )
}
