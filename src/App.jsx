import Navbar from "./components/Navbar";
import React from "react";
import ReactDOM from "react-dom/client";
const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
