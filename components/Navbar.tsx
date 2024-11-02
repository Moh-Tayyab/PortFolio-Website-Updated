"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/nav-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}>
        <Menu setActive={setActive}>
          <BackgroundGradient />
          <Link href={"#"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"></MenuItem>
          </Link>

          <Link href={"#"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Skills">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href = {'https://www.linkedin.com/in/ch-muhammad-tayyab/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base3BSAiBAKaHTWmbt%2BmZRLoLTw%3D%3D'}>Typescript Developer</HoveredLink>
                  <HoveredLink href = {'https://www.linkedin.com/in/ch-muhammad-tayyab/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSAiBAKaHTWmbt%2BmZRLoLTw%3D%3D'}>React Developer</HoveredLink>
                  <HoveredLink href = {'https://www.linkedin.com/in/ch-muhammad-tayyab/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSAiBAKaHTWmbt%2BmZRLoLTw%3D%3D'}>Next.js Developer</HoveredLink>
                  <HoveredLink href = {'https://www.linkedin.com/in/ch-muhammad-tayyab/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSAiBAKaHTWmbt%2BmZRLoLTw%3D%3D'}>UI/UX Development</HoveredLink>
                  <HoveredLink href = {'https://www.linkedin.com/in/ch-muhammad-tayyab/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSAiBAKaHTWmbt%2BmZRLoLTw%3D%3D'}>Python Developer</HoveredLink>
                  <HoveredLink href = {'https://www.linkedin.com/in/ch-muhammad-tayyab/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSAiBAKaHTWmbt%2BmZRLoLTw%3D%3D'}>Agentic AI</HoveredLink>
                </div>
              </MenuItem>
          </Link>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact"></MenuItem>
          </Link>
          <BackgroundGradient />
        </Menu>
      </div>
    </>
  );
}

export default Navbar;
