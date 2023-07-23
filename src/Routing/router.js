import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import App from "../App";
import Todos from "../pages/todos/Todos";
import Albums from "../pages/albums/Albums";
import Comments from "../pages/comments/Comments";
import Post from "../pages/posts/Post";


export const router = createBrowserRouter([
    {
        path: `/`,
        element: <App />,
        errorElement: <h1>OOOOOpppsie</h1>,
        children: [
            {
                path: AppRoutes.TODOS,
                element: <Todos />,
            },
            {
                path: AppRoutes.ALBUMS,
                element: <Albums />,
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments />,
            },
            {
                path: AppRoutes.POSTID,
                element: <Post />,
            },
        ]
    }])