import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getPosts } from "./graphqlQuery";

const GraphqlCall = () => {
  const [data, setData] = useState([]);

  console.log(data);
  useEffect(() => {
    async function getData() {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        getPosts()
      );
      console.log(resp.data);
      // setData(resp.data);
    }

    getData();
    return () => {
      // do some cleanup
    };
  }, []);
  return <div>GraphqlCall</div>;
};

export default GraphqlCall;
