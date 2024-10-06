import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [activePage, setActivePage] = useState(window.location.pathname);

  useEffect(() => {
    if (activePage === "/assesment") {
      window.history.pushState({}, "", "/assesment");
    } else {
      window.history.pushState({}, "", "/");
    }
  }, [activePage]);

  const handleLogin = () => {
    setActivePage("/assesment");
  };

  return (
    <>
      {activePage === "/" && <Login onLogin={handleLogin} />}
      {activePage === "/assesment" && <Dashboard />}
    </>
  );
}

export default App;
