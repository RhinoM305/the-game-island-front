import ProductDisplay from "./ProductDisplay";

function BrandDisplay() {
  return (
    <div className="w-full h-full">
      <div className="mt-16 w-full h-auto bg-black backdrop-filter bg-opacity-70 pt-6">
        <div className="flex items-center justify-between">
          <div className="w-4/5 h-full mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#e4000f]">
            <img src={require("../content/images/nintendo.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Nintendo
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#17569b]">
            <img src={require("../content/images/sega.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Sega
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#0e7a0d]">
            <img src={require("../content/images/xbox-logo.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Xbox
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#e41b23]">
            <img src={require("../content/images/atari.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Atari
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#006FCD]">
            <img src={require("../content/images/playstation.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Playstation
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-white">
            <img src={require("../content/images/gamer-gear.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Gamer Gear
            </div>
          </div>
          <div className="w-4/5 mx-2 flex justify-center items-center p-2 transition transform hover:scale-[1.1] bg-[#FFD700]">
            <img src={require("../content/images/import.png")} />
            <div className="absolute flex items-center justify-center w-full h-full text-4xl text-white transition duration-500 ease-in-out opacity-0 text-bold backdrop-filter backdrop-blur-lg hover:opacity-100">
              Import
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-12 items-center mr-8 bg-black backdrop-filter bg-opacity-70 w-screen">
        <p className="text-2xl italic text-[yellow] mx-4">
          Be the first to know about our new stock! Also view whats hot!
        </p>
        <div className="flex my-4 h-[50px] items-center justify-center mr-4 p-2 backdrop-filter bg-opacity-70 backdrop-blue-lg rounded-lg bg-black text-3xl text-bold text-white hover:bg-white hover:text-black transition transform hover:scale-[1.1]">
          <img
            src={require("../content/images/box.png")}
            className="w-auto h-[50px] mr-2"
          />
          New Stock
        </div>
        <div className="flex my-2 h-[50px] items-center justify-center  p-2 backdrop-filter bg-opacity-70 backdrop-blue-lg rounded-lg bg-black text-3xl text-bold text-white hover:bg-white hover:text-black transition transform hover:scale-[1.1]">
          <img
            src={require("../content/images/fire.png")}
            className="w-auto h-auto mr-2"
          />
          Popular
        </div>
      </div>
      <ProductDisplay />
    </div>
  );
}

export default BrandDisplay;
