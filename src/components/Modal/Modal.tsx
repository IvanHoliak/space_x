import { FC } from "react";
import { createPortal } from "react-dom";
import useAction from "../../hooks/useAction";
import useAppSelector from "../../hooks/useAppSelector";
import { AuthType } from "../../types";
import Login from "../Form/Login";
import Registration from "../Form/Registration";
import Update from "../Form/Update";
import styles from "./Modal.module.scss";

const modalRoot: HTMLElement | null = document.getElementById("modal");

const Modal: FC = () => {
    const {isOpen, type} = useAppSelector(state => state.modal);
    const {setIsOpen} = useAction();

    if(!modalRoot || !isOpen){
        document.body.classList.remove("modal_open");
        return null;
    };
    
    document.body.classList.add("modal_open");

    return createPortal(
        <div 
            className={styles.modal}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => setIsOpen({isOpen: false, type})}
        >
            <div 
                className={styles.modal__window}
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                {type === AuthType.login && <Login />}
                {type === AuthType.registration && <Registration />}
                {type === AuthType.update && <Update />}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
