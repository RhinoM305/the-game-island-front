import React, { useEffect, useState} from "react";
import NavBar from "../../nav/NavBar.js"
import ProductList from "./ProductList"
import ProductNav from "../../nav/ProductNav";
import ProductNavMobile from "../../nav/ProductNavMobile"
import ShowProduct from "./ShowProduct.js"
import { Routes, Route } from "react-router-dom";


function ProductView({productDetail, setProductDetail,setProduct,product}) {

    return (
        <>
        <div className="w-full max-[1080px]:pt-16 bg-black">
            <NavBar setProductDetail={setProductDetail}/>
            <div className="w-3/4 mx-[12.5%] flex items-center flex-col max-[1080px]:mx-0 max-[1080px]:w-full">
              <Routes>
                <Route path="" element={
                <>
                  <h2 className="w-full py-4 pl-4 text-3xl text-left max-[1080px]:pl-0 max-[1080px]:text-center max-[1080px]:text-base max-[1080px]:pt-20 text-white">{productDetail.name} - {productDetail.type}</h2>
                  <ProductList setProduct={setProduct}/>
                </>}/>
               <Route path="/:id/*" element={<ShowProduct product={product} setProduct={setProduct}/>}/>
            </Routes>
            </div>
        </div>
        </>
    )
}

export default ProductView;