import * as React from 'react';
import $ from "jquery";
import MailLogo from "../content/images/paper-plane-2563"

function Newsletter () {
    return (
        <div className="bg-retro-banner-newsletter rounded-lg flex overflow-hidden max-[1080px]:justify-center">
            <div className="text-center font-bold text-[30px] font-Rubik px-14 text-orange-500 antialiased max-[1080px]:text-[12px] max-[1080px]:px-2 ">
                <p className="bg-[#1E1E1E] rounded-2xl my-2 px-2">Sign up for newsletter! Get 10% OFF first order!</p>
                <div className="flex justify-center text-[20px] mb-2 max-[1080px]:text-[12px]">
                <input className="w-[50%] rounded-l-lg pl-2 text-black"/>
                <button className="px-2 text-black bg-orange-500 rounded-r-lg">Subscribe</button>
                </div>
            </div>
            <div className="m-3 bg-[#1E1E1E] p-3 rounded-full max-[1080px]:hidden">
                <img src={require("../content/images/icon-email.png")}/>
            </div>
        </div>
    )
}

export default Newsletter;