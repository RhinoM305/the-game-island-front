import SlimView from "./SlimView";

function ProductDisplay({brand, products,index}) {
  products = products[index]

  const listProducts = (products) => {
    return (
      <ul className="flex flex-wrap h-full mx-2 my-2 overflow-y-scroll">
        {products.map((product) => {
          return (
            <li
              className="h-[50%] w-[24%] mx-1 my-2 border-2 border-white rounded-lg flex flex-col hover:bg-black hover:bg-opacity-90"
              id={product.id}
              onClick={() => {}}
            >
              <SlimView image={product.image} name={product.title} price={product.price} />
            </li>
          )
        })}
      </ul>
    )
  }




  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between">
        <div className="p-2 ml-8 text-6xl text-white bg-black rounded-lg backdrop-filter bg-opacity-70 backdrop-blue-lg text-bold">
          {brand}
        </div>
      </div>
      <div className="w-auto h-auto mx-8 mt-6 text-4xl text-white bg-black rounded-lg backdrop-filter bg-opacity-70 backdrop-blue-lg">
        <ul className="flex flex-wrap justify-evenly">
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Nintendo NES
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Nintendo64
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Super Nintendo
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Nintendo Switch
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Gameboy
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Gameboy Color
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Gameboy Advance GBA
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Gamecube
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            WII
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            WII U
          </li>
          <li className="p-2 px-8 mx-2 my-2 text-center hover:bg-white hover:text-black">
            Virtual Boy
          </li>
        </ul>
      </div>
      <div className="flex h-screen mx-8 mt-2 mt-6 bg-black rounded-lg backdrop-filter bg-opacity-70 backdrop-blue-lg">
        <div className="flex flex-col w-full h-full">
          <div className="flex items-center justify-between border-2 border-white rounded-lg h-14">
            <div className="ml-12 text-4xl text-white text-bold">{brand}</div>
            <div className="mr-6 text-4xl text-white text-bold">
              <button className="w-auto px-8 mx-3 hover:bg-white hover:text-black">
                Games (330)
              </button>
              <button className="w-auto px-8 mx-3 hover:bg-white hover:text-black">
                Assesories (291)
              </button>
              <button className="w-auto px-8 mx-3 hover:bg-white hover:text-black">
                Systems (22)
              </button>
            </div>
          </div>
          {products && listProducts(products)}
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
