import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdLocalShipping, MdOutlineHomeRepairService, MdPending } from "react-icons/md";

const PaidOrderTableRow = ({ paidOrder, index, setPaidDeleteModal, setStatusModal }) => {
  return (
    <>
      <tr className="hover">
        <th>{index}</th>
        <td>
          <span>{paidOrder?.userName}</span>
        </td>
        <td>
          <div>
            <div className="font-normal ">{paidOrder?.phoneNumber}</div>
            <div className="text-xs ">{paidOrder?.email}</div>
          </div>
        </td>
        <td>
          <div className="flex gap-1 bg-success w-14 text-neutral items-center px-2 py-1 rounded">
            <span>
              <FaStar className="text-xs" />
            </span>
            <span className=" text-xs ">4.4</span>
          </div>
        </td>
        <td>
          <span className="font-normal capitalize">$ {paidOrder?.totalPaid}</span>
        </td>
        <td className="flex items-center gap-2">
          <span className="font-normal capitalize">
            {paidOrder?.status ? paidOrder?.status : "pending"}
          </span>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className=" m-1">
              <span>
                <BsThreeDots className="text-lg cursor-pointer" />
              </span>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu border top-10 border-gray-700 rounded-sm shadow bg-base-100  w-40"
            >
              <li>
                <label
                  htmlFor="orderStatusModal"
                  onClick={() => setStatusModal([paidOrder, "processing"])}
                  className=""
                >
                  <span>
                    <MdPending className="text-success" />
                  </span>
                  <span>Processing</span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="orderStatusModal"
                  onClick={() => setStatusModal([paidOrder, "shipping"])}
                  class=""
                >
                  <span>
                    <MdLocalShipping className=" text-lg" />
                  </span>
                  <span>Shipping</span>
                </label>
              </li>
              <li>
                <label
                  htmlFor="orderStatusModal"
                  onClick={() => setStatusModal([paidOrder, "deliver"])}
                  className=" "
                >
                  <span>
                    <MdOutlineHomeRepairService className="  text-lg" />
                  </span>
                  <span>Deliver</span>
                </label>
              </li>
            </ul>
          </div>
        </td>
        <td>
          <span className="">$ {paidOrder?.paidDate}</span>
        </td>
        <td>
          <label htmlFor="paidOrderDelete">
            <span>
              <MdDelete
                onClick={() => setPaidDeleteModal(paidOrder)}
                className="text-error cursor-pointer text-lg relative left-4"
              />
            </span>
          </label>
        </td>
      </tr>
    </>
  );
};

export default PaidOrderTableRow;
