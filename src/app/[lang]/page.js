import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: _params }) {
  const params = await _params;
  const lang = params?.lang || "en"; // Fallback to English if lang is undefined
  const dictionary = await getDictionary(lang);

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return (
    <div>
      <PhotoList photos={photos} />
      {dictionary.followers}
    </div>
  );
}
