import { useState, useEffect } from "react";
import { guest } from "../store";
import { useRecoilState } from "recoil";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const useGuest = () => {
  const [isGuest, setIsGuest] = useRecoilState(guest);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setIsGuest(true);
      }
    });
  }, []);

  return isGuest;
};

export default useGuest;
