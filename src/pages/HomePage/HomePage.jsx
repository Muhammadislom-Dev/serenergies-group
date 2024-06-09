import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";
import Statistic from "../../components/Statistic";
import Construction from "./components/Construction";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Partner from "./components/Partner";
import Projects from "./components/Projects";
import Slider from "./components/Slider";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Construction />
      <Slider />
      <Projects />
      <Statistic />
      <Partner />
      <Feedback />
      <Contact />
    </>
  );
}

export default HomePage;
