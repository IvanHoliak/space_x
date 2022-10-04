import { FC } from "react";
import useAction from "../../hooks/useAction";
import styles from "./Button.module.scss";
import { AuthType } from "../../types";
import { Link } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
interface IButton {
    title: string;
    type: AuthType
};

const Button: FC<IButton> = ({title, type}) => {
    const {setIsOpen, logout} = useAction();
    const {id} = useAppSelector(state => state.user);

    if(type === AuthType.logout){
        return (
            <button 
                className={styles.button}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => logout()}
            >
                {title}
            </button>
        );
    };

    if(type === AuthType.profile){
        return (
            <button
                className={styles.button}    
            >
                <Link 
                    to={`user/${id}`}
                    
                >
                    Profile
                </Link>
            </button>
        );
    };

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
