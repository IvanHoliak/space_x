import { getAuth, updateEmail, updatePassword, updateProfile, User, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
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

type UpdateUserProfile = (name: string, email: string, photoURL: string, old_password: string, password: string) => Promise<boolean>;

export const updateUserProfile: UpdateUserProfile = async(name, email, photoURL, old_password, password) => {
    const auth = getAuth();
    const credential = EmailAuthProvider.credential(
        email,
        old_password
    );
    try{
        if(name.length || photoURL.length){
            await updateProfile(auth.currentUser as User, {
                displayName: name,
                photoURL
            });
        };
    
        if(email.length){
            await updateEmail(auth.currentUser as User, email);
        };
    
        if(old_password.length || password.length){
            await reauthenticateWithCredential(auth.currentUser as User, credential);
            await updatePassword(auth.currentUser as User, password);
        };

        return true;
    }catch(e){
        console.log(e);
        return false;
    };
};
