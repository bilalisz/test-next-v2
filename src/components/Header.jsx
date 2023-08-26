import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center bg-sky-900 px-8 py-3">
      <Link className="text-white font-bold" href="/">
        Test-App
      </Link>
      <Link className="text-sky-900 bg-white p-2 rounded-md" href="#">
        Add User
      </Link>
    </nav>
  );
};

export default Header;
