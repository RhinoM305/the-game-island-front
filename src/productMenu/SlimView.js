// you are in a <h-1/5 flex>
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faEllipsis,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

function SlimView({ image, name, price }) {
  return (
    <div className="flex flex-col w-full h-full text-white">
      <div className="h-[50%] w-full bg-white flex justify-center items-center">
        <img className="h-full w-auto" src={image} />
      </div>
      <div className="h-[50%] w-full flex flex-col justify-center">
        <div className="h-[70%] font-white text-2xl text-center pt-4 hover:text-[yellow]">
          {name}
        </div>
        <div className="h-[30%]  flex justify-between border-t-4 border-white px-4 text-2xl">
          <div className="w-full mr-4 h-full flex items-center">
            <div className="w-[33.33%] h-full hover:bg-white flex items-center justify-center hover:text-black">
              <FontAwesomeIcon icon={faCartPlus} size="2xl" />
            </div>
            <div className="w-[33.33%] h-full hover:bg-white flex items-center justify-center hover:text-black">
              <FontAwesomeIcon icon={faHeart} size="2xl" />
            </div>
            <div className="w-[33.33%] h-full hover:bg-white flex items-center justify-center hover:text-black">
              <FontAwesomeIcon icon={faEllipsis} size="2xl" />
            </div>
          </div>
          <div className="h-full flex items-center">
            {" "}
            <FontAwesomeIcon
              icon={faDollarSign}
              size="xl"
              style={{ marginRight: "6px" }}
            />
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlimView;
