import React from 'react';
import { GrNotification } from "react-icons/gr";

const Navber = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 w-full  px-8 shadow-sm">
  <div className="flex-1">
    <a className=" btn-ghost font-bold text-xl text-[#003EA4]">Action<span className='text-[#FFD337]'>Gallery</span></a>
  </div>
  <div className='flex gap-6 w-[60%] mx-auto'>
    <h3>Home</h3>
    <h3>Auctions</h3>
    <h3>Categories</h3>
    <h3>How to works</h3>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <GrNotification style={{ fontSize: '20px' }} /> </svg>
          <span className="badge badge-sm indicator-item">9</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">9 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
          

<div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/C3hHCNQR/Banner-min.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="w-[90%] mx-auto flex items-center">
    <div className="max-w-lg">
      <h1 className="mb-5 text-4xl text-white font-bold">
        Bid on Unique Items from Around the World
      </h1>
      <p className="mb-5 text-white">
        Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
      </p>
      <button className="btn btn-primary bg-white text-black rounded-4xl p-6">Explore Auctions</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Navber;