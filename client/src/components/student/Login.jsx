import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const Login = () => {
  const { backendUrl, navigate, loginUser } = useContext(AppContext);

  const [mode, setMode] = useState("login"); // login | register
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // =========================
  // 🔐 LOGIN (Logic Untouched)
  // =========================
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data: res } = await axios.post(backendUrl + "/api/auth/login", {
        email: data.email,
        password: data.password,
      });

      if (res.success) {
        loginUser(res.user, res.token);
        toast.success("Welcome back! 🚀");
        setTimeout(() => {
          navigate("/dashboard");
        }, 300);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // 🆕 REGISTER (Logic Untouched)
  // =========================
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data: res } = await axios.post(
        backendUrl + "/api/auth/register",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      );

      if (res.success) {
        loginUser(res.user, res.token);
        toast.success("Account created 🚀");
        navigate("/");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cyan-100 relative overflow-hidden font-sans">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="relative z-10 w-full max-w-[440px] px-6">
        {/* Glass Card */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-blue-600 tracking-tight">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              {mode === "login"
                ? "Enter your credentials to access the portal"
                : "Sign up today and start your learning journey"}
            </p>
          </div>

          <form
            onSubmit={mode === "login" ? handleLogin : handleRegister}
            className="space-y-5"
          >
            {/* Full Name Field (Register only) */}
            {mode === "register" && (
              <div className="group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full bg-white/[0.05] border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-500"
                  required
                />
              </div>
            )}

            {/* Email Field */}
            <div className="group">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                className="w-full bg-white/[0.05] border border-white/10 p-4 rounded-2xl text-black outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-500"
                required
              />
            </div>

            {/* Password Field */}
            <div className="group relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="w-full bg-white/[0.05] border border-white/10 p-4 pr-12 rounded-2xl text-black outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-gray-500"
                required
              />

              {/* Eye Icon Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                {showPassword ? (
                  /* Eye Off */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-11-7 1.07-2.41 3.07-4.47 5.5-5.88M6.7 6.7A9.96 9.96 0 0112 5c5 0 9.27 3.11 11 7a10.05 10.05 0 01-4.16 4.9M15 12a3 3 0 01-4.95 2.24M3 3l18 18"
                    />
                  </svg>
                ) : (
                  /* Eye */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.636 2.04-1.99 3.84-3.85 5.19M15.536 15.536A4.978 4.978 0 0112 17c-2.21 0-4-1.79-4-4 0-.64.15-1.25.414-1.78"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70"
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>
                    {mode === "login" ? "Login to Portal" : "Get Started Now"}
                  </span>
                )}
              </div>
            </button>
          </form>

          {/* Footer Toggle */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              {mode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
              <button
                onClick={() => setMode(mode === "login" ? "register" : "login")}
                className="ml-2 text-blue-400 font-bold hover:text-blue-300 transition-colors underline underline-offset-4"
              >
                {mode === "login" ? "Sign Up" : "Log In"}
              </button>
            </p>
          </div>
        </div>

        {/* Security Badge */}
        <p className="text-center mt-8 text-gray-600 text-[11px] uppercase tracking-[0.2em]">
          Protected by Secure End-to-End Encryption
        </p>
      </div>
    </div>
  );
};

export default Login;
