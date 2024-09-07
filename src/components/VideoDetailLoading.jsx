import React from "react";
import { FaUserCircle } from "react-icons/fa";

const VideoDetailLoading = () => {
  const loadingVideos = new Array(20).fill("1");

  return (
    <div className="shadow animate-pulse">
      <div className="h-[40vh] lg:h-[60vh] rounded overflow-hidden bg-gray" />

      <div className="flex flex-col gap-3 mt-5">
        {loadingVideos.map((video, index) => (
          <div key={index} className="flex justify-start items-start gap-3">
            <FaUserCircle className="text-5xl" />

            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1.5 w-44 rounded-full bg-gray" />
                <div className="h-1.5 w-16 rounded-full bg-gray" />
              </div>
              <div className="h-1.5 w-44 rounded-full bg-gray" />
              <div className="h-1.5 w-44 rounded-full bg-gray mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoDetailLoading;
