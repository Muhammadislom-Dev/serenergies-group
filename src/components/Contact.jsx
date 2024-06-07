import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";

function Contact() {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }

  function changeName(item) {
    setNameValue(item);
  }
  function changeText(item) {
    setTextValue(item);
  }

  const handleClear = () => {
    setNameValue(null);
    setNumberValue(null);
    setTextValue(null);
  };
  let bot = {
    TOKEN: "6765528514:AAG32y-OX4yj8JLVO9ixso8jp7WZ8Khx4LA",
    chatID: "-1002195363967",
    message: `
          Assalomu alaykum sizga yangi xabar!%0A
          %0AIsmi 👤: ${nameValue}; 
          %0ATelefon raqami ☎: ${numberValue};
          %0ASizga xabar ☎: ${textValue};`,
  };

  function sendMessage(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
      {
        method: "GET",
      }
    ).then(
      (success) => {
        if (success.status === 200) {
          handleClear();
        }
        window.location.reload();
        // toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  return (
    <Box p={"35px 0"}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column-reverse", md: "row" }}
          justifyContent={"space-evenly"}>
          <Box>
            <Heading {...css.title}>Bizga qanday savolingiz bor?</Heading>
            <form className="form" action="">
              <label htmlFor="username">
                Ism
                <input
                  type="text"
                  name="username"
                  value={nameValue}
                  onChange={(e) => changeName(e.target.value)}
                  id="username"
                  className="contact-input"
                  placeholder="Ismingizni kiriting"
                />
              </label>
              <label htmlFor="email">
                Elektron pochta yoki Telegram
                <input
                  type="text"
                  name="email"
                  value={nameValue}
                  onChange={(e) => changeName(e.target.value)}
                  id="email"
                  className="contact-input"
                  placeholder="Elektron pochtangizni yoki Telegramni kiriting"
                />
              </label>
              <label htmlFor="phone">
                Telefon raqami
                <input
                  type="number"
                  name="phone"
                  value={numberValue}
                  onChange={(e) => changeNumber(e.target.value)}
                  id="phone"
                  className="contact-input"
                  placeholder="+998"
                />
              </label>
              <label htmlFor="text">
                Sizning xabaringiz
                <textarea
                  name="text"
                  className="contact-input"
                  placeholder="Sizning xabaringiz"
                  rows="5"
                  value={textValue}
                  onChange={(e) => changeText(e.target.value)}
                  cols="50"
                  id="text"></textarea>
              </label>
              <Button onClick={sendMessage} {...css.button} type="submit">
                Yuborish
              </Button>
            </form>
          </Box>
          <Image
            {...css.image}
            src="http://alstar.uz/assets/contact-527c043b.png"
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Contact;

const css = {
  image: {
    width: "600px",
  },
  title: {
    fontSize: {
      base: "23px",
      md: "35px",
    },
    lineHeight: {
      base: "30px",
      md: "55px",
    },
    letterSpacing: "1px",
    color: "#110D60",
  },
  button: {
    backgroundColor: "#EDCB3F",
    border: "2px solid #EDCB3F",
    color: "#fff",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "1px",
    fontWeight: 600,
    borderRadius: "12px",
    transition: "0.3s ease",
    height: "50px",
    width: "100%",

    _hover: {
      backgroundColor: "#fff",
      color: "#110D60",
      cursor: "pointer",
      boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
      transform: "scale(1.02)",
      transition: "0.3s ease",
    },
  },
};
