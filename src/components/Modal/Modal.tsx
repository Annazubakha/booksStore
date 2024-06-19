import ReactDOM from "react-dom";
import { useEffect } from "react";
import { Icon } from "../index";
import s from "./Modal.module.css";

const modalRoot =
  document.getElementById("modalRoot") || document.createElement("div");
modalRoot.id = "modalRoot";
document.body.appendChild(modalRoot);

interface ModalProps {
  children: React.ReactNode;
  toggleModal: () => void;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  toggleModal,
  title,
}): JSX.Element => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return ReactDOM.createPortal(
    <div onClick={handleClickOnBackdrop} className={s.wrapper}>
      <div className={s.content}>
        <button className={s.closeModalBtn} type="button" onClick={toggleModal}>
          <Icon id="close" className={s.icon} size={26} />
        </button>
        <div>
          <h2 className={s.title}>{title}</h2>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};
