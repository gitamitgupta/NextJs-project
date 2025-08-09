"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { div } from "motion/react-client";
import Link from "next/link";
 

function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);
return(
     
<div
 className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
>
<Menu setActive={setActive} >
     <Link
          href="/"
          className="cursor-pointer text-black hover:opacity-90 dark:text-white pr-7"
        >
          Home
        </Link>
     <MenuItem setActive={setActive} active={active} item="Our Courses">
     <div className="flex flex-col space-y-4 text-sm">
       <HoveredLink href="/courses">All Coures</HoveredLink>
        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
        <HoveredLink href="/courses">Advanced Compositior</HoveredLink>
        <HoveredLink href="/courses">Song Writing</HoveredLink>
        <HoveredLink href="/courses">Music Production</HoveredLink>
        </div>
   </MenuItem>
    <Link
          href="/contact"
          className="cursor-pointer text-black hover:opacity-90 dark:text-white pl-7"
        >
        Contact Us
        </Link>
</Menu>
</div>
)
}

export default Navbar