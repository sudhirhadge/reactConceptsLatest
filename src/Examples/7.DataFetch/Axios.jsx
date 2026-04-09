import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AxiosConcept = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // handle response & error in try catch block
    getDataTryCatchBlock();

    // handle resp in function and error in catch block
    getDataThenCatchBlock().catch((err) => {
      setError(err.message); // this will properly set error messages for any wrong urls and error case
    });

    getDataThenCatchBlock().then((re) => {
      console.log("re", re); // this will come undefined as we are not returning anything for success case
      // to avoid undefined case we need to return data from function getDataThenCatchBlock
    });

    // handle resp in then block and error in catch block
    getDataThenCatchBlock2()
      .then((res) => {
        console.log("getDataThenCatchBlock2", res); // here you will get the proper response
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
    return () => {
      // do some cleanup
    };
  }, []);

  async function getDataTryCatchBlock() {
    try {
      const resp = await axios("https://jsonplaceholder.typicode.com/posts");
      console.log(resp.data);
      setData(resp.data);
      // no need to write resp.ok block here , alo no need to right json.stringify
    } catch (err) {
      setError(err.message);
    }
  }

  async function getDataThenCatchBlock() {
    const resp = await axios("https://jsonplaceholder.typicode.com/posts");
    console.log("thenCatch", resp.data);
    setData(resp.data);
    // handle error in catch block
  }

  async function getDataThenCatchBlock2() {
    const resp = await axios("https://jsonplaceholder.typicode.com/posts");
    console.log("thenCatch", resp.data);
    return resp.data;
    // handle error and resp in catch block
  }
  if (error) return <h1> {error} </h1>;
  if (!data) return <h1> Loading </h1>;

  return (
    <div>
      AxiosConcept : advantages over fetch as below
      <p>1 : No need to parse data</p>
      <p>
        2 : Http errors will go to catch block , like request failed code 404
      </p>
      <p>3 : simple implement inceptors </p>
    </div>
  );
};

export default AxiosConcept;
