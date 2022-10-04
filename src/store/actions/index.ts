import { createAction } from "@reduxjs/toolkit";
import { Favorites } from "../../types";
import { IModalState } from "../reducers/modal.slice";

/* Modal */
export const setIsOpen = createAction<IModalState>("modal/setIsOpen");

/* User */
export const auth = createAction<boolean>("user/auth");
export const login = createAction<{uid: string | null, email: string | null, name: string | null, photoURL: string | null}>("user/login");
export const logout = createAction("user/logout");
export const setFavorites = createAction<Favorites>("user/setFavorites");