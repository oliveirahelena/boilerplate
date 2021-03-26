import { Container } from 'components/atoms/Container'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <Container>
        <h3>Menu</h3>
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <h3>Footer</h3>
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
