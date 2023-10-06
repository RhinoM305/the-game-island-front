import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMapPin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="w-full pb-12 bg-black bg-opacity-80">
      <div className="flex w-full pt-12">
        <div className="w-[15%] flex flex-col ml-2">
          <h3 className="text-3xl text-white font bold">information</h3>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            About us/FAQ/Returns
          </p>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Sell Us Your Games
          </p>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Wishlist
          </p>
        </div>
        <div className="w-[15%] flex flex-col ml-2">
          <h3 className="text-3xl text-white font bold">legal</h3>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Privacy Policy
          </p>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Refund Policy
          </p>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Shipping Policy
          </p>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Terms of Service
          </p>
        </div>
        <div className="w-[15%] flex flex-col ml-2">
          <h3 className="text-3xl text-white font bold">support</h3>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Your Account
          </p>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Help
          </p>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Contact Us
          </p>
        </div>
        <div className="w-[15%] flex flex-col ml-2">
          <h3 className="text-3xl text-white font bold">stay connected</h3>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            facebook
          </p>
          <p className="flex text-xl text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            instagram
          </p>
        </div>
        <div className="w-[38%] flex flex-col">
          <div className="flex my-2 text-2xl text-[#FCFDFC]">
            <FontAwesomeIcon
              icon={faMapPin}
              size="2xl"
              className="mr-2 w-[45px] text-[#51A451]"
            />
            <p className="pt-2 ml-4">
              {" "}
              Address: 28 W Flagler St, Suite 709, Miami, FL 33130
            </p>
          </div>
          <div className="flex my-2 text-2xl text-[#FCFDFC]">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2xl"
              className="mr-2 w-[45px] text-[#51A451]"
            />
            <p className="pt-2 ml-4">Email: info@thegameisland.com</p>
          </div>
          <div className="flex my-2 text-2xl text-[#FCFDFC]">
            <FontAwesomeIcon
              icon={faPhone}
              size="2xl"
              className="mr-2 w-[45px] text-[#51A451]"
            />
            <p className="pt-2 ml-4">Phone: 786-353-2341</p>
          </div>
        </div>
      </div>
      <hr className="mx-8 my-4" />
      <p className="flex justify-center w-full font-bold text-white">
        @ 2023 The Game Island. All Rights To Out Do A Triple A Company
        Reserved. Designed by{" "}
        <p className="text-[#51A451] ml-[4px]">Ryan Moreno</p>
      </p>
      <div className="w-full h-[35px] flex justify-center items-center mt-6">
        <div className="bg-white w-[64px] mx-1 h-full p-[2px] rounded-lg border-2">
          <img
            src={require("../content/payment-images/paypal-logo_1.png")}
            className="w-full h-full"
          />
        </div>
        <div className="bg-white w-[64px] mx-1 h-full p-[2px] rounded-lg border-2">
          <img
            src={require("../content/payment-images/visa.png")}
            className="w-full h-full"
          />
        </div>
        <div className="bg-white w-[64px] mx-1 h-full p-[2px] rounded-lg border-2">
          <img
            src={require("../content/payment-images/discover.png")}
            className="w-full h-full"
          />
        </div>
        <div className="bg-white w-[64px] mx-1 h-full p-[2px] rounded-lg border-2">
          <img
            src={require("../content/payment-images/amex.png")}
            className="w-full h-full"
          />
        </div>
        <div className="bg-white w-[64px] mx-1 h-full p-[2px] rounded-lg border-2">
          <img
            src={require("../content/payment-images/apple-pay.png")}
            className="w-full h-full"
          />
        </div>
        <div className="bg-white w-[64px] mx-1 h-full p-[2px] rounded-lg border-2">
          <img
            src={require("../content/payment-images/master.png")}
            className="w-full h-full"
          />
        </div>
        <div className="bg-white w-[64px] mx-1 h-full p-[2px] rounded-lg border-2">
          <img
            src={require("../content/payment-images/card.png")}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
