import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Header.module.scss";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={`row ${styles.header__wrapper}`}>
                    <Link to="/">
                        <h1>Space X</h1>
                    </Link>
                    {/* <a href="/">
                    </a> */}
                    <div className={styles.header__auth_btns}>
                        <Button title="Login"/>
                        <Button title="Registration"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
