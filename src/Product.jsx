import React from "react";

function Product(data){
    return(
        <div className="flex flex-col pb-10">
            <img
              className="w-73 h-70 object-cover"
              src={data.photo}
            />
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="text-[13px] text-gray-500">{data.category}</h3>
              <h3 className="text-[13px] font-semibold">{data.description}</h3>
              <div className="flex ">
                <img
                  className="h-4"
                  src="https://pngimg.com/d/red_star_PNG36.png"
                />
                <img
                  className="h-4"
                  src="https://pngimg.com/d/red_star_PNG36.png"
                />
                <img
                  className="h-4"
                  src="https://pngimg.com/d/red_star_PNG36.png"
                />
                <img
                  className="h-4"
                  src="https://pngimg.com/d/red_star_PNG36.png"
                />
                <img
                  className="h-4"
                  src="https://pngimg.com/d/red_star_PNG36.png"
                />
              </div>
              <h3 className="text-[13px] text-gray-700 font-semibold">
                {data.price}
              </h3>
            </div>
          </div>

    );

}

export default Product;