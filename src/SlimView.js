// you are in a <h-1/5 flex>
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faEye,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

function SlimView({ image, name, price }) {
  return (
    <>
      <div className="h-[60%] flex justify-center bg-white">
        <img
          src={require(`./content/temp-images/${image}`)}
          className="w-auto h-[254px] bg-green-600 object-cover"
        />
      </div>
      <div className="flex flex-col w-full h-full text-white">
        <p className="h-full mt-6 text-2xl text-center">{name}</p>
        <div className="flex w-full h-[45%] pr-8 pt-2 pb-2text-xl border-t-4 border-white">
          <button className="mx-1 text-center fa-brands fa-font-awesome w-[20%] hover:bg-white hover:text-black">
            <FontAwesomeIcon icon={faCartPlus} size="2xl" />
          </button>
          <button className="mx-1 text-center w-[20%] hover:bg-white hover:text-black">
            <FontAwesomeIcon icon={faHeart} size="2xl" />
          </button>
          <button className="mx-1 mr-auto text-center w-[20%] hover:bg-white hover:text-black">
            <FontAwesomeIcon icon={faEye} size="2xl" />
          </button>
          <div className="w-[20%] flex justify-center items-center text-xl">
            <FontAwesomeIcon
              icon={faDollarSign}
              size="xl"
              style={{ marginRight: "6px" }}
            />
            {` ${price}`}
          </div>
        </div>
      </div>
    </>
  );
}

export default SlimView;
