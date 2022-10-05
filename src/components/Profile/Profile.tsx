import { FC } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import styles from "./Profile.module.scss";

import UserPhoto from "../../assets/svg/user.svg";
import Button from "../Button/Button";
import { AuthType } from "../../types";

const Profile: FC = () => {
    const {name, email, photoURL} = useAppSelector(state => state.user);
    
    return (
        <div className={styles.user__profile}>
            <div className={styles.user__profile_media}>
                {photoURL ? (
                    <div className={styles.user__profile_media__photo_wrapper}>
                        <img src={photoURL} alt="User" />
                    </div>
                ) : (
                    <div className={styles.user__profile_media__photo_wrapper}>
                        <img src={UserPhoto} alt="User" />
                    </div>
                )}
                <Button title="Update" type={AuthType.update}/>
            </div>
            <div className={styles.user__profile_data}>
                {name ? (
                    <p>{name}</p>
                ) : (
                    <p>Anonim</p>
                )}
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Profile;
