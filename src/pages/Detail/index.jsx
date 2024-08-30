import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import Video from "../../components/Video";
import Channel from "./Channel";
import Description from "./Description";
import Comments from "./Comments";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  useEffect(() => {
    const params = { id: id, extend: 1 };

    api
      .get("/video/info", { params })
      .then((res) => setVideo(res.data))
      .catch((err) => new Error(err));
  }, [id]);

  console.log(video);

  return (
    video && (
      <div className="video-detail h-screen overflow-auto">
        <div>
          <div className="h-[40vh] lg:h-[60vh] rounded overflow-hidden">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              height={"100%"}
              width={"100%"}
            />
          </div>

          <div>
            <h1 className="font-bold text-xl my-3">{video.title}</h1>
            <Channel video={video} />

            <Description video={video} />

            <Comments videoId={video.id} />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {video?.relatedVideos.data.map((video) => (
            <Video key={video.videoId} video={video} isRow />
          ))}
        </div>
      </div>
    )
  );
};

export default VideoDetail;
