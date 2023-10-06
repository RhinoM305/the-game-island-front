import * as React from 'react';
import { Routes, Route } from "react-router-dom";
const { Account, Cart } = require("./menu-option.js");

function NavBarMenuDisplay({setLoggedIn}) {
  let location = window.location.pathname;
  let prohibitedUrl = ["/account","/cart","/recent","/overview"]

  if(location === "/" || prohibitedUrl.includes(location)) location = "";
  return (
    <div
      className="absolute top-[154px] w-full z-[49] bg-black hidden p-4 h-3/4"
      id="menu-container"
    >
      <Routes>
        <Route path={`/account/*`} element={<Account setLoggedIn={setLoggedIn} />} />
        <Route path={`/cart`} element={<Cart />} />
      </Routes>
    </div>
  );
}

export default NavBarMenuDisplay;
