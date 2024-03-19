import * as React from 'react';
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import $ from "jquery";
import "../index.css";

function ProductNavMobile({setProductDetail,setClicked,clicked,loggedIn,setLoggedIn}) {
    const navigate = useNavigate();
    //mobile menu;
    return (
    <div className="mobilenav--wrap min-[1080px]:hidden">
            <div className="bg-black mobilenav backdrop-filter">
              <ul className="">
                <li className="pb-1 pl-2 border-b-[1px] border-white">
                  <button
                    className="text-white font-helvetica-neue noSelect"
                    onClick={() => {
                      $("#hamburger").toggleClass("active");
                      $(".mobilenav--wrap").toggleClass("show--mobilenav");
                      $("body").toggleClass("fixed");
                     
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
                          $("#hamburger").toggleClass("active");
                          return;
                        } else {
                          navigate(`/account`);
        
                          setClicked("account");
                        }
                      }
                    }
                  >
                    Account
                  </button>
                </li>
                <li className="pb-1 pl-2 border-b-[1px] border-white">
                  <button
                    className="text-white font-helvetica-neue noSelect"
                    onClick={() => {
                      // $("#hamburger").toggleClass("active");
                      // $(".mobilenav--wrap").toggleClass("show--mobilenav");
                      $("#Mobile-Nintendo").is(":visible") ? $("#Mobile-Nintendo").hide() : $("#Mobile-Nintendo").show();
                    }}
                  >
                    Nintendo
                  </button>
                </li>
                <li className="hidden" id="Mobile-Nintendo">
                <ul className="text-white bg-[#101314]">
                    <li className="pb-1 pl-8">
                      <div className="flex items-center" onClick={() => $("#NES-MOBILE").is(":visible") ? $("#NES-MOBILE").hide() : $("#NES-MOBILE").show()}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      NES
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="NES-MOBILE">
                    <li onClick={() => {setProductDetail({name: "Nintendo Entertainment System", type: "games"}); navigate(`/productView/nes-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                    <li onClick={() => {setProductDetail({name: "Nintendo Entertainment System", type: "accessories"}); navigate(`/productView/nes-accesories`); $("body").toggleClass("fixed"); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                    <li onClick={() => {setProductDetail({name: "Nintendo Entertainment System", type: "systems"}); navigate(`/productView/nes-systems`); $("body").toggleClass("fixed"); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => $("#SNES-MOBILE").is(":visible") ? $("#SNES-MOBILE").hide() : $("#SNES-MOBILE").show()}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      SNES
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="SNES-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Super Nintendo Entertainment System", type: "games"}); navigate(`/productView/snes-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Super Nintendo Entertainment System", type: "accessories"}); navigate(`/productView/snes-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Super Nintendo Entertainment System", type: "systems"}); navigate(`/productView/snes-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => $("#N64-MOBILE").is(":visible") ? $("#N64-MOBILE").hide() : $("#N64-MOBILE").show()}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      N64
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="N64-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Nintendo 64", type: "games"}); navigate(`/productView/nintendo-64-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Nintendo 64", type: "accessories"}); navigate(`/productView/nintendo-64-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Nintendo 64", type: "systems"}); navigate(`/productView/nintendo-64-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#GameCube-MOBILE").is(":visible") ? $("#GameCube-MOBILE").hide() : $("#GameCube-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      GameCube
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="GameCube-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Gamecube", type: "games"}); navigate(`/productView/gamecube-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Gamecube", type: "accessories"}); navigate(`/productView/gamecube-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Gamecube", type: "systems"}); navigate(`/productView/gamecube-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#WII-MOBILE").is(":visible") ? $("#WII-MOBILE").hide() : $("#WII-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      WII
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="WII-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Wii", type: "games"}); navigate(`/productView/wii-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Wii", type: "accessories"}); navigate(`/productView/wii-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Wii", type: "systems"}); navigate(`/productView/wii-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#WII-U-MOBILE").is(":visible") ? $("#WII-U-MOBILE").hide() : $("#WII-U-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      WII U
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="WII-U-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Wii U", type: "games"}); navigate(`/productView/wii-u-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Wii U", type: "accessories"}); navigate(`/productView/wii-u-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Wii U", type: "systems"}); navigate(`/productView/wii-u-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Virtual-Boy-MOBILE").is(":visible") ? $("#Virtual-Boy-MOBILE").hide() : $("#Virtual-Boy-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Virtual Boy
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Virtual-Boy-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Virtual Boy", type: "games"}); navigate(`/productView/virtual-boy-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Virtual Boy", type: "accessories"}); navigate(`/productView/virtual-boy-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Virtual Boy", type: "systems"}); navigate(`/productView/virtual-boy-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Nintendo-Switch-MOBILE").is(":visible") ? $("#Nintendo-Switch-MOBILE").hide() : $("#Nintendo-Switch-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Nintendo Switch
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Nintendo-Switch-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Nintendo Switch", type: "games"}); navigate(`/productView/nintendo-switch-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Nintendo Switch", type: "accessories"}); navigate(`/productView/nintendo-switch-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Nintendo Switch", type: "systems"}); navigate(`/productView/nintendo-switch-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#GameBoy-MOBILE").is(":visible") ? $("#GameBoy-MOBILE").hide() : $("#GameBoy-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      GameBoy
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="GameBoy-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Gameboy", type: "games"}); navigate(`/productView/gameboy-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Gameboy", type: "accessories"}); navigate(`/productView/gameboy-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Gameboy", type: "systems"}); navigate(`/productView/gameboy-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#GameBoy-Color-MOBILE").is(":visible") ? $("#GameBoy-Color-MOBILE").hide() : $("#GameBoy-Color-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      GameBoy Color
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="GameBoy-Color-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Gameboy Color", type: "games"}); navigate(`/productView/gameboy-color-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Gameboy Color", type: "accessories"}); navigate(`/productView/gameboy-color-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Gameboy Color", type: "systems"}); navigate(`/productView/gameboy-color-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#GameBoy-Advance-MOBILE").is(":visible") ? $("#GameBoy-Advance-MOBILE").hide() : $("#GameBoy-Advance-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      GameBoy Advance
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="GameBoy-Advance-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Gameboy Advance", type: "games"}); navigate(`/productView/gameboy-advance-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Gameboy Advance", type: "accessories"}); navigate(`/productView/gameboy-advance-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Gameboy Advance", type: "systems"}); navigate(`/productView/gameboy-advance-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Nintendo-DS-MOBILE").is(":visible") ? $("#Nintendo-DS-MOBILE").hide() : $("#Nintendo-DS-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Nintendo DS
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Nintendo-DS-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Nintendo DS", type: "games"}); navigate(`/productView/nintendo-ds-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Nintendo DS", type: "accessories"}); navigate(`/productView/nintendo-ds-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Nintendo DS", type: "systems"}); navigate(`/productView/nintendo-ds-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Nintendo-3DS-MOBILE").is(":visible") ? $("#Nintendo-3DS-MOBILE").hide() : $("#Nintendo-3DS-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Nintendo 3DS
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Nintendo-3DS-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Nintendo 3DS", type: "games"}); navigate(`/productView/nintendo-3ds-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Nintendo 3DS", type: "accessories"}); navigate(`/productView/nintendo-3ds-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Nintendo 3DS", type: "systems"}); navigate(`/productView/nintendo-3ds-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                  </ul>
                </li>
                <li className="pb-1 pl-2 border-b-[1px] border-white">
                  <button
                    className="text-white font-helvetica-neue noSelect"
                    onClick={() => {
                      // $("#hamburger").toggleClass("active");
                      // $(".mobilenav--wrap").toggleClass("show--mobilenav");
                      $("#Mobile-Xbox").is(":visible") ? $("#Mobile-Xbox").hide() : $("#Mobile-Xbox").show();

                    }}
                  >
                    Xbox
                  </button>
                </li>
                <li className="hidden" id="Mobile-Xbox">
                <ul className="text-white bg-[#101314]">
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => $("#Xbox-MOBILE").is(":visible") ? $("#Xbox-MOBILE").hide() : $("#Xbox-MOBILE").show()}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Xbox
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Xbox-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Xbox", type: "games"}); navigate(`/productView/xbox-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Xbox", type: "accessories"}); navigate(`/productView/xbox-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Xbox", type: "systems"}); navigate(`/productView/xbox-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Xbox-One-MOBILE").is(":visible") ? $("#Xbox-One-MOBILE").hide() : $("#Xbox-One-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Xbox One
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Xbox-One-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Xbox One", type: "games"}); navigate(`/productView/xboxone-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Xbox One", type: "accessories"}); navigate(`/productView/xboxone-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Xbox One", type: "systems"}); navigate(`/productView/xboxone-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Xbox-360-MOBILE").is(":visible") ? $("#Xbox-360-MOBILE").hide() : $("#Xbox-360-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Xbox 360
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Xbox-360-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Xbox 360", type: "games"}); navigate(`/productView/xbox360-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Xbox 360", type: "accessories"}); navigate(`/productView/xbox360-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Xbox 360", type: "systems"}); navigate(`/productView/xbox360-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Xbox-Series-X-MOBILE").is(":visible") ? $("#Xbox-Series-X-MOBILE").hide() : $("#Xbox-Series-X-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Xbox Series X
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Xbox-Series-X-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Xbox Series X", type: "games"}); navigate(`/productView/xboxseriesx-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Xbox Series X", type: "accessories"}); navigate(`/productView/xboxseriesx-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Xbox Series X", type: "systems"}); navigate(`/productView/xboxseriesx-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                  </ul>
                </li>
                <li className="pb-1 pl-2 border-b-[1px] border-white">
                  <button
                    className="text-white font-helvtica-neue noSelect"
                    onClick={() => {
                      // $("#hamburger").toggleClass("active");
                      // $(".mobilenav--wrap").toggleClass("show--mobilenav");
                      $("#Mobile-Sega").is(":visible") ? $("#Mobile-Sega").hide() : $("#Mobile-Sega").show();

                    }}
                  >
                    Sega
                  </button>
                </li>
                <li className="hidden" id="Mobile-Sega">
                <ul className="text-white bg-[#101314]">
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => $("#Sega-Master-System-MOBILE").is(":visible") ? $("#Sega-Master-System-MOBILE").hide() : $("#Sega-Master-System-MOBILE").show()}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Sega Master System
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Sega-Master-System-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Sega Master System", type: "games"}); navigate(`/productView/master-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Sega Master System", type: "accessories"}); navigate(`/productView/master-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Sega Master System", type: "systems"}); navigate(`/productView/master-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Sega-CD-MOBILE").is(":visible") ? $("#Sega-CD-MOBILE").hide() : $("#Sega-CD-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Sega CD
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Sega-CD-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Sega CD", type: "games"}); navigate(`/productView/segacd-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Sega CD", type: "accessories"}); navigate(`/productView/segacd-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Sega CD", type: "systems"}); navigate(`/productView/segacd-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Saturn-MOBILE").is(":visible") ? $("#Saturn-MOBILE").hide() : $("#Saturn-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Saturn
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Saturn-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Sega Saturn", type: "games"}); navigate(`/productView/saturn-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Sega Saturn", type: "accessories"}); navigate(`/productView/saturn-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Sega Saturn", type: "systems"}); navigate(`/productView/saturn-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Genesis-MOBILE").is(":visible") ? $("#Genesis-MOBILE").hide() : $("#Genesis-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Genesis
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Genesis-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Sega Genesis", type: "games"}); navigate(`/productView/genesis-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Sega Genesis", type: "accessories"}); navigate(`/productView/genesis-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Sega Genesis", type: "systems"}); navigate(`/productView/genesis-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Sega-32X-MOBILE").is(":visible") ? $("#Sega-32X-MOBILE").hide() : $("#Sega-32X-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Sega 32X
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Sega-32X-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Sega 32X", type: "games"}); navigate(`/productView/sega32x-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Sega 32X", type: "accessories"}); navigate(`/productView/sega32x-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Sega 32X", type: "systems"}); navigate(`/productView/sega32x-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Dreamcast-MOBILE").is(":visible") ? $("#Dreamcast-MOBILE").hide() : $("#Dreamcast-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Dreamcast
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Dreamcast-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Dreamcast", type: "games"}); navigate(`/productView/dreamcast-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Dreamcast", type: "accessories"}); navigate(`/productView/dreamcast-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Dreamcast", type: "systems"}); navigate(`/productView/dreamcast-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                  </ul>
                </li>
                <li className="pb-1 pl-2 border-b-[1px] border-white">
                  <button
                    className="text-white font-helvtica-neue noSelect"
                    onClick={() => {
                      // $("#hamburger").toggleClass("active");
                      // $(".mobilenav--wrap").toggleClass("show--mobilenav");
                      $("#Mobile-Playstation").is(":visible") ? $("#Mobile-Playstation").hide() : $("#Mobile-Playstation").show();

                    }}
                  >
                    Playstation
                  </button>
                </li>
                <li className="hidden" id="Mobile-Playstation">
                <ul className="text-white bg-[#101314]">
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => $("#Playstation-MOBILE").is(":visible") ? $("#Playstation-MOBILE").hide() : $("#Playstation-MOBILE").show()}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Playstation
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Playstation-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Playstation", type: "games"}); navigate(`/productView/playstation-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Playstation", type: "accessories"}); navigate(`/productView/playstation-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Playstation", type: "systems"}); navigate(`/productView/playstation-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Playstation2-MOBILE").is(":visible") ? $("#Playstation2-MOBILE").hide() : $("#Playstation2-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Playstation 2
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Playstation2-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Playstation 2", type: "games"}); navigate(`/productView/playstation2-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Playstation 2", type: "accessories"}); navigate(`/productView/playstation2-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Playstation 2", type: "systems"}); navigate(`/productView/playstation2-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Playstation-3-MOBILE").is(":visible") ? $("#Playstation-3-MOBILE").hide() : $("#Playstation-3-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Playstation 3
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Playstation-3-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Playstation 3", type: "games"}); navigate(`/productView/playstation3-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Playstation 3", type: "accessories"}); navigate(`/productView/playstation3-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Playstation 3", type: "systems"}); navigate(`/productView/playstation3-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#Playstation-4-MOBILE").is(":visible") ? $("#Playstation-4-MOBILE").hide() : $("#Playstation-4-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Playstation 4
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Playstation-4-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Playstation 4", type: "games"}); navigate(`/productView/playstation4-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Playstation 4", type: "accessories"}); navigate(`/productView/playstation4-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Playstation 4", type: "systems"}); navigate(`/productView/playstation4-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#PSP-MOBILE").is(":visible") ? $("#PSP-MOBILE").hide() : $("#PSP-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      PSP
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="PSP-MOBILE">
                  <li onClick={() => {setProductDetail({name: "PSP", type: "games"}); navigate(`/productView/playstationpsp-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "PSP", type: "accessories"}); navigate(`/productView/playstationpsp-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "PSP", type: "systems"}); navigate(`/productView/playstationpsp-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {$("#VITA-MOBILE").is(":visible") ? $("#VITA-MOBILE").hide() : $("#VITA-MOBILE").show()}}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      VITA
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="VITA-MOBILE">
                  <li onClick={() => {setProductDetail({name: "VITA", type: "games"}); navigate(`/productView/playstationvita-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "VITA", type: "accessories"}); navigate(`/productView/playstationvita-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "VITA", type: "systems"}); navigate(`/productView/playstationvita-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                  </ul>
                </li>
                <li className="pb-1 pl-2 border-b-[1px] border-white">
                  <button
                    className="text-white font-helvtica-neue noSelect"
                    onClick={() => {
                      // $("#hamburger").toggleClass("active");
                      // $(".mobilenav--wrap").toggleClass("show--mobilenav");
                      $("#Mobile-Atari").is(":visible") ? $("#Mobile-Atari").hide() : $("#Mobile-Atari").show();

                    }}
                  >
                    Atari
                  </button>
                </li>
                <li className="hidden" id="Mobile-Atari">
                <ul className="text-white bg-[#101314]">
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => $("#Atari-2600-MOBILE").is(":visible") ? $("#Atari-2600-MOBILE").hide() : $("#Atari-2600-MOBILE").show()}>
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2 scale-[.8]"/>
                      Atari 2600
                      </div>
                      <ul className="pl-6" style={{"display":"none"}} id="Atari-2600-MOBILE">
                  <li onClick={() => {setProductDetail({name: "Atari 2600", type: "games"}); navigate(`/productView/atari2600-games`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Games</li>
                  <li onClick={() => {setProductDetail({name: "Atari 2600", type: "accessories"}); navigate(`/productView/atari2600-accesories`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Accessories</li>
                  <li onClick={() => {setProductDetail({name: "Atari 2600", type: "systems"}); navigate(`/productView/atari2600-systems`); $("body").toggleClass("fixed"); $(".mobilenav--wrap").toggleClass("show--mobilenav"); $("#hamburger").toggleClass("active");}}>Systems</li>
                      </ul>
                      </li>
                  </ul>
                </li>
                <li className="pb-1 pl-2 border-b-[1px] border-white">
                  <button
                    className="text-white font-helvtica-neue noSelect"
                    onClick={() => {
                      // $("#hamburger").toggleClass("active");
                      // $(".mobilenav--wrap").toggleClass("show--mobilenav");
                      $("#Mobile-GamerGear").is(":visible") ? $("#Mobile-GamerGear").hide() : $("#Mobile-GamerGear").show();

                    }}
                  >
                    GamerGear
                  </button>
                </li>
                <li className="hidden" id="Mobile-GamerGear">
                <ul className="text-white bg-[#101314]">
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Appareal", type: "Gamer Gear"}); navigate(`/productView/appareal`)}}>
                      Appareal
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Books", type: "Gamer Gear"}); navigate(`/productView/books`)}}>
                      Books
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Repair Parts", type: "Gamer Gear"}); navigate(`/productView/repairparts`)}}>
                      Repair Parts
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Puzzles", type: "Gamer Gear"}); navigate(`/productView/puzzles`)}}>
                      Puzzles
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Hats", type: "Gamer Gear"}); navigate(`/productView/hats`)}}>
                      Hats
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "DVD/Movies", type: "Gamer Gear"}); navigate(`/productView/dvd-movies`)}}>
                    DVD/Movies
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Board Games", type: "Gamer Gear"}); navigate(`/productView/boardgames`)}}>
                    Board Games
                      </div>
                      </li>
                  </ul>
                </li>
                <li className="pb-1 pl-2 border-b-[1px] border-white">
                  <button
                    className="text-white font-helvtica-neue noSelect"
                    onClick={() => {
                      // $("#hamburger").toggleClass("active");
                      // $(".mobilenav--wrap").toggleClass("show--mobilenav");
                      $("#Mobile-Imports").is(":visible") ? $("#Mobile-Imports").hide() : $("#Mobile-Imports").show();

                    }}
                  >
                    Imports
                  </button>
                </li>
                <li className="hidden" id="Mobile-Imports">
                <ul className="text-white bg-[#101314]">
                    <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Super Famicom", type: "imported"}); navigate(`/productView/superfamicom`)}}>
                      Super Famicom
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Sega Mega Drive", type: "imported"}); navigate(`/productView/megadrive`)}}>
                      Sega Mega Drive
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Controllers, Cables & Accessories", type: "imported"}); navigate(`/productView/imported-controllers-cables-accessories`)}}>
                    Controllers, Cables & Accessories
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "PC", type: "imported"}); navigate(`/productView/pc`)}}>
                      PC
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Famicom", type: "imported"}); navigate(`/productView/famicom`)}}>
                      Famicom
                      </div>
                      </li>
                      <li className="pb-1 pl-8">
                    <div className="flex items-center" onClick={() => {setProductDetail({name: "Repair Parts", type: "imported"}); navigate(`/productView/imported-repair-parts`)}}>
                    Repair Parts
                      </div>
                      </li>
                  </ul>
                </li>
                <li className="pb-1 pl-2 text-red-300"     onClick={() => {
                                                                              localStorage.removeItem('thegameislandCustyInfo')
                                                                              localStorage.removeItem('thegameislandToken')
                                                                              setLoggedIn(false);
                                                                              $("#hamburger").toggleClass("active");
                                                                              $(".mobilenav--wrap").toggleClass("show--mobilenav");
                                                                              navigate("/")
                                                                            }}>
                  Log Out
                </li>
              </ul>
            </div>
          </div>
    )
}

export default ProductNavMobile;