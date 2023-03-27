import {
  DevCardContainer,
  InfoContainer,
  HeaderInfo,
  TopInfo,
  MiddleInfo,
  Each,
  BottomInfo,
  EachBottomInfo,
} from './styles'
import { MapPin, Link, Buildings, TwitterLogo } from 'phosphor-react'

export function DevCard() {
  return (
    <DevCardContainer>
      <img src="https://github.com/giovaniocan.png" alt="" />
      <InfoContainer>
        <TopInfo>
          <HeaderInfo>
            <h2>Giovani Apolinario Ocan</h2>
            <span> Joined Oct 14, 2021</span>
          </HeaderInfo>
          <h5>@giovaniocan</h5>
          <span>bio da pessoa</span>
        </TopInfo>
        <MiddleInfo>
          <Each>
            Repos
            <h2>9</h2>
          </Each>
          <Each>
            Followers
            <h2>0</h2>
          </Each>
          <Each>
            Following
            <h2>0</h2>
          </Each>
        </MiddleInfo>
        <BottomInfo>
          <EachBottomInfo>
            <MapPin size={15} color="#fff" weight="fill" />
            Brasil
          </EachBottomInfo>
          <EachBottomInfo>
            <TwitterLogo size={15} color="#fff" weight="fill" />
            Not Available
          </EachBottomInfo>
          <EachBottomInfo>
            <Link size={15} color="#fff" weight="fill" />
            link do portifolio
          </EachBottomInfo>
          <EachBottomInfo>
            <Buildings size={15} color="#fff" weight="fill" />
            IFPR
          </EachBottomInfo>
        </BottomInfo>
      </InfoContainer>
    </DevCardContainer>
  )
}
