import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex">
      <div className="p-5 transform -skew-x-6">
        <span className="text-4xl font-serif font-semibold bg-blue-600 p-2 text-white">BE dice</span>
      </div>
      <div className="p-5 transform flex flex-1 flex-row-reverse skew-x-6">
        <a className="bg-blue-600 px-2 text-white" href="#">Profile</a>
        <a className="bg-purple-600 px-2 text-white" href="#">Debug</a>
        <a className="bg-blue-700 px-2 text-white" href="#">Exit</a>
      </div>
    </header>
  );
};

export default Header;
