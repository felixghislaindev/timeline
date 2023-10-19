import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <span className="text-black">Timeline</span>
          <span className="text-indigo-600">Builder.</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
