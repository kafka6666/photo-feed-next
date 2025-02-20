import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="inline-block">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/icons/lws_logo.png" alt="Logo" width={40} height={40} />
        <span className="text-xl font-bold">Photo Feed</span>
      </Link>
    </div>
  )
}

export default Logo
