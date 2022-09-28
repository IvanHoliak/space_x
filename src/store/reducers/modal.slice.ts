import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IModalState {
    isOpen: boolean;
    type: "login" | "registration";
};

const initialState: IModalState = {
    isOpen: false,
    type: "login"
};

const modalReducer = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setIsOpen: (state, action: PayloadAction<IModalState>) => ({
            ...state,
            isOpen: action.payload.isOpen,
            type: action.payload.type
        })
    }
});

export default modalReducer.reducer;
export {};