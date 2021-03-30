import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  flex: 1 0 auto;
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    height: 5rem;
    border-top: 1px solid ${theme.colors.lightGray};
    background-color: ${theme.colors.lightGray};
  `}
`

export const FooterContent = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: calc(5rem - 2px);

    a {
      margin: 0;
      padding: 0;
    }

    img {
      max-height: 1.5rem;
      margin: 0;
      padding: 0;
    }
  `}
`
