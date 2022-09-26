import { combineReducers } from "@reduxjs/toolkit";
import { dragonAPI } from "../../services/DragonService";

const rootReducer = combineReducers({
    [dragonAPI.reducerPath]: dragonAPI.reducer,
});

export default rootReducer;