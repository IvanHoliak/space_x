import { onAuthStateChanged } from "firebase/auth";
import { useCallback, useEffect } from "react";
import { auth } from "../utils/firebase";
import useAction from "./useAction";

type UseAuth = () => void;

const useAuth: UseAuth = () => {
    const {login} = useAction();
    const currentUser = useCallback(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if(user){
                login({uid: user.uid, email: user.email ?? ""});
            };
        }); 
    }, [login]);

    useEffect(() => {
        currentUser();
    }, [currentUser]);
};

export default useAuth;