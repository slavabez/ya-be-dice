import React from "react";

const PageLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex">
        <div className="">
          <span className="text-4xl font-serif font-semibold">BE dice</span>
        </div>
        <div className="flex flex-1 flex-row-reverse">
          <button>Profile</button>
          <button>Exit</button>
        </div>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="text-center bg-blue-500 text-gray-100">be-dice.com 2021</footer>
    </div>
  );
};

export default PageLayout;
