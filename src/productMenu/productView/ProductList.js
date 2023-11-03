import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//backend use
import { useQuery } from "@apollo/client";
import { LOAD_COLLECTIONBYHANDLE } from "../../graphQL/Queries";

function ProductList({setProduct}) {
    let [numberPerPage, setNumberPerPage] = useState(15);
    let [pageInfo, setPageInfo] = useState({before: null, after: null, first: numberPerPage, last: null, sortKey:null, reverse: false});
    let [currPage, setcurrPage] = useState(1);

    const navigate = useNavigate();

    
    const { handle } = useParams();
    const defaultPageSettings = {before: null, after: null, first: 15, last: null, sortKey:null, reverse: false}

    const handleRightClick = (pageInf) => {
        if(!pageInf.hasNextPage) return;
        setcurrPage(currPage + 1);
        setPageInfo({...pageInfo, before: null, after: pageInf.endCursor, first: numberPerPage, last: null});
    }

    const handleLeftClick = (pageInf) => {
        if(!pageInf.hasPreviousPage) {
            setPageInfo({...pageInfo, before: null, after: null, first: numberPerPage, last: null}) 
            return
        }
        setcurrPage(currPage - 1);
        setPageInfo({...pageInfo, before: pageInf.startCursor, after: null, first: null, last: numberPerPage});
    }
    const variables = {
        before: pageInfo.before, 
        after: pageInfo.after, 
        handle: handle, 
        first: pageInfo.first, 
        last: pageInfo.last,
        sortKey: pageInfo.sortKey,
        reverse: pageInfo.reverse,
    }

    const { error, loading, data, refetch } = useQuery(LOAD_COLLECTIONBYHANDLE,{
        variables: variables,
      });

    useEffect(() => {
            refetch();
    },[pageInfo])

    const handleSortSelect = (event) => {
        const newVal = event.target.value;

        if(Number(newVal) < 3) {newVal == "1" ? setPageInfo({...defaultPageSettings, first: pageInfo.first, sortKey: "PRICE"}) : setPageInfo({...defaultPageSettings, first: pageInfo.first, sortKey: "PRICE", reverse:true}) }
         else {
            newVal == "3" ? setPageInfo({...defaultPageSettings, first: pageInfo.first, sortKey: "TITLE"}) : setPageInfo({...defaultPageSettings, first: pageInfo.first, sortKey: "TITLE", reverse: true}) 
        }
    }

    const handleNumPerPageSelect = (event) => {
        const newVal = event.target.value;
        
        if(newVal == "1") {
            setPageInfo({...defaultPageSettings, first: 15}) 
            setNumberPerPage(15)      
        } else if(newVal == "2") {
            setPageInfo({...defaultPageSettings, first: 25})
            setNumberPerPage(25)
        } else {
            setPageInfo({...defaultPageSettings, first: 40})
            setNumberPerPage(40)
       }
    }

    function renderProducts(products) {
        products = products.getCollectionByHandle.products;
 
        return products.map(product => {
            return (
                <li className="w-1/5 p-2 h-[350px] hover:scale-[1.02] hover:opacity-[.8]" onClick={() => {navigate(`/productView/${handle}/${product.productId}`); setProduct(product)}}>
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img src={product.images[0]} className="bg-white h-[60%] w-full px-4"/>
                    <div className="h-[32%] bg-orange-500 text-center p-1">
                        {product.title}
                    </div>
                    <div className="h-[8%] pr-2 text-right bg-stone-500">{product.price}</div>
                </div>
            </li>
            )
        })
    };

    return (
        <div className="w-full">
            <div className="w-full p-4">
                <div className="flex justify-between mt-4">
                <p className="text-white">OPTIONS</p>
                <div className="flex">
                  {data && <p className="mr-8 text-white">You are on page: {currPage} of {Math.ceil(data.getCollectionByHandle.productsCount/numberPerPage)}</p>}
                  {data && <p className="text-white hover:scale-[1.07] mx-1" onClick={() => handleLeftClick(data.getCollectionByHandle.pageInfo)}>Previous</p>}
                  {data && <p className="text-white hover:scale-[1.07] mx-1" onClick={() => handleRightClick(data.getCollectionByHandle.pageInfo)}>Next</p>}
                  <select className="mx-2" value={null} onChange={e => handleSortSelect(e)}>
                    <option hidden selected>Select</option>
                    <option value="1">Sort by price (Low to High)</option>
                    <option value="2">Sort by price (High to low)</option>
                    <option value="3">Sort by title (A - Z)</option>
                    <option value="4">Sort by title (Z - A)</option>
                  </select>
                  <select className="mx-2" value={null} onChange={e => handleNumPerPageSelect(e)}>
                    <option hidden selected>Select</option>
                    <option value="1">15</option>
                    <option value="2">25</option>
                    <option value="3">40</option>
                  </select>
                </div>
                </div>
                <ul className="flex flex-wrap w-full px-1/4">
                    {data && renderProducts(data)}
                </ul>
            </div>
           
        </div>
    )
}

export default ProductList;