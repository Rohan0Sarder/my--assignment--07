import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";

const Table = ({tables,handleHeart}) => {

    const [clicked,setClicked] = useState (false)
    
//   console.log(tables)
    return (
        <div className="">
      <div className=" ">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Items</th>
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
                <th></th>
              </tr>
            </thead>
        
    <tbody>
        {tables.map(table=>(
          <tr key={table.id}>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={table.image}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              <div>
                <div className="lg:font-bold">{table.title}</div>
              </div>
            </div>
          </td>
          <td>${table.currentBidPrice}</td>
          <td>{table.timeLeft}</td>
          <td>
            <button onClick={() =>{ handleHeart(table); 
                setClicked(!clicked)}}>
            <FaHeart size={'25px'} color={clicked ? 'red' : 'gray'} />
            </button>
          </td>
        </tr>
            
        ))}
    

    
      
     
    </tbody>
   
   
  </table>
</div>
            </div>
           
        </div>
    );
};

export default Table;