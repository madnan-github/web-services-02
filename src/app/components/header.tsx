import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">DigitalBoost</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}