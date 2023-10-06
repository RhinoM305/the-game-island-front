import React, {useState, useEffect}  from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function ShowProduct({product}) {
    let [currImg, setCurrImg] = useState("")

    useEffect(() => {
        setCurrImg(product.images[0])
    },[])
    return (
        <div className="mx-8 mt-8">
          <div className="flex w-full mt-8">
            <div className="flex flex-col items-center w-full">
                <div className="w-[60%] h-[550px]">
                <Zoom>
                        <img 
                          src={currImg}
                          className="w-full h-full"
                        />
                </Zoom>
                </div>
                <div className="flex justify-center w-full mt-2 text-center">
                    {product.images.map((image) => (<img className="mx-[1px] w-[75px] h-[100px] hover:scale-[1.1]" src={`${image}`} onClick={() => {setCurrImg(`${image}`)}}/>))}
                </div>
                
            </div>
            <div className="flex flex-col w-full text-white">
            <div className="mx-2">
                <h2 className="mt-10 text-3xl font-bold text-center">{product.title}</h2>
                <div className="flex justify-between">
                    <p className="ml-4 text-2xl font-bold">${product.price}</p>
                    <p className="text-sm">{product.vendor}</p>
                </div>
                <hr className=""></hr>
                <div className="flex flex-col m-2">
                <label className="font-bold">Qty.</label>
                <input type="number" className="w-[40px]"/>
                </div>
                <button className="my-4 p-2 border-2 rounded-lg hover:scale-[1.1] text-xl font-bold">Add To Cart</button>
                <hr className=""></hr>
                <p className="flex my-6 text-lg"><p className="mr-1 text-lg text-lime-500">In Stock Online</p>- Ships Within 5-7 Business Days</p>
                <h3 className="text-2xl font-bold">Description</h3>
                <p>{product.description}</p>
            </div>

            </div>
        </div> 
    </div>
    )
}


export default ShowProduct;