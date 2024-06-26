import React, {useState, useEffect}  from 'react';
import { useNavigate } from "react-router-dom";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { useQuery } from "@apollo/client";
import { LOAD_PRODUCT } from "../../graphQL/Queries.js";

//animations 
import {fastLoadingAnimation1} from "../../content/animations/fastLoadingAnimation"


function ShowProduct() {
    const navigate = useNavigate();
    
    let [currImg, setCurrImg] = useState("")
    let [quantity, setQuantity] = useState(1);
    let [product, setProduct] = useState({});


    function grabIdFromUrl() {
        let splitURL = window.location.pathname.split("/")
        let idFromURL = splitURL.slice(splitURL.indexOf("gid:")).filter((c) => {
            if(Number.isInteger(Number(c))) return c;
        })
        return `gid://shopify/Product/${idFromURL[0]}`
    }
    grabIdFromUrl();
    const variables = {
        id: grabIdFromUrl()
    }
    
    const { error, loading, data} = useQuery(LOAD_PRODUCT,{
        variables: variables,
      });
    
    useEffect(() => {
        if(data) {
            setProduct(data.getProduct)
            setCurrImg(data.getProduct.images[0])

        }
    },[data])


    const addToCart = () => {
        let cartItems = JSON.parse(localStorage.getItem('thegameislandCart'));
        let itemExists = cartItems.find((e) => e.product.title === product.title);
        if(itemExists) {
            itemExists.quantity = Number(quantity) + Number(itemExists.quantity);
            localStorage.setItem('thegameislandCart', JSON.stringify(cartItems));
        } else {
            let lineItem = {product: product, quantity: quantity}
            cartItems = [...cartItems, lineItem];
            localStorage.setItem('thegameislandCart', JSON.stringify(cartItems));
        }

        navigate("/cart");

    }

    const handleQuantityChange = (val) => {
        let quantityformat = /^[0-9]*[1-9]+[0-9]*$/
        if(!quantityformat.test(val)) {
            alert("This is not a valid number!")
            return false;
        }
        setQuantity(val);
    }

    return (
        <div className="mx-8 mt-8 max-[1080px]:mx-0 max-[1080px]:mt-2 max-[1080px]:mb-24">
          {data && <div className="flex max-[1080px]:flex-col w-full mt-8">
          <h2 className="mt-10 mb-6 text-md font-bold text-center text-white min-[1080px]:hidden">{product.title}</h2>

            <div className="flex flex-col items-center w-full">
                <div className=" w-[60%] min-[1080px]:h-[550px] max-[1080px]:flex  max-[1080px]:justify-center">
                <Zoom>
                        <img 
                          src={currImg}
                          className="max-[1080px]:w-[440px] max-[600px]:h-[240px] max-[1080px]:h-[440px] min-[1080px]:h-[480px] min-[1080px]:w-full"
                        />
                </Zoom>
                </div>
                <div className="flex justify-center w-full mt-2 text-center">
                    {data.getProduct.images.map((image) => (<img className="mx-[1px] w-[75px] h-[100px] min-[1080px]:hover:scale-[1.1] max-[1080px]:w-[70px] max-[1080px]:h-[70px] max-[1080px]:mx-[3px]" src={`${image}`} onClick={() => {setCurrImg(`${image}`)}}/>))}
                </div>
                
            </div>
            <div className="flex flex-col w-full text-white">
            <div className="mx-2 max-[1080px]:mt-4">
                <h2 className="mt-10 mb-6 text-3xl font-bold text-center max-[1080px]:hidden">{product.title}</h2>
                <div className="flex justify-between">
                    <p className="ml-4 text-2xl font-bold max-[1080px]:text-xl">${product.price}</p>
                    <p className="text-sm">{product.vendor}</p>
                </div>
                <hr className=""></hr>
                <div className="max-[1080px]:flex max-[1080px]:justify-between">
                <div className="flex flex-col m-2">
                <label className="font-bold">Qty.</label>
                <input type="number" className="w-[40px] text-black" value={quantity} onChange={(e)=>handleQuantityChange(e.target.value)}/>
                </div>
                <button className="my-4 p-2 border-2 rounded-lg hover:scale-[1.1] text-xl font-bold max-[1080px]:text-sm" onClick={()=>addToCart()}>Add To Cart</button>
                </div>
                <hr className=""></hr>
                <p className="flex my-6 text-lg"><p className="mr-1 text-lg text-lime-500">In Stock Online</p>- Ships Within 5-7 Business Days</p>
                <h3 className="text-2xl font-bold max-[1080px]:text-md">Description</h3>
                <p className="max-[1080px]:text-sm max-[1080px]:mb-4">{product.description}</p>
            </div>

            </div>
        </div> }
        {loading && <div className="mt-[240px]">{fastLoadingAnimation1()}</div>}
    </div>
    )
}


export default ShowProduct;