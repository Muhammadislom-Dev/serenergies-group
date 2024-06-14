import { useEffect, useRef } from "react";
import LogoAnimation from "../assets/logo-animatsiya.mp4";

function Loader() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  function removeLoader() {
    sessionStorage.setItem("loader", true);
  }

  useEffect(() => {
    setTimeout(() => {
      removeLoader();
      window.location.href = "/";
    }, 4000);
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        className="loader-video"
        loop
        muted
        width="100%"
        controls>
        <source src={LogoAnimation} type="video/mp4" />
      </video>
      <div className="box-videos"></div>
    </div>
  );
}

export default Loader;
