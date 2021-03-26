import { ThemeProvider } from 'styled-components'
import { withNextRouter } from 'storybook-addon-next-router'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

addDecorator(withNextRouter())

export const parameters = {
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
]