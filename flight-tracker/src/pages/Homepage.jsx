import React, { useEffect } from "react";

import Nav from "../components/Navbar";
import Dashboard from "../components/Dashboard";

function Homepage() {
  return (
    <div className="bg-dark">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default Homepage;
