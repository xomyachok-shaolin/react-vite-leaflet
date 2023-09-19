import React, { lazy, FC } from "react";

import LoginPage from "@/pages/login";
import LayoutPage from "@/pages/layout";
import WrapperRouteComponent from "./config";
import { useRoutes, RouteObject } from "react-router-dom";

const NotFound = lazy(() => import('@/pages/404'));
const Project = lazy(() => import('@/pages/project'));

const routeList: RouteObject[] = [

  {
    path: "/",
    element: <WrapperRouteComponent auth={false} ><LayoutPage /></WrapperRouteComponent>,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "/project/list",
        element: <WrapperRouteComponent><Project /></WrapperRouteComponent>,
      },
      {
        path: "*",
        element: <WrapperRouteComponent><NotFound /></WrapperRouteComponent>,
      },
    ],
  },
  
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
