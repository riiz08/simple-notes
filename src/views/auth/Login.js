import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { authenticated, loginWithEmail } from "../../store";
import { useRecoilState } from "recoil";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authen, setAuthen] = useRecoilState(authenticated);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //Submit login form
  const handleLogin = () => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setEmail("");
        setPassword("");
        setAuthen(true)
        
      })
      .catch((error) => {
        setLoading(false)
        alert("Email or password not valid");
      });
  };

  if (authen) {
    return <Navigate to="/dashboard" />;
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
      <h1 className="text-3xl text-white mb-4 font-bold">Login</h1>
      <div
        className="bg-slate-700/20 rounded-lg p-6 backdrop-blur-md justify-center
      items-center flex flex-col"
      >
        <div className="form-control">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="input
          input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="input my-4
          input-bordered input-primary w-full max-w-xs"
          />
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-light">
            Don't have an account ?{" "}
            <Link to="/register">
              <a
                className="underline underline-offset-4
            font-semibold"
              >
                Register here
              </a>
            </Link>
          </span>
          {loading ? (
            <button className="btn btn-sm mt-8 loading"></button>
          ) : (
            <button
              onClick={handleLogin}
              className="btn mt-8 btn-primary btn-sm"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
