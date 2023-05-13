import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import fast from "../fast.svg";
import edit from "../edit.svg";
import deleted from "../x-circle.svg";
import authenImg from "../authen.svg";
import { useState, useEffect } from "react";
import { authenticated } from "../store";
import { useRecoilState } from "recoil";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [authen, setAuthen] = useRecoilState(authenticated);

  useEffect(() => {
    setLoading(false);
    console.log(authen);
  }, []);

  if (loading) {
    return (
      <div>
        <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mx-auto">Features</h2>
        <div
          className="flex w-[80%] my-6 mix-blend-difference p-2 rounded-lg
          bg-blue-500 gap-2 items-cente"
        >
          <img src={fast} alt="fast performance" className="w-7" />
          <p>Fast performance, faster than my love for you</p>
        </div>
        <div className="flex w-[80%] mb-6 mix-blend-difference p-2 rounded-lg bg-blue-500 gap-2 items-center">
          <img src={authenImg} alt="best authentication" className="w-7" />
          <p>
            This simple notes website is also equipped with an authentication
            feature on Firebase
          </p>
        </div>
        <div className="flex w-[80%] mb-6 mix-blend-difference p-2 rounded-lg bg-blue-500 gap-2 items-center">
          <img src={edit} alt="edit your notes" className="w-7" />
          <p>Edit your notes everytime</p>
        </div>
        <div className="flex w-[80%] mb-6 mix-blend-difference p-2 rounded-lg bg-blue-500 gap-2 items-center">
          <img src={deleted} alt="best authentication" className="w-7" />
          <p>End deleted if it bothers you</p>
        </div>
      </div>
      <footer className="footer footer-center mt-6 p-4 bg-base-300 text-base-content">
        <div>
          <p>
            Copyright © 2023 - All right reserved by{" "}
            <a href="http://wa.me/6285893496647">Riiz</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
