import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import { useState } from "react";
import VideoContextProvider from "./context/VideoContext";
import VideoDetail from "./pages/Detail";
import SearchFeeds from "./pages/SearchFeeds";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BrowserRouter>
      <Header setIsOpen={setIsOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <VideoContextProvider>
              <Feed isOpen={isOpen} />
            </VideoContextProvider>
          }
        />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<SearchFeeds />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
