import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faUmbrella,
  faStar,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

function ShippingDisplay() {
  return (
    <div className="flex justify-evenly items-center w-full h-[25rem] mt-10 text-4xl text-[white]">
      <div className="border-2 border-black w-[20%] h-[75%] flex flex-col bg-gradient-to-t from-blue-900 via-fuchsia-900 to-pink-700 rounded-lg border-4 border-black font-bold ">
        <FontAwesomeIcon icon={faShield} className="w-full h-[50%] mt-6" />
        <p className="w-full text-center mt-4">
          90 DAYS WARRANTY ON ALL PRODUCTS
        </p>
      </div>
      <div className="border-2 border-black w-[20%] h-[75%] flex flex-col bg-gradient-to-t from-blue-900 via-fuchsia-900 to-pink-700 rounded-lg border-4 border-black font-bold ">
        <FontAwesomeIcon icon={faTruckFast} className="w-full h-[50%] mt-6" />
        <p className="w-full text-center mt-4">
          FREE US SHIPPING ON ALL ORDERS!
        </p>
      </div>
      <div className="border-2 border-black w-[20%] h-[75%] flex flex-col bg-gradient-to-t from-blue-900 via-fuchsia-900 to-pink-700 rounded-lg border-4 border-black font-bold ">
        <FontAwesomeIcon icon={faStar} className="w-full h-[50%] mt-6" />
        <p className="w-full text-center mt-4">100% AUTHENTIC GUARANTEED!</p>
      </div>
      <div className="border-2 border-black w-[20%] h-[75%] flex flex-col bg-gradient-to-t from-blue-900 via-fuchsia-900 to-pink-700 rounded-lg border-4 border-black font-bold ">
        <FontAwesomeIcon icon={faUmbrella} className="w-full h-[50%] mt-6" />
        <p className="w-full text-center mt-4">SAFE SHOPPING GUARANTEED</p>
      </div>
    </div>
  );
}

export default ShippingDisplay;
