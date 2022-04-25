import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import CustomeRoutes from "./routes/CustomeRoutes";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <CustomeRoutes />
      </Router>
    </div>
  );
};

export default App;
