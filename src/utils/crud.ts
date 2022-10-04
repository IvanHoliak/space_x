import { getDatabase, ref, update, onValue, remove } from "firebase/database";
import { Favorites } from "../types";

type SetUserFavorites = (userId: string, dragonId: string, title: string) => Promise<boolean>;

export const setUserFavorites: SetUserFavorites = async(userId, dragonId, title) => {
    const db = getDatabase();
    const newData: {title: string} = {
        title
    };
    const updates: Favorites = {};

    updates[`users/${userId}/favorites/${dragonId}`] = newData;

    try{
        await update(ref(db), updates);
        
        return true;
    }catch(e){
        console.log(e);
        return false;
    };
};

type RemoveUserFavorites = (userId: string, dragonId: string) => Promise<boolean>;

export const removeUserFavorites: RemoveUserFavorites = async(userId, dragonId) => {
    const db = getDatabase();

    try{
        await remove(ref(db, `users/${userId}/favorites/${dragonId}`));
        return true;
    }catch(e){
        console.log(e);
        return false;
    };
}; 

type GetUserFavorites = (userId: string, callback: (val: Favorites) => void) => void;

export const getUserFavorites: GetUserFavorites = (userId: string, callback) => {
    const db = getDatabase();
    onValue(ref(db, `users/${userId}/favorites`), value => {
        callback(value.val());
    });
};
