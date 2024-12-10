import { VideoThumbnail } from "@/components/custom/video-thumbnail";
import { getProducts } from "./api/directus";

type VideoThumbnailProps = {
  thumbnailUrl: string;
  title: string;
  description: string;
  duration: string;
};

const videos: VideoThumbnailProps[] = [
  {
    thumbnailUrl: "/placeholder.svg",
    title: "Video 1",
    description: "Description for Video 1",
    duration: "2:30",
  },
  {
    thumbnailUrl: "/placeholder.svg",
    title: "Video 2",
    description: "Description for Video 2",
    duration: "1:45",
  },
  {
    thumbnailUrl: "/placeholder.svg",
    title: "Video 3",
    description: "Description for Video 3",
    duration: "3:15",
  },
  {
    thumbnailUrl: "/placeholder.svg",
    title: "Video 4",
    description: "Description for Video 4",
    duration: "2:05",
  },
  {
    thumbnailUrl: "/placeholder.svg",
    title: "Video 5",
    description: "Description for Video 5",
    duration: "3:45",
  },
  {
    thumbnailUrl: "/placeholder.svg",
    title: "Video 6",
    description: "Description for Video 6",
    duration: "4:20",
  },
  {
    thumbnailUrl: "/placeholder.svg",
    title: "Video 7",
    description: "Description for Video 7",
    duration: "5:00",
  },
];

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
