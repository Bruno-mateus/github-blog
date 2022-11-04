import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  display: grid;
  input {
    height: 50px;
    border-radius: 6px;
    background: ${({ theme }) => theme.backgroundInput};
    color: ${({ theme }) => theme.textInput};
    border: none;
    padding: 1rem;
    color: ${({ theme }) => theme.title};
  }
`
export const HeaderSearchForm = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.75rem;
`
