import React, { FC } from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import useAppSelector from "../hooks/useAppSelector";
import Layout from "../layout/Layout";
import Dragon from "../pages/Dragon/Dragon";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";

const PrivateRoute: FC<{children: JSX.Element}> = ({children}) => {
    const {isAuth} = useAppSelector(state => state.user);
    console.log(isAuth);
    if(!isAuth) return <Navigate to="/" replace />

    return children;
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path=":id" element={<Dragon />}></Route>
            <Route path="*" element={<Navigate to="/" replace />}/>
            <Route path="user/:id" element={
                <PrivateRoute>
                    <User />
                </PrivateRoute>
            }/>
        </Route>
    )
);

export default router;
