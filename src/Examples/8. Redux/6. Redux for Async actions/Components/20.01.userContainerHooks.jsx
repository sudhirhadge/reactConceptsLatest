import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../Redux";

function UserContainerHooks() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return userData.loading ? (
    <div>Loading</div>
  ) : userData.error ? (
    <>{userData.error}</>
  ) : (
    <div>
      <h2>User List</h2>
      {userData &&
        userData.users &&
        userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default UserContainerHooks;
