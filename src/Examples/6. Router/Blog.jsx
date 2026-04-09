import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <Link to={"/"}> homePage</Link>
      <div>Blog</div>
    </div>
  );
}

export default Blog;
