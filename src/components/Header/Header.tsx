import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./Header.module.scss";


const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={`row ${styles.header__wrapper}`}>
                        <Link to="/">
                            <h1>Space X</h1>
                        </Link>
                        <div className={styles.header__auth_btns}>
                            <Button title="Login" type="login"/>
                            <Button title="Registration" type="registration"/>
                        </div>
                    </div>
                </div>
            </header>
            <Modal />
        </>
    );
};

export default Header;
