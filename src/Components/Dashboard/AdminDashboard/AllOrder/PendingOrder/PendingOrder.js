import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { MdDelete, MdDetails } from "react-icons/md";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
import Pagination from "../../../Pagination/Pagination";
import OrderTable from "../OrderTable";
import PendingOrderTable from "./PendingOrderTable";

const PendingOrder = () => {
  const crumbs = [
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/order-pending", name: "order-pending" },
  ];
  return (
    <div className="p-10 w-full">
      <div className="flex justify-between pb-4">
        <h4 className="uppercase text-[1.4vw]   text-neutral font-bold">pending ORDERS</h4>
        <div>
          <div className="text-sm breadcrumbs">
            <Breadcrumb crumbs={crumbs} />
          </div>
        </div>
      </div>
      <div className="bg-base-100 p-5">
        <div className="flex justify-between">
          <div>
            <form action="">
              <label className={`relative w-[250px]  md:block max-w-xs hidden `}>
                <form action="">
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-2 rounded pr-1  flex items-center pl-2"
                  >
                    <BiSearchAlt className="text-2xl text-gray-400" />
                  </button>
                  <input
                    className="placeholder:italic placeholder:text-slate-400 block bg-base-200 w-full  py-2 pl-6  pr-9 shadow-sm focus:outline-none focus:border-0 rounded-full  focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    type="text"
                    name="search"
                  />
                </form>
              </label>
            </form>
          </div>
          <div>
            <button className="btn btn-sm capitalize font-normal  text-neutral rounded-full btn-success">
              <HiOutlinePlus className="" /> add order
            </button>
          </div>
        </div>
        <PendingOrderTable />
        {/* <div className="flex justify-center w-full relative top-[-40px]">
          <Pagination />
        </div> */}
      </div>
    </div>
  );
};

export default PendingOrder;
