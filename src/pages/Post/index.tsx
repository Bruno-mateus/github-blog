import { useContext, useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'

import {
  FooterPostDetails,
  HeaderPostDetails,
  PostContent,
  PostDetailsCard,
  PostMain,
} from './styles'
import {
  ArrowLeft,
  LinkSimple,
  GithubLogo,
  Calendar,
  Chat,
} from 'phosphor-react'

import { IPost, PostsContext } from '../../contexts/PostContext'
import ReactMarkdown from 'react-markdown'
import { Spinner } from '../../components/Spinner'

export function Post() {
  const { id } = useParams()
  const { posts, isLoading } = useContext(PostsContext)
  const [post, setPost] = useState<IPost | undefined>()

  useEffect(() => {
    setPost(() => posts.find((post) => post.number === Number(id)))
  }, [])

  if (post) {
    return (
      <PostMain>
        <PostDetailsCard>
          <HeaderPostDetails>
            <NavLink to="/">
              <ArrowLeft /> voltar
            </NavLink>
            <a href={post.html_url} target="_blank" rel="noreferrer">
              Ver no github
              <LinkSimple />
            </a>
          </HeaderPostDetails>
          <h1>{post.title}</h1>
          <FooterPostDetails>
            <span>
              <GithubLogo />
              {post.user.login}
            </span>
            <span>
              <Calendar />
              {post.created_at}
            </span>
            <span>
              <Chat />
              {post.comments}
            </span>
          </FooterPostDetails>
        </PostDetailsCard>
        <PostContent>
          {isLoading ? <Spinner /> : <ReactMarkdown>{post.body}</ReactMarkdown>}
        </PostContent>
      </PostMain>
    )
  } else {
    return <h1>NOT FOUND POST</h1>
  }
}
