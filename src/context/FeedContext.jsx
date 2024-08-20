import { createContext } from "react";

export const FeedContext = createContext();

const FeedContextProvider = ({ children }) => {
  return <FeedContext.Provider>{children}</FeedContext.Provider>;
};

export default FeedContextProvider;
