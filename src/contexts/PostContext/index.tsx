import { createContext, ReactNode, useCallback, useState } from 'react'
import { api } from '../../lib/axios'

// eslint-disable-next-line no-unused-vars
interface PostContextProvider {
  children: ReactNode
}
export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}
interface PostContextType {
  getPosts: (query?: string) => Promise<void>
  posts: IPost[]
  isLoading: boolean
}

export const PostsContext = createContext({} as PostContextType)

// eslint-disable-next-line no-redeclare
export function PostContextProvider({ children }: PostContextProvider) {
  const username = import.meta.env.VITE_USER_NAME
  const repoName = import.meta.env.VITE_GITHUB_REPONAME

  const [posts, setPosts] = useState<IPost[]>([])

  const [isLoading, setIsLoading] = useState(true)

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
  return (
    <PostsContext.Provider value={{ getPosts, posts, isLoading }}>
      {children}
    </PostsContext.Provider>
  )
}
