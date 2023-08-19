import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { MainLayout } from "../layouts";
import { CharactersPage, EpisodesPage } from "../pages";


export const router = createBrowserRouter([
    {
      path:'',
        element: <MainLayout/>,
        children: [
          {
            index: true,
            element: <Navigate to={'characters'}/>,
          },
          {
            path: AppRoutes.EPISODES,
            element: <EpisodesPage/>,
          },
          {
            path: AppRoutes.CHARACTERS,
            element: <CharactersPage/>,
          },
        
        
        ]}])