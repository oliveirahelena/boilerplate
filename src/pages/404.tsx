import Link from 'next/link'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <div>
        <h1>404: Not found</h1>
        <p>
          Ops...this page does not exist.{' '}
          <Link href={'/'}>
            <a>Go back to home page.</a>
          </Link>
        </p>
      </div>
    </Base>
  )
}
