import thegameisland from "../content/images/thegameisland.png";

function NavBar() {
  return (
    <div className="z-50 h-[155px] w-full backdrop-filter bg-opacity-40 backdrop-blur-lg bg-black fixed top-0 left-0">
      <div className="flex items-center justify-between w-full h-full">
        <img src={thegameisland} className="h-full mt-2 ml-4" />
        <div className="flex mr-4 text-4xl text-white font-Titan-One">
          <div className="flex">
            <input
              className="mx-2 w-[550px] border-2 rounded-lg border-white bg-transparent font-sans pl-1"
              placeholder="Search our inventory!!"
            />
            <button
              className="w-[50px] border-2 rounded-lg border-white text-white text-md bg-transparent p-2 mr-4
          "
            >
              <i className="text-white fa fa-search"></i>
            </button>
          </div>
          <button className="mx-2">
            <i className="mr-1 fa fa-sitemap"></i>Collection
          </button>

          <button className="mx-2">
            <i className="mr-1 fa fa-user"></i>Account
          </button>
          <button className="mx-2">
            <i className="mr-1 text-white fa fa-rotate-left"></i>Recent
          </button>
          <button className="mx-2">
            <i className="mr-1 fa fa-shopping-cart"></i>Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
