import * as React from 'react';
import { Routes, Route } from "react-router-dom";
const { Account, Cart } = require("./menu-option.js");

function NavBarMenuDisplay({setLoggedIn,refetch}) {
  let location = window.location.pathname;
  let prohibitedUrl = ["/account","/cart","/recent","/overview"]

  if(location === "/" || prohibitedUrl.includes(location)) location = "";
  return (
    <div
      className="absolute top-[154px] w-full px-[200px] z-[49] bg-black hidden p-4 h-3/4 font-Rubik"
      id="menu-container"
    >
      <Routes>
        <Route path={`/account/*`} element={<Account setLoggedIn={setLoggedIn} />} />
        <Route path={`/cart`} element={<Cart setLoggedIn={setLoggedIn} refetch={refetch}/>} />
      </Routes>
    </div>
  );
}

export default NavBarMenuDisplay;
