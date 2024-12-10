import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type VideoThumbnailProps = {
  thumbnailUrl: string;
  title: string;
  description: string;
  duration: string;
};

export function VideoThumbnail(props: VideoThumbnailProps) {
  const { thumbnailUrl, title, description, duration } = props;
  return (
    <Card className="overflow-hidden">
      <AspectRatio ratio={16 / 9} className="relative">
        <Image src={thumbnailUrl} alt={title} className="object-cover" fill />

        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
          {duration}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <CardContent className="absolute bottom-0 left-0 right-0 p-4">
            <CardTitle className="text-lg font-bold text-white mb-1 line-clamp-1">
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-200 line-clamp-2">
              {description}
            </CardDescription>
          </CardContent>
        </div>
      </AspectRatio>
    </Card>
  );
}
