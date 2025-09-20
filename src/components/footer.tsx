"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { House } from "lucide-react";

export default function Footer() {
  return (
    <header className="bg-background text-foreground py-4">
      <nav className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            <House />
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
