import Link from "next/link";
import React from "react";

const links = [
  [
    { link: "/home", name: "Home", internal: true },
    { link: "/projects", name: "Projects", internal: true },
  ],
  [
    { link: "https://github.com/camc314", name: "Github" },
    { link: "https://tiwtter.com/Cameron_C2", name: "Twitter" },
  ],
  [
    {
      link: "https://linkedin.com/in/cameron-clark-web3",
      name: "Linkedin",
    },
    { link: "mailto:cameron.clark@hey.com", name: "Email" },
  ],
];

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center px-8">
      <div className="w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16">
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <div className="grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
          {links.map((linkL, i) => (
            <div className="flex flex-col gap-y-4" key={`link-col-${i}`}>
              {linkL.map((link, i2) =>
                link.internal ? (
                  <Link href={link.link} key={`link-item-${i}-${i2}`}>
                    <a>{link.name}</a>
                  </Link>
                ) : (
                  <a href={link.link} key={`link-item-${i}-${i2}`}>
                    {link.name}
                  </a>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
