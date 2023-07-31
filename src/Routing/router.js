import { createBrowserRouter, Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import Posts from "../pages/Posts";
import { AppRoutes } from "./AppRoutes";
import App from "../App";
import Comments from "../pages/comments/Comments";
import Auto from "../pages/auto/Auto";

export const router = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    element: <App />,
    errorElement: <h1>OOOOOpppsie</h1>,
    children: [
      {
        path: AppRoutes.POSTS,
        element: <Posts />,
        errorElement: <h1>OOOOOpppsie</h1>,
      },
      {
        path: AppRoutes.COMMENTS,
        element: <Comments />,
        errorElement: <h1>OOOOOpppsie</h1>,
      },
      {
        path: AppRoutes.AUTO,
        element: <Auto />,
        errorElement: <h1>OOOOOpppsie</h1>,
      },
    ],
  },
]);
