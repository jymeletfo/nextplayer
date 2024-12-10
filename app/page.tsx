import { VideoThumbnail } from "@/components/custom/video-thumbnail";

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
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TFO Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <VideoThumbnail
            key={index}
            thumbnailUrl={video.thumbnailUrl}
            title={video.title}
            description={video.description}
            duration={video.duration}
          />
        ))}
      </div>
    </div>
  );
}
