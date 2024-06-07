import Contact from "../../components/Contact";
import Construction from "./components/Construction";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Partner from "./components/Partner";
import Projects from "./components/Projects";
import Slider from "./components/Slider";

function HomePage() {
  return (
    <>
      <Header />
      <Construction />
      <Slider />
      <Projects />
      <Partner />
      {/* <Feedback /> */}
      <Contact />
    </>
  );
}

export default HomePage;
