import React, {useState, useEffect} from 'react';
import $ from "jquery";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight, faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";

//backend use
import { useQuery } from "@apollo/client";
import { LOAD_COLLECTIONBYHANDLE } from "../graphQL/Queries";

//animation
import {fastLoadingAnimation} from "../content/animations/fastLoadingAnimation"

function FeaturedProductList ({feat,setFeat, setProduct}) {
    let [pageInfo, setPageInfo] = useState({before: null, after: null, first: 6, last: null});
    let [colName, setColName] = useState(null);
    let [count, setCount] =  useState(0);
    let [viewSetting,setViewSetting] = useState(null);    
    const navigate = useNavigate();
    var viewportWidth = $(window).width();

    
    if(colName !== feat.colName) {
        setPageInfo({before: null, after: null, first: 6, last: null})
        setColName(feat.colName);
        setCount(0);
    }

    $(window).resize(function() {
        viewportWidth = $(window).width();
        if(viewportWidth < 530 && viewSetting !== 1) {
            setViewSetting(1);
            return;
        } else if (viewportWidth < 700 && viewportWidth > 530 && viewSetting !== 2) {
            setViewSetting(2);
            return;
        } else if (viewportWidth < 1080 && viewportWidth > 700 && viewSetting !== 3) {
            setViewSetting(3);
            return;
        }
         else if (viewportWidth < 1189 && viewportWidth > 1080 && viewSetting !== 4) {
            setViewSetting(4);
            return;
        } else {
            return;
        }
        return;
    });
    
    const handleRightClick = (pageInf,productLength) => {
        if(viewportWidth < 530 && count !== productLength - 1) {
            setCount(count + 1)
            return;
        } else if (viewportWidth < 700) {
           if(count !== Math.ceil(productLength / 2) - 1) {
            setCount(count + 1)
            return;
           } else if (count === Math.ceil(productLength / 2) - 1 && !pageInf.hasNextPage) {
            return;
           } else  {
            setCount(0);
            return;
           }
        } else if (viewportWidth < 1080) {
            if(count !== Math.ceil(productLength / 3) - 1) {
                setCount(count + 1)
                return;
               } else if (count === Math.ceil(productLength / 3) - 1 && !pageInf.hasNextPage) {
                return;
               } else {
                setCount(0);
               }
        } else if(count === productLength - 1 && !pageInf.hasNextPage) {
            return;
        } else {
            setCount(0);
        }
      
        if(!pageInf.hasNextPage) return;
        setPageInfo({before: null, after: pageInf.endCursor, first: 6, last: null});
    }

    const handleLeftClick = (pageInf,productLength) => {
        if(viewportWidth < 530 && count !== 0) {
            setCount(count - 1)
            return;
        } else if (viewportWidth < 700) {
            if(count !== 0) {
             setCount(count - 1);
             return;
            } else if(count === 0 && !pageInf.hasPreviousPage) {
             return;
            } else {
             setCount(2);
            }
        } else if (viewportWidth < 1080) {
            if(count !== 0) {
                setCount(count - 1);
                return;
               } else if(count === 0 && !pageInf.hasPreviousPage) {
                return;
               } else {
                setCount(1);
               }
        } else if(count === 0 && !pageInf.hasPreviousPage) {
            return;
        } else {
            setCount(5);
        }
        if(!pageInf.hasPreviousPage) {
            setPageInfo({before: null, after: null, first: 6, last: null}) 
            return
        }
        setPageInfo({before: pageInf.startCursor, after: null, first: null, last: 6});

    }
    const variables = {
        before: pageInfo.before, 
        after: pageInfo.after, 
        handle: feat.colName, 
        first: pageInfo.first, 
        last: pageInfo.last
    }

    const { error, loading, data, refetch } = useQuery(LOAD_COLLECTIONBYHANDLE,{
        variables: variables,
      });

    useEffect(() => {
            refetch();
    },[pageInfo])


    const renderProducts = (products) => {
      
        products = products.getCollectionByHandle.products;

        if(products.length == 0) {
           return (
            <div className="flex items-center justify-center w-full h-full p-2 overflow-hidden max-[1080px]:flex-col">
                <img className="opacity-[.6] w-[300px] h-[300px] max-[1080px]:w-[150px] max-[1080px]:h-[150px]"src={require("../content/images/404warn2.jpeg")}/>
                <p className='opacity-[.6] text-lg font-bold text-black max-[1080px]:text-sm'>...quickly working to bring you greatness!</p>
            </div>
           )
        }
        return products.map(product => {    
            return (
                <div key={product.title} className="z-[2] w-1/6 h-full border-2 hover:scale-[1.02] hover:opacity-[.8] rounded-lg overflow-hidden max-[530px]:w-[80%] max-[1080px]:w-[40%]" onClick={() => {navigate(`/productView/${feat.colName}/${product.productId}`); setProduct(product)}}>
                <img src={product.images[0]} className="w-full h-[60%] px-4"/>
                <div className="w-full h-[40%] bg-orange-500 font-Rubik font-bold">
                    <div className="w-full h-[85%] p-1">{product.title}</div>
                    <div className="w-full h-[15%] pr-2 bg-stone-900 text-white text-right ">
                        {product.price}
                    </div>

                </div>

            </div>
            )
        })
    }

    const renderMobile = (products) => {
        let renderedProducts = renderProducts(products)
        if(Array.isArray(renderedProducts) === false) {
            return renderedProducts;
        } else if(viewportWidth < 530) {
            return renderedProducts[count];
        } else if(viewportWidth < 700) {
            let content = renderedProducts;
            let newContent = [];

            for(let i = 0; i < content.length; i++) {
                //if odd num
                if(i % 2 === 1) {
                        const arrToPush = [content[i - 1],content[i]];
                        newContent.push(arrToPush);   
                }
            }
           if(content.length % 2 === 1) newContent.push([content[content.length - 1]])
            return newContent[count];
        } else if (viewportWidth < 1080) {
            let content = renderedProducts;
            let newContent = [];

            for(let i = 0; i < content.length; i++) {
                //if # is divisible by 3
                if(i % 3 === 0) {
                        const arrToPush = [content[i],content[i+1],content[i+2]];
                        newContent.push(arrToPush);   
                }
            }

            if(content.length === 3) newContent.push([content[3]])
            if(content.length === 4) newContent.push([content[4]])
                
            return newContent[count];
        } else if(viewportWidth < 1189) {
            return renderedProducts;
        }
    }
  
    return (
       <>
        <div className="w-full h-[75%] p-2 text-xs">
     <div className="z-[40] absolute invisible h-[75%] w-[150px] -left-9 flex justify-start items-center ml-4 bg-red-500 max-[1189px]:left-3">
     {data && <FontAwesomeIcon className="visible scale-[2.2] hover:scale-[2.4] text-[#51A451] max-[1189px]:text-black" icon={faCaretLeft} size="2xl" onClick={() => handleLeftClick(data.getCollectionByHandle.pageInfo,data.getCollectionByHandle.products.length)}/>}
     </div>
     <div className="z-[40] absolute invisible h-[75%] w-[150px] -right-9 flex justify-end items-center mr-4 bg-red-500 max-[1189px]:right-3">
     {data && <FontAwesomeIcon className="visible scale-[2.2] hover:scale-[2.4] text-[#51A451] max-[1189px]:text-black" icon={faCaretRight} size="2xl" onClick={() => handleRightClick(data.getCollectionByHandle.pageInfo,data.getCollectionByHandle.products.length)}/>}
     </div>
          {data && <div className="flex w-full h-full max-[1189px]:hidden">
            {renderProducts(data)}
          </div>}
          {/* mobile product function */}
          {data && <div className="flex w-full h-full max-[1189px]:justify-center min-[1189px]:hidden">
            {renderMobile(data)}
          </div>}
          {loading && <div className="flex items-center justify-center h-full">{fastLoadingAnimation()}</div>}
        </div>
       </>
    )
}

export default FeaturedProductList;