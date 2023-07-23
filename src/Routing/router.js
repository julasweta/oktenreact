import { createBrowserRouter, Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import Users from "../pages/users/Users"
import { AppRoutes } from "./AppRoutes";


export const router = createBrowserRouter([
    {
        element: <Users/>,
        errorElement: <h1>OOOOOpppsie</h1>,
        children: [
          {
            path: AppRoutes.MAIN,
            element: <div>Hello world!</div>,
          },]}])