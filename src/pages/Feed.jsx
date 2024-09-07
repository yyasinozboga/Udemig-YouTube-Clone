import Aside from "../components/Aside";
import { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Video from "../components/Video";

const Feed = ({ isOpen }) => {
  const { error, isLoading, videos } = useContext(VideoContext);

  return (
    <div className="flex">
      <Aside isOpen={isOpen} />
      <div className="videos pe-3 pb-24">
        {error ? (
          <Error />
        ) : isLoading ? (
          <Loading />
        ) : (
          videos?.map((video) => <Video key={video.videoId} video={video} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
