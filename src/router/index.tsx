import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Dragon from "../pages/Dragon/Dragon";
import Home from "../pages/Home/Home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/:id" element={<Dragon />}></Route>
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Route>
    )
);

export default router;
