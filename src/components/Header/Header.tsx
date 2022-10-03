import { FC } from "react";
import { Link } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import { AuthType } from "../../types";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./Header.module.scss";


const Header: FC = () => {
    const {isAuth, id} = useAppSelector(state => state.user);

    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={`row ${styles.header__wrapper}`}>
                        <Link to="/">
                            <h1>Space X</h1>
                        </Link>
                        <div className={styles.header__auth_btns}>
                            {isAuth ? (
                                <>
                                    <Button title="Logout" type={AuthType.logout}/>
                                    <Link to={`/user/${id}`}>
                                        <h1>To Profile</h1>
                                    </Link>                 
                                </>
                            ) : (
                                <>
                                    <Button title="Login" type={AuthType.login}/>
                                    <Button title="Registration" type={AuthType.registration}/>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
            <Modal />
        </>
    );
};

export default Header;
