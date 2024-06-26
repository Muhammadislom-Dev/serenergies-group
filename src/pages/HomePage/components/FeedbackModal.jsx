import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function FeedbackModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
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
        onClose();
        window.location.reload();
        // toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  return (
    <>
      <Button onClick={onOpen} {...css.buttons}>
        Sharh qo`shish
      </Button>
      <Modal
        isCentered
        size={{ base: "sm", md: "md" }}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <form className="form feedback-form" action="">
            <label htmlFor="username">
              {t("Ism")}
              <input
                type="text"
                name="username"
                value={nameValue}
                onChange={(e) => changeName(e.target.value)}
                id="username"
                className="contact-input"
                placeholder={t("Ismingizni kiriting")}
              />
            </label>
            <label htmlFor="email">
              {t("Elektron pochta yoki Telegram")}
              <input
                type="text"
                name="email"
                id="email"
                className="contact-input"
                value={nameValue}
                onChange={(e) => changeName(e.target.value)}
                placeholder={t("Elektron pochta yoki Telegram")}
              />
            </label>
            <label htmlFor="phone">
              {t("Telefon raqami")}
              <input
                type="number"
                name="phone"
                id="phone"
                value={numberValue}
                onChange={(e) => changeNumber(e.target.value)}
                className="contact-input"
                placeholder="+998"
              />
            </label>
            <label htmlFor="text">
              {t("Sizning xabaringiz")}
              <textarea
                name="text"
                className="contact-input"
                placeholder={t("Sizning xabaringiz")}
                rows="5"
                cols="50"
                value={textValue}
                onChange={(e) => changeText(e.target.value)}
                id="text"></textarea>
            </label>
            <Button onClick={sendMessage} {...css.button} type="submit">
              {t("Yuborish")}
            </Button>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FeedbackModal;

const css = {
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
  buttons: {
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
    width: "170px",

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
