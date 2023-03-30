import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 3rem;
  max-width: 960px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.baseBackgroundComponent};
  padding: 1.1rem 1rem;
  border-radius: 16px;

  input {
    margin-left: 2rem;
    width: 100%;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.importantText};
  }
  input::placeholder {
    color: ${(props) => props.theme.colors.textinput};
    font-size: 1rem;
  }

  svg {
    color: ${(props) => props.theme.colors.searchComponent};
  }

  @media (max-width: 500px) {
    margin-top: 1rem;
  }
`

export const MagnifyingGlassButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
`
export const SearchButton = styled.button`
  color: ${(props) => props.theme.colors.importantText};
  background: ${(props) => props.theme.colors.searchComponent};
  padding: 0.8rem 1.3rem;
  border: 0;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 500px) {
    display: none;
  }
`
