import styled from 'styled-components'

export const HomeContent = styled.main`
  max-width: 864px;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: auto;
  position: relative;
`

export const ProfileCard = styled.section`
  position: absolute;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  line-height: 2rem;
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
