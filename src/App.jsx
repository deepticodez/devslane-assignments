import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import ProductListPage from "./ProductListPage";
import CartPage from "./CartPage";


import Sidebar from "./Sidebar";

import ProductDescription from "./ProductDesciption";

function App() {
  const path = window.location.pathname;
  console.log("path is", path);

  return (
    <div className="max-w-full bg-gray-200 min-h-screen">

      <Header/>
      <Routes>
        <Route index element={<ProductListPage />}></Route>
        <Route
          path="/products/:id"
          element={<ProductDescription/>}
        ></Route>
        <Route
          path="/cart/"
          element={<CartPage/>}
          >
        </Route>
      
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;

/*<div className="flex">
  <div className="w-32 h-screen bg-gray-500 p-2 flex flex-col space-y-2">
    <a href="/assignments">Assignemnts</a>
    <a href="/lectures">Lecture</a>
  </div>
  {path == "/assignments" && <AssignmentPage />}
  {path == "/lectures" && <LecturePage />}
</div>;*/
