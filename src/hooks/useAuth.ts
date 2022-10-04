import { onAuthStateChanged } from "firebase/auth";
import { useCallback, useEffect } from "react";
import { getUserFavorites } from "../utils/crud";
import { auth } from "../utils/firebase";
import useAction from "./useAction";

type UseAuth = () => void;

const useAuth: UseAuth = () => {
    const {login, setFavorites} = useAction();
    const currentUser = useCallback(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                console.log(user);
                login({uid: user.uid, email: user.email, name: user.displayName, photoURL: user.photoURL});
                getUserFavorites(user.uid, setFavorites);
            };
        }); 
    }, [login, setFavorites]);

    useEffect(() => {
        currentUser();
    }, [currentUser]);
};

export default useAuth;