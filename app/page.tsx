import { VideoThumbnail } from "@/components/custom/video-thumbnail";
import { getProducts } from "./api/directus";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TFO Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((video, index) => (
          <VideoThumbnail
            key={index}
            thumbnailUrl={
              video.images ? video.images[0].path : "/placeholder.svg"
            }
            title={video.title}
            description={video.press_fr_long_summary}
            duration={video.duration}
          />
        ))}
      </div>
    </div>
  );
}
