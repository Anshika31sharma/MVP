import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const [activePage, setActivePage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  const navigateTo = (page) => {
    setActivePage(page);
    window.history.pushState({}, "", page);
  };

  const handleLogin = () => {
    navigateTo("/assesment");
  };

  return (
    <>
      {activePage === "/" && <Login onLogin={handleLogin} />}
      {activePage === "/assesment" && <Dashboard />}
      
    </>
  );
}

export default App;
