"use client";

import Link from "next/link";
import { ObjectRoutes } from "@/lib/constants";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function AppSidebar() {
  const pathName = usePathname();

  function isActivePath(pathname: string, menuItemHref: string): boolean {
    // Exact match for '/dashboard'
    if (pathname === menuItemHref) {
      return true;
    }
    if (menuItemHref === "/dashboard") {
      return false;
    }

    // Prefix match for '/dashboard/*'
    return pathname.startsWith(menuItemHref);
  }

  return (
    <div className="hidden h-screen overflow-hidden border-r bg-[#2f365f] text-[#b2b7ff] md:block">
      <div className="flex h-full flex-col gap-2 overflow-scroll pb-12">
        <nav className="p-8 pb-0">
          <div>
            {ObjectRoutes.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={clsx(
                  "flex h-[52px] grow items-center justify-center gap-x-2 text-sm font-medium hover:text-white md:flex-none md:justify-start md:p-2 md:px-3",
                  {
                    "text-white": isActivePath(pathName, item.href),
                  },
                )}
              >
                <item.Component className="w-6" />
                <p className="hidden md:block">{item.name}</p>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
