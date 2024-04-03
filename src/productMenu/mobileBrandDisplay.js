import React, {useState,useEffect} from 'react';
import { Nintendo2, SEGA2, XBOX2, PLAYSTATION2, ATARI2 } from "../content/images/CONSOLESVG"
import {NES2, SNES2, N642, NSWITCH2, GB2, GAMECUBE2, VIRTUALBOY2, WII2, WIIU2} from "../content/images/NINTENDOSVG.js"
import { PLAYSTATIONONE, PS22, PS32, PS42, VITA2 } from "../content/images/PLAYSTATIONSVG.js"
import { OGXBOX2, XBOX3602, XBOXONE2 } from "../content/images/XBOXSVG.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft
  } from "@fortawesome/free-solid-svg-icons";

function MobileConsoleBrands({setFeat1,feat1,setSpot,setBrandCount,brandCount}) {
    const brandArr = [<Nintendo2 />,<SEGA2 />,<XBOX2 />,<PLAYSTATION2 />,<ATARI2 />];
    const brandAttributes = [
        {num:1,name:"featured-nintendo-console",setFeat:setFeat1,setFeatStateVal:feat1,featNum:1,productName:"Nintendo",setBrandCount:setBrandCount},
        {num:2,name:"featured-sega-consoles",setFeat:setFeat1,setFeatStateVal:feat1,featNum:1,productName:"Sega",setBrandCount:setBrandCount},
        {num:3,name:"featured-xbox-console",setFeat:setFeat1,setFeatStateVal:feat1,featNum:1,productName:"Xbox",setBrandCount:setBrandCount},
        {num:4,name:"featured-playstation-console",setFeat:setFeat1,setFeatStateVal:feat1,featNum:1,productName:"Playstation",setBrandCount:setBrandCount},
        {num:5,name:"featured-atari-console",setFeat:setFeat1,setFeatStateVal:feat1,featNum:1,productName:"Atari",setBrandCount:setBrandCount}
    ]
    useEffect(() => {

        let {num,name,setFeat,setFeatStateVal,featNum,productName,setBrandCount} = brandAttributes[brandCount]
        setSpot(num,name,setFeat,setFeatStateVal,featNum,productName,setBrandCount);
    },[brandCount]);

    const handleRightClick = () => {
        if(brandCount + 1 == brandArr.length) {
            setBrandCount(0)
            return;
        }
        setBrandCount(brandCount + 1);
        return;
    }

    
    const handleLeftClick = () => {
        if(brandCount == 0) {
            setBrandCount(brandArr.length - 1)
            return;
        } 
        setBrandCount(brandCount - 1);
        return;
    }
    return (
        <div className="flex w-full overflow-hidden rounded-t min-[1189px]:hidden">
            <button className="bg-black w-[15%]" onClick={() => handleLeftClick()}><FontAwesomeIcon icon={faChevronLeft} className="text-white"/></button>
            <div className="w-[70%] flex justify-center">{brandArr[brandCount]}</div>
            <button className="bg-black w-[15%]" onClick={() => handleRightClick()}><FontAwesomeIcon icon={faChevronRight} className="text-white"/></button>
        </div>
    )
}

function MobileNintendoBrands({setFeat2,feat2,setSpot,setBrandCount,brandCount}) {
    const brandArr = [<NES2 />, <SNES2 />, <N642 />, <NSWITCH2 />, <GB2 />, <GAMECUBE2 />, <VIRTUALBOY2 />, <WII2 />, <WIIU2 />];
    const brandAttributes = [
        {num:1,name:"featured-nintendo-nes-games",setFeat:setFeat2,setFeatStateVal:feat2,featNum:2,productName:"NES",setBrandCount:setBrandCount},
        {num:2,name:"featured-nintendo-snes-games",setFeat:setFeat2,setFeatStateVal:feat2,featNum:2,productName:"SNES",setBrandCount:setBrandCount},
        {num:3,name:"featured-nintendo-n64-games",setFeat:setFeat2,setFeatStateVal:feat2,featNum:2,productName:"Nintendo 64",setBrandCount:setBrandCount},
        {num:4,name:"featured-nintendo-switch-games",setFeat:setFeat2,setFeatStateVal:feat2,featNum:2,productName:"Nintendo Switch",setBrandCount:setBrandCount},
        {num:5,name:"featured-nintendo-gameboy-games",setFeat:setFeat2,setFeatStateVal:feat2,featNum:2,productName:"Gameboy",setBrandCount:setBrandCount},
        {num:6,name:"featured-nintendo-gamecube-games",setFeat:setFeat2,setFeatStateVal:feat2,featNum:2,productName:"Gamecube",setBrandCount:setBrandCount},
        {num:7,name:"featured-nintendo-virtualb-games",setFeat:setFeat2,setFeatStateVal:feat2,featNum:2,productName:"Virtual Boy",setBrandCount:setBrandCount},
        {num:8,name:"featured-nintendo-wii-games",setFeat:setFeat2,setFeatStateVal:feat2,featNum:2,productName:"Wii",setBrandCount:setBrandCount},
        {num:9,name:"featured-nintendo-wiiu-games",setFeat:setFeat2,setFeatStateVal:feat2,featNum:2,productName:"Wii U",setBrandCount:setBrandCount},

    ]
    useEffect(() => {
        let {num,name,setFeat,setFeatStateVal,featNum,productName,setBrandCount} = brandAttributes[brandCount]
        setSpot(num,name,setFeat,setFeatStateVal,featNum,productName,setBrandCount);
    },[brandCount]);

    const handleRightClick = () => {
        if(brandCount + 1 == brandArr.length) {
            setBrandCount(0)
            return;
        }
        setBrandCount(brandCount + 1);
        return;
    }

    
    const handleLeftClick = () => {
        if(brandCount == 0) {
            setBrandCount(brandArr.length - 1)
            return;
        } 
        setBrandCount(brandCount - 1);
        return;
    }
    return (
        <div className="flex w-full overflow-hidden rounded-t min-[1189px]:hidden">
            <button className="bg-black w-[15%]" onClick={() => handleLeftClick()}><FontAwesomeIcon icon={faChevronLeft} className="text-white" /></button>
            <div className="w-[70%] flex justify-center">{brandArr[brandCount]}</div>
            <button className="bg-black w-[15%]" onClick={() => handleRightClick()}><FontAwesomeIcon icon={faChevronRight} className="text-white" /></button>
        </div>
    )
}

function MobilePlaystationBrands({setFeat3,feat3,setSpot,setBrandCount,brandCount}) {
    const brandArr = [<PLAYSTATIONONE />, <PS22 />, <PS32 />, <PS42 />, <VITA2 />];
    const brandAttributes = [
        {num:1,name:"featured-playstation1-games",setFeat:setFeat3,setFeatStateVal:feat3,featNum:3,productName:"Nintendo",setBrandCount:setBrandCount},
        {num:2,name:"featured-playstation2-games",setFeat:setFeat3,setFeatStateVal:feat3,featNum:3,productName:"Sega",setBrandCount:setBrandCount},
        {num:3,name:"featured-playstation3-games",setFeat:setFeat3,setFeatStateVal:feat3,featNum:3,productName:"Xbox",setBrandCount:setBrandCount},
        {num:4,name:"featured-playstation4-games",setFeat:setFeat3,setFeatStateVal:feat3,featNum:3,productName:"Playstation",setBrandCount:setBrandCount},
        {num:5,name:"featured-vita-games",setFeat:setFeat3,setFeatStateVal:feat3,featNum:3,productName:"Atari",setBrandCount:setBrandCount}
    ]
    useEffect(() => {
        let {num,name,setFeat,setFeatStateVal,featNum,productName,setBrandCount} = brandAttributes[brandCount]
        setSpot(num,name,setFeat,setFeatStateVal,featNum,productName,setBrandCount);
    },[brandCount]);

    const handleRightClick = () => {
        if(brandCount + 1 == brandArr.length) {
            setBrandCount(0)
            return;
        }
        setBrandCount(brandCount + 1);
        return;
    }

    
    const handleLeftClick = () => {
        if(brandCount == 0) {
            setBrandCount(brandArr.length - 1)
            return;
        } 
        setBrandCount(brandCount - 1);
        return;
    }
    return (
        <div className="flex w-full overflow-hidden rounded-t min-[1189px]:hidden">
            <button className="bg-black w-[15%]" onClick={() => handleLeftClick()}><FontAwesomeIcon icon={faChevronLeft} className="text-white" /></button>
            <div className="w-[70%] flex justify-center">{brandArr[brandCount]}</div>
            <button className="bg-black w-[15%]" onClick={() => handleRightClick()}><FontAwesomeIcon icon={faChevronRight} className="text-white" /></button>
        </div>
    )
}

function MobileXboxBrands({setFeat4,feat4,setSpot,setBrandCount,brandCount}) {
    const brandArr = [<OGXBOX2 />, <XBOX3602 />, <XBOXONE2 />];
    const brandAttributes = [
        {num:1,name:"featured-xbox-games",setFeat:setFeat4,setFeatStateVal:feat4,featNum:4,productName:"Nintendo",setBrandCount:setBrandCount},
        {num:2,name:"featured-xbox360-games",setFeat:setFeat4,setFeatStateVal:feat4,featNum:4,productName:"Sega",setBrandCount:setBrandCount},
        {num:3,name:"featured-xboxone-games",setFeat:setFeat4,setFeatStateVal:feat4,featNum:4,productName:"Xbox",setBrandCount:setBrandCount},
    ]
    useEffect(() => {
        let {num,name,setFeat,setFeatStateVal,featNum,productName,setBrandCount} = brandAttributes[brandCount]
        setSpot(num,name,setFeat,setFeatStateVal,featNum,productName,setBrandCount);
    },[brandCount]);

    const handleRightClick = () => {
        if(brandCount + 1 == brandArr.length) {
            setBrandCount(0)
            return;
        }
        setBrandCount(brandCount + 1);
        return;
    }

    
    const handleLeftClick = () => {
        if(brandCount == 0) {
            setBrandCount(brandArr.length - 1)
            return;
        } 
        setBrandCount(brandCount - 1);
        return;
    }
    return (
        <div className="flex w-full overflow-hidden rounded-t min-[1189px]:hidden">
            <button className="bg-black w-[15%]" onClick={() => handleLeftClick()}><FontAwesomeIcon icon={faChevronLeft} className="text-white" /></button>
            <div className="w-[70%] flex justify-center">{brandArr[brandCount]}</div>
            <button className="bg-black w-[15%]" onClick={() => handleRightClick()}><FontAwesomeIcon icon={faChevronRight} className="text-white" /></button>
        </div>
    )
}

export {MobileConsoleBrands,MobileNintendoBrands,MobilePlaystationBrands,MobileXboxBrands}
