import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Montserrat Light'), local('Montserrat-Light'),
        url('/fonts/Montserrat-Light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('/fonts/Montserrat-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
        url('/fonts/Montserrat-Medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
        url('/fonts/Montserrat-Bold.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme, removeBg }) => css`
    @media ${theme.media.lteLarge} {
      html {
        font-size: 93.75%;
      }
    }

    @media ${theme.media.lteMedium} {
      html {
        font-size: 87.5%;
      }
    }

    body {
      ${!removeBg &&
      css`
        background-color: ${theme.colors.lightBg};
      `}
      color: ${theme.colors.black};
    }

    body,
    input,
    textarea,
    select,
    button {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.regular};
    }

    button {
      cursor: pointer;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    h1 {
      font-size: ${theme.font.sizes.xhuge};
      font-weight: ${theme.font.light};
    }

    h2 {
      font-size: ${theme.font.sizes.huge};
      font-weight: ${theme.font.medium};
    }

    h3 {
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
    }

    h4 {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
    }

    h5 {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
    }
  `}

`

export default GlobalStyles
