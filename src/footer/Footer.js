import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMapPin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "./footer.css"
function Footer() {

  return (
    <>
          <div className="w-full bg-black bg-opacity-80 min-[1080px]:pb-12">
      <div className="flex w-full pt-12 font-Rubik max-[1080px]:flex-wrap">
        <div className="w-[15%] flex flex-col ml-2 max-[1080px]:w-[50%] max-[1080px]:ml-0">
          <h3 className="text-white font-bold mb-3 min-[1080px]:text-3xl max-[1080px]:mb-1">Information</h3>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            About us/FAQ/Returns
          </p>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Sell Us Your Games
          </p>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Wishlist
          </p>
        </div>
        <div className="w-[15%] flex flex-col ml-2 max-[1080px]:w-[50%] max-[1080px]:ml-0">
          <h3 className="text-white font-bold mb-3 min-[1080px]:text-3xl max-[1080px]:mb-1">Legal</h3>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Privacy Policy
          </p>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Refund Policy
          </p>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Shipping Policy
          </p>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Terms of Service
          </p>
        </div>
        <div className="w-[15%] flex flex-col ml-2 max-[1080px]:w-[50%] max-[1080px]:ml-0 max-[1080px]:mt-2">
          <h3 className="text-white font-bold mb-3 min-[1080px]:text-3xl max-[1080px]:mb-1">Support</h3>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Your Account
          </p>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Help
          </p>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            Contact Us
          </p>
        </div>
        <div className="w-[15%] flex flex-col ml-2 max-[1080px]:w-[50%] max-[1080px]:ml-0 max-[1080px]:mt-2">
          <h3 className="text-white font-bold mb-3 whitespace-nowrap min-[1080px]:text-3xl max-[1080px]:mb-1">Stay Connected</h3>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            facebook
          </p>
          <p className="flex text-sm text-[#FCFDFC]">
            <FontAwesomeIcon icon={faChevronRight} className="mr-1" />
            instagram
          </p>
        </div>
        <div className="w-[38%] flex flex-col ml-6 max-[1080px]:w-full max-[1080px]:ml-0">
          <div className="flex my-2 text-md text-[#FCFDFC] items-center">
            <FontAwesomeIcon
              icon={faMapPin}
              size="xl"
              className="mr-2 w-[45px] text-[#51A451] max-[1080px]:mr-0"
            />
            <p className="pt-2 ml-4 max-[1080px]:w-[90%] max-[1080px]:ml-0 max-[1080px]:pt-0">
              {" "}
              Address: 28 W Flagler St, Suite 709, Miami, FL 33130
            </p>
          </div>
          <div className="flex my-2 text-md text-[#FCFDFC]">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className="mr-2 w-[45px] text-[#51A451] max-[1080px]:mr-0"
            />
            <p className="pt-2 ml-4 max-[1080px]:w-[90%] max-[1080px]:ml-0 max-[1080px]:pt-0">Email: info@thegameisland.com</p>
          </div>
          <div className="flex my-2 text-md text-[#FCFDFC]">
            <FontAwesomeIcon
              icon={faPhone}
              size="xl"
              className="mr-2 w-[45px] text-[#51A451] max-[1080px]:mr-0"
            />
            <p className="pt-2 ml-4 max-[1080px]:w-[90%] max-[1080px]:ml-0 max-[1080px]:pt-0">Phone: 786-353-2341</p>
          </div>
        </div>
      </div>
      <hr className="mx-8 my-4" />
      <div className="flex justify-center w-full text-[11px] text-white">
        @ 2023 The Game Island. Made with {"<3"} by{" "}
        <p className="text-[#51A451] ml-[4px]">Ryan Moreno</p>
      </div>
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
    </>
  );
}

export default Footer;
