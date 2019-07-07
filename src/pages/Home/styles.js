import styled from 'styled-components'

export const HomeComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;
  box-sizing: border-box;

  img {
    max-width: 100%;
    margin: 0 auto;
  }
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 500px;
  user-select: none;
`

export const StyledLogo = styled.img`
  margin-bottom: 20px;
`

export const StyledLink = styled.a`
  margin: 0 auto;
  margin-top: 1rem;
`
