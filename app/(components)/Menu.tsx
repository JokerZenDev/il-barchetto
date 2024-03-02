"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Menu({
  lang,
  dictHeader,
  children,
}: {
  lang: string;
  dictHeader: any;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-4 lg:gap-6">
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed left-0 right-0 top-0 z-10 h-screen flex-col items-center justify-center gap-6 bg-black lg:relative lg:flex lg:h-auto lg:flex-row lg:bg-transparent`}
      >
        {Object.keys(dictHeader).map((key: string) => (
          <a
            key={key}
            className="hover:underline"
            href={`/${lang}/${key}`}
            aria-label={dictHeader[key]}
          >
            {dictHeader[key]}
          </a>
        ))}
      </nav>
      <div className={`z-10 lg:block ${isOpen ? "block" : "hidden"}`}>
        {children}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-20 flex items-center text-2xl text-white lg:hidden"
        name="menu"
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </div>
  );
}
