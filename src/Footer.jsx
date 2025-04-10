import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-white p-10 mt-20">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="inline-block fill-current">
     
    </svg>
    <h1 className="font-bold text-3xl  text-[#003EA4]">
    Action<span className='text-[#FFD337]'>Gallery</span>
    </h1>
    <h2 className='text-xl text-black font-medium'>Bid.
    Win.
    Own.</h2>
    <p className='flex gap-5 text-black'>
        <h3>Home</h3>
        <h3>Auctions</h3>
        <h3>Categories</h3>
        <h3>How to works</h3>
    </p>
    <p className='text-black'> © {new Date().getFullYear()} AuctionHub - All right reserved</p>
  </aside>
  
</footer>
        </div>
    );
};

export default Footer;