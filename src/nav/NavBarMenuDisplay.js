import * as React from 'react';
import { Routes, Route } from "react-router-dom";
const { Account, Cart } = require("./menu-option.js");

function NavBarMenuDisplay({setLoggedIn,refetch,setClicked,clicked}) {
  let location = window.location.pathname;
  let prohibitedUrl = ["/account","/cart","/recent","/overview"]

  if(location === "/" || prohibitedUrl.includes(location)) location = "";
  return (
    <div
      className="absolute w-full px-[25px] z-[49] bg-black hidden p-4 h-3/4 font-Rubik max-[1080px]:top-[0px] max-[1080px]:px-[10px] max-[1080px]:h-full min-[1200px]:fixed min-[1200px]:top-[95px] min-[1080px]:top-[154px] min-[1400px]:top-[115px]"
      id="menu-container"
    >
      <Routes>
        <Route path={`/account/*`} element={<Account setLoggedIn={setLoggedIn} setClicked={setClicked} clicked={clicked}/>} />
        <Route path={`/cart`} element={<Cart setLoggedIn={setLoggedIn} refetch={refetch}/>} />
      </Routes>
    </div>
  );
}

export default NavBarMenuDisplay;
