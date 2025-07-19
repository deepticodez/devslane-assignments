import React from "react";

function ProductDetails({photo ,description,para,price}){
    return(
        <div class="flex flex-row justify-center items-center h-screen bg-gray-100">
      <div class="flex flex-row w-340 h-160 border-0 bg-white">
        <img
          class="px-8 py-8"
          src={photo}
          alt="image did not load"
        />
        <div class="py-8 pl-4 pr-15">
          <h1 class="text-5xl pb-8 text-gray-600">{description}</h1>
          <h1 class="text-4xl pb-6 text-gray-700 font-bold">{price}</h1>
          <p class=" text-[20px] leading-relaxed text-gray-500 pb-7">
            {para}
     
          </p>
          <input class="border pl-3 pr-4 py-2 font-serif border-gray-300 mr-3" defaultValue={1} type="number" min="0" max="100" step="1" />
          <button class="bg-[#fc470f] py-2.5 px-15 text-1xl text-white font-bold rounded-sm">ADD TO CART</button>
        </div>
      </div>
    </div>

    );
}

export default ProductDetails;
