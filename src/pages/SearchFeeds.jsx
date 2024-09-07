import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../utils/api";
import Video from "../components/Video";
import Loading from "../components/Loading";

const SearchFeeds = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [token, setToken] = useState({});
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");
  let params = {
    query,
    type: "video",
  };

  useEffect(() => {
    setIsLoading(true);
    setPage(1);
    api
      .get("/search", { params })
      .then((res) => {
        setResults(res.data.data);
        setToken(res.data.continuation);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [query]);

  const handleClick = () => {
    setSpinnerLoading(true);
    setPage(page + 1);
    params = { ...params, token };
    api
      .get("/search", { params })
      .then((res) => {
        setResults([...results, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => console.log(err))
      .finally(() => setSpinnerLoading(false));
  };

  // useEffect(() => {
  //   setPage(1);
  // }, [query]);

  // useEffect(() => {
  //   let params = {
  //     query,
  //     type: "video",
  //     token: page > 1 ? token : undefined,
  //   };
  //   api
  //     .get("/search", { params })
  //     .then((res) => {
  //       setResults(
  //         page === 1
  //           ? res.data.data
  //           : page > 1 && [...results, ...res.data.data]
  //       );
  //       setToken(res.data.continuation);
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setIsLoading(false));
  // }, [page]);

  return (
    <main className="px-5 sm:px-5 md:px-60 h-[90vh] overflow-y-auto flex flex-col">
      {isLoading ? (
        <Loading isRow />
      ) : (
        <>
          <h1>
            <span className="font-bold whitespace-nowrap">{query}</span> için
            sonuçlar
          </h1>
          <div className="flex flex-col justify-center gap-5 mt-5">
            {results?.map((video, index) => (
              <Video key={index} video={video} isRow />
            ))}

            {spinnerLoading ? (
              <Loading spinner />
            ) : (
              <button
                className="bg-gri py-2 px-5 rounded-md my-10 transition w-48 mx-auto"
                onClick={handleClick}
              >
                Daha Fazla
              </button>
            )}
          </div>
        </>
      )}
    </main>
  );
};

export default SearchFeeds;
