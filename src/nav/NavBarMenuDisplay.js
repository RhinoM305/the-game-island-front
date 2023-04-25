import { Routes, Route } from "react-router-dom";

const { Stock, Account, Recent, Cart } = require("./menu-option.js");

function NavBarMenuDisplay() {
  return (
    <div
      className="fixed top-[154px] w-full h-1/2 z-[49] bg-black hidden"
      id="menu-container"
    >
      <Routes>
        <Route path="/stock" element={<Stock />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default NavBarMenuDisplay;
