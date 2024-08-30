import millify from "millify";
import { useState } from "react";
import { Link } from "react-router-dom";

const Video = ({ video, isRow }) => {
  if (video.type !== "video") return;

  const [isHover, setIsHover] = useState(false);

  const videoSource =
    isHover && video.richThumbnail && video.richThumbnail[0].url
      ? video.richThumbnail[0].url
      : video.thumbnail && video.thumbnail[video.thumbnail.length - 1].url;

  const channelSource =
    video.channelThumbnail &&
    video.channelThumbnail.length > 0 &&
    video.channelThumbnail[0].url;

  console.log(video);

  return (
    <Link
      to={`/watch?v=${video.videoId}`}
      className={`flex ${
        isRow ? "row items-start" : "flex-col"
      } gap-3 cursor-pointer`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <figure>
        <img
          src={videoSource}
          alt={video.title}
          className="rounded-md w-full h-full"
        />
      </figure>

      <div className="flex items-start gap-3">
        {!isRow && (
          <img src={channelSource} className="w-14 h-14 rounded-full" />
        )}

        <div>
          <p className="font-bold line-clamp-2">{video.title}</p>
          <span>{video.channelTitle}</span>
          <div className="flex items-center gap-2">
            <span>{millify(video.viewCount)}</span>
            <span>*</span>
            {video.isLive ? (
              <span className="py-1 px-1.5 rounded-md live">LIVE</span>
            ) : (
              <span>{video.publishedTimeText}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Video;
