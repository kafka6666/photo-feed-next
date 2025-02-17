import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="inline-block">
      <Link href="/">
        <Image 
          className="max-w-[100px] md:max-w-[165px] w-auto h-auto" 
          src="/lws_logo.png"
          alt="Photo Feed Logo" 
          width={165}
          height={40}
          priority
        />
      </Link>
    </div>
  )
}

export default Logo