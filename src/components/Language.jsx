import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const languageData = [
  {
    id: 1,
    value: "ru",
    title: "RU",
  },
  {
    id: 2,
    value: "en",
    title: "Eng",
  },
  {
    id: 3,
    value: "uz",
    title: "UZ",
  },
  {
    id: 4,
    value: "ar",
    title: "AR",
  },
  {
    id: 5,
    value: "oz",
    title: "Ўз",
  },
];

function Language() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = () => {
    setIsOpen(false);
  };

  const i18nData = languageData.filter((item) => item.value !== i18n.language);

  return (
    <>
      <Box>
        <Box {...css.box}>
          <Box
            onClick={(event) => {
              toggleDropdown();
              event.preventDefault();
            }}>
            <Text textTransform={'uppercase'}>{i18n.language}</Text>
          </Box>
        </Box>
      </Box>
      {isOpen && (
        <Flex {...css.list}>
          {i18nData?.map((evt, index) => (
            <Box
              onClick={() => {
                handleLanguage(evt.value);
                handleOptionClick();
              }}
              {...css.card}
              key={index}>
              <Text>{evt.title}</Text>
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
}

export default Language;

const css = {
  box: {
    color: "#000000",
    backgroundColor: "#ffffff",
    padding: "3px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: {
    position: "absolute",
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(35px)",
    top: "70px",
    right: "26%",
    width: "4rem",
    padding: "7px 12px",
    color: "#FFFFFF",
  },
  card: {
    cursor: "pointer",
  },
};
