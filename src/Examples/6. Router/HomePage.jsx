import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      HomePage - Router
      <button onClick={() => setIsLoggedIn((prev) => !prev)}>
        {" "}
        {isLoggedIn ? "LogOut" : "LogIn"}
      </button>
      <div>
        <ul>
          <li>
            {" "}
            <Link to={"/blog"}> Blog </Link>
          </li>
          <li>
            {isLoggedIn ? (
              <Link to={"/profile"}> Profile </Link>
            ) : (
              "Profile (Locked) - Protected Route"
            )}
          </li>
          <li>
            {" "}
            <Link to={"/cart"}> Cart </Link>
          </li>
          <li>
            {" "}
            <Link to={"/article"}> Article </Link>
          </li>
          <li>
            {" "}
            <Link to={"/contactUS"}> Contact </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
