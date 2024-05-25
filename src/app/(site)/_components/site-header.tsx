import Logo from "@/components/logo";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-screen-xl gap-x-8 items-center">
        <Logo textColorClassName="text-blue-500" textSizeClassName="text-2xl" className="" />
        <ul className="flex gap-x-8">
          <li className="text-sm"><Link href={"/"}>Home</Link></li>
          <li className="text-sm"><Link href={"/"}>features</Link></li>
          <li className="text-sm"><Link href={"/"}>pricing</Link></li>
          <li className="text-sm"><Link href={"/"}>contact</Link></li>
        </ul>
        <div className="buttons"></div>
      </div>
    </div>
  );
}
