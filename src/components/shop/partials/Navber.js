import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

import { LayoutContext } from "../index";
import HeaderNavCategories from "./HeaderNavCategories";
import HeaderAuth from "./HeaderAuth";

const Navber = () => {
  const history = useHistory();
  const { data, dispatch } = useContext(LayoutContext);

  const navberToggleOpen = () =>
    data.navberHamburger
      ? dispatch({ type: "hamburgerToggle", payload: false })
      : dispatch({ type: "hamburgerToggle", payload: true });

  return (
    <Fragment>
      <nav className="fixed top-0 w-full z-20 shadow-lg lg:shadow-none bg-white">
        <div className="m-4 md:mx-12 md:my-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="lg:hidden mr-4">
              <svg
                onClick={() => navberToggleOpen()}
                className="w-8 h-8 cursor-pointer text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <div
              className="flex items-center cursor-pointer"
              onClick={() => history.push("/")}
              title="Viện dưỡng lão ABCD"
            >
              <img src="/img/logo.png" alt="Logo" style={{ height: 40 }} />
            </div>
          </div>

          <div className="hidden lg:flex flex-1 justify-center text-gray-600 items-center gap-4">
            <HeaderNavCategories />
          </div>

          <HeaderAuth />
        </div>

        <div
          className={
            data.navberHamburger && data.navberHamburger
              ? "px-1 pb-2 md:pb-0 md:px-10 lg:hidden"
              : "hidden px-1 pb-2 md:pb-0 md:px-10 lg:hidden"
          }
        >
          <div className="col-span-1 flex flex-col text-gray-600">
            <HeaderNavCategories mobile />
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navber;
