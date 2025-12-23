import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "./Action";
import { LayoutContext } from "../index";
import { isAdmin } from "../auth/fetchApi";

const HeaderAuth = () => {
  const history = useHistory();
  const { data, dispatch } = useContext(LayoutContext);

  const loginModalOpen = () =>
    data.loginSignupModal
      ? dispatch({ type: "loginSignupModalToggle", payload: false })
      : dispatch({ type: "loginSignupModalToggle", payload: true });

  return (
    <div className="flex items-center justify-end">
      {localStorage.getItem("jwt") ? (
        <Fragment>
          <div
            className="userDropdownBtn hover:bg-gray-200 px-2 py-2 rounded-lg relative"
            title="Logout"
          >
            <svg
              className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="userDropdown absolute right-0 mt-1 bg-gray-200 rounded">
              {!isAdmin() ? (
                <Fragment>
                  <li className="flex flex-col text-gray-700 w-48 shadow-lg">
                    <span
                      onClick={() => history.push("/user/orders")}
                      className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                    >
                      <span>My Orders</span>
                    </span>
                    <span
                      onClick={() => history.push("/user/profile")}
                      className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                    >
                      <span>My Account</span>
                    </span>
                    <span
                      onClick={() => history.push("/user/setting")}
                      className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                    >
                      <span>Setting</span>
                    </span>
                    <span
                      onClick={() => logout()}
                      className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                    >
                      <span>Logout</span>
                    </span>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className="flex flex-col text-gray-700 w-48 shadow-lg">
                    <span
                      onClick={() => history.push("/admin/dashboard")}
                      className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                    >
                      <span>Admin Panel</span>
                    </span>
                    <span
                      onClick={() => logout()}
                      className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                    >
                      <span>Logout</span>
                    </span>
                  </li>
                </Fragment>
              )}
            </div>
          </div>
        </Fragment>
      ) : (
        <div
          onClick={() => loginModalOpen()}
          className="cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg"
          title="Login"
        >
          <svg
            className="w-8 h-8 text-gray-600 hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default HeaderAuth;
