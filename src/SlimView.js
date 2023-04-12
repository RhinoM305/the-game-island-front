// you are in a <h-1/5 flex>

function SlimView({ image, name, price }) {
  return (
    <>
      <div className="flex justify-center w-1/5 m-4 bg-white">
        <img
          src={require(`./content/temp-images/${image}`)}
          className="w-auto h-auto bg-green-600 h-11/12"
        />
      </div>
      <div className="flex flex-col w-full h-full text-white">
        <p className="h-full mt-6 text-4xl ">{name}</p>
        <div className="flex justify-end w-full h-auto pr-8 text-3xl">
          <button className="mx-2">Add to cart</button>
          <button className="mx-2">WishList</button>
          <button className="mx-2 mr-24">View</button>
          <div className="text-center item-end">Price: {price}</div>
        </div>
      </div>
    </>
  );
}

export default SlimView;
