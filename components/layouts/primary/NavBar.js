import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <header>
      <nav>
        <Link href={'/'}>
          <Image src={'/vercel.svg'} alt="Vercel" width={72} height={16} />
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
