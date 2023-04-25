import { Routes, Route, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const { Overview, Orders, Wishlist } = require("./account-options");

export function Stock() {
  return (
    <div className="w-full h-full flex flex-wrap">
      <div className="w-[25%] h-1/2 pl-4 pt-3">
        <p className="text-white font-bold text-5xl underline">Nintendo</p>
        <p className="text-white text-3xl hover:text-[yellow]">
          Nintendo games
        </p>
        <p className="text-white text-3xl hover:text-[yellow]">
          Nintendo accessories
        </p>
        <p className="text-white text-3xl hover:text-[yellow]">
          Nintendo systems
        </p>
      </div>
      <div className="w-[25%] h-1/2 pl-4 pt-3">
        <p className="text-white font-bold text-5xl underline">SEGA</p>
        <p className="text-white text-3xl hover:text-[yellow]">SEGA games</p>
        <p className="text-white text-3xl hover:text-[yellow]">
          SEGA accessories
        </p>
        <p className="text-white text-3xl hover:text-[yellow]">SEGA systems</p>
      </div>
      <div className="w-[25%] h-1/2 pl-4 pt-3">
        <p className="text-white font-bold text-5xl underline">Xbox</p>
        <p className="text-white text-3xl hover:text-[yellow]">Xbox games</p>
        <p className="text-white text-3xl hover:text-[yellow]">
          Xbox accessories
        </p>
        <p className="text-white text-3xl hover:text-[yellow]">Xbox systems</p>
      </div>
      <div className="w-[25%] h-1/2 pl-4 pt-3">
        <p className="text-white font-bold text-5xl underline">Atari</p>
        <p className="text-white text-3xl hover:text-[yellow]">Atari games</p>
        <p className="text-white text-3xl hover:text-[yellow]">
          Atari accessories
        </p>
        <p className="text-white text-3xl hover:text-[yellow]">Atari systems</p>
      </div>
      <div className="w-[25%] h-1/2 pl-4 pt-3">
        <p className="text-white font-bold text-5xl underline">Playstation</p>
        <p className="text-white text-3xl hover:text-[yellow]">
          Playstation games
        </p>
        <p className="text-white text-3xl hover:text-[yellow]">
          Playstation accessories
        </p>
        <p className="text-white text-3xl hover:text-[yellow]">
          Playstation systems
        </p>
      </div>
      <div className="w-[25%] h-1/2 pl-4 pt-3">
        <p className="text-white font-bold text-5xl underline">Gamer Gear</p>
        <div className="flex flex-wrap">
          <p className="text-white w-1/2 text-3xl hover:text-[yellow]">
            Apparel
          </p>

          <p className="text-white w-1/2 text-3xl hover:text-[yellow]">Books</p>
          <p className="text-white w-1/2 text-3xl hover:text-[yellow]">
            Repair Parts
          </p>
          <p className="text-white w-1/2 text-3xl hover:text-[yellow]">
            Puzzles
          </p>
          <p className="text-white w-1/2 text-3xl hover:text-[yellow]">Hats</p>
          <p className="text-white w-1/2 text-3xl hover:text-[yellow]">
            DVD/Movies
          </p>
          <p className="text-white w-1/2 text-3xl hover:text-[yellow]">
            Board Games
          </p>
        </div>
      </div>
      <div className="w-[25%] h-1/2 pl-4 pt-3">
        <p className="text-white font-bold text-5xl underline">Imports</p>
        <p className="text-white text-3xl hover:text-[yellow]">Import games</p>
        <p className="text-white text-3xl hover:text-[yellow]">
          Import accessories
        </p>
        <p className="text-white text-3xl hover:text-[yellow]">
          Imports systems
        </p>
      </div>
      <div className="w-[25%] h-1/2 pl-2 text-white flex flex-col">
        <p className="text-4xl mb-4 w-[250px] text-center p-5 border-2 rounded-lg border-white hover:scale-[1.2] hover:text-[yellow] ">
          Featured <FontAwesomeIcon icon={faArrowRight} />
        </p>
        <p className="text-4xl mt-4 w-[250px] text-center p-5 border-2 rounded-lg border-white hover:scale-[1.2] hover:text-[yellow] ">
          New <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </div>
    </div>
  );
}
export function Account() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex">
      <div className="w-1/2">
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>
      <div className="w-1/2 flex flex-col items-center pt-12">
        <img
          className="shadow w-[230px] h-[45%] align-middle border-none shadow rounded-full"
          src="https://i.imgur.com/4cUF4I7.jpg"
        />

        <p className="text-white mt-4 text-3xl underline font-bold">
          Hello, Ryan Moreno
        </p>

        <p className="text-white text-2xl hover:text-[yellow]">
          Account Overview
        </p>
        <p
          className="text-white text-2xl hover:text-[yellow]"
          onClick={() => {
            navigate("/overview");
          }}
        >
          Orders
        </p>
        <p
          className="text-white text-2xl hover:text-[yellow]"
          onClick={() => {
            navigate("/orders");
          }}
        >
          Wishlist
        </p>
        <p
          className="text-white text-2xl hover:text-[yellow]"
          onClick={() => {
            navigate("/wishlist");
          }}
        >
          Log Out
        </p>
      </div>
    </div>
  );
}
export function Recent() {
  return <div className="w-full h-full"></div>;
}
export function Cart() {
  return <div className="w-full h-full">a</div>;
}
