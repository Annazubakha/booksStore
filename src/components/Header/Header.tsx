import { useModal } from "../../hooks/useModal";
import { AddBookForm, Icon, Modal } from "../index";
import s from "./Header.module.css";

export const Header: React.FC = (): JSX.Element => {
  const { isOpenModal, toggleModal } = useModal();

  return (
    <>
      <div className={s.wrapper}>
        <div className={`${s.wrapper_inside}`}>
          <p className={s.title}>Books Store</p>
          <Icon id="books" size={48} className={s.icon} />
        </div>
        <button type="submit" className={s.btn_add} onClick={toggleModal}>
          Add a book
        </button>
      </div>
      {isOpenModal && (
        <Modal title="Add a book" toggleModal={toggleModal}>
          <AddBookForm toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};
