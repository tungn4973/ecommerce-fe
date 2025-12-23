import React, { Fragment, createContext } from "react";
import { Navber, Footer, CartModal, BlogSection, HeaderSection } from "../partials";
import LoginSignup from "../auth/LoginSignup";

export const LayoutContext = createContext();

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex-grow">
        <Navber />
        <HeaderSection />
        <LoginSignup />
        <CartModal />
        {/* All Children pass from here */}
        {children}
      </div>
      <BlogSection />
      <Footer />
    </Fragment>
  );
};

export default Layout;
