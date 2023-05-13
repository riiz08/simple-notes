import heroImg from "../hero2.jpg";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Hero = () => {
  const [started, setStarted] = useState(false);
  const navigate = () => {
    setStarted(true);
  };

  if (started) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col-reverse lg:flex-row">
        <div className="md:w-[50%]">
          <h1 className="text-4xl font-bold">Notes for your daily life!</h1>
          <p className="py-6">
            Make your day easier, use notepads anytime and anywhere,
            Don't be afraid that your privacy will be disturbed, it is equipped
            with authentication features
          </p>
          <button onClick={navigate} className="btn btn-primary">
            Get Started
          </button>
        </div>
        <img src={heroImg} className="w-sm md:max-w-sm rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Hero;
