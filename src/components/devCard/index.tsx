import {
  DevCardContainer,
  InfoContainer,
  HeaderInfo,
  TopInfo,
  MiddleInfo,
  Each,
  BottomInfo,
  EachBottomInfo,
  NotAvailable,
  InitialContainer,
} from './styles'
import { MapPin, Link, Buildings, TwitterLogo } from 'phosphor-react'
import { User } from '../../App'

interface Props {
  user: User
}

export function DevCard({ user }: Props) {
  console.log(user)
  return (
    <>
      {user.name ? (
        <DevCardContainer>
          <img src={user.avatar_url} alt="" />
          <InfoContainer>
            <TopInfo>
              <HeaderInfo>
                <h2>{user.name}</h2>
                <span> Joined {user.date}</span>
              </HeaderInfo>
              <h5>@{user.username}</h5>
              <span>{user.bio}</span>
            </TopInfo>
            <MiddleInfo>
              <Each>
                Repos
                <h2>{user.public_repos}</h2>
              </Each>
              <Each>
                Followers
                <h2>{user.followers}</h2>
              </Each>
              <Each>
                Following
                <h2>{user.following}</h2>
              </Each>
            </MiddleInfo>
            <BottomInfo>
              <EachBottomInfo>
                <MapPin size={15} color="#fff" weight="fill" />
                {user.location === null ? (
                  <NotAvailable>Not Available</NotAvailable>
                ) : (
                  user.location
                )}
              </EachBottomInfo>
              <EachBottomInfo>
                <TwitterLogo size={15} color="#fff" weight="fill" />
                {user.twitter_username === null ? (
                  <NotAvailable>Not Available</NotAvailable>
                ) : (
                  user.twitter_username
                )}
              </EachBottomInfo>
              <EachBottomInfo>
                <Link size={15} color="#fff" weight="fill" />
                {user.blog === null ? (
                  <NotAvailable>Not Available</NotAvailable>
                ) : (
                  user.blog
                )}
              </EachBottomInfo>
              <EachBottomInfo>
                <Buildings size={15} color="#fff" weight="fill" />
                {user.company === null ? (
                  <NotAvailable>Not Available</NotAvailable>
                ) : (
                  user.company
                )}
              </EachBottomInfo>
            </BottomInfo>
          </InfoContainer>
        </DevCardContainer>
      ) : (
        <InitialContainer>
          <h1> Search for devs on the search box 🚀 </h1>
        </InitialContainer>
      )}
    </>
  )
}
