import thegameisland from "../content/images/thegameisland2.png";
import "../index.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import $ from "jquery";
import NavBarMenuDisplay from "./NavBarMenuDisplay.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons";

//backend use
import { useQuery } from "@apollo/client";
import { LOAD_CUSTOMER } from "../graphQL/Queries";

function NavBar() {
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

  const handleKeyPress = (event) => {
    if(event.key === "Enter") handleSearchSubmit(event);
    return;
  }
  return (
    <>
      <div className="z-[48] h-[155px] w-full top-0 left-0">
        <div className="flex items-center justify-between w-full h-full">
          <img src={thegameisland} className="h-full w-[20%] mt-2 ml-4 hover:scale-[.9] scale-[.8] cursor-pointer" onClick={() => {navigate("/");  setClicked(null);}}/>
          <div className="flex w-[35%] mr-4 text-4xl text-white font-Rubik">
            <div className="flex w-full">
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
            className="w-[50%] h-full text-white font-Titan-One flex text-4xl items-center justify-end"
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
            {/* <div className="text-sm" onClick={() => {refetch(); console.log("refetch ran")}}>
              refetch
            </div> */}
          </div>
        </div>
      </div>
      <NavBarMenuDisplay setLoggedIn={setLoggedIn} refetch={refetch}/>
    </>
  );
}

export default NavBar;
