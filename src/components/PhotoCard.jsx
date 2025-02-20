'use client';

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const PhotoCard = ({ photo }) => {
  const params = useParams();
  const lang = params?.lang || 'en';

  return (
    <Link href={`/${lang}/photos/${photo.id}`} className='group relative block aspect-[4/3] overflow-hidden rounded-lg'>
        <Image 
            src={photo.url} 
            alt={photo.title}
            width={800}
            height={600}
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`}
            priority={photo.id === "1"} // Prioritize loading the first image
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 left-4 text-white font-medium">{photo.title}</p>
        </div>
    </Link>
  )
}

export default PhotoCard