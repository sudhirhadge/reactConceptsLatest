import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FetchConcept = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
    return () => {
      // do some cleanup
    };
  }, []);

  async function getData() {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!result.ok) {
        throw new Error("There is some network issue");
      }
      const resp = await result.json();
      setData(resp);
    } catch (err) {
      setError(err.message);
    }
  }

  if (error) {
    return <h1> Error : {error} </h1>;
  }

  if (!data.length) {
    return <h1> Loading...</h1>;
  }
  return (
    <div>
      Titles are printed below :
      {data &&
        data.map((c) => (
          <div key={c.id}>
            <div> titile - {c.title}</div>
          </div>
        ))}
    </div>
  );
};

export default FetchConcept;
