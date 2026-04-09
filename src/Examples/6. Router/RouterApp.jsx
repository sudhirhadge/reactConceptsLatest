import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Cart from "../6. Router/Chekout/Cart";
import Profile from "./Profile/Profile";
import { NoPage } from "./NoPage";
import ContactUS from "./ContactUs.jsx/ContactUS";
import EnquieryForm from "./ContactUs.jsx/EnquieryForm";
import Feedback from "./ContactUs.jsx/Feedback";

//types of route
//basic routes
//Nested Routes
//dynamic Routes
//Redirects
//Index Routes
//Lazy Routes
//Protected Routes

const RouterApp = () => {
  return (
    <div>
      This is a RouterApp
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart/*" element={<Cart />} />
          <Route path="/profile/*" element={<Profile />} />
          {/* below is no star(*) routing */}
          <Route path="/contactUS/" element={<ContactUS />}>
            {/* <Route path="/enquiryForm" element={<EnquieryForm />}></Route> this is not allowed */}
            {/* inlude outlet in child components  */}
            <Route path="enquiryForm" element={<EnquieryForm />} />
            <Route path="feedback" element={<Feedback />} />
          </Route>
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterApp;
