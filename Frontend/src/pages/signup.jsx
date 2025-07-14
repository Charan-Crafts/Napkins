import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../api";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await signupUser(form.name, form.email, form.password);
      if (res.msg && !res.msg.includes("error")) {
        setMsg("✅ Account created. Redirecting to login...");
        setTimeout(() => navigate("/signin"), 1500);
      } else {
        setMsg(res.msg || "❌ Signup failed");
      }
    } catch (err) {
      setMsg("❌ Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
      style={{
        background: "linear-gradient(135deg, #000 0%, #2d0000 100%)",
        overflow: "hidden",
        zIndex: 9999,
      }}
    >
      {/* Animated glowing red shapes for background */}
      <div style={{
        position: "absolute",
        top: "8%",
        left: "4%",
        width: 140,
        height: 140,
        background: "radial-gradient(circle, rgba(255,0,64,0.25) 60%, transparent 100%)",
        borderRadius: "50%",
        filter: "blur(12px)",
        animation: "floatRed1 7s ease-in-out infinite alternate"
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "7%",
        width: 110,
        height: 110,
        background: "radial-gradient(circle, rgba(255,0,0,0.18) 60%, transparent 100%)",
        borderRadius: "50%",
        filter: "blur(14px)",
        animation: "floatRed2 8s ease-in-out infinite alternate"
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 80,
        height: 80,
        background: "radial-gradient(circle, rgba(255,64,64,0.13) 60%, transparent 100%)",
        borderRadius: "50%",
        filter: "blur(10px)",
        animation: "floatRed3 9s ease-in-out infinite alternate"
      }} />
      <style>{`
        @keyframes floatRed1 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(30px) scale(1.08); }
        }
        @keyframes floatRed2 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-25px) scale(1.12); }
        }
        @keyframes floatRed3 {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -60%) scale(1.15); }
        }
        .bounce-in {
          animation: bounceIn 1.1s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.7) translateY(60px); }
          60% { opacity: 1; transform: scale(1.05) translateY(-10px); }
          80% { transform: scale(0.98) translateY(2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .glow-red {
          box-shadow: 0 0 16px 2px #ff003c, 0 0 32px 8px #ff003c33;
        }
        .btn-animated:hover, .btn-animated:focus {
          transform: scale(1.04);
          box-shadow: 0 0 16px 2px #ff003c, 0 0 32px 8px #ff003c33;
          background: linear-gradient(90deg, #ff003c 60%, #ff4d4f 100%) !important;
        }
        .input-animated:focus {
          border-color: #ff003c !important;
          box-shadow: 0 0 0 0.2rem rgba(255,0,60,0.25) !important;
        }
        .form-control::placeholder {
          color: #ffb3c6 !important;
          opacity: 1 !important;
        }
      `}</style>
      <div className="w-100 px-3 bounce-in" style={{ maxWidth: "420px", zIndex: 2 }}>
        <div
          className="card border-0 shadow-lg glow-red"
          style={{
            background: "rgba(0,0,0,0.92)",
            color: "#fff",
            borderRadius: "1.7rem",
            boxShadow: "0 8px 32px 0 rgba(255,0,60,0.25)",
            border: "1.5px solid #ff003c55",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="card-body p-4">
            {/* Logo/Icon */}
            <div className="d-flex justify-content-center mb-3">
              <div style={{
                width: 60,
                height: 60,
                background: "linear-gradient(135deg, #ff003c 60%, #2d0000 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 16px #ff003c55",
              }}>
                <svg width="34" height="34" fill="white" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.93 6.588-4.39 4.39a.5.5 0 0 1-.708 0l-2.39-2.39a.5.5 0 1 1 .708-.708l2.036 2.036 4.036-4.036a.5.5 0 1 1 .708.708z" /></svg>
              </div>
            </div>
            <h3 className="mb-4 text-center fw-bold" style={{ color: "#ff003c", letterSpacing: 1.5, textShadow: "0 2px 8px #ff003c55" }}>
              Create Account
            </h3>

            <form onSubmit={handleSignup} autoComplete="off">
              <input
                type="text"
                name="name"
                className="form-control mb-1 input-animated form-control-lg shadow-sm"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                style={{
                  background: "rgba(30,0,0,0.85)",
                  borderColor: "#ff003c55",
                  color: "#fff",
                  borderRadius: "0.9rem",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                }}
              />
              <small className="form-text text-muted mb-2" style={{ color: "#ffb3c6" }}>Enter your full name</small>

              <input
                type="email"
                name="email"
                className="form-control mb-1 input-animated form-control-lg shadow-sm"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                style={{
                  background: "rgba(30,0,0,0.85)",
                  borderColor: "#ff003c55",
                  color: "#fff",
                  borderRadius: "0.9rem",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                }}
              />
              <small className="form-text text-muted mb-2" style={{ color: "#ffb3c6" }}>Enter a valid email address</small>

              <input
                type="password"
                name="password"
                className="form-control mb-1 input-animated form-control-lg shadow-sm"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                required
                style={{
                  background: "rgba(30,0,0,0.85)",
                  borderColor: "#ff003c55",
                  color: "#fff",
                  borderRadius: "0.9rem",
                  transition: "box-shadow 0.2s, border-color 0.2s",
                }}
              />
              <small className="form-text text-muted mb-2" style={{ color: "#ffb3c6" }}>Password must be at least 6 characters</small>

              <button className="btn w-100 mt-2 py-2 fs-5 fw-bold d-flex align-items-center justify-content-center btn-animated"
                style={{
                  background: "linear-gradient(90deg, #ff003c 60%, #2d0000 100%)",
                  color: "white",
                  borderRadius: "0.9rem",
                  boxShadow: "0 2px 12px #ff003c55",
                  letterSpacing: 1.2,
                  border: "none",
                  transition: "background 0.2s, transform 0.1s, box-shadow 0.2s",
                }}
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm me-2" style={{ color: "#fff" }} role="status" aria-hidden="true"></span>
                )}
                {loading ? "Creating..." : "Sign Up"}
              </button>

              <p className="text-center mt-4 mb-0">
                <span style={{ color: "#ff003c", fontWeight: 500 }}>Already have an account?</span>{" "}
                <Link to="/signin" style={{ color: "#fff", fontWeight: 600, textShadow: "0 2px 8px #ff003c55" }}>
                  Sign in
                </Link>
              </p>
              <div className="text-center mt-4">
                <Link to="/" style={{ color: "#ff003c", fontWeight: 600, textDecoration: "underline", textShadow: "0 2px 8px #ff003c55", fontSize: "1.05rem" }}>
                  ← HomePage
                </Link>
              </div>

              {msg && (
                <div className="alert text-center mt-3 mb-0 py-2"
                  style={{
                    background: msg.includes("✅") ? "linear-gradient(90deg, #2d0000 60%, #238636 100%)" : "linear-gradient(90deg, #2d0000 60%, #ff003c 100%)",
                    borderRadius: "0.9rem",
                    color: msg.includes("✅") ? "#00ff99" : "#fff",
                    fontWeight: 600,
                    border: msg.includes("✅") ? "1.5px solid #00ff99" : "1.5px solid #ff003c",
                    boxShadow: msg.includes("✅") ? "0 0 12px #00ff9955" : "0 0 12px #ff003c55",
                    textShadow: msg.includes("✅") ? "0 2px 8px #00ff9955" : "0 2px 8px #ff003c55",
                  }}>
                  {msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
