import millify from "millify";
import { useState, useEffect } from "react";
import api from "../../utils/api";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    api
      .get(`/comments?id=${videoId}`)
      .then((res) => setComments(res))
      .catch((err) => console.log(err));
  }, [videoId]);

  console.log(comments);

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

        <div className="flex flex-col gap-3 mt-5">
          {comments.data.data.map((comment) => (
            <div
              key={comment.commentId}
              className="flex justify-start items-center gap-3"
            >
              <img
                src={comment.authorThumbnail[0].url}
                className="size-15 rounded-full"
              />

              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <p>{comment.authorText}</p>
                  <span className="text-gri">{comment.publishedTimeText}</span>
                </div>
                <p>
                  {comment.textDisplay > 200
                    ? comment.textDisplay.slice(0, 200) + "..."
                    : comment.textDisplay}
                </p>
                <div className="flex items-center gap-5">
                  <button>
                    <AiFillLike />
                  </button>
                  <button>
                    <AiFillDislike />
                  </button>
                  <button onClick={() => setIsOpen(!isOpen)}>Yanıtla</button>
                  {isOpen && (
                    <p className="text-teal-600 p-2">{comment.replyCount}</p>
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
