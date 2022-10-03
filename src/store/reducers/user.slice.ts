import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { auth } from "../../utils/firebase";

interface IUserState {
    isAuth: boolean,
    id: string | null,
    email: string | null
};

const initialState: IUserState = {
    isAuth: false,
    id: null,
    email: null
};

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{uid: string, email: string}>) => {
            return {  
                ...state,
                isAuth: true,
                id: action.payload.uid,
                email: action.payload.email
            };
        },
        logout: () => {
            auth.signOut();
            return {
                isAuth: false,
                id: null,
                email: null
            };  
        },
        auth: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                isAuth: action.payload
            }
        }
    }
});

export default userReducer.reducer;
export {};