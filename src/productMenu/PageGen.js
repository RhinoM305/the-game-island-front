import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";
  import $ from "jquery";


function PageGen({pageInfo,setPagination,pagination,setProducts,index,setIndex,length}) {
    const {numberOfProducts, hasNextPage, hasPreviousPage, endCursor, startCursor} = pageInfo;
    const [pages, setPages] = useState([]);
    const [pageMultiplier, setPageMultiplier] = useState(0);
    const numOfPages = Math.ceil(numberOfProducts / 20);


    useEffect(() => {

        let p = []
        for(let i = 1; i <= length; i++) {
            
            if(pagination.apiIndex === 1) {

                if(i == 1 && index === 0) {
                    let content = (<div id={`page1`} className="w-[34px] mx-[1px] h-full bg-white text-black hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() =>  {if($(`#page1`).hasClass("bg-white")) {return} else {$(`#page1`).toggleClass("bg-white text-black"); $(`#page${index + 1}`).toggleClass("bg-white text-black"); setIndex(i - 1)}}}>{i}</div>)
                    p.push(content)
                } else {
                    let content = (<div id={`page${i}`} className="w-[34px] mx-[1px] h-full hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() => {if($(`#page${i}`).hasClass("bg-white")) {return} $(`#page${index + 1}`).toggleClass("bg-white text-black"); $(`#page${i}`).toggleClass("bg-white text-black"); setIndex(i - 1)}}>{i}</div>)
                    p.push(content)
                }
            } else {
                if(i == 1) {
                    let content = (<div id={`page${i + pageMultiplier}`} className="w-[34px] mx-[1px] h-full bg-white text-black hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() => {if($(`#page${pageMultiplier + 1}`).hasClass("bg-white")) {return} $(`#page${pageMultiplier + 1}`).toggleClass("bg-white text-black"); $(`#page${pageMultiplier + index + 1}`).toggleClass("bg-white text-black"); setIndex(i - 1);}}>{i + pageMultiplier}</div>)
                    p.push(content)
                } else {
                    let content = (<div id={`page${i + pageMultiplier}`} className="w-[34px] mx-[1px] h-full hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() => {if($(`#page${i + pageMultiplier}`).hasClass("bg-white")) {return} $(`#page${i + pageMultiplier}`).toggleClass("bg-white text-black"); $(`#page${pageMultiplier + index + 1}`).toggleClass("bg-white text-black"); setIndex(i - 1)}}>{i + pageMultiplier}</div>)
                p.push(content)}
    
                }

                if(i === 5 && index === 4) {
                    if(pagination.apiIndex === 1) {
                        p[0] = (<div id={`page1`} className="w-[34px] mx-[1px] h-full hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() =>  {if($(`#page1`).hasClass("bg-white")) {return} else {$(`#page1`).toggleClass("bg-white text-black"); $(`#page${index + 1}`).toggleClass("bg-white text-black"); setIndex(i - 1)}}}>1</div>)
                        p[4] = (<div id={`page5`} className="w-[34px] mx-[1px] h-full bg-white text-black hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() =>  {if($(`#page5`).hasClass("bg-white")) {return} else {$(`#page5`).toggleClass("bg-white text-black"); $(`#page${index + 1}`).toggleClass("bg-white text-black"); setIndex(i - 1)}}}>{i}</div>)}
                    // } else {
                    //     p[0] = (<div id={`page${i + pageMultiplier}`} className="w-[34px] mx-[1px] h-full hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() => {if($(`#page${pageMultiplier + 1}`).hasClass("bg-white")) {return} $(`#page${pageMultiplier + 1}`).toggleClass("bg-white text-black"); $(`#page${pageMultiplier + index + 1}`).toggleClass("bg-white text-black"); setIndex(i - 1);}}>{i + pageMultiplier}</div>)
                    //     p[4] = (<div id={`page${i + pageMultiplier}`} className="w-[34px] mx-[1px] h-full bg-white text-black hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() => {if($(`#page${i + pageMultiplier}`).hasClass("bg-white")) {return} $(`#page${i + pageMultiplier}`).toggleClass("bg-white text-black"); $(`#page${pageMultiplier + index + 1}`).toggleClass("bg-white text-black"); setIndex(i - 1)}}>{i + pageMultiplier}</div>)
                    // }
                }
                
                if(i === 5 && numOfPages > 5) {
                    p.push((<div className="w-[34px] mx-[1px] h-full flex items-center justify-center text-2xl font-bold" onClick={() => ""}>...</div>))
                    p.push((<div className="w-[34px] mx-[1px] h-full flex items-center hover:bg-white hover:text-black justify-center text-2xl font-bold cursor-pointer" onClick={() => ""}>{numOfPages}</div>))
                    break;
                
                }
           
        }

        setPages([p])
    },[length,index])


    const handleNextPage = () => {

        if(index === 4 && hasNextPage) {
            setPageMultiplier(pageMultiplier + 5)
            setPages([])
            setIndex(0)
            setPagination({first: 100, after: endCursor, before: null, last: null, apiIndex: pagination.apiIndex + 1, pageNum: pagination.pageNum + 1})

        } else if(index + 1 === length && !hasNextPage) {
            return;
        } else {
            if(pagination.apiIndex === 1) {
                if($(`#page1`).hasClass("bg-white")) {$(`#page2`).toggleClass("bg-white text-black"); $(`#page1`).toggleClass("bg-white text-black");} else {
                    $(`#page${index + 2}`).toggleClass("bg-white text-black")
                    $(`#page${index + 1}`).toggleClass("bg-white text-black")
                }

            } else {
                if($(`#page${pageMultiplier + 1}`).hasClass("bg-white")) {$(`#page${pageMultiplier + 2}`).toggleClass("bg-white text-black"); $(`#page${pageMultiplier + 1}`).toggleClass("bg-white text-black")} else {
                    $(`#page${pageMultiplier + index + 1}`).toggleClass("bg-white text-black")
                    $(`#page${pageMultiplier + index}`).toggleClass("bg-white text-black")
                } 
            }
            setIndex(index + 1)
        }
    }
    const handlePreviousPage = () => {

        if(index === 0 && hasPreviousPage) {
            setPageMultiplier(pageMultiplier - 5)
            setPages([])
            setIndex(4);
            setPagination({first: 100, after: null, before: null, last: null, apiIndex: pagination.apiIndex - 1, pageNum: pagination.pageNum - 1})

        } else if(index === 0 && !hasPreviousPage) {
            return;
        } else {
            if(pagination.apiIndex === 1) {
                    $(`#page${index + 1}`).toggleClass("bg-white text-black")
                    $(`#page${index }`).toggleClass("bg-white text-black")

            } else {
                $(`#page${index + 1 + pageMultiplier}`).toggleClass("bg-white text-black")
                $(`#page${index + pageMultiplier }`).toggleClass("bg-white text-black")
            }
            setIndex(index - 1)
        }
    }


    // if(index !== 0) {

    //     if(pagination.api === 1 && $("#page1").hasClass("bg-white text-black")) {
    //         $("#page1").toggleClass("bg-white text-black")
    //     } else {
    //         $(pageMultiplier + 1).toggleClass("bg-white text-black")
    //     }
    
    // } 
  
    
  return (
    <div className="w-full h-[50px] flex items-center justify-center mt-2">
        {pages.length && <div className="flex items-center justify-center w-auto h-full text-white bg-black backdrop-filter bg-opacity-70 p-[2px] border-2 border-white rounded-lg">
         <div className="flex items-center h-full mx-4 hover:text-[yellow] cursor-pointer" onClick={() => handlePreviousPage()}><FontAwesomeIcon icon={faArrowLeft} size="2xl"/></div>
            {pages}
         <div className="flex items-center h-full mx-4 hover:text-[yellow] cursor-pointer" onClick={() => handleNextPage()}><FontAwesomeIcon icon={faArrowRight} size="2xl"/></div>
        </div>}
    </div>
  );
}

export default PageGen;
