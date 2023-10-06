import React, {useState, useEffect} from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";

//backend use
import { useQuery } from "@apollo/client";
import { LOAD_COLLECTIONBYHANDLE } from "../graphQL/Queries";

function FeaturedProductList ({feat,setFeat, setProduct}) {
    let [pageInfo, setPageInfo] = useState({before: null, after: null, first: 6, last: null});
    let [colName, setColName] = useState(null);

    const navigate = useNavigate();

    if(colName !== feat.colName) {
        setPageInfo({before: null, after: null, first: 6, last: null})
        setColName(feat.colName);
    }

    const handleRightClick = (pageInf) => {

        if(!pageInf.hasNextPage) return;
        setPageInfo({before: null, after: pageInf.endCursor, first: 6, last: null});
    }

    const handleLeftClick = (pageInf) => {
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
            <div className="flex items-center justify-center w-full h-full p-2 overflow-hidden">
                <img className="opacity-[.6] w-[300px] h-[300px]"src={require("../content/images/404warn2.jpeg")}/>
                <p className='opacity-[.6] text-lg font-bold text-black'>...quickly working to bring you greatness!</p>
            </div>
           )
        }
        return products.map(product => {    
            return (
                <div className="z-10 w-1/6 h-full border-2 hover:scale-[1.02] hover:opacity-[.8]" onClick={() => {navigate(`/productView/${feat.colName}/${product.id}`); setProduct(product)}}>
                <img src={product.images[0]} className="w-full h-[60%]"/>
                <div className="w-full h-[40%] bg-orange-500">
                    <div className="w-full h-[85%] p-1">{product.title}</div>
                    <div className="w-full h-[15%] pr-2 bg-stone-700 text-white text-right ">
                        {product.price}
                    </div>

                </div>

            </div>
            )
        })
    }

    return (
       <>
        <div className="w-full h-[75%] p-2 text-xs">
     <div className="z-[20] absolute invisible h-[75%] w-[150px] left-0 flex justify-start items-center ml-4 bg-red-500">
     {data && <FontAwesomeIcon className="visible scale-[1.4] hover:scale-[1.7]" icon={faCircleLeft} size="2xl" onClick={() => handleLeftClick(data.getCollectionByHandle.pageInfo)}/>}
     </div>
     <div className="z-[20] absolute invisible h-[75%] w-[150px] right-0 flex justify-end items-center mr-4 bg-red-500">
     {data && <FontAwesomeIcon className="visible scale-[1.4] hover:scale-[1.7]" icon={faCircleRight} size="2xl" onClick={() => handleRightClick(data.getCollectionByHandle.pageInfo)}/>}
     </div>
          <div className="flex w-full h-full">
            {data && renderProducts(data)}
          </div>
        </div>
       </>
    )
}

export default FeaturedProductList;