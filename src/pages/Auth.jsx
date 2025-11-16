import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const COLORS = {
  primary: "#d31b27",
  myColor: "#e64048",
  softGray: "#f6f5f3",
  mainBg: "#e6e0e0",
  whiteB: "#f2f2f2",
};

function FormInput({ label, type, value, onChange, placeholder, id }) {
  return (
    <div className="mb-4">
      <label
        htmlFor={id || type}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>

      <input
        type={type}
        id={id || type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm
        focus:outline-none focus:ring-2 focus:ring-[#e64048] focus:border-transparent
        transition-all duration-200"
      />
    </div>
  );
}

const Auth = ({ mode }) => {
  const location = useLocation();
  const isLogin = mode === "login";

  // Shared states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup-specific states
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Update mode on navigation (login <-> signup)
  useEffect(() => {
    setError(null);
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      console.log(isLogin ? "Logging in..." : "Creating account...");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#e6e0e0]">
      <div className="w-full max-w-md p-8 sm:p-10 bg-[#f6f5f3] rounded-xl shadow-2xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#d31b27]">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="text-gray-600 mt-2">
            {isLogin ? "Please sign in to continue" : "Get started with us today"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* FULL NAME — only for signup */}
          {!isLogin && (
            <FormInput
              label="Full Name"
              type="text"
              id="fullName"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}

          {/* Email */}
          <FormInput
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <FormInput
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Confirm password — only for signup */}
          {!isLogin && (
            <FormInput
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          {/* Error message */}
          {error && (
            <div className="my-4 text-center text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          {/* Forgot password — only for login */}
          {isLogin && (
            <div className="text-right mb-6">
              <a
                href="#"
                className="text-sm font-medium text-[#d31b27] hover:text-[#e64048] transition-colors duration-200"
              >
                Forgot Password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 font-bold text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5
            ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#d31b27] hover:bg-[#e64048] focus:outline-none focus:ring-2 focus:ring-[#e64048] focus:ring-offset-2"
            }`}
          >
            {isLoading ? (isLogin ? "Logging In..." : "Creating Account...") : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch Links */}
        <p className="text-center text-sm text-gray-600 mt-8">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-[#d31b27] hover:text-[#e64048] transition-colors duration-200"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-[#d31b27] hover:text-[#e64048] transition-colors duration-200"
              >
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
