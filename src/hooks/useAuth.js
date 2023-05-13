import { useState, useEffect } from "react";
import { authenticated } from "../store";
import { useRecoilState } from "recoil";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const useAuth = () => {
  const [authen, setAuthen] = useRecoilState(authenticated);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setAuthen(true);
      }
    });
  }, []);

  return authen;
};

export default useAuth;
