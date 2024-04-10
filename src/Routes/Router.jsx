import {
    createBrowserRouter,
    
   } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Services from "../Services/Services";
const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "home",
          element: <Home></Home>,
        },
        {
            path: "service",
            element: <Services></Services>,
          },
        
      ],
    },
   ]);
   export default Router;
   