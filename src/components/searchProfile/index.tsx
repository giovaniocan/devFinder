import { SearchContainer, MagnifyingGlassButton, SearchButton } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

export function SearchProfile() {
  const [search, setSearch] = useState('')

  function handleNewSearch(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setSearch(event.target.value)
  }

  function handleCreatSearch() {
    event?.preventDefault()
    console.log(search)
    setSearch(' ')
  }
  return (
    <SearchContainer onSubmit={handleCreatSearch}>
      <MagnifyingGlassButton>
        <MagnifyingGlass size={40} color="#0d71ff" />
      </MagnifyingGlassButton>

      <input
        type="text"
        placeholder="Search GitHub Username"
        onChange={handleNewSearch}
      />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  )
}
