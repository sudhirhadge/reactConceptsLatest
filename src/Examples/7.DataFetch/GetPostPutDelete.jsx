import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const GetPostPutDelete = () => {
  const [data, setData] = useState([]);
  const [err, setError] = useState("");
  const [postResp, setPOSTResp] = useState(false);
  const [putResp, setPUTResp] = useState(false);
  const [patchResp, setPatchResp] = useState(false);
  const [deleteResp, setDeleteResp] = useState(false);

  useEffect(() => {
    getResources();
  }, []);

  // get Request
  async function getResources() {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!resp.ok) {
        throw new Error("Network resp is not okay");
      }
      const res = await resp.json();
      // console.log(res);
      setData(res);
    } catch (err) {
      console.log("Handle Error", err);
      setError(err.message);
    }
  }

  async function handleCreateResource() {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          userId: 1,
          body: "post request body",
          title: "Post request title",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!resp.ok) {
        throw new Error("Something went wrong");
      }
      const res = await resp.json();
      console.log("post Resp", res);
      setPOSTResp(true);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function handleUpdatResource() {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: "foo",
          body: "bar",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!resp.ok) {
        throw new Error("Something went wrong");
      }
      const res = await resp.json();
      console.log("pur resp", res);
      setPUTResp(true);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function handleUpateSpecificResourceAttribute() {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        body: JSON.stringify({
          title: "swapnil",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!resp.ok) {
        throw new Error("Something went wrong");
      }
      const res = await resp.json();
      console.log("patch resp", res);
      setPatchResp(true);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function handleDeleteResource() {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      });

      if (!resp.ok) {
        throw new Error("Something went wrong");
      }
      const res = await resp.json();
      console.log("DELETE resp", res);
      setDeleteResp(true);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }
  if (err) {
    return <div>Error : {err}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  // The PUT included all of the parameters on this user, but PATCH only included the one that was being modified

  return (
    <div>
      <button onClick={handleCreateResource}>
        {" "}
        Click - Create Resource - POST{" "}
      </button>
      {postResp && "Check Console for POST resp"}
      <hr />
      <button onClick={handleUpdatResource}>
        {" "}
        Click - Update Resource - PUT{" "}
      </button>
      {putResp && "Check Console for PUT resp"}
      <hr />

      <button onClick={handleUpateSpecificResourceAttribute}>
        {" "}
        Click - Update Specific Resource Attribute - PATCH{" "}
      </button>
      {patchResp && "Check Console for PATCH resp"}
      <hr />

      <button onClick={handleDeleteResource}>
        {" "}
        Click - Deleteresource - DELETE{" "}
      </button>
      {deleteResp && "Check Console for DELETE resp"}
      <hr />

      <h1> GET request Data</h1>
      {data &&
        data.map((c) => (
          <div key={c.id}>
            {" "}
            id - {c.id} | Title : {c.title}
          </div>
        ))}
    </div>
  );
};

export default GetPostPutDelete;
