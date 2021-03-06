import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import HartIcon from "../../Share/HartIcon";
import Rating from "../../Share/Rating/Rating";
import toast from "react-hot-toast";

const ShopAllProductsCard1 = ({ item, handleAddToCartProduct }) => {
  const navigate = useNavigate();
  const [hoveredCart, setHoveredCart] = useState("hidden");
  const [showModal, setShowModal] = useState("");

  const showCartHandler = () => {
    setHoveredCart("block");
  };

  const hideCartHandler = () => {
    setHoveredCart("hidden");
  };

  const handleAddToCart = (item) => {
    handleAddToCartProduct(item);
    // window.location.reload();
    toast.success("Add To Cart", { id: "addToCart" });
  };
  return (
    <>
      <div
        onMouseEnter={showCartHandler}
        onMouseLeave={hideCartHandler}
        className="card bg-neutral max-w-sm hover:z-10 w-full mx-auto  hover:shadow-xl hover:border hover:border-gray-300 scale-100 hover:scale-110 ease-in duration-200 "
      >
        <figure className="relative ">
          <div
            className={` badge rounded-full bg-red-500 text-neutral capitalize absolute top-3 left-3 ${
              !item?.offer && "hidden"
            }`}
          >
            {item?.offer}%
          </div>

          <div
            className={`badge badge-outline hover:bg-primary hover:text-neutral badge-primary  capitalize absolute top-3 right-3 ${
              !item?.badge && "hidden"
            }`}
          >
            {item?.badge}
          </div>
          <img
            onClick={() => navigate(`/item-details/${item?._id}`)}
            className="w-full h-[340px]"
            src={item?.images?.ImageURL1}
            alt="Shoes"
          />
        </figure>

        <div className="card-body p-4 pt-6 gap-1 relative">
          <div className={`absolute z-10 top-[-20px] right-1 w-full ${hoveredCart}`}>
            <div className="flex justify-center items-center ">
              <span
                onClick={setShowModal}
                className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary  p-2 rounded-full"
              >
                <Link to={`/item-details/${item?._id}`}>
                  <AiFillEye />
                </Link>
              </span>
              <span className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary p-2 rounded-full">
                <BiRefresh />
              </span>
              <span className="text-neutral scale-50 hover:scale-100 ease-in-out duration-200 bg-gray-500 hover:bg-primary p-2 rounded-full">
                <HartIcon />
              </span>
            </div>
          </div>
          <h2
            onClick={() => navigate(`/item-details/${item?._id}`)}
            className="card-title text-primary text-sm"
          >
            {item?.productName}
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 justify-start">
              <Rating />
              <span>{item?.review}</span>
            </div>
            <div>
              <span className="text-gray-600 text-sm">Code: {item?.productCode}</span>
            </div>
          </div>
          {item?.category == "Laptop" && (
            <div className="text-gray-600 text-xs flex flex-col gap-y-2 mt-2">
              <li title={item?.features?.processor.length >= "52" && item?.features?.processor}>
                {item?.features?.processor.length >= "52"
                  ? item?.features?.processor.slice(0, 52) + "..."
                  : item?.features?.processor}
              </li>
              <li title={item?.features?.memory.length >= "52" && item?.features?.memory}>
                {item?.features?.memory.length >= "52"
                  ? item?.features?.memory.slice(0, 52) + "..."
                  : item?.features?.memory}
              </li>
              {/* <li>{item?.features?.memory}</li> */}
              <li>{item?.features?.storage}</li>
            </div>
          )}
          {item?.category == "phone" && (
            <div className="text-gray-600 text-xs flex flex-col gap-y-2 mt-2">
              <li>{item?.phoneFeatures?.RAM}</li>
              <li>{item?.phoneFeatures?.ROM}</li>
              <li>{item?.phoneFeatures?.backCameraResolution}</li>
            </div>
          )}
          {item?.category == "watch" && (
            <div className="text-gray-600 text-xs flex flex-col gap-y-2 mt-2">
              <li>{item?.manufacturerBrand}</li>
              <li>{item?.madeIn}</li>
              <li>{item?.gender}</li>
            </div>
          )}
          {item?.category == "speaker" && (
            <div className="text-gray-600 text-xs flex flex-col gap-y-2 mt-2">
              <li>{item?.manufacturerBrand}</li>
              <li>{item?.frequencyResponse}</li>
              <li>{item?.warranty}</li>
            </div>
          )}
          {item?.category == "AC" && (
            <div className="text-gray-600 text-xs flex flex-col gap-y-2 mt-2">
              <li>{item?.manufacturerBrand}</li>
              <li>{item?.capacity}</li>
              <li>{item?.warranty}</li>
            </div>
          )}
          {item?.category == "refrigerator" && (
            <div className="text-gray-600 text-xs flex flex-col gap-y-2 mt-2">
              <li>{item?.depth}</li>
              <li>{item?.totalCapacity}</li>
              <li>{item?.color}</li>
            </div>
          )}
          {item?.category == "monitor" && (
            <div className="text-gray-600 text-xs flex flex-col gap-y-2 mt-2">
              <li>{item?.screenSize}</li>
              <li>{item?.resolution}</li>
              <li>{item?.color}</li>
            </div>
          )}
          {item?.category == "headphone" && (
            <div className="text-gray-600 text-xs flex flex-col gap-y-2 mt-2">
              <span>
                <span className="font-bold">Color:</span> {item?.color}
              </span>
              <span>
                <span className="font-bold">Brand:</span> {item?.manufacturerBrand}
              </span>
              <span>
                <span className="font-bold">Warranty:</span> {item?.warranty}
              </span>
            </div>
          )}
          {item?.category == "computer" && (
            <div className="text-gray-600 text-xs flex flex-col gap-y-2 mt-2">
              <li title={item?.processor.length >= "45" && item?.processor}>
                {item?.processor.length >= "45"
                  ? item?.processor.slice(0, 45) + "..."
                  : item?.processor}
              </li>
              <li title={item?.motherboard.length >= "45" && item?.motherboard}>
                {item?.motherboard.length >= "45"
                  ? item?.motherboard.slice(0, 45) + "..."
                  : item?.motherboard}
              </li>
              <li title={item?.storage.length >= "45" && item?.storage}>
                {item?.storage.length >= "45" ? item?.storage.slice(0, 45) + "..." : item?.storage}
              </li>
            </div>
          )}
          <div className=" relative">
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center gap-1">
                <span className="text-red-500 text-lg font-bold">
                  ${item?.price || item?.Price}
                </span>
                <span className="text-gray-500 line-through text-sm">
                  {/* ${item?.previousPrice} */}
                </span>
              </div>
              <div className="flex gap-2">
                <span
                  onClick={() => handleAddToCart(item)}
                  className="rounded-full px-2 py-2 cursor-pointer text-primary  hover:bg-primary hover:text-neutral inline-block bg-gray-300"
                >
                  <MdAddShoppingCart />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopAllProductsCard1;
