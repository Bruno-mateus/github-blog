import { HeaderSearchForm, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <HeaderSearchForm>
        <strong>Publicações</strong> <span>6 publicações</span>
      </HeaderSearchForm>
      <input type="text" placeholder="Buscar conteúdo " />
    </SearchFormContainer>
  )
}
