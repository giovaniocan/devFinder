import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ThemeMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    font-variant: small-caps; // deixar tudo em maiusculo
    letter-spacing: 4px; // espaçamento entre as letras
  }
`
