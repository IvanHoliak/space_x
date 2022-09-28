import { combineReducers } from "@reduxjs/toolkit";
import { dragonAPI } from "../../services/DragonService";
import modalSlice from "./modal.slice";
import userSlice from "./user.slice";

const rootReducer = combineReducers({
    modal: modalSlice,
    user: userSlice,
    [dragonAPI.reducerPath]: dragonAPI.reducer,
});

export default rootReducer;