import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthType } from "../types";
import { auth } from "./firebase";

type Auth = (email: string, password: string, type: AuthType) => Promise<boolean>;

const authorization: Auth = async(email, password, type) => {
    try{
        switch(type){
            case AuthType.login:
                const loginUser = await signInWithEmailAndPassword(auth, email, password);
                if(!loginUser) return false;
                return true;
            case AuthType.registration:
                const createUser = await createUserWithEmailAndPassword(auth, email, password);
                if(!createUser) return false;
                return true;
            default:
                return false;
        };
    }catch{
        return false;
    };
};

export default authorization;