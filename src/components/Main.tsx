import React from "react";

//ErrorBoundary doesn't work properly
//I'll fix it later
const Main = () => {
  const test = true;
  if (test) throw new Error("Main fail");
  else {
    return <main className="content">Main</main>;
  }
};

export default Main;
