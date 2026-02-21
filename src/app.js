import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import RestaurantMenu from "./components/RestaurantMenu";

/*
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search Bar
 *   - Restaurant Container
 *     - Restaurant Card
 *       - Image
 *       - Name
 *       - Rating
 * Footer
 *   - Links */







const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
};

const aapRoutes = createBrowserRouter([
  {path:"/", element:<AppLayout />, errorElement:<Error />
    ,children:[
      {path:"/", element:<Body />
      },
      {
        path:"/about", element:<About />
      },
    
            {
        path:"/contact", element:<Contact />
      },
      {
        path:"/city/:resId", element:<RestaurantMenu />
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={aapRoutes} />);

    