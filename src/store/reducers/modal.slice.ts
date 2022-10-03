import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthType } from "../../types";

export interface IModalState {
    isOpen: boolean;
    type: AuthType;
};

const initialState: IModalState = {
    isOpen: false,
    type: AuthType.login
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