import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import App from "../App";
import  Cars  from "../pages/Cars"; 

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <h1>OOOOOpppsie</h1>,
    children: [
      {
        path: AppRoutes.MAIN,
        element: <Cars/>, 
      },
      // Інші маршрути...
    ],
  },
]);
