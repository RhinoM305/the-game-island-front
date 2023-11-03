import React, { useEffect, useState} from "react";
import NavBar from "../../nav/NavBar.js"
import ProductList from "./ProductList"
import ProductNav from "../../nav/ProductNav";
import ShowProduct from "./ShowProduct.js"
import { Routes, Route } from "react-router-dom";


function ProductView({productDetail, setProductDetail,setProduct,product}) {

    return (
        <>
        <div className="w-full bg-black">
            <NavBar />
            <div className="w-3/4 mx-[12.5%] flex items-center flex-col">
            <ProductNav setProductDetail={setProductDetail}/>
              <Routes>
                <Route path="" element={
                <>
                  <h2 className="w-full py-4 pl-4 text-3xl text-left text-white">{productDetail.name} - {productDetail.type}</h2>
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