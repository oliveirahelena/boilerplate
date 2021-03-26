import { screen } from '@testing-library/react'
import { renderTheme as render } from 'styles/render-theme'

import Base from '.'

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    render(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
