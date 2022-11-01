import { HeaderSearchForm, SearchFormContainer } from './styles'

interface SearchProps {
  posts: number
}

export function SearchForm({ posts }: SearchProps) {
  return (
    <SearchFormContainer>
      <HeaderSearchForm>
        <strong>Publicações</strong> <span>{posts} publicações</span>
      </HeaderSearchForm>
      <input type="text" placeholder="Buscar conteúdo " />
    </SearchFormContainer>
  )
}
