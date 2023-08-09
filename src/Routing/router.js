import { createBrowserRouter, Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import App from "../App";


export const router = createBrowserRouter([
    {
        element: <App/>,
        errorElement: <h1>OOOOOpppsie</h1>,
        children: [
          {
            path: AppRoutes.MAIN,
            element: <div>Hello world!</div>,
          },]}])