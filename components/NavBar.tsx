import React from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Link from "next/link";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const linksList = [
  { title: "Home", path: "/" },
  { title: "Projects", path: "/projects" },
  { title: "Posts", path: "/blog" }
];

export function NavBar() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <div className="flex flex-col justify-center px-8">
      <div className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8">
        {linksList.map((link,i) => (
          <Link href={link.path} key={`${i}-${link.path}`}>
            <span
              className={`py-2 px-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md ${link.path == router.route ? "font-semibold" : "font-extralight"}`}
            >
              {link.title}
            </span>
          </Link>
        ))}
        <button
          onClick={() =>
            theme.setTheme(theme.resolvedTheme == "dark" ? "light" : "dark")
          }
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        >
          {theme.theme == "dark" ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
      </div>
    </div>
  );
}
