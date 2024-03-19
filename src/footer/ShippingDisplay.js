import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faUmbrella,
  faStar,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

function ShippingDisplay() {
  return (
    <div className="flex justify-evenly items-center w-full text-[white] font-Rubik flex-wrap h-[20rem] mt-3 text-xs min-[1080px]:text-[20px] min-[1080px]:h-[25rem]">
      <div className=" w-[20%] h-[75%] flex flex-col bg-[#1E1E1E] border-4 border-black font-bold max-[1080px]:w-[50%] max-[1080px]:items-center max-[1080px]:h-[50%]">
        <FontAwesomeIcon icon={faShield} className="w-full h-[45%] mt-6 text-[#51A451] max-[1080px]:w-[50%] max-[1080px]:h-[35%] max-[1080px]:mt-[10px]" />
        <p className="mx-2 mt-8 text-center">
          90 DAYS WARRANTY ON ALL PRODUCTS
        </p>
      </div>
      <div className="w-[20%] h-[75%] flex flex-col bg-[#1E1E1E] border-4 border-black font-bold max-[1080px]:w-[50%] max-[1080px]:items-center max-[1080px]:h-[50%]">
        <FontAwesomeIcon icon={faTruckFast} className="w-full h-[45%] mt-6 text-[#51A451] max-[1080px]:w-[50%] max-[1080px]:h-[35%] max-[1080px]:mt-[10px]" />
        <p className="mx-2 mt-8 text-center">
          FREE US SHIPPING ON ALL ORDERS!
        </p>
      </div>
      <div className="w-[20%] h-[75%] flex flex-col bg-[#1E1E1E] border-4 border-black font-bold max-[1080px]:w-[50%] items-center max-[1080px]:h-[50%]">
        <FontAwesomeIcon icon={faStar} className="w-full h-[45%] mt-6 text-[#51A451] max-[1080px]:w-[50%] max-[1080px]:h-[35%] max-[1080px]:mt-[10px]" />
        <p className="mx-2 mt-8 text-center">100% AUTHENTIC GUARANTEED!</p>
      </div>
      <div className=" w-[20%] h-[75%] flex flex-col bg-[#1E1E1E] border-4 border-black font-bold max-[1080px]:w-[50%] items-center max-[1080px]:h-[50%]">
        <FontAwesomeIcon icon={faUmbrella} className="w-full h-[45%] mt-6 text-[#51A451] max-[1080px]:w-[50%] max-[1080px]:h-[35%] max-[1080px]:mt-[10px]" />
        <p className="mx-2 mt-8 text-center">SAFE SHOPPING GUARANTEED</p>
      </div>
    </div>
  );
}

export default ShippingDisplay;
