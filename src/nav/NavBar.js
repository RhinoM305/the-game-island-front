import thegameisland from "../content/images/thegameisland.png";
import "../index.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import $ from "jquery";
import NavBarMenuDisplay from "./NavBarMenuDisplay.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const navigate = useNavigate();
  let [clicked, setClicked] = useState(null);

  let menuWidth;

  return (
    <>
      <div className="z-[48] h-[155px] w-full backdrop-filter bg-opacity-40 backdrop-blur-lg bg-black fixed top-0 left-0">
        <div className="flex items-center justify-between w-full h-full">
          <img src={thegameisland} className="h-full w-[20%] mt-2 ml-4" />
          <div className="flex w-[35%] mr-4 text-4xl text-white font-Titan-One">
            <div className="flex w-full">
              <input
                className="mx-2 w-full border-2 rounded-lg border-white bg-transparent font-sans pl-1"
                placeholder="Search our inventory!!"
              />
              <button
                className="w-[50px] border-2 rounded-lg border-white text-white text-md bg-transparent p-2 mr-4
          "
              >
                <i className="text-white fa fa-search"></i>
              </button>
            </div>
          </div>
          <div
            id="mainNavMenu"
            className="w-[50%] h-full text-white font-Titan-One flex text-4xl items-center"
          >
            <div
              className="w-full text-center mx-2 hover:text-[yellow] hover:border-b-2 hover:border-[yellow]"
              onClick={() => {
                if (clicked === "stock") {
                  navigate("/");
                  setClicked(null);
                  $("#menu-container").slideUp(250);
                  return;
                } else if ($("#menu-container").is(":hidden")) {
                  setClicked("stock");

                  navigate("/stock");
                  $("#menu-container").slideDown(250);
                  return;
                } else {
                  navigate("/stock");

                  setClicked("stock");
                }
              }}
            >
              Stock
            </div>
            <div
              className="w-full text-center mx-2 hover:text-[yellow] hover:border-b-2 hover:border-[yellow]"
              onClick={() => {
                if (clicked === "account") {
                  navigate("/");
                  setClicked(null);
                  $("#menu-container").slideUp(250);
                  return;
                } else if ($("#menu-container").is(":hidden")) {
                  setClicked("account");

                  navigate("/account");
                  $("#menu-container").slideDown(250);
                  return;
                } else {
                  navigate("/account");

                  setClicked("account");
                }
              }}
            >
              Account
            </div>
            <div
              className="w-full text-center mx-2 hover:text-[yellow] hover:border-b-2 hover:border-[yellow]"
              onClick={() => {
                if (clicked === "recent") {
                  navigate("/");
                  setClicked(null);
                  $("#menu-container").slideUp(250);
                  return;
                } else if ($("#menu-container").is(":hidden")) {
                  setClicked("recent");

                  navigate("/recent");
                  $("#menu-container").slideDown(250);
                  return;
                } else {
                  navigate("/recent");

                  setClicked("recent");
                }
              }}
            >
              Recent
            </div>
            <div
              className="w-full text-center mx-2 hover:text-[yellow] hover:border-b-2 hover:border-[yellow]"
              onClick={() => {
                if (clicked === "cart") {
                  navigate("/");
                  setClicked(null);
                  $("#menu-container").slideUp(250);
                  return;
                } else if ($("#menu-container").is(":hidden")) {
                  setClicked("cart");

                  navigate("/cart");
                  $("#menu-container").slideDown(250);
                  return;
                } else {
                  navigate("/cart");

                  setClicked("cart");
                }
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </div>
        </div>
      </div>
      <NavBarMenuDisplay />
    </>
  );
}

export default NavBar;
