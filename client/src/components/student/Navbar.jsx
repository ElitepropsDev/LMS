import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const isCoursesListPage = location.pathname.includes("/course-list");

  const { backendUrl, isEducator, setIsEducator, navigate, userData, token } =
    useContext(AppContext);

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate("/educator");
        return;
      }

      const { data } = await axios.get(
        backendUrl + "/api/educator/update-role",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (data.success) {
        toast.success(data.message);
        setIsEducator(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCoursesListPage ? "bg-white" : "bg-cyan-100/70"}`}
    >
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-16 lg:w-20 cursor-pointer"
      />

      {/* Desktop Navigation */}
      <div className="md:flex hidden items-center gap-5 text-gray-500">
        {userData ? (
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-green-600 text-white px-5 py-2 rounded-full"
          >
            Go to Dashboard
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {userData && <Link to="/dashboard">My Dashboard</Link>}
        </div>

        {userData ? (
          <button onClick={() => navigate("/dashboard")}>
            <img src={assets.user_icon} alt="user_icon" />
          </button>
        ) : (
          <button onClick={() => navigate("/login")}>
            <img src={assets.user_icon} alt="user_icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
