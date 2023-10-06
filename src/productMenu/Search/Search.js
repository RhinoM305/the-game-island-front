import React, {useEffect, useState } from 'react';
import { useLocation,useNavigate  } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from "../../graphQL/Queries";
import NavBar from "../../nav/NavBar";
import ProductNav from "../../nav/ProductNav";


function Search ({productDetail, setProductDetail, setProduct }) {
    //grabbing query from url
    const {search} = useLocation();
    const searchParams = new URLSearchParams(search)
    const query = searchParams.get('search');


    let [numberPerPage, setNumberPerPage] = useState(15);
    let [pageInfo, setPageInfo] = useState({before: null, after: null, first: numberPerPage, last: null, sortKey:null, reverse: false, query: {selector: "title", toMatch: query},});
    let [currPage, setcurrPage] = useState(1);
    const defaultPageSettings = {before: null, after: null, first: 15, last: null, sortKey:null, reverse: false, query: {selector: "title", toMatch: query}}

    useEffect(() => {
        refetch();
    },[pageInfo,query])

    useEffect(() => {
        setPageInfo({...pageInfo, query:{selector: "title", toMatch: query}})
    },[query])

    const navigate = useNavigate();

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
        first: pageInfo.first, 
        last: pageInfo.last,
        Query: pageInfo.query,
    }


    const { error, loading, data, refetch } = useQuery(LOAD_PRODUCTS,{
        variables: variables,
      });

    const handleSortSelect = (event) => {
        const newVal = event.target.value;

        if(Number(newVal) < 3) {newVal == "1" ? setPageInfo({...defaultPageSettings, first: pageInfo.first, sortKey: "PRICE"}) : setPageInfo({...defaultPageSettings, first: pageInfo.first, sortKey: "PRICE", reverse:true}) }
         else {
            newVal == "3" ? setPageInfo({...defaultPageSettings, first: pageInfo.first, sortKey: "TITLE"}) : setPageInfo({...defaultPageSettings, first: pageInfo.first, sortKey: "TITLE", reverse: true}) 
        }
    }
    if(error) {
        console.log("error:" , error)
    }

    const handleNumPerPageSelect = (event) => {
        const newVal = event.target.value;
        
        if(newVal == "1") {
            setPageInfo({...defaultPageSettings,  first: 15}) 
            setNumberPerPage(15)      
        } else if(newVal == "2") {
            setPageInfo({...defaultPageSettings,  first: 25})
            setNumberPerPage(25)
        } else {
            setPageInfo({...defaultPageSettings,  first: 40})
            setNumberPerPage(40)
       }
    }
    
    function renderProducts(products) {
        products = products.getProducts.products;

        return products.map(product => {
            return (
                <li className="w-1/5 p-2 h-[350px] hover:scale-[1.02] hover:opacity-[.8]" onClick={() => {navigate(`/productView/handle/${product.id}`); setProduct(product)}}>
                <div className="w-full h-full overflow-hidden rounded-lg">
                    <img src={product.images[0]} className="bg-white h-[60%] w-full"/>
                    <div className="h-[32%] bg-orange-500 text-center p-1">
                        {product.title}
                    </div>
                    <div className="h-[8%] pr-2 text-right bg-stone-500">{product.price}</div>
                </div>
            </li>
            )
        })
    };

    let loadProducts = () => {
        if(data.getProducts.products.length == 0) {
            return (
                <div className="flex items-center justify-center w-screen h-screen p-2 overflow-hidden">
                <img className="opacity-[.6] w-[550px] h-[550px]"src={require("../../content/images/404warn2.jpeg")}/>
                <div className="opacity-[.6] text-white">
                <p className='text-[35px] font-bold'>...Uh Oh! You reached a rare area :(</p>
                <p className="text-md font-semi-bold">Feel free to contact us to help you find what your looking for!</p>
                <button className="p-1 border-2 border-white rounded-lg text-md hover:scale-[1.15]" onClick={() => navigate("/")}>Home</button>
                </div>
            </div>
            )
        } else {
            return (
                <div className="w-full">
                <div className="w-full p-4">
                    <div className="flex justify-between mt-4">
                    <p className="text-white">OPTIONS</p>
                    <div className="flex">
                      {data && <p className="text-white hover:scale-[1.07] mx-1" onClick={() => handleLeftClick(data.getProducts.pageInfo)}>Previous</p>}
                      {data && <p className="text-white hover:scale-[1.07] mx-1" onClick={() => handleRightClick(data.getProducts.pageInfo)}>Next</p>}
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
    }
    return (
        <>
        <div className="w-full bg-black">
            <NavBar />
            <div className="w-3/4 mx-[12.5%] flex items-center flex-col">
            <ProductNav setProductDetail={setProductDetail}/>
            {data && loadProducts()}
            </div>
        </div>
        </>
    )
}


export default Search;