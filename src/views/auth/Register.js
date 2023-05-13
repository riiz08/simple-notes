import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { registerWithEmail } from "../../store";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successR, setSuccessR] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const registerClick = () => {
    setLoading(true);
    registerWithEmail(email, password)
      .then((userCredential) => {
        setEmail("");
        setPassword("");
        setSuccessR(true);
      })
      .catch((error) => {
        alert("Something wrong try again !");
        setSuccessR(false);
      });
  };

  if (successR) {
    return <Navigate to="/login" />;
  }

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
    <div
      className="bg-[url('https://www.pixelstalk.net/wp-content/uploads/2016/06/Beautiful-night-Images-hd.jpg')]
    bg-cover h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl text-white mb-4 font-bold">Register</h1>
      <div
        className="bg-slate-700/20 rounded-lg p-6 backdrop-blur-md justify-center
      items-center flex flex-col"
      >
        <div className="form-control">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="input
          input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="input my-4
          input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-light">
            Already have an account ?{" "}
            <Link to="/login">
              <a
                className="underline underline-offset-4
            font-semibold"
              >
                Login here
              </a>
            </Link>
          </span>
          <button
            onClick={registerClick}
            className="btn mt-8 btn-primary btn-sm"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
