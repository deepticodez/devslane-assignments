import React from "react";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <>
    <div className="max-w-full bg-gray-200 min-h-screen">
      <Header />
      <div className="">
        <div className=" bg-white flex flex-col my-14 max-w-screen mx-40 px-30">
          <select className="text-gray-600 text-[12px] border border-gray-200 py-2 pl-1 pr-17 bg-gray-50 block mt-17 mb-8 self-end">
            <option>Default sorting</option>
          </select>
          <div className="flex gap-4 flex-wrap justify-between pb-5">
            <Product
              photo="https://plus.unsplash.com/premium_photo-1719017276454-99ae8306c200?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVnfGVufDB8fDB8fHww"
              category="Mugs"
              description="White plain classy Mug"
              price="$15.00"
            />
            <Product
              photo="https://images.unsplash.com/photo-1520485521983-bfaa0bc6c80e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11Z3xlbnwwfHwwfHx8MA%3D%3D"
              category="Mugs"
              description="White gold handle Mug"
              price="$25.00"
            />
            <Product
              photo="https://images.unsplash.com/photo-1716951988375-37d5793385d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9sZGVkJTIwdHNoaXJ0JTIwb3IlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
              category="Tshirts"
              description="Combo of 3 basic tees"
              price="$50.00"
            />
            <Product
              photo="https://images.unsplash.com/photo-1555447014-7ead71574544?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11Z3xlbnwwfHwwfHx8MA%3D%3D"
              category="Mugs"
              description="Personalised Mug"
              price="$15.00"
            />
            <Product
              photo="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              category="Winter Wear"
              description="Brown Vintage jacket"
              price="$200.00"
            />
            <Product
              photo="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXxlbnwwfHwwfHx8MA%3D%3D"
              category="Casual"
              description="Poncho knitted"
              price="$115.00"
            />
            <Product
              photo="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
              category="Winter Wear"
              description="White trendy sweater"
              price="$250.00"
            />
            <Product
              photo="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcmNvYXR8ZW58MHx8MHx8fDA%3D"
              category="Winter Wear"
              description="Overcoat Leather"
              price="$500.00"
            />
            <Product
              photo="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8fDA%3D"
              category="Tshirt"
              description="Denim Dotted Tee"
              price="$300.00"
            />
          </div>
          <div className="flex flex-row gap-1 pb-30">
            <button className="bg-red-500 px-4 py-1 text-lg text-white">1</button>
            <button className="border border-red-500 text-red-500 py-1 px-4">2</button>
            <button className="border border-red-500 text-red-500 py-1 px-4">2</button>

          </div>
        </div>
      </div>
      <Footer />
    </div>
    <ProductDetails photo="https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcmNvYXR8ZW58MHx8MHx8fDA%3D"
              description="Overcoat Leather"
              price="$500.00" para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit id esse ipsa tempore alias perspiciatis laboriosam error, inventore quaerat, illo veniam temporibus deleniti. Deleniti, a. In excepturi est vitae."/>
             
    </>
  );
}

export default App;
