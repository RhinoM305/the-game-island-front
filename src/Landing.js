import React, {lazy} from 'react';
import Caorsuel from "./caorsuel/caorsuel";
import ProductDisplay from "./productMenu/ProductDisplay";
import NavBar from "./nav/NavBar";


const SocialDisplay = lazy(() => import("./social/SocialDisplay"));
const ShippingDisplay = lazy(() => import("./footer/ShippingDisplay"));
const Footer = lazy(() => import("./footer/Footer"));

function Landing({setProductDetail,productDetail,setProduct}) {
    return (
        <>
        <NavBar />
        <div className="w-3/4 mx-[12.5%] flex items-center flex-col">
            <Caorsuel setProductDetail={setProductDetail}/>
            <ProductDisplay setProductDetail={setProductDetail} setProduct={setProduct} productDetail={productDetail} />
            <ShippingDisplay />
            <Footer />
        </div></>
    );
}

export default Landing;