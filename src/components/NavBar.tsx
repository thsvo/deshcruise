"use client"

import { MenuItemsData } from "@/data/MenuItemsData";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar({
  lg_screen_width,
  default_screen_width,
}: {
  lg_screen_width: string;
  default_screen_width: string;
}) {

  const router = useRouter();
  console.log(router);
  console.log(usePathname());
  console.log(MenuItemsData);

  return (
    <div className="bg-black w-screen flex justify-center">
      <nav
        className={`sm:flex ${lg_screen_width} ${default_screen_width} bg-navbar/20 text-white h-[98px] mt-[48px] rounded-4xl flex-row justify-between overflow-hidden  hidden`}
      >
        <div className="border-2 border-green-500 w-[300px] flex justify-start items-center">
          <div className="bg-carrot-500 ml-12 w-20 self-center rounded-4xl p-2 flex justify-center items-center">
            <p>Logo</p>
          </div>
        </div>
        <ul className="flex flex-row items-center text-sm font-semibold">
          <li className="pr-8">Home</li>
          <li className="pr-8">Blog</li>
          <li className="text-base">Pricing</li>
        </ul>
        <div className="border-2 border-green-400 w-[300px] flex justify-end items-center">
          <button className="bg-carrot-500  mr-12 rounded-4xl px-8 py-4 flex justify-center items-center">
            See Pricing
          </button>
        </div>
      </nav>
    </div>
  );
}
