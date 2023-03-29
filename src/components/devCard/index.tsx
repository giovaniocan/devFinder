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
import { User } from '../../App'

interface Props {
  user: User
}

export function DevCard({ user }: Props) {
  return (
    <DevCardContainer>
      <img src={user.avatar_url} alt="" />
      <InfoContainer>
        <TopInfo>
          <HeaderInfo>
            <h2>{user.name}</h2>
            <span> {user.created_at}</span>
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
