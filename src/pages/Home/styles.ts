import styled from 'styled-components'

export const HomeMain = styled.main`
  max-width: 864px;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: auto;
  position: relative;
  flex-direction: column;
  padding: 1rem;
`

export const ProfileCard = styled.section`
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
  align-items: center;
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
export const HeaderProfileDetails = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    position: static;

    text-align: center;
  }
`
export const FooterProfileDetails = styled.footer`
  display: flex;
  gap: 1.5rem;

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

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const HomeContent = styled.section`
  margin-top: 11.125rem;
  width: 100%;
  display: grid;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`
export const CardList = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2.56rem;
`

export const CardRepo = styled.div`
  display: grid;
  gap: 1.25rem;
  background: ${({ theme }) => theme.card};
  padding: 2rem;
  height: 16.25rem;
  width: 100%;
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 0.87rem;
      white-space: nowrap;
    }
  }
  p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }
`
