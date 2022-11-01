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
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Link } from 'react-router-dom'

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: string
}

export interface User {
  avatar_url: string
  bio: string | null
  followers: number
  name: string
  login: string
  company: string | null
  html_url: string
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<User>()

  const username = import.meta.env.VITE_USER_NAME
  const repoName = import.meta.env.VITE_GITHUB_REPONAME

  const getProfile = useCallback(async () => {
    const response = await api.get(`users/${username}`)
    setUser(response.data)
  }, [user])

  console.log(user)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `search/issues?q=${query}%20repo:${username}/${repoName}`,
        )

        setPosts(response.data.items)
        // eslint-disable-next-line no-empty
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )
  useEffect(() => {
    getPosts()
    getProfile()
  }, [])

  return (
    <HomeMain>
      <ProfileCard>
        <img src={user?.avatar_url} alt="" />
        <ProfileDetails>
          <HeaderProfileDetails>
            <h4>{user?.name}</h4>
            <a
              href={
                user?.html_url
                  ? user?.html_url
                  : 'https://images.unsplash.com/photo-1546776230-bb86256870ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=510&q=80'
              }
            >
              Github <LinkSimple />
            </a>
          </HeaderProfileDetails>
          <p>{user?.bio ? user?.bio : 'Sem biografia'}</p>
          <FooterProfileDetails>
            <span>
              <GithubLogo size={18} /> {user?.login}
            </span>
            <span>
              <Buildings size={18} />
              {user?.company ? user.company : 'Não informado'}
            </span>
            <span>
              <Users size={18} />
              {user?.followers} seguidores
            </span>
          </FooterProfileDetails>
        </ProfileDetails>
      </ProfileCard>

      <HomeContent>
        <SearchForm posts={posts.length} />
        <CardList>
          {posts.map((post) => {
            return (
              <Link key={post.number} to={`post/${post.number}`}>
                <CardRepo>
                  <header>
                    <h4>{post.title}</h4>
                    <span>{post.created_at}</span>
                  </header>
                  <p>{post.body}</p>
                </CardRepo>
              </Link>
            )
          })}
        </CardList>
      </HomeContent>
    </HomeMain>
  )
}
