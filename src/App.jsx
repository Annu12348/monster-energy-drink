import React, { useState } from "react";
import Router from "./utils/Router";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full min-h-screen bg-black  ">
      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />
      ) : (
        <Router />
      )}
    </div>
  );
};

export default App;