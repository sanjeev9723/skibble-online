import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="container">
      <header className="rounded-black d-flex flex-wrap justify-content-center  mb-4">
        <a
          href="/"
          className="d-flex p-2 align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none"
        >
          <span className="fs-4">Skibble Online</span>
        </a>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
