"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { links } from "@/data/data";


const Navbar: React.FC = () => {
  return (
    <header className="w-screen px-12 py-4 bg-white flex items-center justify-between">
      <h1 className="text-3xl cursor-pointer">👋</h1>
      <div className="flex items-center gap-5">
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <Link key={link.id} href={link.href} passHref>
              <p className="font-bold text-blue-950">{link.label}</p>
            </Link>
          ))}
          <Button asChild className="bg-blue-950 px-7">
            <Link href="/" passHref>
              Connect
            </Link>
          </Button>
        </nav>
       
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} className="border-0 p-3">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {links.map((link) => (
                <DropdownMenuItem key={link.id} asChild>
                  <Link href={link.href} passHref>
                    <p className="font-bold text-blue-950">{link.label}</p>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button asChild className="bg-blue-950 px-5">
                  <Link href="/" passHref>
                    Connect
                  </Link>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
