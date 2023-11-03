import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
import { CREATE_CUSTOMER_CART } from "../graphQL/Mutations";
import { useMutation } from "@apollo/client";
const { Overview, Orders, Wishlist } = require("./account-options");


export function Account({setLoggedIn}) {
  const navigate = useNavigate();
  const customer = JSON.parse(localStorage.getItem('thegameislandCustyInfo'));
  
  return (
    <>
      <p className="mt-4 text-3xl font-bold text-white border-b-2">
        Hello, {customer.firstName} {customer.lastName}
      </p>
    <div className="flex w-full h-full">
      <div className="flex flex-col items-start justify-start px-2 text-lg whitespace-no-wrap w-[10%]">
        <Link 
        className="text-white hover:text-[yellow]"
        to={"/account"}
        relative="path"
        >
          Account
        </Link>
        <Link
          className="text-white hover:text-[yellow]"
          to={"orders"}
          relative="path"
        >
          Orders
        </Link>
        <p
          className="text-white hover:text-[yellow]"
          onClick={() => {
            localStorage.removeItem('thegameislandCustyInfo')
            localStorage.removeItem('thegameislandToken')
            setLoggedIn(false);
            navigate("/")
          }}
        >
          Log Out
        </p>
      </div>
      <div className="w-[90%]">
        <Routes>
          <Route path={`/*`} element={<Overview />} />
          <Route path={`/orders`} element={<Orders />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export function Cart({setLoggedIn,refetch}) {
  let thegameislandCart = JSON.parse(localStorage.getItem('thegameislandCart'));
  let customer = JSON.parse(localStorage.getItem('thegameislandCustyInfo'));
  let token = localStorage.getItem('thegameislandToken');
  let [cartItems, setCartItems] = useState(thegameislandCart)

  const variables =  {
    buyerIdentity: {
      countryCode: customer.address.country === "United States" ? "US" : "CA",
      customerAccessToken: token,
      email: customer.email,
      phone: customer.phone,
    },
    lines: thegameislandCart.map((e) => {return {merchandiseId: e.product.id,quantity: e.quantity}}),
    note: "Thank you for the order!"
  }

  const [createCart, { error, loading, data }] = useMutation(CREATE_CUSTOMER_CART,{
    variables: variables,
  });

  function changeQuantity(event, index) {
    cartItems[index].quantity = Number(event.target.value);
    localStorage.setItem('thegameislandCart', JSON.stringify([...cartItems]))
  }

  function itemDelete(event, index) {
    cartItems.splice(index, 1);
    localStorage.setItem('thegameislandCart', JSON.stringify([...cartItems]));
    setCartItems([...cartItems]);
  }


  function isOdd(n) {
    return Math.abs(n % 2) == 1;
 }

 let mappedItems = [];

  for(let i = 0; i < cartItems.length; i++) {
    let backgroundColor = isOdd(i) ? "#181818" : undefined;
    let itemToPush = (
                        <tr className="text-white" style={{backgroundColor: backgroundColor}}>
                        <td className="flex justify-center items-center"><img className="w-[75px] h-[75px] m-1" src={`${cartItems[i].product.images[0]}`}/></td>
                        <td>{cartItems[i].product.title}</td>
                        <td><input className="text-black text-center w-[25%]" type="number" min={1} defaultValue={cartItems[i].quantity} onChange={(e) => changeQuantity(e,i)}></input></td>
                        <td>{cartItems[i].product.price}</td>
                        <td><FontAwesomeIcon className="text-red-600 hover:scale-[1.2]" icon={faTrash} size="lg" onClick={(e) => itemDelete(e,i)}/></td>
                      </tr>
                      )
    mappedItems.push(itemToPush)
  }

 function sumPrice() {
  let total = cartItems.reduce((acc, curr) => acc + curr.product.price, 0)
  if(total == 0) return ""
  return total.toFixed(2);
 }

 async function handleCheckout() {
  console.log("...checking out")
  let response = await createCart().catch((err) => console.log("error happended:",err));
  let checkoutUrl = response.data.createCustomerCart.checkoutUrl;


  window.location.href = checkoutUrl

  localStorage.setItem('thegameislandCart', JSON.stringify([])); 
  setCartItems([])
  refetch();

}

 let noCartItems = <div className="text-black bg-lime-300 mt-2 py-3 border-l-[10px] border-lime-700 pl-2 text-2xl rounded-md]">You do not have any cart items!</div>
 let checkoutBtn = <button className="text-white border-[1px] border-white rounded-2xl px-2 p-1 m-[5px] hover:scale-[1.1] hover:text-[#51A451]" onClick={() => handleCheckout()}>Checkout</button>

  return (
  <>
    <div className="w-full h-full p-4 overflow-y-auto">
    <h2 className="border-b-2 text-white font-bold text-3xl">Cart Items</h2>
    <table className="w-full text-center table-auto text-white">
          <thead className="w-full border-b-2 border-white">
            <tr>
              <th className="w-[10%]"></th>
              <th className="w-[65%]"></th>
              <th className="w-[10%]">Quantity</th>
              <th className="w-[10%]">Price</th>
              <th className="w-[5%]"></th>
            </tr>
          </thead>
          <tbody className="">
            {mappedItems}
          </tbody>
          <tfoot className="border-t-2 border-white">
          <th className="w-[10%]"></th>
              <th className="w-[65%]"></th>
              <th className="w-[10%]"></th>
              <th className="w-[10%]">{sumPrice()}</th>
              <th className="w-[5%]">{cartItems.length > 0 ? checkoutBtn : ""}</th>
          </tfoot>
        </table>
        {cartItems.length > 0 ? "" : noCartItems}
   </div>; 
   </>)
}
