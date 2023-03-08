import { RouteObject } from "react-router-dom";

import Home from "@/pages/home";

export const PublicRoute: Array<RouteObject> = [
  {
    path: "/",
    element: <Home />,
  },
];
