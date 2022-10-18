import {
  FooterProfileDetails,
  HeaderProfileDetails,
  HomeContent,
  ProfileCard,
  ProfileDetails,
} from './styles'

import { LinkSimple, GithubLogo, Users, Buildings } from 'phosphor-react'

export function Home() {
  return (
    <HomeContent>
      <ProfileCard>
        <img
          src="https://criticalhits.com.br/wp-content/uploads/2022/09/Collage-Maker-15-Sep-2022-0756-A.jpg"
          alt=""
        />
        <ProfileDetails>
          <HeaderProfileDetails>
            <h4>Ichigo Kurosaki</h4>
            <a href="">
              Github <LinkSimple />
            </a>
          </HeaderProfileDetails>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <FooterProfileDetails>
            <span>
              <GithubLogo size={18} /> kurosaki
            </span>
            <span>
              <Buildings size={18} />
              Soul Socity
            </span>
            <span>
              <Users size={18} />
              100000 seguidores
            </span>
          </FooterProfileDetails>
        </ProfileDetails>
      </ProfileCard>
    </HomeContent>
  )
}
