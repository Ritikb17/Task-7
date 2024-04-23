import React from "react";
import { useGlobalState } from "./GlobalState";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
// import "../css/LoginSignin.css";
import User from "./User";

import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
const Nav = () => {
  const { globalVariable, addToGlobalArray, editGlobalArray } =
    useGlobalState();
  const Navigate = useNavigate();
  function gotoUser() {
    console.log("going to the user ");
    Navigate("/user");
  }
  function gotoTasks() {
    console.log("going to the user ");
    Navigate("/tasks");
  }
  function gotoTasklist() {
    console.log("going to the user ");
    Navigate("/tasklist");
  }
  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Logging out");
      })
      .catch((error) => {
        alert(error);
      });
    // saveArrayToFirestore();
  }
  return (
    <>
      <nav className="two">
        WELCOME
        <nav className="navbar bg-body-tertiary">
          <form className="container-fluid justify-content-start">
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={gotoUser}
            >
              USER
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={gotoTasks}
            >
              TASKS
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={gotoTasklist}
            >
              TASKS LIST
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={logout}
            >
              LOGOUT
            </button>
          </form>
        </nav>
      </nav>
    </>
  );
};
export default Nav;
