import styled from 'styled-components'

export const PostMain = styled.main`
  max-width: 864px;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: auto;
  position: relative;
  flex-direction: column;
  padding: 1rem;
  a {
    color: ${({ theme }) => theme.linkColor};
  }
`
export const PostDetailsCard = styled.section`
  position: absolute;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  line-height: 2rem;
  top: -6.5rem;
  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.cardProfile};
  @media (max-width: 768px) {
    flex-direction: column;
    position: static;
    margin-top: -6.5rem;
    gap: 1rem;
    text-align: center;
  }
`

export const HeaderPostDetails = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.linkColor};
  }
  @media (max-width: 768px) {
    position: static;

    text-align: center;
  }
`
export const FooterPostDetails = styled.footer`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  width: 100%;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    position: static;
    gap: 0.5rem;
    justify-content: center;
    span {
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
`
export const PostContent = styled.main`
  margin-top: 11.125rem;
  line-height: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  p + p {
    margin-top: 0.5rem;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`
