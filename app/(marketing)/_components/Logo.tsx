import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/notion.svg"
        alt="Logo"
        height="30"
        width="30"
        className="dark:hidden"
      />
      <Image
        src="/notion-dark.svg"
        alt="Logo"
        height="30"
        width="30"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", fonts.className)}>Notionify</p>
    </div>
  );
};

export default Logo;
