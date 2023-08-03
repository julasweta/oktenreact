import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import TestUseMemo from "../components/TestUseMemo";


export const router = createBrowserRouter([
    {
      path: '/',
        element: <App/>,
        errorElement: <h1>OOOOOpppsie</h1>,
        children:[{
          index:true,
          element:<TestUseMemo/>
        }]
       }])