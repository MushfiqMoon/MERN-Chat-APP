import { createBrowserRouter } from "react-router-dom";
import Chat from "../pages/Chat";
import Home from "../pages/Home";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/chat",
        element: <Chat />
    },
])