import thegameisland from "../content/images/thegameisland.png";

function NavBar() {
  return (
    <div className="z-50 h-[120px] w-full backdrop-filter bg-opacity-40 backdrop-blur-lg bg-black fixed top-0 left-0">
      <div className="flex w-full h-full justify-between items-center">
        <img src={thegameisland} className="ml-4 mt-8 h-[155px]" />
        <div className="mr-4 text-white text-3xl font-Titan-One flex">
          <div className="flex">
            <input
              className="mx-2 w-[500px] border-2 rounded-lg border-white bg-transparent font-sans pl-1"
              placeholder="Search our inventory!!"
            />
            <button
              className="w-[50px] border-2 rounded-lg border-white text-white text-md bg-transparent px-2 mr-4
          "
            >
              <i className="fa fa-search text-white"></i>
            </button>
          </div>
          <button className="mx-2">
            <i className="fa fa-sitemap mr-1"></i>Collection
          </button>

          <button className="mx-2">
            <i className="fa fa-user mr-1"></i>Account
          </button>
          <button className="mx-2">
            <i className="fa fa-rotate-left text-white mr-1"></i>Recent
          </button>
          <button className="mx-2">
            <i className="fa fa-shopping-cart mr-1"></i>Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
