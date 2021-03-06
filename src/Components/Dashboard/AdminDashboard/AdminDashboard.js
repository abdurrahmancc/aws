import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import AdminDashboardNavbar from "./AdminDashboardNavbar/AdminDashboardNavbar";
import logo from "../../../assets/logo.png";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import Ecommerce from "./Ecommerce/Ecommerce";

const AdminDashboard = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const theme = localStorage.getItem("themesDashboard");
  const [hiddenDrawer, setHiddenDrawer] = useState(false);
  const handleHiddenDrawer = () => {
    setHiddenDrawer(!hiddenDrawer);
  };
  return (
    <section data-theme={theme === "dark" ? "darkDashboard" : "lightDashboard"} className="">
      <div className="grid grid-rows-1">
        <div className="">
          <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center bg-base-300">
              <div className="w-full">
                <AdminDashboardNavbar
                  toggleSideBar={toggleSideBar}
                  setToggleSideBar={setToggleSideBar}
                  hiddenDrawer={hiddenDrawer}
                  setHiddenDrawer={setHiddenDrawer}
                />
              </div>
              <Outlet />
              {/* <!-- Page content here --> */}
            </div>
            <div className={`${hiddenDrawer && "hidden"}`}>
              <div className="drawer-side ">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                  {/* <!-- Sidebar content here --> */}
                  <div className="flex items-center gap-10 pb-6 ">
                    <div onClick={handleHiddenDrawer} id="hidden-drawer" className="">
                      <BsArrowLeft className="text-2xl font-bold" />
                    </div>
                    <img className="w-20" src={logo} alt="" />
                  </div>
                  <h1 className="my-4 text-xs">MENU</h1>
                  <li>
                    <NavLink to={"/admin-dashboard/all-user"}>
                      <AiFillHome className="text-lg" /> Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <Ecommerce />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-1 ">
        <div className="">
          <div className="drawer drawer-mobile">
            <input id="sidebar-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
              {/* <!-- Page content here --> */}
              <div className="w-full">
                <AdminDashboardNavbar
                  toggleSideBar={toggleSideBar}
                  setToggleSideBar={setToggleSideBar}
                  hiddenDrawer={hiddenDrawer}
                  setHiddenDrawer={setHiddenDrawer}
                />
              </div>
              <Outlet />
              <label for="sidebar-2" className=" drawer-button">
                <BsArrowLeft className="text-2xl font-bold" />
              </label>
            </div>
            <div className="drawer-side">
              <label for="sidebar-2" className="drawer-overlay"></label>
              <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                <div className="flex items-center gap-10 pb-6 ">
                  <label for="sidebar-2" className=" drawer-button">
                    <BsArrowLeft className="text-2xl font-bold" />
                  </label>
                  <img className="w-20" src={logo} alt="" />
                </div>
                <h1 className="my-4 text-xs">MENU</h1>
                <li>
                  <NavLink to={"/admin-dashboard/all-user"}>
                    <AiFillHome className="text-lg" /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <Ecommerce />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
