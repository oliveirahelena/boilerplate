import { Container } from 'components/atoms/Container'
import Empty from 'components/molecules/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="404: Not found"
          description="Ops...this page does not exist. Go back to home page."
          hasLink
        />
      </Container>
    </Base>
  )
}
