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
    <div className="w-full h-full">
      <div className="flex items-center justify-between">
        <div className="p-2 ml-8 text-6xl text-white bg-black rounded-lg backdrop-filter bg-opacity-70 backdrop-blue-lg text-bold">
          Nintendo
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
      <div className="flex h-screen mx-8 mt-2 mt-6 bg-black rounded-lg backdrop-filter bg-opacity-70 backdrop-blue-lg">
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center border-2 border-white rounded-lg h-14 justify-between">
            <div className="ml-12 text-4xl text-white text-bold">Nintendo</div>
            <div className="text-4xl mr-6 text-bold text-white">
              <button className="mx-3 w-auto px-8 hover:bg-white hover:text-black">
                Games (330)
              </button>
              <button className="mx-3 w-auto px-8 hover:bg-white hover:text-black">
                Assesories (291)
              </button>
              <button className="mx-3 w-auto px-8 hover:bg-white hover:text-black">
                Systems (22)
              </button>
            </div>
          </div>
          <ul className="flex flex-wrap mx-2 h-full my-2 overflow-y-scroll">
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-1"
              onClick={() => {}}
            >
              {isExpand(
                "item-1",
                "finalfantasy.webp",
                "Final Fantasy Legend 2 Original Nintendo Gameboy Game",
                "299.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-2"
              onClick={() => {}}
            >
              {isExpand(
                "item-2",
                "n64.webp",
                "Funtastik Purple Nintendo 64 N64 System Console w/ OEM Controller Bundle",
                "299.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-3"
              onClick={() => {}}
            >
              {isExpand(
                "item-3",
                "supermario3.webp",
                "Super Mario Brothers Bros 3 Original NES Nintendo Game",
                "24.99"
              )}
            </li>

            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-4"
              onClick={() => {}}
            >
              {isExpand(
                "item-4",
                "nes-rare.webp",
                "Contra Original Nintendo NES Game (Complete, Rare)",
                "299.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-5"
              onClick={() => {}}
            >
              {isExpand(
                "item-5",
                "gameboy-advance.webp",
                "Custom IPS V2 Nintendo GameBoy Advance System Handheld Console - Atomic Purple",
                "499.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-6"
              onClick={() => {}}
            >
              {isExpand(
                "item-6",
                "gray-n64.webp",
                " Funtastic Nintendo 64 Smoke Gray Atomic Black N64 Console Complete",
                "199.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-7"
              onClick={() => {}}
            >
              {isExpand(
                "item-7",
                "n64-set.webp",
                "Nintendo 64 N64 Original System Console +2 ORIGINAL CONTROLLERS w/ NEW JOYSTICKS",
                "99.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-8"
              onClick={() => {}}
            >
              {isExpand(
                "item-8",
                "red-n64.webp",
                "Nintendo 64 N64 System Watermelon Red Clear System Console w/ OEM Controller Bundle",
                "899.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-8"
              onClick={() => {}}
            >
              {isExpand(
                "item-8",
                "red-n64.webp",
                "Nintendo 64 N64 System Watermelon Red Clear System Console w/ OEM Controller Bundle",
                "899.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-9"
              onClick={() => {}}
            >
              {isExpand(
                "item-9",
                "red-n64.webp",
                "Nintendo 64 N64 System Watermelon Red Clear System Console w/ OEM Controller Bundle",
                "899.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-8"
              onClick={() => {}}
            >
              {isExpand(
                "item-8",
                "red-n64.webp",
                "Nintendo 64 N64 System Watermelon Red Clear System Console w/ OEM Controller Bundle",
                "899.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-8"
              onClick={() => {}}
            >
              {isExpand(
                "item-8",
                "red-n64.webp",
                "Nintendo 64 N64 System Watermelon Red Clear System Console w/ OEM Controller Bundle",
                "899.99"
              )}
            </li>
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id="item-8"
              onClick={() => {}}
            >
              {isExpand(
                "item-8",
                "red-n64.webp",
                "Nintendo 64 N64 System Watermelon Red Clear System Console w/ OEM Controller Bundle",
                "899.99"
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;

// <li
//               className="h-1/5  w-[50%] my-2 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
//               id="item-4"
//               onClick={() => {
//                 $("#item-4").toggleClass("h-1/5 h-1/2");
//                 if (expandId === "item-4") {
//                   setExpandId(null);
//                 } else setExpandId("item-4");
//               }}
//             >
//               {/* {isExpand("item-4")} */}
//             </li>
//             <li
//               className="h-1/5  w-[50%] my-2 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
//               id="item-5"
//               onClick={() => {
//                 $("#item-5").toggleClass("h-1/5 h-1/2");
//                 if (expandId === "item-5") {
//                   setExpandId(null);
//                 } else setExpandId("item-5");
//               }}
//             >
//               {/* {isExpand("item-5")} */}
//             </li>
//             <li
//               className="h-1/5  w-[50%] my-2 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
//               id="item-6"
//               onClick={() => {
//                 $("#item-6").toggleClass("h-1/5 h-1/2");
//                 if (expandId === "item-6") {
//                   setExpandId(null);
//                 } else setExpandId("item-6");
//               }}
//             >
//               {/* {isExpand("item-6")} */}
//             </li>
//             <li
//               className="h-1/5  w-[50%] my-2 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
//               id="item-7"
//               onClick={() => {
//                 $("#item-7").toggleClass("h-1/5 h-1/2");
//                 if (expandId === "item-7") {
//                   setExpandId(null);
//                 } else setExpandId("item-7");
//               }}
//             >
//               {/* {isExpand("item-7")} */}
//             </li>
//             <li
//               className="h-1/5  w-[50%] my-2 border-2 border-white rounded-lg flex hover:bg-black hover:bg-opacity-90"
//               id="item-8"
//               onClick={() => {
//                 $("#item-8").toggleClass("h-1/5 h-1/2");
//                 if (expandId === "item-8") {
//                   setExpandId(null);
//                 } else setExpandId("item-8");
//               }}
//             >
//               {isExpand("item-8")}
//             </li>
