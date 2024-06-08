import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function News() {
  return (
    <Box p={"50px 0"}>
      <Box className="container">
        <SimpleGrid gap={"30px"} columns={3}>
          <Box {...css.box}>
            <Flex {...css.list}>
              <Text {...css.date}>2024-06-13</Text>
              <Text {...css.button}>Новости</Text>
            </Flex>
            <Heading className="news-title" {...css.title}>
              SOY BO`YI - Жизнь на берегу реки. Новый жилой комплекс класса
              Бизнес от компании Murad Buildings.
            </Heading>
            <Image src="https://mbc.uz/image/news/mainphoto/guUzH8WCRR.webp" />
            <Text {...css.text} className="news-title">
              Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе
              с собственной набережной и озелененной территорией. Здесь будет
              все для того, чтобы жизнь стала уютнее и приятнее. Благоустроенная
              территория с фонтаном и различными зонами отдыха создаст
              уникальную атмосферу, позволяющую по истине насладиться жизнью.
            </Text>
            <Link className="news-link" to={"/"}>
              Подробная
            </Link>
          </Box>
          <Box {...css.box}>
            <Flex {...css.list}>
              <Text {...css.date}>2024-06-13</Text>
              <Text {...css.button}>Новости</Text>
            </Flex>
            <Heading className="news-title" {...css.title}>
              SOY BO`YI - Жизнь на берегу реки. Новый жилой комплекс класса
              Бизнес от компании Murad Buildings.
            </Heading>
            <Image src="https://mbc.uz/image/news/mainphoto/guUzH8WCRR.webp" />
            <Text {...css.text} className="news-title">
              Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе
              с собственной набережной и озелененной территорией. Здесь будет
              все для того, чтобы жизнь стала уютнее и приятнее. Благоустроенная
              территория с фонтаном и различными зонами отдыха создаст
              уникальную атмосферу, позволяющую по истине насладиться жизнью.
            </Text>
            <Link className="news-link" to={"/"}>
              Подробная
            </Link>
          </Box>
          <Box {...css.box}>
            <Flex {...css.list}>
              <Text {...css.date}>2024-06-13</Text>
              <Text {...css.button}>Новости</Text>
            </Flex>
            <Heading className="news-title" {...css.title}>
              SOY BO`YI - Жизнь на берегу реки. Новый жилой комплекс класса
              Бизнес от компании Murad Buildings.
            </Heading>
            <Image src="https://mbc.uz/image/news/mainphoto/guUzH8WCRR.webp" />
            <Text {...css.text} className="news-title">
              Стиль жизни на берегу реки воплощен в нашем новом жилом комплексе
              с собственной набережной и озелененной территорией. Здесь будет
              все для того, чтобы жизнь стала уютнее и приятнее. Благоустроенная
              территория с фонтаном и различными зонами отдыха создаст
              уникальную атмосферу, позволяющую по истине насладиться жизнью.
            </Text>
            <Link className="news-link" to={"/"}>
              Подробная
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default News;

const css = {
  box: {
    boxShadow:
      "0px 20px 13px rgba(0, 0, 0, 0.035), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.0274815), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.0168519)",
    background: "#fff",
    paddingBottom: "20px",
  },
  list: {
    padding: "0 2rem",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "1rem",
    lineHeight: "1.2rem",
    letterSpacing: "1px",
    fontWeight: "500",
    color: "#110D60",
    padding: "1rem",
    marginBottom: "2rem",
  },
  text: {
    fontSize: "0.8rem",
    lineHeight: "1.15rem",
    color: "#424242",
    padding: "15px 10px",
    marginTop: "10px",
    marginBottom: "20px",
  },
  button: {
    background: "#EDCB3F",
    color: "#fff",
    padding: "5px 15px",
    fontSize: "12px",
    fontWeight: 600,
    letterSpacing: "1px",
  },
  date: {
    color: "#EDCB3F",
    fontSize: "14px",
    fontWeight: 600,
  },
};
