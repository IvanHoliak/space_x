import { FC } from "react";
import useAction from "../../hooks/useAction";
import styles from "./Button.module.scss";

interface IButton {
    title: string;
    type: "login" | "registration"
};

const Button: FC<IButton> = ({title, type}) => {
    const {setIsOpen} = useAction();
    return (
        <button 
            className={styles.button}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => setIsOpen({isOpen: true, type})}
        >
            {title}
        </button>
    );
};

export default Button;
