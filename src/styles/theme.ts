export default {
  grid: {
    container: '70rem',
    gutter: '2.188rem'
  },
  media: {
    lteMedium: '(max-width: 720px)',
    lteLarge: '(max-width: 1080px)'
  },
  border: {
    radius: '0.5rem'
  },
  font: {
    family:
      "Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    sizes: {
      xxsmall: '0.625rem',
      xsmall: '0.75rem',
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      xlarge: '1.625rem',
      xxlarge: '2rem',
      huge: '2.5rem',
      xhuge: '3.25rem'
    }
  },
  colors: {
    primary: '#E65612',
    secondary: '#33FF7C',
    tertiary: '#1994FF',
    darkBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#E5E5E5',
    gray: '#B3B3B3',
    darkGray: '#808080',
    red: '#F20505'
  },
  spacings: {
    xxsmall: '0.5rem',
    xsmall: '1rem',
    small: '1.5rem',
    medium: '2rem',
    large: '2.5rem',
    xlarge: '3.5rem',
    xxlarge: '4.5rem'
  },
  shadows: {
    xxsmall: '0px 1px 2px rgba(0, 0, 0, 0.16)',
    xsmall: '0px 2px 4px rgba(0, 0, 0, 0.16)',
    small: '0px 4px 8px rgba(0, 0, 0, 0.16)',
    medium: '0px 8px 16px rgba(0, 0, 0, 0.16)',
    large: '0px 12px 24px rgba(0, 0, 0, 0.16)',
    xlarge: '0px 16px 32px rgba(0, 0, 0, 0.16)'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
