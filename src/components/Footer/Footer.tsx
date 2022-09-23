import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={`row ${styles.footer__wrapper}`}>
                    <span>(c) Space X Test App by Ivan Holiak</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
