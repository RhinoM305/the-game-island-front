import ProductDisplay from "./ProductDisplay";
import { useQuery } from "@apollo/client";
import { LOAD_PRODUCTS } from "../graphQL/Queries";
import React, { useEffect, useState } from "react";
import PageGen from "./PageGen"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faArrowLeft
  } from "@fortawesome/free-solid-svg-icons";


function BrandDisplay() {
  const [products, setProducts] = useState([]);
  const [brand , setBrand] = useState("All")
  const [Query, setQuery] = useState(null)
  const [pageInfo, setPageInfo] = useState(null)
  const [pagination, setPagination] = useState({first: 100, after: null, before: null, last: null, apiIndex: 1, pageNum: 1, reverse: false})
  const [index, setIndex] = useState(0)
  const [pageMultiplier, setPageMultiplier] = useState(0);

 

  const { error, loading, data } = useQuery(LOAD_PRODUCTS,{
    variables: { first: pagination.first, after: pagination.after, before: pagination.before, last: pagination.last, Query: Query, pageNum: pagination.pageNum, reverse: pagination.reverse },
  });
  useEffect(() => {
    
    if (error) {
      return console.log(`Error: ${error}`);
    }
    if (loading) {
      return console.log("Loading...");
    } 
      setPageInfo(data.getProducts.pageInfo);
      
      let allProducts = data.getProducts.products;
      let pagedProducts = [];

      for(let i = 0; i < allProducts.length; i += 20) {
        const page = allProducts.slice(i, i + 20);
        pagedProducts.push(page);
      }
      setProducts(pagedProducts);

  }, [data,Query,pagination]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-auto pt-6 mt-16 bg-black backdrop-filter bg-opacity-70">
        <div className="flex items-center justify-between">
          <div className="w-4/5 h-full mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#e4000f]" onClick={() => {setBrand("Nintendo"); setQuery({selector:"vendor",toMatch:"Nintendo"}); setProducts([])}}>
            <img src={require("../content/images/nintendo.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Nintendo
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#17569b]" onClick={() => {setBrand("Sega"); setQuery({selector:"vendor",toMatch:"Sega"}); setProducts([])}}>
            <img src={require("../content/images/sega.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Sega
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#0e7a0d]" onClick={() => {setBrand("Xbox"); setQuery({selector:"vendor",toMatch:"Xbox"}); setProducts([])}}>
            <img src={require("../content/images/xbox-logo.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Xbox
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#e41b23]" onClick={() => {setBrand("Atari"); setQuery({selector:"vendor",toMatch:"Atari"}); setProducts([])}}>
            <img src={require("../content/images/atari.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Atari
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#006FCD]" onClick={() => {setBrand("Playstation"); setQuery({selector:"vendor",toMatch:"Playstation"}); setProducts([])}}>
            <img src={require("../content/images/playstation.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Playstation
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-white" onClick={() => {setBrand("Gamer Gear"); setQuery({selector:"vendor",toMatch:"GamerGear"}); setProducts([])}}>
            <img src={require("../content/images/gamer-gear.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Gamer Gear
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#FFD700]" onClick={() => {setBrand("Imports"); setQuery({selector:"vendor",toMatch:"Imports"}); setProducts([])}}>
            <img src={require("../content/images/import.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Import
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-screen mb-12 mr-8 bg-black backdrop-filter bg-opacity-70">
        <p className="text-2xl italic text-[yellow] mx-4">
          Be the first to know about our new stock! Also view whats hot!
        </p>
        <div className="flex my-4 h-[50px] items-center justify-center mr-4 p-2 backdrop-filter bg-opacity-70 backdrop-blue-lg rounded-lg bg-black text-3xl text-bold text-white hover:bg-white hover:text-black transition transform hover:scale-[1.1]">
          <img
            src={require("../content/images/box.png")}
            className="w-auto h-[50px] mr-2"
          />
          New Stock
        </div>
        <div className="flex my-2 h-[50px] items-center justify-center  p-2 backdrop-filter bg-opacity-70 backdrop-blue-lg rounded-lg bg-black text-3xl text-bold text-white hover:bg-white hover:text-black transition transform hover:scale-[1.1]">
          <img
            src={require("../content/images/fire.png")}
            className="w-auto h-auto mr-2"
          />
          Popular
        </div>
      </div>
      <ProductDisplay brand={brand} products={products} index={index}/>
      <div className="w-full h-[50px] flex items-center justify-center mt-2">
      {pageInfo && data && <PageGen pageInfo={pageInfo} setPagination={setPagination} pagination={pagination} setProducts={setProducts} setIndex={setIndex} index={index} length={products.length} setPageMultiplier={setPageMultiplier} pageMultiplier={pageMultiplier}/>}
      </div>
    </div>
  );
}

export default BrandDisplay;
