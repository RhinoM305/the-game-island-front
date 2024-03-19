import $ from "jquery";
import React, { useState, useEffect } from "react";
import { UPDATE_CUSTOMER_ADDRESS,CREATE_CUSTOMER_ADDRESS } from "../graphQL/Mutations";
import { useMutation } from "@apollo/client";

function Orders() {
  let  {orders} = JSON.parse(localStorage.getItem('thegameislandCustyInfo'));

  let organizedOrders = orders.map((order) => {
    const {billingAddress,currentSubtotalPrice,currentTotalPrice,currentTotalTax,edited,financialStatus,fulfillmentStatus,lineItems,name,orderNumber,processedAt,totalShippingPrice} = order;

    const dateFormat = (date) => {
      date = new Date(date)
      const month = String(date.getUTCMonth() + 1).padStart(2, '0');
      const day = String(date.getUTCDate()).padStart(2, '0');
      const year = date.getUTCFullYear();

      return (`${month}/${day}/${year}`)
    }
    return (
      <>
      <tr className="text-white">
        <td>{name}</td>
        <td>{dateFormat(processedAt)}</td>
        <td>{financialStatus}</td>
        <td className="max-[1080px]:hidden">{fulfillmentStatus}</td>
        <td className="max-[1080px]:hidden">{lineItems.length}</td>
        <td>{currentTotalPrice}</td>
      </tr>
      </>
      
    )
  })
  return <div className="w-full text-white">
    <table className="w-full h-full text-center table-auto max-[1080px]:w-[155%]">
      <thead className="w-full border-b-2 border-white">
        <tr className="">
          <th>Order</th>
          <th>Date</th>
          <th>Payment</th>
          <th className="max-[1080px]:hidden">Fulfillment</th>
          <th className="max-[1080px]:hidden">Item amt.</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="">
      {organizedOrders}
      </tbody>
    </table>
    {orders.length == 0 && <div className="text-black bg-lime-300 mt-2 py-3 border-l-[10px] border-lime-700 pl-2 text-2xl rounded-md max-[1080px]:text-sm max-[1080px]:w-[155%]">You have not placed a order yet :(</div>}

  </div>;
}

export function Overview() {
  let custyInfo = JSON.parse(localStorage.getItem('thegameislandCustyInfo'))
  let {firstName, lastName, email} = custyInfo
  let {address1,address2,city,country,phone,province,zip,id} = custyInfo.address

  const [disabled, setDisabled] = useState(true);
  const [addressForm, setAddressForm] = useState({address1: address1, address2: address2, city: city, country: country, firstName: custyInfo.address.firstName, lastName: custyInfo.address.lastName, phone: phone, province: province, zipcode: zip, id: id });
  let [errorMsg, setErrorMsg] = useState(null);

  let token = localStorage.getItem('thegameislandToken');
  
  const updateVariables = {
    address: {address1: addressForm.address1, address2: addressForm.address2, city: addressForm.city, country: addressForm.country, firstName: addressForm.firstName, lastName: addressForm.lastName, phone: addressForm.phone, province: addressForm.province, zip: addressForm.zipcode},
    customerAccessToken: token,
    id: addressForm.id
   }

  const [updateAddress, { error, loading, data }] = useMutation(UPDATE_CUSTOMER_ADDRESS,{
    variables: updateVariables,
  });

  const createVariables = {
    address: {address1: addressForm.address1, address2: addressForm.address2, city: addressForm.city, country: addressForm.country, firstName: addressForm.firstName, lastName: addressForm.lastName, phone: addressForm.phone, province: addressForm.province, zip: addressForm.zipcode},
    customerAccessToken: token,
   }


  const [createAddress] = useMutation(CREATE_CUSTOMER_ADDRESS,{
    variables: createVariables,
  });


  let handleSubmit = async (event) => {
    setErrorMsg(null);

    event.preventDefault();
    


    if(address1 === undefined || address1 === null) {
      const createAddressResponse = await createAddress().catch((err) => console.log("error happended:",err));
      console.log(createAddressResponse)
      let updatedAddress = createAddressResponse.data.createCustomerAddress.customerAddress

    //re defining
    custyInfo = JSON.parse(localStorage.getItem('thegameislandCustyInfo'));

    localStorage.removeItem('thegameislandCustyInfo');
    //updating the address that will be stored locally;
    localStorage.setItem('thegameislandCustyInfo', JSON.stringify({...custyInfo, address: updatedAddress}))

    setDisabled(true);
    return;
  
    } else {
      const updateAddressResponse = await updateAddress().catch((err) => console.log("error happended:",err));
      let updatedAddress = updateAddressResponse.data.updateCustomerAddress.address;

    //re defining
    custyInfo = JSON.parse(localStorage.getItem('thegameislandCustyInfo'));

    localStorage.removeItem('thegameislandCustyInfo');
    //updating the address that will be stored locally;
    localStorage.setItem('thegameislandCustyInfo', JSON.stringify({...custyInfo, address: updatedAddress}))
    setDisabled(true);
    return;
    }
    
  }

  let staticAddress = 
  <div className="text-stone-400">
    <div className="flex justify-center text-lg text-white">
      <p className="mx-1">{addressForm.firstName}</p>
      <p className="mx-1">{addressForm.lastName}</p>
    </div>
    <div className="flex justify-center text-xs">
      <p className="mx-1">{addressForm.address1},</p>
      <p className="">{addressForm.city},</p>
      <p className="">{addressForm.province},</p>
    </div>
    <div className="flex justify-center text-xs">
    <p>{addressForm.country}</p>
    </div>
    <div className="flex justify-center text-xs">
      <p>{addressForm.phone}</p>
    </div>
  </div>
  let addressInputsForm = <div className="flex flex-col justify-center mx-6 overflow-hidden max-[1080px]:overflow-y-scroll max-[1080px]:mx-0 max-[1080px]:pt-[50px] max-[1080px]:pb-[5px]">
  <div className="flex justify-between max-[1080px]:justify-normal">
      <div>
          <p className="text-sm">First name:</p>
          <input className="max-[1460px]:w-[90%] pl-1 text-black addyInput" placeholder="first name" value={addressForm.firstName} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, firstName:e.target.value})} required/>
      </div>
      <div className="">
          <p className="text-sm">Last name:</p>
          <input className="max-[1460px]:w-[90%] pl-1 text-black addyInput" placeholder="last name" value={addressForm.lastName} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, lastName:e.target.value})} required/>
      </div>
  </div>
  <div className="">
    <div>
        <p className="w-full text-sm">Address 1:</p>
        <input className="w-full pl-1 text-black addyInput max-[1460px]:w-[365px]" placeholder="address1" value={addressForm.address1} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, address1: e.target.value})} required/>
    </div>
    <div>
        <p className="w-full text-sm">Address 2:</p>
        <input className="w-full pl-1 text-black addyInput max-[1460px]:w-[365px]" placeholder="address2" value={addressForm.address2 === null ? '' : ""} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, address2: e.target.value})}/>
    </div>
  </div>
  <div className="flex justify-between max-[1080px]:justify-normal">
      <div>
          <p className="text-sm">City:</p>
          <input className="max-[1460px]:w-[90%] pl-1 text-black addyInput" placeholder="city" value={addressForm.city} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, city:e.target.value})} required/>
      </div>
      <div>
          <p className="text-sm">Country:</p>
          <input className="max-[1460px]:w-[90%] pl-1 text-black addyInput" placeholder="country" value={addressForm.country} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, country:e.target.value})} required/>
      </div>
      </div>
  <div className="flex justify-between max-[1080px]:justify-normal">
      <div>
          <p className="text-sm">State:</p>
          <input className="max-[1460px]:w-[90%] pl-1 text-black addyInput" placeholder="province" value={addressForm.province} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, province:e.target.value})} required/>
      </div>
      <div>
          <p className="text-sm">Zipcode:</p>
          <input className="max-[1460px]:w-[90%] pl-1 text-black addyInput" placeholder="zipcode" value={addressForm.zipcode} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, zipcode:e.target.value})} required/>
      </div>
  </div>
    <p className="ml-2 text-sm max-[1080px]:ml-0">Phone:</p>
    <input className="pl-1 text-black addyInput max-[1460px]:w-[165px]" placeholder="phone" value={addressForm.phone} maxLength={11} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, phone:e.target.value})} required/>
  </div>

  return (
    <div className="w-full h-[90%] flex max-[1080px]:flex-col">
      <div className="w-[65%] px-6 max-[1080px]:px-0">{Orders()}</div>
      <form className="flex flex-col text-white overflow-hidden w-[35%] max-[1080px]:w-full max-[1080px]:items-center" onSubmit={(e) => handleSubmit(e)}>
    <h2 className="text-[25px] font-bold max-[1080px]:text-[20px]">Account Details:</h2>
    <p className="ml-2 text-sm">First name: {firstName}</p>
    <p className="ml-2 text-sm">Last name: {lastName}</p>
    <p className="ml-2 text-sm">Email: {email}</p>
    <h2 className="text-[25px] font-bold max-[1080px]:text-[20px]">Shipping Address:</h2>
    {disabled ? staticAddress : addressInputsForm}
    <div className="flex flex-col max-[1080px]:flex-row max-[1080px]:justify-center max-[1080px]:w-full">
    <button className="addyInput bg-[#51A451] mx-10 my-1 max-[1080px]:mx-2 max-[1080px]:w-[2s5%]  max-[1080px]:mb-4 max-[1080px]:mt-3 max-[1080px]:px-4" style={{opacity:disabled ? .50 :  1}} type="submit" disabled={disabled}>Save Address</button>
    <p className="text-center cursor-pointer bg-[#51A451] mx-10 my-1 max-[1080px]:mx-2 max-[1080px]:w-[2s5%]  max-[1080px]:mb-4 max-[1080px]:mt-3 max-[1080px]:px-4" onClick={()=>{setDisabled(false)}}>Edit Address</p>
    </div>

  </form>
    </div>
  )
}
