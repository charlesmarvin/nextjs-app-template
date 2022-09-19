import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <header>
      <nav>
        <a href="/">
          <Image src={'/vercel.svg'} alt="Vercel" width={72} height={16} />
        </a>
        <ul>
          <li>
            <Link href={'/'}>link a</Link>
          </li>
          <li>
            <Link href={'/'}>link b</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
