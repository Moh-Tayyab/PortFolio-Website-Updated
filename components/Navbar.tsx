"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/nav-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div>
        <BackgroundGradient />
      </div>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}>
        <Menu setActive={setActive}>
          <BackgroundGradient />
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"></MenuItem>
          </Link>

          <Link href={"/about"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="About Me"></MenuItem>
          </Link>

          <Link href={"/project"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Projects"></MenuItem>
          </Link>

          <Link href={"/skill"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Skills"></MenuItem>
          </Link>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact"></MenuItem>
          </Link>
          <BackgroundGradient />
        </Menu>
        <BackgroundGradient />
      </div>
    </>
  );
}

export default Navbar;
