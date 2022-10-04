import React, { FC } from "react";
import useAppSelector from "../../hooks/useAppSelector";
import { setUserFavorites, removeUserFavorites } from "../../utils/crud";
import styles from "./Button.module.scss";

interface IAddFavoritesButton {
    userId: string,
    dragonId: string,
    title: string
};

const AddFavoritesButton: FC<IAddFavoritesButton> = ({userId, dragonId ,title}) => {
    const {favorites} = useAppSelector(state => state.user)
    
    const onClickHandlerAddFavorites = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await setUserFavorites(userId, dragonId ,title);
    };

    const onClickHandlerRemoveFavorites = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await removeUserFavorites(userId, dragonId);
    };

    return (
        <>
            {
                favorites && favorites[dragonId] ? (
                    <button 
                        className={`${styles.button} ${styles.favorites}`}
                        onClick={onClickHandlerRemoveFavorites}
                    >Remove</button>
                ) : (
                    <button 
                        className={`${styles.button} ${styles.favorites}`}
                        onClick={onClickHandlerAddFavorites}
                    >Add</button>
                )
            }
        </>
    );
};

export default AddFavoritesButton;
