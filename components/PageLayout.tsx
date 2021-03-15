import React from "react";

const PageLayout: React.FC = ({children}) => {

  return <div className="flex flex-col">
    <header>
      Header
    </header>
    <main>
      {children}
    </main>
    <footer>
      Footer
    </footer>
  </div>

};

export default PageLayout;
