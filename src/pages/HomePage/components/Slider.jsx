import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Fade } from "react-reveal";

import ZaraHome from "../../../assets/image2.png";
import ZaraHome1 from "../../../assets/image3.png";
import Swiss from "../../../assets/image4.png";
import Oysho from "../../../assets/oysho.png";
import Oysho1 from "../../../assets/oysho1.png";
import Swiss1 from "../../../assets/swiss1.png";
import Project3 from "../../../assets/image1.png";
import Kids from "../../../assets/kids.png";

function Slider() {
  return (
    <Box p={"35px 0"}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column-reverse", md: "row" }}
          gap={{ base: "25px", md: "70px" }}>
          <Box {...css.box}>
            <Fade left>
              <Swiper
                loop={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                cssMode={true}
                modules={[Navigation, Mousewheel]}
                className="mySwiper">
                <SwiperSlide>
                  <Image {...css.image} src={Project3} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={ZaraHome} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={ZaraHome1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Swiss} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Oysho} />
                </SwiperSlide>
              </Swiper>
            </Fade>
          </Box>
          <Fade right>
            <Box>
              <Heading {...css.title}>ПРИВАТНЫЕ ТЕРРАСЫ</Heading>
              <Text {...css.text}>
                Первое и уникальное в своём роде предложение на рынке
                недвижимости. Приобретая апартаменты на 9 этаже, покупатель
                становится владельцем собственной приватной террасы. Ещё одно
                новшество резиденции — башни с пентхаусами с персональным
                доступом через лифт.
              </Text>
            </Box>
          </Fade>
        </Flex>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          mt={"120px"}
          gap={{ base: "25px", md: "70px" }}>
          <Fade left>
            <Box>
              <Heading {...css.title}>ПРИВАТНЫЕ ТЕРРАСЫ</Heading>
              <Text {...css.text}>
                Уникальное в своём роде решение продумано не только с
                коммерческой точки зрения в соответствии с мировыми требованиями
                и опытом других стран, но также предусматривает максимально
                комфортное нахождение на шопинг-авеню жителей и гостей
                резиденции. Общая длина шопинг-авеню по всему периметру превысит
                2 км.
              </Text>
            </Box>
          </Fade>
          <Box {...css.box}>
            <Fade right>
              <Swiper
                loop={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                cssMode={true}
                modules={[Navigation, Mousewheel]}
                className="mySwiper">
                <SwiperSlide>
                  <Image {...css.image} src={ZaraHome1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Oysho1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Kids} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Project3} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Swiss1} />
                </SwiperSlide>
              </Swiper>
            </Fade>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Slider;

const css = {
  box: {
    width: {
      base: "100%",
      md: "55%",
    },
  },
  title: {
    fontSize: "25px",
    lineHeight: "30px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    color: "#EDCB3F",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 450,
    letterSpacing: "1px",
    marginTop: "20px",
    marginBottom: "20px",
    width: {
      base: "100%",
      md: "400px",
    },
    color: "#110D60",
  },
  image: {
    height: {
      base: "330px",
      md: "450px",
    },
    width: "100%",
    objectFit: {
      base: "cover",
      md: "cover",
    },
  },
};
