import { Box } from "@chakra-ui/react";
import HomeVideo from "../../../assets/video.mp4";
import { useRef, useEffect } from "react";

function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <Box>
      <video
        className="home-video"
        ref={videoRef}
        loop
        muted
        width="100%"
        controls>
        <source src={HomeVideo} type="video/mp4" />
      </video>
      <div className="box-video"></div>
    </Box>
  );
}

export default Header;
