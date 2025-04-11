import { useState } from 'react'
import Navber from './Navber'
import Footer from './Footer'
import { FaHeart } from "react-icons/fa";
import Tables from './Table/Tables'
import { RxCross2 } from "react-icons/rx";



function App() {

  const handleRemove = (i) => {
    setHeartbid(heartbid.filter((item, index) => index !== i));
  };
  

  const [heartbid,setHeartbid] =  useState([])
 
const handleHeart = (table) =>{
  setHeartbid([...heartbid,table]);
}

console.log(heartbid)

  return (
    <>
    <Navber></Navber>
    <div className='ml-7'>
     <h1 className='mt-10 text-3xl'>Active Auctions</h1>
     <p className='mb-4 opacity-[80%] mt-2'>Discover and bid on extraordinary items</p>
    </div>
      <div className='table-container flex mx-4 gap-7'>
        <div className='left-side bg-[#F4F1F8] w-[70%]  border border-gray-200 rounded-xl p-3 '>
            <Tables handleHeart={handleHeart}></Tables>
        </div> 


        {/* right-side */}
        <div className='right-side bg-amber-100 w-[30%] p-3 rounded-xl items-center text-center'>
           <div className='flex items-center justify-center gap-2 text-2xl font-semibold py-3'>
              <FaHeart className='text-red-500' />
              <span>Favorite Items</span>
              
            </div>
            <p className='text-gray-500'> Add Product item : {heartbid.length}</p>

        <hr className='my-1 border-dashed' />
        {
  Array.isArray(heartbid) && heartbid.length > 0 ? (
    heartbid.map((heart, i) => (
      <div
        key={i}
        className="flex justify-between items-center bg-blue-100 mt-2 px-4 py-2 rounded shadow"
      >
        
        <div>
        <div className="flex items-center gap-3">
          <img
            src={heart.image}
            alt={heart.title}
            className="w-12 h-12 object-cover rounded"
          />
          <span className="font-medium">{heart.title}</span>
         
        </div>
        <div className='flex gap-3 p-3 items-center justify-around'>
          <p className='font-bold text-fuchsia-400'>${heart.currentBidPrice}</p>
          <p className='font-medium text-purple-600'>Bids : {heart.bidsCount}</p>
          </div>
        </div>



       

       
        <button
          onClick={() => handleRemove(i)}
          className="text-red-500 hover:text-red-700 font-bold text-xl"
        >
         <RxCross2 />
        </button>
      </div>
    ))
  ) : (
    <>
      <h2 className='text-xl font-extrabold p-2'>No favorites yet</h2>
      <p className='text-gray-700'>
        Click the heart icon on any item to add it to your favorites
      </p>
    </>
  )
}

        <hr className='my-1 border-dashed' />
           <div className="mt-4">
    <h1 className='text-lg font-semibold'>Total bids Amount</h1>
    <p className="text-xl text-green-700 font-bold">
      ${heartbid.reduce((total, item) => total + item.currentBidPrice, 0)}
    </p>
  </div>
              
        </div>
      </div>
     

  
   
    
    <Footer></Footer>
      
    </>
  )
}

export default App
