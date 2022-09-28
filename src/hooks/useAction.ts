import { bindActionCreators } from "@reduxjs/toolkit";
import * as ActionCreators from "../store/actions";
import useAppDispatch from "./useAppDispatch";

const useAction = () => bindActionCreators(ActionCreators, useAppDispatch());

export default useAction;