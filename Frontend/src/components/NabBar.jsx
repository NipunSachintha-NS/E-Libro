import React from "react";
import { NavLink } from "react-router-dom";

function NabBar() {
  const baseStyle = "block p-5 m-3 text-center text-2xl font-bold rounded";

  const activeStyle = "text-white bg-customBlue";
  const inactiveStyle = "text-white bg-customBlueTransparent";

  return (
    <div className="left flex-none bg-customLightBlue h-screen w-1/4">
      <h1 className="text-center p-10 text-4xl mb-8 text-darkBlue font-bold tracking-widest">
        Hi Nalin...!
      </h1>

      <div className="links space-y-4">
        <NavLink
          to="/book"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Books
        </NavLink>

        <NavLink
          to="/report"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Report
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Sign Out
        </NavLink>
      </div>
    </div>
  );
}

export default NabBar;
