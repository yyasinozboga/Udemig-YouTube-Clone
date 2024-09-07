import millify from "millify";
import { useState, useEffect } from "react";
import api from "../../utils/api";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    api
      .get(`/comments?id=${videoId}`)
      .then((res) => setComments(res))
      .catch((err) => console.log(err));
  }, [videoId]);

  return (
    comments && (
      <div>
        <p className="font-bold">
          {millify(comments.data.commentsCount)} Yorum
        </p>

        <input
          type="text"
          className="border-b bg-transparent outline-none w-full pb-2"
          placeholder="Yorum Ekleyiniz..."
        />

        <div className="flex flex-col gap-3 mt-5 pb-24">
          {comments.data.data.map((comment) => (
            <div
              key={comment.commentId}
              className="flex justify-start items-start gap-3"
            >
              {comment.authorThumbnail[0].url ? (
                <img
                  src={comment.authorThumbnail[0].url}
                  className="size-15 rounded-full"
                />
              ) : (
                <FaUserCircle className="text-5xl rounded-full" />
              )}

              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <p>{comment.authorText}</p>
                  <span className="gray">{comment.publishedTimeText}</span>
                </div>
                <p>{comment.textDisplay}</p>
                <div className="flex items-center gap-5">
                  <button>
                    <AiFillLike />
                  </button>
                  <button>
                    <AiFillDislike />
                  </button>
                  <button>Yanıtla</button>
                  {comment.replyCount > 0 && (
                    <div className="flex w-fit items-center p-1 rounded-md gap-2 blue hover:bg-[#36639662] cursor-pointer">
                      <TiArrowSortedDown />
                      {comment.replyCount} yanıt
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Comments;
