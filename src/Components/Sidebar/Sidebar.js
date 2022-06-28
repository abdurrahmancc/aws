import React, { Children } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Sidebar.css";
import { FaAngleDown, FaBars, FaFile, FaHome, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdMessage, MdStorefront } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import SideNavbar from "./SideNavbar";
import Ecommerce from "../Dashboard/AdminDashboard/Ecommerce/Ecommerce";
import SidebarMenu from "./SidebarMenu";
import DashboardFooter from "../Dashboard/DashboardFooter/DashboardFooter";
import { routes } from "./SidebarRoutes";
import "./Scrollbar.css";

const Sidebar = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const theme = localStorage.getItem("themesDashboard");

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const showAnimation = {
    hidden: {
      width: "auth",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div data-theme={theme === "dark" ? "darkDashboard" : "lightDashboard"} className="flex">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "40px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 9,
          },
        }}
        className={`sidebar fixed overflow-y-scroll left-0 z-10 bg-base-100  h-screen ${
          !isOpen && "left-[-50px] hidden lg:block  lg:0"
        }`}
      >
        <div className="top-section  w-full py-4 px-3 flex items-center justify-between">
          {isOpen && (
            <motion.h1
              variants={showAnimation}
              inherit="hidden"
              animate="show"
              exit="hidden"
              className="logo pl-0 text-lg"
            >
              AWS
            </motion.h1>
          )}
          <div className="bars">
            <FaBars onClick={toggle} className="text-lg" />
          </div>
        </div>

        <section className="routes">
          {routes.map((route, index) => {
            if (route?.subItems) {
              return (
                <SidebarMenu
                  key={index}
                  route={route}
                  showAnimation={showAnimation}
                  isOpen={isOpen}
                />
              );
            }

            return (
              <NavLink
                to={route.path}
                key={index}
                activeClassName="bg-[rgb(45,51,89)] text-white "
                className={`link  flex hover:text-white hover:font-bold gap-3 py-2 px-3 no-underline hover:no-underline text-lg`}
              >
                <div className="icon mt-1">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      inherit="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text whitespace-nowrap text-sm"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <div className={`w-full bg-base-300 min-h-screen`}>
        <header className={` ease-in-out duration-500 ${!isOpen ? "lg:ml-10 " : "ml-[200px]"}`}>
          <SideNavbar
            toggle={toggle}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            toggleSideBar={toggleSideBar}
            setToggleSideBar={setToggleSideBar}
          ></SideNavbar>
        </header>
        <main
          className={`min-h-[calc(100vh-125px)] ease-in-out duration-500 ${
            !isOpen ? "lg:ml-10" : "ml-[200px]"
          }`}
        >
          {<Outlet />}
        </main>
        <footer
          className={` bg-base-200 ease-in-out duration-500  ${
            !isOpen ? "lg:ml-10 " : "ml-[200px]"
          }`}
        >
          <DashboardFooter />
        </footer>
      </div>
    </div>
  );
};

export default Sidebar;
