import { Link } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
import useAppSelector from "../../hooks/useAppSelector";
import styles from "./User.module.scss";

const User = () => {
    const {favorites} = useAppSelector(state => state.user);

    return (
        <div className={styles.user}>
            <div className="container">
                <div className={styles.user__wrapper}>
                    <h2 className={styles.user__title}>Profile</h2>
                    <Profile />
                    <div style={{width: "100%", height: 1, backgroundColor: "rgba(0, 0, 0, .4)", margin: "15px 0"}}></div>
                    <ul className={styles.user__favorites}>
                        <h2 className={styles.user__favorites_title}>Favorites</h2>
                        {!favorites && <p className={styles.user__favorites_empty}>Favorites List is Empty!</p>}
                        {favorites && Object.keys(favorites).map(favoriteId => (
                            <li 
                                key={favoriteId}
                                className={styles.user__favorites_item}
                            >
                                <Link to={`../${favoriteId}`}>
                                    {favorites[favoriteId].title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default User;
