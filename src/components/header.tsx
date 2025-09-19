"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { ShoppingCart, House } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-background text-foreground p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <House />
        </Link>

        {/* Account Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Account</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* Replace custom theme switcher with ModeToggle */}
              <ModeToggle />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <span>Localization</span>
                <select className="ml-2 bg-transparent" defaultValue="en">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/cart" className="hover:underline">
          <ShoppingCart />
        </Link>
      </nav>
    </header>
  );
}
