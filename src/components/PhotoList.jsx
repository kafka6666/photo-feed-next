import PhotoCard from './PhotoCard'

const PhotoList = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />    
        ))}
    </div>
  )
}

export default PhotoList