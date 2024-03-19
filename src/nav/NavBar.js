import thegameisland from "../content/images/thegameisland2.png";
import "../index.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductNavMobile from "./ProductNavMobile.js"
import {disableScroll,enableScroll} from "../Util/toggleScroll.js"

import $ from "jquery";
import NavBarMenuDisplay from "./NavBarMenuDisplay.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faHouse } from "@fortawesome/free-solid-svg-icons";

//backend use
import { useQuery } from "@apollo/client";
import { LOAD_CUSTOMER } from "../graphQL/Queries";

function NavBar({setProductDetail}) {
  let [clicked, setClicked] = useState(null);
  let [query, setQuery] = useState("");
  let [loggedIn, setLoggedIn] = useState(false);
  let prohibitedUrl = ["/account","/cart","/loginForm","/userCreate"]

  const token = localStorage.getItem("thegameislandToken")

  const navigate = useNavigate();
  let location = window.location.pathname;
  
  if(location.split("/").includes("account")) $("#menu-container").show();
  if(location.split("/").includes("cart")) $("#menu-container").show();
  if(location.split("/").includes("cart") && clicked !== "cart") setClicked("cart");

  if(location === "/" || prohibitedUrl.includes(location)) location = "";

  const variables = {
    input: token
}
  const { error, loading, data, refetch} = useQuery(LOAD_CUSTOMER,{
    variables: variables,
  });

  useEffect(() => {    
    if(data) {
    const customerInfo = data.loginUser
    localStorage.setItem('thegameislandCustyInfo', JSON.stringify({firstName: customerInfo.firstName , lastName: customerInfo.lastName, email: customerInfo.email,address: customerInfo.address, id: customerInfo.id, orders: customerInfo.orders}))
    }
    
  },[data])

  useEffect(() => {
    if (token && loggedIn === false) {
      setLoggedIn(true)
  }
    },[])

  function shortenUrl() {
    return location.split("/").filter((i) => prohibitedUrl.includes(`/${i}`) || i == "/" || i == "" ? "": `/${i}`).map((i) => `/${i}`).join()
  }

  if(window.location.pathname == shortenUrl() || shortenUrl() == "" && window.location.pathname == "/") $("#menu-container").slideUp()

  let handleSearchInput = (event) => {
    setQuery(`${event.target.value}`)
  }

  let handleSearchSubmit = () => {
    navigate(`/productView/?search=${query}`)
  }

  if($("#menu-container").is(":visible")) {
    disableScroll()
  } else {
    enableScroll()
  }

  const handleKeyPress = (event) => {
    if(event.key === "Enter") handleSearchSubmit(event);
    return;
  }
  return (
<>

<div>
      <div className="z-[48] w-full top-0 left-0 bg-[#1E1E1E] max-[500px]:h-[55px] max-[1080px]:fixed min-[500px]:h-[70px] min-[800px]:h-[75px] min-[1000px]:h-[85px] min-[1200px]:h-[95px] min-[1400px]:h-[105px] min-[1600px]:h-[115px] min-[1800px]:h-[125px] min-[1080px]:h-[155px]">
      {/* hamburger menu */}
      <ProductNavMobile setProductDetail={setProductDetail} setClicked={setClicked} clicked={clicked} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <div
        name="container-for-hamburger"
        className="flex fixed justify-end items-center z-40 w-full h-[4rem] visible min-[1080px]:invisible"
      >
        <div className="z-50" id="fixed-menu">
          <svg
            className="mb-2 ham ham6"
            viewBox="0 0 100 100"
            width="65"
            id="hamburger"
            onClick={() => {
              $(this).toggleClass("open");
              $("#hamburger").toggleClass("active");
              $(".mobilenav--wrap").toggleClass("show--mobilenav");
              $("body").toggleClass("fixed");
            }}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            />
          </svg>
        </div>
      </div>
      {/* desktop menu */}
        <div className="flex items-end w-full h-full max-[1080px]:justify-center min-[1080px]:justify-between">
          <img src={thegameisland} className="h-full w-[45%] scale-[.8] min-[1080px]:h-full min-[1080px]:w-[20%] min-[1080px]:mt-2 min-[1080px]:ml-4 min-[1080px]:hover:scale-[.9] min-[1080px]:scale-[.8] min-[1080px]:cursor-pointer" onClick={() => {navigate("/");  setClicked(null);}}/>
          <div className="flex h-min w-[35%] mr-4 text-4xl text-white font-Rubik mb-4 max-[1080px]:hidden">
            <div className="flex w-full ">
              <input
                className="w-full pl-2 mx-2 font-sans bg-transparent border-b-2 border-[#51A451] "
                placeholder="Search our inventory!"
                onChange={(e) => handleSearchInput(e)}
                value={query}
                onKeyDown={e => handleKeyPress(e)}
                
              />
              <button
                className="w-[50px] border-[#51A451] text-white text-md bg-transparent p-2 mr-4"
              >
                <i className="text-white fa fa-search" onClick={() => handleSearchSubmit()}></i>
              </button>
            </div>
          </div>
          <div
            id="mainNavMenu"
            className="w-[50%] h-full text-white font-Titan-One flex text-4xl items-end justify-end mb-4 max-[1080px]:hidden"
          >

            <div
              className="w-[5%] text-2xl text-center mx-2  hover:border-b-2 hover:border-[#51A451]"
              onClick={() => {
                if(!loggedIn) {navigate("/loginForm");return;}
                if (clicked === "account") {
                  navigate(`/`)
                  setClicked(null);
                  $("#menu-container").hide();
                  return;
                } else if ($("#menu-container").is(":hidden")) {
                  setClicked("account");

                  navigate(`/account`);
                  $("#menu-container").show();
                  return;
                } else {
                  navigate(`/account`);

                  setClicked("account");
                }
              }}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div
              className="w-[5%] text-2xl text-center mx-2  hover:border-b-2 hover:border-[#51A451]"
              onClick={() => {
                if(!loggedIn) {navigate("/loginForm");return;}
                if (clicked === "cart") {
                  navigate(`/`)
                  setClicked(null);
                  $("#menu-container").hide();
                  return;
                } else if ($("#menu-container").is(":hidden")) {
                  setClicked("cart");

                  navigate(`/cart`);
                  $("#menu-container").show();
                  return;
                } else {
                  navigate(`/cart`);

                  setClicked("cart");
                }
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </div>

          </div>
        </div>
      </div>
      <NavBarMenuDisplay setLoggedIn={setLoggedIn} refetch={refetch} setClicked={setClicked} clicked={clicked}/>
      {/* mobile search */}
      <div className="absolute flex w-full min-[1080px]:hidden text-white">
              <input
                className="w-full pl-2 mx-4 mt-8 font-sans bg-transparent border-2 rounded-lg border-[#51A451] "
                placeholder="Search our inventory!"
                onChange={(e) => handleSearchInput(e)}
                value={query}
                onKeyDown={e => handleKeyPress(e)}
                
              />
              <button
                className="w-[25px] border-[#51A451] text-white text-md bg-transparent mr-4 mt-2"
              >
                <i className="text-white fa fa-search" onClick={() => handleSearchSubmit()}></i>
              </button>
            </div>
                <div className="fixed bg-black z-[49] bottom-[10px] right-[5px] w-[45px] h-[45px] flex justify-center items-center rounded-full min-[1080px]:hidden"><FontAwesomeIcon icon={faHouse} size="lg" style={{color:"white"}} onClick={() => navigate(`/`)}/></div>
                <div className="fixed bg-black z-[49] bottom-[55px] right-[5px] w-[45px] h-[45px] flex justify-center items-center rounded-full min-[1080px]:hidden"><FontAwesomeIcon icon={faCartShopping} size="lg" style={{color:"white"}}               onClick={() => {
                if(!loggedIn) {navigate("/loginForm");return;}

                if (clicked === "cart") {
                  navigate(`/`)
                  setClicked(null);
                  $("#menu-container").hide();
                  return;
                } else if ($("#menu-container").is(":hidden")) {
                  setClicked("cart");

                  navigate(`/cart`);
                  $("#menu-container").show();
                  return;
                } else {
                  navigate(`/cart`);

                  setClicked("cart");
                }
              }}/></div>

    </div>
</>
  );
}

export default NavBar;

  