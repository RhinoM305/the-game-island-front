
import React, { useEffect, useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";


import { Nintendo2, SEGA2, XBOX2, PLAYSTATION2, ATARI2 } from "../content/images/CONSOLESVG"
import {NES2, SNES2, N642, NSWITCH2, GB2, GAMECUBE2, VIRTUALBOY2, WII2, WIIU2} from "../content/images/NINTENDOSVG.js"
import { PLAYSTATIONONE, PS22, PS32, PS42, VITA2 } from "../content/images/PLAYSTATIONSVG.js"
import { OGXBOX2, XBOX3602, XBOXONE2 } from "../content/images/XBOXSVG.js"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

import { MobileConsoleBrands, MobileNintendoBrands, MobilePlaystationBrands, MobileXboxBrands} from "./mobileBrandDisplay.js"


import FeaturedProductList from "./FeaturedProductList.js"



function ProductDisplay({setProductDetail,setProduct}) {
  const [feat1, setFeat1] = useState({index:1, colName:"featured-nintendo-console", name: "Nintendo", type: "Systems"});
  const [feat2, setFeat2] = useState({index:1, colName:"featured-nintendo-nes-games", name: "Nintendo Entertainment System", type: "Games"});
  const [feat3, setFeat3] = useState({index:1, colName:"featured-playstation1-games", name: "Playstation", type: "Games"});
  const [feat4, setFeat4] = useState({index:1, colName:"featured-xbox-games", name: "Xbox", type: "Games"});
  let [viewSetting,setViewSetting] = useState(null);

  //for mobile use 
  const [brandCount1, setBrandCount1] = useState(0)
  const [brandCount2, setBrandCount2] = useState(0)
  const [brandCount3, setBrandCount3] = useState(0)
  const [brandCount4, setBrandCount4] = useState(0)

  const navigate = useNavigate();

  function setSpot(num, name, setFeat, setFeatStateVal, featNum, productName, setBrandCount) {
    //this will grab 'last' button clicked by default the first button will be hilighted
    $(`#consoleBtnFeat${featNum}${setFeatStateVal.index}`).removeClass("border-t-black border-b-white bg-white");
    //than we add the default colors for non selected buttons
    $(`#consoleBtnFeat${featNum}${setFeatStateVal.index}`).addClass("border-t-stone-800 border-b-black");
    //than we modify the newly clicked button
    $(`#consoleBtnFeat${featNum}${num}`).removeClass("border-t-stone-800 border-b-black");
    //than we add the border colors that represent a clicked button
    $(`#consoleBtnFeat${featNum}${num}`).addClass("border-t-black border-b-white bg-white");

    setFeat({...setFeatStateVal, colName: name, index: num, name: productName});

    var viewportWidth = $(window).width();

    setBrandCount(num - 1)

  }



  return (
    <>
        <div className="w-full text-center">
     <h2 className="mt-24 text-2xl text-white text-bold">Featured Consoles</h2>
     {/*1st featured list*/}
     <div className="h-[350px] bg-stone-800 m-4 p-[15px] rounded-xl relative max-[796px]:m-0">

      <div className="h-full bg-white rounded-xl">
        <div className="w-full h-[60px] bg-[#EB5E28] rounded-t flex justify-end relative">
          <ul className="absolute left-0 -top-[6px] flex h-[72px] max-3xl:w-[750px] max-[1189px]:hidden">
            <li className="p-1 border-t-[6px] border-b-[6px] border-t-black border-b-white bg-white overflow-hidden 3xl:w-[180px]" id="consoleBtnFeat11" onClick={() => {setSpot(1,"featured-nintendo-console",setFeat1,feat1,1, "Nintendo",setBrandCount1)}}><Nintendo2 color={feat1.index == 1 ? "#EB5E28" : ""} opacity={feat1.index == 1 ? "" : ".7"}/></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden 3xl:w-[180px]" id="consoleBtnFeat12" onClick={() => {setSpot(2,"featured-sega-consoles",setFeat1,feat1,1, "Sega",setBrandCount1)}}><SEGA2 color={feat1.index == 2 ? "#EB5E28" : ""} opacity={feat1.index == 2 ? "" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden 3xl:w-[180px]" id="consoleBtnFeat13" onClick={() => {setSpot(3,"featured-xbox-console",setFeat1,feat1,1, "Xbox",setBrandCount1)}}><XBOX2 color={feat1.index == 3 ? "#EB5E28" : ""} opacity={feat1.index == 3 ? "" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden 3xl:w-[180px]" id="consoleBtnFeat14" onClick={() => {setSpot(4,"featured-playstation-console",setFeat1,feat1,1, "Playstation",setBrandCount1)}}><PLAYSTATION2 color={feat1.index == 4 ? "#EB5E28" : ""} opacity={feat1.index == 4 ? "" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden 3xl:w-[180px]" id="consoleBtnFeat15" onClick={() => {setSpot(5,"featured-atari-console",setFeat1,feat1,1, "Atari",setBrandCount1)}}><ATARI2 color={feat1.index == 5 ? "#EB5E28" : ""} opacity={feat1.index == 5 ? "" : ".7"} /></li>


            {/* placehold */}
          </ul>
          <button className="scale-[1.15] hover:scale-[1.2] hover:text-yellow-500 flex justify-end items-center relative max-[1189px]:hidden" onClick={(() => {setProductDetail({name: feat1.name, type: "Systems"}); navigate(`/productView/${feat1.colName}`)})}>
            <img className="h-full w-[150px] relative" src={require("../content/images/MenuEndTip.png")}/>
            <p className="absolute mr-4 font-semibold font-Rubik"><FontAwesomeIcon icon={faLocationArrow} /> See More</p>
          </button>
          {/* mobile brands */}
          <MobileConsoleBrands setFeat1={setFeat1} feat1={feat1} setSpot={setSpot} setBrandCount={setBrandCount1} brandCount={brandCount1}/>
        </div>
        <FeaturedProductList feat={feat1} setFeat={setFeat1} setProduct={setProduct}/>
      </div>
     </div>
     <h2 className="pt-10 text-2xl text-white text-bold">Featured Games</h2>
     {/*2nd featured list*/}
     <div className="h-[350px] bg-stone-800 m-4 p-[15px] rounded-xl relative max-[1080px]:m-0 max-[796px]:my-2">
      <div className="h-full bg-white rounded-xl">
        <div className="w-full h-[60px] bg-[#E4000F] rounded-t flex justify-end relative">
          <ul className="absolute left-0 -top-[6px] flex h-[72px] max-3xl:w-[920px] max-[1189px]:hidden">
            <li className="p-1 border-t-[6px] border-b-[6px] border-t-black border-b-white bg-white overflow-hidden" id="consoleBtnFeat21" onClick={() => {setSpot(1,"featured-nintendo-nes-games",setFeat2,feat2,2,"NES",setBrandCount2)}}><NES2 color={feat2.index == 1 ? "#E4000F" : ""} opacity={feat2.index == 1 ? "" : ".7"}/></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat22" onClick={() => {setSpot(2,"featured-nintendo-snes-games",setFeat2,feat2,2,"SNES",setBrandCount2)}}><SNES2 color={feat2.index == 2 ? "#E4000F" : ""} opacity={feat2.index == 2 ? "" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat23" onClick={() => {setSpot(3,"featured-nintendo-n64-games",setFeat2,feat2,2,"Nintendo 64",setBrandCount2)}}><N642 color={feat2.index == 3 ? "#E4000F" : ""} opacity={feat2.index == 3 ? "" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat24" onClick={() => {setSpot(4,"featured-nintendo-switch-games",setFeat2,feat2,2,"Nintendo Switch",setBrandCount2)}}><NSWITCH2 color={feat2.index == 4 ? "#E4000F" : ""} opacity={feat2.index == 4 ? "" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat25" onClick={() => {setSpot(5,"featured-nintendo-gameboy-games",setFeat2,feat2,2,"Gameboy",setBrandCount2)}}><GB2 color={feat2.index == 5 ? "#E4000F" : ""} opacity={feat2.index == 5 ? "" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat26" onClick={() => {setSpot(6,"featured-nintendo-gamecube-games",setFeat2,feat2,2,"Gamecube",setBrandCount2)}}><GAMECUBE2 color={feat2.index == 6 ? "#E4000F" : ""} opacity={feat2.index == 6 ? "" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat27" onClick={() => {setSpot(7,"featured-nintendo-virtualb-games",setFeat2,feat2,2,"Virtual Boy",setBrandCount2)}}><VIRTUALBOY2 color={feat2.index == 7 ? "#E4000F" : ""} opacity={feat2.index == 7 ? "" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat28" onClick={() => {setSpot(8,"featured-nintendo-wii-games",setFeat2,feat2,2,"Wii",setBrandCount2)}}><WII2 color={feat2.index == 8 ? "#E4000F" : ""} opacity={feat2.index == 8 ? "" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat29" onClick={() => {setSpot(9,"featured-nintendo-wiiu-games",setFeat2,feat2,2,"Wii U",setBrandCount2)}}><WIIU2 color={feat2.index == 9 ? "#E4000F" : ""} opacity={feat2.index == 9 ? "" : ".7"} /></li>





            {/* placehold */}
          </ul>
          <button className="scale-[1.15] hover:scale-[1.2] hover:text-yellow-500 flex justify-end items-center relative max-[1189px]:hidden" onClick={(() => {setProductDetail({name: feat2.name, type: "Games"}); navigate(`/productView/${feat2.colName}`)})}>
            <img className="h-full w-[150px] relative" src={require("../content/images/MenuEndTip.png")}/>
            <p className="absolute mr-2 font-semibold font-Rubik"><FontAwesomeIcon icon={faLocationArrow} /> See More</p>
          </button>
          {/* mobile brands */}
          <MobileNintendoBrands setFeat2={setFeat2} feat2={feat2} setSpot={setSpot} setBrandCount={setBrandCount2} brandCount={brandCount2}/>
        </div>
        <FeaturedProductList feat={feat2} setFeat={setFeat2} setProduct={setProduct} />
      </div>
     </div>
     {/*3rd featured list*/}
     <div className="h-[350px] bg-stone-800 m-4 p-[15px] rounded-xl relative max-[796px]:m-0 max-[796px]:my-2">
      <div className="h-[100%] rounded-xl bg-white">
        <div className="w-full h-[60px] bg-[#006FCD] rounded-t flex justify-end relative">
          <ul className="absolute left-0 -top-[6px] flex h-[72px] max-3xl:w-[750px] max-[1189px]:hidden">
            <li className="p-1 border-t-[6px] border-b-[6px] border-t-black border-b-white bg-white overflow-hidden" id="consoleBtnFeat31" onClick={() => {setSpot(1,"featured-playstation1-games",setFeat3,feat3,3,"Playstation",setBrandCount3)}}><PLAYSTATIONONE color={feat3.index == 1 ? "#006FCD" : ""} opacity={feat3.index == 1 ? "1" : ".7"}/></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat32" onClick={() => {setSpot(2,"featured-playstation2-games",setFeat3,feat3,3,"Playstation 2",setBrandCount3)}}><PS22 color={feat3.index == 2 ? "#006FCD" : ""} opacity={feat3.index == 2 ? "1" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat33" onClick={() => {setSpot(3,"featured-playstation3-games",setFeat3,feat3,3,"Playstation 3",setBrandCount3)}}><PS32 color={feat3.index == 3 ? "#006FCD" : ""} opacity={feat3.index == 3 ? "1" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat34" onClick={() => {setSpot(4,"featured-playstation4-games",setFeat3,feat3,3,"Playstation 4",setBrandCount3)}}><PS42 color={feat3.index == 4 ? "#006FCD" : ""} opacity={feat3.index == 4 ? "1" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat35" onClick={() => {setSpot(5,"featured-vita-games",setFeat3,feat3,3,"Playstation Vita",setBrandCount3)}}><VITA2 color={feat3.index == 5 ? "#006FCD" : ""} opacity={feat3.index == 5 ? "1" : ".7"} /></li>


            {/* placehold */}
          </ul>
          <button className="scale-[1.15] hover:scale-[1.2] hover:text-yellow-500 flex justify-end items-center relative max-[1189px]:hidden"  onClick={(() => {setProductDetail({name: feat3.name, type: "Games"}); navigate(`/productView/${feat3.colName}`)})}>
            <img className="h-full w-[150px] relative" src={require("../content/images/MenuEndTip.png")}/>
            <p className="absolute mr-4 font-semibold font-Rubik"><FontAwesomeIcon icon={faLocationArrow} /> See More</p>
          </button>
          {/* mobile brands */}
          <MobilePlaystationBrands setFeat3={setFeat3} feat3={feat3} setSpot={setSpot} setBrandCount={setBrandCount3} brandCount={brandCount3}/>
        </div>
        <FeaturedProductList feat={feat3} setFeat={setFeat3} setProduct={setProduct} />
      </div>
     </div>
     {/*4th featured list*/}
     <div className="h-[350px] bg-stone-800 m-4 p-[15px] rounded-xl relative max-[796px]:m-0 max-[796px]:my-2">
      <div className="h-[100%] rounded-xl bg-white">
        <div className="w-full h-[60px] bg-[#0e7a0d] rounded-t flex justify-end relative">
          <ul className="absolute left-0 -top-[6px] flex h-[72px] max-3xl:w-[750px] max-[1189px]:hidden">
            <li className="p-1 border-t-[6px] border-b-[6px] border-t-black border-b-white bg-white overflow-hidden" id="consoleBtnFeat41" onClick={() => {setSpot(1,"featured-xbox-games",setFeat4,feat4,4, "Xbox",setBrandCount4)}}><OGXBOX2 color={feat4.index == 1 ? "#0e7a0d" : ""} opacity={feat4.index == 1 ? "1" : ".7"}/></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat42" onClick={() => {setSpot(2,"featured-xbox360-games",setFeat4,feat4,4, "Xbox 360",setBrandCount4)}}><XBOX3602 color={feat4.index == 2 ? "#0e7a0d" : ""} opacity={feat4.index == 1 ? "1" : ".7"} /></li>
            <li className="p-1 border-t-[6px] border-b-[6px] border-b-black border-t-stone-800 overflow-hidden" id="consoleBtnFeat43" onClick={() => {setSpot(3,"featured-xboxone-games",setFeat4,feat4,4, "Xbox one",setBrandCount4)}}><XBOXONE2 color={feat4.index == 3 ? "#0e7a0d" : ""} opacity={feat4.index == 1 ? "1" : ".7"} /></li>
            {/* placehold */}
          </ul>
          <button className="scale-[1.15] hover:scale-[1.2] hover:text-yellow-500 flex justify-end items-center relative max-[1189px]:hidden"  onClick={(() => {setProductDetail({name: feat4.name, type: "Games"}); navigate(`/productView/${feat4.colName}`)})}>
            <img className="h-full w-[150px] relative" src={require("../content/images/MenuEndTip.png")}/>
            <p className="absolute mr-4 font-semibold font-Rubik"><FontAwesomeIcon icon={faLocationArrow} /> See More</p>
          </button>
          {/* mobile brands */}
          <MobileXboxBrands setFeat4={setFeat4} feat4={feat4} setSpot={setSpot} setBrandCount={setBrandCount4} brandCount={brandCount4}/>
        </div>
        <FeaturedProductList feat={feat4} setFeat={setFeat4} setProduct={setProduct} />
      </div>
     </div>
   </div>
   {/* mobile feature product display
    <div>

    </div> */}
    </>
  );
}

export default ProductDisplay;
