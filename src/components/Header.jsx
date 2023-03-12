import React from "react";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between items-center bg-blue-200">
        <div>
          <img
            src="ExH_Logo.png"
            alt="logo"
            className="width:2 cursor-pointer"
          />
        </div>
        <div>
          <ul>
            <li>About</li>
            <li>Product</li>
            <li>Company</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
