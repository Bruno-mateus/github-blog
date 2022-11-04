import { HeaderSearchForm, SearchFormContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostContext'
interface SearchProps {
  posts: number
}

const searchFormSchema = z.object({
  query: z.string(),
})

type searchFormProps = z.infer<typeof searchFormSchema>

export function SearchForm({ posts }: SearchProps) {
  const { getPosts } = useContext(PostsContext)

  const { register, handleSubmit } = useForm<searchFormProps>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handlePosts(data: searchFormProps) {
    await getPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handlePosts)}>
      <HeaderSearchForm>
        <strong>Publicações</strong> <span>{posts} publicações</span>
      </HeaderSearchForm>
      <input
        type="text"
        placeholder="Buscar conteúdo "
        {...register('query')}
      />
    </SearchFormContainer>
  )
}
