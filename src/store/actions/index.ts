import { createAction } from "@reduxjs/toolkit";
import { IModalState } from "../reducers/modal.slice";

/* Modal */
export const setIsOpen = createAction<IModalState>("modal/setIsOpen");

/* User */
export const login = createAction<{uid: string, accessToken: string, email: string}>("user/login");
export const logout = createAction("user/logout");