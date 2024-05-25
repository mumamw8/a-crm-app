"use client";

import Link from "next/link";
import { CircleUser, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ObjectRoutes } from "@/lib/constants";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";

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
              className="flex flex-col bg-[#2f365f] w-[300px] border-0 p-0 pt-12 text-[#b2b7ff]"
            >
              <div className="w-full flex justify-center items-center">
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
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
      </div>
    </header>
  );
  return (
    <header className="bg-muted/40 flex h-[64px] items-center gap-4 border-b px-4 lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-0 pt-12">
          <nav className="">
            {ObjectRoutes.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={clsx(
                  "flex h-[58px] grow items-center gap-4 border-blue-500 p-3 text-sm font-medium hover:border-r-4  hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    "border-r-4 border-blue-500 bg-sky-100 text-blue-500":
                      isActivePath(pathName, item.href),
                  },
                )}
              >
                <item.Component className="w-6" />
                <p className="">{item.name}</p>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search products..."
              className="bg-background w-full appearance-none pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
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
    </header>
  );
}

export default AppHeader;
