import Image from 'next/image'
import Link from 'next/link'

const PhotoDetails = ({ photo, dictionary }) => {
  if (!photo) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-500 hover:text-blue-600">
            ← {dictionary?.back || 'Back'}
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{photo.title}</h1>
            
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={photo.author.avatar}
                  alt={photo.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{photo.author.name}</h2>
                <p className="text-gray-600">{photo.author.bio}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray-600">{dictionary?.views || 'Views'}</p>
                <p className="text-xl font-semibold">{photo.views}</p>
              </div>
              <div>
                <p className="text-gray-600">{dictionary?.shares || 'Shares'}</p>
                <p className="text-xl font-semibold">{photo.share}</p>
              </div>
              <div>
                <p className="text-gray-600">{dictionary?.likes || 'Likes'}</p>
                <p className="text-xl font-semibold">{photo.likes}</p>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-600 mb-2">{dictionary?.tags || 'Tags'}:</p>
              <div className="flex flex-wrap gap-2">
                {photo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoDetails