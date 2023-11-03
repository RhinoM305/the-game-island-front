import React, {useState,useEffect} from 'react';
import NavBar from '../nav/NavBar';
import { Link,Routes, Route, useNavigate } from "react-router-dom";
import UserCreateForm from "./UserCreateForm.js"

//backend use
import { useMutation,useQuery } from "@apollo/client";
import { CREATE_CUSTOMER_TOKEN } from "../graphQL/Mutations";

function LoginFrom() {
    let [loginForm, setLoginForm] = useState({email: "", password: ""})
    let [errorMsg, setErrorMsg] = useState(null);

    const navigate = useNavigate();

    const variablesForCustomerToken = {
        input: {email: loginForm.email, password: loginForm.password}
    }
    const [createCustomerToken, { error, loading, data }] = useMutation(CREATE_CUSTOMER_TOKEN,{
        variables: variablesForCustomerToken,
      });
    
    let handleSubmit = async (event) => {
        setErrorMsg(null);
        event.preventDefault();

        const tokenContent = await createCustomerToken();
        if(tokenContent.data.getCustomerToken.customerUserErrors.length !== 0) return;
        const token = tokenContent.data.getCustomerToken.loggedUser.accessToken;
        
        localStorage.setItem('thegameislandToken', token);
        console.log(localStorage.getItem('thegameislandCart'))
        if(localStorage.getItem('thegameislandCart') === null) localStorage.setItem('thegameislandCart', JSON.stringify([])); 
        localStorage.setItem('thegameislandHasLoggedIn', true);
          navigate("/")
    
    }

    useEffect(() => {
        if(error) {
            console.log("error:",error);
          }
          if(data) {
            if(data.getCustomerToken.customerUserErrors.length !== 0) {
                if(data.getCustomerToken.customerUserErrors[0].message === 'Unidentified customer') {
                    setErrorMsg("Username/Password mismatch, please try again.");
                } else setErrorMsg("Something went wrong, please try again later.");
            }
          }
      },[data])
    
    const login = (
        <div className="flex flex-col items-center justify-center w-full h-3/4">
            <form className="flex flex-col p-8 text-white border-2 border-[#51A451] w-1/5" onSubmit={(e) => handleSubmit(e)}>
                    <div className="flex mb-4 items-end">
                        <h3 className="text-[27px] font-bold border-b-2 border-[#51A451] w-max">Login</h3>
                        {localStorage.getItem('thegameislandHasLoggedIn') == "true" ? <p className='text-[27px] ml-1'>, welcome back!</p> : ""}
                    </div>
                <p>Email:</p>
                <input className="w-full text-black" type="text" name="email" onChange={(e) => setLoginForm({...loginForm,email:e.target.value})} required={true}/>
                <p className="mt-2">Password:</p>
                <input className="w-full text-black" type="password" name="password" onChange={(e) => setLoginForm({...loginForm,password:e.target.value})} required={true}/>
                <button className="w-full p-1 mt-4 mb-1 border-2 border-white" type="submit">Login</button>
                <p className="flex text-sm justify-center">Don't have an account? <Link to={"/loginForm/userCreate"}><p className=" ml-2 hover:scale-[1.1] text-[#51A451]">Sign up</p></Link></p>
            </form>
            {errorMsg && <p className="mt-3 text-red-500 text-md">{errorMsg}</p>}
        </div>)

    return (
        <>
           <div className="w-screen h-screen">
           <NavBar />
            <Routes>
                <Route path="/userCreate" element={<UserCreateForm />}/>
                <Route path="/" element={login}/>
            </Routes>
           </div>
        </>)
}

export default LoginFrom;