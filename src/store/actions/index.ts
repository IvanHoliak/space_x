import { createAction } from "@reduxjs/toolkit";
import { IModalState } from "../reducers/modal.slice";

/* Modal */
export const setIsOpen = createAction<IModalState>("modal/setIsOpen");

/* User */
export const auth = createAction<boolean>("user/auth");
export const login = createAction<{uid: string, email: string}>("user/login");
export const logout = createAction("user/logout");