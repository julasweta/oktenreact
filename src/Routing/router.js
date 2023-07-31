import { createBrowserRouter} from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import App from "../App";
import {PosterPreview, UserInfo} from "../components";
import { MoviePage, MoviesPage } from "../pages/movies";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>OOOOOpppsie</h1>,
    children: [
      {
        path: AppRoutes.MOVIES,
        element: <MoviesPage/>,
      },
      {
        path: AppRoutes.MOVIE,
        element: <MoviePage />,
      },
      {path: AppRoutes.IMAGE,
        element:<PosterPreview/>,
      },
      {path: AppRoutes.USERINFO,
        element:<UserInfo/>,
      }]
  }])