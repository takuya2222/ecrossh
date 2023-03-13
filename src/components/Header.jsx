import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="ehlogo.png"
            alt="logo"
            className="h-9 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/about") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/product") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/product")}
            >
              Product
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMathRoute("/company") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/company")}
            >
              Company
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
