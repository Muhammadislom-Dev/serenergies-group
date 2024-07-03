import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { dataProject } from "../../../services/data";
import { useEffect, useRef } from "react";

function Header() {
  const { id } = useParams();
  const data = dataProject;
  const about = data?.find((item) => item.id === Number(id));

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <Box background={"rgb(247,242,240)"} mt={"-150px"} p={"60px 0"}>
      <Box className="container">
        <Flex flexDirection={{ base: "column", lg: "row" }} gap={"50px"}>
          <Box maxWidth={"56rem"}>
            <Flex flexWrap={"wrap"} gap={"15px"}>
              {about?.tags?.map((item, index) => (
                <Box {...css.span} key={index}>
                  {item?.title}
                </Box>
              ))}
            </Flex>
            <Text
              {...css.text}
              dangerouslySetInnerHTML={{
                __html: about?.text,
              }}
            />
          </Box>
          <Box {...css.right}>
            <Text {...css.name}>Store website</Text>
            <Link {...css.subname} href={about.websiteUrl}>
              {about?.websiteUrl}
            </Link>
            <Text mt={"20px"} {...css.name}>
              Working hours
            </Text>
            <Text {...css.subname}>{about?.workingHours}</Text>
          </Box>
        </Flex>

        <video
          className={`project-video ${
            Number(id) === 4 || 5 ? "reels-video" : ""
          }`}
          ref={videoRef}
          loop
          muted
          width="100%"
          controls>
          <source src={about.video} type="video/mp4" />
        </video>
        <div className="project-home-video"></div>
      </Box>
    </Box>
  );
}

export default Header;

const css = {
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "1px",
    fontFamily: "sans-serif",
    marginTop: "20px",
  },
  right: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    height: "230px",
    position: "relative",
    zIndex: "99999",
  },
  span: {
    backgroundColor: "rgb(188,125,107)",
    padding: "0.6rem 1rem",
    borderRadius: "20px",
    margin: "0.5rem",
    color: "#fff",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "1px",
    fontFamily: "sans-serif",
    cursor: "pointer",
  },
  name: {
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "1px",
    fontFamily: "sans-serif",
    color: "rgb(188,125,107)",
    fontWeight: "bold",
    padding: "5px 0",
  },
  subname: {
    color: "black",
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "1px",
    fontFamily: "sans-serif",
    fontWeight: "500",
  },
};
