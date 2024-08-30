import { useState, useEffect, createContext } from "react";
import api from "../utils/api";
import { categories } from "../utils/constant";

export const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
  const [isSelected, setIsSelected] = useState(categories[0]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (isSelected.type === "menu") return;

    const url =
      isSelected.type === "home"
        ? "/home"
        : isSelected.type === "trending"
        ? "/trending?geo=TR"
        : `/search?query=${isSelected.name}`;

    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [isSelected]);

  const values = {
    isSelected,
    setIsSelected,
    videos,
    error,
    isLoading,
  };

  console.log(videos);

  return (
    <VideoContext.Provider value={values}>{children}</VideoContext.Provider>
  );
};

export default VideoContextProvider;
