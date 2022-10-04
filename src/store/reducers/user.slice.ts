import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Favorites } from "../../types";
import { auth } from "../../utils/firebase";

interface IUserState {
    isAuth: boolean,
    id: string | null,
    email: string | null,
    name: string | null,
    photoURL: string | null,
    favorites: Favorites | null,
};

const initialState: IUserState = {
    isAuth: false,
    id: null,
    email: null,
    name: null,
    photoURL: null,
    favorites: null
};

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{uid: string | null, email: string | null, name: string | null, photoURL: string | null}>) => {
            return {  
                ...state,
                isAuth: true,
                id: action.payload.uid,
                email: action.payload.email,
                name: action.payload.name,
                photoURL: action.payload.photoURL
            };
        },
        logout: () => {
            auth.signOut();
            return {
                isAuth: false,
                id: null,
                email: null,
                name: null,
                photoURL: null,
                favorites: null
            };  
        },
        auth: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                isAuth: action.payload
            }
        },
        setFavorites: (state, action: PayloadAction<Favorites>) => {
            return {
                ...state,
                favorites: action.payload
            }
        }
    }
});

export default userReducer.reducer;
export {};