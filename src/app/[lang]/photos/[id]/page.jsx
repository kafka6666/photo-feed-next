import PhotoDetails from '@/components/PhotoDetails'
import { getPhotoById } from '@/lib/image-data'
import { getDictionary } from '@/app/[lang]/dictionaries'

export default async function PhotoDetailsPage({ params }) {
  const { id, lang } = params;
  const photo = getPhotoById(id);
  const dictionary = await getDictionary(lang);

  if (!photo) {
    return <div>Photo not found</div>
  }

  return (
    <PhotoDetails photo={photo} dictionary={dictionary} />
  )
}
