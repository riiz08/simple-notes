import { useState, useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { authenticated } from "../store";
import { useRecoilState } from "recoil";

const Navbar = (props) => {
  const [isLoggedIn, setIsLogeedIn] = useRecoilState(authenticated);

  const handleClick = () => {
    signOut(auth)
      .then((res) => {
        setIsLogeedIn(false);
        console.log("success log out");
      })
      .catch((error) => {
        console.log("something wrong");
      });
    
  };

 

  return (
    <div className="w-full">
      {isLoggedIn ? (
        <div
          className="navbar fixed min-w-full top-0 z-[999999]
                bg-base-100"
        >
          <div className="navbar-start">
            <a
              className="btn btn-ghost normal-case
        text-md"
            >
              {props.email}
            </a>
          </div>
          <div className="flex navbar-end">
            <button onClick={handleClick} className="btn btn-xs btn-secondary">
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div
          className="navbar fixed min-w-full top-0 z-[999999]
                bg-base-100"
        >
          <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-md">Simple Notes</a>
          </div>
          <div className="flex w-full navbar-end">
            <a href="/login" className="mx-1 btn btn-xs btn-secondary">
              Login
            </a>
            <a href="/register" className="btn btn-xs btn-secondary">
              Register
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
