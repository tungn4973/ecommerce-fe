import React, { Fragment } from "react";
import moment from "moment";
import BlogSection from "./BlogSection";

const Footer = (props) => {
  return (
    <Fragment>
      {/* Blog section shown above footer */}
      <BlogSection />
      <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}>
        {/* Footer Bottom */}
        <div
          className="footer-bottom"
          style={{
            backgroundColor: "#222",
            color: "#ccc",
            padding: "10px 0",
            textAlign: "center",
          }}
        >
          <p style={{ margin: "0" }}>
            &copy; {moment().format("YYYY")} Magikc Commerce. Đã đăng ký bản quyền.
          </p>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
