import React from "react";

const Navbar = (props) => {
  return (
    <div className="bg-gradient-to-b from-black to-transparent w-full h-32 text-left px-14 flex items-center">
      <h2 className="text-3xl font-bold text-rose-600">
        The Phantom Troupe
        <span className="text-white">'s Memory Card</span>
      </h2>
    </div>
  );
};

export default Navbar;
