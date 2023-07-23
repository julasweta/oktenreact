import { createBrowserRouter, Outlet, useNavigate, useLocation, useParams } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";


export const router = createBrowserRouter([
    {
        element: <>Pruvit</>,
        errorElement: <h1>OOOOOpppsie</h1>,
        children: [
          {
            path: AppRoutes.MAIN,
            element: <div>Hello world!</div>,
          },]}])