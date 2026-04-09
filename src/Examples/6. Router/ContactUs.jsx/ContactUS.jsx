import React from "react";
import { Link, Outlet } from "react-router-dom";

const ContactUS = () => {
  return (
    <div>
      ContactUS |<Link to={"enquiryForm"}> EnquiryForm </Link> |
      <Link to={"feedback"}> Feedbak </Link>
      <Outlet />
    </div>
  );
};

export default ContactUS;
