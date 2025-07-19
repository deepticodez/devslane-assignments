import React,{useState} from "react";
import TableRow from "./TableRow";

function Table(){

    /*const data=useState(2);
    const num=data[0];
    const updatenum=data[1];*/
    

    const [num,updatenum]=useState(2);

    function Nextdo(){
        updatenum(num+1);

    }
    return (
        <div>
            <button onClick={Nextdo}className="text-white bg-indigo-600 text-xl ml-8 px-4 py-2 rounded-sm mt-2">
                Next
            </button>
            <TableRow number={num} index={1}></TableRow>
            <TableRow number={num} index={2}></TableRow>
            <TableRow number={num} index={3}></TableRow>
            <TableRow number={num} index={4}></TableRow>
        </div>

    );

}

export default Table;