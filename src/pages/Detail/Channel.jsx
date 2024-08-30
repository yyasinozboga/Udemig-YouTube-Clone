import millify from "millify";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Channel = ({ video }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <figure>
          <img
            src={video.channelThumbnail[0].url}
            className="h-14 w-14 rounded-full"
          />
        </figure>
        <div className="flex flex-col justify-between">
          <p className="font-bold">{video.channelTitle}</p>
          <span>{video.subscriberCountText}</span>
        </div>
        <button className="subscribe-btn px-3 py-1 transition hover:bg-gray-400 rounded-full w-28 md:w-24 h-10">
          Abone Ol
        </button>
      </div>
      <div className="flex flex-items bg-gri rounded-full divide-x h-10">
        <button className="py-1 sm:py-2 px-6 flex items-center gap-2">
          <AiFillLike />
          <span>{millify(video.likeCount)}</span>
        </button>
        <button className="py-1 px-3 sm:py-2 sm:px-6">
          <AiFillDislike />
        </button>
      </div>
    </div>
  );
};

export default Channel;
