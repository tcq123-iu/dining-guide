import React from "react";
import RegisterFinder from "../apis/RegisterFinder";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [username, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RegisterFinder.post("/", { email, password, username });
      navigate("/");
      return;
    } catch (err) {
      console.log(err);
      navigate("/register");
    }
  };
  return (
    <div className="container">
      <form className="form-wrapper-register">
        <div className="row mt-5 row-input-register">
          <div className="col-12">
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
          </div>
          <div className="col-12 mt-5">
            <div className="form-group w-50">
              <p className="form-input-title">Name</p>
              <input
                placeholder="name"
                className="w-100"
                name="name"
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
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row mt-5 row-input-register">
          <div className="col-12">
            <div className="form-group w-50">
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
          </div>
        </div>
        <div className="row mt-5 row-input-register">
          <div className="col-12">
            <div className="form-group w-100 d-flex justify-content-start align-items-center">
              <button
                className="btn btn-success btn-login"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
