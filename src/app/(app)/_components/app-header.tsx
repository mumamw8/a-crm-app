"use client";

import Link from "next/link";
import { Menu, MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ObjectRoutes } from "@/lib/constants";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import { UserButton } from "@clerk/nextjs";

function AppHeader() {
  const pathName = usePathname();

  function isActivePath(pathname: string, menuItemHref: string): boolean {
    // Exact match for '/dashboard'
    if (pathname === menuItemHref) {
      return true;
    }
    if (menuItemHref === "/dashboard") {
      return false;
    }
    return pathname.startsWith(menuItemHref);
  }
  return (
    <header className="grid h-[64px] w-full md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
      <div className="hidden items-center justify-center border-r bg-[#191e38] md:flex">
        <Link href="/" className="flex gap-2 font-semibold">
          <Logo textSizeClassName="text-lg" />
        </Link>
      </div>
      <div className="flex items-center justify-between border-b px-4 lg:px-6">
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex w-[300px] flex-col border-0 bg-[#2f365f] p-0 pt-12 text-[#b2b7ff]"
            >
              <div className="flex w-full items-center justify-center">
                <Logo textSizeClassName="text-lg" />
              </div>
              <nav className="p-8 pb-0">
                <div>
                  {ObjectRoutes.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={clsx(
                        "flex h-[58px] grow items-center gap-4 p-3 text-sm font-medium hover:text-white md:flex-none md:justify-start md:p-2 md:px-3",
                        {
                          "text-white": isActivePath(pathName, item.href),
                        },
                      )}
                    >
                      <item.Component className="w-6" />
                      <p className="">{item.name}</p>
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center gap-x-4 rounded-full bg-gray-100 px-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <Button variant="secondary" size="sm" className="rounded-full">
                  <MenuIcon className="h-4 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <UserButton />
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
