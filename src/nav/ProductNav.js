import * as React from 'react';
import { useNavigate } from "react-router-dom";

import $ from "jquery";
import "../index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function ProductNav({setProductDetail}) {

  const navigate = useNavigate();

    return (
      <>
    <div>
      </div>
        <ul className="flex w-full h-full text-xl font-bold text-white font-Rubik mt-4 max-[1080px]:hidden">
        <li className="w-full text-center bg-[#51A451] relative py-[4px]" id="NintendoButton" onMouseEnter={() => {$("#NintendoMenu").show()}} onMouseLeave={() => $("#NintendoMenu").hide()}>
          <div>Nintendo <FontAwesomeIcon icon={faCaretDown} /></div>
          <ul className="absolute hidden w-full bg-[#484848] z-[10] rounded-lg my-[4px]" id="NintendoMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onMouseEnter={() => {$("#NESMenu").show()}} onMouseLeave={() => $("#NESMenu").hide()}>
              NES
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="NESMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Nintendo Entertainment System", type: "games"}); navigate(`/productView/nes-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Nintendo Entertainment System", type: "accessories"}); navigate(`/productView/nes-accesories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Nintendo Entertainment System", type: "systems"}); navigate(`/productView/nes-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#SNESMenu").show()}} onMouseLeave={() => $("#SNESMenu").hide()} >
              SNES
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="SNESMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Super Nintendo Entertainment System", type: "games"}); navigate(`/productView/snes-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Super Nintendo Entertainment System", type: "accessories"}); navigate(`/productView/snes-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Super Nintendo Entertainment System", type: "systems"}); navigate(`/productView/snes-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#N64Menu").show()}} onMouseLeave={() => $("#N64Menu").hide()}>
              N64
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="N64Menu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Nintendo 64", type: "games"}); navigate(`/productView/nintendo-64-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Nintendo 64", type: "accessories"}); navigate(`/productView/nintendo-64-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Nintendo 64", type: "systems"}); navigate(`/productView/nintendo-64-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#GameCubeMenu").show()}} onMouseLeave={() => $("#GameCubeMenu").hide()}>
              GameCube
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="GameCubeMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Gamecube", type: "games"}); navigate(`/productView/gamecube-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Gamecube", type: "accessories"}); navigate(`/productView/gamecube-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Gamecube", type: "systems"}); navigate(`/productView/gamecube-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#WIIMenu").show()}} onMouseLeave={() => $("#WIIMenu").hide()}>
              WII
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="WIIMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Wii", type: "games"}); navigate(`/productView/wii-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Wii", type: "accessories"}); navigate(`/productView/wii-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Wii", type: "systems"}); navigate(`/productView/wii-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#WIIUMenu").show()}} onMouseLeave={() => $("#WIIUMenu").hide()}>
              WII U
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="WIIUMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Wii U", type: "games"}); navigate(`/productView/wii-u-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Wii U", type: "accessories"}); navigate(`/productView/wii-u-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Wii U", type: "systems"}); navigate(`/productView/wii-u-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#VirtualBoyMenu").show()}} onMouseLeave={() => $("#VirtualBoyMenu").hide()}>
              Virtual Boy
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="VirtualBoyMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Virtual Boy", type: "games"}); navigate(`/productView/virtual-boy-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Virtual Boy", type: "accessories"}); navigate(`/productView/virtual-boy-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Virtual Boy", type: "systems"}); navigate(`/productView/virtual-boy-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#SwitchMenu").show()}} onMouseLeave={() => $("#SwitchMenu").hide()}>
              Nintendo Switch
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="SwitchMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Nintendo Switch", type: "games"}); navigate(`/productView/nintendo-switch-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Nintendo Switch", type: "accessories"}); navigate(`/productView/nintendo-switch-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Nintendo Switch", type: "systems"}); navigate(`/productView/nintendo-switch-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#GameBoyMenu").show()}} onMouseLeave={() => $("#GameBoyMenu").hide()}>
              GameBoy
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="GameBoyMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Gameboy", type: "games"}); navigate(`/productView/gameboy-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Gameboy", type: "accessories"}); navigate(`/productView/gameboy-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Gameboy", type: "systems"}); navigate(`/productView/gameboy-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#GameBoyColorMenu").show()}} onMouseLeave={() => $("#GameBoyColorMenu").hide()}>
              GameBoy Color
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="GameBoyColorMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Gameboy Color", type: "games"}); navigate(`/productView/gameboy-color-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Gameboy Color", type: "accessories"}); navigate(`/productView/gameboy-color-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Gameboy Color", type: "systems"}); navigate(`/productView/gameboy-color-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#GBAMenu").show()}} onMouseLeave={() => $("#GBAMenu").hide()}>
              GameBoy Advance
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="GBAMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Gameboy Advance", type: "games"}); navigate(`/productView/gameboy-advance-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Gameboy Advance", type: "accessories"}); navigate(`/productView/gameboy-advance-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Gameboy Advance", type: "systems"}); navigate(`/productView/gameboy-advance-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#DSMenu").show()}} onMouseLeave={() => $("#DSMenu").hide()}>
              Nintendo DS
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="DSMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Nintendo DS", type: "games"}); navigate(`/productView/nintendo-ds-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Nintendo DS", type: "accessories"}); navigate(`/productView/nintendo-ds-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Nintendo DS", type: "systems"}); navigate(`/productView/nintendo-ds-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onMouseEnter={() => {$("#3DSMenu").show()}} onMouseLeave={() => $("#3DSMenu").hide()}>
              Nintendo 3DS
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="3DSMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Nintendo 3DS", type: "games"}); navigate(`/productView/nintendo-3ds-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Nintendo 3DS", type: "accessories"}); navigate(`/productView/nintendo-3ds-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Nintendo 3DS", type: "systems"}); navigate(`/productView/nintendo-3ds-systems`)}}>Systems</li>
              </ul>
              </li>

          </ul>
          </li>
          <li className="w-full text-center bg-[#51A451] relative py-[4px]" id="XboxButton" onMouseEnter={() => {$("#XboxMenu").show()}} onMouseLeave={() => $("#XboxMenu").hide()}>
            <div>Xbox <FontAwesomeIcon icon={faCaretDown} /></div>
          <ul className="absolute hidden w-full bg-[#484848] z-[10] rounded-lg my-[4px]" id="XboxMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onMouseEnter={() => {$("#XBOXMenu").show()}} onMouseLeave={() => $("#XBOXMenu").hide()}>
              Xbox
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="XBOXMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Xbox", type: "games"}); navigate(`/productView/xbox-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Xbox", type: "accesories"}); navigate(`/productView/xbox-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Xbox", type: "systems"}); navigate(`/productView/xbox-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#XBOXONEMenu").show()}} onMouseLeave={() => $("#XBOXONEMenu").hide()}>
              Xbox One
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="XBOXONEMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Xbox 360", type: "games"}); navigate(`/productView/xboxone-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Xbox 360", type: "accessories"}); navigate(`/productView/xboxone-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Xbox 360", type: "systems"}); navigate(`/productView/xboxone-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#XBOX360Menu").show()}} onMouseLeave={() => $("#XBOX360Menu").hide()}>
              Xbox 360
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="XBOX360Menu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Xbox One", type: "games"}); navigate(`/productView/xbox360-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Xbox One", type: "acccesories"}); navigate(`/productView/xbox360-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Xbox One", type: "systems"}); navigate(`/productView/xbox360-systems`)}}>Systems</li>
              </ul>
              </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onMouseEnter={() => {$("#XBOXSERIESXMenu").show()}} onMouseLeave={() => $("#XBOXSERIESXMenu").hide()}>
              Xbox Series X
              <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="XBOXSERIESXMenu">
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Xbox Series X", type: "games"}); navigate(`/productView/xboxseriesx-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Xbox Series X", type: "accessories"}); navigate(`/productView/xboxseriesx-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Xbox Series X", type: "systems"}); navigate(`/productView/xboxseriesx-systems`)}}>Systems</li>
              </ul>
              </li>

          </ul>
          </li>
          <li className="w-full text-center bg-[#51A451] relative py-[4px]" id="SegaButton" onMouseEnter={() => {$("#SegaMenu").show()}} onMouseLeave={() => $("#SegaMenu").hide()}>
            <div>Sega <FontAwesomeIcon icon={faCaretDown} /></div>
          <ul className="absolute hidden w-full bg-[#484848] z-[10] rounded-lg my-[4px]" id="SegaMenu">
          <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onMouseEnter={() => {$("#SegaMasterSystemMenu").show()}} onMouseLeave={() => $("#SegaMasterSystemMenu").hide()}>
            Sega Master System
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="SegaMasterSystemMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Sega Master System", type: "games"}); navigate(`/productView/master-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Sega Master System", type: "accessories"}); navigate(`/productView/master-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Sega Master System", type: "systems"}); navigate(`/productView/master-systems`)}}>Systems</li>
              </ul>
            </li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#SEGACDMenu").show()}} onMouseLeave={() => $("#SEGACDMenu").hide()}>
            Sega CD
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="SEGACDMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Sega CD", type: "games"}); navigate(`/productView/segacd-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Sega CD", type: "accessories"}); navigate(`/productView/segacd-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Sega CD", type: "systems"}); navigate(`/productView/segacd-systems`)}}>Systems</li>
              </ul>
            </li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#SATURNMenu").show()}} onMouseLeave={() => $("#SATURNMenu").hide()}>
            Saturn
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="SATURNMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Sega Saturn", type: "games"}); navigate(`/productView/saturn-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Sega Saturn", type: "accessories"}); navigate(`/productView/saturn-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Sega Saturn", type: "systems"}); navigate(`/productView/saturn-systems`)}}>Systems</li>
              </ul>
            </li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#GENESISMenu").show()}} onMouseLeave={() => $("#GENESISMenu").hide()}>
            Genesis
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="GENESISMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Sega Genesis", type: "games"}); navigate(`/productView/genesis-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Sega Genesis", type: "accessories"}); navigate(`/productView/genesis-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Sega Genesis", type: "systems"}); navigate(`/productView/genesis-systems`)}}>Systems</li>
              </ul>
            </li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#SEGA32XMenu").show()}} onMouseLeave={() => $("#SEGA32XMenu").hide()}>
            Sega 32X
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="SEGA32XMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Sega 32X", type: "games"}); navigate(`/productView/sega32x-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Sega 32X", type: "accessories"}); navigate(`/productView/sega32x-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Sega 32X", type: "systems"}); navigate(`/productView/sega32x-systems`)}}>Systems</li>
              </ul>
            </li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onMouseEnter={() => {$("#DREAMCASTMenu").show()}} onMouseLeave={() => $("#DREAMCASTMenu").hide()}>
            Dreamcast
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="DREAMCASTMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Dreamcast", type: "games"}); navigate(`/productView/dreamcast-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Dreamcast", type: "accessories"}); navigate(`/productView/dreamcast-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Dreamcast", type: "systems"}); navigate(`/productView/dreamcast-systems`)}}>Systems</li>
              </ul>
            </li>

          </ul>
          </li>
          <li className="w-full text-center bg-[#51A451] relative py-[4px]" id="PlaystationButton" onMouseEnter={() => {$("#PlaystationMenu").show()}} onMouseLeave={() => $("#PlaystationMenu").hide()}>
            <div>Playstation <FontAwesomeIcon icon={faCaretDown} /></div>
          <ul className="absolute hidden w-full bg-[#484848] z-[10] rounded-lg my-[4px]" id="PlaystationMenu">
          <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onMouseEnter={() => {$("#PSMenu").show()}} onMouseLeave={() => $("#PSMenu").hide()}>
            Playstation
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="PSMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Playstation", type: "games"}); navigate(`/productView/playstation-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Playstation", type: "accessories"}); navigate(`/productView/playstation-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Playstation", type: "systems"}); navigate(`/productView/playstation-systems`)}}>Systems</li>
              </ul>
            </li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#PS2Menu").show()}} onMouseLeave={() => $("#PS2Menu").hide()}>
            Playstation 2
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="PS2Menu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Playstation 2", type: "games"}); navigate(`/productView/playstation2-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Playstation 2", type: "accessories"}); navigate(`/productView/playstation2-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Playstation 2", type: "systems"}); navigate(`/productView/playstation2-systems`)}}>Systems</li>
              </ul>
            </li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#PS3Menu").show()}} onMouseLeave={() => $("#PS3Menu").hide()}>
            Playstation 3
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="PS3Menu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Playstation 3", type: "games"}); navigate(`/productView/playstation3-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Playstation 3", type: "accessories"}); navigate(`/productView/playstation3-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Playstation 3", type: "systems"}); navigate(`/productView/playstation3-systems`)}}>Systems</li>
              </ul>
            </li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#PS4Menu").show()}} onMouseLeave={() => $("#PS4Menu").hide()}>
            Playstation 4
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="PS4Menu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Playstation 4", type: "games"}); navigate(`/productView/playstation4-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Playstation 4", type: "accessories"}); navigate(`/productView/playstation4-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Playstation 4", type: "systems"}); navigate(`/productView/playstation4-systems`)}}>Systems</li>
              </ul>
            </li>
            <li className="hover:bg-[#0D1B0D] relative flex justify-center" onMouseEnter={() => {$("#PSPMenu").show()}} onMouseLeave={() => $("#PSPMenu").hide()}>
            PSP
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="PSPMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "PSP", type: "games"}); navigate(`/productView/playstationpsp-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "PSP", type: "accessories"}); navigate(`/productView/playstationpsp-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "PSP", type: "systems"}); navigate(`/productView/playstationpsp-systems`)}}>Systems</li>
              </ul>
            </li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onMouseEnter={() => {$("#VitaMenu").show()}} onMouseLeave={() => $("#VitaMenu").hide()}>
            VITA
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="VitaMenu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Playstation Vita", type: "games"}); navigate(`/productView/playstationvita-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Playstation Vita", type: "accessories"}); navigate(`/productView/playstationvita-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Playstation Vita", type: "systems"}); navigate(`/productView/playstationvita-systems`)}}>Systems</li>
              </ul>
          </li>

          </ul>
          </li>
          <li className="w-full text-center bg-[#51A451] relative py-[4px]" id="AtariButton" onMouseEnter={() => {$("#AtariMenu").show()}} onMouseLeave={() => $("#AtariMenu").hide()}>
            <div>Atari <FontAwesomeIcon icon={faCaretDown} /></div>
          <ul className="absolute hidden w-full bg-[#484848] z-[10] rounded-lg my-[4px]" id="AtariMenu">
          <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-lg" onMouseEnter={() => {$("#ATARI2600Menu").show()}} onMouseLeave={() => $("#ATARI2600Menu").hide()}>
            Atari 2600
            <ul className="absolute -right-[235px] bg-[#484848] hidden w-[235px] rounded-lg" id="ATARI2600Menu">
            <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Atari 2600", type: "games"}); navigate(`/productView/atari2600-games`)}}>Games</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Atari 2600", type: "accessories"}); navigate(`/productView/atari2600-accessories`)}}>Accessories</li>
              <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Atari 2600", type: "systems"}); navigate(`/productView/atari2600-systems`)}}>Systems</li>
              </ul>
            </li>

          </ul>
          </li>
          <li className="w-full text-center bg-[#51A451] relative py-[4px]" id="GamerGearButton" onMouseEnter={() => {$("#GamerGearMenu").show()}} onMouseLeave={() => $("#GamerGearMenu").hide()}>
            <div>GamerGear <FontAwesomeIcon icon={faCaretDown} /></div>
          <ul className="absolute hidden w-full bg-[#484848] z-[10] rounded-lg my-[4px]" id="GamerGearMenu">
          <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Appareal", type: "Gamer Gear"}); navigate(`/productView/appareal`)}}>
            Appareal</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Books", type: "Gamer Gear"}); navigate(`/productView/books`)}}>
            Books</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Repair Parts", type: "Gamer Gear"}); navigate(`/productView/repairparts`)}}>
            Repair Parts</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Puzzles", type: "Gamer Gear"}); navigate(`/productView/puzzles`)}}>
            Puzzles</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Hats", type: "Gamer Gear"}); navigate(`/productView/hats`)}}>
            Hats</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "DVD/Movies", type: "Gamer Gear"}); navigate(`/productView/dvd-movies`)}}>
            DVD/Movies</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Board Games", type: "Gamer Gear"}); navigate(`/productView/boardgames`)}}>
            Board Games</li>

          </ul>
          </li>
          <li className="w-full text-center bg-[#51A451] relative py-[4px]" id="ImportsButton" onMouseEnter={() => {$("#ImportsMenu").show()}} onMouseLeave={() => $("#ImportsMenu").hide()}>
            <div>Imports <FontAwesomeIcon icon={faCaretDown} /></div>
          <ul className="absolute hidden w-full bg-[#484848] z-[10] rounded-lg my-[4px]" id="ImportsMenu">
          <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-t-lg" onClick={() => {setProductDetail({name: "Super Famicom", type: "imported"}); navigate(`/productView/superfamicom`)}}>
            Super Famicom</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Sega Mega Drive", type: "imported"}); navigate(`/productView/megadrive`)}}>
            Sega Mega Drive</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Controllers, Cables & Accessories", type: "imported"}); navigate(`/productView/imported-controllers-cables-accessories`)}}>
            Controllers, Cables & Accessories</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "PC", type: "imported"}); navigate(`/productView/pc`)}}>
            PC</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center" onClick={() => {setProductDetail({name: "Famicom", type: "imported"}); navigate(`/productView/famicom`)}}>
            Famicom</li>
          <li className="hover:bg-[#0D1B0D] relative flex justify-center rounded-b-lg" onClick={() => {setProductDetail({name: "Repair Parts", type: "imported"}); navigate(`/productView/imported-repair-parts`)}}>
            Repair Parts</li>

          </ul>
          </li>
      </ul>
      </>
    )
}

export default ProductNav;
