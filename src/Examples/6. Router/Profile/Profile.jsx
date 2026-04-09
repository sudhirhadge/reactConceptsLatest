import React from "react";
import { Route, Routes } from "react-router";
import Account from "./Account";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      Profile
      <Link to={"account"}> Account</Link>
      <Routes>
        <Route path="account" element={<Account />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
};

export default Profile;
