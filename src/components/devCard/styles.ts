import styled from 'styled-components'

export const InitialContainer = styled.div`
  margin-top: 2rem;
  max-width: 960px;
  width: 100%;
  min-height: 400px;
  background: ${(props) => props.theme.colors.baseBackgroundComponent};
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  font-size: 1rem;
`

export const DevCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  max-width: 960px;
  width: 100%;
  min-height: 400px;
  background: ${(props) => props.theme.colors.baseBackgroundComponent};
  border-radius: 25px;

  padding: 3rem;

  @media (max-width: 500px) {
    padding: 1rem 2.5rem;
    display: flex;
  }

  img {
    border-radius: 50%;
    width: 9rem;
    height: 9rem;

    @media (max-width: 500px) {
      position: absolute;
      width: 4rem;
      height: 4rem;
    }
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;

  @media (max-width: 500px) {
    gap: 0.5rem;
  }
`

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  span {
    max-width: 500px;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.textinput};

    @media (max-width: 500px) {
      font-size: 0.875rem;
    }
  }

  h5 {
    color: ${(props) => props.theme.colors.searchComponent};
    font-size: 1rem;
    font-weight: 400;

    @media (max-width: 500px) {
      margin-top: 1rem;
    }
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme.colors.textinput};

    @media (max-width: 500px) {
      display: none;
    }
  }
  h2 {
    font-size: 1.75rem;

    @media (max-width: 500px) {
      padding-left: 7rem;
      font-size: 1.25rem;
    }
  }
`

export const MiddleInfo = styled.div`
  background: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  gap: 9rem;

  @media (max-width: 500px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    font-size: 1rem;
  }
`

export const Each = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textinput};

  h2 {
    color: ${(props) => props.theme.colors.importantText};
  }

  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`

export const BottomInfo = styled.div`
  margin-top: 1.75rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  @media (max-width: 500px) {
    margin-top: 1.5rem;
    grid-template-columns: 1fr;
    gap: 0.3rem;
  }
`

export const EachBottomInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  font-weight: bold;

  @media (max-width: 500px) {
    font-size: 0.875rem;
  }
`

export const NotAvailable = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.colors.textinput};
`
