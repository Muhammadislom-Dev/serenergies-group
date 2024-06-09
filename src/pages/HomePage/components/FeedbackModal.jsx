import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function FeedbackModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
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
                placeholder={t("Elektron pochta yoki Telegram")}
              />
            </label>
            <label htmlFor="phone">
              {t("Telefon raqami")}
              <input
                type="number"
                name="phone"
                id="phone"
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
                id="text"></textarea>
            </label>
            <Button {...css.button} type="submit">
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
