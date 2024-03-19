import React, {lazy} from 'react';
import Caorsuel from "./caorsuel/caorsuel";
import ProductDisplay from "./productMenu/ProductDisplay";
import NavBar from "./nav/NavBar";
import Newsletter from  "./social/Newsletter";
import NintendoPicks from "./Top-Picks/NintendoPicks"



const SocialDisplay = lazy(() => import("./social/SocialDisplay"));
const ShippingDisplay = lazy(() => import("./footer/ShippingDisplay"));
const Footer = lazy(() => import("./footer/Footer"));


function Landing({setProductDetail,productDetail,setProduct}) {
    return (
        <>
        <NavBar setProductDetail={setProductDetail}/>
        <div className="flex items-center flex-col max-[1080px]:mx-[2%] max-[1080px]:justify-center max-[1080px]:mt-[55px] min-[1080px]:w-full min-[1080px]:px-[25px]">
            <Caorsuel setProductDetail={setProductDetail}/>
            <ProductDisplay setProductDetail={setProductDetail} setProduct={setProduct} productDetail={productDetail} />
            <Newsletter />
            {/* <NintendoPicks /> */}
            <ShippingDisplay />
            <Footer />
        </div></>
    );
}

export default Landing;