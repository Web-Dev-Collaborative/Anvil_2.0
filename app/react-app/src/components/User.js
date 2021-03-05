import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteUserFolder } from "../store/reducers/user";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  const submitDelete = (id) => {
    dispatch(deleteUserFolder(id));
  };

  return (
    <>
      <ul>
        <li>
          <strong>User Id</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
      </ul>

      <ul>
        {user.folders &&
          user.folders.map((folder) => (
            <li key={folder.id}>
              {folder.name}{" "}
              <button onClick={() => submitDelete(folder.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}
export default User;
