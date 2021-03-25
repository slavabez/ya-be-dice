import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex">
      <div className="p-5 transform -skew-x-6">
        <span className="text-4xl font-serif font-semibold bg-blue-600 p-2 text-white">BE dice</span>
      </div>
      <div className="p-5 transform flex flex-1 flex-row-reverse skew-x-6 space-x-2">
        <button className="border-4 border-blue-400 m-1 px-2">Profile</button>
        <button className="border-4 border-blue-600 m-1 px-2">Exit</button>
      </div>
    </header>
  );
};

export default Header;
