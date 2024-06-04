import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Fade } from "react-reveal";

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
                  <Image
                    {...css.image}
                    src="https://mirabad.uz/upload/resize_cache/resized/w1160/cc980fb0cd67e9996e8309f7a12f8fc3.webp"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    {...css.image}
                    src="https://mirabad.uz/upload/resize_cache/resized/w1160/caa4c8b06e1cfbb147f5d6ba58bd6542.webp"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    {...css.image}
                    src="https://mirabad.uz/upload/resize_cache/resized/w1160/b515ac703ca97fae08661cea79284ecf.webp"
                  />
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
                  <Image
                    {...css.image}
                    src="https://mirabad.uz/upload/resize_cache/resized/w1160/cc980fb0cd67e9996e8309f7a12f8fc3.webp"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    {...css.image}
                    src="https://mirabad.uz/upload/resize_cache/resized/w1160/caa4c8b06e1cfbb147f5d6ba58bd6542.webp"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    {...css.image}
                    src="https://mirabad.uz/upload/resize_cache/resized/w1160/b515ac703ca97fae08661cea79284ecf.webp"
                  />
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
    width: "400px",
    color: "#110D60",
  },
};
