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
      <div className="w-full flex pt-12">
        <div className="w-[15%] flex flex-col ml-2">
          <h3 className="font bold text-white text-3xl">information</h3>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            About us/FAQ/Returns
          </p>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Sell Us Your Games
          </p>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Wishlist
          </p>
        </div>
        <div className="w-[15%] flex flex-col ml-2">
          <h3 className="font bold text-white text-3xl">legal</h3>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Privacy Policy
          </p>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Refund Policy
          </p>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Shipping Policy
          </p>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Terms of Service
          </p>
        </div>
        <div className="w-[15%] flex flex-col ml-2">
          <h3 className="font bold text-white text-3xl">support</h3>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Your Account
          </p>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Help
          </p>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Contact Us
          </p>
        </div>
        <div className="w-[15%] flex flex-col ml-2">
          <h3 className="font bold text-white text-3xl">stay connected</h3>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            facebook
          </p>
          <p className="text-slate-600 text-xl flex">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            instagram
          </p>
        </div>
        <div className="w-[38%] flex flex-col">
          <div className="text-slate-600 text-2xl flex my-2">
            <FontAwesomeIcon
              icon={faMapPin}
              size="2xl"
              className="mr-2 w-[45px]"
            />
            <p className="pt-2 ml-4">
              {" "}
              Address: 28 W Flagler St, Suite 709, Miami, FL 33130
            </p>
          </div>
          <div className="text-slate-600 text-2xl flex my-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2xl"
              className="mr-2 w-[45px]"
            />
            <p className="pt-2 ml-4">Email: info@thegameisland.com</p>
          </div>
          <div className="text-slate-600 text-2xl flex my-2">
            <FontAwesomeIcon
              icon={faPhone}
              size="2xl"
              className="mr-2 w-[45px]"
            />
            <p className="pt-2 ml-4">Phone: 786-353-2341</p>
          </div>
        </div>
      </div>
      <hr className="my-4 mx-8" />
      <p className="font-bold text-white w-full flex justify-center">
        @ 2023 The Game Island. All Rights To Out Do A Triple A Company
        Reserved. Designed by{" "}
        <p className="text-red-700 ml-[4px]">Ryan Moreno</p>
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
