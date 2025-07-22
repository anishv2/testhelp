"use client";
import { useState } from "react";
import Link from "next/link";
// import { navLinks } from "@/utils/constants";
import Icons from "./icons";

const MobileSidebarMenu = ({ isOpen, setOpen }) => {
  const [toggleLink, setToggleLink] = useState(false);

  return (
    <div className={`${isOpen ? 'fixed' : ''} z-[999] inset-0 bg-[var(--dark-blur)]`}>
      <div className={`fixed bg-gray-50 h-full w-[300px] sm:w-[360px] right-0 bottom-0 transform transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-[300px] sm:translate-x-[360px]"}`}>
        <div className="relative p-2 h-full bg-radial rounded-tl-4xl">
          <div className="flex items-center justify-end mb-5">
            <button
              title="close-menu"
              onClick={() => setOpen(false)}
              className="p-1.5  rounded-full cursor-pointer"
            >
              <Icons.cancel className="size-6 sm:size-8 text-gray-500" />
            </button>
          </div>

          {/* <ul className="">
            {navLinks.map((nav) =>
              nav.children ? (
                <li
                  key={nav.label}
                  className="mb-2 rounded-xl text-white transition-all ease-in duration-100"
                  onClick={() => setToggleLink(!toggleLink)}
                >
                  <span className="flex items-center p-2">
                    <span className="me-2">{nav.label}</span>
                    {toggleLink ? (
                      <Icons.chevronUp className="pt-1 size-6" />
                    ) : (
                      <Icons.chevronDown className="pt-1 size-6" />
                    )}
                  </span>

                  {toggleLink && (
                    <ul className="ms-4 me-2 ps-2 border-l border-gray-300">
                      {nav?.children?.map((ch) => (
                        <li key={ch?.id}>
                          <Link
                            href={ch.path}
                            onClick={() => setOpen(false)}
                            className={`py-1 px-2 pb-3 flex items-center text-white transition-all ease-in duration-100 hover:ps-4`}
                          >
                            {ch?.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={nav.label} className="mb-2 rounded-xl">
                  <Link
                    href={nav.path}
                    onClick={() => setOpen(false)}
                    className="p-2 inline-block w-full text-white transition-all ease-in duration-100 hover:ps-4 rounded-xl"
                  >
                    {nav.label}
                  </Link>
                </li>
              )
            )}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default MobileSidebarMenu;