import { FC } from "react";
import styles from "./Button.module.scss";

interface IButton {
    title: string;
};

const Button: FC<IButton> = ({title}) => {
    return (
        <button className={styles.button}>
            {title}
        </button>
    );
};

export default Button;
