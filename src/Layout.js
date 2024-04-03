import React, {useEffect, useState, Suspense} from "react";
import "./index.css";
import ProductView from "./productMenu/productView/ProductView.js"
import Landing from "./Landing.js"
import Search from "./productMenu/Search/Search.js"
import LoginForm from "./login/LoginForm.js"
import { Routes, Route } from "react-router-dom";
import $ from "jquery";


import { useQuery } from "@apollo/client";
import { LOAD_PRODUCT } from "./graphQL/Queries.js";


function Layout() {
  let [productDetail, setProductDetail] = useState({name: null, type: null})
  let [product, setProduct] = useState({});

  useEffect(() => {
    const data = window.localStorage.getItem('productDetail')
    if ( data !== null) setProductDetail(JSON.parse(data))
},[])

  useEffect(() => {
    window.localStorage.setItem('productDetail', JSON.stringify(productDetail))
},[productDetail])
    

  return (
    <>
    <div className="fixed w-screen h-screen -z-[1] bg-[#000000]"></div>

      <Suspense fallback={<>Loading..</>}>
        <Routes>
          <Route path="/productView/*" element={<Search setProductDetail={setProductDetail} productDetail={productDetail} setProduct={setProduct}/>}/>
          <Route path="/productView/:handle/*" element={<ProductView setProductDetail={setProductDetail} productDetail={productDetail} setProduct={setProduct} product={product}/>}/>
          <Route path="/loginForm/*" element={<LoginForm />} />
          <Route path="/*" element={<Landing setProductDetail={setProductDetail} productDetail={productDetail} setProduct={setProduct}/>}/>
        </Routes>
      </Suspense>
    </>
  )
}
<img src="https://cdn.shopify.com/s/files/1/0749/6872/7836/files/Background_3.jpg?v=1692555532" className="fixed z-[1] w-screen h-screen"></img>


export default Layout;


