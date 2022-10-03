import { FC } from "react";
import useAction from "../../hooks/useAction";
import styles from "./Button.module.scss";
import { AuthType } from "../../types";
interface IButton {
    title: string;
    type: AuthType
};

const Button: FC<IButton> = ({title, type}) => {
    const {setIsOpen, logout} = useAction();

    return (
        <>
            {type === AuthType.logout ? (
                <button 
                    className={styles.button}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => logout()}
                >
                    {title}
                </button>
            ) : (
                <button 
                    className={styles.button}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => setIsOpen({isOpen: true, type})}
                >
                    {title}
                </button>
            )}
        </>
    );
};

export default Button;
