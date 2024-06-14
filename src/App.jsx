import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Loader from "./components/Loader";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  const videoRef = sessionStorage.getItem("loader");

  return (
    <div>
      {videoRef ? (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/project/:id" element={<ProjectsPage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
