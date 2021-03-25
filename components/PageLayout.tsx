import React from "react";
import Header from "./Header";

const PageLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">{children}</main>

      <footer className="text-center bg-blue-500 text-gray-100">be-dice.com 2021</footer>
    </div>
  );
};

export default PageLayout;
