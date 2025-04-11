import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";

const Table = ({ tables, handleHeart }) => {
  const [clicked, setClicked] = useState([]); 

  const handleClick = (table) => {
    const isClicked = clicked.includes(table.id);
    const updatedClicked = isClicked
      ? clicked.filter(id => id !== table.id) 
      : [...clicked, table.id];               

    setClicked(updatedClicked); 
    handleHeart(table); 
  };

  return (
    <div>
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
            {tables.map(table => (
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
                  <button onClick={() => handleClick(table)}>
                    <FaHeart
                      size={'25px'}
                      color={clicked.includes(table.id) ? 'red' : 'gray'}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
