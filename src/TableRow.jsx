import React from "react";

function TableRow({number,index}){
    return (
        <div className="text-xl text-indigo-600 px-8 py-2 font-semibold">
            {number} X {index} ={number*index}
        </div>

    )
}




export default TableRow;