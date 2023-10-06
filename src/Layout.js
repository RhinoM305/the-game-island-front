import React, {useEffect, useState, Suspense} from "react";
import "./index.css";
import ProductView from "./productMenu/productView/ProductView.js"
import Landing from "./Landing.js"
import Search from "./productMenu/Search/Search.js"
import LoginForm from "./login/LoginForm.js"
import { Routes, Route } from "react-router-dom";


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


// The code below this is the old layout, we are keeping it here for reference but are scraping most of it!

// return (
//   <>
//     <div className="wrapper">
//       <div
//         className="background-80s animated-clouds stars"
//         style={{ "--background-height": "100vh" }}
//       >
//         <div className="sun"></div>
//         <div
//           className="grid"
//           style={{
//             "--grid-color": "rgba(115,59,139,0.7)",
//             "--grid-size": "30px",
//             "--grid-blur": "1px",
//           }}
//         ></div>
//         <div className="road-off"></div>
//         <div className="overlay"></div>
//         <svg width="0" height="0">
//           <filter id="filter">
//             <feTurbulence
//               type="fractalNoise"
//               baseFrequency=".01"
//               numOctaves="10"
//               id="fractalNoise"
//             />
//             <feDisplacementMap
//               id="displacementMap"
//               in="SourceGraphic"
//               scale="120"
//             />
//           </filter>
//           <animate
//             xlinkHref="#displacementMap"
//             id="animclouds1"
//             begin="0; animclouds2.end"
//             attributeName="scale"
//             from="50"
//             to="180"
//             dur="3s"
//             fill="freeze"
//           />
//           <animate
//             xlinkHref="#displacementMap"
//             id="animclouds2"
//             begin="animclouds1.end"
//             attributeName="scale"
//             from="180"
//             to="50"
//             dur="3s"
//             fill="freeze"
//           />
//           <animate
//             xlinkHref="#fractalNoise"
//             id="animclouds3"
//             begin="0;animclouds4.end"
//             attributeName="baseFrequency"
//             from="0.03"
//             to="0.01"
//             dur="30s"
//             fill="freeze"
//           />
//           <animate
//             xlinkHref="#fractalNoise"
//             id="animclouds4"
//             begin="animclouds3.end"
//             attributeName="baseFrequency"
//             from="0.01"
//             to="0.03"
//             dur="30s"
//             fill="freeze"
//           />
//         </svg>
//       </div>
//     </div>

//     <NavBar />
//     <Landing />

//     <Suspense fallback={<>Loading...</>}>
//       <BrandDisplay />
//       <SocialDisplay />
//     </Suspense>

//     <div className="w-full h-[8rem] bg-black bg-opacity-70 backdrop-filter flex whitespace-nowrap text-white">
//       <img
//         src={require("./content/images/trophy.png")}
//         className="my-2 ml-6"
//       />
//       <div className="flex items-center ml-6">
//         <p className="flex text-4xl w-ful">
//           SIGN UP FOR OUR NEWSLETTER! GET{" "}
//           <p className="font-bold mx-2 text-[yellow]">10% OFF </p> First Order
//         </p>
//       </div>
//       <div className="flex m-auto w-full h-[35%] text-3xl text-black">
//         <input className="w-[55%] ml-auto" />
//         <button className="px-1 mr-auto bg-yellow-500">Subscribe</button>
//       </div>
//     </div>
//     <Suspense fallback={<>Loading...</>}>
//       <ShippingDisplay />
//       <Footer />
//     </Suspense>
//   </>
// );