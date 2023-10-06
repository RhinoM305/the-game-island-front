import React, {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";

//backend use
import { useMutation } from "@apollo/client";
import { CREATE_CUSTOMER_ACCOUNT, CREATE_CUSTOMER_TOKEN} from "../graphQL/Mutations";

function UserCreateForm() {
    let [createForm, setCreateForm] = useState({firstName: "", lastName: "", email: "", password: ""})
    let [errorMsg, setErrorMsg] = useState(null);

    const navigate = useNavigate();

    let checkEmail = (email) => {
        let mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!mailformat.test(email)){
            alert("This is not a valid email address.")
            return false;
        }
        return true;
    }
    //password req: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number.
    let checkPassword = (password) => {
        let passwordFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/
        if(passwordFormat.test(password)){
            alert("This is not a valid password. Password must be at least 8 characters, at least one uppercase letter, one lowercase letter")
            return false;
        }
        return true;
    }

    let handleSubmit = async (event) => {
        setErrorMsg(null);
        event.preventDefault();
      
        if(!checkEmail(createForm.email)) return;
        if(!checkPassword(createForm.password)) return;
        const customerContent = await createCustomerAccount();
        //check if error happended the useffect determines when the message is displayed on the screen.
        if(customerContent.data.createCustomer.customerUserErrors.length !== 0) return;

        const tokenContent = await createCustomerToken();
        const token = tokenContent.data.getCustomerToken.loggedUser.accessToken;
        
        localStorage.setItem('thegameislandToken', token);
        
          navigate("/")
    
    }

    const variables = {
        input: createForm
    }

    const variablesForCustomerToken = {
        input: {email: createForm.email, password: createForm.password}
    }

    const [createCustomerAccount, { error, loading, data }] = useMutation(CREATE_CUSTOMER_ACCOUNT,{
        variables: variables,
      });

    const [createCustomerToken, { error1, loading1, data1 }] = useMutation(CREATE_CUSTOMER_TOKEN,{
        variables: variablesForCustomerToken,
      });
      
      useEffect(() => {
        if(error) {
            console.log("error:",error);
          }
          if(data) {
            if(data.createCustomer.customerUserErrors.length !== 0) setErrorMsg(data.createCustomer.customerUserErrors[0].message)
          }
      },[data])

      const handleKeyPress = (event) => {
        if(event.key === "Enter") handleSubmit(event);
        return;
      }

    return (
        <div className="w-full h-[80%] flex justify-center items-center flex-col">
            <form className="p-4 px-12 text-lg text-white border-2 border-white" onSubmit={(e) => handleSubmit(e)}>
                <h3 className="my-2 text-xl font-bold border-b-2 w-max">CREATE ACCOUNT</h3>
                <p>First Name</p>
                <input className="w-full pl-1 text-black" type="text" name="firstName" minLength={1} required={true} value={createForm.firstName} placeholder="first name" onChange={(e)=>setCreateForm({...createForm,firstName:e.target.value})} onKeyDown={e => handleKeyPress(e)}/>
                <p>Last Name</p>
                <input className="w-full pl-1 text-black" type="text" name="lastName" minLength={1} required={true} value={createForm.lastName} placeholder="last name" onChange={(e)=>setCreateForm({...createForm,lastName:e.target.value})} onKeyDown={e => handleKeyPress(e)}/>
                <p>Email</p>
                <input className="w-full pl-1 text-black" type="text" name="email" value={createForm.email} placeholder="example@domain.com" onChange={(e) => setCreateForm({...createForm, email:e.target.value})} required={true} onKeyDown={e => handleKeyPress(e)}/>
                <p>Password</p>
                <input className="w-full pl-1 text-black" type="text" name="password" value={createForm.password} placeholder="password" onChange={(e) => setCreateForm({...createForm, password:e.target.value})} onKeyDown={e => handleKeyPress(e)}/>
                <button className="w-full p-1 mt-4 mb-1 border-2 border-white" type="submit">Create Account</button>
            </form>
            {errorMsg && <p className="mt-3 text-red-500 text-md">{errorMsg}.</p>}
        </div>
    )
}


export default UserCreateForm