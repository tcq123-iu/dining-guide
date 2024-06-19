import React from "react";
import LoginFinder from "../apis/LoginFinder";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await LoginFinder.post("/", { email, password });
      navigate("/home");
      return;
    } catch (err) {
      console.log(err);
      navigate("/register");
    }
  };
  return (
    <div className="container">
      <div className="mt-5">
        <form className="form-wrapper">
          <div className="form-group w-50">
            <p className="form-input-title">Email</p>
            <input
              placeholder="email"
              className="w-100"
              name="email"
              style={{
                width: "443px",
                height: "54px",
                border: "none",
                background: "rgba(33, 33, 33, 0.08)",
                borderRadius: "4px 4px 0px 0px",
                padding: "16px 12px 14px 14px",

                flex: "none",
                order: 0,
                alignSelf: "stretch",
                flexGrow: 0,
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group w-50 mt-5">
            <p className="form-input-title">Password</p>
            <input
              placeholder="password"
              className="w-100"
              name="password"
              style={{
                width: "443px",
                height: "54px",
                border: "none",
                background: "rgba(33, 33, 33, 0.08)",
                borderRadius: "4px 4px 0px 0px",
                padding: "16px 12px 14px 14px",

                flex: "none",
                order: 0,
                alignSelf: "stretch",
                flexGrow: 0,
              }}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group w-50 d-flex justify-content-end align-items-center mt-4">
            <div className="btn-register mx-2">
              <a href="/register">Register Now?</a>
            </div>
            <button className="btn btn-success btn-login" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
