import millify from "millify";
import { useState } from "react";

const Description = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  const description =
    isOpen && video.description
      ? video.description + "...daha az"
      : video.description.slice(0, 150) + "...daha fazla";

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer bg-gri hover:bg-opacity-80 rounded-md p-2 my-5"
    >
      <div className="flex gap-5">
        <p className="font-bold">{millify(video.viewCount)} Görüntülenme</p>
        <p className="font-bold">
          {new Date(video.publishDate).toLocaleDateString("tr", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      <p className="whitespace-pre-wrap">{description}</p>
    </div>
  );
};

export default Description;
