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
import { MapPin, Link, Buildings, TwitchLogo } from 'phosphor-react'

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
            <MapPin size={25} />
            Brasil
          </EachBottomInfo>
          <EachBottomInfo>
            <TwitchLogo size={25} />
            Not Available
          </EachBottomInfo>
          <EachBottomInfo>
            <Link size={25} />
            link do portifolio
          </EachBottomInfo>
          <EachBottomInfo>
            <Buildings size={25} />
            IFPR
          </EachBottomInfo>
        </BottomInfo>
      </InfoContainer>
    </DevCardContainer>
  )
}
