import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi";
import Breadcrumb from "../../../Breadcrumb/Breadcrumb";
import Pagination from "../../../Pagination/Pagination";
import CustomerTable from "./CustomerTable";

const Customer = () => {
  const crumbs = [
    { path: "admin-dashboard", name: "admin-dashboard" },
    { path: "admin-dashboard/customer", name: "customer" },
  ];
  return (
    <div className="p-10 w-full">
      <div className="flex justify-between pb-4">
        <h4 className="uppercase text-[1.4vw]   text-neutral font-bold">customers</h4>
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
              <HiOutlinePlus className="" /> New customers
            </button>
          </div>
        </div>
        <CustomerTable />
        <div className="flex justify-center w-full relative top-[-40px]">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Customer;
