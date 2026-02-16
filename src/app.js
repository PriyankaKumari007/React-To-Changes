import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

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
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


    