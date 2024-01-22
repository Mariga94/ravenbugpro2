import React from "react";
import Image from "next/image";
const Logo = () => {
  return (
    <div className="">
      <Image
        src="/logo/logo.png"
        alt="Logo"
        width="150"
        height="40"
        placeholder="blur"
        blurDataURL={"/logo/logo.png"}
      />
    </div>
  );
};

export default Logo;
