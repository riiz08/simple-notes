import Login from "./views/auth/Login";
import Home from "./views/Home";
import Register from "./views/auth/Register";
import Dashboard from "./views/Dashboard";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Authenticated } from "./middleware/Authenticated";
import Guest from "./middleware/Guest";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
      <Route element={<Authenticated />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route element={<Guest />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
