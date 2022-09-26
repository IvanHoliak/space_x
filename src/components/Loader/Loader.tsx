import { FC } from "react";
import styles from "./Loader.module.scss";

const Loader: FC = () => {
    return (
        <div 
            className={styles.loader}
        >
            <div className={styles.loader__wrapper}></div>
        </div>
    );
};

export default Loader;