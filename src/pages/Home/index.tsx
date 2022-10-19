/* eslint-disable react/no-unescaped-entities */
import {
  CardList,
  CardRepo,
  FooterProfileDetails,
  HeaderProfileDetails,
  HomeContent,
  HomeMain,
  ProfileCard,
  ProfileDetails,
} from './styles'

import { LinkSimple, GithubLogo, Users, Buildings } from 'phosphor-react'
import { SearchForm } from '../../components/SearchForm'

export function Home() {
  return (
    <HomeMain>
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
      <HomeContent>
        <SearchForm />
        <CardList>
          <CardRepo>
            <header>
              <h4>JavaScript data types and data structures</h4>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </CardRepo>
          <CardRepo>
            <header>
              <h4>JavaScript data types and data structures</h4>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </CardRepo>
          <CardRepo>
            <header>
              <h4>JavaScript data types and data structures</h4>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </CardRepo>
          <CardRepo>
            <header>
              <h4>JavaScript data types and data structures</h4>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </p>
          </CardRepo>
        </CardList>
      </HomeContent>
    </HomeMain>
  )
}
