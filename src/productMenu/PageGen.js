import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";
  import $ from "jquery";
  import "./pages.css";


function PageGen({pageInfo,setPagination,pagination,setProducts,index,setIndex,length}) {
    const {numberOfProducts, hasNextPage, hasPreviousPage, endCursor, startCursor} = pageInfo;
    const [pages, setPages] = useState([]);
    const [pageMultiplier, setPageMultiplier] = useState(0);
    const numOfPages = Math.ceil(numberOfProducts / 10);


    useEffect(() => {
        let p = []
        for(let i = 1; i <= length; i++) {
            
            if(pagination.apiIndex === 1) {

                if(i == 1 && index === 0) {
                    let content = (<div id={`page1`} className="w-[34px] mx-[1px] h-full activePage hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() =>  handleClick(i)}>{i}</div>)
                    p.push(content)
                } else if(i == length && index === length - 1) {
                    let content = (<div id={`page${i}`} className="w-[34px] mx-[1px] h-full activePage hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() => handleClick(i) }>{i + pageMultiplier}</div>)
                    p.push(content)
                } else {
                    let content = (<div id={`page${i}`} className="w-[34px] mx-[1px] h-full hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() => handleClick(i)}>{i}</div>)
                    p.push(content)
                }
            } else {
                if(i == 1 && index !== length - 1){
                        let content = (<div id={`page${i}`} className="w-[34px] mx-[1px] h-full activePage hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() => handleClick(i) }>{i + pageMultiplier}</div>)
                        p.push(content)
                } else if(i == length && index === length - 1) {
                    let content = (<div id={`page${i}`} className="w-[34px] mx-[1px] h-full activePage hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() => handleClick(i) }>{i + pageMultiplier}</div>)
                    p.push(content)
                } else {
                    let content = (<div id={`page${i}`} className="w-[34px] mx-[1px] h-full hover:bg-white hover:text-black flex items-center justify-center text-2xl font-bold cursor-pointer" onClick={() => handleClick(i) }>{i + pageMultiplier}</div>)
                p.push(content)}
    
                }
                
                if(i === 5 && numOfPages > 5) {
                    p.push((<div className="w-[34px] mx-[1px] h-full flex items-center justify-center text-2xl font-bold" onClick={() => ""}>...</div>))
                    p.push((<div className="w-[34px] mx-[1px] h-full flex items-center hover:bg-white hover:text-black justify-center text-2xl font-bold cursor-pointer" onClick={() => handleLastPage()}>{numOfPages}</div>))
                    break;
                
                }
           
        }

        setPages([p])
    },[pageMultiplier,length])

    const handleLastPage = () => {
        //grab multiplier associated with the last page of the products.
        const getMaxMultiplier = Math.ceil(numberOfProducts / 50) * 5 - 5;
        setPageMultiplier(getMaxMultiplier)
        //normal process simlair too handleprev and handlenext.
        setPages([])
        //this algorithim determins what index the last page belongs too.
        console.log(Math.ceil((numberOfProducts % 50) / 10) - 1)
        setIndex(Math.ceil((numberOfProducts % 50) / 10) - 1)
        setPagination({first: 50, after: null, before: null, last: null, apiIndex: null, pageNum: Math.ceil(numberOfProducts / 50), reverse: true})
    }


    const handleClick = (pageID) => {
        //Find any pages with the activePage css class;
        var activePage = $('div.activePage').attr('id');
        console.log(activePage);
        //Toggle css activePage
        $(`#${activePage}`).toggleClass('activePage')
        //Toggle new div with the activePage css class;
        $(`#page${pageID}`).toggleClass('activePage')
        setIndex(pageID - 1)

    }

    const handleNextPage = () => {
        if(index === 4 && hasNextPage) {
            setPageMultiplier(pageMultiplier + 5)
            setPages([])
            setIndex(0)
            setPagination({first: 50, after: endCursor, before: null, last: null, apiIndex: pagination.apiIndex + 1, pageNum: pagination.pageNum + 1})
        } else if(index + 1 === length && !hasNextPage) {
            return;
        } else { 
            //similar to handClick
            var activePage = $('div.activePage').attr('id');
            $(`#${activePage}`).toggleClass('activePage')
            //we add 2 to the index to make up for the 1 varaince between index and page number and 1 more too advance 1 time in the index.
            //small and proabaly obvious note, if I only added 1 for the index and page number, we would never be able to traverse the page array in the frontend.
            $(`#page${index + 2}`).toggleClass('activePage')
            setIndex(index + 1)
        }
    }
    const handlePreviousPage = () => {

        if(index === 0 && hasPreviousPage) {
            setPageMultiplier(pageMultiplier - 5)
            setPages([])
            setIndex(4);
            setPagination({first: 50, after: null, before: null, last: null, apiIndex: pagination.apiIndex - 1, pageNum: pagination.pageNum - 1})

        } else if(index === 0 && !hasPreviousPage) {
            return;
        } else {
            //similar to handClick
            var activePage = $('div.activePage').attr('id');
            $(`#${activePage}`).toggleClass('activePage')
            $(`#page${index}`).toggleClass('activePage')
            setIndex(index - 1)
        }
    }
  
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
