import { RouterProvider } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import router from "./router";

const App = () => {
    useAuth();

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;
