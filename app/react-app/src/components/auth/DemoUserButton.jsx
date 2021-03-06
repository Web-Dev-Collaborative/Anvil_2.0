import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/reducers/user";

const DemoUserButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginDemo = async (e) => {
    dispatch(login({ email: "demo@aa.io", password: "password" }));
    history.push("/");
  };

  return <button onClick={loginDemo}>Demo User</button>;
};

export default DemoUserButton;
