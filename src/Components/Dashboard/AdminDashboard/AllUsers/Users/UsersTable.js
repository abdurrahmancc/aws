import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete, MdDetails } from "react-icons/md";

const UsersTable = () => {
  return (
    <div className="pt-6">
      <div class="overflow-x-auto w-full pb-[6.5rem]">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
                </label>
              </th>
              <th>Name</th>
              <th>Phone / Email</th>
              <th>Address</th>
              <th>Role</th>
              <th>Joining Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="order_Table_Row" className="cursor-pointer">
            {/* <!-- row 1 --> */}
            <tr class="hover">
              <th>
                <label>
                  <input type="checkbox" class="checkbox rounded-none checkbox-xs" />
                </label>
              </th>
              <td>
                <span>holloway</span>
              </td>
              <td>
                <div>
                  <div class="font-normal ">017325-250106</div>
                  <div class="text-xs ">jeremyholloway@gmail.com</div>
                </div>
              </td>
              <td>Santiago De Los Caballeros</td>
              <td>
                <span className=" text-xs">user</span>
              </td>
              <td>
                <span class="">05 jun 2010</span>
              </td>
              <td>
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class=" m-1">
                    <span>
                      <BsThreeDots className="text-lg" />
                    </span>
                  </label>
                  <ul
                    tabindex="0"
                    class="dropdown-content menu border top-10 border-gray-700 rounded-sm shadow bg-base-100  w-40"
                  >
                    <li>
                      <div class="">
                        <span>
                          <FiEdit className="text-success" />
                        </span>
                        <span>Edit</span>
                      </div>
                    </li>
                    <li>
                      <div class=" ">
                        <span>
                          <MdDelete className="text-error text-lg" />
                        </span>
                        <span>Delete</span>
                      </div>
                    </li>
                    <li>
                      <div class=" ">
                        <span>
                          <MdDetails className=" text-white text-lg" />
                        </span>
                        <span>Details</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
          {/* <!-- foot --> */}
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
