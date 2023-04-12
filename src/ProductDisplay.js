import $ from "jquery";
import SlimView from "./SlimView";
import ExpandView from "./ExpandView";
import React, { useEffect, useState } from "react";

function ProductDisplay() {
  const [expandId, setExpandId] = useState(null);

  const isExpand = (Id, image, name, price) => {
    if (expandId !== Id)
      return <SlimView image={image} name={name} price={price} />;
    return <ExpandView />;
  };

  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-between">
        <div className="p-2 ml-8 text-6xl text-white bg-black rounded-lg backdrop-filter bg-opacity-70 backdrop-blue-lg text-bold">
          Nintendo
        </div>
        <div className="flex mr-8">
          <div className="mr-4 p-2 backdrop-filter bg-opacity-70 backdrop-blue-lg rounded-lg bg-black text-5xl text-bold text-white hover:bg-white hover:text-black transition transform hover:scale-[1.1]">
            New Stock
          </div>
          <div className=" p-2 backdrop-filter bg-opacity-70 backdrop-blue-lg rounded-lg bg-black text-5xl text-bold text-white hover:bg-white hover:text-black transition transform hover:scale-[1.1]">
            Popular
          </div>
        </div>
      </div>
      <div className="w-auto h-auto mx-8 mt-6 text-4xl text-white bg-black rounded-lg backdrop-filter bg-opacity-70 backdrop-blue-lg">
        <ul className="flex flex-wrap justify-evenly">
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Nintendo NES
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Nintendo64
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Super Nintendo
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Nintendo Switch
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Gameboy
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Gameboy Color
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Gameboy Advance GBA
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Gamecube
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            WII
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            WII U
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Virtual Boy
          </li>
        </ul>
      </div>
      <div className="flex h-full mx-8 mt-2 mt-6 bg-black rounded-lg backdrop-filter bg-opacity-70 backdrop-blue-lg">
        <div className="w-[250px] flex flex-col text-3xl overflow-hidden justify-center items-center">
          <button
            className="relative flex justify-center items-center text-center h-full p-8 w-full bg-[#00FFFF]"
            id="games"
          >
            <img className="" src={require("./content/images/ghost.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Games
            </div>
          </button>
          <button
            className="relative flex justify-center items-center text-center h-full p-8 w-full bg-[#FFb852]"
            id="assecories"
          >
            <img className="" src={require("./content/images/buff.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Assessories
            </div>
          </button>
          <div
            className="relative flex items-center justify-center w-full h-full p-8 text-center bg-green-500"
            id="systems"
          >
            <img
              className=""
              src={require("./content/images/game-console.png")}
            />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Systems
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center border-2 border-white rounded-lg h-14 justify-apart">
            <div className="ml-12 text-4xl text-white text-bold">
              Nintendo ( 1898 )
            </div>
          </div>
          <ul className="h-full my-2 overflow-scroll">
            <li
              className="h-1/5  w-[99%] my-1 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
              id="item-1"
              onClick={() => {
                $("#item-1").toggleClass("h-1/5 h-1/2");
                if (expandId === "item-1") {
                  setExpandId(null);
                } else setExpandId("item-1");
              }}
            >
              {isExpand(
                "item-1",
                "finalfantasy.webp",
                "Final Fantasy Legend 2 Original Nintendo Gameboy Game",
                "299.99"
              )}
            </li>
            <li
              className="h-1/5  w-[99%] my-1 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
              id="item-2"
              onClick={() => {
                $("#item-2").toggleClass("h-1/5 h-1/2");
                if (expandId === "item-2") {
                  setExpandId(null);
                } else setExpandId("item-2");
              }}
            >
              {isExpand(
                "item-2",
                "n64.webp",
                "Funtastik Purple Nintendo 64 N64 System Console w/ OEM Controller Bundle",
                "299.99"
              )}
            </li>
            <li
              className="h-1/5  w-[99%] my-1 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
              id="item-3"
              onClick={() => {
                $("#item-3").toggleClass("h-1/5 h-1/2");
                if (expandId === "item-3") {
                  setExpandId(null);
                } else setExpandId("item-3");
              }}
            >
              {isExpand(
                "item-3",
                "supermario3.webp",
                "Super Mario Brothers Bros 3 Original NES Nintendo Game",
                "24.99"
              )}
            </li>
            <li
              className="h-1/5  w-[99%] my-1 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
              id="item-4"
              onClick={() => {
                $("#item-4").toggleClass("h-1/5 h-1/2");
                if (expandId === "item-4") {
                  setExpandId(null);
                } else setExpandId("item-4");
              }}
            >
              {/* {isExpand("item-4")} */}
            </li>
            <li
              className="h-1/5  w-[99%] my-1 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
              id="item-5"
              onClick={() => {
                $("#item-5").toggleClass("h-1/5 h-1/2");
                if (expandId === "item-5") {
                  setExpandId(null);
                } else setExpandId("item-5");
              }}
            >
              {/* {isExpand("item-5")} */}
            </li>
            <li
              className="h-1/5  w-[99%] my-1 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
              id="item-6"
              onClick={() => {
                $("#item-6").toggleClass("h-1/5 h-1/2");
                if (expandId === "item-6") {
                  setExpandId(null);
                } else setExpandId("item-6");
              }}
            >
              {/* {isExpand("item-6")} */}
            </li>
            <li
              className="h-1/5  w-[99%] my-1 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
              id="item-7"
              onClick={() => {
                $("#item-7").toggleClass("h-1/5 h-1/2");
                if (expandId === "item-7") {
                  setExpandId(null);
                } else setExpandId("item-7");
              }}
            >
              {/* {isExpand("item-7")} */}
            </li>
            <li
              className="h-1/5  w-[99%] my-1 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
              id="item-8"
              onClick={() => {
                $("#item-8").toggleClass("h-1/5 h-1/2");
                if (expandId === "item-8") {
                  setExpandId(null);
                } else setExpandId("item-8");
              }}
            >
              {/* {isExpand("item-8")} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
