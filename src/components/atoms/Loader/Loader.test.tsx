import { screen } from '@testing-library/react'
import { renderTheme as render } from 'styles/render-theme'
import Loader from '.'

describe('<Loader />', () => {
  it('Should render correctly', () => {
    render(<Loader />)

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
