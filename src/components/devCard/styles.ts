import styled from 'styled-components'

export const DevCardContainer = styled.div`
  display: grid;
  grid-template-columns: 10rem auto;
  grid-gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  min-height: 400px;
  background: ${(props) => props.theme.colors.baseBackgroundComponent};
  border-radius: 12px;

  padding: 3rem;

  img {
    border-radius: 50%;
    width: 9rem;
    height: 9rem;
  }
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
`

export const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  span {
    color: ${(props) => props.theme.colors.textinput};
  }

  h5 {
    color: ${(props) => props.theme.colors.searchComponent};
    font-size: 1rem;
    font-weight: 400;
  }
`

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const MiddleInfo = styled.div`
  background: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  display: flex;
  padding: 1.5rem ;
  align-items: center;
  justify-content: space-between;
`

export const Each = styled.div``

export const BottomInfo = styled.div``

export const EachBottomInfo = styled.div``
