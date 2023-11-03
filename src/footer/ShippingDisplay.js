import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faUmbrella,
  faStar,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

function ShippingDisplay() {
  return (
    <div className="flex justify-evenly items-center w-full h-[25rem] mt-10 text-xl text-[white] font-Rubik">
      <div className=" w-[20%] h-[75%] flex flex-col bg-[#1E1E1E] border-4 border-black font-bold ">
        <FontAwesomeIcon icon={faShield} className="w-full h-[45%] mt-6 text-[#51A451]" />
        <p className="mx-2 mt-8 text-center">
          90 DAYS WARRANTY ON ALL PRODUCTS
        </p>
      </div>
      <div className="w-[20%] h-[75%] flex flex-col bg-[#1E1E1E] border-4 border-black font-bold ">
        <FontAwesomeIcon icon={faTruckFast} className="w-full h-[45%] mt-6 text-[#51A451]" />
        <p className="mx-2 mt-8 text-center">
          FREE US SHIPPING ON ALL ORDERS!
        </p>
      </div>
      <div className="w-[20%] h-[75%] flex flex-col bg-[#1E1E1E] border-4 border-black font-bold ">
        <FontAwesomeIcon icon={faStar} className="w-full h-[45%] mt-6 text-[#51A451]" />
        <p className="mx-2 mt-8 text-center">100% AUTHENTIC GUARANTEED!</p>
      </div>
      <div className=" w-[20%] h-[75%] flex flex-col bg-[#1E1E1E] border-4 border-black font-bold ">
        <FontAwesomeIcon icon={faUmbrella} className="w-full h-[45%] mt-6 text-[#51A451]" />
        <p className="mx-2 mt-8 text-center">SAFE SHOPPING GUARANTEED</p>
      </div>
    </div>
  );
}

export default ShippingDisplay;
