import styled from 'styled-components'

export const SearchContainer = styled.form`
  margin-top: 3rem;
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
    font-size: 1.2rem;
  }

  svg {
    color: ${(props) => props.theme.colors.searchComponent};
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
`
