"use client";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="p-2">
      <div className="flex flex-row justify-between md:justify-around p-5 ">
        <div>LOGO</div>

        {/* desktop view menu */}
        <div className="hidden md:flex">right</div>

        <div>
          <span
            onClick={() => {
              showNav ? setShowNav(false) : setShowNav(true);
            }}
          >
            <MdMenu className="text-2xl" />
          </span>
        </div>
      </div>

      {/* mobile view menu */}
      <div className={`md:hidden ${showNav ? "" : "hidden"}`}>
        <ul className="flex flex-col">
          <Link className="mobile-nav-links" href={"/"}>
            Home
          </Link>
          <Link className="mobile-nav-links" href={"/"}>
            Products
          </Link>
          <Link className="mobile-nav-links" href={"/"}>
            About
          </Link>
          <Link className="mobile-nav-links" href={"/"}>
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}
