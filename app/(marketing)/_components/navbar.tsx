import { Button } from "@/components/ui/button";
import React from "react";
import Logo from '@/components/logo'
import Link from "next/link";
const Navbar = () => {
  return (
    <div className=" container flex flex-row h-16 bg-white shadow-sm items-center justify-between bg-transparent w-full">
      <Logo />
      <ul className="lg:flex lg:flex-row gap-10 ">
        <li>
          <Link href="#home" className="">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="">
            About
          </Link>
        </li>
        <li>
          <Link href="#contact" className="">
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex gap-3">
        <Button variant="secondary" asChild>
          <Link href="/sign-in">Sign In</Link>
        </Button>
        <Button variant="default" asChild>
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
