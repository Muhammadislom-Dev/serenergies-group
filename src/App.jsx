import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
