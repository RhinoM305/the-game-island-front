import "./index.css";
import NavBar from "./nav/NavBar";
import Landing from "./landing/Landing";
import BrandDisplay from "./productMenu/BrandDisplay";
import SocialDisplay from "./social/SocialDisplay";
import ShippingDisplay from "./footer/ShippingDisplay";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <>
      <div className="wrapper">
        <div
          className="background-80s animated-clouds stars"
          style={{ "--background-height": "100vh" }}
        >
          <div className="sun"></div>
          <div
            className="grid"
            style={{
              "--grid-color": "rgba(115,59,139,0.7)",
              "--grid-size": "30px",
              "--grid-blur": "1px",
            }}
          ></div>
          <div className="road-off"></div>
          <div className="overlay"></div>
          <svg width="0" height="0">
            <filter id="filter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".01"
                numOctaves="10"
                id="fractalNoise"
              />
              <feDisplacementMap
                id="displacementMap"
                in="SourceGraphic"
                scale="120"
              />
            </filter>
            <animate
              xlinkHref="#displacementMap"
              id="animclouds1"
              begin="0; animclouds2.end"
              attributeName="scale"
              from="50"
              to="180"
              dur="3s"
              fill="freeze"
            />
            <animate
              xlinkHref="#displacementMap"
              id="animclouds2"
              begin="animclouds1.end"
              attributeName="scale"
              from="180"
              to="50"
              dur="3s"
              fill="freeze"
            />
            <animate
              xlinkHref="#fractalNoise"
              id="animclouds3"
              begin="0;animclouds4.end"
              attributeName="baseFrequency"
              from="0.03"
              to="0.01"
              dur="30s"
              fill="freeze"
            />
            <animate
              xlinkHref="#fractalNoise"
              id="animclouds4"
              begin="animclouds3.end"
              attributeName="baseFrequency"
              from="0.01"
              to="0.03"
              dur="30s"
              fill="freeze"
            />
          </svg>
        </div>
      </div>

      <NavBar />
      <Landing />
      <BrandDisplay />
      <SocialDisplay />
      <div className="w-full h-[8rem] bg-black bg-opacity-70 backdrop-filter flex whitespace-nowrap text-white">
        <img
          src={require("./content/images/trophy.png")}
          className="ml-6 my-2"
        />
        <div className="flex items-center ml-6">
          <p className="w-ful text-4xl flex">
            SIGN UP FOR OUR NEWSLETTER! GET{" "}
            <p className="font-bold mx-2 text-[yellow]">10% OFF </p> First Order
          </p>
        </div>
        <div className="flex m-auto w-full h-[35%] text-3xl text-black">
          <input className="w-[55%] ml-auto" />
          <button className="mr-auto bg-yellow-500 px-1">Subscribe</button>
        </div>
      </div>
      <ShippingDisplay />
      <Footer />
    </>
  );
}

export default Layout;
