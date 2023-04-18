import thegameisland from "../content/images/thegameisland.png";
import "../index.css";
import React from "react";
import $ from "jquery";
import NavBarMenuDisplay from "./NavBarMenuDisplay.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
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
                if ($("#menu-container").is(":visible")) {
                  $("#menu-container").slideUp(250);
                } else {
                  $("#menu-container").slideDown(250);
                }
              }}
            >
              Stock
            </div>
            <div
              className="w-full text-center mx-2 hover:text-[yellow] hover:border-b-2 hover:border-[yellow]"
              onClick={() => {
                if ($("#menu-container").is(":visible")) {
                  $("#menu-container").slideUp(250);
                } else {
                  $("#menu-container").slideDown(250);
                }
              }}
            >
              Account
            </div>
            <div
              className="w-full text-center mx-2 hover:text-[yellow] hover:border-b-2 hover:border-[yellow]"
              onClick={() => {
                if ($("#menu-container").is(":visible")) {
                  $("#menu-container").slideUp(250);
                } else {
                  $("#menu-container").slideDown(250);
                }
              }}
            >
              Recent
            </div>
            <div
              className="w-full text-center mx-2 hover:text-[yellow] hover:border-b-2 hover:border-[yellow]"
              onClick={() => {
                if ($("#menu-container").is(":visible")) {
                  $("#menu-container").slideUp(250);
                } else {
                  $("#menu-container").slideDown(250);
                }
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </div>
        </div>
      </div>
      <div
        id="menu-container"
        className="fixed top-[154px] w-full h-1/2 z-[49] bg-white hidden"
      >
        <NavBarMenuDisplay />
      </div>
    </>
  );
}

export default NavBar;
