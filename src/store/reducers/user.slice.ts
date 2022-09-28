import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
    isAuth: boolean,
    id: string | null,
    token: string | null,
    email: string | null
};

const initialState: IUserState = {
    isAuth: false,
    id: null,
    token: null,
    email: null
};

const userReducer = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{uid: string, accessToken: string, email: string}>) => ({
            ...state,
            isAuth: true,
            id: action.payload.uid,
            token: action.payload.accessToken,
            email: action.payload.email
        }),
        logout: (state) => ({
            isAuth: false,
            id: null,
            token: null,
            email: null
        })
    }
});

export default userReducer.reducer;
export {};