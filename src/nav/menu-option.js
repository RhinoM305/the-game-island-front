import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
          Account Overview
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

export function Cart() {
  return <div className="w-full h-full">a</div>;
}
