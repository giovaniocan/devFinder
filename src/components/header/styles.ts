import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  width: 100%;

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
`

export const ThemeMode = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    font-variant: small-caps; // deixar tudo em maiusculo
    letter-spacing: 4px; // espaçamento entre as letras
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    outline: none;
    &:focus {
      outline: none;
      border: 0;
    }
  }
`
