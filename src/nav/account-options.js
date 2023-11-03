import $ from "jquery";
import React, { useState, useEffect } from "react";
import { UPDATE_CUSTOMER_ADDRESS,CREATE_CUSTOMER_ADDRESS } from "../graphQL/Mutations";
import { useMutation } from "@apollo/client";


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

  // if(data) {
  //   console.log(data)
  // }

  // if(error) {
  //   console.log(error)
  // }



  // if(address1 === null)
  return <form className="flex flex-col text-white w-max overflow-hidden" onSubmit={(e) => handleSubmit(e)}>
    <h2 className="text-xl font-bold">Account Details</h2>
    <p className="ml-2 text-sm">First name: {firstName}</p>
    <p className="ml-2 text-sm">Last name: {lastName}</p>
    <p className="ml-2 text-sm">Email: {email}</p>
    <h2 className="text-xl font-bold">Shipping Address</h2>
    <div>
    <div className="flex">
        <div>
            <p className="ml-2 text-sm">First name:</p>
            <input className="pl-1 ml-2 text-black addyInput" placeholder="first name" value={addressForm.firstName} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, firstName:e.target.value})} required/>
        </div>
        <div>
            <p className="ml-2 text-sm">Last name:</p>
            <input className="pl-1 ml-2 text-black addyInput" placeholder="last name" value={addressForm.lastName} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, lastName:e.target.value})} required/>
        </div>
    </div>
    <div className="">
      <div>
          <p className="ml-2 text-sm">Address 1:</p>
          <input className="pl-1 ml-2 text-black addyInput w-full" placeholder="address1" value={addressForm.address1} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, address1: e.target.value})} required/>
      </div>
      <div>
          <p className="ml-2 text-sm">Address 2:</p>
          <input className="pl-1 ml-2 text-black addyInput w-full" placeholder="address2" value={addressForm.address2 === null ? '' : ""} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, address2: e.target.value})}/>
      </div>
    </div>
    <div className="flex">
        <div>
            <p className="ml-2 text-sm">City:</p>
            <input className="pl-1 ml-2 text-black addyInput" placeholder="city" value={addressForm.city} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, city:e.target.value})} required/>
        </div>
        <div>
            <p className="ml-2 text-sm">Country:</p>
            <input className="pl-1 ml-2 text-black addyInput" placeholder="country" value={addressForm.country} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, country:e.target.value})} required/>
        </div>
        </div>
    <div className="flex">
        <div>
            <p className="ml-2 text-sm">State:</p>
            <input className="pl-1 ml-2 text-black addyInput" placeholder="province" value={addressForm.province} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, province:e.target.value})} required/>
        </div>
        <div>
            <p className="ml-2 text-sm">Zipcode:</p>
            <input className="pl-1 ml-2 text-black addyInput" placeholder="zipcode" value={addressForm.zipcode} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, zipcode:e.target.value})} required/>
        </div>
    </div>
      <p className="ml-2 text-sm">Phone:</p>
      <input className="pl-1 ml-2 text-black addyInput" placeholder="phone" value={addressForm.phone} type="number" maxLength={11} disabled={disabled} onChange={(e)=>setAddressForm({...addressForm, phone:e.target.value})} required/>
    </div>
    <button className="mt-2 ml-2 addyInput bg-[#51A451]" style={{opacity:disabled ? .50 :  1}} type="submit" disabled={disabled}>Save Address</button>
    <p className="my-1 ml-2 text-center cursor-pointer bg-[#51A451]" onClick={()=>{setDisabled(false)}}>Edit Address</p>

  </form>;
}

export function Orders() {
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
      <tr className="text-white">
        <td>{name}</td>
        <td>{dateFormat(processedAt)}</td>
        <td>{financialStatus}</td>
        <td>{fulfillmentStatus}</td>
        <td>{lineItems.length}</td>
        <td>{currentTotalPrice}</td>
      </tr>
    )
  })
  return <div className="w-full text-white">
    <table className="w-full h-full text-center table-auto">
      <thead className="w-full border-b-2 border-white">
        <tr>
          <th>Order</th>
          <th>Date</th>
          <th>Payment Status</th>
          <th>Fulfillment Status</th>
          <th>Item amt.</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody className="">
      {organizedOrders}
      </tbody>
    </table>
    {orders.length == 0 && <div className="text-black bg-lime-300 mt-2 py-3 border-l-[10px] border-lime-700 pl-2 text-2xl rounded-md">You have not placed a order yet :(</div>}

  </div>;
}

