import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <header>
      <nav>
        <Link href={'/'}>
          <a>
            <Image
              src={'/icons/favicon.svg'}
              alt="Logo TPL"
              width={24}
              height={24}
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href={'/'}>dashboard</Link>
          </li>
          <li>
            <Link href={'/account'}>account</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
