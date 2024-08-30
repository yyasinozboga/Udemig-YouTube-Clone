import { FaUserCircle } from "react-icons/fa";

const Loading = () => {
  const loadingVideos = new Array(20).fill("1");

  return loadingVideos.map((video, index) => (
    <div className="shadow animate-pulse" key={index}>
      <div className="bg-gray-600 h-[220px] md:h-48 mb-4 rounded" />

      <div className="flex items-center gap-3">
        <FaUserCircle className="text-5xl text-gray-600" />

        <div>
          <div className="h-2.5 w-44 rounded-full bg-gray-600" />
          <div className="h-2 w-16 rounded-full bg-gray-600 my-4" />
          <div className="flex gap-2">
            <div className="h-2 w-28 rounded-full bg-gray-600" />
            <div className="h-2 w-28 rounded-full bg-gray-600" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Loading;
