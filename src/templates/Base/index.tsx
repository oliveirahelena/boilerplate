import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <h3>Menu</h3>

      <S.Content>{children}</S.Content>

      <S.Footer>
        <S.FooterContent>
          <a href="#">
            <img src="/img/casaldev.svg" alt="Casaldev" />
          </a>
          <a href="#">
            <img src="/img/dev_fluente.svg" alt="Desenvolvedor Fluente" />
          </a>
        </S.FooterContent>
      </S.Footer>
    </S.Wrapper>
  )
}

export default Base
